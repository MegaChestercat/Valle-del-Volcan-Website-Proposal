<template>
    <div>
        <v-sheet height="300" width="100%" color="#EFF7FA">
            <p class="text-center text-h4 pt-5 font-weight-bold">{{ $t('sub_3') }}</p>
            <div class="mx-15 mt-10">
             <p class="text-center size">{{ $t('Portfolio1') }}</p>
             <p class=" text-center mt-4 size">{{ $t('Portfolio2') }}</p>
             <p class="mt-8 font-italic text-center size">{{ $t('Portfolio3') }}</p>
             <p class="mt-6 text-h5 font-italic text-center">{{ $t('Portfolio4') }}</p> 
            </div>
        </v-sheet>
        <v-container class="my-10">
            <v-row justify="center">
                <v-col>
                    <v-img height="300" src="~~/assets/portfolio/procomin.jpg"></v-img>
                </v-col>
                <v-col>
                    <v-img height="300" src="~~/assets/portfolio/gastromar.jpg"></v-img>
                </v-col>
                <v-col>
                    <v-img height="300" src="~~/assets/portfolio/paletas_loreto.jpg"></v-img>
                </v-col>
                
            </v-row>
            <v-row justify="center">
                <v-col>
                    <v-img height="300" src="~~/assets/portfolio/santoua.jpeg"></v-img>
                </v-col>
                <v-col>
                    <v-img height="300" src="~~/assets/portfolio/san_jorgito.jpg"></v-img>
                </v-col>
                <v-col>
                    <v-img height="300" src="~~/assets/portfolio/gaspachos_montoneros.jpg"></v-img>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col></v-col>
                <v-col>
                    <v-img height="300" src="~~/assets/portfolio/charro_parrillero.jpg"></v-img>
                </v-col>
                <v-col></v-col>
            </v-row>
        </v-container>
        <v-footer color="light-blue-lighten-5" class="d-flex justify-center">
            <div>
                <p class="text-caption">2025 - <strong>Valle del Volcán</strong></p>
            </div>
        </v-footer>
    </div>
</template>
<script>
</script>
<style scoped>
.size{
  font-size: 18px;
}
</style>