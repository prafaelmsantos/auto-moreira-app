import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AiFillCar, AiFillHome } from "react-icons/ai";
import { Dispatch, ReactNode, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { AdminListType } from "../../../../models/enums/AdminListType";
import { SiMercedes, SiThemodelsresource } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type IAdminListItem = {
  id: number;
  title: string;
  collapse?: boolean;
  children?: ReactNode;
  iconType: AdminListType;
  selectedIndex: number;
  setSelectedIndex: Dispatch<React.SetStateAction<number>>;
};

export default function AdminListItem(props: IAdminListItem) {
  const {
    id,
    title,
    collapse = false,
    children,
    iconType,
    selectedIndex,
    setSelectedIndex,
  } = props;

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  return (
    <>
      <ListItemButton
        sx={{
          "&.Mui-selected": {
            backgroundColor: "#ff4d30",
            color: "white",
            "& .MuiListItemIcon-root": {
              color: "white",
            },
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#ff4d30",
            color: "white",
            "& .MuiListItemIcon-root": {
              color: "white",
            },
          },
          "&:hover": {
            backgroundColor: "#ff4d30",
            color: "white",
            "& .MuiListItemIcon-root": {
              color: "white",
            },
          },
        }}
        selected={selectedIndex === id}
        onClick={() => {
          setSelectedIndex(id);
          collapse && handleClick();
          navigate(`/admin/vehicle`);
        }}
      >
        <ListItemIcon sx={{ fontSize: 22, color: "GrayText" }}>
          {iconType === AdminListType.HOME && <AiFillHome />}
          {iconType === AdminListType.VEHICLE && <AiFillCar />}
          {iconType === AdminListType.MARK && <SiMercedes />}
          {iconType === AdminListType.MODEL && <SiThemodelsresource />}
          {iconType === AdminListType.INFO && <MdEmail />}
          {iconType === AdminListType.USER && <FaUsers />}
        </ListItemIcon>
        <ListItemText
          sx={{ mt: 1 }}
          primary={
            <Typography fontWeight={"bold"} fontSize={16} fontFamily={"Rubik"}>
              {title}
            </Typography>
          }
        />
        {collapse && <Box> {open ? <ExpandLess /> : <ExpandMore />}</Box>}
      </ListItemButton>
      {collapse && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ mx: 2 }}>
            {children}
          </List>
        </Collapse>
      )}
    </>
  );
}
