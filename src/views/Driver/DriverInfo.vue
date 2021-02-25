<template>
    <div class="driver-info">
        Driver #{{$route.params.id}}
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class DriverInfo extends Vue {
        
    }
</script>

<style lang="scss">

</style>