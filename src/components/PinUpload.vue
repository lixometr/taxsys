<template>
  <label class="pin-upload" :class="{ error: hasErrors }">
    <input
      type="file"
      name="file"
      class="pin-upload__input"
      @change="onFileChange"
      accept="image/*"
    />
    <div class="pin-upload__inner">
      <div class="pin-upload__icon">
        <svgPin width="20" />
        <svgCheck width="20" class="ml-5" v-if="hasPreview" />
      </div>
    </div>
    <!-- <div class="pin-upload__errors">
      <div class="pin-upload__error" v-for="(error, idx) in errors" :key="idx">
        {{ error }}
      </div>
    </div> -->
  </label>
</template>

<script lang="ts">
import { computed, ref, toRefs, watch } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import svgPin from "@/assets/icons/pin.svg";
import svgCheck from "@/assets/icons/check-circle.svg";
interface IProps {
  value: any;
  errors: string[];
  [key: string]: any;
}
@Component({
  components: { svgPin, svgCheck },
  inheritAttrs: false,
  setup(props: IProps, { emit }) {
    const { value, errors } = toRefs<IProps>(props);
    const previewUrl = computed(() =>
      value.value ? URL.createObjectURL(value.value) : null
    );
    const onFileChange = (e: any) => {
      const file = e.target.files[0];
      emit("input", file);
    };

    const hasPreview = computed(() => !!previewUrl.value);
    const hasErrors = computed(() => errors.value.length > 0);
    return {
      hasErrors,
      onFileChange,
      previewUrl,
      hasPreview,
    };
  },
})
export default class PinUpload extends Vue {
  @Prop(File) value: File;
  @Prop({ type: Array, default: () => [] }) errors: string[];
}
</script>

<style lang="scss">
.pin-upload {
  display: inline-block;
  &__inner {
  }
  &.error {
    .pin-upload__icon {
      color: $red;
    }
  }
  &__input {
    display: block;
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }
  &__icon {
    color: $wiolet;
    svg,
    img {
      cursor: pointer;
      max-width: 30px;
      max-height: 30px;
    }
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