window.onload = function() {
    var buttons = document.getElementsByClassName("btn");
    for(var i=0; i<buttons.length; i++) {
        buttons[i].onclick = function() {
            document.execCommand(this.value);
            // document.execCommand();
        }
    }
    var lastBtn = document.getElementById("last-btn");
    lastBtn.onclick = function() {
        document.execCommand("selectAll");
        // document.execCommand();

    }
}