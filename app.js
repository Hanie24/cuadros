let elements = document.getElementsByClassName("square");
    
for(let i = 0; i < elements.length; i++) {
    elements[i].onclick = function() {
        var element = elements[0];
        while(element) {
            if(element.tagName === "div") {
                element.classList.remove("pink");  
                }
                element = element.nextSibling;
        }
        this.classList.add("pink");  
    };
}