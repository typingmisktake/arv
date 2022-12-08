<script>
export default {
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Sufyan",
          address: "Ahmedabad",
          gender: "Male",
          doj: "2022/08/01",
          hobbies: ["Music", "Gaming"],
        },
        {
          id: 2,
          name: "Ruchit",
          address: "Ahmedabad",
          gender: "Male",
          doj: "2022/08/01",
          hobbies: ["Music", "Gaming"],
        },
        {
          id: 3,
          name: "Vikas",
          address: "Himmat Nagar",
          gender: "Male",
          doj: "2022/08/01",
          hobbies: ["Music", "Gaming"],
        },
        {
          id: 4,
          name: "John Doe",
          address: "New York",
          gender: "Male",
          doj: "2022/11/1",
          hobbies: ["Travel"],
        },
      ],
      form: {
        id: "",
        name: "",
        address: "",
        gender: "",
        doj: "",
        hobbies: [],
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.employees.push(this.form);
    },

    sort() {
      this.employees.sort((a, b) => a.name.localeCompare(b.name));
    },

    filterByDoj() {
      this.employees = this.employees.filter(
        (emp) => new Date(emp.doj).getMonth() === new Date().getMonth()
      );
    },
  },
};
</script>

<template>
  <div class="container whitespace-nowrap">
    <div class="flex flex-col">
      <div class="">
        <h1 class="mt-10 mb-5 text-3xl text-center">Employee Form</h1>
        <form
          action=""
          class="flex items-center justify-center gap-3"
          @submit="handleSubmit"
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
                v-model="form.id"
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
                v-model="form.name"
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
                v-model="form.address"
              />
            </div>
            <div class="flex items-center gap-8">
              <label for="doj">Date of joining</label>
              <input
                type="date"
                name="doj"
                id="doj"
                class="w-full px-3 py-2 border border-black outline-none focus:border-blue-500"
                v-model="form.doj"
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
                    v-model="form.gender"
                  />
                  <label for="male">Male</label>
                </div>
                <div class="flex gap-2">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="Female"
                    v-model="form.gender"
                  />
                  <label for="female">Female</label>
                </div>
              </div>
            </div>

            <div class="flex gap-8">
              <label for="hobbies">Hobbies</label>
              <div class="flex gap-4">
                <div class="flex gap-2">
                  <input
                    type="checkbox"
                    name="hobbies"
                    id="music"
                    v-model="form.hobbies"
                    value="Music"
                  />
                  <label for="music">Music</label>
                </div>
                <div class="flex gap-2">
                  <input
                    type="checkbox"
                    name="hobbies"
                    id="gaming"
                    value="Gaming"
                    v-model="form.hobbies"
                  />
                  <label for="gaming">Gaming</label>
                </div>
                <div class="flex gap-2">
                  <input
                    type="checkbox"
                    name="hobbies"
                    value="Travel"
                    id="travel"
                    v-model="form.hobbies"
                  />
                  <label for="travel">Travel</label>
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
          <button class="px-4 py-2 text-white bg-gray-500" @click="sort">
            Sort by name
          </button>
          <button class="px-4 py-2 text-white bg-gray-500" @click="filterByDoj">
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
            <tr v-for="employee of employees">
              <td class="px-5 border border-black">{{ employee.id }}</td>
              <td class="px-5 border border-black">{{ employee.name }}</td>
              <td class="px-5 border border-black">{{ employee.address }}</td>
              <td class="px-5 border border-black">{{ employee.gender }}</td>
              <td class="px-5 border border-black">{{ employee.doj }}</td>
              <td class="px-5 border border-black">
                {{ employee.hobbies.join(", ") }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
