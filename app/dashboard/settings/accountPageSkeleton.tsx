import { Box, Typography, IconButton, Skeleton } from "@mui/material";

import { MainContainer } from "./accountPageSkeleton.style";
const AccountPageSkeleton = () => {
    return (
        <MainContainer>
            <Box className="header">
                <Skeleton className="heading" />
                <Skeleton variant="circular" className="icon" />
            </Box>
            <Box className="details">
                <Box>
                    <Skeleton className="name" />
                </Box>
                <Box className="emailAndPhoneNumberContainer">
                    <Box>
                        <Skeleton className="email" />
                    </Box>
                    <Box>
                        <Skeleton className="phoneNumber" />
                    </Box>
                </Box>
            </Box>
        </MainContainer>
    )
}

export default AccountPageSkeleton;