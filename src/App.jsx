import React, { useState } from "react";
import { Login } from "./components/Login";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Home from "./components/children_of_dashboard/Home";
import Course from "./components/children_of_dashboard/Course";
import Payment from "./components/children_of_dashboard/Payment";
import Report from "./components/children_of_dashboard/Report";
import Settings from "./components/children_of_dashboard/Settings";
import Students from "./components/children_of_dashboard/Students";

function App() {
  const [isLogin] = useState(true);
  return (
    <div className="h-screen w-full">
      <Routes>
        <Route path="/" element={isLogin ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/students" element={<Students />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/report" element={<Report />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
