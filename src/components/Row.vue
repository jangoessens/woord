<template>
    <section class="row" :class="'row--' + amount " >
        <LetterBox :class="{'guessed' : row.guessed}" v-for="n in amount" :key="n" :letter="getLetter(n)"></LetterBox>
    </section>
</template>

<script>
import LetterBox from "../elements/LetterBox.vue";
export default {
    components: { LetterBox },
    props: {
        row: Object,
    },
    computed: {
        amount() {
            return this.$store.getters.letterAmount;
        }
    },
    methods: {
        getLetter(i) {
            // console.log(this.row);
            return this.row.letters[i-1];
        }
    }
}
</script>

<style lang="scss" scoped>
.row {
    display:grid;
    column-gap: 4px;
    &.row--5{
        grid-template-columns: repeat(5, 1fr);
    }
    
}
</style>