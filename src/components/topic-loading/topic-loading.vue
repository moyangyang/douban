<template>
	<div class="TalionNav">
		<header class="TalionNav is-active">
			<div class="TalionNav-secondary">
				<router-link to="/all"><a href="#" class="close-nav">关闭</a></router-link>
				<form action="/search" method="GET">
					<div>
						<input name="query" type="search">
					</div>
				</form>
				<ul>
					<li>
						<div>
							<a href="/movie" target="_blank">
								<strong style="color:rgb(35,132,232)">电影</strong>
								<span>影院热映</span>
							</a>
							<a href="https://douban.com/location" target>
								<strong style="color:rgb(230,70,126)">同城</strong>
								<span>周末活动</span>
							</a>
							<a href="https://read.douban.com" target>
								<strong style="color:rgb(159,120,96)">阅读</strong>
								<span>电子书</span>
							</a>
							<a href="https://dongxi.douban.com/?dcs=mobile-anonymous-home&dcm=douban" target>
								<strong style="color:rgb(225,100,77)">东西</strong>
								<span>心爱之物</span>
							</a>
						</div>
					</li>
					<li>
						<div>
							<a href="/tv" target="_blank">
								<strong style="color:rgb(122,106,219)">电视</strong>
								<span>正在热播</span>
							</a>
							<a href="/group" target="_blank">
								<strong style="color:rgb(42,184,204)">小组</strong>
								<span>志趣相投</span>
							</a>
							<a href="/game" target="_blank">
								<strong style="color:rgb(87,116,197)">游戏</strong>
								<span>虚拟世界</span>
							</a>
							<a href="https://douban.fm" target>
								<strong style="color:rgb(64,207,169)">FM</strong>
								<span>红心歌单</span>
							</a>
						</div>
					</li>
					<li>
						<div>
							<a href="/book" target="_blank">
								<strong style="color:rgb(159,120,96)">图书</strong>
								<span>畅销排行</span>
							</a>
							<a href="/music" target="_blank">
								<strong style="color:rgb(244,143,46)">音乐</strong>
								<span>新碟榜</span>
							</a>
							<a href="/mobileapp" target="_blank">
								<strong style="color:rgb(89,108,221)">应用</strong>
								<span>玩手机</span>
							</a>
							<a href="https://market.douban.com/?utm_campaign=mobile_web_douban_nav&utm_source=douban&utm_medium=mobile_web" target>
								<strong style="color:rgb(66,189,86)">市集</strong>
								<span>购买原创</span>
							</a>
						</div>
					</li>
				</ul>
				<div class="navBottom">
					<div class="nav-item">
						<a class="toReg" href="http://accounts.douban.com/register?redir=https://m.douban.com/">注册账号</a>
						<a class="toLogin" href="http://accounts.douban.com/login?redir=https://m.douban.com/">登录豆瓣</a>
					</div>
					<div class="nav-item">
						<a class="toPC" href="/to_pc/?url=https%3A%2F%2Fm.douban.com%2F">使用桌面版</a>
						<a class="toApp">使用豆瓣App</a>
					</div>
				</div>
				<!-- <div class="TalionNav-layer"></div> -->
			</div>
			
		</header>	
	</div>
</template>
<script>
</script>
<style>
	.TalionNav{
		/* position: fixed; */
	    left: 0;
	    right: 0;
	    top: 0;
	    z-index: 999;
	    background: #fff;
	}
	.TalionNav.is-active{
		height: 100%;
	    position: absolute;
	    bottom: 0;
	    -webkit-transform: translateZ(0);
	    transform: translateZ(0);
	}
	.TalionNav-secondary{
		display: none;
	    position: absolute;
	    left: 0;
	    right: 0;
	    top: 0;
	    bottom: 0;
	    z-index: 999;
	    background: #fff;
	}
	.TalionNav.is-active .TalionNav-secondary{
		display: initial;
	}
	.TalionNav-secondary a.close-nav{
		position: absolute;
	    top: 20px;
	    left: 18px;
	    color: #42bd56;
	    font-size: 16px;
	}
	.TalionNav a{
		text-decoration: none;
	}
	.TalionNav-secondary form{
		border-bottom: 1px solid #f3f3f3;
    	padding: 15px 18px 15px 60px;
	}
	.TalionNav-secondary input[type=search]{
		box-sizing: border-box;
	    -webkit-appearance: none;
	    border: 0;
	    background: url("../../assets/imgs/xz.png") no-repeat 50% #f3f3f3;
	    background-size: 17.33333px;
	    border-radius: 3px;
	    width: 100%;
	    height: 31px;
	    font-size: 14px;
	}
	.TalionNav-secondary ul{
		padding-top: 25px;
	    overflow: hidden;
	    display: -webkit-box;
	    display: flex;
	    justify-content: space-around;
	}
	.TalionNav-secondary li{
		width: 33.33%;
	}
	.TalionNav-secondary li div{
	    float: left;
	    position: relative;
	    left: 50%;
	    top: 0;
	}
	.TalionNav-secondary li a{
	    display: block;
	    text-align: center;
	    margin-bottom: 25px;
	    position: relative;
	    left: -50%;
	    top: 0
	}
	.TalionNav-secondary li strong{
	    display: block;
	    font-weight: 400;
	    font-size: 24px;
	    line-height: 28px;
	}
	.TalionNav-secondary li span{
		display: block;
	    color: #999;
	    height: 17px;
	    font-size: 12px;
	    letter-spacing: 1px;
	}
	.TalionNav-secondary .navBottom{
		width: 100%;
    	border-bottom: 1px solid #f3f3f3;
	}
	.TalionNav-secondary .navBottom .nav-item{
		border-top: 1px solid #f3f3f3;
    	padding: 13px 0;
	}
	.TalionNav-secondary .navBottom .nav-item a:first-child{
		border-right: 1px solid #e5e5e5;
	}
	.TalionNav-secondary .navBottom .nav-item a{
		width: 49%;
	    display: inline-block;
	    box-sizing: border-box;
	}
	.TalionNav-secondary .navBottom a{
		margin: 0 auto;
	    text-align: center;
	    text-decoration: none;
	    font-size: 15px;
	    color: #42bd56;
	}
	.TalionNav-layer{
	    background: rgba(0,0,0,0.5);
	    position: absolute;
	    top: 0;
	    left: 0;
	    height: 100%;
	    width: 100%;
	}
</style>