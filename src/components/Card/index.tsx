import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import React from "react";
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "20px 40px",
    position: "relative",
    backgroundColor: "#fff",
    boxShadow: "1px 1px 14px 1px #c7c7c9",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "40px 20px",
    },
  },
  leftBorder: {
    borderLeft: "5px solid #579e9e",
  },
  logo: {
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "-40px",
    },
  },

  company: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
    "& h1": {
      fontSize: "0.9rem",
    },
    "& div": {
      display: "flex",
    },
    "& div:nth-of-type(1)": {},
    "& div:nth-of-type(2n)": {},
    [theme.breakpoints.down("md")]: {
      margin: "10px 0",
    },
  },
  title: {
    alignItems: "center",
    gap: "20px",
    margin: "10px 0",
    "& span": {
      color: "#fff",
      borderRadius: "10px",
      fontSize: "0.7rem",
      display: "flex",
      alignItems: "center",

      textTransform: "uppercase",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.6rem",
      },
    },
    "& span:nth-of-type(1)": {
      color: "#579e9e",
      textTransform: "capitalize",
      fontSize: "1rem",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
      },
    },
    "& span:nth-of-type(2n)": {
      backgroundColor: " #579e9e",
      padding: "7px 7px 4px",
    },
    "& span:nth-of-type(3n)": {
      backgroundColor: "  hsl(180, 14%, 20%)",
      padding: "7px 7px 4px",
    },
  },
  companyFooter: {
    display: "flex",
    margin: "10px 0",
    "& li": {
      color: "#c0c0c0",
      fontWeight: "normal",
      fontSize: "0.9rem",
      margin: "0 10px ",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.7rem",
      },
    },
    "& li:nth-of-type(1)": {
      textTransform: "capitalize",
      listStyle: "none",
      margin: "0 10px 0 0",
    },
  },
  tools: {
    display: "flex",
    marginLeft: "auto",
    gap: "10px",

    "& p": {
      backgroundColor: " hsl(180, 31%, 95%)",
      color: "#579e9e",
      padding: "10px",
      borderRadius: "5px",
      transition: "0.5s",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#5ba4a4",
        color: "#fff",
      },
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      fontSize: "0.8rem",
      flexWrap: "wrap",
      gap: "10px",
    },
  },
}));
interface dataType {
  id: number;
  company: string;
  logo: string;
  isNew: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}
interface Props {
  data: dataType;
  handleClick: (value: string) => void;
}
export const Card: React.FC<Props> = ({
  data: {
    logo,
    company,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleClick,
}) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.container} ${
        isNew && featured ? classes.leftBorder : ""
      }`}
    >
      <div className={classes.logo}>
        <img src={logo} alt={company} />
      </div>
      <div className={classes.company}>
        <div className={classes.title}>
          <span>{company}</span> {isNew && <span>new!</span>}{" "}
          {featured && <span>featured</span>}
        </div>
        <h1>{position}</h1>
        <ul className={classes.companyFooter}>
          <li>{postedAt} </li> <li> {contract} </li>
          <li>{location}</li>
        </ul>
      </div>
      <div className={classes.tools}>
        <p onClick={() => handleClick(role)}> {role}</p>
        <p onClick={() => handleClick(level)}>{level}</p>
        {[...languages, ...tools].map((d) => {
          return <p onClick={() => handleClick(d)}>{d}</p>;
        })}
      </div>
    </div>
  );
};
