<template>
  <div class="approve-phone">
    <div class="approve-phone__header">
      На номер телефона {{ phone }} в течение пяти минут придет SMS-сообщение с
      кодом, который необходимо ввести в форму ниже
    </div>
    <div class="approve-phone__form">
      <approve-phone-code @accept="accept" @changeNumber="changeNumber" />
    </div>
  </div>
</template>

<script lang="ts">
import ApprovePhoneCode from "./ApprovePhoneCode.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { ApprovePhoneCode },
  setup(props, { emit }) {
    const accept = (code: string) => {
      return;
    };
    const changeNumber = () => {
      return;
    };
    return {
      changeNumber,
      accept
    }
  },
})
export default class ApprovePhone extends Vue {
  @Prop(String) phone: string;
}
</script>

<style lang="scss">
.approve-phone {
  &__header {
    padding: 1.8em 6rem;
    background: #eeedff;
    margin-bottom: 20px;
    margin-left: -6rem;
    margin-right: -6rem;
    color: #4f4f4f;
    font-size: $fz_md;
    text-align: center;
  }
  &__form {
    max-width: 380px;
    margin: 0 auto;
  }
}
</style>