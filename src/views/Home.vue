<template>
	<div>
		<h2>acerca de mí</h2>
		<card
			v-for="(item, index) in contenido"
			v-bind:key="index"
			v-bind:title="item.titulo"
			v-bind:text="item.texto"
		></card>
	</div>
</template>

<script>
	import Card from '../components/Card.vue'
	
	export default {
		data: function () {
			return {
				contenido: [
					{ titulo: 'contacto', texto: `teléfono: 1234567890\n\ncorreo: correo@correo.com`},
					{ titulo: '', texto: `estoy estudiando ingeniero físico industrial en el tec de monterrey`},
					{ titulo: 'mis intereses', texto: `investigación científica en física\n\nproyectos de fuente abierta y linux\n\ninteligencia artificial`}
				]
			}
		},
		components: {
			'card': Card
		}
	}
</script>
