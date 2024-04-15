<!-- rutas.vue -->
<template>
  <div class="component-background" style="display:flex; align-items:center;  justify-content:center;">
    <v-container fluid > <!-- "fluid" hará que el contenedor se expanda al ancho disponible -->
      <v-row justify="center">
        <!-- Columnas para la primera tarjeta, ahora tomando un ancho más grande en pantallas grandes -->
        <v-col cols="12" lg="6" xl="5">
          <v-card class="elevation-5 mb-4">
            <v-img
              height="300px"
              src="~/assets/frontPurificadora.jpeg"
              alt="Purificadora"
            ></v-img>
            <v-card-title>
              Dirección
            </v-card-title>
            <v-card-text>
              Cam. Real a San Andrés 1230, Sin Nombre de Col 4, 72810 San Andrés Cholula, Pue.
              <br>
              Número de teléfono: 2222384485
              <br>
              Horario: 9am - 10pm
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Columnas para la imagen del mapita sin tarjeta, ahora tomando un ancho más grande en pantallas grandes -->
        <v-col cols="12" lg="6" xl="5">
          <v-img
            class="map-image" 
            src="~/assets/mapita.png"
            alt="Mapita"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  // Opciones y lógica del componente
}
</script>

<style scoped>
.component-background {
  background-color: #87BFD7;
  min-height: 100vh;
}

.map-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
}

/* Ajusta el ancho máximo del contenedor para hacerlo más ancho en pantallas grandes */
.v-container {
  max-width: 1400px; /* Ajusta este valor según tus necesidades */
}
</style>
