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
.container {
    padding: 0 16px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    max-width: 466px;
    margin: auto;
    gap: 12px;
    height: 100vh;
    align-content: space-evenly;
    align-items: end;
    justify-items: stretch;
}
</style>
