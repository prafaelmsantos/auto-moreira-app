import { Grid, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ContactIcon } from "../../../models/enums/ContactIconEnum";

type IContactInfoIcon = {
  type: ContactIcon;
  text: string;
  isFooter?: boolean;
};
function ContactIconInfo(props: IContactInfoIcon) {
  const { text, type, isFooter } = props;

  const iconStyle = {
    fontSize: isFooter ? 30 : 20,
    mt: isFooter ? -0.3 : 0.2,
    color: "black",
  };

  return (
    <Grid container spacing={1}>
      <Grid item>
        {type === ContactIcon.PHONE && <PhoneIcon sx={iconStyle} />}
        {type === ContactIcon.EMAIL && <EmailIcon sx={iconStyle} />}
        {type === ContactIcon.LOCATION && <LocationOnIcon sx={iconStyle} />}
      </Grid>
      <Grid item>
        <Typography
          fontWeight={"bold"}
          color={"black"}
          fontSize={isFooter ? 18 : 16}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ContactIconInfo;
