<template>
	<div class="page">
		<!--打开App，回复广播 开始-->
		<section class="promo_top_banner" style="display: block !important">
			<div class="banner_bg">
				<img src="../../../static/imgs/promotion_bg.jpg" alt="" style="width: 100%;position: absolute;top: 0;left: 0;">
			</div>
			<div class="banner_wrapper">
				<div class="banner_inner">
					<div class="promo_title">
						<span class="promo_title_text">打开App, 回复广播</span>
						<br>
						<span class="promo_title_text"></span>
					</div>
					<div class="button_wrapper">
						<a href="https://www.douban.com/doubanapp/app?model=B&copy=1&page=status&channel=card_guangbo&direct_dl=1" rel="nofollow" onclick="ga('send', 'event', 'ios', 'click', 'subject banner download')" class="promo_button download_app">
							极速下载
						</a>
						<a href="https://www.douban.com/doubanapp/dispatch?from=mdouban&download=1&model=B&copy=1&page=status&channel=card_guangbo&uri=%2Ftimeline" rel="nofollow" onclick="ga('send', 'event', 'ios', 'click', 'card more link')" class="promo_button open_app">
							打开
						</a>
					</div>
				</div>
			</div>
		</section>
		<!--打开App，回复广播 结束-->
		
		<!-- 登录发广播 开始-->
		<div class="card">
			<div id="status-list">
				<div data-reactroot class="pull-refresh-container">
					<div class="status-editor-bar">
						<div class="avatar">
							<img src="../../../static/imgs/user_normal.jpg" alt="" />
						</div>
						<div class="holder">登录发广播</div>
						<div class="icon icon-camera"></div>
						<div class="icon icon-pen"></div>
					</div>
					<div class="pull-refresh-loading"></div>
					<ul class="status-list comment-list">
						<li>
							<div>
								<div class="desc">
									<a href="/people/95805238/">
										<img data-type="avatar" src="../../../static/imgs/up95805238-16.jpg" alt="豆瓣" />
									</a>
									<a href="/people/95805238/status/2056926339/">
										<div class="user-info">
											<strong>
												豆瓣
												<span>说：</span>
											</strong>
											<div class="timestamp">2017-10-27 00:00:00</div>
										</div>
									</a>
								</div>
								<a href="/people/95805238/status/2056926339/">
									<div class="content">
										<div>
											2017豆瓣秋季摄影大赛结果揭晓！50张最具人气的获奖作品，满足你对秋天的最高幻想。入冬之前，再吸一口秋气→ 
											<a href="https://www.douban.com/biz/photograph/2017-autumn?source=dbbroadcast">https://dou.bz/3werya</a>
										</div>
									</div>
								</a>
							</div>
							<div class="feed-images single">
								<div class="item landscape" data-type="cover" style="background-image:url(../../../static/imgs/1WcJ6E.jpg)">
									<img data-type="cover" src="../../../static/imgs/1WcJ6E.jpg" alt="" />
								</div>
								<div class="info">
									<div class="ic-btn ic-btn-like  left ">
										<span class="text">44</span>
									</div>
									<div class="ic-btn ic-btn-comment  left ">
										<span class="text">4</span>
									</div>
									<div class="ic-btn ic-btn-retweet  left ">
										<span class="text">11</span>
									</div>
									<div class="ic-btn ic-btn-more   right"></div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--登录发广播 结束-->
		
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
</template>
<script>
	
</script>
<style>
	a{
	    color: #42bd56;
    	text-decoration: none;
	}
	html body .page{
		position: fixed;
	    left: 0;
	    top: 0;
	    bottom: 0;
	    right: 0;
	    width: 100%;
	    height: 100%;
	    box-sizing: border-box;
	    overflow-x: hidden;
	    overflow-y: scroll;
	    -webkit-overflow-scrolling: touch;
	}
	.page{
		padding-top: 2.35rem;
	    max-width: 32.5rem;
	    background: #fff;
	    margin: 0 auto;
	    overflow-x: hidden;
	}
	
	/* 打开App，回复广播 开始 */
	.promo_top_banner{
		margin-bottom: 0;
	    max-width: 100%;
	    overflow: hidden;
	    text-align: left;
	    position: relative;
	    display: block !important;
	}
	.promo_top_banner .banner_bg{
		font-size: 0;
	    padding-bottom: 21.33333%;
	    position: relative;
	}
	/*.promo_top_banner .banner_bg .img{
		width: 100%;
	    position: absolute;
	    top: 0;
	    left: 0;
	}*/
	.promo_top_banner .banner_wrapper{
		position: absolute;
	    left: 0.9rem;
	    top: 0;
	    bottom: 0;
	    right: 0.5rem;
	}
	.promo_top_banner .banner_wrapper .banner_inner{
		display: -webkit-box;
	    display: -moz-box;
	    display: box;
	    display: -webkit-flex;
	    display: -moz-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -moz-box-align: center;
	    box-align: center;
	    -webkit-align-items: center;
	    -moz-align-items: center;
	    -ms-align-items: center;
	    -o-align-items: center;
	    align-items: center;
	    -ms-flex-align: center;
	    -webkit-box-pack: justify;
	    -moz-box-pack: justify;
	    box-pack: justify;
	    -webkit-justify-content: space-between;
	    -moz-justify-content: space-between;
	    -ms-justify-content: space-between;
	    -o-justify-content: space-between;
	    justify-content: space-between;
	    -ms-flex-pack: justify;
	    width: 100%;
	    height: 100%;
	}
	.promo_top_banner .banner_wrapper .banner_inner>*{
		vertical-align: middle;
	}
	.promo_top_banner .promo_title{
		margin: 0;
	}
	.promo_title{
	    margin: 2rem 0 0 0;
	}
	.promo_title, .promo_text{
	    line-height: 1;
	    font-weight: 600;
	    color: #494949;
	}
	.promo_top_banner .promo_title_text{
		font-size: 0.7rem;
	    font-weight: normal;
	    line-height: 1.1rem;
	    color: #2CA532;
	}
	.promo_top_banner .promo_title_text{
		font-size: 0.7rem;
	    font-weight: normal;
	    line-height: 1.1rem;
	    color: #2CA532;
	}
	.promo_top_banner .button_wrapper{
		white-space: nowrap;
	    font-size: 0;
	    padding-left: 0.6rem;
	}
	.button_wrapper{
		margin:0;
	}
	.promo_button.download_app{
		color: #fff;
	    border: 0.05rem solid #42bd56;
	    background: #42bd56;
	}
	.promo_top_banner .promo_button{
		font-size: 0.65rem;
	    font-weight: bold;
	    width: auto;
	    padding: 0 0.7rem;
	    position: relative;
	}
	.promo_button{
		display: inline-block;
	    padding: 0 0.2rem;
	    border-radius: 0.15rem;
	    width: 42%;
	    line-height: 2;
	}
	.promo_top_banner .promo_button:after{
		content: '';
	    position: absolute;
	    left: -0.2rem;
	    right: -0.2rem;
	    top: -0.5rem;
	    bottom: -0.5rem;
	}
	.promo_top_banner .promo_button.open_app{
		margin-right: 0;
    	margin-left: 0.4rem;
	}
	.promo_button.open_app{
		margin-right: 4%;
	    color: #42bd56;
	    border: 0.05rem solid #42bd56;
	}
	/* 打开App，回复广播 结束*/
	
	/* 登录发广播 开始*/
	.promo_top_banner+.card{
		margin-top:0px;
	}
	.card{
		margin: 0 0.9rem;
    	-webkit-text-size-adjust: 100%;
	}
	.pull-refresh-container{
		position: relative;
	}
	.status-editor-bar{
		position: relative;
	    margin: 0 -0.9rem 0.25rem;
	    padding: 0.5rem 0.9rem;
	    cursor: pointer;
	    overflow: hidden;
	}
	.status-editor-bar .avatar{
		width: 2rem;
	    height: 2rem;
	    float: left;
	}
	.status-editor-bar .avatar img{
		width: 100%;
	    height: 100%;
	    border-radius: 50%;
	}
	.status-editor-bar .holder{
		color: #aaa;
	    padding-left: 0.5rem;
	    font-size: 0.75rem;
	    line-height: 2rem;
	    float: left;
	}
	.status-editor-bar .icon{
		width: 2rem;
	    height: 2rem;
	    padding: 0.4rem;
	    margin-right: 0.5rem;
	    position: relative;
	    float: right;
	    box-sizing: border-box;
	}
	.status-editor-bar .icon.icon-camera{
		margin-right: 0;
	}
	.status-editor-bar .icon::before{
		content: '';
	    position: absolute;
	    width: 1.2rem;
	    height: 1.2rem;
	    background-size: contain;
	    background-position: center;
	    background-repeat: no-repeat;
	}
	.status-editor-bar .icon.icon-camera::before{
		backgrond-image:url();
	}
	.status-editor-bar .icon.icon-pen::before{
		background-image:url();
	}
	.pull-refresh-loading{
		background: url(../../../static/imgs/loading_grey.gif) no-repeat;
	    background-position: center;
	    background-size: 1.2rem;
	    width: 100%;
	    height: 2.4rem;
	    z-index: -1;
	    position: absolute;
	    left: 0;
	    top: 3rem;
	    opacity: 0;
	    -webkit-transform: "translateZ(0)";
	    -moz-transform: "translateZ(0)";
	    -ms-transform: "translateZ(0)";
	    -o-transform: "translateZ(0)";
	    transform: "translateZ(0)";
	}
	.status-list{
		overflow:hidden;
	}
	.status-list li{
		position: relative;
	    padding-bottom: 1rem;
	    margin-top: 1rem;
	    margin-bottom: 1rem;
	    padding-left: 2.5rem;
	}
	.comment-list li{
		margin-bottom: 1.5rem;
    	padding-left: 2.3rem;
	}
	.status-list li .desc{
		margin-left: -2.5rem;
	}
	.comment-list li .desc{
		display: -webkit-box;
	    display: -moz-box;
	    display: box;
	    display: -webkit-flex;
	    display: -moz-flex;
	    display: -ms-flexbox;
	    display: flex;
	    font-size: 0;
	    line-height: normal;
	    margin: 0 0 0.55rem;
	    color: #494949;
	    position: relative;
	    align-items: center;
	    margin-left: -2.3rem;
	}
	.status-list li .desc img{
		width: 2rem;
	    height: 2rem;
	    margin-right: 0.5rem;
	}
	.comment-list li .desc img, .comment-list li .desc .avatar{
		border-radius: 50%;
	    vertical-align: text-top;
	    margin-right: 0.5rem;
	    width: 1.8rem;
	    height: 1.8rem;
	}
	.status-list li .desc .user-info{
		webkit-box-flex: auto;
	    -moz-box-flex: auto;
	    box-flex: auto;
	    -webkit-flex: auto;
	    -moz-flex: auto;
	    -ms-flex: auto;
	    flex: auto;
	}
	.comment-list li .desc .user-info{
		webkit-box-flex: auto;
	    -moz-box-flex: auto;
	    box-flex: auto;
	    -webkit-flex: auto;
	    -moz-flex: auto;
	    -ms-flex: auto;
	    flex: auto;
	}
	.status-list li .desc .user-info strong{
		font-size: 0.85rem;
	    line-height: 1;
	    color: #494949;
	}
	.comment-list li .desc .user-info strong{
		font-size: 0.75rem;
	    display: inline-block;
	    vertical-align: text-top;
	    margin-right: 0.3rem;
	}
	.status-list li .desc .user-info strong span{
		color:#aaa;
		font-weight:normal;
	}
	.status-list li .desc .user-info .timestamp{
		font-size:0.7rem;
		margin-top:0.3rem;
		line-height:1;
	}
	.comment-list li .desc .user-info .timestamp{
		margin-top: 0.3rem;
	    font-size: 0.6rem;
	    color: #aaa;
	}
	.status-list li .content{
		font-size:0.85rem;
	}
	.comment-list li .content{
	    padding-left: 0;
	    margin-top: 0.5rem;
	    line-height: 1.1rem;
	    color: #494949;
	    font-size: 0.75rem;
	}
	.status-list li .content>div{
		display: inline;
	}
	.feed-images{
		margin-top: 0.75rem;
	}
	.feed-images.single .item{
		display: inline-block;
	    max-height: 15rem;
	    overflow: hidden;
	}
	.feed-images .item{
	    position: relative;
	    cursor: pointer;
	    overflow: hidden;
	}
	.feed-images.single .item.landscape img{
		max-width: 100%;
    	height: auto;
	}
	.feed-images.single .item img{
		display: block;
	}
	.ic-btn::before{
		content: '';
	    width: 1rem;
	    height: 1rem;
	    background-position: center center;
	    background-repeat: no-repeat;
	    display: inline-block;
	    margin-bottom: -0.1rem;
	}
	.ic-btn-like::before{
		background-image:url();
	}
	.ic-btn .text{
		color: #ccc;
	    margin-left: 0.15rem;
	    position: relative;
	    left: 0;
	    top: -0.15rem;
	}
	.ic-btn{
		display: inline-block;
	    margin-right: 1rem;
	    font-size: 0.7rem;
	    cursor: pointer;
	}
	.ic-btn.left{
		float: left;
	}
	.ic-btn-comment::before{
		background-image:url();
	}
	.ic-btn-retweet::before{
		background-image:url();
	}
	.ic-btn-more::before{
		background-image:url();
	}
	/*登录发广播 结束*/
	
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