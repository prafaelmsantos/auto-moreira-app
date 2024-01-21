/** @format */

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import {CgProfile} from "react-icons/cg";
import {IoCarSport} from "react-icons/io5";
import {SiMercedes, SiThemodelsresource} from "react-icons/si";
import {MdLogout, MdOutlineRateReview} from "react-icons/md";
import {FaHome, FaUsers} from "react-icons/fa";
import {NavLink, useNavigate} from "react-router-dom";
import {navLink} from "../../../../data/link";
import {NavLinkType} from "../../../../models/enums/NavLinkType";
import {useAppDispatch} from "../../../../redux/hooks";
import UserService from "../../../../services/UserService";

type INavbarListItem = {
  handleClose: () => void;
  title?: string;
  type: NavLinkType;
};

export default function NavbarListItem(props: INavbarListItem) {
  const {handleClose, title, type} = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const bannerLink = navLink.find((x) => x.type === type);

  return (
    <>
      {bannerLink && (
        <NavLink
          end
          onClick={() => {
            void handleClose();
            type === NavLinkType.LOGIN &&
              UserService.logout(dispatch, navigate);
          }}
          to={bannerLink.url}
          style={({isActive}) => {
            if (isActive) {
              return {
                fontWeight: "bold",
                fontSize: 12,
                textDecoration: "none",
                color: "black",
              };
            } else {
              return {
                fontSize: 12,
                textDecoration: "none",
                color: "black",
              };
            }
          }}
        >
          {({isActive}) => (
            <>
              <ListItemButton
                selected={isActive}
                sx={{
                  fontSize: 14,
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
              >
                <ListItemIcon
                  sx={{
                    fontSize: type === NavLinkType.LOGIN ? 18 : 24,
                    color: "GrayText",
                  }}
                >
                  {type === NavLinkType.ADMIN_PROFILE && <CgProfile />}
                  {type === NavLinkType.ADMIN_HOME && <FaHome />}
                  {type === NavLinkType.ADMIN_USERS && <FaUsers />}
                  {type === NavLinkType.ADMIN_MARKS && <SiMercedes />}
                  {type === NavLinkType.ADMIN_MODELS && <SiThemodelsresource />}
                  {type === NavLinkType.ADMIN_VEHICLES && <IoCarSport />}
                  {type === NavLinkType.ADMIN_CLIENTS && (
                    <MdOutlineRateReview />
                  )}

                  {type === NavLinkType.LOGIN && <MdLogout />}
                </ListItemIcon>
                <ListItemText
                  sx={{mt: 0.5}}
                  primary={
                    <Typography fontSize={13}>
                      {title ?? bannerLink.link}
                    </Typography>
                  }
                />
              </ListItemButton>
            </>
          )}
        </NavLink>
      )}
    </>
  );
}
