<template>
    <secton class="letterbox">
        <span
            class="input"
            v-if="letter"
            v-bind:class="[ letter.inWord && !letter.correctSpace ? 'in-word' : '', letter.correctSpace ? 'correct' : '']"
            v-bind:key="letter.letter"
        >{{ letter.letter }}</span>
    </secton>
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
$delay: .3s;
.letterbox {
  height:100%;
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
      animation:flip-letter .7s ease-out forwards;
    &.in-word {
      color: yellow;
    }
    &.correct {
      color: green;
    }
  }
}

@for $n from 1 through 10 {
    .letterbox:nth-of-type(#{$n + 1}){
        animation-delay: $n * $delay;
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