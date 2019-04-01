import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "css/Nav.css";
import SearchBar from "./SearchBar";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="col-pd-1" />
        <div className="Nav__items">
          <Logo />
          <SearchBar
            getArticles={this.props.getArticles}
            keyword={this.props.keyword}
            keywordHandler={this.props.keywordHandler}
          />
          <SideNav />
        </div>
        <div className="col-pd-2" />
      </div>
    );
  }
}

function Logo() {
  return (
    <div className="Logo">
      <FontAwesomeIcon
        icon={["fab", "facebook-square"]}
        className="Logo__svg"
      />
    </div>
  );
}

function SideNav() {
  return (
    <div className="SideNav">
      <NavImg>
        <img
          className="NavIcon__img"
          src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p320x320/14590396_1116166391832697_5236054864862170502_n.jpg?_nc_cat=100&_nc_ht=scontent-icn1-1.xx&oh=7e818f72442b1417bec8b798ed445bd8&oe=5CC74D33"
          alt=""
        />
      </NavImg>
      <NavItem>
        <NavText text="장동혁" />
      </NavItem>
      <div className="left-pipe" />
      <NavItem>
        <NavText text="홈" />
      </NavItem>
      <div className="left-pipe" />
      <NavItem>
        <NavText text="만들기" />
      </NavItem>
      <div className="left-pipe" />
      <NavIcon>
        <FontAwesomeIcon
          className="NavIcon__svg"
          icon="users"
          title="친구요청"
        />
      </NavIcon>
      <NavIcon>
        <FontAwesomeIcon
          className="NavIcon__svg"
          icon={["fab", "facebook-messenger"]}
          title="메시지"
        />
      </NavIcon>
      <NavIcon>
        <FontAwesomeIcon className="NavIcon__svg" icon="bell" title="알림" />
      </NavIcon>
      <div className="left-pipe" />
      <NavIcon>
        <FontAwesomeIcon
          className="NavIcon__svg"
          icon="question-circle"
          title="빠른도움말"
        />
      </NavIcon>
      <NavIcon>
        <FontAwesomeIcon className="NavIcon__svg" icon="caret-down" />
      </NavIcon>
    </div>
  );
}

function NavItem({ children }) {
  return <div className="NavItem">{children}</div>;
}
function NavIcon({ children }) {
  return <div className="NavIcon">{children}</div>;
}
function NavImg({ children }) {
  return <div className="NavImg">{children}</div>;
}

function NavText({ text }) {
  return <span className="NavItem__NavText">{text}</span>;
}

export default Nav;
