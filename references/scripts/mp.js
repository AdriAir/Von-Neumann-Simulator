let rdm = document.getElementById("mp-rdm");
let rdm_index = rdm.selectedIndex;
let rdm_value = rdm.options[rdm.selectedIndex].text;
let startBtn = document.getElementById("mp-c2");
let action = document.getElementById("mp-c1");
let action_value = action.value
let rim = document.getElementById("mp-rim");
let rim_value = rim.value;
let reg_location = "mp-rdm-" + rdm_value;
let register = document.getElementById(reg_location);

rdm.onchange = function () {

    rdm_index = rdm.selectedIndex;
    rdm_value = rdm.options[rdm.selectedIndex].text;
    reg_location = "mp-rdm-" + String(rdm_value);
    register = document.getElementById(reg_location);
}

action.onchange = function () {

    action_value = action.value;
}

rim.onchange = function () {

    rim_value = rim.value;

}

startBtn.onclick = function () {
    if (action_value == "read" && register.textContent != '') {
        rim.value = register.textContent;
    } else if (action_value == "read" && register.textContent == '') {
        rim.value = '';
        alert("Nada que leer en el registro " + rdm_value);
    }

    if (action_value == "write" && rim.value != '') {
        register.textContent = rim.value;
    } else if (action_value == "write" && rim.value == '') {
        alert("No hay ningún valor en RIM");
    }
}