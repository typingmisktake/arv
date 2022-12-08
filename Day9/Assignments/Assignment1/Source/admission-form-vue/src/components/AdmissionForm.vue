<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  minLength,
  helpers,
  email,
  numeric,
} from "@vuelidate/validators";

import FormField from "./FormField.vue";
import Display from "./Display.vue";

const form = {
  name: {
    first: "",
    middle: "",
    last: "",
  },
  dateOfBirth: "",
  placeOfBirth: "",
  firstLanguage: "",
  address: {
    city: "",
    state: "",
    country: "",
    pin: "",
  },
  father: {
    name: {
      first: "",
      middle: "",
      last: "",
    },
    email: "",
    education: [""],
    qualification: "",
    profession: "",
    designation: "",
    phone: "",
  },
  mother: {
    name: {
      first: "",
      middle: "",
      last: "",
    },
    email: "",
    education: [""],
    qualification: "",
    profession: "",
    designation: "",
    phone: "",
  },
  emergencyContacts: [{ phone: "", relation: "" }],
  references: [{ address: "", phone: "" }],
};

// Custom Validations
const minAge = (years) => (value) =>
  !helpers.req(value) ||
  new Date().getFullYear() - new Date(value).getFullYear() >= years;

const length = (length) => (value) => {
  return !helpers.req(value) || value.toString().length === length;
};

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      form: { ...form },
      applications: [],
    };
  },
  validations() {
    const rules = {
      form: {
        name: {
          first: {
            required,
            minLength: minLength(3),
          },
          middle: {
            required,
            minLength: minLength(3),
          },
          last: {
            required,
            minLength: minLength(3),
          },
        },
        dateOfBirth: {
          required,
          minAge: helpers.withMessage(
            "Student must be at least 3 years old",
            minAge(3)
          ),
        },
        placeOfBirth: {},
        firstLanguage: {},
        address: {
          city: {},
          state: {},
          country: {},
          pin: {
            length: helpers.withMessage(
              "Pin code must be a 6 digit number",
              length(6)
            ),
          },
        },
        father: {
          name: {
            first: {
              required,
              minLength: minLength(3),
            },
            middle: {
              required,
              minLength: minLength(3),
            },
            last: {
              required,
              minLength: minLength(3),
            },
          },
          email: { email },
          education: [],
          qualification: "",
          profession: "",
          designation: "",
          phone: {
            numeric,
            required,
            length: helpers.withMessage(
              "Phone must be 10 digit number",
              length(10)
            ),
          },
        },
        mother: {
          name: {
            first: {
              required,
              minLength: minLength(3),
            },
            middle: {
              required,
              minLength: minLength(3),
            },
            last: {
              required,
              minLength: minLength(3),
            },
          },
          email: { email },
          education: [],
          qualification: "",
          profession: "",
          designation: "",
          phone: {
            required,
            numeric,
            length: helpers.withMessage(
              "Phone must be 10 digit number",
              length(10)
            ),
          },
        },
        emergencyContacts: [],
        references: [],
      },
    };

    this.form.father.education.forEach(() => {
      rules.form.father.education.push({ required });
    });
    this.form.mother.education.forEach(() => {
      rules.form.mother.education.push({ required });
    });
    this.form.emergencyContacts.forEach(() => {
      rules.form.emergencyContacts.push({
        phone: {
          required,
          numeric,
          length: helpers.withMessage(
            "Phone must be 10 digit number",
            length(10)
          ),
        },
        relation: { required },
      });
    });
    this.form.references.forEach(() => {
      rules.form.references.push({
        phone: {
          required,
          numeric,
          length: helpers.withMessage(
            "Phone must be 10 digit number",
            length(10)
          ),
        },
        address: {},
      });
    });

    return rules;
  },

  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      if (!(await this.v$.form.$validate())) return;
      this.applications.push(this.form);

      // Reset form
      this.v$.$reset();
      this.form = { ...form };
    },

    addEducation(e, parent) {
      e.preventDefault();
      this.form[parent].education.push("");
    },

    removeEducation(e, parent, index) {
      e.preventDefault();
      this.form[parent].education.splice(index, 1);
    },

    addEmergencyContact(e) {
      e.preventDefault();
      this.form.emergencyContacts.push({ phone: "", relation: "" });
    },

    removeEmergencyContact(e, index) {
      e.preventDefault();
      this.form.emergencyContacts.splice(index, 1);
    },

    addReference(e, index) {
      e.preventDefault();
      this.form.references.push({ phone: "", address: "" });
    },
    removeReference(e, index) {
      e.preventDefault();
      this.form.references.splice(index, 1);
    },

    fillValues(e) {
      e.preventDefault();
      this.form = {
        name: {
          first: "John",
          middle: "Mitchell",
          last: "Doe",
        },
        address: {
          city: "New York",
          state: "NY",
          country: "USA",
          pin: "123456",
        },
        dateOfBirth: "2000-10-26",
        placeOfBirth: "Brooklyn",
        firstLanguage: "English",
        father: {
          name: {
            first: "Mitchell",
            middle: "Michael",
            last: "Doe",
          },
          email: "id@domain.com",
          phone: "1234567890",
          education: ["Some", "Degree"],
          qualification: "Something",
          profession: "Somewhere",
          designation: "Some post",
        },
        mother: {
          name: {
            first: "Susan",
            middle: "Anthony",
            last: "Smith",
          },
          email: "id@domain.com",
          phone: "9876543210",
          education: ["Some", "Degree"],
          qualification: "Something",
          profession: "Somewhere",
          designation: "Some post",
        },
        emergencyContacts: [
          {
            phone: 7657283549,
            relation: "Someone",
          },
        ],
        references: [
          {
            phone: "7564825462",
            address: "Somewhere",
          },
        ],
      };
    },
  },

  components: { FormField, Display },
};
</script>
<template>
  <div class="flex flex-col gap-4">
    <div>
      <form action="" @submit="handleSubmit">
        <div>
          <h2 class="mb-1 text-xl">Name</h2>
          <div class="flex gap-2 mb-4">
            <FormField :field="v$.form.name.first" placeholder="First Name" />

            <FormField :field="v$.form.name.middle" placeholder="Middle Name" />

            <FormField :field="v$.form.name.last" placeholder="Last Name" />
          </div>
        </div>
        <div>
          <h2 class="mb-1 text-xl">Birth</h2>
          <div class="flex gap-2 mb-4">
            <FormField
              :field="v$.form.dateOfBirth"
              placeholder=""
              type="date"
            />
            <FormField
              :field="v$.form.placeOfBirth"
              placeholder="Place of Birth"
            />
            <FormField
              :field="v$.form.firstLanguage"
              placeholder="First Language"
            />
          </div>
        </div>
        <div>
          <h2 class="mb-1 text-xl">Address</h2>
          <div class="grid grid-cols-2 gap-2 mb-4">
            <FormField :field="v$.form.address.city" placeholder="City" />
            <FormField :field="v$.form.address.state" placeholder="State" />
            <FormField :field="v$.form.address.country" placeholder="Country" />
            <FormField
              :field="v$.form.address.pin"
              placeholder="Pin Code"
              type="number"
            />
          </div>
        </div>
        <div class="mt-8">
          <h2 class="mb-1 text-2xl font-semibold">Father</h2>
          <div class="flex gap-2 mb-4">
            <FormField
              :field="v$.form.father.name.first"
              placeholder="First Name"
            />
            <FormField
              :field="v$.form.father.name.middle"
              placeholder="Middle Name"
            />
            <FormField
              :field="v$.form.father.name.last"
              placeholder="Last Name"
            />
          </div>
          <div>
            <h3 class="mb-1 text-xl">Contact</h3>
            <div class="flex gap-2 mb-4">
              <FormField :field="v$.form.father.email" placeholder="Email" />
              <FormField :field="v$.form.father.phone" placeholder="Phone" />
            </div>
          </div>
          <div class="mb-4">
            <h3 class="mb-1 text-xl">Education</h3>
            <div class="grid items-start grid-cols-2 gap-2">
              <div
                v-for="(edu, index) of form.father.education"
                :key="index"
                class="flex items-start"
              >
                <FormField
                  :field="v$.form.father.education[index]"
                  placeholder="Education"
                />
                <button
                  @click="removeEducation($event, 'father', index)"
                  class="px-4 py-2 bg-rose-500"
                >
                  &Cross;
                </button>
              </div>
              <button
                class="px-4 py-2 bg-sky-500"
                @click="addEducation($event, 'father')"
              >
                &plus; Add
              </button>
            </div>
          </div>

          <div class="mb-4">
            <div class="grid grid-cols-2 gap-2">
              <FormField
                :field="v$.form.father.qualification"
                placeholder="Qualification"
              />
              <FormField
                :field="v$.form.father.profession"
                placeholder="Profession"
              />
              <FormField
                :field="v$.form.father.designation"
                placeholder="Designation"
              />
            </div>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="mb-1 text-2xl font-semibold">Mother</h2>
          <div class="flex gap-2 mb-4">
            <FormField
              :field="v$.form.mother.name.first"
              placeholder="First Name"
            />
            <FormField
              :field="v$.form.mother.name.middle"
              placeholder="Middle Name"
            />
            <FormField
              :field="v$.form.mother.name.last"
              placeholder="Last Name"
            />
          </div>
          <div>
            <h3 class="mb-1 text-xl">Contact</h3>
            <div class="flex gap-2 mb-4">
              <FormField :field="v$.form.mother.email" placeholder="Email" />
              <FormField :field="v$.form.mother.phone" placeholder="Phone" />
            </div>
          </div>
          <div class="mb-4">
            <h3 class="mb-1 text-xl">Education</h3>
            <div class="grid items-start grid-cols-2 gap-2">
              <div
                v-for="(edu, index) of form.mother.education"
                :key="index"
                class="flex items-start"
              >
                <FormField
                  :field="v$.form.mother.education[index]"
                  placeholder="Education"
                />

                <button
                  @click="removeEducation($event, 'mother', index)"
                  class="px-4 py-2 bg-rose-500"
                >
                  &Cross;
                </button>
              </div>
              <button
                class="px-4 py-2 bg-sky-500"
                @click="addEducation($event, 'mother')"
              >
                &plus; Add
              </button>
            </div>
          </div>

          <div class="mb-4">
            <div class="grid grid-cols-2 gap-2">
              <FormField
                :field="v$.form.mother.qualification"
                placeholder="Qualification"
              />
              <FormField
                :field="v$.form.mother.profession"
                placeholder="Profession"
              />
              <FormField
                :field="v$.form.mother.designation"
                placeholder="Designation"
              />
            </div>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="mb-1 text-2xl font-semibold">Emergency Contacts</h2>
          <div class="">
            <div
              v-for="(contact, index) of form.emergencyContacts"
              :key="index"
              class="grid grid-cols-2 gap-2 mb-2"
            >
              <div class="flex items-start gap-2">
                <button
                  @click="removeEmergencyContact($event, index)"
                  class="px-4 py-2 bg-rose-500"
                >
                  &Cross;
                </button>
                <FormField
                  :field="v$.form.emergencyContacts[index].phone"
                  placeholder="Phone"
                />
              </div>
              <FormField
                :field="v$.form.emergencyContacts[index].relation"
                placeholder="Relation"
              />
            </div>
            <button
              class="w-1/2 px-4 py-2 bg-sky-500"
              @click="addEmergencyContact"
            >
              &plus; Add
            </button>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="mb-1 text-2xl font-semibold">References</h2>
          <div class="">
            <div
              v-for="(contact, index) of form.references"
              :key="index"
              class="grid grid-cols-2 gap-2 mb-2"
            >
              <div class="flex items-start gap-2">
                <button
                  @click="removeReference($event, index)"
                  class="px-4 py-2 bg-rose-500"
                >
                  &Cross;
                </button>
                <FormField
                  :field="v$.form.references[index].phone"
                  placeholder="Phone"
                />
              </div>
              <FormField
                :field="v$.form.references[index].address"
                placeholder="Address"
              />
            </div>
            <button class="w-1/2 px-4 py-2 bg-sky-500" @click="addReference">
              &plus; Add
            </button>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="px-4 py-2 mt-5 bg-green-500 cursor-pointer group"
          >
            <span
              class="w-4 h-4 -mr-3.5 opacity-0 group-hover:mx-0 group-hover:opacity-100 transition-all"
              >&#x2713;</span
            >
            Submit
          </button>
          <button class="px-4 py-2 ml-4 bg-red-500" @click="fillValues">
            Test
          </button>
        </div>
      </form>
    </div>
    <div v-if="applications.length > 0">
      <h1 class="mb-4 text-2xl text-center">Applications</h1>
      <Display :applications="applications" />
    </div>
  </div>
</template>
