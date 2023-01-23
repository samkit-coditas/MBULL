import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import CloseTwoTone from "@mui/icons-material/CloseTwoTone";

import { MainContainer } from "./customModal.style";

import { IModalProps } from "./customModal.types";

const CustomModal = ({ open, closeCallback, title, content }: IModalProps) => {
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <MainContainer>
                <Box className="modal">
                    <>
                        <Stack direction="row" alignItems='center' justifyContent="space-between">
                            <Typography id="modal-modal-title" variant="h4" component="h2">
                                {title}
                            </Typography>
                            <IconButton
                                onClick={closeCallback}
                            >
                                <CloseTwoTone />
                            </IconButton>
                        </Stack>
                        {content}
                    </>
                </Box>
            </MainContainer>
        </Modal >
    );
}


export default CustomModal;
