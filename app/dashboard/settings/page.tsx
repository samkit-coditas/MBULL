"use client";

import { useContext, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import EditIcon from "@mui/icons-material/Edit";

import Input from "../../../components/input";

import { LanguageContext } from "../../../hoc/languageProvider";

import { getProfileData } from "../../../services/user.service";
import axiosInstance from "../../../services/axios.instance";

import { MainContainer } from "./accountPage.style";
import AccountPageSkeleton from "./accountPageSkeleton";

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>({});

  const { localString } = useContext(LanguageContext);
  const [isEditing, setIsEditing] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string()
      .email(localString["invalid-email-message"])
      .required(localString["email-required-message"]),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const methods = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    },
  });

  useEffect(() => {
    showProfileData();
  }, []);

  useEffect(() => {
    reset({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  }, [isLoading]);

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const response = await axiosInstance.put("user/update", data);
    } catch (e: any) {
      console.log(e);
    }
  };

  const onCancel = () => {
    reset({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  };

  const showProfileData = async () => {
    try {
      const response = await getProfileData();
      if (response) {
        setUser({
          name: response?.name,
          email: response?.email,
          phoneNumber: response?.phoneNumber,
        });
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    showProfileData();
  }, []);

  useEffect(() => {
    reset({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  }, [isLoading]);

  return (
    <MainContainer>
      {isLoading ? (
        <AccountPageSkeleton />
      ) : (
        <>
          <Box className="header">
            <Typography
              component="h1"
              variant="h2"
              sx={{ marginBottom: "1rem" }}
            >
              {localString["personal-details"]}
            </Typography>
            {isEditing ? null : (
              <Box>
                <IconButton onClick={() => setIsEditing(true)}>
                  <EditIcon />
                </IconButton>
              </Box>
            )}
          </Box>
          <Box>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  disabled={!isEditing}
                  name="name"
                  className="input inputName"
                />
                <Box className="emailAndPhoneNumberContainer">
                  <Input disabled={!isEditing} name="email" className="input" />
                  <Input
                    disabled={!isEditing}
                    name="phoneNumber"
                    className="input"
                  />
                </Box>
                {isEditing ? (
                  <Box className="actionsContainer">
                    <Button
                      onClick={onCancel}
                      variant="contained"
                      className="button"
                      size="small"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      className="button"
                      size="small"
                    >
                      Save
                    </Button>
                  </Box>
                ) : null}
              </form>
            </FormProvider>
          </Box>
        </>
      )}
    </MainContainer>
  );
};

export default Page;
