import { useState } from "react";

const Rectangle = () => {
  const [rect, setRect] = useState({ length: undefined, width: undefined });
  return (
    <div className="text-lg-end">
      <h1 className="display-1 mb-3">Area of Rectangle</h1>
      <form action="javascript:void(0)" className="ms-auto w-75">
        <input
          type="number"
          name="length"
          id="length"
          placeholder="Length"
          className="form-control rounded-0 mb-3"
          value={rect.length}
          onChange={(e) => {
            setRect({ ...rect, length: parseInt(e.target.value) });
          }}
        />
        <input
          type="number"
          name="width"
          id="width"
          placeholder="Width"
          className="form-control rounded-0 mb-3"
          value={rect.width}
          onChange={(e) => {
            setRect({ ...rect, width: parseInt(e.target.value) });
          }}
        />
      </form>
      {!isNaN(rect.length) && !isNaN(rect.width) && (
        <h2 className="display-2">{rect.length * rect.width}</h2>
      )}
    </div>
  );
};

export default Rectangle;
