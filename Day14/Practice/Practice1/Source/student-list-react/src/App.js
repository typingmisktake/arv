import { Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import Students from "./components/Students";
import Student from "./components/Student";
import Home from "./components/Home";
import Fees from "./components/Fees";
import Result from "./components/Result";

import students from "./students";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="students" element={<Students students={students} />} />
        <Route path="students/:id" element={<Student />}>
          <Route path="fees" element={<Fees />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Route>
    </Routes>
  );
}
