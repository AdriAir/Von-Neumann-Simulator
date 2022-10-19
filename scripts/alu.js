let startBtn = document.getElementById("alu-c2");
let action = document.getElementById("alu-c1");
let action_value = action.value;
let o1 = document.getElementById("alu-o1");
let o2 = document.getElementById("alu-o2");
let result = document.getElementById("alu-a");
let zf = document.getElementById("alu-zf");
let of = document.getElementById("alu-of");
let sf = document.getElementById("alu-sf");

action.onchange = function () {

    action_value = action.value;

}

o1.onchange = function () {

    o1.value = o1.value

}

o2.onchange = function () {

    o2.value = o2.value

}

startBtn.onclick = function () {

    of.textContent = 0;
    sf.textContent = 0;
    zf.textContent = 0;

    if (action_value == "add") {

        if (o1.value == "" && o2.value == "") {

            result.textContent = 0;

        } else if (o1.value == "" ^ o2.value == "") {

            if (o1.value != "") {

                result.textContent = o1.value;

            } else {

                result.textContent = o2.value;

            }

        } else {

            result.textContent = parseInt(o1.value) + parseInt(o2.value);

        }

    } else if (action_value == "subtract") {

        if (o1.value == "" && o2.value == "") {

            result.textContent = 0;

        } else if (o1.value == "" ^ o2.value == "") {

            if (o1.value != "") {

                result.textContent = o1.value;

            } else {

                result.textContent = 0 - o2.value;

            }

        } else {

            result.textContent = parseInt(o1.value) - parseInt(o2.value);

        }
    } else if (action_value == "multiply") {

        if (o1.value == "" && o2.value == "") {

            result.textContent = 0;

        } else if (o1.value == "" ^ o2.value == "") {

            if (o1.value != "") {

                result.textContent = o1.value * 0;

            } else {

                result.textContent = 0 * o2.value;

            }

        } else {

            result.textContent = parseInt(o1.value) * parseInt(o2.value);

        }
    } else if (action_value == "divide") {

        if (o1.value == "" && o2.value == "") {

            result.textContent = 0;

        } else if (o1.value == "" ^ o2.value == "") {

            if (o1.value != "") {

                result.textContent = "Infinity";

            } else {

                result.textContent = 0 / o2.value;

            }

        } else {

            result.textContent = parseInt(parseInt(o1.value) / parseInt(o2.value));

        }
    } else if (action_value == "compare") {

        if (o1.value == o2.value) {

            zf.textContent = 1;

        } else if (o1.value != o2.value) {

            if ((parseInt(o1.value) - parseInt(o2.value)) < 0) {

                sf.textContent = 1;

            }

        } else if (o1.value == "" ^ o2.value == "") {

            if (o1.value != "") {

                if (o1.value == 0) {

                    zf.textContent = 1;

                } else if (o1.value < 0) {

                    sf.textContent = 1;

                }

            } else {

                if (o2.value == 0) {

                    zf.textContent = 1;

                } else if (o2.value < 0) {

                    sf.textContent = 1;

                }

            }

        }

    }

}