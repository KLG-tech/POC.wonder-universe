<script lang="ts" setup>
import { Dialog, DialogPanel, TransitionRoot } from "@headlessui/vue";
defineProps<{
  item?: {
    name: string;
    img_main: string;
    description: string;
    redirect_link: string;
    custom_text_url: string;
  };
}>();

const isShown = defineModel<boolean>("isShown", {
  default: false,
});

function setIsOpen(value: boolean) {
  isShown.value = value;
}

</script>
<template>
  <TransitionRoot
    :show="isShown"
    as="template"
    enter="duration-200 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <Dialog @close="setIsOpen" class="relative z-50">
      <div class="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div class="fixed inset-0 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            class="relative p-4 w-full max-h-[90vh] max-w-sm md:max-w-xl bg-white rounded-2xl overflow-x-hidden overflow-y-auto"
          >
            <slot />
            <div
              class="text-white font-semibold absolute top-0 right-0 m-3 bg-wonder-kidsRed rounded-full aspect-square text-center justify-center items-center h-[30px] w-[30px] hover:cursor-pointer"
              @click="isShown = false"
              >
              x
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
