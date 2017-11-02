<template>
	<div class="page"  style="width:100%;">
		<div class="card">
			<!--最受关注图书｜虚构类 开始-->
			<section id="book_fiction">
				<header>
					<h2>最受关注图书｜虚构类</h2>
					<a href="/book/hotfiction">更多</a>
				</header>
				<!-- 最受关注图书｜虚构类  开始 -->
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
				<!-- 最受关注图书｜虚构类  结束 -->
			</section>
			<!--最受关注图书｜虚构类 结束-->
			
			<!--最受关注图书｜非虚构类 开始-->
			<section id="book_nonfiction">
				<header>
					<h2>最受关注图书｜非虚构类</h2>
					<a href="/book/hotnonfiction">更多</a>
				</header>
				<!-- 最受关注图书｜虚构类  开始 -->
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
				<!-- 最受关注图书｜虚构类  结束 -->
			</section>
			<!--最受关注图书｜非虚构类 结束-->
			
			<!--豆瓣书店 开始-->
			<section id="market_product_book_mobile_web">
				<div id="book_header">
					<header>
						<h2>豆瓣书店</h2>
						<a href="https://market.douban.com/book/?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">更多</a>
					</header>
					<a href="https://market.douban.com/book/moviemap?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web" class="promBook">
						<img class="cover" src="../../../static/imgs/2206.jpg" alt="">
						<div class="content">
							<div class="title">
								<span class="price">¥ 299</span>
								<p class="name">世界电影地图 三部曲</p>
							</div>
							<p class="infoWithoutReviewer">1000部电影的时空旅行</p>
						</div>
					</a>
				</div>
				<div class="section-content">
					<ul class="row items">
						<li class="item item__market_product_book">
							<a href="https://market.douban.com/book/liaoyimei?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">
								<div class="item-poster" style="background-image: url(static/imgs/2029.jpg)"></div>
								<span class="item-title">悲观主义三部曲</span>
								<div class="item-rating">
									<div class="rank">
										<span>¥ 131.2</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__market_product_book">
							<a href="https://market.douban.com/book/liaoyimei?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">
								<div class="item-poster" style="background-image: url(static/imgs/2093.jpg)"></div>
								<span class="item-title">梳毛、八卦及语言的进化</span>
								<div class="item-rating">
									<div class="rank">
										<span>¥ 45</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__market_product_book">
							<a href="https://market.douban.com/book/liaoyimei?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">
								<div class="item-poster" style="background-image: url(static/imgs/1974.jpg)"></div>
								<span class="item-title">自由与爱之地</span>
								<div class="item-rating">
									<div class="rank">
										<span>¥ 39.2</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__market_product_book">
							<a href="https://market.douban.com/book/liaoyimei?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">
								<div class="item-poster" style="background-image: url(static/imgs/1869.jpg)"></div>
								<span class="item-title">未知大学</span>
								<div class="item-rating">
									<div class="rank">
										<span>¥ 134.4</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__market_product_book">
							<a href="https://market.douban.com/book/liaoyimei?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">
								<div class="item-poster" style="background-image: url(static/imgs/1796.jpg)"></div>
								<span class="item-title">奈良手记</span>
								<div class="item-rating">
									<div class="rank">
										<span>¥ 54.4</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__market_product_book">
							<a href="https://market.douban.com/book/liaoyimei?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">
								<div class="item-poster" style="background-image: url(static/imgs/1761.jpg)"></div>
								<span class="item-title">不思议图书馆</span>
								<div class="item-rating">
									<div class="rank">
										<span>¥ 38.4</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__market_product_book">
							<a href="https://market.douban.com/book/liaoyimei?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">
								<div class="item-poster" style="background-image: url(static/imgs/1721.jpg)"></div>
								<span class="item-title">如花在野</span>
								<div class="item-rating">
									<div class="rank">
										<span>¥ 54.4</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__market_product_book">
							<a href="https://market.douban.com/book/liaoyimei?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">
								<div class="item-poster" style="background-image: url(static/imgs/1689.jpg)"></div>
								<span class="item-title">与火同行</span>
								<div class="item-rating">
									<div class="rank">
										<span>¥ 39.8</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__market_product_book">
							<a href="https://market.douban.com/book/liaoyimei?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">
								<div class="item-poster" style="background-image: url(static/imgs/1679.jpg)"></div>
								<span class="item-title">被仰望与被遗忘的</span>
								<div class="item-rating">
									<div class="rank">
										<span>¥ 52</span>
									</div>
								</div>
							</a>
						</li>
						<li class="item item__market_product_book">
							<a href="https://market.douban.com/book/liaoyimei?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=mobile_web">
								<div class="item-poster" style="background-image: url(static/imgs/1611.jpg)"></div>
								<span class="item-title">百鬼夜行 阳</span>
								<div class="item-rating">
									<div class="rank">
										<span>¥ 39.2</span>
									</div>
								</div>
							</a>
						</li>	
					</ul>
				</div>
			</section>
			<!--豆瓣书店 结束-->
			
			<!-- 发现好图书 开始 -->
			<section class="interests">
				<header>
					<h2>发现好图书</h2>
					<div class="section-content">
						<ul>
							<li style="border-color: #FFC46C;">
							    <a href="https://m.douban.com/doulist/10372/" style="color:#FFC46C"> 
							    	小波看书
							    </a>
							</li>
							<li style="border-color: #4F9DED;">
								<a href="https://m.douban.com/doulist/105583/" style="color:#4F9DED">
									村上春树周边
								</a>
							</li>	
							<li style="border-color: #2384E8;">
								<a href="https://m.douban.com/doulist/99294/" style="color:#2384E8">
									我凭名字认定了你
								</a>
							</li>
							<li style="border-color: #42BD56;">
								<a href="https://m.douban.com/doulist/35573/" style="color:#42BD56">
									不可饶恕的女人们
								</a>
							</li>
							<li class="line"></li>
							<li style="border-color: #FFAC2D;">
								<a href="https://m.douban.com/doulist/38088147/" style="color:#FFAC2D">
									爱欲书
								</a>
							</li>
							<li style="border-color: #CC3344;">
								<a href="https://m.douban.com/doulist/645579/" style="color:#CC3344">
									他们还写侦探小说
								</a>
							</li>
							<li style="border-color: #3BA94D;">
								<a href="https://m.douban.com/doulist/192653/" style="color:#3BA94D">
									人生识字始忧患
								</a>
							</li>
							<li style="border-color: #FF4055;">
								<a href="https://m.douban.com/doulist/89925/" style="color:#FF4055">
									詩歌書店
								</a>
							</li>
						</ul>
					</div>
				</header>
			</section>
			<!-- 发现好图书 结束 -->
			
			<!-- 分类浏览 开始 -->
			<section class="types">
				<header>
					<h2>分类浏览</h2>
				</header>
				<div class="section-content">
					<a name="cate"></a>
					<ul class="type-list">
						<li>
							<a href="/book/novel">
								小说
								<span></span>
							</a>
						</li>
						<li>
							<a href="/book/love">
								爱情
								<span></span>
							</a>
						</li>
						<li>
							<a href="/book/history">
								历史
								<span></span>
							</a>
						</li>

						<li>
							<a href="/book/foreign">
								外国文学
								<span></span>
							</a>
						</li>
						<li>
							<a href="/book/youth">
								青春
								<span></span>
							</a>
						</li>
						<li>
							<a href="/book/motivation">
								励志
								<span></span>
							</a>
						</li>
						<li>
							<a href="/book/essay">
								随笔
								<span></span>
							</a>
						</li>
						<li>
							<a href="/book/bio">
								传记
								<span></span>
							</a>
						</li>
						<li>
							<a href="/book/detective">
								推理
								<span></span>
							</a>
						</li>
						<li>
							<a href="/book/travel">
								旅行
								<span></span>
							</a>
						</li>
						<li>
							<a href="/book/fantasy">
								奇幻
								<span></span>
							</a>
						</li>

						<li>
							<a href="/book/business">
								经管
								<span></span>
							</a>
						</li>
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
        console.log(res1)
        console.log(res2)
      }))
    }
  }
}
</script>
<style>
	a{
		color:#42bd56;
	};
	/*最受关注图书｜虚构类  开始*/
	section{
		margin: 0;
	    overflow: hidden;
	    background-color: #fff;
	}
	/*section:first-child{
		padding-top: 2.35rem;
	}*/
	section header{
		padding: 0 1.12rem;
	}
	section header a{
		float: right;
	    font-size: .9rem;
	    line-height: 1.5rem;
	}
	.clearfix:after, .card section>header:after{
		content: '';
	    clear: both;
	    display: block;
	}
	section .section-content{
		margin-bottom: -1.12rem;
	}
	.row{
		/*border-bottom: 0.05rem solid #f2f2f2;*/
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
	/*最受关注图书｜虚构类 结束*/
	
	/*豆瓣 书店 开始*/
	.promBook{
		display: block;
	    overflow: hidden;
	    margin: 0.75rem 1.12rem 0px;
	}
	.promBook .cover{
		float: left;
	    width: 5rem;
	    margin-right: 0.75rem;
	}
	.promBook .content{
		overflow: hidden;
	}
	.promBook .title{
		margin: 0.5rem 0;
	}
	.promBook .price{
		float: right;
	    color: #E76648;
	    font-size: 0.8rem;
	    line-height: 1.1rem;
	}
	.promBook .name{
		font-size: 0.95rem;
	    color: #494949;
	    margin-right: 2rem;
	    max-width: 100%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-wrap: normal;
	}
	.promBook .info, .promBook .infoWithReviewer, .promBook .infoWithoutReviewer, .promBook .reviewer{
		font-size: 0.65rem;
	    font-weight: 300;
	    line-height: 1.5;
	    color: #9B9B9B;
	}
	/*豆瓣 书店 结束*/
	
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
	    margin-bottom: 30px;
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
		font-size: 24px;
		font-weight: normal;
		line-height: 28px;
	}
	.download-app .info+a{
		display: block;
	}
	/* 底部下载App客户端 结束 */

</style>