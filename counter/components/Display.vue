<template>
  <div>
  	<h3>Count is {{counterValue}}</h3>
  </div>
</template>

<script>
import {getCount} from '../stores/getters'
export default {
	vuex:{
		getters:{
			counterValue:getCount
		}
	}
}
</script>

<style>
	.componenta{
		background-color: red;
	}
</style>