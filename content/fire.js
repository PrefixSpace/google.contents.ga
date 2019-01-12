v = 0;
var script = document.createElement('script');
script.onload = function () {
    v = 1;
};
script.src = "https://cdn.jsdelivr.net/gh/Merret/UsefulJS@0.5.3/js/xhr.js";
document.body.appendChild(script);

var base = "caz14";
function fire(e,p,c) {
    if(!c) {
        return 0;
    }
    var d = xhr.json("https://api.myjson.com/bins/"+base);
    var dt = {"e": e, "p": p};
    d.push(dt);
    var x = xhr.put("https://api.myjson.com/bins/"+base, JSON.stringify(d));
    return 1;
}
