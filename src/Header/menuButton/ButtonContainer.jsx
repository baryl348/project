import React from "react";
import style from "./Button.module.css";
import ButtonList from "./Button";
import Union from "../../IMG/Union.png";

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false,
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className={style.item_button}>
        <div className="button" onClick={this.showDropdownMenu}>
          <div><i><img src={Union} /></i></div>
          <span className={style.item_menu}>Меню</span>
        </div>
        {this.state.displayMenu ? <ButtonList /> : null}
      </div>
    );
  }
}

export default Dropdown;
