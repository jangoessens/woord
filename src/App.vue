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
.container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    max-width: 466px;
    margin: auto;
    gap: 12px;
    height: 100vh;
    align-content: space-evenly;
    align-items: end;
    justify-items: stretch;
    @media screen and min-width(360px) {
      padding: 0 16px;  
    }
}
</style>
