<script lang="ts" setup>
const itemCheckOut = getWithExpiry("cart_payment");

if (!itemCheckOut) {
  useNuxtApp().$toast.error(`<b>Session pembayaran telah berakhir</b>`);
  navigateTo("/cart");
}

const total = computed(() => {
  if (itemCheckOut) {
    return itemCheckOut.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
  } else {
    return 0;
  }
});
</script>
<template>
  <div
    class="bg-wonder-orange p-4 w-full h-full flex flex-col items-center gap-4"
  >
    <div><img src="/img/logo/backorange.png" /></div>
    <div class="w-full h-1 bg-white"></div>
    <div class="w-full text-center text-white text-2xl">
      Pilih metode pembayaran
    </div>
    <div class="flex flex-col w-full h-full justify-between">
      <div class="grid grid-cols-2 gap-4 sm:gap-8 justify-center w-full">
        <div
          class="w-full h-full bg-white rounded-lg flex flex-col gap-4 p-4 sm:p-6"
        >
          <div class="w-full aspect-square p-6 border-2 rounded-lg">
            <Icon
              name="game-icons:swipe-card"
              class="w-full h-full text-wonder-orange"
            />
          </div>
          <div class="text-lg text-wonder-orange font-bold text-center">
            Card Payment
          </div>
          <div
            class="w-full h-full flex flex-warp gap-4 items-center justify-center"
          >
            <div class="w-1/3 !aspect-square">
              <Icon name="brandico:visa" class="w-full h-full text-[#1434CB]" />
            </div>
            <div class="w-1/3 !aspect-square">
              <Icon
                name="logos:mastercard"
                class="w-full h-full text-[#1434CB]"
              />
            </div>
            <div class="w-1/3 !aspect-square">
              <Icon name="logos:jcb" class="w-full h-full text-[#1434CB]" />
            </div>
            <div class="w-1/3 !aspect-square">
              <Icon name="logos:cirrus" class="w-full h-full text-[#1434CB]" />
            </div>
          </div>
        </div>
        <div
          class="w-full h-full bg-white rounded-lg flex flex-col gap-4 p-4 sm:p-6"
        >
          <div class="w-full aspect-square p-6 border-2 rounded-lg">
            <Icon
              name="streamline:phone-qr-solid"
              class="w-full h-full text-wonder-orange"
            />
          </div>
          <div class="text-lg text-wonder-orange font-bold text-center">
            QRIS Payment
          </div>
        </div>
      </div>
      <div class="w-full h-[100px] text-white">
        <div class="w-full h-1 bg-white mb-4"></div>
        <div class="flex flex-col text-white">
          <span class="font-semibold">Total Pesanan:</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <div class="text-3xl font-bold">{{ formatPrice(total) }}</div>
          <button
            class="px-6 bg-wonder-kidsRed shadow-md py-2 rounded-lg font-bold text-white"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
