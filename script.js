// var CokeButton = document.querySelector("#Coke");
// CokeButton.addEventListener("click",function(){
    
// })

var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"60% 50%",
    scrub:true,
}})

tl.to("#fantalogo",{
    y:880,
    x:-530,
    // duration:3,
    // ease:"back.out(1)"
},'orange')

tl.to("#orange2",{
    y:1380,
    x:-150,
    // duration:3,
},'orange')

tl.to("#leaf",{
    y:850,
    x:150,
    rotate:"90deg",
    // duration:3,
},'orange')

tl.to("#orangefruits",{
    // width:"250px",
    scale:0.75,
    x:450,
    y:970,
    // duration:3,
},'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"60% 50%",
    scrub:true,
    // markers:true
}})

tl2.to("#fantalogo",{
    x:10,
    y:1750,
    width:"32%"
},'fanta')

tl2.to("#orange2",{
    x:130,
    y:1750,
    width:"23%"
},'fanta')

tl2.to("#leaf",{
    x:980,
    y:2150,
    rotate:120,

},'fanta')

tl2.from("#coca-cola",{
    x:-400,
    scale:0,
    opacity:0
},'fanta')

tl2.from("#Sprite",{
    scale:0,
    x:400,
    opacity:0
},'fanta')

tl2.from(".lemon",{
    scale:0,
    opacity:0,
},'fanta')
