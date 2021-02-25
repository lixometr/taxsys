<template>
    <div class="settings-profile">
        <page-title ><h2>Профиль</h2></page-title>
        
    </div>
</template>

<script lang="ts">
import PageTitle from '../../components/Page/PageTitle.vue'
    import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: { PageTitle },})
    export default class SettingsProfile extends Vue {
        
    }
</script>

<style lang="scss">

</style>