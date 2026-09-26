let a=new Audio('./a.m4a')
let s=new Audio('./s.m4a')
let d=new Audio('./d.m4a')
let f=new Audio('./f.m4a')
let g=new Audio('./g.m4a')
let h=new Audio('./h.m4a')
let keys=document.querySelectorAll('.key')

let ka=document.querySelector('#a')
let ks=document.querySelector('#s')
let kd=document.querySelector('#d')
let kf=document.querySelector('#f')
let kg=document.querySelector('#g')
let kh=document.querySelector('#h')

keys.forEach((elem)=>{
    elem.addEventListener('click',function(){
        if(elem.id==='a'){
            a.currentTime=0
            a.play()
        }
        else if(elem.id==='s'){
            s.currentTime=0
            s.play()
        }
        else if(elem.id==='d'){
            d.currentTime=0
            d.play()
        }
        else if(elem.id==='f'){
            f.currentTime=0
            f.play()
        }
        else if(elem.id==='g'){
            g.currentTime=0
            g.play()
        }
        else if(elem.id==='h'){
            h.currentTime=0
            h.play()
        }
        
    })
    
})

document.body.addEventListener('keydown',function(dets){
    if(dets.code==='KeyA'){
        ka.classList.add('active')
        setTimeout(()=>{
            ka.classList.remove('active')
        },200)
        a.currentTime=0
        a.play()
    }
    else if(dets.code==='KeyS'){
        ks.classList.add('active')
        setTimeout(()=>{
            ks.classList.remove('active')
        },200)
        s.currentTime=0
        s.play()
    }
    else if(dets.code==='KeyD'){
        kd.classList.add('active')
        setTimeout(()=>{
            kd.classList.remove('active')
        },200)
        d.currentTime=0
        d.play()
    }
    else if(dets.code==='KeyF'){
        kf.classList.add('active')
        setTimeout(()=>{
            kf.classList.remove('active')
        },200)
        f.currentTime=0
        f.play()
    }
    else if(dets.code==='KeyG'){
        kg.classList.add('active')
        setTimeout(()=>{
            kg.classList.remove('active')
        },200)
        g.currentTime=0
        g.play()
    }
    else if(dets.code==='KeyH'){
        kh.classList.add('active')
        setTimeout(()=>{
            kh.classList.remove('active')
        },200)
        h.currentTime=0
        h.play()
    }
})

