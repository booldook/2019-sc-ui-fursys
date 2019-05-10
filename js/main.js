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

var interval = setInterval(fn, 3000);























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
