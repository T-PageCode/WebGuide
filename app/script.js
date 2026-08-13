const go_div = document.getElementById("go-div");
function go_div_show() {
    go_div.style.opacity =  1;
    go_div.style.visibility = "visible";
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        go_div_show();
    }
    else if (event.key === 'g') {
        lastKey = 'g';
    }
    else if (event.key === 'o' && lastKey === 'g') {
        go_div_show();
        lastKey = '';
    }
});