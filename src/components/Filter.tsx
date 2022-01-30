import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import React from "react";
import { RemoveIcon } from "../common/icons/RemoveIcon";
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: "5px",
    backgroundColor: "#ffff",
    padding: "15px 20px",
    boxShadow: "1px 1px 14px 1px #c7c7c9",
  },
  lists: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  listItem: {
    display: "flex",
    "& span": {
      backgroundColor: "#579e9e",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      padding: "0 5px",
      transition: "0.5s",
      borderBottomRightRadius: "5px",
      borderTopRightRadius: "5px",
      "&:hover": { backgroundColor: "hsl(180, 14%, 20%)" },
    },
  },
  item: {
    backgroundColor: " hsl(180, 31%, 95%)",
    color: "#579e9e",
    padding: "10px",
    borderBottomLeftRadius: "5px",
    borderTopLeftRadius: "5px",
    transition: "0.5s",
    // "&:hover": {
    //   cursor: "pointer",
    //   backgroundColor: "#5ba4a4",
    //   color: "#fff",
    // },
  },
  clearBtn: {
    marginLeft: "auto",
    cursor: "pointer",
    color: "#c0c0c0",
    transition: "0.5s",

    "&:hover": {
      color: "#579e9e",
      textDecoration: "underline",
    },
  },
}));
interface Props {
  data: string[];
  handleCancel: (id: string) => void;
  handleClear: () => void;
}
export const Filter: React.FC<Props> = ({
  data,
  handleCancel,
  handleClear,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.lists}>
        {data.map((d, index) => {
          return (
            <div key={index} className={classes.listItem}>
              <p className={classes.item}>{d}</p>
              <span onClick={() => handleCancel(d)}>
                <RemoveIcon />
              </span>
            </div>
          );
        })}
      </div>

      <span onClick={() => handleClear()} className={classes.clearBtn}>
        Clear
      </span>
    </div>
  );
};
