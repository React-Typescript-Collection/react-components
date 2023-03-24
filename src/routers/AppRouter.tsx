import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './../components/Header';
import routes from "./routes";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
