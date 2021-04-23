<template>
  <div class="profile-notys">
    <div class="app-card h-100">
      <div class="profile-notys__title color-purple font-lg">Уведомления</div>
      <div class="profile-notys__items profile-notys-items">
        <div class="profile-notys-items__header">
          <div class="profile-notys-items__header-item">Telegram</div>
          <div class="profile-notys-items__header-item">E-mail</div>
        </div>
        <profile-noty
          v-for="(item, idx) in items"
          :key="idx"
          :telegram.sync="item.values.telegram"
          :email.sync="item.values.email"
          :title="item.title"
        />
      </div>
      <profile-notys-form />
    </div>
  </div>
</template>

<script lang="ts">
import ProfileNotysForm from "./ProfileNotysForm.vue";
import ProfileNoty from "./ProfileNoty.vue";
import { Component, Vue } from "vue-property-decorator";
import { UserModule } from "@/store/modules/user";
import { computed, reactive, watch } from "@vue/composition-api";
import { useApiUpdateNotifications } from "@/api/notifications";
import { errorHandler } from "@/helpers/error-handler";
import { plainToClass } from "class-transformer";
import { UpdateNotificationsDto } from "@/dto/notification.dto";
@Component({
  setup() {
    const notifications = reactive({ ...UserModule.user.notifications });
    const items = [
      {
        title: "Новая регистрация",
        values: notifications.new_driver,
      },
      {
        title: "Заявка на выплату",
        values: notifications.driver_pay_request,
      },
      {
        title: "Заблокированная поездка",
        values: notifications.blocked_trip,
      },
      {
        title: "Низкий баланс",
        values: notifications.low_balance,
      },
    ];

    const saveData = async () => {
      const { exec, error } = useApiUpdateNotifications({
        toast: {
          error: errorHandler(),
          success: () => "Уведомления обновлены!",
        },
      });
      await exec(plainToClass(UpdateNotificationsDto, notifications));
      if (error.value) return;
    };
    watch(notifications, () => {
      saveData();
    });
    return {
      saveData,
      items,
    };
  },
  components: { ProfileNoty, ProfileNotysForm },
})
export default class ProfileNotys extends Vue {}
</script>

<style lang="scss">
.profile-notys {
  &__title {
    margin-bottom: 25px;
  }
  &-items {
    &__header {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 1.5rem;
      &-item {
        color: $grey_2;
        &:first-child {
          margin-right: 28px;
        }
      }
    }
  }
}
</style>