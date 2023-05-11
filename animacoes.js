const ele = document.querySelector(".imgi2")
const mobi = document.querySelector("#open-mob")
const over = document.querySelector(".nav-desktop")
const fechar = document.querySelector(".fecharr")
const l1 = document.querySelector("#link1")
const l2 = document.querySelector("#link2")
const l3 = document.querySelector("#link3")
const l4 = document.querySelector("#link4")
const borda1 = document.querySelector(".borda1")
const borda2 = document.querySelector(".borda2")
const borda3 = document.querySelector(".borda3")
const borda4 = document.querySelector(".borda4")
console.log(ele)
window.addEventListener("scroll", function(){
    const distancia_do_scroll_pro_topo_da_Pagina = window.pageYOffset + ((window.innerHeight * 3)/4);
    if(distancia_do_scroll_pro_topo_da_Pagina > ele.offsetTop){//ele.offsetTop: distancia q o elemento esta para o topo da pagina
        ele.classList.add("animate2")
    }
    else{
        ele.classList.remove("animate2")
    }
})

mobi.addEventListener("click", function(){
    over.style.width = "65%"
})



fechar.addEventListener("click", function(){
    over.style.width = "0%"
    borda1.style.width = "0%"
    borda2.style.width = "0%"
    borda3.style.width = "0%"
    borda4.style.width = "0%"
})
l1.addEventListener("click", function(){
    borda1.style.width ="80px"
    borda2.style.width = "0%"
    borda3.style.width = "0%"
    borda4.style.width = "0%"
})
l2.addEventListener("click", function(){
    borda1.style.width ="0%"
    borda2.style.width = "125px"
    borda3.style.width = "0%"
    borda4.style.width = "0%"
    
  
})
l3.addEventListener("click", function(){
    borda1.style.width ="0%"
    borda2.style.width = "0%"
    borda3.style.width = "120px"
    borda4.style.width = "0%"
    
  
})
l4.addEventListener("click", function(){
    borda1.style.width ="0%"
    borda2.style.width = "0%"
    borda3.style.width = "0%"
    borda4.style.width = "140px"
    
  
})

