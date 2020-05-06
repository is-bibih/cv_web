<template>
	<div class="forma">
	<h2>¿quieres dejar un mensaje?</h2>
	<p>hola, {{ nombre }}</p>
	<p>nombre:
	<input v-model="nombre" placeholder="ana pérez">
	</p>
	<p>teléfono:
	<input v-model="tel" placeholder="0123456789">
	</p>
	<p>correo:
	<input v-model="correo" placeholder="correo@correo.com">
	</p>
	<textarea v-model="mensaje" placeholder="¿cuál es el mensaje?"></textarea>
	<br><br>
	<button :disabled="hide" @click="hide = !hide">enviar</button>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				nombre: '',
				hide: false
			}
		},
	}
</script>
