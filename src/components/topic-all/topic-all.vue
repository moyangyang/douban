<template>
  <div class="page">
    <div class="card">
    	<ul class="quick-nav">
    		<li>
    			<a href="/movie/nowintheater?loc_id=108288">影院热映</a>
    		</li>
    		<li>
    			<a href="/group/explore/livingaboard/">生活在别处</a>
    		</li>
    		<li>
    			<a id="hot-topics" href="https://m.douban.com/time/?dt_time_source=douban-msite_shortcut">豆瓣时间</a>
    		</li>
    		<li>
    			<a href="https://www.douban.com/doubanapp/app?channel=card_home&direct_dl=1">使用豆瓣App</a>
    		</li>
    	</ul>
    	<section id="recommend-feed">
    		<div data-reactroot>
    			<div class="feed-section">
    				<a class="feed-item" href="https://www.douban.com/biz/photograph/2017-autumn?source=lembas">
    					<div class="feed-content">
    						<div class="cover">
    							<div style="padding-top:100%"></div>
    						</div>
    						<h3>2017豆瓣秋季摄影大赛结果揭晓</h3>
    						<p>一叶知秋，这个换装的男孩让今年秋天充溢着童趣。</p>
    					</div>
    					<div class="author">
    						by&nbsp;
    						<span class="name">豆瓣</span>
    					</div>
    				</a>
    				<a class="feed-item" href="https://m.douban.com/note/642702113/">
    					<div class="feed-content">
    						<div class="cover" style="background: url('static/imgs/file1.jpg') center center / cover no-repeat rgb(250, 250, 250);">
    							<div style="padding-top:100%"></div>
    						</div>
    						<h3>今天就追这部年度最期待美剧，感受一口气爽翻的惊喜</h3>
    						<p>小11回归！《怪奇物语》第二季今日上线~</p>
    					</div>
    					<div class="author">
    						by&nbsp;
    						<span class="name">豆瓣电影</span>
    					</div>
    					<span class="feed-label">来自栏目 预告片精选</span>
    				</a>
    				<a class="feed-item" href="https://m.douban.com/page/22ntn5l">
    					<div class="feed-content">
    						<div class="cover" style="background: url('static/imgs/file2.jpg') center center / cover no-repeat rgb(250, 250, 250);">
    							<div style="padding-top:100%"></div>
    						</div>
    						<h3>最近阴气挺重的，出门要看这份“避鬼攻略”</h3>
    						<p>最近趁着故宫大展去了一趟紫禁城，晚上就做了一场缆车惊魂事件的噩梦</p>
    					</div>
    					<div class="author">
    						by&nbsp;
    						<span class="name">豆瓣同城</span>
    					</div>
    					<span class="feed-label">来自栏目 周末去哪儿</span>
    				</a>
    				<a class="feed-item" href="https://m.douban.com/page/vh4yc31">
    					<div class="feed-content">
    						<div class="cover" style="background: url('static/imgs/file3.jpg') center center / cover no-repeat rgb(250, 250, 250);">
    							<div style="padding-top:100%"></div>
    						</div>
    						<h3>广播精选｜梦见参加高考，教育局做活动</h3>
    						<p>我妈在唱吧之外又找到一个新爱好：傍晚出门去篮球场，顶着夕阳逆光余晖，放下买菜的袋子突然一个三步上篮……</p>
    					</div>
    					<div class="author">
    						by&nbsp;
    						<span class="name">豆瓣</span>
    					</div>
    					<span class="feed-label">来自栏目 广播精选</span>
    				</a>
    				<a class="feed-item" href="https://m.douban.com/note/642382788/">
    					<div class="feed-content">
    						<h3>再记我的语文老师</h3>
    						<p>我还在北京时，我突然接到了一个电话，那头传来的声音喊我的小名儿，我记了好一会儿才想起来他是谁，我...</p>
    					</div>
    					<div class="author">
    						by&nbsp;
    						<span class="name">骆瑞生</span>
    					</div>
    				</a>
    				<a class="feed-item" href="https://m.douban.com/photos/album/1653912324/">
    					<div class="feed-content">
    						<div class="photos">
    							<div class="main" style="background: url('static/imgs/p2502971788.jpg') center center / cover no-repeat rgb(250, 250, 250);">
    								<div></div>
    							</div>
    							<div class="aside">
    								<div class="aside-pic">
    									<div style="background: url('static/imgs/p2503013189.jpg') center center / cover no-repeat rgb(250, 250, 250);">
    										<div style="padding-top:100%"></div>
    									</div>
    								</div>
    								<div class="aside-pic">
    									<div style="background: url('static/imgs/p2503013108.jpg') center center / cover no-repeat rgb(250, 250, 250);">
    										<div style="padding-top:100%"></div>
    									</div>
    								</div>
    							</div>
    						</div>
    						
    					</div>
    					<h3>北疆掠影</h3>
    					<div class="author">
    						by&nbsp;
    						<span class="name">断線傀儡.dll</span>
    					</div>
    				</a>
    			</div>
    		</div>
    	</section>
    </div>
  </div>
</template>
<script>
  export default {
    created () {
      console.log('么么哒')
    }
  }
</script>
<style>
	.page{
		padding-top: 2.35rem;
	    max-width: 32.5rem;
	    background: #fff;
	    margin: 0 auto;
	    /*overflow-x: hidden;*/
	}
	.card{
		margin:0 0.9rem;
	}
	.quick-nav{
		overflow: hidden;
	  margin: 1rem 0 0 0;
	  /*padding-top: 6px;*/
	}
	.quick-nav>li{
		float: left;
	    width: 50%;
	    padding: 0.15rem;
	    box-sizing: border-box;
	    font-size: 0.75rem;
	}
	.quick-nav>li>a{
		background-color: #f6f6f6;
	    color: #494949;
	    display: block;
	    text-align: center;
	    line-height: 1rem;
	    padding: 0.6rem 0;
	    border-radius: 0.1rem;
	    max-width: 100%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-wrap: normal;
	}
	#recommend-feed{
		margin-right: -0.9rem;
	    margin-left: -0.9rem;
	    margin-top: 0.1rem;
	    min-height: 24rem;
	    color: #494949;
	    -webkit-text-size-adjust: 100%;
	}
	#recommend-feed .feed-item{
		display: block;
	    padding: 1.25rem 0.9rem 1.25rem 0;
	    margin-left: 0.9rem;
	    position: relative;
	    color: #494949;
	}
	#recommend-feed .feed-item ~ .feed-item::before{
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 0.05rem;
	    background: #e3e3e3;
	    -webkit-transform: scaleY(0.5);
	    content: '';
	    position: absolute;
	    -webkit-transform-origin: 0 bottom;
	}
	#recommend-feed .feed-content{
		overflow: hidden;
    	margin-bottom: 0.5rem;
	}
	#recommend-feed .feed-content .cover{
		width: 25.6%;
	    margin-left: 1.25rem;
	    float: right;
		position: relative;
	}
	#recommend-feed .feed-content .cover:nth-of-type(1){
		background: url('../../../static/imgs/file.jpg') center center / cover no-repeat rgb(250, 250, 250);
	}
	#recommend-feed .feed-content h3{
		text-align: justify;
	    font-size: 0.85rem;
	    font-weight: 500;
	    line-height: 1.41;
	    color: #494949;
	    margin-bottom: 0.3rem;
	}
	#recommend-feed .feed-content p{
	    overflow: hidden;
	    text-align: justify;
	    color: #aaa;
	    font-size: 0.6rem;
	    line-height: 1.5;
	    display: -webkit-box;
	    overflow: hidden;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 3;
	}
	#recommend-feed .feed-item .author{
		font-size: 0.6rem;
    	color: #ccc;
	}
	#recommend-feed .feed-item .feed-label{
	    position: absolute;
	    bottom: 1.25rem;
	    right: 0.9rem;
	    font-size: 0.6rem;
	    color: #ccc;
	}
	#recommend-feed .feed-content .photos{
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    margin-bottom: 0.5rem;
	}
	#recommend-feed .feed-content .photos .main{
		-webkit-box-flex: 3.2;
	    -webkit-flex: 3.2;
	    -ms-flex: 3.2;
	    flex: 3.2;
	    margin-right: 0.2rem;
	}
	#recommend-feed .feed-content .photos .aside{
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -webkit-flex-direction: column;
	    -ms-flex-direction: column;
	    flex-direction: column;
	}
	#recommend-feed .feed-content .photos .aside .aside-pic{
		position: relative;
	}
</style>