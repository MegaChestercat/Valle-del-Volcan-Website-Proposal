<template>
    <div>
        <v-layout>
            <v-app-bar>
                <NuxtLink to="/">
                    <v-img src="~~/assets/logo.jpg" class="d-inline-flex"></v-img>
                    <v-app-bar-title class="ml-5 d-inline-flex">Valle del Volcán</v-app-bar-title>
                </NuxtLink>

                <v-spacer></v-spacer>

                <v-btn to="/" variant="plain">
                    <p>Inicio</p>
                </v-btn>
                <v-menu>
                    <template>
                        
                    </template>
                </v-menu>
                <v-btn to="/" variant="plain">
                    <p>Acerca De</p>
                </v-btn>
                <v-btn to="/" variant="plain">
                    <p>Tienda</p>
                </v-btn>
                <v-btn to="/" variant="plain">
                    <p>Rutas</p>
                </v-btn>
                <v-btn to="/" variant="plain">
                    <p>Contacto</p>
                </v-btn>
                <v-btn to="/" variant="plain" icon>
                    <v-icon>mdi-account</v-icon>
                </v-btn>
                <v-btn to="/" variant="plain" icon>
                    <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
            </v-app-bar>
            <v-main class="d-flex justify-center">

            </v-main>
        </v-layout>
    </div>
</template>
<script>
</script>
<style scoped>
</style>