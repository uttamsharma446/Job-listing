import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import React from "react";
import { Card } from "./components/Card";
import data from "./utils/data.json";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundImage: "url(/images/bg-header-desktop.svg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#5ba4a4",
    height: "200px",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "url(/images/bg-header-mobile.svg)",
    },
  },
  container: {
    padding: "3% 10%",
    [theme.breakpoints.down("md")]: {},
  },
  box: {
    height: "300px",
  },
  card: {
    margin: "30px 0 ",
    [theme.breakpoints.down("md")]: {
      margin: "60px 0 30px",
    },
  },
}));
function App() {
  const classes = useStyles();
  const handleClick = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <header className={classes.header}></header>
      <main>
        <div className={classes.container}>
          {data.map((d) => {
            return (
              <div className={classes.card}>
                <Card data={d} handleClick={handleClick} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
