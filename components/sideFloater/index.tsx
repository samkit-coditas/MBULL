import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import ClearIcon from '@mui/icons-material/Clear';

import { MainContainer } from "./sideFloater.style";

const SideFloater = (props: any) => {
    const { open, toggleChart, children } = props
    return (<>
        <MainContainer
            anchor={'right'}
            open={open}
            onClose={toggleChart(false)}
        >
            <Box className="header">
                <IconButton onClick={toggleChart(false)}>
                    <ClearIcon />
                </IconButton>
            </Box>
            <Box className="mainContent">
                {children}
            </Box>
        </MainContainer>
    </>)
}

export default SideFloater;