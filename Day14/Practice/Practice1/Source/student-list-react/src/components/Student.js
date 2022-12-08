import { useParams, Link, Outlet } from "react-router-dom";
import students from "../students";

const Student = () => {
  const { id } = useParams();
  const student = students.find((student) => student.id === id);

  return (
    <div className="container p-5 mt-10">
      <h1 className="mb-5 text-3xl">Student Detail</h1>
      <div className="flex">
        <div className="w-2/3 p-5 transition border border-sky-500">
          <div className="mb-5">
            <h2 className="text-3xl ">{student.name}</h2>
          </div>
          <div className="mb-3">
            Student Id <span className="font-bold">{student.id}</span>
          </div>
          <div className="flex gap-8 mb-3">
            <span>
              Father <span className="font-bold">{student.father}</span>
            </span>
            <span>
              Mother <span className="font-bold">{student.mother}</span>
            </span>
          </div>
        </div>
        <div className="flex w-1/3 ">
          <div className="flex flex-col w-full gap-3 p-5">
            <Link to="fees">
              <div className="px-4 py-2 text-center transition bg-sky-200 hover:shadow hover:shadow-sky-200">
                Fees
              </div>
            </Link>
            <Link to="Result">
              <div className="px-4 py-2 text-center transition bg-sky-200 hover:shadow hover:shadow-sky-200">
                Result
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Student;
