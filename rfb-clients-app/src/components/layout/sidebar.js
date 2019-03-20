import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <Link to="/client/add" className="btn btn-success btn-block">
        <i className="fas fa-plus" />
        <span className="ml-1">New Contact </span>
      </Link>
    </div>
  );
}
