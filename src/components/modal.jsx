import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    component="h1"
                    sx={{
                        fontSize: "36px",
                        textAlign: "center",
                    }}
                >
                    You win
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Something to say?
                    <input type="text" name="client_text" id="client" />
                    <Button
                        type="submit"
                        onClick={props.reboot}
                        sx={{ marginLeft: "10px" }}
                    >
                        {" "}
                        send{" "}
                    </Button>
                </Typography>
            </Box>
        </Modal>
    );
}
