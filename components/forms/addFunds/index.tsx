import { useContext } from "react"
import { FormProvider, useForm } from "react-hook-form"

import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import Input from "../../input"
import { LanguageContext } from "../../../hoc/languageProvider"
import { addFunds } from "../../../services/user.service"
import { ToasterContext } from "../../../hoc/toasterProvider"
import { MainContainer } from "./addFunds.style"

const AddFundsForm = ({ closeCallback }: any) => {

    const { localString } = useContext(LanguageContext)
    const { showToaster } = useContext(ToasterContext)

    const methods = useForm<any>({
        defaultValues: {
            amount: ""
        },
    });
    const { handleSubmit, reset } = methods;

    const onSubmit = async (amount: any) => {
        try {
            const response = await addFunds(amount)
            showToaster(response.message)
            closeCallback()
            reset({
                amount: "",
            });
        } catch (e: any) {
            console.log(e)
        }
    };



    return (
        <MainContainer>
            <Box>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            name="amount"
                            label={localString["amount"]} fullWidth />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="button"
                        >
                            {localString["add"]}
                        </Button>
                    </form>
                </FormProvider>
            </Box>
        </MainContainer>
    )
}
export default AddFundsForm