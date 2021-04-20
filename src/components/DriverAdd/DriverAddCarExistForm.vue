<template>
  <div class="driver-add-car-exist-form">
    <div class="mb-30">
      <search-input
        class="driver-add-car-exist-form__search"
        v-model="searchPhrase"
        height="40px"
      />
    </div>
    <div class="driver-add-car-exist-form__items">
      <div
        class="driver-add-car-exist-form__item"
        v-for="(item, idx) in items"
        :key="idx"
        @click="selectCar(item.id)"
      >
        <div class="driver-add-car-exist-form__item-col">{{ item.number }}</div>
        <div class="driver-add-car-exist-form__item-col">{{ item.mark }}</div>
        <div class="driver-add-car-exist-form__item-col">{{ item.year }}</div>
        <div class="driver-add-car-exist-form__item-col">{{ item.color }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SearchInput from "../SearchInput.vue";
import { Component, Vue } from "vue-property-decorator";
import { ref, watch } from "@vue/composition-api";
import { useApiGetCarsRentable } from "@/api/car";
@Component({
  components: { SearchInput },
  setup(props, { emit }) {
    const searchPhrase = ref("");
    /*
    {
        number: "Е555КХ74",
        mark: "Kia",
        year: "2005",
        color: "Белый",
      },
      {
        number: "Е555КХ74",
        mark: "Kia",
        year: "2005",
        color: "Белый",
      },
      {
        number: "Е555КХ74",
        mark: "Kia",
        year: "2005",
        color: "Белый",
      }, */
    const items = ref([]);
    const { exec: searchItems, result, error } = useApiGetCarsRentable();
    watch(searchPhrase, (value) => {
      searchItems({ withoutDriver: true });
    });
    watch(result, (newItems) => {
      items.value = newItems?.data || [];
    });
    const selectCar = (id: number) => {
      emit("input", id);
    };
    return {
      selectCar,
      searchPhrase,
      items,
    };
  },
})
export default class DriverAddCarExistForm extends Vue {}
</script>

<style lang="scss">
.driver-add-car-exist-form {
  &__item {
    display: flex;
    justify-content: space-around;
    padding: 3.5rem;
    background: $white;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 20px;
    @include sm {
      flex-direction: column;
      justify-content: flex-start;
    }
    &-col {
      @include sm {
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  &__search {
    max-width: 700px;
    margin: 0 auto;
  }
}
</style>