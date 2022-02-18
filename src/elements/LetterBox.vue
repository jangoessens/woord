<template>
  <div class="letterbox">
    <span
      class="output"
      v-if="letter"
      v-bind:class="[letter.inWord && !letter.correctSpace ? 'in-word' : '', letter.correctSpace ? 'correct' : '']"
      v-bind:key="letter.letter"
    >{{ letter.letter }}</span>
  </div>
</template>

<script>
export default {
    props: {
        letter: Object,
    },
    computed: {
        input: {
            get() {
                return this.letter;
            },
            set(input) {
                console.log("no set method");
            }
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" >
$delay: 0.3s;
.letterbox {
  height: 100%;
  width: 100%;
  appearance: none;
  border: 0;
  border-radius: 4px;
  background: #393939;
  font-size: 58px;
  color: #f8f8f8;
  font-weight: 700;
  text-align: center;
  display: grid;
  place-items: center;
  &.guessed {
    animation: flip-letter 1s ease forwards;
    .output {
      transition-property: color transform;
      transition-duration: 1s;
      transition-delay: inherit;
      transition-timing-function: ease;
      transform:rotateY(-180deg);
      &.in-word {
        color: rgb(245, 245, 126);
      }
      &.correct {
        color: rgb(98, 214, 98);
      }
    }
  }
}

@for $n from 1 through 10 {
  .letterbox:nth-of-type(#{$n + 1}) {
    animation-delay: $n * $delay;
    transition-delay: $n  * $delay;
  }
}

@keyframes flip-letter {
  0% {
    transform: 0;
  }
  100% {
    transform: rotateY(180deg);
  }
}
</style>