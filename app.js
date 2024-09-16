let rect=document.querySelector("#center")
rect.addEventListener("mousemove",(details)=>{
    var rectangleLocation=rect.getBoundingClientRect();
    let insiderect=details.clientX - rectangleLocation.left;
    if(insiderect<rectangleLocation.width/2)
    {
        var redColor=gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insiderect);
        gsap.to(rect,{
            backgroundColor:`rgb(${redColor},0,0)`
            // ease:Power4,
        })        
    }
    else{
        var blueColor=gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insiderect);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blueColor})`
        })        

    }

    rect.addEventListener("mouseleave",()=>{
        gsap.to(rect,{
            backgroundColor:"white"
        })

    })
    
})