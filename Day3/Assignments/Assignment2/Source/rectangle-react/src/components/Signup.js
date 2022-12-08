import { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({ name: "", address: "", pan: "" });
  const [paragraph, setParagraph] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    let line1 = "",
      line2 = "",
      line3 = "";

    if (form.name.length > 0) line1 = `Your name is ${form.name}. `;
    if (form.address.length > 0) line2 = `You live in ${form.address}. `;
    if (form.pan.length > 0) line3 = `Your PAN number is ${form.pan}. `;

    setParagraph(line1 + line2 + line3);
  };
  return (
    <>
      <h1 className="h1 mb-3">Register</h1>
      <form className="d-flex flex-column gap-3" onSubmit={handleForm}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="form-control rounded-0"
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter your address"
          className="form-control rounded-0"
          onChange={(e) => {
            setForm({ ...form, address: e.target.value });
          }}
        />
        <input
          type="text"
          name="pan"
          id="pan"
          placeholder="Enter your pan number"
          className="form-control rounded-0"
          onChange={(e) => {
            setForm({ ...form, pan: e.target.value });
          }}
        />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
      <div>
        <p className="lead mt-5">{paragraph}</p>
      </div>
    </>
  );
};

export default Signup;
