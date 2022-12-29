<template>
    <div>
        <div class="flex flex-col text-center pt-5">
            <h1 class="text-[32px] font-bold">iPhone 14</h1>
            <p class="text-[19px]">Big and bigger</p>
            <div class="flex m-auto">
            <p class="text-[19px] text-[#06c] ">Learn more ></p>
            <p class="text-[19px] text-[#06c] ">Buy ></p>
        </div>
        <div>
            <img src="../assets/iphone14-hero-sec.png" class="h-[450px] w-full" />
        </div>
        <div>
            <img  src="../assets/gift-home.png" class="h-[360px] w-full absolute z-0 "/>
        <div class="relative z-10 mt-64">          
            <h2 class="text-[32px] text-[#f5f5f7]">Wow yourslef.</h2>
            <p class="text-[#f5f5f7] max-h-[240px]">Get he gift you've been eyeing all season.</p>
            <p class="text-[#06c]">Shop ></p>
        </div>

        </div>
        <div class="mt-3">
            <div class="bg-black h-30 pt-5 ">
                <div class="flex flex-col">
                    <div class="flex flex-col">
                    <h2 class="text-[#f5f5f7] text-3xl">Watch</h2>
                    <p class="text-red-500">SERIES</p>
                    </div>
                  
                    <h2 class="text-[#f5f5f7]">A healthy leap ahead.</h2>
                    <div class="flex text-center m-auto gap-5">
                    <p class="text-[#06c]">Learn more ></p>
                    <p class="text-[#06c]">Buy ></p>
                </div>
                </div>    
            </div>
            <img src="../assets/whatch-home.png" class="w-full h-full"/>
        </div>
        <div class="mt-3">
            <div class="bg-black h-30 pt-5 ">
                <div class="flex flex-col">
                    <div class="flex flex-col">
                    <h2 class="text-[#f5f5f7] text-3xl">iPhone 14 pro</h2>
                    <h3 class="text-[#f5f5f7]">Pro.Beyond.</h3>
                    </div>
                    <div class="flex text-center m-auto gap-5">
                    <p class="text-[#06c]">Learn more ></p>
                    <p class="text-[#06c]">Buy ></p>
                </div>
                </div>    
            </div>
            <img src="../assets/iphone-home.png" class="w-full h-full"/>
        </div>
        <div class="mt-3">
            <div class="bg-[#FBFBFB] h-30 pt-5 ">
                <div class="flex flex-col">
                    <div class="flex flex-col">
                    <h2 class="text-black text-3xl">iPad</h2>
                    <p class="text-black">Lovable. Drawable. Magical.</p>
                    </div>
                  
                  
                    <div class="flex text-center m-auto">
                    <p class="text-[#06c]">Learn more ></p>
                    <p class="text-[#06c]">Buy ></p>
                </div>
                </div>    
            </div>
            <img src="../assets/ipad-home.png" class="w-full h-full"/>
        </div>
        <div class="mt-3">
            <div class="bg-[#FBFBFB] h-30 pt-5 ">
                <div class="flex flex-col">
                    <div class="flex flex-col">
                    <h2 class="text-black text-3xl font-bold">Watch</h2>
                    <p class="text-red-500 font-bold">ULTRA</p>
                    </div>
                  
                    <h2 class="text-black">Adventure awaits.</h2>
                    <div class="flex text-center gap-5 m-auto ">
                    <p class="text-[#06c]">Learn more ></p>
                    <p class="text-[#06c]">Buy ></p>
                </div>
                </div>    
            </div>
            <img src="../assets/watch-home.png" class="w-full h-full"/>
        </div>
        <div class="mt-3">
            <div class="bg-black h-30 pt-5 ">
                <div class="flex flex-col">
                    <div class="flex flex-col">
                    <h2 class="text-[#f5f5f7] text-3xl">AirPods Pro</h2>
                    <p class="text-[#f5f5f7]">Rebuilt from the sound up.</p>
                    </div>
                    <div class="flex text-center gap-5 m-auto">
                    <p class="text-[#06c]">Learn more ></p>
                    <p class="text-[#06c]">Buy ></p>
                </div>
                </div>    
            </div>
            <img src="../assets/airpods-home.png" class="w-full h-full"/>
        </div>
        <div class="mt-3">
            <div class="bg-[#FBFBFD] h-30 pt-5 ">
                <div class="flex flex-col">
                    <div class="flex flex-col">
                    <h2 class="text-black font-bold text-3xl">MaacBook Air</h2>
                    <p class="text-black">SuperCharged by M2</p>
                    </div>
                    <div class="flex text-center gap-5 m-auto">
                    <p class="text-[#06c]">Learn more ></p>
                    <p class="text-[#06c]">Buy ></p>
                </div>
                </div>    
            </div>
            <img src="../assets/mackbookair-home.png" class="w-full h-full"/>
        </div>
        <div class="mt-3">
            <div class="bg-[#FBFBFD] h-30 pt-5 ">
                <div class="flex flex-col">
                    <div class="flex flex-col">
                    <h2 class="text-black font-bold text-3xl">Card</h2>
                    <p class="text-black w-full">Get up to 3% Daily Cash back with every purchase</p>
                    </div>
                    <div class="flex text-center gap-5 m-auto">
                    <p class="text-[#06c]">Learn more ></p>
                    <p class="text-[#06c]">Apply now ></p>
                </div>
                </div>    
            </div>
            <img src="../assets/card-home.png" class="w-full h-full"/>
        </div>
        
        </div>
        <div>
    <div    v-if="movies.length > 0">
        <div class="flex overflow-x-auto  scrollbar-hide mt-5">
      <div class="min-w-[350px]" v-for="movie in movies" :key="movie.id" >
          <div class="relative z-10 text-center mt-[400px]">
            <img :src=" movie.thumbnail" class="h-[495px] max-w-[100%] absolute"/>
        <div class="relative mt-[40px] bg-slate-500 opacity-80">
          <p class="text-[#DAD7D8] font-bold">{{ movie.genere }}</p>
          <p class="text-[#DAD7D8] font-bold">{{ movie.description }}</p>
          <button class="bg-white text-black border-red-100 rounded-[4px] font-bold ">Stream now ▷ </button>
        </div>
        </div>
    </div>
</div>
    </div>
  </div>
        
    </div>
</template>

<script>
import axios from 'axios';
      export default {
  name: 'MovieList',
  data() {
    return {
      movies: [],
    };
  },
  created() {
    // Fetch movie data from a JSON file or API
    axios.get('../src/assets/data.json').then((response) => {
         console.log("RESPONSE:  ",response.data)
      this.movies = response.data;
    });
  },
};
</script>