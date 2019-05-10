/* 메인 네비 이벤트 */
$(".navis > li").mouseover(mnOver);
$(".navis > li").mouseleave(mnLeave);
function mnOver(){
	var src = $(this).children("img").data("hover");
	$(this).children("img").attr("src", src);
}
function mnLeave() {
	var src = $(this).children("img").data("src");
	$(this).children("img").attr("src", src);
}