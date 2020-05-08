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
					{ left: '2019 - 2023', right: '<b>Ingeniero Físico Industrial.</b> Tecnológico de Monterrey.'},
					{ left: '2016 - 2019', right: '<b>Bachillerato Internacional con mención honorífica.</b> Prepa Tec Campus Eugenio Garza Lagüera.'},
					{ left: '2013 - 2016', right: '<b>Secundaria.</b> Colegio Bilingue Madison Campus Monterrey.'}
				]
			}
		},
		components: {
			'horCard': HorizontalCard
		}
	}
</script>
