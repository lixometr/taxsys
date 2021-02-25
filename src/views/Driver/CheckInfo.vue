<template>
  <div class="driver-check-info"></div>
</template>

<script lang="ts">
import { useApiGetDriverCheckById } from "@/api/driver-check";
import useGlobalLoading from "@/compositions/useGlobalLoading";
import useRouter from "@/compositions/useRouter";
import { toRefs, watch } from "@vue/composition-api";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  setup(props: {id: string}) {
    const { id } = toRefs<{id: string}>(props);
    const router = useRouter()
    const { exec: fetchData, result, error } = useApiGetDriverCheckById({
        toast: {
            error: (error) => {
                router.push({name: "DriverCheck"})
                return error.message
            }
        }
    });
    const loading = useGlobalLoading();
    loading.show();
    fetchData({id: parseInt(id.value)}).then(() => {
      loading.hide();
    });
   
   
    return {
        result
    }

  },
})
export default class DriverCheckInfo extends Vue {
  @Prop(String) id: string;
}
</script>

<style lang="scss">
</style>