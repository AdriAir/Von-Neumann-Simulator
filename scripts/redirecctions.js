let cpuBtn = document.getElementById("cpu");
let aluBtn = document.getElementById("alu");
let ucBtn = document.getElementById("uc");
let mpBtn = document.getElementById("mp");

let cpuPage = "./pages/cpu.html"
let aluPage = "./pages/alu.html"
let mpPage = "./pages/mp.html"
let ucPage = "./pages/uc.html"

cpuBtn.onclick = function(){
    window.location.replace(cpuPage);
};
aluBtn.onclick = function(){
    window.location.replace(aluPage);
};
mpBtn.onclick = function(){
    window.location.replace(mpPage);
};
ucBtn.onclick = function(){
    window.location.replace(ucPage);
};