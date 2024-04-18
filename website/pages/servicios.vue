<template>
    <div>
        <v-sheet color="#71ABC3" width="100%">
            <p class="text-h4 ml-10 pt-5 text-center">{{ $t('ServicesT1') }}</p>
            <div class="ml-16 d-flex justify-space-evenly">
                <div class="mb-7">
                    <v-img src="~~/assets/custom_bottles.jpg" height="450" width="450" class="mx-10"></v-img>
                </div>
                <div class="mx-16 d-flex align-center" >
                    <div class="d-block">
                        <p class="text-justify">{{ $t('Services1') }}</p>
                        <p class="text-justify mt-4">{{ $t('Services1_1') }}</p>
                    </div>
                </div>
            </div>
        </v-sheet>
        <v-sheet color="#3F6677" width="100%" class="flex" >
            <p class="text-h4 pt-5 text-center">{{ $t('ServicesT2') }}</p>
            <div class="ml-7 d-flex">
                <div class="mx-16 mt-16 d-flex">
                    <div class="d-block">
                        <p class="text-justify">{{ $t('Services2') }}</p>
                        <p class="mt-4">{{ $t('Services2_1') }}</p>
                        <div class="d-flex justify-center">
                            <v-btn color="white" size="large" class="my-4 text-none" prepend-icon="mdi-truck" :to="localPath('/rutas')">{{ $t('ServicesBTN1') }}</v-btn>
                        </div>
                    </div>
                </div>
                <v-img src="~~/assets/Camioneta.jpeg" height="450" width="450"  class="mr-10"></v-img>
            </div>
            
        </v-sheet>
        <v-sheet color="#E0F0F7" width="100%" class="flex">
            <p class="text-h4 ml-10 pt-5 text-center">{{ $t('ServicesT3') }}</p>
            <div class="ml-7 d-flex">
                <v-img src="~~/assets/Ventanilla.jpeg" height="450" width="450"  class="mr-10"></v-img>
                <div class="mx-16 mt-16 flex-column " style="display: flex; align-items: center;">
                    <p class="text-justify">{{ $t('Services3') }}</p>
                    <p class="text-justify font-italic mt-5">{{ $t('Services3_1') }}</p>
                </div>
            </div>
            
        </v-sheet>
        <v-sheet color="#71ABC3" width="100%" >
            <p class="text-h4 ml-10 pt-5 text-center">Disponible 24hrs</p>
            <div class="px-7">
                <div class="mx-16 mt-16 flex" style="display: flex; align-items: center;">
                    <div class="d-block">
                        <p class="text-center">{{ $t('Services4') }}</p>
                        <p class="text-center font-italic mt-5">{{ $t('Services4_1') }}</p>
                    </div>
                </div>
                <div class="d-flex justify-center">
                    <div>
                        <v-img src="~~/assets/Maquina.jpeg" height="450" width="450" ></v-img>
                    </div>
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