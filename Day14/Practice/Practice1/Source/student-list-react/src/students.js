const students = [
  {
    id: "1",
    fees: {
      status: "Paid",
      amount: 20000,
      date: new Date("2022-08-01"),
    },
    academics: {
      result: "Pass",
      marks: {
        total: 600,
        obtained: 350,
      },
      grade: "B",
    },
    name: "John Doe",
    father: "Michael Doe",
    mother: "Michelle Doe",
  },
];

const getResult = (id) => {
  return students.find((student) => student.id === id).academics;
};

const getFees = (id) => {
  return students.find((student) => student.id === id).fees;
};

export { getResult, getFees };
export default students;
