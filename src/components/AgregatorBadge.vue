<template>
  <div class="agregator-badge">
    <app-badge>
      <app-icon :src="agregType.icon" alt="yandex" class="mr-10" width="24" />
      {{ agregType.name }}
    </app-badge>
  </div>
</template>

<script lang="ts">
import { AgregatorType } from "@/types/agregator.enum";
import { computed, toRefs } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
interface IProps {
  type: string;
  [key: string]: any;
}
@Component({
  setup(props: IProps) {
    const { type } = toRefs<IProps>(props);
    const getAgregType = (name: string) => {
      return (
        AgregatorType[name] || {
          name: "Неизвестно",
        }
      );
    };
    const agregType = computed(() => getAgregType(type.value));
    return {
      agregType,
      getAgregType,
    };
  },
})
export default class AgregatorBadge extends Vue {
  @Prop(String) type: string;
}
</script>

<style lang="scss">
</style>