
<script lang="ts">
import { AgregName } from "@/types/agregator.enum";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    
})
export default class TravelsMixin extends Vue {
  @Prop(Object) item: any;
  get fees() {
    return this.item.fees || {};
  }
  get distanceKm() {
    return this.item.distance / 1000;
  }

get orderIdLink() {
    const orderIdYandex = this.item.OrderIDYandex;
    const agregType = this.item.Agreg;
    if (agregType === AgregName.yandex) {
      return `https://lk.taximeter.yandex.ru/order/${orderIdYandex}`;
    }
    return "";
  }
  get orderId() {
    if (this.item.Agreg === AgregName.yandex) {
      return this.item.OrderIDYandex;
    }
    return this.item.id;
  }
  get timeTrip() {
    const seconds = this.item.timeTrip;
    const date = this.$moment.duration(seconds, "seconds");
    const min = date.minutes();
    const hours = date.hours();
    const days = date.days();
    return {
      min,
      hours,
      days,
    };
  }
  get agregComission() {
    return Math.abs(this.fees.agreg_fee);
  }
  get parkComission() {
    return Math.abs(this.fees.park_fee);
  }
  get noCashInfo() {
    const result =
      this.item.Price +
      parseFloat(this.fees.agreg_fee) +
      parseFloat(this.fees.park_fee);
    if (isNaN(result) || result === Infinity) return false;

    return result.toFixed(2);
  }
  get costPerKm() {
    const result = this.item.Price / this.distanceKm;
    if (isNaN(result) || result === Infinity) return false;
    const norm = result.toFixed(2);
    return norm;
  }
  get costPerMin() {
    let result = this.item.Price / (this.item.timeTrip / 60);
    if (isNaN(result) || result === Infinity) return false;
    const norm = result.toFixed(2);

    return norm;
  }
}
</script>

