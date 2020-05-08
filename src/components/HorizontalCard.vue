<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  margin: auto;
  margin-bottom: 30px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.outerBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.innerBox {
  padding: 10px 30px;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 30%;
}

.vBar {
  border-left: 1px solid LightGrey;
  min-height: 60px;
}

* {
  box-sizing: border-box;
}

</style>

<template>
    <div class="card">
	<div class="outerBox">
		<div class="innerBox">
			<p>{{ leftText }}</p> 
		</div>
		<div class="vBar"></div>
		<div class="innerBox">
			<p>{{ rightText }}</p> 
		</div>
	</div>
    </div>
</template>

<script>
	export default {
		props: ['leftText', 'rightText'],
		data: function () {
			return {
			}
		}
	}
</script>
