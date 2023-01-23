import { useContext } from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';


import { LanguageContext } from '../../hoc/languageProvider';
import { MainContainer } from './languageSelector.style';

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext)
    const { localString } = useContext(LanguageContext)

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
    };

    return (
        <MainContainer>
            <FormControl variant="standard" className='container' >

                <Typography component="h1" variant="h2">
                    {localString["select-language-prompt"]}
                </Typography>
                <Select
                    value={language}
                    onChange={handleChange}
                    label={localString["language"]}
                    className='selectElement'
                >
                    <MenuItem value={"en"}>{localString["english"]}</MenuItem>
                    <MenuItem value={"hn"}>{localString["hindi"]}</MenuItem>
                </Select>
            </FormControl>
        </MainContainer>
    );
}

export default LanguageSelector