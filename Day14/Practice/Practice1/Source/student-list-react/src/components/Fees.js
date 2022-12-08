import { useParams } from "react-router-dom";
import { getFees } from "../students";

const Fees = () => {
  const { id } = useParams();
  const fees = getFees(id);

  return (
    <div className="w-2/3 p-5 transition border border-sky-500">
      <div className="mb-5">
        <h2 className="text-3xl">Fees Detail</h2>
      </div>
      <div className="mb-3">
        Status <span className="font-bold">{fees.status}</span>
      </div>
      <div className="flex gap-8 mb-3">
        <span>
          Amount <span className="font-bold">{fees.amount}</span>
        </span>
        <span>
          Date <span className="font-bold">{fees.date.toDateString()}</span>
        </span>
      </div>
    </div>
  );
};

export default Fees;
