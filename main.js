const inp = document.getElementById("inp");
const btn = document.getElementById("btn");

btn.onclick = function () {
    inp.select();
    document.execCommand("Copy");
}