import React from "react";
import { Link, Outlet } from "react-router-dom";
import { routePath } from "../constants";

function Layout() {
  return (
    <div>
      <header>
        <div>
          <Link to={routePath.Root}>
            <span>Home</span>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to={routePath.Posting}>Posting Home</Link>
              </li>
              <li>
                <Link to={routePath.PostingDetail(1)}>Posting 1</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
