<script>
export default {
  props: {
    profiles: [],
  },
};
</script>
<template>
  <table>
    <caption>
      Profiles
    </caption>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="profile of profiles">
        <td>{{ profile.id }}</td>
        <td>{{ profile.name }}</td>
        <td>{{ profile.address }}</td>
      </tr>
    </tbody>
  </table>
</template>
