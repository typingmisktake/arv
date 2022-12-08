import { Link } from "react-router-dom";

export default function Student({ students }) {
  return (
    <div className="container p-5 mt-10">
      <h1 className="mb-5 text-3xl">Students</h1>
      <div className="flex flex-wrap">
        {students.map((student) => {
          return (
            <Link to={student.id} key={student.id}>
              <div className="p-3 transition border border-sky-500 hover:shadow hover:shadow-sky-500">
                <div className="p-2">{student.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
