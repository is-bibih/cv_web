<template>
	<div>
		<h2>estudios</h2>
		<horCard
			v-for="(item, index) in contenido"
			v-bind:key="index"
			v-bind:leftText="item.left"
			v-bind:rightText="item.right"
		></horCard>
	</div>
</template>

<script>
	import HorizontalCard from '../components/HorizontalCard.vue'
	
	export default {
		data: function () {
			return {
				contenido: [
					{ left: '2019 - 2023', right: 'Ingeniero Físico Industrial. Tecnológico de Monterrey.'},
					{ left: '2016 - 2019', right: 'Bachillerato Internacional con mención honorífica. Prepa Tec Campus Eugenio Garza Lagüera.'},
					{ left: '2013 - 2016', right: 'Secundaria. Colegio Bilingue Madison Campus Monterrey.'}
				]
			}
		},
		components: {
			'horCard': HorizontalCard
		}
	}
</script>
