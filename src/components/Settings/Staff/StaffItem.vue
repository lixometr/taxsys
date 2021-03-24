<template>
  <div class="staff-item page-items__item">
    <app-accardion
      class="color-grey-2 mb-15 font-md"
      contentClass="font-sm color-grey-3"
    >
      <template v-slot:header>
        <app-accardion-col :class="responsiveHeader">
          <div>{{item.FIO}}</div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader">
          <div>{{item.phone}}</div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveHeader">
          <div>Баланс: 200 000 {{ currency }}</div>
        </app-accardion-col>
      </template>
      <template #default>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6 color-grey-3">Серия/номар паспорта:</div>
            <div class="col-6 color-grey-2">{{item.NumberOfPassport}}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6 color-grey-3">ИНН:</div>
            <div class="col-6 color-grey-2">{{item.INN}}</div>
          </div>
        </app-accardion-col>
        <app-accardion-col :class="responsiveContent">
          <div class="row">
            <div class="col-6 color-grey-3">Номер карты:</div>
            <div class="col-6 color-purple">{{item.NumberOfCard}}</div>
          </div>
        </app-accardion-col>
        
        <app-accardion-col class="col-xl-3 col-md-6">
          <div class="row">
            <div class="col-md-8 col-6 color-grey-3">Среднее время ответа:</div>
            <div class="col-md-4 col-6 color-grey-2">2:34 мин</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-3 col-md-6">
          <div class="row">
            <div class="col-md-8 col-6 color-grey-3">Закрыто задач:</div>
            <div class="col-md-4 col-6 color-grey-2">30</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-3 col-md-6">
          <div class="row">
            <div class="col-md-8 col-6 color-grey-3">Задач с просрочкой:</div>
            <div class="col-md-4 col-6 color-grey-2">30</div>
          </div>
        </app-accardion-col>
        <app-accardion-col class="col-xl-3 col-md-6">
          <div class="row">
            <div class="col-md-8 col-6 color-grey-3">Задач без ответа: </div>
            <div class="col-md-4 col-6 color-grey-2">0</div>
          </div>
        </app-accardion-col>
       
      </template>
      <template #actions>
        <div class="staff-item__action">
          <svgEdit class="color-purple" widht="20" @click="onEdit" />
        </div>
        <div class="staff-item__action">
          <svgTrash widht="20" @click="onDelete" />
        </div>
      </template>
    </app-accardion>
  </div>
</template>

<script lang="ts">
import AgregatorBadge from "../../AgregatorBadge.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import AppStatus from "@/components/AppStatus.vue";
import svgTrash from "@/assets/icons/trash.svg";
import svgEdit from "@/assets/icons/edit.svg";
@Component({
  components: { AgregatorBadge, AppStatus, svgTrash, svgEdit },
  setup(props, { emit }) {
    const onDelete = () => {
      emit("delete");
    };
    const onEdit = () => {
      emit("edit");
    };
    return {
      onDelete,
      onEdit,
    };
  },
})
export default class StaffItem extends Vue {
  @Prop(Object) item: any;
  get responsiveHeader() {
    return "col-lg-4";
  }

  get responsiveContent() {
    return "col-12 col-lg-4";
  }
  get currency() {
    return this.$store.getters.currency;
  }
}
</script>

<style lang="scss">
.staff-item {
  &__action {
    color: $grey_3;
    width: 20px;
    svg {
    }
  }
}
</style>