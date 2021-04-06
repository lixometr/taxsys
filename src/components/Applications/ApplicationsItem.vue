<template>
  <div class="applications-item">
    <div class="applications-item__row row row-no-gutter">
      <div class="col-xl-4 col-md-6 applications-item__col">
        <div class="applications-item__name-wrapper">
          <div class="applications-item__image">
            <img src="@/assets/img/application_mock.jpg" alt="image" />
          </div>
          <div class="applications-item__name">Название приложения</div>
        </div>
      </div>
      <div class="col-xl-2 col-md-6 applications-item__col">
        <div>Версия 1.2</div>
      </div>
      <div class="col-xl-2 col-md-6 applications-item__col">
        <div>Оплатить до 01.01.2021</div>
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
            >{{btnText}}</app-button
          >
        </div>
      </div>
    </div>
    <applications-controller
      class="applications-item__controller"
      v-if="isEditing"
    />
  </div>
</template>

<script lang="ts">
import ApplicationsController from "./ApplicationsController.vue";
import { Component, Vue } from "vue-property-decorator";
import { computed, ref } from "@vue/composition-api";

@Component({
  components: { ApplicationsController },
  setup() {
    const save = () => {
      return;
    };
    const download = () => {
      return;
    };
    const isEditing = ref(false);
    const toggle = () => {
      isEditing.value = !isEditing.value;
    };
    const clickBtnEdit = () => {
      // if(isEditing.value) {

      // } else {

      // }
      toggle()
      return
    }
    const btnText = computed(() => {
      return isEditing.value ? 'Сохранить' : 'Редактировать'
    })
    return { save, download, isEditing, toggle, clickBtnEdit, btnText};
  },
})
export default class ApplicationItem extends Vue {
  get colClass() {
    return "col-xl-3 col-md-6 applications-item__col";
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