<template>
  <div class="applications-add-form">
    <form action="#" @submit.prevent="onSubmit">
      <div class="row mb-20 justify-content-center">
        <app-chooser :items="rentTypes" v-model="type" />
      </div>
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
      <div class="row mb-10" v-if="type === 'rent'">
        <div class="col-lg-12">
          <app-checkbox-input
            :reverse="true"
            label="Заказать оформление и страницы входа"
            :errors="errors.orderDesign"
            v-model="values.orderDesign"
          />
        </div>
      </div>
      <div
        class="applications-add-form__upload mb-10"
        v-if="!values.orderDesign && type === 'rent'"
      >
        <div class="applications-add-form__upload-item">
          <app-image-upload
            :icon="svgFile"
            v-model="values.logo"
            :errors="errors.logo"
            label="Логотип приложения"
          />
        </div>
        <div class="applications-add-form__upload-item">
          <app-image-upload
            :icon="svgFile"
            v-model="values.background"
            :errors="errors.background"
            label="Фон в приложении"
          />
        </div>
        <div class="applications-add-form__upload-item">
          <app-image-upload
            :icon="svgFile"
            v-model="values.icon"
            :errors="errors.icon"

            label="Иконка приложения"
          />
        </div>
      </div>

      <div class="applications-add-form__footer">
        <div class="applications-add-form__footer-price">
          {{ price }} {{ currency }}
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
import AppImageUpload from "../AppImageUpload.vue";
import AppCheckboxInput from "../AppCheckboxInput.vue";
import AppCheckbox from "../AppCheckbox.vue";
import AppChooser from "../AppChooser.vue";
import PhoneInput from "../PhoneInput.vue";
import AppTooltipInfo from "../AppTooltipInfo.vue";
import PinUpload from "../PinUpload.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
import "yup-phone";
import { computed, ref, toRefs } from "@vue/composition-api";
import useRouter from "@/compositions/useRouter";
import svgFile from "@/assets/icons/file.svg";
import { useApiCreateApplication } from "@/api/applications";
import { plainToClass } from "class-transformer";
import { CreateApplicationDto } from "@/dto/application.dto";
import { errorHandler } from "@/helpers/error-handler";
interface IProps {
  [key: string]: any;
}
@Component({
  components: {
    AppCheckboxInput,
    PinUpload,
    AppTooltipInfo,
    PhoneInput,
    AppChooser,
    AppCheckbox,
    AppImageUpload,
  },
  setup(props: IProps, { emit }) {
    const router = useRouter();
    const rentTypes = [
      {
        value: "rent",
        name: "Аренда",
      },
      {
        value: "buy",
        name: "Покупка",
      },
    ];
    const defualtType = router.currentRoute.query.type || "rent";
    const type = ref(defualtType);

    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        developerName: useField("", [yup.string().required()]),
        appName: useField("", [yup.string().required()]),
        logo: useField(null, [yup.string().test('', 'Заполните это поле', (value) => {
          if(type.value === 'rent' && !values.orderDesign) {
            if(!value) return false
          }
          return true
        }).nullable()]),
        background: useField(null, [yup.string().test('', 'Заполните это поле', (value) => {
          if(type.value === 'rent' && !values.orderDesign) {
            if(!value) return false
          }
          return true
        }).nullable()]),
        icon: useField(null, [yup.string().test('', 'Заполните это поле', (value) => {
          if(type.value === 'rent' && !values.orderDesign) {
            if(!value) return false
          }
          return true
        }).nullable()]),
        orderDesign: useField(false, [yup.boolean().required()]),
      },
      rename: {
        developerName: "google_dev",
        appName: "app_name",
        orderDesign: "need_design",
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      const { exec, error } = useApiCreateApplication({
        toast: {
          error: errorHandler(),
          success: () => "Приложение успешно создано!",
        },
      });
      toSend.order_type = type.value;
      await exec(plainToClass(CreateApplicationDto, toSend));
      if (error.value) return;
      emit("send");
    });
    const price = computed(() => {
      if (type.value === "buy") {
        return "25 000";
      } else {
        if (values.orderDesign) {
          return "23 500";
        } else {
          return "22 000";
        }
      }
    });
    return {
      type,
      rentTypes,
      onSubmit,
      values,
      errors,
      price,
      svgFile,
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

  &__upload {
    display: flex;
    @include sm {
      flex-direction: column;
      align-items: flex-start;
    }
    &-item {
      margin-right: 30px;
      svg {
        color: $violet;
      }
      &:last-child {
        margin-right: 0;
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
