import { useParams } from "react-router-dom";
import { getResult } from "../students";

const Result = () => {
  const { id } = useParams();
  const result = getResult(id);

  return (
    <div className="w-2/3 p-5 transition border border-sky-500">
      <div className="mb-5">
        <h2 className="text-3xl">Result</h2>
      </div>
      <div className="flex gap-8 mb-3">
        <span>
          Total <span className="font-bold">{result.marks.total}</span>
        </span>
        <span>
          Obtained <span className="font-bold">{result.marks.obtained}</span>
        </span>
      </div>
      <div className="flex gap-8 mb-3">
        <span>
          Grade <span className="font-bold">{result.grade}</span>
        </span>
        <span>
          Result <span className="font-bold">{result.result}</span>
        </span>
      </div>
    </div>
  );
};

export default Result;
