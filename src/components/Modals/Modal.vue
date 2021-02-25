<template>
  <transition :name="modalTransition">
    <div class="modal-wrapper" v-if="isOpen" :class="modalClass">
      <components
        :is="activeModal"
        v-bind="cProps"
        v-on="cListeners"
        @close="close"
      />
      <div class="modal-overlay" @click="close"></div>
    </div>
  </transition>
</template>

<script>
import useModal from "@/compositions/useModal";
import { Vue, Component } from "vue-property-decorator";
import { ref } from "@vue/composition-api";
// import svgClose from "@/assets/icons/close.svg";
@Component({
  setup() {
    const isOpen = ref(false);
    const activeName = ref("");
    const cProps = ref({});
    const cListeners = ref({});
    const activeModal = ref({});
    const modalTransition = ref("modal-fade");
    const { api } = useModal();
    const open = () => {
      isOpen.value = true;
    };
    const close = () => {
      isOpen.value = false;
      cProps.value = {};
      cListeners.value = {};
      activeName.value = "";
    };
    api.on("open", ({ component, name, transition, props, on }) => {
      cProps.value = props;
      cListeners.value = on;
      activeModal.value = component;
      activeName.value = name;
      if (transition) {
        modalTransition.value = transition;
      }
      open();
    });
    api.on("close", () => {
      close();
    });

    return {
      isOpen,
      open,
      close,
      cListeners,
      cProps,
      activeModal,
      modalTransition,
    };
  },
  components: {
    // svgClose,
  },
})
export default class Modal extends Vue {
  get modalClass() {
    return `modal-${this.activeName}`;
  }
}
</script>

<style lang="scss">
</style>