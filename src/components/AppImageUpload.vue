<template>
  <label class="app-image-upload">
    <input
      type="file"
      name="file"
      class="app-image-upload__input"
      @change="onFileChange"
      accept="image/*"
    />
    <div class="app-image-upload__inner">
      <div class="app-image-upload__icon" v-if="!hasPreview">
        <slot name="icon">
          <app-icon :src="icon" v-if="icon" />
        </slot>
      </div>
      <div
        class="app-image-upload__preview"
        v-else
        key="hasPreview"
        :style="{ backgroundImage: `url(${previewUrl})` }"
      ></div>
      <div class="app-image-upload__label">
        <slot name="label">
          {{ label }}
        </slot>
      </div>
    </div>
    <div class="app-image-upload__errors">
      <div class="app-image-upload__error" v-for="(error, idx) in errors" :key="idx">
        {{ error }}
      </div>
    </div>
  </label>
</template>

<script lang="ts">
import { computed, ref, toRefs, watch } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
interface IProps {
  value: any;
  [key: string]: any;
}
@Component({
  inheritAttrs: false,
  setup(props: IProps, { emit }) {
    const { value } = toRefs<IProps>(props);
    const previewUrl = computed(() => value.value ? URL.createObjectURL(value.value) : null);
    const onFileChange = (e: any) => {
      const file = e.target.files[0];
      emit("input", file);
    };

    const hasPreview = computed(() => !!previewUrl.value);
    return {
      onFileChange,
      previewUrl,
      hasPreview,
    };
  },
})
export default class AppImageUplaod extends Vue {
  @Prop(String) label: string;
  @Prop(File) value: File;
  @Prop([String, Object]) icon: any;
  @Prop({ type: Array, default: () => [] }) errors: string[];
}
</script>

<style lang="scss">
.app-image-upload {
  display: block;
  &__inner {
    padding: 15px;
    background: #ffffff;
    border: 1px solid rgba(184, 181, 255, 0.3);
    box-sizing: border-box;
    border-radius: 15px;
    min-height: 112px;
    cursor: pointer;
  }
  &__input {
    display: block;
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }
  &__icon {
    svg,
    img {
      max-width: 30px;
      max-height: 30px;
    }
  }
  &__icon,
  &__preview {
    margin-bottom: 13px;
    height: 30px;
  }
  &__preview {
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
  }
  &__errors {
    color: $red;
    min-height: 30px;
  }
  &__error {
    padding-top: 6px;
  }
  &__label {
    color: $grey_3;
    font-size: $fz_xxs;
    line-height: 16px;
  }
}
</style>