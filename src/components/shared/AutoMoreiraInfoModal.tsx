/** @format */

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import {COLORS} from "../../utils/Colors";
import ContactForm from "../contact/form/ContactForm";

interface IAutoMoreiraInfoModal {
  initialMessage: string;
  open: boolean;
  handleClose: () => void;
}

export default function AutoMoreiraInfoModal(props: IAutoMoreiraInfoModal) {
  const {initialMessage, open, handleClose} = props;

  return (
    <Dialog
      open={open}
      PaperProps={{
        style: {
          boxShadow: "none",
          backgroundColor: "transparent",
        },
      }}
    >
      <Card>
        <Box sx={{height: 75, bgcolor: COLORS.AUTO_MOREIRA_ALTERNATIVE_BLUE}}>
          <DialogTitle sx={{m: 0, p: 2}}>
            <Grid container spacing={1}>
              <Grid item sx={{color: "white"}}>
                <InfoOutlinedIcon
                  sx={{
                    fontSize: 45,
                  }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  mt: 1,
                  color: "white",
                }}
              >
                <Typography variant="h5">{"Pedir Informações"}</Typography>
              </Grid>
            </Grid>
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{bgcolor: "white"}}>
          <DialogContent dividers>
            <ContactForm {...{initialMessage, handleClose}} />
          </DialogContent>
        </Box>
      </Card>
    </Dialog>
  );
}
