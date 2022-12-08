import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import FormField from "./FormField";
import Display from "./Display";

const Form = () => {
  // State
  const [applications, setApplications] = useState([]);
  const [fatherEducation, setFatherEducation] = useState(["", ""]);
  const [motherEducation, setMotherEducation] = useState(["", ""]);

  // Methods
  const onSubmit = (data) => {
    reset();
    setApplications((prev) => [...prev, data]);
  };

  const addField = (e, setState) => {
    e.preventDefault();
    setState((prev) => {
      return [...prev, ""];
    });
  };

  const removeField = (e, setState, index) => {
    e.preventDefault();
    setState((prev) => {
      return prev.filter((_, i) => i !== index);
    });
  };

  const border = (field) => {
    if (errors[field])
      return "border-rose-500 border-l-[12px] focus:border-yellow-500";
    else if (dirtyFields[field] && !errors[field])
      return "border-emerald-500 border-l-[12px]";
    else return "";
  };

  const getDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 3);
    return date;
  };

  //   Schema, Validation
  const schema = yup.object({
    name: yup.object({
      first: yup.string().required("First name is required"),
      middle: yup.string().required("Middle name is required"),
      last: yup.string().required("Last name is required"),
    }),
    dateOfBirth: yup
      .date()
      .nullable()
      .typeError("Invalid date")
      .max(getDate(), "Student must be at least 3 years old.")
      .required(""),
    placeOfBirth: yup.string().required(),
    firstLanguage: yup.string(),
    address: yup.object({
      city: yup.string(),
      state: yup.string(),
      country: yup.string(),
      pin: yup.string(),
    }),
    father: yup.object({
      name: yup.object({
        first: yup.string().required("First name is required"),
        middle: yup.string().required("Middle name is required"),
        last: yup.string().required("Last name is required"),
      }),
      email: yup.string().email().required(),
      phone: yup
        .string()
        .required()
        .matches(/^\d+$/, "Enter numeric value")
        .length(10, "Enter a valid number."),
      education: yup.array().of(yup.string().required()),
      qualification: yup.string(),
      designation: yup.string(),
      profession: yup.string(),
    }),
    mother: yup.object({
      name: yup.object({
        first: yup.string().required("First name is required"),
        middle: yup.string().required("Middle name is required"),
        last: yup.string().required("Last name is required"),
      }),
      email: yup.string().email().required(),
      phone: yup
        .string()
        .required()
        .matches(/^\d+$/, "Enter numeric value")
        .length(10, "Enter a valid number."),
      education: yup.array().of(yup.string().required()),
      qualification: yup.string(),
      designation: yup.string(),
      profession: yup.string(),
    }),
    emergencyContact: yup.object().shape({
      phone: yup
        .string()
        .required()
        .matches(/^\d+$/, "Enter numeric value")
        .length(10, "Enter a valid number."),
      relation: yup.string().required("Relation is required"),
    }),
    reference: yup.object().shape({
      phone: yup
        .string()
        .required()
        .matches(/^\d+$/, "Enter numeric value")
        .length(10, "Enter a valid number."),
      address: yup.string().required("Address is required"),
    }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });

  const fillValues = () => {
    setValue(
      "name",
      { first: "John", middle: "M.", last: "Doe" },
      { shouldDirty: true }
    );
    setValue("dateOfBirth", "2019-11-01", { shouldDirty: true });
    setValue("placeOfBirth", "Ahmedabad", { shouldDirty: true });
    setValue("firstLanguage", "Hindi", { shouldDirty: true });
    setValue(
      "address",
      {
        city: "New York",
        state: "NY",
        country: "USA",
        pin: "123456",
      },
      { shouldDirty: true }
    );
    setValue(
      "father",
      {
        name: { first: "Michael", middle: "M.", last: "Doe" },
        email: "example@abc.com",
        phone: "9876567896",
        education: ["Some", "Degree"],
        qualification: "Some thing",
        profession: "Some where",
        designation: "some post",
      },
      { shouldDirty: true }
    );
    setValue(
      "mother",
      {
        name: { first: "Michelle", middle: "M.", last: "Doe" },
        email: "example@abc.com",
        phone: "9876567896",
        education: ["Some", "Degree"],
        qualification: "Some thing",
        profession: "Some where",
        designation: "some post",
      },
      { shouldDirty: true }
    );
    setValue(
      "emergencyContact",
      { phone: "9876543210", relation: "Father" },
      { shouldDirty: true }
    );
    setValue(
      "reference",
      { phone: "9876543210", address: "NY" },
      { shouldDirty: true }
    );
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div className="">
        <h1 className="mb-4 text-3xl">Admission Form</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid items-center grid-cols-8 mb-8">
            <h2 className="text-xl text-center">Name</h2>
            <div className="flex flex-1 col-span-7 gap-2">
              <FormField
                register={register("name.first")}
                placeholder="First Name"
                error={errors.name?.first}
                dirty={dirtyFields.name?.first}
              />
              <FormField
                register={register("name.middle")}
                placeholder="Middle Name"
                error={errors.name?.middle}
                dirty={dirtyFields.name?.middle}
              />
              <FormField
                register={register("name.last")}
                placeholder="Last Name"
                error={errors.name?.last}
                dirty={dirtyFields.name?.last}
              />
            </div>
          </div>
          <div className="grid items-center grid-cols-8 mb-8">
            <h2 className="text-xl text-center">Birth</h2>
            <div className="flex flex-1 col-span-7 gap-2">
              <FormField
                type="date"
                register={register("dateOfBirth")}
                placeholder=""
                error={errors.dateOfBirth}
                dirty={dirtyFields.dateOfBirth}
              />
              <div className="flex flex-col items-start w-full">
                <select
                  placeholder="Place of Birth"
                  {...register("placeOfBirth")}
                  className={`px-4 appearance-none py-2 text-black outline-none transition-all w-full ${border(
                    "placeOfBirth"
                  )}`}
                >
                  <option value={null}>Select city</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                </select>
                {errors.placeOfBirth && (
                  <div className="text-sm text-rose-500">
                    {errors.placeOfBirth.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start w-full">
                <select
                  placeholder="First Language"
                  {...register("firstLanguage")}
                  className={`px-4 appearance-none py-2 text-black outline-none transition-all w-full ${border(
                    "firstLanguage"
                  )}`}
                >
                  <option value="">Select language</option>
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                  <option value="Gujarati">Gujarati</option>
                </select>
                {errors.placeOfBirth && (
                  <div className="text-sm text-rose-500">
                    {errors.placeOfBirth.message}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="grid items-center grid-cols-8 mb-8">
            <h2 className="text-xl text-center">Address</h2>
            <div className="flex flex-1 col-span-7 gap-2">
              <FormField
                placeholder="City"
                register={register("address.city")}
                error={errors.address?.city}
                dirty={dirtyFields.address?.city}
              />
              <FormField
                placeholder="State"
                register={register("address.state")}
                error={errors.address?.state}
                dirty={dirtyFields.address?.state}
              />{" "}
              <FormField
                placeholder="Country"
                register={register("address.country")}
                error={errors.address?.country}
                dirty={dirtyFields.address?.country}
              />
              <FormField
                register={register("address.pin")}
                error={errors.address?.pin}
                dirty={dirtyFields.address?.pin}
                placeholder="Pin Code"
              />
            </div>
          </div>
          <div className="grid grid-cols-8 mb-8">
            <h2 className="text-xl text-center ">Father</h2>
            <div className="flex flex-col flex-1 col-span-7 gap-2">
              <div className="flex gap-2 mb-4">
                <FormField
                  register={register("father.name.first")}
                  placeholder="First Name"
                  error={errors.father?.name?.first}
                  dirty={dirtyFields.father?.name?.first}
                />
                <FormField
                  register={register("father.name.middle")}
                  placeholder="Middle Name"
                  error={errors.father?.name?.middle}
                  dirty={dirtyFields.father?.name?.middle}
                />
                <FormField
                  register={register("father.name.last")}
                  placeholder="Last Name"
                  error={errors.father?.name?.last}
                  dirty={dirtyFields.father?.name?.last}
                />
              </div>
            </div>
            <div></div>
            <div className="col-span-7">
              <div className="grid items-center grid-cols-8 mb-2">
                <h2 className="text-xl text-center">Contact</h2>
                <div className="flex flex-1 col-span-7 gap-2">
                  <FormField
                    register={register("father.email")}
                    error={errors.father?.email}
                    dirty={dirtyFields.father?.email}
                    placeholder="Email"
                  />
                  <FormField
                    register={register("father.phone")}
                    error={errors.father?.phone}
                    dirty={dirtyFields.father?.phone}
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="grid items-center grid-cols-8 mb-2">
                <h2 className="text-xl text-center">Education</h2>
                <div className="flex flex-wrap items-start flex-1 col-span-7 gap-2">
                  {fatherEducation.map((_, index) => {
                    return (
                      <div className="flex items-start" key={index}>
                        <FormField
                          register={register(`father.education.${index}`)}
                          error={errors.father?.education[index]}
                          dirty={dirtyFields.father?.education[index]}
                          placeholder="Education"
                        />

                        <button
                          className="px-4 py-2 bg-rose-500"
                          onClick={(e) =>
                            removeField(e, setFatherEducation, index)
                          }
                        >
                          &#x2A2F;
                        </button>
                      </div>
                    );
                  })}

                  <button
                    className="px-4 py-2 bg-sky-500"
                    onClick={(e) => addField(e, setFatherEducation)}
                  >
                    &#x2B; Add
                  </button>
                </div>
              </div>

              <div className="grid items-center grid-cols-8 mb-2">
                <h2 className="text-xl text-center">Professional</h2>
                <div className="flex flex-1 col-span-7 gap-2">
                  <FormField
                    register={register("father.qualification")}
                    error={errors.father?.qualification}
                    dirty={dirtyFields.father?.qualification}
                    placeholder="Qualification"
                  />
                  <FormField
                    register={register("father.profession")}
                    error={errors.father?.profession}
                    dirty={dirtyFields.father?.profession}
                    placeholder="Profession"
                  />
                  <FormField
                    register={register("father.designation")}
                    error={errors.father?.designation}
                    dirty={dirtyFields.father?.designation}
                    placeholder="Designation"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-8 mb-8">
            <h2 className="text-xl text-center ">Mother</h2>
            <div className="flex flex-col flex-1 col-span-7 gap-2">
              <div className="flex gap-2 mb-4">
                <FormField
                  register={register("mother.name.first")}
                  placeholder="First Name"
                  error={errors.mother?.name?.first}
                  dirty={dirtyFields.mother?.name?.first}
                />
                <FormField
                  register={register("mother.name.middle")}
                  placeholder="Middle Name"
                  error={errors.mother?.name?.middle}
                  dirty={dirtyFields.mother?.name?.middle}
                />
                <FormField
                  register={register("mother.name.last")}
                  placeholder="Last Name"
                  error={errors.mother?.name?.last}
                  dirty={dirtyFields.mother?.name?.last}
                />
              </div>
            </div>
            <div></div>
            <div className="col-span-7">
              <div className="grid items-center grid-cols-8 mb-2">
                <h2 className="text-xl text-center">Contact</h2>
                <div className="flex flex-1 col-span-7 gap-2">
                  <FormField
                    register={register("mother.email")}
                    error={errors.mother?.email}
                    dirty={dirtyFields.mother?.email}
                    placeholder="Email"
                  />
                  <FormField
                    register={register("mother.phone")}
                    error={errors.mother?.phone}
                    dirty={dirtyFields.mother?.phone}
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="grid items-center grid-cols-8 mb-2">
                <h2 className="text-xl text-center">Education</h2>
                <div className="flex flex-wrap items-start flex-1 col-span-7 gap-2">
                  {motherEducation.map((_, index) => {
                    return (
                      <div className="flex items-start" key={index}>
                        <FormField
                          register={register(`mother.education.${index}`)}
                          error={errors.mother?.education[index]}
                          dirty={dirtyFields.mother?.education[index]}
                          placeholder="Education"
                        />

                        <button
                          className="px-4 py-2 bg-rose-500"
                          onClick={(e) =>
                            removeField(e, setMotherEducation, index)
                          }
                        >
                          &#x2A2F;
                        </button>
                      </div>
                    );
                  })}

                  <button
                    className="px-4 py-2 bg-sky-500"
                    onClick={(e) => addField(e, setMotherEducation)}
                  >
                    &#x2B; Add
                  </button>
                </div>
              </div>
              <div className="grid items-center grid-cols-8 mb-2">
                <h2 className="text-xl text-center">Professional</h2>
                <div className="flex flex-1 col-span-7 gap-2">
                  <FormField
                    register={register("mother.qualification")}
                    error={errors.mother?.qualification}
                    dirty={dirtyFields.mother?.qualification}
                    placeholder="Qualification"
                  />
                  <FormField
                    register={register("mother.profession")}
                    error={errors.mother?.profession}
                    dirty={dirtyFields.mother?.profession}
                    placeholder="Profession"
                  />
                  <FormField
                    register={register("mother.designation")}
                    error={errors.mother?.designation}
                    dirty={dirtyFields.mother?.designation}
                    placeholder="Designation"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid items-center grid-cols-8 gap-2 mb-8">
            <h2 className="text-xl text-center ">Emergency Contact</h2>
            <div className="flex flex-1 col-span-7 gap-2">
              <FormField
                register={register("emergencyContact.phone")}
                error={errors.emergencyContact?.phone}
                dirty={dirtyFields.emergencyContact?.phone}
                placeholder="Phone"
              />

              <FormField
                register={register("emergencyContact.relation")}
                error={errors.emergencyContact?.relation}
                dirty={dirtyFields.emergencyContact?.relation}
                placeholder="Relation"
              />
            </div>
          </div>
          <div className="grid items-center grid-cols-8 gap-2 mb-8">
            <h2 className="text-xl text-center ">Reference</h2>
            <div className="flex flex-1 col-span-7 gap-2">
              <FormField
                register={register("reference.address")}
                error={errors.reference?.address}
                dirty={dirtyFields.reference?.address}
                placeholder="Address"
              />
              <FormField
                register={register("reference.phone")}
                error={errors.reference?.phone}
                dirty={dirtyFields.reference?.phone}
                placeholder="Phone"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 mt-5 bg-green-500 cursor-pointer group"
            >
              <span className="w-4 h-4 -mr-3.5 opacity-0 group-hover:mx-0 group-hover:opacity-100 transition-all">
                &#x2713;
              </span>
              Submit
            </button>
            <button
              type="button"
              className="px-4 py-2 ml-4 bg-red-500"
              onClick={fillValues}
            >
              Fill
            </button>
          </div>
        </form>
      </div>
      {applications.length > 0 && (
        <div>
          <h1 className="mb-4 text-2xl text-center">Applications</h1>
          <Display applications={applications} />
        </div>
      )}
    </div>
  );
};

export default Form;
