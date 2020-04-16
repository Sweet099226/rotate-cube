function initImg() {
    const imgBox = document.getElementsByClassName("imgBox")[0]
    let index = 30
    if(document.body.clientWidth < 450){
        index = 15
    }
    for (var i = 0; i < index; i++) {
        var src = 0
        if(Math.random()>0.5){
            src = Math.floor(Math.random() * 6) +1;
        }else{
            src = "0" + (Math.floor(Math.random() * 6) +1);
        }
        var img = document.createElement("img")
        img.src = `./img/${src}.png`
        imgBox.appendChild(img)
    }
}
initImg();
bindEvent()
function bindEvent(){
    const btn = document.getElementsByClassName("btn")[0]
    btn.onclick = function(e){
        let imgs = document.getElementsByTagName("img")
        for(let i=0;i<imgs.length;i++){
            setTimeout(() => {
                imgs[i].style.animation = "small 2s linear forwards"
            }, Math.random()*1000);
        }
        let btn = document.getElementsByClassName("btn")[0]
        btn.style.animation = 'display 4s linear forwards'
        setTimeout(() => {
            showCircle()
        }, 3000);
    }
}

function showCircle(){
    let imgs = document.getElementsByTagName("img")
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.animation = ''
        imgs[i].style.opacity = 0
        imgs[i].style.transform = "rotateY(0deg) translateZ(-"+ Math.random()*500 +"px)"
        imgs[i].style.transition = "all 1.5s linear"
        setTimeout(() => {
            imgs[i].style.opacity = 1
            imgs[i].style.transform = "rotateY(-360deg) translateZ(0)"
        }, Math.random()*1000);
    }
    setTimeout(() => {
        displayImg()
    }, 2000);
}
function displayImg(){
    let imgs = document.getElementsByTagName("img")
    for(let i=0;i<imgs.length;i++){
        setTimeout(() => {
            imgs[i].style.animation = "displayImg 1s linear forwards"
        }, Math.random()*1000);
    }
    
    setTimeout(() => {
        let wrappper = document.getElementsByClassName("wrapper")[0]
        wrappper.parentNode.removeChild(wrappper)
        var box = document.createElement("div")
        box.classList.add("box")
        let ul = document.createElement("ul")
        ul.classList.add("minbox")
        for(var j=0;j<6;j++){
            let li = document.createElement("li")
            ul.appendChild(li)
        }
        let ol = document.createElement("ol")
        ol.classList.add("maxbox")
        for(var j=0;j<6;j++){
            let li = document.createElement("li")
            ol.appendChild(li)
        }
        box.appendChild(ul)
        box.appendChild(ol)
        document.getElementsByTagName("body")[0].appendChild(box)
    }, 2000);
}