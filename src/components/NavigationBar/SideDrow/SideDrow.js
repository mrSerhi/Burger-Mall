import React from "react";

// css modules
import classes from "./SideDrow.module.css";

// components
import Logo from "../../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Aux from "../../../hoc/Aux";
import BackDrop from "../../UIelements/BackDrop/BackDrop";

const sideDrower = ({ opend, onOpeningSideDrower }) => {
  const controlOpenSideDrower = () => {
    let sideDrowerClasses = [classes.SideDrow];
    if (opend) {
      sideDrowerClasses.push(classes.Open);
    } else {
      sideDrowerClasses.push(classes.Close);
    }
    return sideDrowerClasses.join(" ");
  };

  return (
    <Aux>
      <BackDrop hideElem={onOpeningSideDrower} showPhase={opend} />

      <div className={controlOpenSideDrower()}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <Navigation />
      </div>
    </Aux>
  );
};

export default sideDrower;
