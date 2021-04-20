<template>
  <div class="applications-item">
    <div class="applications-item__row row row-no-gutter">
      <div class="col-xl-4 col-md-6 applications-item__col">
        <div class="applications-item__name-wrapper">
          <div class="applications-item__image">
            <img :src="icon" alt="image" v-if="icon" width="40"/>
          </div>
          <div class="applications-item__name">{{ item.app_name }}</div>
        </div>
      </div>
      <div class="col-xl-2 col-md-6 applications-item__col">
        <div>Версия {{ item.ver }}</div>
      </div>
      <div class="col-xl-2 col-md-6 applications-item__col">
        <div>Оплатить до {{ item.paid_till | moment("DD.MM.YYYY") }}</div>
      </div>
      <div class="col-xl-4 col-md-6 applications-item__col">
        <div class="applications-item__btns">
          <app-button color="orange" :stroke="true" size="sm" @click="download"
            >скачать приложение</app-button
          >
          <app-button
            color="orange-grad"
            :shadow="true"
            size="sm"
            @click="clickBtnEdit"
            >{{ btnText }}</app-button
          >
        </div>
      </div>
    </div>
    <applications-controller
      class="applications-item__controller"
      v-if="isEditing"
      :item="item"
      ref="itemController"
    />
  </div>
</template>

<script lang="ts">
import ApplicationsController from "./ApplicationsController.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";
import { Application } from "@/models/application.entity";
@Component({
  components: { ApplicationsController },
  setup(props, { emit }) {
    const itemController = ref(null);
    const save = () => {
      return;
    };
    const download = () => {
      return;
    };
    const isEditing = ref(false);

    const open = () => {
      isEditing.value = true;
    };
    const close = () => {
      isEditing.value = false;
    };
    const clickBtnEdit = async () => {
      if (isEditing.value) {
        const isValid = await itemController.value.submit();
        if (!isValid) return;
        emit("save");
        close();
      } else {
        open();
      }
      return;
    };
    const btnText = computed(() => {
      return isEditing.value ? "Сохранить" : "Редактировать";
    });
    return { itemController, save, download, isEditing, clickBtnEdit, btnText };
  },
})
export default class ApplicationItem extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: Application;
  get colClass() {
    return "col-xl-3 col-md-6 applications-item__col";
  }
  get icon() {
    return this.item.images[0] && this.item.images[0].url;
  }
}
</script>

<style lang="scss">
.applications-item {
  padding-bottom: 3rem;
  &__controller {
    padding-top: 2rem;
  }
  &__row {
    background: $violet;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 1.4rem 1.7rem 0 1.7rem;
    color: #f2f2f2;
    font-weight: 500;
    font-size: $fz_md;
  }
  &__col {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
  }
  &__name-wrapper {
    display: flex;
    align-items: center;
    @include sm {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__image {
    margin-right: 40px;
    @include sm {
      margin-right: 0;
      margin-bottom: 15px;
    }
    img {
      border-radius: 5px;
      width: 80px;
    }
  }
  &__btns {
    display: flex;
    align-items: center;
    @include sm {
      flex-direction: column;
      align-items: flex-start;
    }
    .btn {
      color: $white;
      padding: 1rem 3rem;
    }
    > .btn:first-child {
      margin-right: 20px;
      @include sm {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }
  }
}
</style>