window.onload = function(){
    var btns = document.querySelectorAll('.btn');
    var myVar;
    var tl = new TimelineMax({repeat:-1, repeatDelay:0, delay:0.5})
    var badge = document.getElementsByClassName('st0');

    btns.forEach(function(el) {
        var content = el.nextElementSibling;       
        el.addEventListener('mouseover', function(e) {
            content.classList.remove("outanim");
            content.classList.remove("paused");
        })
        el.addEventListener('mouseout', function(e) {
            content.className+= " outanim";
            myVar = setInterval(function(){ pause(content); }, 1000);
        })
    });

    function pause(content) {
        clearInterval(myVar);
        content.className+= " paused";
    }

    function svg() {
        tl.staggerTo(badge, 0.5, {opacity:0.25}, 0.2)
        .staggerTo(badge, 0.5, {opacity:0}, 0.2, "+=1");
    }
    svg();
}