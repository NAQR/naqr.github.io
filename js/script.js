function pop() {
    var toggle = document.getElementById("popup_gpt");
    if (toggle.style.display === "none") {
        toggle.style.display = "table";
    } else {
        toggle.style.display = "none";
    }        
}