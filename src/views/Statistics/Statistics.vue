<template>
  <div>
   
  </div>
</template>

<script lang="ts">
import { ConfigModule } from "@/store/modules/config";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {  },
  metaInfo: {
    title: "Статистика",
    titleTemplate: ConfigModule.titleTemplate,
  },
  
})
export default class extends Vue {}
</script>

<style >
</style>