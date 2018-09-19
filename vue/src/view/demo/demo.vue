<template>
	<div class="page">
		<div class="inpbox">
			<div class="inp">
			<span>请输入要生成的最小数字</span>
			 		<input type="tel" v-model="minNum">
			</div>
			<div class="inp">
				<span>请输入要生成的最大数字</span>
			 		<input type="tel" v-model="maxNum">
			</div>
			<div class="inp"><span>请输入要生成的题目条数</span>
			 		<input type="tel" v-model="maxList"></div>
		<span class="btn" @click="subFn">生成题目</span>
			 <span class="btn" @click="showAnswer=!showAnswer" v-text="showAnswer?'隐藏答案':'显示答案'"></span>
			
		</div>

		 <ul class="list" v-if="list.length>0">
		 	<li v-for="(item,index) in list">
		 	<span v-text="'第'+(index+1)+'题：'"></span>
				<span v-text="item.num1"></span>
				<span :class="'ysf'+item.ysf"></span>
				<span v-text="item.num2"></span>
				=
				<input type="text">
				<div class="answer" v-show="showAnswer">
					第{{(index+1)}}题:正确答案为：<span v-text="item.answer"></span>
				</div>
		 	</li>
		 </ul>
		 <!-- <img src="https://img.jianghu361.com/kakadai.jpg" crossorigin="anonymous" alt=""> -->
	  </div>
	</div>
</template>
<script>
	// import { trigger } from '@/assets/js/function.js'
	// console.log(trigger);
	import js from "./js/demo.js"
	export default js
</script>
<style scoped>
.btnbox,
.inpbox{
	overflow: hidden;
}
	.inp{
		display: block;
		width: 100%;
		max-width: 375px;
		margin: 20px 10px;
		float: left;
	}
	.inp input{
		display: inline-block;
		width: 80px;
		border: 1px solid #ccc;
		text-align: center;
	}
	.btn{
		background: #abcdef;
		color: #fff;
		padding: 10px;
		margin: 10px auto; 
		display: block;
		width: 100px;
		max-width: 375px;
		float: left;
		margin-left:20px; 
	}
	.ysf1,
	.ysf2,
	.ysf3,
	.ysf4
	{
		display: inline-block;
		width: 10px;
		height: 10px;
		background-size: 10px 10px;
		background-repeat: no-repeat;
		background-position: center center;
	}
	.ysf1{
		background-image: url('./imgs/1.png');
	}
	.ysf2{
		background-image: url('./imgs/2.png');
	}
	.ysf3{
		background-image: url('./imgs/3.png');
	}
	.ysf4{
		background-image: url('./imgs/4.png');
	}
	.list{
		display: block;
		width: 100%;
		padding-bottom: 40px;
		overflow: hidden;
	}
	.list li{
		display: block;
		width: 100%;
		max-width: 375px;
		float: left;
		/*height: 44px;*/
		line-height: 44px;
	}
	.list input{
		width: 60px;
		border: 1px solid #ccc;
	}
	.list li span{
		display: inline-block;
		min-width: 30px;
	}
	.answer{
		text-align: center;
		color: #f00;
	}
</style>