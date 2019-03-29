window.onload = function(){
    tiao(".lastTOP")
    function tiao(dings){
        let ding = document.querySelector(dings)
        console.log(1)
		window.onscroll = function(){
			let windowtop = document.documentElement.scrollTop //获取现在滚动条到顶部距离
            if(windowtop >= window.innerHeight){
                ding.style.opacity = 1
            }else{
                ding.style.opacity = 0
            }
            ding.onclick = function(){
                animate(document.documentElement, {scrollTop: 0});
            }
		}
	}
}