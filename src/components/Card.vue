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

.container {
  padding: 2px 30px;
  max-height: 100%;
  height: 100%;
  overflow: hidden;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
}

.container > * {
  /* these are the flex items */
  flex: 1;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

* {
  box-sizing: border-box;
}

</style>

<template>
    <div class="card">
	<div class="clearfix">
		<img src="http://placekitten.com/g/200/200" style="float:left;width=100px;height=100px">
		<div class="container">
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
