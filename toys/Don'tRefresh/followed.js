function running(ob)
{
    var box = document.getElementById(ob);
    document.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        box.style.left = x-10 + 'px';
        box.style.top = y-10 + 'px';
    });
}