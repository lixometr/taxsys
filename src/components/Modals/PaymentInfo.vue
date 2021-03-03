<template>
    <div>

    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class PaymentInfo extends Vue {
        @Prop(Object) item: any
    }
</script>

<style lang="scss">

</style>