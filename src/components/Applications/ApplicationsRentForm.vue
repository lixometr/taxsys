<template>
  <div class="applications-add-form">
    <form action="#" @submit.prevent="onSubmit">
      <div class="row mb-10">
        <div class="col-lg-6">
          <app-input
            label="Название разработчика в Google Play"
            v-model="values.developerName"
            :errors="errors.developerName"
            class=""
          />
        </div>
        <div class="col-lg-6">
          <app-input
            label="Название приложения"
            v-model="values.appName"
            :errors="errors.appName"
            class=""
          />
        </div>
      </div>
      <div class="applications-add-form__design-items mb-50">
        <div class="applications-add-form__design-item">
          <app-button
            type="button"
            color="purple"
            :stroke="true"
            :active="values.design === DesignTypes.order"
            @click="values.design = DesignTypes.order"
            >Заказать оформление</app-button
          >
          <div class="applications-add-form__design-item-text">+ 15 000 ₽</div>
        </div>
        <div class="applications-add-form__design-item">
          <app-button
            type="button"
            color="purple"
            :stroke="true"
            :active="values.design === DesignTypes.upload"
            @click="values.design = DesignTypes.upload"
            >Загрузить свой дизайн</app-button
          >
          <div class="applications-add-form__design-item-text">+ 0 ₽</div>
        </div>
      </div>
      <div class="applications-add-form__upload mb-10">
        <div class="applications-add-form__upload-item">
          <div class="mr-10">Логотип приложения</div>
          <div class="d-flex">
            <pin-upload
              class="mr-10"
              v-model="values.logo"
              :errors="errors.logo"
            />
            <app-tooltip-info> (700x700 px, png / jpg / svg) </app-tooltip-info>
          </div>
        </div>
        <div class="applications-add-form__upload-item">
          <div class="mr-10">Фон в приложении</div>
          <div class="d-flex">
            <pin-upload
              class="mr-10"
              v-model="values.background"
              :errors="errors.background"
            />
            <app-tooltip-info> (1080x1920 px, png / jpg)</app-tooltip-info>
          </div>
        </div>
      </div>
      <div class="row mb-30">
        <div class="col-lg-6">
          <app-input
            label="Ссылка на публичную оферту для водителей"
            v-model="values.privacyDriverLink"
            :errors="errors.privacyDriverLink"
            class=""
          />
        </div>
        <div class="col-lg-6">
          <app-input
            label="Сервис для отправки сообщений (sms.ru): API ключ"
            v-model="values.sendSmsApi"
            :errors="errors.sendSmsApi"
            class=""
          />
        </div>
      </div>
      <div>
        <div class="color-purple font-md mb-10">Контакты</div>
        <div class="row">
          <div class="col-lg-6">
            <app-input
              label="Сайт"
              v-model="values.site"
              :errors="errors.site"
              class=""
            />
          </div>
          <div class="col-lg-6">
            <phone-input
              label="Телефон"
              v-model="values.phone"
              :errors="errors.phone"
              class=""
            />
          </div>
          <div class="col-xl-3 col-lg-6">
            <phone-input
              label="WhatsApp"
              v-model="values.whatsapp"
              :errors="errors.whatsapp"
              class=""
            />
          </div>
          <div class="col-xl-3 col-lg-6">
            <phone-input
              label="Viber"
              v-model="values.viber"
              :errors="errors.viber"
              class=""
            />
          </div>
          <div class="col-xl-3 col-lg-6">
            <app-input
              label="Telegram"
              v-model="values.tg"
              :errors="errors.tg"
              class=""
            />
          </div>
          <div class="col-xl-3 col-lg-6">
            <app-input
              label="Instagram"
              v-model="values.instagram"
              :errors="errors.instagram"
              class=""
            />
          </div>
        </div>
      </div>
      <div class="applications-add-form__footer">
        <div class="applications-add-form__footer-price">
          {{price}} {{ currency }}
        </div>
        <div class="applications-add-form__footer-btn">
          <app-button
            class="applications-add-form__btn mt-10"
            type="submit"
            color="orange-grad"
            >оплатить и заказать</app-button
          >
        </div>
        <div class="applications-add-form__footer-policy">
          <a href="#"> Продолжая вы принимаете условия публичной оферты</a>
        </div>
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import PhoneInput from "../PhoneInput.vue";
import AppTooltipInfo from "../AppTooltipInfo.vue";
import PinUpload from "../PinUpload.vue";
import AppCheckboxInput from "../AppCheckboxInput.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
import "yup-phone";
import { computed } from "@vue/composition-api";
enum DesignTypes {
  order = "order",
  upload = "upload",
}
@Component({
  components: { AppCheckboxInput, PinUpload, AppTooltipInfo, PhoneInput },
  setup(props, { emit }) {
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        developerName: useField("", [yup.string().required()]),
        appName: useField("", [yup.string().required()]),
        design: useField(DesignTypes.upload, [yup.string().required()]),
        logo: useField(null, [yup.string().required()]),
        background: useField(null, [yup.string().required()]),
        privacyDriverLink: useField("", [yup.string().required()]),
        sendSmsApi: useField("", [yup.string().required()]),
        site: useField("", [yup.string().required()]),
        phone: useField("", [
          yup
            .number()
            .typeError("Введите корректный номер телефона")
            .required(),
        ]),
        whatsapp: useField("", [yup.string()]),
        viber: useField("", [yup.string()]),
        tg: useField("", [yup.string()]),
        instagram: useField("", [yup.string()]),
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);

      emit("send");
    });
    const price = computed(() => '22 000')
    return {
      onSubmit,
      values,
      errors,
      DesignTypes,
      price
    };
  },
})
export default class ApplicationsAddForm extends Vue {
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.applications-add-form {
  max-width: 950px;
  margin: 0 auto;
  &__btn {
    padding: 1rem 6rem;
  }
  &__design-items {
    display: flex;
    align-items: center;
    width: 100%;
    @include sm {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__design-item {
    display: flex;
    align-items: center;
    flex: 1;
    &:first-child {
      margin-right: 30px;
      @include sm {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
    .btn {
      flex: 1;
    }
    &-text {
      font-weight: bold;
      color: #8f8aff;
      margin-left: 10px;
    }
  }
  &__upload {
    display: flex;
    @include sm {
      flex-direction: column;
      align-items: flex-start;
    }
    &-item {
      flex: 1;
      display: flex;
      justify-content: space-between;
      &:first-child {
        margin-right: 30px;
        @include sm {
          margin-right: 0;
          // margin-bottom: 20px;
        }
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    border: 1px solid #c5ace0;
    margin-top: 30px;
    @include lg {
      flex-direction: column;
      justify-content: flex-start;
    }
    @include sm {
      padding: 0;
      border: none;
    }
    &-btn {
      flex: 1;
      @include lg {
      margin-bottom: 15px;

        order: 1;
      }
    }
    &-price {
      flex: 1;
      font-size: 3.2rem;
      color: #5d55d0;
      font-weight: 500;
      text-align: center;
      @include lg {
        order: 2;
        margin-bottom: 15px;
      }
    }
    &-policy {
      flex: 1;
      @include lg {
        order: 3;
      }
    }
  }
}
</style>
