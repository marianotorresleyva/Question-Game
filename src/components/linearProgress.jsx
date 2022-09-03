import { Box, LinearProgress, Typography } from "@mui/material";

export default function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ minWidth: 35 }}>
                    <Typography
                        variant="body2"
                        color="text.primary"
                    >{`${Math.round(props.value + 1)} / 5`}</Typography>
                </Box>
                <Box sx={{ width: "80%", mr: 1 }}>
                    <LinearProgress
                        className="set-border"
                        variant="determinate"
                        sx={{ height: "25px" }}
                        value={(props.value + 1) * 20}
                    />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >{`${Math.round((props.value + 1) * 20)}%`}</Typography>
                </Box>
            </Box>
        </Box>
    );
}
