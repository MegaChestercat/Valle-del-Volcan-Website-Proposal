<template>
    <div class="bg">
        <p class="text-center text-h3 font-weight-bold my-10">{{ $t('Contact1') }}</p>
        <div class="d-flex justify-space-around">
            <div class="d-block">
                <v-card width="600"class=" my-8 elevation-5 mb-4">
                    <v-img
                    height="300px"
                    src="~/assets/mapita.png"
                    alt="Mapa Ubicación Purificadora"
                    ></v-img>
                    <v-card-title class="font-weight-bold">
                    {{ $t('AddressT1') }}
                    </v-card-title>
                    <v-card-text class="size">
                        {{ $t('AddressT2') }}
                    <br>
                        {{ $t('Address1') }}
                    <br>
                    {{ $t('Address2') }}
                    
                    </v-card-text>
                </v-card>
            </div>
            <div class="d-flex justify-center">
                <v-card width="400"  class="rounded my-8" color="rgba(255, 255, 255, 0.8)">
                    <form class="my-7" @submit.prevent="submit">
                        <v-text-field v-model="email.value.value" class="mx-7" label="Correo Electrónico / Email" variant="solo"></v-text-field>
                        <v-text-field v-model="name.value.value" class="mx-7" label="Full Name / Nombre Completo" variant="solo"></v-text-field>
                        <v-text-field v-model="asunto.value.value" class="mx-7" label="Subject / Asunto" variant="solo"></v-text-field>
                        <v-textarea v-model="mensaje.value.value" class="mx-7" label="Message / Mensaje" variant="solo" no-resize></v-textarea>
                        <div class="d-flex justify-center">
                            <v-btn type="submit">
                                <p>{{ $t('Contact6') }}</p>
                            </v-btn>
                        </div>
                    </form>
                </v-card>
            </div>
        </div>
        <v-sheet color="#3F6677" height="150" width="100%" class="d-flex justify-center">
            
            <div class="d-block">
                 <p class="text-h4 text-center mt-3">{{ $t('SocialMedia') }}</p>
                 <div class="d-flex ">
                    <NuxtLink class="d-flex"to="https://wa.me/+522215304660" style="text-decoration: none;" target="_blank">
                        <v-img class="ml-15 my-4" src="../assets/whatsapp.png"  width="30" height="30"></v-img>
                        <p class="text-left ml-3 mt-5 size" style="color: white;">+52 221 530 46 60</p>
                    </NuxtLink>
                    <v-img class="ml-15 my-4" src="../assets/facebook.png"  width="30" height="30"></v-img>
                    <p class="mt-5 ml-3 size">valle del volcán</p>
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
import { useField, useForm } from 'vee-validate'
import Swal from 'sweetalert2'

useHead({
  title: 'Valle del Volcán - Contacto'
})

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        email (value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
            return "No valid Email"
        }
    }

})

const email = useField('email')
const name = useField('name')
const asunto = useField('asunto')
const mensaje = useField('mensaje')

const submit = handleSubmit( async values => {
    Swal.fire({
        title: "Mensaje Enviado",
        text: "Se ha enviado tu mensaje a la empresa. En breve te contactaremos.",
        icon: "success"
    })
    const {data: db, error, status} = await useFetch('/api/email/', {
        method: 'POST',
        timeout: 15000,
        body: {
            name: name.value,
            email: email.value,
            asunto: asunto.value,
            mensaje: mensaje.value,
        }
    })
})

</script>
<style scoped>
.bg{
    background-color: #A8D5E9;
}
.size{
  font-size: 18px;
}
</style>