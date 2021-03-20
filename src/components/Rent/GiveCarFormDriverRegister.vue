<template>
  <div class="give-car-form-driver-register">
    <register-driver-form
      :agregators.sync="agregators"
      @sumit="onSubmit"
      ref="registerDriver"
    />
  </div>
</template>

<script lang="ts">
import RegisterDriverForm from "../Register/RegisterDriver/RegisterDriverForm.vue";
import { Component, Vue } from "vue-property-decorator";
import { ref } from "@vue/composition-api";

@Component({
  components: { RegisterDriverForm },
  setup(props, { emit }) {
    const agregators = ref([]);
    const registerDriver = ref(null);
    const onSubmit = (values: any) => {
      emit("submit", values);
    };
    const submit = () => {
      registerDriver.value.submit();
    };
    return {
      submit,
      onSubmit,
      agregators,
      registerDriver,
    };
  },
})
export default class GiveCarFormDriverRegister extends Vue {}
</script>

<style lang="scss">
.give-car-form-driver-register {
  padding-top: 2rem;
  border-top: 1px solid #f2f2f2;
}
</style>