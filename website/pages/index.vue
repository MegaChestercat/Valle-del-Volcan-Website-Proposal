<template>
    <div>
        <v-carousel cycle show-arrows="hover">
            <v-carousel-item
            src="~~/assets/Portada1.png"
            cover>
            </v-carousel-item>
            <v-carousel-item
            src="~~/assets/Portada2.png"
            cover>
            </v-carousel-item>
            <v-carousel-item
            src="~~/assets/Portada3.png"
            cover>
            </v-carousel-item>
        </v-carousel>
        <v-divider :thickness="3" class="border-opacity-100" color="blue"></v-divider>
        <v-sheet color="#C8E8F5" width="100%" class="d-flex">
            <div>
                <p class="text-h4 ml-10 mt-8 font-weight-bold text-center">{{ $t('homeT1') }}</p>
                <v-img src="~~/assets/local.jpeg" height="350" width="350"  class="ml-10 "></v-img>
            </div>
            <div class="mx-16 mt-15">
                <p class="text-justify">{{ $t('home1') }}</p>
                <ul class="my-3 ml-5">
                    <li>
                        <p>{{ $t('homeListE1') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('homeListE2') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('homeListE3') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('homeListE4') }}</p>
                    </li>
                </ul>
                <p class="text-justify">{{ $t('home1_2') }}</p>
                <ul class="my-3 ml-5">
                    <li>
                        <p>{{ $t('homeList2E1') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('homeList2E2') }}</p>
                    </li>
                    <li>
                        <p>{{ $t('homeList2E3') }}</p>
                    </li>
                </ul>
            </div>
        </v-sheet>
        <v-sheet color="#EFF7FA" width="100%">
            <p class="text-h4 pt-5 font-weight-bold text-center">{{ $t('homeT2') }}</p>
            <div class="pt-5 d-flex justify-space-between">
                

                <v-card width="283" class="mx-auto" align="center">
                    <v-card-title>Botella de agua 1L</v-card-title>
                    <v-img src="assets/bottle1L.png" height="200" width="200"/>
                    <v-card-text>
                        $13
                    </v-card-text>
                </v-card>
                <v-card width="283" class="mx-auto" align="center" color="blue">
                    
                    <v-card-title>Garrafon 19 lts</v-card-title>
                    <v-img src="assets/garrafon.png" height="200" width="200"/>
                    <v-card-text>
                        $15
                    </v-card-text>
                    <v-card subtitle="Nuestro favorito" ></v-card>
                </v-card>

                <v-card width="283" class="mx-auto" align="center">
                    <v-card-title>Botella de agua 600ml</v-card-title>
                    <v-img src="assets/bottle600ml.png" height="200" width="200"/>
                     <v-card-text>
                        $11
                    </v-card-text>
                </v-card>
            </div>
            <div class="d-flex justify-center py-6">
                <v-btn :to="localPath('/tienda')" class="text-none" append-icon="mdi-arrow-right">
                    <p>{{ $t('homeBTN1') }}</p>
                </v-btn>
            </div>

        </v-sheet>
        <v-sheet color="#3F6677" width="100%" class="d-flex justify-space-evenly">
            <div>
                <p class="text-h4 text-center mt-5">{{ $t('homeT3_1') }}</p>
                <NuxtLink :to="localPath('/servicios')">
                    <v-img src="~~/assets/Maquina.jpeg" height="400" width="400"></v-img>
                </NuxtLink>
            </div>
            
            <div>
                <p class="text-h4 text-center mt-5">{{ $t('homeT3_2') }}</p>
                <NuxtLink :to="localPath('/purificacion')">
                    <v-img src="~~/assets/proceso_purificacion.jpg" height="400" width="400" class="my-5"></v-img>
                </NuxtLink>
                
            </div>
            
        </v-sheet>
        <v-sheet color="#A8D5E9" width="100%" class="d-flex">
            <div class="mx-16">
                <v-img src="~~/assets/certificacion.jpg" height="450" width="450"></v-img>
            </div>
            <div class="mx-16 mb-5">
                <p class="text-h4 mr-10 mt-8 font-weight-bold text-center">{{ $t('homeT4') }}</p>
                <p class="mt-4 text-justify">{{ $t('home2') }}</p>
                <ul class="mx-16">
                    <li><p class="mt-4 text-justify">{{ $t('home3') }}</p></li>
                    <li><p class="mt-4 text-justify">{{ $t('home4') }}</p></li>
                </ul>
            </div>
            
        </v-sheet>
        <v-sheet color="#87BFD7" width="100%" class="d-flex">
            <div>
                <p class="text-h4 text-center mt-8 font-weight-bold">{{ $t('homeT5') }}</p>
                <v-img src="~~/assets/local_front.jpg" height="350" width="350"  class="ml-10"></v-img>
            </div>
            <div class="mx-16 mt-15">
                <p class="text-justify">{{ $t('home5') }}</p>
                <p class="text-justify mt-7">{{ $t('home6') }}</p>
                <div class="d-flex justify-center align-center my-16">
                    <v-btn elevation="4" :to="localPath('/rutas')" class="text-none" size="x-large"prepend-icon="mdi-truck">
                        {{ $t('homeBTN2') }}
                    </v-btn>
                </div>
            </div>
        </v-sheet>
        <v-sheet color="#3F6677" height="150" width="100%" class="d-flex justify-center">
            
           <div class="d-block">
                <p class="text-h4 text-center mt-3">{{ $t('homeT6') }}</p>
                <div class="d-flex ">
                    <v-img class="ml-15 my-4" src="../assets/whatsapp.png"  width="30" height="30"></v-img>
                    <p class="text-left ml-3 mt-5">221 530 46 60</p>
                    <v-img class="ml-15 my-4" src="../assets/facebook.png"  width="30" height="30"></v-img>
                    <p class="mt-5 ml-3">valle del volcán</p>
                </div>
           </div>
        </v-sheet>
        <v-footer color="light-blue-lighten-5" class="d-flex justify-center">
            <div>
                <p class="text-caption">2025 - <strong>Valle del Volcán</strong></p>
            </div>
        </v-footer>
    </div>
</template>
<script setup>
const localPath = useLocalePath()
</script>
<style scoped>

</style>