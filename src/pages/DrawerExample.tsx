import React from "react";

import AppDrawer from "../components/AppDrawer";
import { useDocumentTitle } from "../hooks";

const DrawerExample = () => {
  useDocumentTitle("Drawer Example");
  
  return (
    <AppDrawer />
  )
}

export default DrawerExample;