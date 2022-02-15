<template>
    <section class="board" :class="'row-' + rowAmount">
        <Row v-for="row in rows" :key="row.index" v-bind:row="row"></Row>
    </section>
</template>

<script>
import Row from './Row.vue'
export default {
    components: { Row },
    computed: {
        rows() {
            return this.$store.getters.rows;
        },
        rowAmount() {
            return this.rows.length;
        }

    }
}
</script>
<style scoped lang="scss">
.board {
    display: grid;
    width: 100%;
    row-gap: 4px;
    height: 100%;

    &.row-5 {
        grid-template-rows: repeat(5, 1fr);
    }
}
</style>