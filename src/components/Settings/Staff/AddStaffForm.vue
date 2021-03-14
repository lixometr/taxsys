<template>
  <div class="add-staff-form">
    <form action="#" @submit.prevent="onSubmit">
      <div class="row mb-15">
        <div class="col-lg-6">
          <app-input
            label="ФИО"
            v-model="values.fio"
            :errors="errors.fio"
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
      </div>
      <div class="mb-30">
        <div class="add-staff-form__title-btn">
          <div>Дополнительные данные:</div>
          <div>
            <app-button
              size="sm"
              color="bold-purple"
              :stroke="true"
              @click="toggleAdditional"
              type="button"
            >
              <span v-if="showAdditional">скрыть</span>
              <span v-else> добавить <svgPlus class="ml-10" /></span
            ></app-button>
          </div>
        </div>
        <div class="mt-20" v-if="showAdditional">
          <div class="row">
            <div class="col-lg-4">
              <app-input
                label="Серия / номер паспорта"
                v-model="values.passport"
                :errors="errors.passport"
                class=""
              />
            </div>
            <div class="col-lg-4">
              <app-input
                label="ИНН"
                v-model="values.inn"
                :errors="errors.inn"
                class=""
              />
            </div>
            <div class="col-lg-4">
              <app-input
                label="Номер карты"
                v-model="values.card"
                :errors="errors.card"
                class=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="add-staff-form__title-btn">
          <div>Условия работы:</div>
          <div>
            <app-button
              size="sm"
              color="bold-purple"
              :stroke="true"
              @click="toggleConditions"
              type="button"
            >
              <span v-if="showConditions">скрыть</span>
              <span v-else> добавить <svgPlus class="ml-10" /></span
            ></app-button>
          </div>
        </div>
        <div class="mt-10" v-if="showConditions">
          <div class="color-grey-3">
            <span class="mr-10">Режим работы:</span>
            <span class="mr-10">с</span>
            <app-input
              width="30px"
              :inline="true"
              :showErrors="false"
              v-model="values.timeFrom"
              :errors="errors.timeFrom"
            />
            <span class="mr-10">по</span>
            <app-input
              width="30px"
              :inline="true"
              :showErrors="false"
              v-model="values.timeTo"
              :errors="errors.timeTo"
            />
          </div>
          <div class="row">
            <div class="col-lg-6">
              <app-input
                label="Ставка зарплаты"
                v-model="values.salary"
                :errors="errors.salary"
                sufix="₽"
              />
            </div>
            <div class="col-lg-6">
              <app-input
                label="Штраф за прогул"
                v-model="values.fine"
                :errors="errors.fine"
                sufix="₽"
              />
            </div>
          </div>
          <div class="color-grey-3">
            <span class="mr-10">Штраф за ответ дольше:</span>
            <app-input
              class="mr-5"
              :showErrors="false"
              width="30px"
              :inline="true"
              v-model="values.fineLonger"
              :errors="errors.fineLonger"
            />
            <span class="mr-20">мин</span>
            <span class="mr-10">Штраф: </span>
            <app-input
              class="mr-5"
              width="30px"
              :inline="true"
              v-model="values.fineForAnswer"
              :errors="errors.fineForAnswer"
              :showErrors="false"
            />
            <span>₽ </span>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <app-input
                label="Расчетный день"
                v-model="values.payDay"
                :errors="errors.payDay"
              />
            </div>
            <div class="col-lg-6">
              <app-input
                label="Выплачивать"
                v-model="values.paySum"
                :errors="errors.paySum"
              />
            </div>
            <div class="col-lg-6">
              <app-input
                label="Аванс расчет"
                v-model="values.prepay"
                :errors="errors.prepay"
              />
            </div>
            <div class="col-lg-6">
              <app-input
                label="Выплата аванса"
                v-model="values.payPrepay"
                :errors="errors.payPrepay"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <app-button
          class="add-staff-form__btn mt-10"
          type="submit"
          color="orange-grad"
          >Добавить</app-button
        >
      </div>
    </form>
  </div>
</template>
 
<script lang="ts">
import PhoneInput from "../../PhoneInput.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Vue } from "vue-property-decorator";
import * as yup from "yup";
import svgPlus from "@/assets/icons/plus.svg";
import { ref } from "@vue/composition-api";
@Component({
  components: { PhoneInput, svgPlus },
  setup(props, { emit }) {
    const { handleSubmit, values, errors, serialize } = useForm({
      fields: {
        fio: useField("", [yup.string().required()]),
        phone: useField("", [
          yup.number().typeError("Введите корректный номер телефона "),
        ]),
        passport: useField("", [yup.string()]),
        inn: useField("", [yup.string()]),
        card: useField("", [yup.string()]),
        salary: useField(null, [yup.number().nullable()]),
        fine: useField(null, [yup.number().nullable()]),
        timeFrom: useField("", [yup.string()]),
        timeTo: useField("", [yup.string()]),
        fineLonger: useField("", [yup.string()]),
        fineForAnswer: useField(null, [yup.number().nullable()]),
        paySum: useField(null, [yup.number().nullable()]),
        payDay: useField(null, [yup.number().nullable()]),
        prepay: useField(null, [yup.number().nullable()]),
        payPrepay: useField(null, [yup.number().nullable()]),
      },
    });
    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      console.log(toSend);

      emit("send");
    });
    const showAdditional = ref(false);
    const toggleAdditional = () => {
      showAdditional.value = !showAdditional.value;
    };
    const showConditions = ref(false);
    const toggleConditions = () => {
      showConditions.value = !showConditions.value;
    };
    return {
      showConditions,
      toggleConditions,
      showAdditional,
      onSubmit,
      values,
      errors,
      toggleAdditional,
    };
  },
})
export default class AddStaffForm extends Vue {}
</script>

<style lang="scss">
.add-staff-form {
  &__btn {
    padding: 1rem 6rem;
  }
  &__title-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $purple;
  }
}
</style>
