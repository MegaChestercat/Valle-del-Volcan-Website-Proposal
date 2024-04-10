<template>
    
    <div>
        <v-carousel cycle show-arrows="hover">
            <v-carousel-item
                src="assets/volcano.jpg"
                style="position: relative; top: 20px;"
                cover>
                <p style="position: absolute; bottom: 50px; right: 0; color: white">
                    Foto de <a href="https://unsplash.com/es/@da_sikka_x?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Amritanshu Sikdar</a> en <a href="https://unsplash.com/es/fotos/gota-de-agua-en-la-foto-del-cubo-LoGnr-w1D8E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </p>
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
                <p class="text-h4 ml-10 mt-5" style ="font-weight: 200;white-space: nowrap;" >¿Quiénes Somos?</p>
                <v-img src="~~/assets/logo.jpg" height="250" width="250"  class="ml-10"></v-img>
            </div>
            <div class="mx-16 mt-15">
                <p>This business determines the use of personal data collectied on our media properties and across the internet. We may collect data that you submit to us directly or data that we collect automatically including from cookies (such as device information or IP address).</p>
            </div>
        </v-sheet>
        <v-sheet color="#EFF7FA" :elevation="4" height="450" width="100%">
            <p class="text-h4 font-weight-bold text-center" style="padding-top: 24px;">Productos más Vendidos</p>
            <div  class="pt-5" style="display: flex; justify-content: space-between;">
                <v-card width="283" class="mx-auto" align="center">
                    <v-card-title>Garrafon 19 lts</v-card-title>
                    <v-img src="assets/garrafon.png" height="200" width="200"/>
                    <v-card-text>
                         $15
                    </v-card-text>
                </v-card>
            
                <v-card width="283" class="mx-auto" align="center">
                    <v-card-title>Botella de agua 1L</v-card-title>
                    <v-img src="assets/bottle1L.png" height="200" width="200"/>
                    <v-card-text>
                         $15
                    </v-card-text>
                </v-card>
                <v-card width="283" class="mx-auto" align="center">
                    <v-card-title>Botella de agua 600ml</v-card-title>
                    <v-img src="assets/bottle600ml.png" height="200" width="200"/>
                    <v-card-text>
                         $15
                    </v-card-text>
                </v-card>
            </div>
        </v-sheet>
        <v-sheet color="#3F6677" :elevation="4" height="350" width="100%" class="d-inline-flex">
            <div>
                <p class="text-h4 ml-10">¿Quiénes Somos?</p>
                <v-img src="~~/assets/logo.jpg" height="250" width="250"  class="ml-10"></v-img>
            </div>
            <div class="mx-16 mt-15">
                <p>This business determines the use of personal data collectied on our media properties and across the internet. We may collect data that you submit to us directly or data that we collect automatically including from cookies (such as device information or IP address).</p>
            </div>
        </v-sheet>
        <v-sheet color="white" :elevation="4" height="350" width="100%" class="d-inline-flex">
            <div>
                <p class="text-h4 ml-10">¿Quiénes Somos?</p>
                <v-img src="~~/assets/logo.jpg" height="250" width="250"  class="ml-10"></v-img>
            </div>
            <div class="mx-16 mt-15">
                <p>This business determines the use of personal data collectied on our media properties and across the internet. We may collect data that you submit to us directly or data that we collect automatically including from cookies (such as device information or IP address).</p>
            </div>
        </v-sheet>
        <v-sheet color="87BFD7" :elevation="4" height="350" width="100%" class="d-inline-flex">
            <div>
                <p class="text-h4 ml-10">¿Quiénes Somos?</p>
                <v-img src="~~/assets/logo.jpg" height="250" width="250"  class="ml-10"></v-img>
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
<style >
a {
    color: white;
    text-decoration: none;
}
</style>