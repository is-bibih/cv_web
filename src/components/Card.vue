<style>
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
  align-items: center;
  justify-content: space-between;
}

.innerBox {
  padding: 2px 30px;
  overflow: hidden;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}

* {
  box-sizing: border-box;
}

</style>

<template>
    <div class="card">
	<div class="outerBox">
		<img src="http://placekitten.com/g/200/200">
		<div class="innerBox">
			<h4><b>{{ title }}</b></h4> 
			<p>{{ text }}</p> 
		</div>
	</div>
    </div>
</template>

<script>
	export default {
		props: ['text', 'title'],
		data: function () {
			return {
			}
		}
	}
</script>
