import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealImage from "../../assests/meals.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full delicious food" />
      </div>
    </>
  );
};

export default Header;
