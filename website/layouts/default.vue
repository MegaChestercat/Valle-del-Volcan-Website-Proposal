<template>
    <div>
        <v-layout>
            <v-app-bar>
                <v-app-bar-title>
                    <NuxtLink to="/" class="d-inline-flex" style="text-decoration: none;">
                        <v-img src="~~/assets/logo.png" aspect-ratio="16/9" width="110"  class="mx-2" contain></v-img>
                        <!--<p style="color: black;" class="my-9">Valle del Volcán</p>  -->
                    </NuxtLink>
                </v-app-bar-title>

                <v-spacer></v-spacer>

                <v-btn to="/" variant="plain">
                    <p class="option">Inicio</p>
                </v-btn>
                <v-menu>
                    <template v-slot:activator="{ props: menu }">
                        <v-btn variant="plain" v-bind="menu">
                            <p class="option">Acerca De</p>
                        </v-btn>
                    </template>
                    <v-list>
                        <NuxtLink to="/servicios" style="text-decoration: none;">
                            <v-list-item style="color: black;" title="Servicios"></v-list-item>
                        </NuxtLink>
                        <v-divider class="border-opacity-100" color="black"></v-divider>
                        <NuxtLink to="purificacion" style="text-decoration: none;">
                            <v-list-item  style="color: black;" title="Purificación"></v-list-item>
                        </NuxtLink>
                        <v-divider class="border-opacity-100" color="black"></v-divider>
                        <NuxtLink to="portafolio" style="text-decoration: none;">
                            <v-list-item style="color: black;" title="Portafolio"></v-list-item>
                        </NuxtLink>
                    </v-list>
                </v-menu>
                <v-btn to="/tienda" variant="plain">
                    <p class="option">Tienda</p>
                </v-btn>
                <v-btn to="/rutas" variant="plain">
                    <p class="option">Rutas</p>
                </v-btn>
                <v-btn to="/contacto" variant="plain">
                    <p class="option">Contacto</p>
                </v-btn>
                <v-btn to="/cuenta" variant="plain" icon>
                    <v-icon>mdi-account</v-icon>
                </v-btn>
                <v-btn to="/carrito" variant="plain" icon>
                    <v-icon class="option">mdi-cart-outline</v-icon>
                </v-btn>
            </v-app-bar>
            <v-main class="d-flex align-center justify-center">
                <slot />
            </v-main>
        </v-layout>
    </div>
</template>
<script>
</script>
<style scoped>
.option{
    color: gray;
}

.option:hover{
    color: #3F6677;
}
</style>