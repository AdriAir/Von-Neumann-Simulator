// <pre>

// Analizar y Cargar programa en memoria principal
function cargar()
{
	var dato, inst;
	var i, e;
			
	e = false;
			
	// Datos
	for (i = 0; i < 4; i++) {
		eval("dato = Number(p"+mem[i]+".value);");

		if (dato.toString() == "NaN")
			eval("v"+mem[i]+".value = 0;");
		else {
			if (dato > 127) {
				dato = dato%256 - 256;
			}
			else if (dato < -128) {
				dato = 256 + dato%256;
			}
					
			eval("v"+mem[i]+".value = dato;");
		}
	}
			
	// Instrucciones
	for (i = 4; i < 16; i++) {
		eval("inst = analizar(p"+mem[i]+".value);");
		if (!inst.type) {
			eval("e"+mem[i]+".value = inst.e;");
			e = true;
		}
		else
			eval("e"+mem[i]+".value = '';");
	}
			

	if (e) {
		// Limpiar en memoria
		for (i = 0; i < 16; i++) {
			eval("m"+mem[i]+".value = '';");
		}
	}
	else {
		// Cargar Datos
		for (i = 0; i < 4; i++) {
			eval("m"+mem[i]+".value = v"+mem[i]+".value;");
		}

		// Cargar Instrucciones
		for (i = 4; i < 16; i++) {
			eval("inst = analizar(p"+mem[i]+".value);");
			eval("m"+mem[i]+".value = inst.toString();");
		}
	}
						
			
}
		
function apagar(r)
{
	if ((r == "of") || (r == "sf") || (r == "zf")) {
		eval(r + ".className = 'regF';");
	}
	else if (r == "m") {
		eval(r + ".className = 'reg';");
	}
	else if (r.charAt(0) == 'm') {
		if (r != "m"+rdm.value)
			eval(r + ".className = 'celdaN';");
		else
			eval(r + ".className == 'celdaN'?"+ r + ".className = 'celdaA':null;");
	}
	else {
		eval(r + ".className = 'reg';");
	}
}

function apagarMem()
{
	apagar("m0");
	apagar("m1");
	apagar("m2");
	apagar("m3");
	apagar("m4");
	apagar("m5");
	apagar("m6");
	apagar("m7");
	apagar("m8");
	apagar("m9");
	apagar("mA");
	apagar("mB");
	apagar("mC");
	apagar("mD");
	apagar("mE");
	apagar("mF");
}
		
function iluminar(r)
{
	if ((r == "of") || (r == "sf") || (r == "zf")) {
		eval(r + ".className = 'regFC';");
	}
	else if (r == "m") {
		eval(r + ".className = 'regC';");
	}
	else if (r.charAt(0) == 'm') {
		eval(r + ".className = 'celdaC';");
	}
	else {
		eval(r + ".className = 'regC';");
	}
}

function alu(o1, o2, signal)
{
	var op1, op2, res, of2, sf2, zf2;

	res = r0.value;
	op1 = Number(o1);
	op2 = Number(o2);
			
	if (signal == "S") {
		res = op1 + op2;
	}
	else if (signal == "R") {
		res = op1 - op2;
	}
	else if (signal == "M") {
		res = op1 * op2;
	}
	else if (signal == "D") {
		res = Math.floor(op1 / op2);
	}
	else if (signal == "C") {
		res = op1 - op2;
	}
	else {
		res = op1
	}

	if (res > 127) {
		of2 = 1;
		res = res - 256;
	}
	else if (res < -128) {
		of2 = 1;
		res = 256 + res;
	}
	else {
		of2 = 0;
	}

	if (signal == "C") {
		r0.className = "reg";
	}
	else {
		r0.value = res;
		r0.className = "regC";
	}

	sf2 = (res < 0)?1:0;
	zf2 = (res == 0)?1:0;
			
	if (of.value != of2) of.className = "regFC"; else of.className = "regF";
	if (sf.value != sf2) sf.className = "regFC"; else sf.className = "regF";
	if (zf.value != zf2) zf.className = "regFC"; else zf.className = "regF";
			
	of.value = of2;
	sf.value = sf2;
	zf.value = zf2;
}

// </pre>