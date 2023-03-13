import Home from "../pages/Home";
import * as ROUTES from "./../constants/routes";

import Buttons from "./../pages/Buttons";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: ROUTES.HOME_PATH,
    component: Home,
    name: "Home Screen",
    protected: false,
  },
  {
    path: ROUTES.BUTTONS_PATH,
    component: Buttons,
    name: "Home Screen",
    protected: false,
  },
  {
    path: ROUTES.BUTTONS_PATH,
    component: Buttons,
    name: "Home Screen",
    protected: false,
  },
  {
    path: ROUTES.BUTTONS_PATH,
    component: Buttons,
    name: "Home Screen",
    protected: false,
  },
];

export default routes;