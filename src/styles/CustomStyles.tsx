import { Badge, Box, Card, Paper, styled } from "@mui/material";

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
  marginLeft: "-30px",
  borderRadius: "50px",
  minHeight: "840px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    margin: "0",
    padding: "0",
  },
}));

export const MainRightCard = styled(Card)(({ theme }) => ({
  background: theme.palette.secondary.main,
  paddingTop: "10px",
  borderRadius: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  marginRight: "-30px",

  [theme.breakpoints.down("md")]: {
    margin: "0",
    padding: "0",
  },
}));

export const ProjectPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: "20px",
}));

export const InfoCard = styled(Card)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: "20px",
  alignItems: "center",
}));

export const ProjectTypography = styled(Box)(() => ({
  paddingBottom: "5px",
  textAlign: "left",
  variant: "body1",
}));
