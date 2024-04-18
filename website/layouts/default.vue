<template>
    <div>
        <v-layout>
            <v-app-bar>
                <v-app-bar-title>
                    <NuxtLink :to="localPath('/')" class="d-inline-flex" style="text-decoration: none;">
                        <v-img src="~~/assets/logo.png" aspect-ratio="16/9" width="110"  class="mx-2" contain></v-img>
                        <!--<p style="color: black;" class="my-9">Valle del Volcán</p>  -->
                    </NuxtLink>
                </v-app-bar-title>

                
                <v-btn :to="localPath('/')" variant="plain">
                    <p class="option text-none">{{ $t('header_1') }}</p>
                </v-btn>
                <v-menu>
                    <template v-slot:activator="{ props: menu }">
                        <v-btn variant="plain" v-bind="menu">
                            <p class="option text-none">{{ $t('header_2') }}</p>
                        </v-btn>
                    </template>
                    <v-list>
                        <NuxtLink :to="localPath('/servicios')" style="text-decoration: none;">
                            <v-list-item style="color: black;">{{ $t('sub_1') }}</v-list-item>
                        </NuxtLink>
                        <v-divider class="border-opacity-100" color="black"></v-divider>
                        <NuxtLink :to="localPath('/purificacion')" style="text-decoration: none;">
                            <v-list-item  style="color: black;" >{{ $t('sub_2') }}</v-list-item>
                        </NuxtLink>
                        <v-divider class="border-opacity-100" color="black"></v-divider>
                        <NuxtLink :to="localPath('/portafolio')" style="text-decoration: none;">
                            <v-list-item style="color: black;" >{{ $t('sub_3') }}</v-list-item>
                        </NuxtLink>
                    </v-list>
                </v-menu>
                <v-btn :to="localPath('/tienda')" variant="plain">
                    <p class="option text-none">{{ $t('header_3') }}</p>
                </v-btn>
                <v-btn :to="localPath('/rutas')" variant="plain">
                    <p class="option text-none">{{ $t('header_4') }}</p>
                </v-btn>
                <v-btn :to="localPath('/contacto')" variant="plain">
                    <p class="option text-none">{{ $t('header_5') }}</p>
                </v-btn>
                <v-btn :to="localPath('/carrito')" variant="plain" icon>
                    <v-icon class="option">mdi-cart-outline</v-icon>
                </v-btn>
                <v-btn variant="plain" @click="spanishLan">
                    <p class="option text-caption">Es</p>
                </v-btn>
                <p class="option mx-n4">|</p>
                <v-btn variant="plain" @click="englishLan">
                    <p class="option text-caption">En</p>
                </v-btn>
            </v-app-bar>
            <v-main class="d-flex align-center justify-center">
                <slot />
            </v-main>
        </v-layout>
    </div>
</template>
<script setup>
 const {setLocale} = useI18n();
 const localPath = useLocalePath()

const englishLan = () =>{
    setLocale("en-US")
}

const spanishLan = () =>{
    setLocale("es-MX")
}

</script>
<style scoped>
.option{
    color: gray;
}

.option:hover{
    color: #3F6677;
}
</style>