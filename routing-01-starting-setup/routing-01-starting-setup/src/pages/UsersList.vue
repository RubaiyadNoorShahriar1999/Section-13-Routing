<template>
  <button @click="DoSomething">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    DoSomething() {
      // console.log(this.users);
      // This will push a new route to the router history
      this.$router.push('/teams'); // This will push a new route to the router history
    },
    saveChanges() {
      this.changesSaved = true;
      // this.$router.push('/teams');
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('Users List component beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    // This will called before all other before hooks
    console.log('Users List component beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'You have unsaved changes, are you sure you want to leave?'
      );
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('Users List component unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
