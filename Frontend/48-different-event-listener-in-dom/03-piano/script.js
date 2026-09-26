let a=new Audio('./a.m4a')
let s=new Audio('./s.m4a')
let d=new Audio('./d.m4a')
let f=new Audio('./f.m4a')
let g=new Audio('./g.m4a')
let h=new Audio('./h.m4a')
let keys=document.querySelectorAll('.key')

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
        a.currentTime=0
        a.play()
    }
    else if(dets.code==='KeyS'){
        s.currentTime=0
        s.play()
    }
    else if(dets.code==='KeyD'){
        d.currentTime=0
        d.play()
    }
    else if(dets.code==='KeyF'){
        f.currentTime=0
        f.play()
    }
    else if(dets.code==='KeyG'){
        g.currentTime=0
        g.play()
    }
    else if(dets.code==='KeyH'){
        h.currentTime=0
        h.play()
    }
})

