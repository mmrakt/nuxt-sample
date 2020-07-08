<template>
  <v-content>
    <v-card width="1000px" class="mx-auto my-10">
      <v-card-title>{{ userData.name }}</v-card-title>
      <v-card-subtitle>{{ userData.email}}</v-card-subtitle>
      <v-card-text></v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>
  </v-content>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    userData() {
      return this.$store.state.auth.data
    }
  }
}
</script>

<style lang="scss" scoped></style>
