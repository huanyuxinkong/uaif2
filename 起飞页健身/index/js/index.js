window.onload = function(){
    class PingYi{
        constructor(box,son){  //构造函数
            this.bigBox = document.querySelector(box)
            this.boxs = this.bigBox.querySelectorAll(son)
            this.btn = this.bigBox.querySelector(".jiaolianbtn")
            this.left = this.bigBox.querySelector(".jiaolian_body_bx_left .left_bx")
            console.log(this.left)
            this.right = this.bigBox.querySelector(".jiaolian_body_bx_right .right_bx")
            this.width = this.boxs[0].clientWidth
            this.length = this.boxs.length
            this.btnSons = []
            this.addBtnSon()
            this.time = 3000
            this.now = 0
            this.pre = 0
        }
        addBtnSon(){
            for(let i=0;i<this.length;i++){
                let div = document.createElement("div")
                this.btn.appendChild(div)
                console.log(div)
                div.onclick = ()=>{
                    // clearInterval(this.t)
                    if(i>this.now){
                        this.now =i
                        this.now-=1
                        this.lunbo()
                    }else if(i<this.now){
                        this.now =i
                        this.now+=1
                        this.lunbo("right")
                    }
                }
                // div.onmouseleave = ()=>{
                //     this.run()
                // }
                this.btnSons.push(div)
            }
            this.btnSons[0].style.backgroundColor = "#f1501a"
        }
        run(){
            let that = this
            this.t = setInterval(function(){
                // 左右轮播
                that.lunbo()
    
            },this.time)
        }
        changeColor(index){
            this.btnSons.forEach(function(item,i){
                if(i!=index){
                    item.style.backgroundColor = " #cecece"
                }else{
                    item.style.backgroundColor = "#f1501a"
                }
            })
        }
        lunbo(status="left"){
            if(status=="left"){
                this.now+=1
                if(this.now>=this.length){
                    this.now=0
                }
                this.boxs[this.now].style.left = this.width + 'px'
                animate(this.boxs[this.now],{'left':0})
                animate(this.boxs[this.pre],{'left':-(this.width)})
                this.changeColor(this.now)
    
                this.pre = this.now
    
            }else{
                this.now-=1
                if(this.now<0){
                    this.now=this.length-1
                }
                this.boxs[this.now].style.left = -(this.width) + 'px'
                animate(this.boxs[this.now],{'left':0})
                animate(this.boxs[this.pre],{'left':(this.width)})
                this.changeColor(this.now)
                this.pre = this.now
            }
        }
        addnav(){
            if(this.left){
                this.onmousedown = ()=>{
                    clearInterval(this.t)
                }
                this.onmouseup = ()=>{
                    this.run()
                }
                this.left.onclick = ()=>{
                    this.lunbo()
                }
                this.right.onclick = ()=>{
                    this.lunbo('right')
                }
            }
        }
    }
    let py2 = new PingYi(".jiaolian_body_bx",'.jiaolian_body_body')
    py2.time = 1000
    py2.addnav()
}