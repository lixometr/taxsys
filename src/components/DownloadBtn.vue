<template>
  <button v-on="$listeners" v-bind="$attrs" class="download-btn">
    Выгрузить реестр
    <svgDownload width="20" />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import svgDownload from "@/assets/icons/download.svg";
@Component({
  components: {
    svgDownload,
  },
})
export default class DownloadBtn extends Vue {}
</script>

<style lang="scss">
.download-btn {
  padding: .7rem 1.7rem;
  border: 1px solid #8f8aff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $violet;
  background: $white;
  cursor: pointer;
  font-weight: 400;
  font-family: inherit;
  outline: none;
  transition: $transition;
  svg {
      margin-left: 10px;
  }
  &:hover {
      background: $violet;
      color: $white;
  }
}
</style>