<template>
	<div>
		<h2>conocimientos</h2>
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
					{ titulo: 'lenguajes (naturales)', texto: 'español:C2\ninglés: C2\nfrancés: B2\nalemán: B1'},
					{ titulo: 'programación', texto: 'python\njava\nmatlab\nbash\njs, html, css\ngoogle apps script\ncontrol de versiones con git\ninterfaz de línea de comandos unix'},
					{ titulo: 'edición de imágenes', texto: 'gimp (edición de imágenes de bitmap)\ninkscape (edición de imágenes de vectores)\nkrita (ilustración digital)'}
				]
			}
		},
		components: {
			'card': Card
		}
	}
</script>
