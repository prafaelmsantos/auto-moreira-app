/** @format */

import {Button, Typography} from "@mui/material";

function AutoMoreiraButton({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) {
  return (
    <Button fullWidth variant="contained" onClick={onClick}>
      <Typography color={"white"} fontWeight={"bold"} fontSize={14}>
        {text}
      </Typography>
    </Button>
  );
}

export default AutoMoreiraButton;
