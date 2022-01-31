import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import allData from "./utils/data.json";

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
  filter: {
    padding: "0% 10%",
    marginTop: "-35px",
  },
  main: {
    padding: "5% 10%",
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
  const [data, setData] = useState(allData);
  const [filterData, setFilterData] = useState<string[]>([]);
  const classes = useStyles({ isFilter: filterData.length > 0 });
  const handleClick = (value: string) => {
    if (!filterData.includes(value)) {
      setFilterData((prev) => {
        return [...prev, value];
      });
    }
  };
  const handleCancel = (value: string) => {
    let preValue = filterData;
    console.log(preValue);
    let newData = preValue.filter((v) => v !== value);
    console.log(newData);
    setFilterData(newData);
  };
  useEffect(() => {
    if (filterData.length > 0) {
      var newArr = data;
      var array = [];
      for (var i = 0; i < data.length; i++) {
        if (
          filterData.some((f) => newArr[i].tools.includes(f)) ||
          filterData.some((f) => newArr[i].languages.includes(f)) ||
          filterData.some((f) => newArr[i].level === f) ||
          filterData.some((f) => newArr[i].role === f)
        ) {
          array.push(newArr[i]);
        }
      }
      setData(array);
    } else {
      setData(allData);
    }
  }, [filterData]);
  return (
    <>
      <header className={classes.header}></header>
      <main>
        <div className={classes.filter}>
          {filterData.length > 0 && (
            <Filter
              handleCancel={(d: string) => handleCancel(d)}
              handleClear={() => setFilterData([])}
              data={filterData}
            />
          )}
        </div>
        <div className={classes.main}>
          {data.map((d, index) => {
            return (
              <div key={index} className={classes.card}>
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
