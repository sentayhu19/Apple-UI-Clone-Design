<script setup>
import { ref } from "vue";
const show = ref(false);
</script>

<template>
    <!-- Desk -->
    <nav class="sm:hidden md:block">
        <ul class="bg-[#333] fixed m-auto flex justify-center  gap-7 top-0 w-full h-[44px] items-center pl-12 pr-12">
            <li class="text-[#AEAEAE] "><font-awesome-icon class="text-white-500" icon="fa-brands fa-apple" /></li>
            <li class="text-[#AEAEAE] text-[12px]">Store</li>
            <li class="text-[#AEAEAE] text-[12px]">Mac</li>
            <li class="text-[#AEAEAE] text-[12px]">iPad</li>
            <li class="text-[#AEAEAE] text-[12px]">iPhone</li>
            <li class="text-[#AEAEAE] text-[12px]">Watch</li>
            <li class="text-[#AEAEAE] text-[12px]">AirPods</li>
            <li class="text-[#AEAEAE] text-[12px]">Tv & Home</li>
            <li class="text-[#AEAEAE] text-[12px]">Only on Apple</li>
            <li class="text-[#AEAEAE] text-[12px]">Accessories</li>
            <li class="text-[#AEAEAE] text-[12px]">Support</li>
        </ul>
    </nav>
  
    <nav v-if="!show" class="bg-[#333] h-[45px] pl-5 pr-5">
        <div class="flex items-center justify-between ">
        <button @click="show = true"><p class="text-[#AEAEAE] text-3xl">=</p></Button>
            <p class="text-[#AEAEAE]">Apple logo</p>
            <p class="text-[#AEAEAE]">Shop logo</p>
        </div>
    </nav>

        <nav class="bg-black md:hidden w-full h-[100vh] " v-if="show" >
            <div class="flex w-96 items-center h-10">
            <p class="text-white p-5" @click="show = !show" >X</p>
            <p class="text-white m-auto">Apple logo</p>
        </div>
    
        <input type='text' class="bg-[#1D1D1F] w-[92%] h-[40px] m-auto ml-[15px] mr-[12px] rounded-lg" placeholder="Search apple.com"/>
    <hr class="bg-[#AEAEAE] mt-5"/>
        <ul class="pl-[38px]">
         <li class="text-[#AEAEAE]">
            <!-- <font-awesome-icon class="text-white-500" icon="fa-brands fa-apple" /> -->
            <font-awesome icon="fa-solid fa-user-secret"/>
        </li>
            <li class="text-[#AEAEAE] border-b-2 border-[#AEAEAE] mt-5 w-[90%]  "><p class="pb-3 text-[17px]">Store <font-awesome icon="fa-solid fa-user-secret"/></p></li>
            <li class="text-[#AEAEAE] border-b-2 border-[#AEAEAE] mt-5 w-[90%]"><p class="pb-1 text-[17px]">Mac</p></li>
            <li class="text-[#AEAEAE] border-b-2 border-[#AEAEAE] mt-5 w-[90%]"><p class="pb-2 text-[17px]">iPad</p></li>
            <li class="text-[#AEAEAE] border-b-2 border-[#AEAEAE] mt-5 w-[90%]"><p class="pb-1 text-[17px]">iPhone</p></li>
            <li class="text-[#AEAEAE] border-b-2 border-[#AEAEAE] mt-5 w-[90%]"><p class="pb-1 text-[17px]">Watch</p></li>
            <li class="text-[#AEAEAE] border-b-2 border-[#AEAEAE] mt-5 w-[90%]"><p class="pb-1 text-[17px]"></p>AirPods</li>
            <li class="text-[#AEAEAE] border-b-2 border-[#AEAEAE] mt-5 w-[90%]"><p class="pb-1 text-[17px]">Tv & Home</p></li>
            <li class="text-[#AEAEAE] border-b-2 border-[#AEAEAE] mt-5 w-[90%]"><p class="pb-1 text-[17px]">Only on Apple</p></li>
            <li class="text-[#AEAEAE] border-b-2 border-[#AEAEAE] mt-5 w-[90%]"><p class="pb-1 text-[17px]">Accessories</p></li>
            <li class="text-[#AEAEAE]  mt-5 w-[90%]"><p class="pb-2 text-[17px]">Support</p></li>
        </ul>
    </nav>
    
</template>