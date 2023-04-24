import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://cdn-icons-png.flaticon.com/512/1088/1088537.png" />
        <div className="user">
          <img src="https://cdn-icons-png.flaticon.com/512/1088/1088537.png" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>LOrem500</h1>
        <p>
          <p>lorem001</p>
          <br />
          <p>lorem 0025</p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
