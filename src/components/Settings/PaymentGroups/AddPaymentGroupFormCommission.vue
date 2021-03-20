<template>
  <div class="add-payment-group-commission">
    <div class="row mb-20">
      <div class="col-lg-7 add-payment-group-commission__title ">
        <div class="color-purple">Плавающая комиссия:</div>
        <div>
          <app-button
            color="bold-purple"
            :stroke="true"
            type="button"
            @click="addCommission"
            size="sm"
            >добавить комиссию <svgPlus class="ml-10"
          /></app-button>
        </div>
      </div>
    </div>
    <div
      class="add-payment-group-commission__item mb-20"
      v-for="(item, idx) in items"
      :key="idx"
    >
      <span class="mr-20">
        <span class="mr-20">За вывод суммы от</span
        ><span>
          <app-input
            :inline="true"
            :inputAttrs="{ class: 'color-purple' }"
            width="80px"
            :showErrors="false"
            v-model="forms[idx].values.sumFrom"
            :errors="forms[idx].errors.sumFrom"
            sufix="₽"
          />
        </span>
      </span>
      <span class="mr-15">
        <span class="mr-20">до</span
        ><span>
          <app-input
            width="80px"
            :inputAttrs="{ class: 'color-purple' }"
            :inline="true"
            :showErrors="false"
            v-model="forms[idx].values.sumTo"
            :errors="forms[idx].errors.sumTo"
            sufix="₽"
          />
        </span>
      </span>
      <span class="mr-30">
        <span class="mr-15">—</span>
        <app-input
          width="50px"
          :inputAttrs="{ class: 'color-purple' }"
          :inline="true"
          :showErrors="false"
          v-model="forms[idx].values.commission"
          :errors="forms[idx].errors.commission"
          sufix="%"
      /></span>
      <span
        ><svgTrash
          class="color-grey-3 cursor-pointer"
          width="20"
          @click="removeItem(idx)"
      /></span>
    </div>
  </div>
</template>

<script lang="ts">
import useField, { UseFieldModel } from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { computed, ref, toRefs, watch, set } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
import * as yup from "yup";
import svgPlus from "@/assets/icons/plus.svg";
import svgTrash from "@/assets/icons/trash.svg";
interface CommissionItem {
  sumFrom?: number;
  sumTo?: number;
  commission?: number;
}
interface IProps {
  value: CommissionItem[];
  [key: string]: any;
}
@Component({
  components: { svgPlus, svgTrash },
  setup(props: IProps, { emit }) {
    const { value } = toRefs<IProps>(props);
    const items = ref([...value.value]);
    const emitData = () => {
      emit("input", items.value);
    };
    const addCommission = () => {
      items.value.push({});
      emitData();
    };
    const removeItem = (idx: number) => {
      items.value.splice(idx, 1);
    };
    const forms = computed(() => {
      return items.value.map((item: CommissionItem, idx: number) => {
        const form = useForm({
          fields: {
            sumFrom: useField(item.sumFrom, [yup.number().required()], {
              watchValue: true,
            }),
            sumTo: useField(item.sumTo, [yup.number().required()], {
              watchValue: true,
            }),
            commission: useField(item.commission, [yup.number().required()], {
              watchValue: true,
            }),
          },
        });
        watch(form.values, (newValues) => {
          set(items.value, idx, { ...newValues });
          emitData();
        });
        return form;
      });
    });
    return { items, addCommission, forms, removeItem };
  },
})
export default class AddPaymentGroupFormCommission extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  value: CommissionItem[];
}
</script>

<style lang="scss">
.add-payment-group-commission {
  &__item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include md {
      align-items: flex-start;
      flex-direction: column;
      > div {
        &:first-child {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>