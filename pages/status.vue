<template>
  <div>
    <br />
    <br />
    <br />
    <table>
      <tbody>
        <tr>
          <th>-</th>
          <th>done</th>
          <th>session_id</th>
          <th>url</th>
          <th>remove</th>
        </tr>
        <tr v-for="status in view_status" :key="status.id">
          <td>
            <input
              type="checkbox"
              :checked="status.done"
              @change="toggle(status)"
            />
          </td>

          <td>{{ status.done }}</td>
          <td>{{ status.session_id }}</td>
          <td>
            <a :href="status.url">{{ status.url }}</a>
          </td>
          <td>
            <button @click="remove(status.id)">remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      session_id: '',
      url: '',
      done: false
    }
  },
  computed: {
    view_status() {
      // return this.$store.state.view_status.statuses
      return this.$store.getters['view_status/orderedStatus']
    }
  },
  created() {
    this.$store.dispatch('view_status/init')
  },
  methods: {
    remove(id) {
      this.$store.dispatch('view_status/remove', id)
    },
    toggle(status) {
      this.$store.dispatch('view_status/toggle', status)
    }
  }
}
</script>
