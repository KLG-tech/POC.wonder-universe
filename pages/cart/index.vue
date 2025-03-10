<script lang="ts" setup>
definePageMeta({
  layout: "cart",
});
export interface ICart {
  sku: string;
  qty: number;
  img: string;
  price: number;
  title: string;
  subTitle: string;
}

const isShowDialog = ref(false);

const tempCart = ref<ICart[]>([
  {
    sku: "12345",
    qty: 1,
    img: "/img/placeholders/ticket.png",
    price: 100000,
    title: "Single Session",
    subTitle: "(6 Minute)",
  },
  {
    sku: "22456",
    qty: 3,
    img: "/img/placeholders/ticket.png",
    price: 250000,
    title: "Wonder Universe Crane game coin",
    subTitle: "(1 token)",
  },
  {
    sku: "22456",
    qty: 3,
    img: "/img/placeholders/ticket.png",
    price: 250000,
    title: "Wonder Universe Crane game coin",
    subTitle: "(1 token)",
  },
  {
    sku: "22456",
    qty: 3,
    img: "/img/placeholders/ticket.png",
    price: 250000,
    title: "Wonder Universe Crane game coin",
    subTitle: "(1 token)",
  },
  {
    sku: "22456",
    qty: 3,
    img: "/img/placeholders/ticket.png",
    price: 250000,
    title: "Wonder Universe Crane game coin",
    subTitle: "(1 token)",
  },
]);

const total = computed(() => {
  return tempCart.value.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);
});

const totalQty = computed(() => {
  return tempCart.value.reduce((total, item) => {
    return total + item.qty;
  }, 0);
});

const itemToDel = ref<ICart | null>(null);
const idxToDel = ref<number | null>(null);

function doConfirmDelete(item: ICart, idx: number) {
  isShowDialog.value = true;
  idxToDel.value = idx;
  itemToDel.value = item;
}

function doDelete() {
  tempCart.value.splice(Number(idxToDel.value), 1);
  itemToDel.value = null;
  idxToDel.value = null;
  isShowDialog.value = false;
  useNuxtApp().$toast(`<b>Item berhasil dihapus!</b>`);
}
</script>
<template>
  <div class="flex flex-col gap-4 h-[100vh] px-6 overflow-auto">
    <div>
      <NuxtImg src="/img/logo/backwhite.png" class="!w-[30vw] mx-auto" />
    </div>
    <div class="bg-wonder-orange w-full h-1 rounded-full"></div>
    <div class="flex flex-col gap-6 overflow-auto h-[60vh]">
      <div
        v-for="(item, idx) in tempCart"
        :key="item.sku"
        class="border-2 rounded-2xl sm:!min-h-[160px] flex sm:flex-row flex-col gap-4 p-4 text-wonder-orange relative"
      >
        <div
          class="hover:cursor-pointer absolute top-0 right-0 h-[30px] w-[30px] m-2 rounded-full bg-wonder-kidsRed flex items-center justify-center"
          @click="doConfirmDelete(item, idx)"
        >
          <!-- <span class="text-white">x</span> -->
          <Icon
            name="material-symbols-light:delete-rounded"
            class="text-white"
          />
        </div>
        <div class="h-[100px] sm:h-full aspect-square">
          <NuxtImg :src="item.img" class="w-full h-full object-contain" />
        </div>
        <div class="flex flex-col items-center sm:items-start justify-start min-w-[40%]">
          <div class="text-lg font-bold">{{ item.title }}</div>
          <div class="text-base">{{ item.subTitle }}</div>
        </div>
        <div
          class="h-full flex items-start sm:items-end w-full justify-center flex-col overflow-visible"
        >
          <InputNumber v-model="item.qty" :min="1" />
        </div>
        <div class="absolute bottom-0 right-0 p-4 text-2xl font-bold">
          {{ formatPrice(item.qty * item.price) }}
        </div>
      </div>
    </div>
    <div class="w-full">
      <div
        class="flex flex-col gap-2 w-full h-[120px] sm:h-[150px] bg-wonder-orange p-6 text-white"
      >
        <span class="font-semibold text-xl">Total Pesanan:</span>
        <div class="flex flex-col justify items-end">
          <span class="text-lg sm:text-3xl font-bold">{{ formatPrice(total) }}</span>
          <span class="text-base sm:text-xl"> ( {{ totalQty }} items )</span>
        </div>
      </div>
      <div class="flex flex-row gap-4 items-center justify-center p-4">
        <button
          class="w-[190px] sm:w-[210px] py-2 rounded-md bg-wonder-kidsRed text-white font-bold"
        >
          Kembali
        </button>
        <button
          class="w-[190px] sm:w-[210px] py-2 rounded-md bg-wonder-orange text-white font-bold"
        >
          Lanjut ke Pembayaran
        </button>
      </div>
    </div>
    <CommonModal v-model:isShown="isShowDialog">
      <div class="text-center text-xl font-bold">Hapus dari keranjang</div>
      <div class="flex flex-col items-center gap-2 py-4">
        <div class="h-[100px] aspect-square">
          <NuxtImg :src="itemToDel?.img" class="w-full h-full object-contain" />
        </div>
        <div
          class="flex flex-col items-center text-center justify-center min-w-[40%] text-wonder-orange"
        >
          <div class="text-lg font-bold">{{ itemToDel?.title }}</div>
          <div class="text-base">{{ itemToDel?.subTitle }}</div>
        </div>
        <div
          v-if="itemToDel"
          class="text-2xl font-bold text-right flex items-center flex-grow text-wonder-orange"
        >
          {{ formatPrice(itemToDel?.qty * itemToDel?.price) }}
        </div>
      </div>

      <div class="flex flex-row gap-6 items-center justify-center p-4">
        <button
          class="w-[210px] py-2 rounded-md bg-wonder-kidsRed text-white font-bold"
          @click="isShowDialog = false"
        >
          Batal
        </button>
        <button
          class="w-[210px] py-2 rounded-md bg-wonder-orange text-white font-bold"
          @click="doDelete"
        >
          Hapus
        </button>
      </div>
    </CommonModal>
  </div>
</template>
