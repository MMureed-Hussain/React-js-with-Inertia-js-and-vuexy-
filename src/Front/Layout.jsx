import React from "react";
import Compose from "../pages/Compose";
import Email from "../pages/Email";
import Profiles from "../pages/Profiles";
import Search from "../pages/Search";
import Topbar from "../pages/Topbar";

const Layout = () => {
  return (
      <div className="row">
        <div className="col-md-3 col-lg-2" style={{ backgroundColor: "#f1f1f1" }}>
          <Email />
        </div>
        <div className="col-md-9 col-lg-7 m-3">
          <Search />
          <Topbar />
          <Profiles />
        </div>
        <div className="col-md-3 col-lg-2 d-flex align-items-end justify-content-center">
          <Compose />
        </div>
      </div>
  );
};

export default Layout;
