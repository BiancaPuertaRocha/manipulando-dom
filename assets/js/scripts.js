function toggle_dark_mode(){
    var elements_list = ["body", "footer", "button"]
    for(var i in elements_list){
        var elements = document.getElementsByTagName(elements_list[i])
        for (var k in elements){
            var classList = elements[k].classList
            if(classList != undefined)
                classList.toggle("dark-mode");
        }
    }
    
}