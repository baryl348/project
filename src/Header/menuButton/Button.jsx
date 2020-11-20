import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Button.module.css";
import Union from "../../IMG/Union.png";
import avatar from "../../IMG/avatar.svg";
import schedule from "../../IMG/schedule.svg";

const ButtonList = () => {
  return (
    <div className={style.wrapper}>
      <ul className={style.menu_wrapper}>
        <li className={`${style.menu_item} ${style.menu_item_proc}`}>
          <i className={style.item_container}>
            <img src={Union} className={style.img} alt="Union" />
          </i>
          <span className={style.item_text}>proceset</span>
        </li>

        <li className={style.menu_item}>
          <i className={style.item_container}>
            <img src={avatar} className={style.img} alt="avatar" />
          </i>
          <NavLink to="/profile" className={style.item_text}>
            Username
          </NavLink>
        </li>

        <li className={style.menu_item}>
          <i className={style.item_container}>
            <img src={schedule} className={style.img} alt="schedule" />
          </i>
          <NavLink to="/Process" className={style.item_text}>
            Список процессов
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ButtonList;
