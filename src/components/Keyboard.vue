<template>
    <section class="keyboard">
        <span @click="setValue(value)" class="input" v-for="(value, letter) in letters" v-bind:class="[letter, value.guessed ? 'guessed' : '', value.inWord ? 'in-word': '', value.correctSpace ? 'correct' : '']" v-bind:key="value">{{ letter }}</span>
        <span @click="makeGuess" class="input submit">-></span>
        <span class="input back">back</span>
    </section>
</template>

<script>
export default {
    computed: {
        letters() {
            return this.$store.getters.inputs;
        },
    },
    methods: {
        setValue(value) {
            this.$store.dispatch('registerInput', value);
        },
        makeGuess() {
            this.$store.dispatch('makeGuess');
        }
    }
}
</script>

// <style lang="scss" scoped>
.keyboard {
    display: grid;
    height: 100%;
    gap: 6px;
    grid-template-areas:
        "Q W E R T Y U I O P"
        "A S D F G H J K L . "
        "back Z X C V B N M submit submit";     align-items: stretch;
    justify-content: stretch;
    }


.input {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: 4px;
}

.back {
    grid-area: back;
}
.submit {
    grid-area: submit;

}

$letters: 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z';

@each $letter in $letters {
    .input.#{$letter} {
        grid-area: #{$letter};
    }
}

.input {
    &.guessed {
        background: #292929;
        color: #393939;
    }
    &.guessed.in-word {
        background: yellow;
    }
    &.guessed.correct {
        background: green;
    }
}

</style>