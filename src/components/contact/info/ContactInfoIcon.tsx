import { Grid, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ContactIcon } from "../../../models/enums/ContactIconEnum";

type IContactInfoIcon = {
  type: ContactIcon;
  text: string;
};
function ContactIconInfo(props: IContactInfoIcon) {
  const { text, type } = props;

  const iconStyle = {
    fontSize: 20,
    mt: 0.2,
  };

  return (
    <Grid container spacing={1}>
      <Grid item>
        {type === ContactIcon.PHONE && <PhoneIcon sx={iconStyle} />}
        {type === ContactIcon.EMAIL && <EmailIcon sx={iconStyle} />}
        {type === ContactIcon.LOCATION && <LocationOnIcon sx={iconStyle} />}
      </Grid>
      <Grid item>
        <Typography fontWeight={"bold"} fontSize={16}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ContactIconInfo;
