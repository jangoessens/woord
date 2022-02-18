<template>
  <section class="container">
    <Board></Board>
    <Keyboard></Keyboard>
  </section>
</template>


<script>
import Board from "./components/Board.vue";
import Keyboard from "./components/Keyboard.vue";
export default {
  mounted() {
    console.log("test");
    this.$store.dispatch('startGame', 5);
  },
  components: { Board, Keyboard }
}
</script>

<style>
:root {
  --dark-grey: #28262C;
  --light-grey:#CFCEC9;
  --very-light-grey: #ECECEA;
  --green: #81E979;
  --yellow:#F1BC41;
}

html {
  font-family: 'Courier New', Courier, monospace;
}
#app {
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
}
.container {
    display: grid;
    grid-template-rows: minmax(1fr, 480px) auto;
    grid-template-rows:  1fr auto;
    max-width: 466px;
    margin: auto;
    gap: 12px;
    height: 100vh;
    align-content: space-evenly;
    align-items: end;
    justify-items: stretch;
}
</style>
