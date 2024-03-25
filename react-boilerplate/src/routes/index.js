import Welcome from "pages/Welcome/Welcome";
import { NotFound } from "../pages/Not-Found";
import React from "react";

const routes = [
  {
    name: "NotFound",
    key: "notFound",
    path: "*",
    component: <NotFound />,
    private: false,
  },
  {
    name: "Welcome Page",
    key: "welcomePage",
    path: "/",
    component: (
      <React.Fragment>
        <Welcome/>
      </React.Fragment>
    ),
    private: false,
  },
  

  
];

export default routes;
