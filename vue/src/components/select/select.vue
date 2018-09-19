<template>
	<div class="page">
		<div @click="isShowOptions=!isShowOptions" class="showTitle">{{curTitle}}</div>
		<ul class="optionBox" v-show="isShowOptions">
			<li @click="checkOption(item)" v-for="(item,index) in list" class="option">{{item.name}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:"SELECT",
	//路由进入之前
		beforeRouteEnter (to, from, next) {
			next(vm=>{
				console.log(vm.name)
			}) 
		},
		components: {
	    },
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				name:"page",
				isShowOptions:false,
				curTitle:"请选择",
			}
		},
		mounted(){
			this.init()
		},
		methods:{
			init(){
				console.log(this.list)
			},
			checkOption(item){
				this.curTitle = item.name
				this.isShowOptions = false
				this.$emit("change",item)
			},
		}
	}
</script>
<style scoped>

	.optionBox li{
		display: block;
		width: 100%;
		height: 50px;
		line-height: 50px;
		box-sizing:border-box;
		padding: 0 30px;
	}
</style>