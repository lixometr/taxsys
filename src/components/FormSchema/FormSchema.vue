<template>
  <div class="form-schema">
    <div
      class="form-schema__input"
      :class="item.class"
      v-for="(item, idx) in normSchema"
      :key="idx"
    >
      <slot :name="'field-' + item.name" v-bind="{ item }">
        <component
          :errors="item.field.errors.value"
          :is="item.type"
          v-model="item.field.value.value"
          v-bind="item.props"
          v-on="item.listeners"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FormSchemaItem } from "./form-schema.type";
import AppDatePicker from "@/components/AppDatePicker.vue";
import AppSelect from "@/components/AppSelect.vue";
import AppImageUpload from "@/components/AppImageUpload.vue";
import CitySelect from '@/components/CitySelect.vue'
@Component({
  setup() {
    return;
  },
  components: {
    AppDatePicker,
    AppSelect,
    AppImageUpload,
    CitySelect
  },
})
export default class FormSchema extends Vue {
  @Prop({ type: Array, default: () => [] }) schema: FormSchemaItem[];

  get normSchema() {
    const schema = [...this.schema];
    schema.sort((a, b) => (a.sort || 0) - (b.sort || 0));
    return schema;
  }
}
</script>

<style lang="scss">
</style>