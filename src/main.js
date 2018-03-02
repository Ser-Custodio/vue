import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

Vue.component('greeting',{
  template: '<h1> Welcome</h1>'
});

Vue.component('coffee',{
  props: ['name', 'status'],
  template: `<li :class="{red: status}">{{ name }} => <toggle-button v-model="status" :labels="{checked: 'On', unchecked: 'Off'}"  /></li>`
});
new Vue({
  el: '#app',
  render: h => h(App)
})
