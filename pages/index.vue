<template>
  <div
    class="bg-wonder-orange w-full h-full flex flex-col justify-center items-center"
  >
    <div><img src="/img/logo/backorange.png" /></div>
    <div class="w-[80%] h-1 bg-white"></div>
    <div class="flex flex-col gap-4 justify-center items-center w-full pt-6">
      <div class="text-white font-bold text-lg">Nama</div>
      <input type="text" class="w-[70%] px-4 py-2 rounded-md text-wonder-orange" />
      <button class="w-[70%] px-4 py-2 text-white font-bold border rounded-md" @click="navigateTo('products')">Mulai Pesan</button>
    </div>
  </div>
</template>
