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
            <div v-for="[key,value in a]">
            {{key}} => {{value}}
            </div>
        </div>
    </div>
</template>

<script>
const movie = new vue ({
movie1: {
    genere: 'Drama',
    description: '',
    tumbnail: '',
},
movie2: {
    genere: 'Animation',
    description: '',
    tumbnail: '',
},
movie3: {
    genere: 'Comedy',
    description: '',
    tumbnail: '',
},
movie4: {
    genere: 'Thriller',
    description: '',
    tumbnail: '',
},
movie5: {
    genere: '',
    description: '',
    tumbnail: '',
},
movie6: {
    genere: 'Documentary',
    description: '',
    tumbnail: '',
},
movie7: {
    genere: 'Thriller',
    description: '',
    tumbnail: '',
},
movie8: {
    genere: 'Drama',
    description: '',
    tumbnail: '',
},
movie9: {
    genere: 'Drama',
    description: '',
    tumbnail: '',
},
movie10: {
    genere: 'Thriller',
    description: '',
    tumbnail: '',
},
)}
</script>