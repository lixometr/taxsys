<template>
    <div class="app-badge badge">
        <slot />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class AppBadge extends Vue {
        
    }
</script>

<style lang="scss">

</style>