getId("btn-menu-open").addEventListener("click", function () {
    if (hasClass(getId("menu"), "display-none")) {
        
        activeStyleId(false)("menu", "display-none");
        activeStyleId(false)("btn-menu-exit", "display-none");
        activeStyleId(true)("btn-menu-open", "display-none");
    
        getClass("js-header-wrap")[0].classList.add("bg-snow");
        
    }
})

getId("btn-menu-exit").addEventListener("click", function () {
    
    activeStyleId(true)("menu", "display-none");
    activeStyleId(true)("btn-menu-exit", "display-none");
    activeStyleId(false)("btn-menu-open", "display-none");

    getClass("js-header-wrap")[0].classList.remove("bg-snow");
    
})
