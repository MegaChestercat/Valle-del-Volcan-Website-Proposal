<template>
  <div class="bg">
    <p class="text-center text-h3 font-weight-bold my-10">{{ $t("header_4") }}</p>
    
    <v-container fluid> <!-- "fluid" hará que el contenedor se expanda al ancho disponible -->
      <v-row justify="center">

        <!-- Columnas para la imagen del mapita, ahora dentro de una tarjeta -->
        <v-col cols="12" lg="6" xl="5">
          <v-card class="elevation-5">
            <br>
            <v-img
              class="map-image" 
              src="~/assets/mapita2.png"
              alt="Mapita"
              height="450"
            ></v-img>
            <v-card-title class="font-weight-bold"> {{ $t('Routes3') }}</v-card-title>
            <v-card-text class="ml-4">
              <ul>
                <li class="size">San Andrés Cholula</li>
                <li class="size">San Pedro Cholula</li>
                <li class="size">Plaza San Diego</li>
                <li class="size">Zerezotla</li>
                <li class="size">Angelopolis</li>
                <li class="size">Lomas de Angelopolis</li>
                <li class="size">Central de Abastos</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
</script>
<style scoped>
.bg{
  background-color: #C8E8F5;
}
.size{
  font-size: 18px;
}
</style>
