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
  padding: 2px 16px;
  overflow: hidden;
  white-space: pre-wrap;
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
