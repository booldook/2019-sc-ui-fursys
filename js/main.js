/* 메인 네비 이벤트 */
$(".navis > li").mouseover(mnOver);
$(".navis > li").mouseleave(mnLeave);
function mnOver(){
	var src = $(this).children("img").data("hover");
	$(this).children("img").attr("src", src);
	$(this).find(".navi_sub").stop().slideDown(200);
}
function mnLeave() {
	var src = $(this).children("img").data("src");
	$(this).children("img").attr("src", src);
	$(this).find(".navi_sub").stop().slideUp(200);
}

$.ajax({
	type: "get",
	url: "../json/mn.json",
	dataType: "json",
	success: function (res) {
		console.log(res);
		var html = '';
		for(var i in res.navs) {
			html  = '<div class="navi_sub">';
			html += '<div class="clear">';
			html += '<img src="../img/bl_top.png" class="fl">';
			html += '</div>';
			html += '<div>';
			for(var j in res.navs[i].datas) {
				html += '<ul class="navi_sub_ul">';
				if(res.navs[i].datas[j].mtit == "")	{
					html += '<li class="navi_sub_cont navi_udot">';
				}
				else {
					html += '<li class="navi_sub_tit navi_udot">';
					if(res.navs[i].datas[j].mtit.target == "_blank") {
						html += '<a href="'+res.navs[i].datas[j].mtit.link+'" target="_blank">';
					}
					else {
						html += '<a href="'+res.navs[i].datas[j].mtit.link+'">';
					}
					html += res.navs[i].datas[j].mtit.title;
					html += '</a>';
					html += '</li>';
					html += '<li class="navi_sub_cont">';
				}
				for(var k in res.navs[i].datas[j].stit) {
					html += '<div>';
					if(res.navs[i].datas[j].stit[k].target == "_blank") {
						html += '<a href="'+res.navs[i].datas[j].stit[k].link+'" target="_blank">- ';
					}
					else {
						html += '<a href="'+res.navs[i].datas[j].stit[k].link+'">- ';
					}
					html += res.navs[i].datas[j].stit[k].title;
					html += '</a>';
					html += '</div>';
				}
				html += '</li>';
				html += '</ul>';
			}
			html += '</div>';
			$(".navis > li").eq(i).append(html);
		}
	},
	error: function(xhr){
		console.log(xhr);
	}
});

/*
//웹디자인 기능사
var now = -1;
var ed = 4;
var depth = 10;
var interval = setInterval(banAni, 2000);
function banAni() {
	if(now == ed) now = 0;
	else now++;
	$(".ban_li").eq(now).css({"opacity": 0, "z-index": depth++});
	$(".ban_li").eq(now).stop().animate({"opacity": 1}, 500);
}
*/


var now = -1;
var ed = 4;
var depth = 10;
var timer = 5000;
var interval = setInterval(banAni, timer);
banAni();
function banAni() {
	if(now == ed) now = 0;
	else now++;
	banFade();
}
$("#bt_lt").click(function(){
	clearInterval(interval);
	interval = setInterval(banAni, timer);
	if(now == 0) now = ed;
	else now--;
	banFade();
});
$("#bt_rt").click(function(){
	clearInterval(interval);
	interval = setInterval(banAni, timer);
	if(now == ed) now = 0;
	else now++;
	banFade();
});
$(".pagers > i").click(function(){
	clearInterval(interval);
	interval = setInterval(banAni, timer);
	now = $(this).index();
	banFade();
});
function banFade() {
	$(".ban_li").eq(now).css({"opacity": 0, "z-index": depth++});
	$(".ban_li").eq(now).stop().animate({"opacity": 1}, 500);
	$(".pagers > i").css("color", "#fff");
	$(".pagers > i").eq(now).css("color", "#f00");
}























/*
res.navs[0].datas[0].mtit.title
res.navs[0].datas[0].stit[2].title

<div class="navi_sub">
	<div class="clear">
		<img src="../img/bl_top.png" class="fl">
	</div>
	<div>
		<ul class="navi_sub_ul">
			<li class="navi_sub_tit navi_udot">오피스</li>
			<li class="navi_sub_cont">
				<div>- 데스크 & 패널</div>
				<div>- 프리미어 클래스</div>
				<div>- 중역용 의자</div>
			</li>
		</ul>
	</div>
</div>
*/


/*
{
	"navs": [
		{
			"datas": [
				{
					"mtit": {"title":"", "link": "", "target": ""},
					"stit": [
						{"title":"", "link": "", "target": ""}
					]
				}
			]
		}
	]
}
*/
