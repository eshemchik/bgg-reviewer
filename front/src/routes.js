/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Games from "views/Games";
import Cat from "views/Cat";
import Game from "./views/Game";

const dashboardRoutes = [
  {
    path: "/games",
    name: "Games",
    icon: "pe-7s-ticket",
    component: Games,
    layout: "/admin",
    hidden: false
  },
  {
    path: "/user",
    name: "Edit",
    icon: "pe-7s-pen",
    component: UserProfile,
    layout: "/admin",
    hidden: false
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "pe-7s-note2",
  //   component: TableList,
  //   layout: "/admin",
  //   hidden: false
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin",
  //   hidden: false
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin",
  //   hidden: false
  // },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "pe-7s-graph",
  //   component: Dashboard,
  //   layout: "/admin",
  //   hidden: false
  // },
  {
    path: "/cat",
    name: "",
    icon: "pe-7s-graph",
    component: Cat,
    layout: "/admin",
    hidden: true
  },
  {
    path: "/game",
    name: "",
    icon: "pe-7s-graph",
    component: Game,
    layout: "/admin",
    hidden: true
  }
];

export default dashboardRoutes;
