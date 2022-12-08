<script>
export default {
  props: {
    applications: Array,
  },
  methods: {
    emergencyContactsColspan(index) {
      if (this.applications[index].references.length > 0) return "2.5";
      return "5";
    },
    referencesColspan(index) {
      if (this.applications[index].emergencyContacts.length > 0) return "2.5";
      return "5";
    },
  },
};
</script>
<template>
  <table
    v-for="(application, index) of applications"
    aria-describedby="Applications"
    class="w-full mb-5 text-center text-white border border-collapse table-auto border-slate-900"
  >
    <thead>
      <tr class="text-white border bg-slate-800">
        <th class="px-2 py-1 border border-slate-900">Sr no</th>
        <th class="px-2 py-1 border border-slate-900">Name</th>
        <th class="px-2 py-1 border border-slate-900">DOB</th>
        <th class="px-2 py-1 border border-slate-900">Place of birth</th>
        <th class="px-2 py-1 border border-slate-900">First Language</th>
        <th class="px-2 py-1 border border-slate-900">Address</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-white border bg-slate-500">
        <td class="px-2 py-1 border border-slate-900" rowspan="5">
          {{ index + 1 }}
        </td>
        <td class="px-2 py-1 border border-slate-900">
          {{ Object.values(application.name).join(" ") }}
        </td>
        <td class="px-2 py-1 border border-slate-900">
          {{ application.dateOfBirth }}
        </td>
        <td class="px-2 py-1 border border-slate-900">
          {{ application.placeOfBirth }}
        </td>
        <td class="px-2 py-1 border border-slate-900">
          {{ application.firstLanguage }}
        </td>
        <td class="px-2 py-1 border border-slate-900">
          {{ Object.values(application.address).join(" ") }}
        </td>
      </tr>
      <tr>
        <td colspan="5" class="p-2">
          <table class="w-full text-center border border-collapse table-auto">
            <caption
              class="px-2 py-1 font-bold border bg-slate-800 border-slate-900"
            >
              Father
            </caption>
            <thead>
              <tr class="px-2 py-1 border border-slate-900">
                <th class="px-2 py-1 border border-slate-900">Name</th>
                <th class="px-2 py-1 border border-slate-900">Email</th>
                <th class="px-2 py-1 border border-slate-900">Phone</th>
                <th class="px-2 py-1 border border-slate-900">Education</th>
                <th class="px-2 py-1 border border-slate-900">Qualification</th>
                <th class="px-2 py-1 border border-slate-900">Profession</th>
                <th class="px-2 py-1 border border-slate-900">Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr class="px-2 py-1 border border-slate-900">
                <td class="px-2 py-1 border border-slate-900">
                  {{ Object.values(application.father.name).join(" ") }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.father.email }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.father.phone }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.father.education.join(", ") }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.father.qualification }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.father.profession }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.father.designation }}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td colspan="5" class="p-2">
          <table class="w-full text-center border border-collapse table-auto">
            <caption
              class="px-2 py-1 font-bold border bg-slate-800 border-slate-900"
            >
              Mother
            </caption>
            <thead>
              <tr class="px-2 py-1 border border-slate-900">
                <th class="px-2 py-1 border border-slate-900">Name</th>
                <th class="px-2 py-1 border border-slate-900">Email</th>
                <th class="px-2 py-1 border border-slate-900">Phone</th>
                <th class="px-2 py-1 border border-slate-900">Education</th>
                <th class="px-2 py-1 border border-slate-900">Qualification</th>
                <th class="px-2 py-1 border border-slate-900">Profession</th>
                <th class="px-2 py-1 border border-slate-900">Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr class="px-2 py-1 border border-slate-900">
                <td class="px-2 py-1 border border-slate-900">
                  {{ Object.values(application.mother.name).join(" ") }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.father.email }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.father.phone }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.mother.education.join(", ") }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.mother.qualification }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.mother.profession }}
                </td>
                <td class="px-2 py-1 border border-slate-900">
                  {{ application.mother.designation }}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr
        v-if="
          application.emergencyContacts.length > 0 ||
          application.references.length > 0
        "
      >
        <td class="p-2" colspan="5">
          <div
            :class="{
              grid: true,
              'grid-cols-2 gap-2':
                application.emergencyContacts.length > 0 &&
                application.references.length > 0,
            }"
          >
            <table
              v-if="application.emergencyContacts.length > 0"
              class="w-full text-center border border-collapse table-auto"
            >
              <caption
                class="px-2 py-1 font-bold border bg-slate-800 border-slate-900"
              >
                Emergency Contacts
              </caption>
              <thead>
                <tr class="border">
                  <th class="px-2 py-1 border border-slate-900">Sr no</th>
                  <th class="px-2 py-1 border border-slate-900">Phone</th>
                  <th class="px-2 py-1 border border-slate-900">Relation</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(contact, index) of application.emergencyContacts">
                  <td class="px-2 py-1 border border-slate-900">
                    {{ index + 1 }}
                  </td>
                  <td class="px-2 py-1 border border-slate-900">
                    {{ contact.phone }}
                  </td>
                  <td class="px-2 py-1 border border-slate-900">
                    {{ contact.relation }}
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              v-if="application.references.length > 0"
              class="w-full text-center border border-collapse table-auto"
            >
              <caption
                class="px-2 py-1 font-bold border bg-slate-800 border-slate-900"
              >
                References
              </caption>
              <thead>
                <tr class="">
                  <th class="px-2 py-1 border border-slate-900">Sr no</th>
                  <th class="px-2 py-1 border border-slate-900">Phone</th>
                  <th class="px-2 py-1 border border-slate-900">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(reference, index) of application.references"
                  :key="index"
                >
                  <td class="px-2 py-1 border border-slate-900">
                    {{ index + 1 }}
                  </td>
                  <td class="px-2 py-1 border border-slate-900">
                    {{ reference.phone }}
                  </td>
                  <td class="px-2 py-1 border border-slate-900">
                    {{ reference.address }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
