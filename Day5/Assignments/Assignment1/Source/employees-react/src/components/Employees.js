import { useState } from "react";

const Employees = () => {
  const [form, setForm] = useState({});
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sufyan",
      address: "Ahmedabad",
      gender: "Male",
      doj: "2022-08-01",
      hobbies: "Music, Gaming",
    },
    {
      id: 2,
      name: "Ruchit",
      address: "Ahmedabad",
      gender: "Male",
      doj: "2022-08-01",
      hobbies: "Music, Gaming",
    },
    {
      id: 3,
      name: "Vikas",
      address: "Himmat Nagar",
      gender: "Male",
      doj: "2022-08-01",
      hobbies: "Music, Gaming",
    },
    {
      id: 4,
      name: "John Doe",
      address: "New York",
      gender: "Male",
      doj: "2022-11-10",
      hobbies: "Traveling",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees([...employees, form]);
  };

  const sort = () => {
    setEmployees([...employees.sort((a, b) => a.name.localeCompare(b.name))]);
  };

  const filterByDoj = () => {
    setEmployees(
      employees.filter(
        (emp) => new Date(emp.doj).getMonth() === new Date().getMonth()
      )
    );
  };

  return (
    <div class="container whitespace-nowrap">
      <div class="flex flex-col">
        <div class="">
          <h1 class="mt-10 mb-5 text-3xl text-center">Employee Form</h1>
          <form
            action=""
            class="flex items-center justify-center gap-3"
            onSubmit={handleSubmit}
          >
            <div class="flex flex-col w-1/2 gap-3">
              <div class="flex flex-col gap-1">
                <label for="id">Employee Id</label>
                <input
                  type="number"
                  name="id"
                  id="id"
                  class="px-3 py-2 border border-black outline-none focus:border-blue-500"
                  placeholder="5"
                  onChange={(e) => {
                    setForm({ ...form, id: e.target.value });
                  }}
                />
              </div>
              <div class="flex flex-col gap-1">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="px-3 py-2 border border-black outline-none focus:border-blue-500"
                  placeholder="Tom Smith"
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                  }}
                />
              </div>
              <div class="flex flex-col gap-1">
                <label for="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  class="px-3 py-2 border border-black outline-none focus:border-blue-500"
                  placeholder="Washington"
                  onChange={(e) => {
                    setForm({ ...form, address: e.target.value });
                  }}
                />
              </div>
              <div class="flex flex-col gap-1 mb-2">
                <label for="hobbies">Hobbies</label>
                <input
                  type="text"
                  name="hobbies"
                  id="hobbies"
                  class="w-full px-3 py-2 border border-black outline-none focus:border-blue-500"
                  placeholder="Music, Gaming, Traveling"
                  onChange={(e) => {
                    setForm({ ...form, hobbies: e.target.value });
                  }}
                />
              </div>
              <div class="flex items-center gap-8">
                <label for="doj">Date of joining</label>
                <input
                  type="date"
                  name="doj"
                  id="doj"
                  class="w-full px-3 py-2 border border-black outline-none focus:border-blue-500"
                  onChange={(e) => {
                    setForm({ ...form, doj: e.target.value });
                  }}
                />
              </div>
              <div class="flex gap-8">
                <label for="gender">Gender</label>
                <div class="flex gap-3">
                  <div class="flex gap-2">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      onChange={(e) => {
                        setForm({ ...form, gender: e.target.value });
                      }}
                    />
                    <label for="male">Male</label>
                  </div>
                  <div class="flex gap-2">
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      onChange={(e) => {
                        setForm({ ...form, gender: e.target.value });
                      }}
                    />
                    <label for="female">Female</label>
                  </div>
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  value="Submit"
                  class="px-5 py-2 text-white bg-blue-500 cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="flex flex-col items-center">
          <h1 class="mt-10 mb-5 text-3xl">Employees</h1>
          <div class="flex gap-2 my-2">
            <button class="px-4 py-2 text-white bg-gray-500" onClick={sort}>
              Sort by name
            </button>
            <button
              class="px-4 py-2 text-white bg-gray-500"
              onClick={filterByDoj}
            >
              Filter by DOJ
            </button>
          </div>
          <table
            aria-label="Employees"
            class="text-center border border-collapse border-black table-auto"
          >
            <thead>
              <tr class="border border-black">
                <th class="px-6 border border-black">Id</th>
                <th class="px-6 border border-black">Name</th>
                <th class="px-6 border border-black">Address</th>
                <th class="px-6 border border-black">Gender</th>
                <th class="px-6 border border-black">Date of joining</th>
                <th class="px-6 border border-black">Hobbies</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                return (
                  <tr>
                    <td class="px-5 border border-black">{employee.id}</td>
                    <td class="px-5 border border-black">{employee.name}</td>
                    <td class="px-5 border border-black">{employee.address}</td>
                    <td class="px-5 border border-black">{employee.gender}</td>
                    <td class="px-5 border border-black">{employee.doj}</td>
                    <td class="px-5 border border-black">{employee.hobbies}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
