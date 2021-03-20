<template>
  <div class="add-dispetcher-form">
    <form action="#" @submit.prevent="onSubmit">
      <add-dispetcher-agregators class="mb-50" v-model="agregator" />
      <form-schema :schema="formSchema" class="row mb-30"></form-schema>
      <div
        class="add-dispetcher-form__yandex mb-10"
        v-if="agregator === AgregName.yandex"
      >
        <div class="add-dispetcher-form__yandex-title">
          Для интеграции с Яндекс.Такси добавьте в диспетчерской сотрудника.
        </div>
        <div class="add-dispetcher-form__yandex-content">
          <ul>
            <li>Меню > Персонал > Сотрудники > Добавить сотрудника</li>
            <li>
              <b>Группа:</b> Администратор <b>E-mail:</b> taxisreg@yandex.ru
              <b>Авторизация:</b>
              поставить галочку
            </li>
            <li>Сохраните пользователя</li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <app-button
          class="add-dispetcher-form__btn mt-10"
          type="submit"
          color="orange-grad"
          >добавить</app-button
        >
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import AddDispetcherAgregators from "./DispetcherAgregators.vue";
import FormSchema from "../../FormSchema/FormSchema.vue";
import RegisterDriverAgregators from "../../Register/RegisterDriver/RegisterDriverAgregators.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
import { computed, ref, watch } from "@vue/composition-api";
import { fields } from "./dispetchers-fields";
import { schema } from "./dispetchers-schema";
import { AgregName } from "@/types/agregator.enum";
import { useApiCreateDispetcher } from "@/api/dispetchers";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { CreateDispetcherDto } from "@/dto/dispetcher.dto";
@Component({
  components: { RegisterDriverAgregators, FormSchema, AddDispetcherAgregators },
  setup(props, { emit }) {
    const agregator = ref(AgregName.yandex);

    const formFields = computed(() => fields[agregator.value]);
    const rename = {
      paymentGroup: "paymentgroup_id",
      city: 'city_id',
      keyApiV7: "apiKey",
      gettLogin: "loginGett",
      gettPassword: "passGett",
      gettApiLogin: "loginGettApi",
      gettApiPassword: "passGettApi",
      parkCommission: "commisionPark",
      agregatorCommission: "commisionAgreg",
      bonusCommission: "commisionOfBonus",
      cityApiKey: "citiApiKey",
      apiKeyV7: "keyApiV7",
      clientId: 'clientID'
    };
    let form = useForm({
      fields: formFields.value,
      rename,
    });
    const { exec: createDispetcher, error } = useApiCreateDispetcher({
      toast: {
        error: errorHandler(),
        success: () => "Диспетчерская успешно добавлена!",
      },
    });
    const onSubmit = () => {
      form.handleSubmit(async () => {
        let toSend = form.serialize();
        toSend = { ...toSend, agreg: agregator.value };
        await createDispetcher(plainToClass(CreateDispetcherDto, toSend));
        if(error.value) return
        emit("send");
      })();
    };
    const formSchema = computed(() => schema[agregator.value]);
    watch(agregator, () => {
      form = useForm({
        fields: formFields.value,
        rename,
      });
    });
    return {
      agregator,
      onSubmit,
      AgregName,
      formSchema,
    };
  },
})
export default class AddDispetcherForm extends Vue {}
</script>

<style lang="scss">
.add-dispetcher-form {
  &__btn {
    padding: 1rem 6rem;
  }
  &__yandex {
    position: relative;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
    padding: 1.7rem 3rem;
    color: $grey_1;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 6px;
      height: 100%;
      background: #8f8aff;
    }
    &-title {
      padding-left: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #f2f2f2;
    }
    &-content {
      padding: 2rem 1rem;
      padding-bottom: 0;
      ul {
        list-style: disc;
        padding-left: 1rem;
        li {
          margin-bottom: 10px;
          b {
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
