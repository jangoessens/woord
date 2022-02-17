<template>
    <section class="keyboard">
        <span
            @click="setValue(value)"
            class="input"
            v-for="(value, letter) in letters"
            v-bind:class="[letter, value.guessed ? 'guessed' : '', value.inWord ? 'in-word' : '', value.correctSpace ? 'correct' : '']"
            v-bind:key="value"
        >{{ letter }}</span>
        <span @click="makeGuess" class="input submit">
            <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="24px"
                viewBox="0 0 32.75 32.75"
            >
                <g>
                    <path
                        d="M31.799,18.963l-9.351,11.012c-0.791,0.932-1.919,1.409-3.052,1.409c-0.916,0-1.834-0.312-2.587-0.949
		c-1.684-1.432-1.889-3.954-0.459-5.64l3.753-4.42H4c-2.209,0-4-1.791-4-4c0-2.208,1.791-4,4-4h16.105l-3.754-4.42
		c-1.43-1.684-1.225-4.208,0.459-5.638c1.687-1.429,4.209-1.225,5.639,0.459l9.351,11.01C33.066,15.278,33.066,17.472,31.799,18.963
		z"
                    />
                </g>
            </svg>
        </span>
        <span  @click="backspace" class="input back">
            <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="24px"
                viewBox="0 0 489.425 489.425"
            >
                <g>
                    <g>
                        <path
                            d="M122.825,394.663c17.8,19.4,43.2,30.6,69.5,30.6h216.9c44.2,0,80.2-36,80.2-80.2v-200.7c0-44.2-36-80.2-80.2-80.2h-216.9
			c-26.4,0-51.7,11.1-69.5,30.6l-111.8,121.7c-14.7,16.1-14.7,40.3,0,56.4L122.825,394.663z M29.125,233.063l111.8-121.8
			c13.2-14.4,32-22.6,51.5-22.6h216.9c30.7,0,55.7,25,55.7,55.7v200.6c0,30.7-25,55.7-55.7,55.7h-217c-19.5,0-38.3-8.2-51.5-22.6
			l-111.7-121.8C23.025,249.663,23.025,239.663,29.125,233.063z"
                        />
                        <path
                            d="M225.425,309.763c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l47.8-47.8l47.8,47.8c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6
			c4.8-4.8,4.8-12.5,0-17.3l-47.9-47.8l47.8-47.8c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-47.8,47.8l-47.8-47.8
			c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l47.8,47.8l-47.8,47.8C220.725,297.263,220.725,304.962,225.425,309.763z"
                        />
                    </g>
                </g>
            </svg>
        </span>
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
        },
        backspace() {
            this.$store.dispatch('backspace')
        }
    }
}
</script>

// <style lang="scss" scoped>
.keyboard {
    display: grid;
    gap: 3px;
    grid-template-areas:
        ". Q W E R T Y U I O P"
        ". A S D F G H J K L . "
        "back back Z X C V B N M submit submit";
    align-items: stretch;
    height: 100%;
    max-height: 250px;
    min-height: 200px;
    background-color: var(--very-light-grey);
}

.input {
    display: grid;
    place-items: center;
    border: 1px solid var(--light-grey);
    border-radius: 4px;
    background-color: var(--light-grey);
    color: var(--dark-grey);
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    transition: filter 0.2s ease;
    &:hover {
        filter: brightness(1.2);
    }
}

.back {
    grid-area: back;
}
.submit {
    grid-area: submit;
}

$letters: "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z";

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