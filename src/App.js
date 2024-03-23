import "./index.css";
import Tabs from "./components/Tabs";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState({
    tabOne: false,
    tabTwo: false,
    tabThree: false,
    tabFour: false,
    tabFive: false,
  });

  return (
    <div className="App">
      <div className="tabContainer">
        <Tabs
          color="red"
          text="one"
          status={status.tabOne}
          setStatus={() =>
            setStatus({
              tabOne: !status.tabOne,
              tabTwo: false,
              tabThree: false,
              tabFour: false,
              tabFive: false,
            })
          }
        />
        <Tabs
          color="blue"
          text="two"
          status={status.tabTwo}
          setStatus={() =>
            setStatus({
              tabOne: false,
              tabTwo: !status.tabTwo,
              tabThree: false,
              tabFour: false,
              tabFive: false,
            })
          }
        />
        <Tabs
          color="purple"
          text="three"
          status={status.tabThree}
          setStatus={() =>
            setStatus({
              tabOne: false,
              tabTwo: false,
              tabThree: !status.tabThree,
              tabFour: false,
              tabFive: false,
            })
          }
        />
        <Tabs
          color="green"
          text="four"
          status={status.tabFour}
          setStatus={() =>
            setStatus({
              tabOne: false,
              tabTwo: false,
              tabThree: false,
              tabFour: !status.tabFour,
              tabFive: false,
            })
          }
        />
        <Tabs
          color="yellow"
          text="five"
          status={status.tabFive}
          setStatus={() =>
            setStatus({
              tabOne: false,
              tabTwo: false,
              tabThree: false,
              tabFour: false,
              tabFive: !status.tabFive,
            })
          }
        />
      </div>
    </div>
  );
}

export default App;
