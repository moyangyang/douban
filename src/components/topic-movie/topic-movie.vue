<template>
	<div class="page" style="width:100%;">
		<div class="card">
			<!-- 热映开始 -->
			<section id="movie_showings">
				<!-- 电影 头部开始 -->
				<header>
					<h2>影院热映</h2>
					<a href="/movie/nowintheater?loc_id=108288">更多</a>
				</header>
				<!-- 电影 头部结束 -->

				<!-- 热映部分 开始 -->
				<div class="section-content">
					<ul class="row items">
						<li class="item item__movie" v-for="item in navGreens">
							<a href="/movie/subject/22266012?refer=home">
								<div class="item-poster">
									<img style="width: 5rem;height:7.14rem;display: block;" :src=" item.images.small " alt="" />
								</div>
								<span class="item-title">{{ item.title }}</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" data-rating="3.2">
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-gray"></span>
											<span class="rating-star rating-star-small-gray"></span>
										</span><br />
										<span>{{ item.rating.average === 0 ? '暂无评分' : item.rating.average }}</span>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<!-- 热映部分 结束 -->
			</section>
			<!-- 热映结束 -->

			<!-- 免费在线观影 开始 -->
			<section id="movie_showings">
				<!-- 电影 头部开始 -->
				<header>
					<h2>免费在线观影</h2>
					<a href="/movie/nowintheater?loc_id=108288">更多</a>
				</header>
				<!-- 电影 头部结束 -->

				<!-- 热映部分 开始 -->
				<div class="section-content">
					<ul class="row items">
						<li class="item item__movie">
							<a href="/movie/subject/22266012?refer=home">
								<div class="item-poster" style="background-image:url(static/imgs/p2501769525.jpg)"></div>
								<span class="item-title">全球风暴</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" data-rating="3.2">
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-gray"></span>
											<span class="rating-star rating-star-small-gray"></span>
										</span>
										<span>6.4</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__movie">
							<a href="/movie/subject/22266012?refer=home">
								<div class="item-poster" style="background-image:url(static/imgs/p2501484061.jpg)"></div>
								<span class="item-title">银翼杀手2049</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" data-rating="3.2">
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-gray"></span>
										</span>
										<span>8.2</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__movie">
							<a href="/movie/subject/22266012?refer=home">
								<div class="item-poster" style="background-image:url(static/imgs/p2499790488.jpg)"></div>
								<span class="item-title">常在你左右</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" data-rating="3.2">
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-gray"></span>
											<span class="rating-star rating-star-small-gray"></span>
											<span class="rating-star rating-star-small-gray"></span>
										</span>
										<span>5.1</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__movie">
							<a href="/movie/subject/22266012?refer=home">
								<div class="item-poster" style="background-image:url(static/imgs/p2499585722.jpg)"></div>
								<span class="item-title">因为爱情</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" data-rating="3.2">
											<!-- <span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-gray"></span>
											<span class="rating-star rating-star-small-gray"></span> -->
										</span>
										<span>暂无评分</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__movie">
							<a href="/movie/subject/22266012?refer=home">
								<div class="item-poster" style="background-image:url(static/imgs/p2499792043.jpg)"></div>
								<span class="item-title">王牌特工2：黄金圈</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" data-rating="3.2">
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-gray"></span>
										</span>
										<span>7.3</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__movie">
							<a href="/movie/subject/22266012?refer=home">
								<div class="item-poster" style="background-image:url(static/imgs/p2499793218.jpg)"></div>
								<span class="item-title">羞羞的铁拳</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" data-rating="3.2">
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-gray"></span>
										</span>
										<span>7.3</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__movie">
							<a href="/movie/subject/22266012?refer=home">
								<div class="item-poster" style="background-image:url(static/imgs/p2500451074.jpg)"></div>
								<span class="item-title">雷神3：诸神黄昏</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" data-rating="3.2">
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-gray"></span>
										</span>
										<span>8.2</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__movie">
							<a href="/movie/subject/22266012?refer=home">
								<div class="item-poster" style="background-image:url(static/imgs/p2501863104.jpg)"></div>
								<span class="item-title">天才枪手</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" data-rating="3.2">
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-gray"></span>
										</span>
										<span>8.3</span>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<!-- 热映部分 结束 -->
			</section>
			<!-- 免费在线观影 结束 -->

			<!-- 新片速递 开始 -->
			<section id="movie_showings">
				<!-- 电影 头部开始 -->
				<header>
					<h2>新片速递</h2>
					<a href="/movie/nowintheater?loc_id=108288">更多</a>
				</header>
				<!-- 电影 头部结束 -->

				<!-- 热映部分 开始 -->
				<div class="section-content">
					<ul class="row items">
            <li class="item item__movie" v-for="item in newMovie">
							<a href="/movie/subject/22266012?refer=home">
								<div class="item-poster">
									<img style="width: 5rem;height:7.14rem;display: block;" :src=" item.images.small " alt="" />
								</div>
								<span class="item-title">{{ item.title }}</span>
								<div class="item-rating">
									<div class="rank">
										<span class="rating-stars" data-rating="3.2">
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-full"></span>
											<span class="rating-star rating-star-small-gray"></span>
											<span class="rating-star rating-star-small-gray"></span>
										</span><br />
										<span>{{ item.rating.average === 0 ? '暂无评分' : item.rating.average }}</span>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<!-- 热映部分 结束 -->
			</section>
			<!-- 新片速递 结束 -->

			<!-- 发现好电影 开始 -->
			<section class="interests">
				<header>
					<h2>发现好电影</h2>
					<div class="section-content">
						<ul>
							<li style="border-color:#cc3344">
							    <a href="https://m.douban.com/doulist/968362/" style="color:#cc3344"> 
							    	同时入选IMDB250和豆瓣电影250的电影
							    </a>
							</li>
							<li style="border-color:#ffac2d">
								<a href="https://m.douban.com/doulist/16002/" style="color:#ffac2d">
									带你进入不正常的世界
								</a>
							</li>	
							<li style="border-color:#42bd56">
								<a href="https://m.douban.com/doulist/190343/" style="color:#42bd56">
									用电【影】来祭奠逝去的岁月
								</a>
							</li>
							<li style="border-color:#4f9ded">
								<a href="https://m.douban.com/doulist/1125971/" style="color:#4f9ded">
									女孩们的故事【电影】
								</a>
							</li>
							<li class="line"></li>
							<li style="border-color:#42bd56">
								<a href="https://www.douban.com/doubanapp/dispatch?from=mdouban&download=1&model=B&copy=1&page=movie&channel=card_find_movie&uri=%2Fmovie%2Ftag" style="color:#42bd56">
									使用 App 【找电影】功能
								</a>
							</li>
							<li style="border-color:#2384e8">
								<a href="https://m.douban.com/doulist/4253902/" style="color:#2384e8">
									科幻是未来的钥匙——科幻启示录【科幻题材】
								</a>
							</li>
							<li style="border-color:#42bd56">
								<a href="https://m.douban.com/doulist/121326/" style="color:#42bd56">
									美国生活面面观
								</a>
							</li>
							<li style="border-color:#3ba94d">
								<a href="https://m.douban.com/doulist/37479562/" style="color:#3ba94d">
									2015终极期待
								</a>
							</li>
							<li style="border-color:#ffc46c">
								<a href="https://m.douban.com/doulist/458087/" style="color:#ffc46c">
									经典韩国电影——收集100部
								</a>
							</li>
						</ul>
					</div>
				</header>
			</section>
			<!-- 发现好电影 结束 -->

			<!-- 分类浏览 开始 -->
			<section class="types">
				<header>
					<h2>分类浏览</h2>
				</header>
				<div class="section-content">
					<a name="cate"></a>
					<ul class="type-list">
						<li>
							<a href="/movie/classic">
								经典
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/underrated">
								冷门佳片
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/doubantop">
								豆瓣高分
								<span></span>
							</a>
						</li>

						<li>
							<a href="/movie/action">
								动作
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/comedy">
								喜剧
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/love">
								爱情
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/mystery">
								悬疑
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/horror">
								恐怖
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/scifi">
								科幻
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/sweet">
								治愈
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/artfilm">
								文艺
								<span></span>
							</a>
						</li>

						<li>
							<a href="/movie/youth">
								成长
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/animation">
								动画
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/chinese">
								华语
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/western">
								欧美
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/korean">
								韩国
								<span></span>
							</a>
						</li>
						<li>
							<a href="/movie/japanese">
								日本
								<span></span>
							</a>
						</li>
						<li></li>
					</ul>
				</div>
			</section>
			<!-- 分类浏览 结束 -->

			<!-- 底部下载App客户端 开始 -->
			<div class="download-app">
				<div class="info">
					<img src="../../../static/imgs/douban-app-logo.png" alt="">
					<div class="info-content">
						<strong>豆瓣</strong>
						<div>我们的精神角落</div>
					</div>
				</div>
				<a href="https://www.douban.com/doubanapp/card/log?category=movie_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1">
					去 App Store 免费下载 iOS 客户端
				</a>
				
			</div>
			<!-- 底部下载App客户端 结束 -->

		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	
export default {
  data () {
    return {
      navGreens: [],
      newMovie: []
    }
  },
  created () {
    this._getData()
  },
  methods: {
    returnback () {
      this.$router.back()
    },
    _getNowMovie () {
      let url = 'https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/in_theaters?count=10'
      return axios.get(url)
    },
    // 自定义的规则
    _getNew () {
      // 请求的url地址
      let url = 'https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/coming_soon?count=10'
      return axios.get(url)
    },
    _getData () {
      axios.all([this._getNowMovie(), this._getNew()]).then(axios.spread((res1, res2) => {
        this.navGreens = res1.data.subjects
        this.newMovie = res2.data.subjects
//      console.log(res1)
//      console.log(res2)
      }))
    }
  }
}
</script>
<style>
	h2{
		font-weight: normal;
	}
	a{
		color:#42bd56;
	}
	/* 电影 头部 开始*/
	.page{
		padding-top:2.35rem;
	    max-width: 32.5rem;
	    background: #fff;
	    margin: 0 auto;
	    /*overflow-x: hidden;*/
	}
	.card{
		margin:0;
	}
	section{
		margin: 0;
	    overflow: hidden;
	    background-color: #fff;
	}
	section:first-child{
		padding-top: 0.5rem;
	}
	section header{
		padding:0 1.12rem;
	}
	section h2{
		display: inline-block;
	    min-width: 4em;
	    margin-bottom: 0;
	    font-size: 0.9rem;
	    color: #111;
	    padding-left: 0;
	    padding-bottom: 0;
	    font-size: 1.06rem;
	}
	section header a{
		float: right;
		font-size: .9rem;
		line-height: 1.5rem;
		color:#42bd56;
	}
	.clearfix:after, .card section>header:after{
	    content: '';
	    clear: both;
	    display: block;
	}
	/* 电影 头部 结束*/

	/* 热映部分 开始*/
	section .section-content{
		margin-bottom: -1.12rem;
	}
	.row{
		border-bottom: 0.05rem solid #f2f2f2;
		padding:0.75rem 0 2.15rem 0;
	}
	.items{
		font-size: 0;
	    white-space: nowrap;
	    overflow-x: auto;
	    -webkit-overflow-scrolling: touch;
	}
	.item{
		display: inline-block;
	    vertical-align: top;
	    width: 5rem;
	    text-align: center;
	    margin-left: 0.48rem;
	}
	.item:first-child{
		margin-left: 1.12rem;
	}
	.items>*{
		font-size: .94rem;
		white-space: normal;
	}
	.item a{
		color:#111;
	}
	.item-poster{
	    width: 100%;
	    overflow: hidden;
	    background-size: cover;
	    background-position: center;
	}
	.item-poster:before{
		content: "";
	    float: left;
	    margin-top: 142.85714%;
	}
	.item:not(.item__celebrity) .item-title{
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.item__movie .item-title{
	    max-width: 100%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-wrap: normal;
	}
	.item-title{
		display: block;
	    margin-top: .6rem;
	    line-height: .94rem;
	}
	.item-rating{
	    color: #aaa;
	    line-height: .94rem;
	    margin-top: .3rem;
	    font-size: .72rem;
	}
	.rating-stars{
		display: inline-block;
    	vertical-align: middle;
	}
	.rating-stars .rating-star{
		display: inline-block;
	    margin-right: 0.05rem;
	    background-color: transparent;
	    background-repeat: no-repeat;
	}
	.rating-star-small-full{
		background-image:url(../../../static/imgs/x.png);
	}
	.rating-star-small-gray{
		background-image:url(../../../static/imgs/xg.png);
	}
	.rating-star-small-full, .rating-star-small-half, .rating-star-small-gray{
		width: 0.5rem;
	    height: 0.5rem;
	    background-size: 0.5rem 0.5rem;
	}
	/*热映部分 结束*/

	/*发现好电影 开始*/
	.interests ul{
		white-space: nowrap;
	    overflow-x: auto;
	    padding: 0.75rem 0.75rem 2.15rem 0.75rem;
	    font-size: 0;
	    margin-left: -0.25rem;
	    -webkit-overflow-scrolling: touch;
	}
	.interests li{
	    margin: 0 0 0.4rem 0.4rem;
	    font-size: .94rem;
	    display: inline-block;
	    border-radius: .25rem;
	    border: solid 0.05rem;
	    vertical-align: middle;
	}
	.interests a{
	    height: 2.5rem;
	    line-height: 2.5rem;
	    padding: 0 1.55rem;
	    letter-spacing: .1em;
	    overflow: auto;
	    display: block;
	    text-align: center;
	}
	.interests li.line{
		width: 100%;
	    display: block;
	    height: 0.05rem;
	    border: 0;
	    margin: 0;
	}
	/*发现好电影 结束*/

	/* 分类浏览 开始*/
	.types {
		margin-right:-1.25rem;
	}
	section h2{
		display: inline-block;
	    min-width: 4em;
	    margin-bottom: 0;
	    font-size: 0.9rem;
	    color: #111;
	    padding-left: 0;
	    padding-bottom: 0;
	    font-size: 1.06rem;
	}
	.types .section-content{
		margin-bottom: 0;
		margin-left: .94rem;
	}
	.type-list{
	    padding: 1.12rem 0 1.88rem;
	    color: #eee;
	    font-size: .9rem;
	    overflow: hidden;
	}
	.type-list li{
		width: 40.5%;
	    border-top: solid 0.05rem #eee;
	    border-right: solid 0.05rem #eee;
	    float: left;
	    padding-right: 1.12rem;
	    height: 2.64rem;
	    line-height: 2.64rem;
	}
	.type-list li:nth-child(even){
	    border-right: none;
    	padding-left: 1.12rem;
	}
	.type-list li a{
		color:#42bd56;
	}
	.type-list span{
		color: #ccc;
	    float: right;
	    font-weight: bold;
	    display: inline-block;
	    border-right: solid 0.05rem #ccc;
	    border-bottom: solid 0.05rem #ccc;
	    width: .5rem;
	    height: .5rem;
	    transform: rotate(-45deg);
	    margin-top: 1rem;
	}
	/*分类浏览 结束*/

	/* 底部下载App客户端 开始 */
	.download-app{
		padding: 0 0 1rem 0;
	    margin-top: 2.5rem;
	    margin-bottom: 1.5rem;
	    text-align: center;
	    font-size: 0.75rem;
	}
	.download-app .info{
		margin: 0 auto 0.75rem;
	    overflow: hidden;
	    text-align: left;
	    font-size: 0.7rem;
	    display: inline-block;
	    color: #111;
	    width:7.9rem;
	    height:2.4rem;
	}
	.download-app .info img{
		width: 2.4rem;
		height:2.4rem;
		float:left;
		margin-right: 0.6rem;
	}
	.download-app .info-content{
		overflow: hidden;
	}
	.download-app .info strong{
		font-size: 1.2rem;
		font-weight: normal;
		line-height: 1.4rem;
	}
	.download-app .info+a{
		display: block;
	}
	/* 底部下载App客户端 结束 */
</style>