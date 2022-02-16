import React from "react";
import "./Board.css";
import Sidebar from "../Sidebar/Sidebar";

export default class Board extends React.Component {
  

  render() {
    return (
      <div className="board-wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <div className="top">
            <div className="right">
              <div className="header">My Tests</div>
            </div>
          </div>

          <div className="bottom"></div>
        </div>
      </div>
    );
  }
}
