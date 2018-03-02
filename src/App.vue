<template>
  <div id="app">
    <greeting></greeting>
    <!--<img src="./assets/logo.png">-->
    <h1>{{ msg }}</h1>
    <!--<h2>Some Links </h2>-->
    <ul>
      <coffee :name="machine.name" :status="machine.status" v-for="machine in machines"></coffee>
    </ul>


  </div>
</template>


  <script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Coffee Machines:',
        machines: [
          {
            name: 'Machine1',
            status: true
          },
          {
            name: 'Machine2',
            status: false
          }]
      }
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-weight: bold;
    margin: 10px 10px;
    //display: inline-block;
  }

  .red {
    color: red;
  }
</style>
