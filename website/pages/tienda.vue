<template>
<div>
   
    <p class="text-center text-h3 font-weight-bold my-10">{{ $t("header_3") }}</p>
    <v-container>
        <v-row>
            <v-col>
                <v-card width="283" class="mx-auto" align="center">
                    <v-card-title>{{ $t("bottle_title_1") }}</v-card-title>
                    <v-img src="assets/Boston-1.png" height="200" width="200"/>
                    <v-card-text class="size">
                        {{ $t("bottle_description_1") }}
                    </v-card-text>
                    <v-card-text class="size">
                        {{ $t("bottle_price_1") }}
                    </v-card-text>
                    <v-btn class="btn-bg my-4" @click="buyAlert" size="large" rounded="lg" append-icon="mdi-plus">{{ $t('add_cart') }}</v-btn>
                </v-card>
            </v-col>
            <v-col>
                <v-card width="283" class="mx-auto" align="center">
                    <v-card-title>{{ $t("bottle_title_2") }}</v-card-title>
                    <v-img src="assets/Boston-1.png" height="200" width="200"/>
                    <v-card-text class="size">
                        {{ $t("bottle_description_2") }}
                    </v-card-text>
                    <v-card-text class="size">
                        {{ $t("bottle_price_2") }}
                    </v-card-text>
                    <v-btn class="btn-bg my-4" @click="buyAlert" size="large" rounded="lg" append-icon="mdi-plus">{{ $t('add_cart') }}</v-btn>
                </v-card>
            </v-col>
            <v-col>
                <v-card width="283" class="mx-auto" align="center">
                    <v-card-title>{{ $t("bottle_title_3") }}</v-card-title>
                    <v-img src="assets/anillada.jpg" height="200" width="200"/>
                    <v-card-text class="size">
                        {{ $t("bottle_description_3") }}
                    </v-card-text>
                    <v-card-text class="size">
                        {{ $t("bottle_price_3") }}
                    </v-card-text>
                    <v-btn class="btn-bg my-4" @click="buyAlert" size="large" rounded="lg" append-icon="mdi-plus">{{ $t('add_cart') }}</v-btn>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card width="283" class="mx-auto" align="center">
                    <v-card-title>{{ $t("bottle_title_4") }}</v-card-title>
                    <v-img src="assets/anillada.jpg" height="200" width="200"/>
                    <v-card-text class="size">
                        {{ $t("bottle_description_4") }}
                    </v-card-text>
                    <v-card-text class="size">
                        {{ $t("bottle_price_4") }}
                    </v-card-text>
                    <v-btn class="btn-bg my-4" @click="buyAlert" size="large" rounded="lg" append-icon="mdi-plus">{{ $t('add_cart') }}</v-btn>
                </v-card>
            </v-col>
            <v-col>
                <v-card width="283" class="mx-auto" align="center">
                    <v-card-title>{{ $t("bottle_title_5") }}</v-card-title>
                    <v-img src="assets/garrafon.png" height="200" width="200"/>
                    <v-card-text class="size">
                        {{ $t("bottle_description_5") }}
                    </v-card-text>
                    <v-card-text class="size">
                        {{ $t("bottle_price_5") }}
                    </v-card-text>
                    <v-btn class="btn-bg my-4" @click="buyAlert" size="large" rounded="lg" append-icon="mdi-plus">{{ $t('add_cart') }}</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <v-footer color="light-blue-lighten-5" class="d-flex justify-center">
        <div>
            <p class="text-caption">2025 - <strong>Valle del Volcán</strong></p>
        </div>
    </v-footer>
</div>
</template>
<script setup>
import Swal from 'sweetalert2'

useHead({
  title: 'Valle del Volcán - Tienda'
})

const buyAlert = () =>{
    Swal.fire({
        title: "Función no habilitada (Prototipo)",
        text: "Este botón no se encuentra habilitado para la versión actual del sitio web.",
        icon: "warning"
    })
 }
</script>
<style scoped>
.size{
    font-size: 18px;
}

.btn-bg{
    background-color: white;
}

.btn-bg:hover{
    background-color: lightblue;
}
</style>

