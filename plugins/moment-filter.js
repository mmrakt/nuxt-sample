import Vue from 'vue'
import moment from 'moment'

// Vue.filter('dateFormat', function(value) {
//   const date = moment(value);
//   return date.format("YYYY/MM/DD");
// })

export let getDate = function() {
  let now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()
  let sortedDate = year + '/' + month + '/' + date + ' ' + hour + ':' + minute + ':' + second
  return sortedDate
}
