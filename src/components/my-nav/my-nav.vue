<template>
	<div id="nav">
		<ul>
			<li><router-link to="/all" style="color:#00b600;font-size:24px;font-weight:bold">豆瓣</router-link></li>
			<li><router-link to="/movie" style="color:#2384E8;margin-left:3.6rem">电影</router-link></li>
			<li><router-link to="/book" style="color:#9F7860">图书</router-link></li>
			<li><router-link to="/status" style="color:#E4A813">广播</router-link></li>
			<li><router-link to="/group" style="color:#2AB8CC">小组</router-link></li>
			<li><router-link to="/loading"><span><img src="../../assets/imgs/xiazai.png" alt=""></span></router-link></li>
		</ul>
		
	</div>
</template>
<script>
	
</script>
<style scoped>
	#nav{
		width:100%;
		height:2.35rem;
		line-height:2.35rem;
		background: #fff;
		border-bottom: 0.05rem solid #F3F3F3;
		position: fixed;
		z-index: 99;
		top:0;
	}
	#nav ul li{
		float: left;
		padding:0 0.5rem;
		text-align: center;
	}
	#nav ul li a{
		font-size:0.75rem;
	}
	
	#nav ul li span>img{
		width:1.22rem;
		height:0.91rem;
		margin-top:1rem;
	}
</style>