const ele = document.querySelector(".imgi2")
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