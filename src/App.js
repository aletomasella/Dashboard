import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2 w"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/*Dashboard */}
              <Route exact path="/" element={<Ecommerce />} />
              <Route exact path="/ecommerce" element={<Ecommerce />} />
              {/*Pages */}
              <Route exact path="/orders" element={<Orders />} />
              <Route exact path="/employees" element={<Employees />} />
              <Route exact path="/customers" element={<Customers />} />
              {/*Apps */}
              <Route exact path="/kanban" element={<Kanban />} />
              <Route exact path="/editor" element={<Editor />} />
              <Route exact path="/calendar" element={<Calendar />} />
              <Route exact path="/color-picker" element={<ColorPicker />} />
              {/*Charts */}

              <Route exact path="/line" element={<Line />} />
              <Route exact path="/area" element={<Area />} />
              <Route exact path="/bar" element={<Bar />} />
              <Route exact path="/pie" element={<Pie />} />
              <Route exact path="/financial" element={<Financial />} />
              <Route exact path="/color-mapping" element={<ColorMapping />} />
              <Route exact path="/pyramid" element={<Pyramid />} />
              <Route exact path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
