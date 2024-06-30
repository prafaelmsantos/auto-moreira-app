/** @format */

import {Button, SxProps, Theme, Typography} from "@mui/material";

function AutoMoreiraButton({
  onClick,
  text,
  sx,
}: {
  onClick: () => void;
  text: string;
  sx?: SxProps<Theme>;
}) {
  return (
    <Button fullWidth variant="contained" onClick={onClick} sx={sx}>
      <Typography color={"white"} fontWeight={"bold"} fontSize={14}>
        {text}
      </Typography>
    </Button>
  );
}

export default AutoMoreiraButton;
