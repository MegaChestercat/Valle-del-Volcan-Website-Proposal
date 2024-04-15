<template>
    <div>
        <v-carousel cycle show-arrows="hover">
            <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover>
            </v-carousel-item>
            <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
            cover>
            </v-carousel-item>
            <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover>
            </v-carousel-item>
        </v-carousel>
        <v-divider :thickness="3" class="border-opacity-100" color="blue"></v-divider>
        <v-sheet color="#C8E8F5" :elevation="4" height="350" width="100%" class="d-inline-flex">
            <div>
                <p class="text-h4 ml-10">¿Quiénes Somos?</p>
                <v-img src="~~/assets/logo.png" height="250" width="250"  class="ml-10"></v-img>
            </div>
            <div class="mx-16 mt-15">
                <p>This business determines the use of personal data collectied on our media properties and across the internet. We may collect data that you submit to us directly or data that we collect automatically including from cookies (such as device information or IP address).</p>
            </div>
        </v-sheet>
        <v-sheet color="#EFF7FA" :elevation="4" height="350" width="100%">
            <div  class="pt-5">
                <p class="text-h4 font-weight-bold text-center">Productos más Vendidos</p>
                <div>

                </div>
                <div>
                    <v-btn append-icon="mdi-arrow-right">

                        <p>Ver más</p>
                    </v-btn>
                </div>
            </div>
        </v-sheet>
        <v-sheet color="#3F6677" :elevation="4" height="350" width="100%" class="d-inline-flex">
            <div>
                <p class="text-h4 ml-10">¿Quiénes Somos?</p>
                <v-img src="~~/assets/logo.png" height="250" width="250"  class="ml-10"></v-img>
            </div>
            <div class="mx-16 mt-15">
                <p>This business determines the use of personal data collectied on our media properties and across the internet. We may collect data that you submit to us directly or data that we collect automatically including from cookies (such as device information or IP address).</p>
            </div>
        </v-sheet>
        <v-sheet color="white" :elevation="4" height="350" width="100%" class="d-inline-flex">
            <div>
                <p class="text-h4 ml-10">¿Quiénes Somos?</p>
                <v-img src="~~/assets/logo.png" height="250" width="250"  class="ml-10"></v-img>
            </div>
            <div class="mx-16 mt-15">
                <p>This business determines the use of personal data collectied on our media properties and across the internet. We may collect data that you submit to us directly or data that we collect automatically including from cookies (such as device information or IP address).</p>
            </div>
        </v-sheet>
        <v-sheet color="87BFD7" :elevation="4" height="350" width="100%" class="d-inline-flex">
            <div>
                <p class="text-h4 ml-10">¿Quiénes Somos?</p>
                <v-img src="~~/assets/logo.png" height="250" width="250"  class="ml-10"></v-img>
            </div>
            <div class="mx-16 mt-15">
                <p>This business determines the use of personal data collectied on our media properties and across the internet. We may collect data that you submit to us directly or data that we collect automatically including from cookies (such as device information or IP address).</p>
            </div>
        </v-sheet>
        <v-sheet color="white" :elevation="4" height="150" width="100%" class="d-inline-flex">
            <div>
                <p class="text-h4 ml-10">Contáctanos</p>
                <div class="mx-16 mt-15 d-inline-flex">
                    <v-icon icon="mdi-facebook">
                    </v-icon>
                    <p>000 000 00 00</p>
                    <v-icon icon="mdi-facebook">
                    </v-icon>
                    <p>valle del volcán</p>
                    <v-icon icon="mdi-facebook">
                    </v-icon>
                    <p>@valle del volcán</p>
                </div>
            </div>
        </v-sheet>
        <v-footer>
            <div>
                2025 - <strong>Valle del Volcán</strong>
            </div>
        </v-footer>
    </div>
</template>
<script>
</script>
<style scoped>
</style>