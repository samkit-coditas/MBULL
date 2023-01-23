import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

import { MainContainer } from "./mobileStockReports.style"


const MobileStockReports = ({ data }: any) => {
    return (<>
        <MainContainer>
            <Box className="stockReportsMobileView">
                <Box className='header'>
                    <Typography component='h1' variant='h3'>
                        {data.companyName}
                    </Typography>
                    <Box className='stockSnapShot'>
                        <Typography component='h1' variant='h5'>
                            {data.lastTradedPrice}
                        </Typography>
                        <Typography component='h1' variant='h5'>
                            {data.dayChange}
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Box className='actionsContainer'>
                    <Button
                        variant='contained'
                        fullWidth
                    >Buy</Button>
                    <Button
                        variant='contained'
                        fullWidth
                    >Sell</Button>
                </Box>
                <Box>
                    <Box>Statistics</Box>
                </Box>
            </Box>
        </MainContainer>
    </>)
}

export default MobileStockReports