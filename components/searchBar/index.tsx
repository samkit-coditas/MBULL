import { useContext, useState } from "react";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import SearchTwoTone from "@mui/icons-material/SearchTwoTone";
import ClearIcon from "@mui/icons-material/Clear";

import { ISeacrhBarProps } from "./searchBar.types";
import { LanguageContext } from "../../hoc/languageProvider";

const SearchBar = ({ handleSearch }: ISeacrhBarProps) => {
  const [value, setValue] = useState("");

  const { localString } = useContext(LanguageContext);
  return (
    <>
      <TextField
        fullWidth
        variant="standard"
        placeholder={localString["search"] || ""}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleSearch(e.target.value as string);
        }}
        InputProps={
          value !== ""
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setValue("");
                        handleSearch("");
                      }}
                    >
                      <ClearIcon color="warning" />
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : {
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchTwoTone color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }
        }
      />
    </>
  );
};

export default SearchBar;
