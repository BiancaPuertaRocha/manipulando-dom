function toggle_dark_mode(){
    var elements_list = ["body", "footer", "button"]
    for(var i in elements_list){
        console.log(elements_list[i])
        var elements = document.getElementsByTagName(elements_list[i])
        console.log(elements)
        for (var k in elements){
            elements[k].classList.toggle("dark-mode");
        }
    }
    
}