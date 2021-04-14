<template>
  <form class="widget-add-form" @submit.prevent="onSubmit">
    <div class="row mb-10">
      <div class="col-lg-7">
        <app-input
          label="Адрес сайта куда будет установлен регистрационный виджет"
          v-model="values.site"
          :errors="errors.site"
        />
      </div>
      <div class="col-lg-5">
        <app-select
          selectLabel="label"
          :reduce="(item) => item.value"
          label="Агрегатор"
          v-model="values.agregator"
          :errors="errors.agregator"
          :options="agregators"
        />
      </div>
    </div>
    <div class="row mb-10">
      <div class="col-lg-7">
        <app-input
          label="Ссылка на приложение для вывода средств "
          v-model="values.appLink"
          :errors="errors.appLink"
        />
      </div>
    </div>
    <div class="widget-add-form-type__wrapper">
      <div class="widget-add-form-type__title color-grey-3 mb-20">
        Тип виджета:
      </div>
      <div class="widget-add-form-type">
        <div
          class="widget-add-form-type__item"
          :class="{ active: widgetType.value === values.type }"
          v-for="(widgetType, idx) in types"
          :key="idx"
          @click="values.type = widgetType.value"
        >
          {{ widgetType.name }}
        </div>
      </div>
      <div class="widget-add-form-type__error">
        <div
          class="app-input__error color-red"
          v-for="(error, idx) in errors.type"
          :key="idx"
        >
          {{ error }}
        </div>
      </div>
    </div>
    <div class="row mb-20">
      <div class="col-lg-6">
        <app-input
          label="Заголовок виджета"
          v-model="values.title"
          :errors="errors.title"
        />
      </div>
      <div class="col-lg-3">
        <app-input
          label="Цвет заголовка"
          v-model="values.titleColor"
          :errors="errors.titleColor"
        />
      </div>
      <div class="col-lg-3">
        <app-input
          label="Цвет текста"
          v-model="values.textColor"
          :errors="errors.textColor"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <app-image-upload
          :defaultPreview="backgroundDefault"
          :icon="svgPicture"
          class="widget-add-form-upload-bg"
          v-model="values.background"
          label="Загрузить фон"
          :errors="errors.background"
        />
      </div>
      <div class="col-lg-6">
        <div class="widget-add-form-code__wrapper">
          <div class="widget-add-form-code__label">
            <span>Код для вставки</span>
            <svgCopy width="23" @click="copyInsertText" />
          </div>
          <div class="widget-add-form-code">{{ insertCode }}</div>
        </div>
      </div>
    </div>
    <div class="widget-add-form-preview">
      <svgFormPreview />
    </div>
    <div class="widget-add-form-btn-wrapper">
      <app-button class="widget-add-form-btn" color="orange-grad" type="submit"
        >{{btnText}}</app-button
      >
      <a href="#" class="widget-add-form-policy">
        Продолжая вы принимаете условия публичной оферты
      </a>
    </div>
  </form>
</template>

<script lang="ts">
import AppImageUpload from "../../../components/AppImageUpload.vue";
import AppTextArea from "../../../components/AppTextArea.vue";
import AppSelect from "../../../components/AppSelect.vue";
import useField from "@/compositions/validators/useField";
import useForm from "@/compositions/validators/useForm";
import { Component, Prop, Vue } from "vue-property-decorator";
import * as yup from "yup";
import { AgregatorType } from "@/types/agregator.enum";
import svgPicture from "@/assets/icons/picuture_icon.svg";
import svgCopy from "@/assets/icons/copy.svg";
import { computed, ref, toRefs } from "@vue/composition-api";
import useToast from "@/compositions/useToast";
import svgFormPreview from "@/assets/icons/widget_form_preview.svg";
import { plainToClass } from "class-transformer";
import { CreateWidgetDto } from "@/dto/widget.dto";
import { useApiCreateWidget, useApiUpdateWidget } from "@/api/widget";
import { errorHandler } from "@/helpers/error-handler";
import { Widget } from "@/models/widget.entity";
import { complect } from "@/components/Car/CarAdd/add-car-fields";
import router from "@/router";
enum FormTypes {
  edit = "edit",
  create = "create",
}
interface IProps {
  [key: string]: any;
  type: FormTypes;
  item: Widget;
}
@Component({
  components: {
    AppSelect,
    AppTextArea,
    AppImageUpload,
    svgPicture,
    svgCopy,
    svgFormPreview,
  },
  setup(props: IProps) {
    const { type, item } = toRefs<IProps>(props);
    const agregators = Object.keys(AgregatorType).map((key) => ({
      value: key,
      label: AgregatorType[key].name,
    }));
    const types = [
      {
        name: "Поэтапная анкета",
        value: "multistep",
      },
      {
        name: "Открытая анкета",
        value: "open",
      },
      {
        name: "Всплывающее окно",
        value: "popup",
      },
    ];
    let defaultValues = {
      site: "",
      agregator: "",
      appLink: "",
      type: "",
      title: "",
      titleColor: "",
      textColor: "",
      background: null,
      code: "'",
    };
    if (type.value === FormTypes.edit)
      [
        (defaultValues = {
          site: item.value.site_url,
          agregator: item.value.agreg,
          appLink: item.value.app_url,
          type: item.value.type,
          title: item.value.title,
          titleColor: item.value.title_color,
          textColor: item.value.text_color,
          background: null,

          code: item.value.code,
        }),
      ];
    let backgroundField = useField(defaultValues.background, [
      yup.string().required().nullable(),
    ]);
    if (type.value === FormTypes.edit) {
      backgroundField = useField(defaultValues.background, [
        yup.string().nullable(),
      ]);
    }
    const { values, errors, handleSubmit, serialize } = useForm({
      fields: {
        site: useField(defaultValues.site, [yup.string().required().url()]),
        agregator: useField(defaultValues.agregator, [yup.string().required()]),
        appLink: useField(defaultValues.appLink, [
          yup.string().required().url(),
        ]),
        type: useField(defaultValues.type, [yup.string().required()]),
        title: useField(defaultValues.title, [yup.string().required()]),
        titleColor: useField(defaultValues.titleColor, [
          yup.string().required(),
        ]),
        textColor: useField(defaultValues.textColor, [yup.string().required()]),
        background: backgroundField,
      },
      rename: {
        agregator: "agreg",
        site: "site_url",
        appLink: "app_url",
        titleColor: "title_color",
        textColor: "text_color",
      },
    });
    const insertCode = ref(defaultValues.code);

    const onSubmit = handleSubmit(async () => {
      const toSend = serialize();
      const sendDto = plainToClass(CreateWidgetDto, toSend);
      let formAction;
      if (type.value === FormTypes.create) {
        formAction = useApiCreateWidget({
          toast: {
            error: errorHandler(),
            success: () => "Виджет успешно создан!",
          },
        });
        await formAction.exec(sendDto);
      } else {
        formAction = useApiUpdateWidget({
          toast: {
            error: errorHandler(),
            success: () => "Виджет успешно обновлен!",
          },
        });
        await formAction.exec({ data: sendDto, id: item.value.id });
      }
      if (formAction.error.value) return;
      insertCode.value = formAction.result.value.code;
      router.push({ name: "SettingsProfile" });
    });
    const { success: toastSuccess, error: toastError } = useToast();

    const copyInsertText = async () => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(insertCode.value);
          toastSuccess({ message: "Текст скопирован в буфер обмена!" });
        } else {
          throw { error: true };
        }
      } catch (err) {
        toastError({
          message:
            "К сожалению, не удалось скопировать текст. Попробуйте это сделать вручную",
        });
      }
    };
    const backgroundDefault = computed(() => {
      if (type.value === FormTypes.create) return null;
      return item.value.images.find((img) => img.desc === "background")?.url;
    });
    const btnText = computed(() => {
      return type.value === FormTypes.create ? 'добавить' : 'обновить'
    })
    return {
      btnText,
      backgroundDefault,
      copyInsertText,
      values,
      onSubmit,
      errors,
      agregators,
      types,
      svgPicture,
      insertCode,
    };
  },
})
export default class WidgetAddForm extends Vue {
  @Prop({ type: String, default: FormTypes.create }) type: FormTypes;
  @Prop({ type: Object, default: () => ({}) }) item: Widget;
}
</script>

<style lang="scss">
.widget-add-form {
  max-width: 800px;
  margin: 0 auto;
  &-type__wrapper {
    margin-bottom: 30px;
  }
  &-type {
    display: flex;
    align-items: center;
    @include md {
      flex-direction: column;
    }
    &__item {
      padding: 3rem 4rem;
      display: flex;
      align-content: center;
      justify-content: center;
      font-size: $fz_md;
      color: $grey_3;
      border: 1px solid $purple;
      box-sizing: border-box;
      border-radius: 15px;
      margin-right: 30px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &.active {
        background-color: $purple;
        color: $white;
      }
      @include md {
        margin-right: 0;

        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
  &-upload-bg {
    width: 128px;
  }
  &-code__wrapper {
  }
  &-code__label {
    color: $grey_3;
    font-size: $fz_md;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    svg {
      color: $purple;
      cursor: pointer;
      margin-left: 10px;
    }
  }
  &-code {
    min-height: 80px;
    border-bottom: 1px solid $purple;
    color: $grey_2;
  }
  &-preview {
    padding: 20px 0;
    text-align: center;
    svg {
      max-width: 800px;
      width: 100%;
      display: inline-block;
    }
  }
  &-btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    @include sm {
      flex-direction: column;
      align-items: center;
    }
  }
  &-policy {
    max-width: 200px;
    color: $violet;
    font-size: $fz_xs;
  }
  &-btn {
    padding: 1.3rem 7rem;
    margin-right: 25px;
    margin-left: 150px;
    @include sm {
      margin-bottom: 20px;
      margin-left: 0;
    }
  }
}
</style>