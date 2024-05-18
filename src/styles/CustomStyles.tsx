import { Badge, Card, Paper, styled, Typography } from "@mui/material";

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const MainLeftCard = styled(Card)(({ theme }) => ({
  background: theme.palette.secondary.main,
  height: "860px",
  // marginLeft: "30px",
  borderRadius: "50px",
}));

export const GreyedOutText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: "5px",
}));

export const MainRightCard = styled(Card)(({ theme }) => ({
  background: theme.palette.secondary.main,
  height: "860px",
  borderRadius: "50px",
  // marginRight: "70px",
  paddingTop: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // overflow: "auto",
  "@media (max-width: 960px)": {
    height: "100%",
  },
}));

export const CustomWorkExpPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.primary.main,
  // height: "210px",
  borderRadius: "20px",
  alignItems: "center",
}));

export const CustomProjectPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.primary.main,
  // height: "300px",
  borderRadius: "20px",
}));
