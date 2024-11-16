// <pre>

var ops, nOps;
var regs, nRegs;
var mem, nMem;
		
// Operaciones posibles
ops = new Array();
nOps = 0;
ops[nOps++] = "CAR";
ops[nOps++] = "ALM";
ops[nOps++] = "SAL";
ops[nOps++] = "SIG";
ops[nOps++] = "SMA";
ops[nOps++] = "SME";

ops[nOps++] = "COP";
ops[nOps++] = "SUM";
ops[nOps++] = "RES";
ops[nOps++] = "MUL";
ops[nOps++] = "DIV";
ops[nOps++] = "CMP";

ops[nOps++] = "NOP";

// Registros posibles
regs = new Array();
nRegs = 0;
regs[nRegs++] = "R0";
regs[nRegs++] = "R1";
regs[nRegs++] = "R2";
regs[nRegs++] = "R3";

// Direcciones de memoria posibles
mem = new Array();
nMem = 0;
mem[nMem++] = '0';
mem[nMem++] = '1';
mem[nMem++] = '2';
mem[nMem++] = '3';
mem[nMem++] = '4';
mem[nMem++] = '5';
mem[nMem++] = '6';
mem[nMem++] = '7';
mem[nMem++] = '8';
mem[nMem++] = '9';
mem[nMem++] = 'A';
mem[nMem++] = 'B';
mem[nMem++] = 'C';
mem[nMem++] = 'D';
mem[nMem++] = 'E';
mem[nMem++] = 'F';

		
// Clase Instrucción
function Instruction(o, a, b, type, e)
{
	this.o = o.toUpperCase();

	if (type == 1)
		this.a = "m" + a.charAt(1).toUpperCase();
	else
		this.a = "r" + a.charAt(1);
				
	this.b = "r" + b.charAt(1);
	this.type = type;
	this.e = e;
}
		
Instruction.prototype.toString = function()
{
	var s;
			
	s = "";
	if (this.type == 1) {
		s += this.o + " ";
		s += this.a;
	}
	else if (this.type == 2) {
		s += this.o.toUpperCase() + " ";
		s += this.a + ", ";
		s += this.b;
	}
	else if (this.type == 3) {
		s += this.o;
	}
			
	return s;
}
		

// Analisis Sintáctico y Semántico
function analizar(asm)
{
	var sp, o, a, b, e, t;
	var oPos;
			
	sp = asm.toUpperCase();
	o = allTrim(sp.substring(0, 3));
	e = sp.charAt(3);

	sp = allTrim(sp.substring(4, asm.length));
	a = allTrim(sp.substring(0, 2));
	e += sp.charAt(2);

	sp = allTrim(sp.substring(3, asm.length));
	b = allTrim(sp.substring(0, 2));

	sp = allTrim(sp.substring(2, asm.length));
	e += sp;
			
	oPos = find(ops, o);
	if ((o != "") && (oPos == -1)) {
		e = "Operación incorrecta";
		t = 0;
	}
	else {
		// Tipo: línea en blanco
		if (o == "") {
			o = "NOP";
			t = 3;
		}
		// Tipo: OPE
		else if (o == "NOP") {
			t = 3;
            
			if ((a != "") || (b != "")){
				e = "NOP no lleva operandos";
				t = 0;
			}
			else if (e != "") {
				e = "Operación incorrecta";
				t = 0;
			}
		}
		// Tipo: OPE mm
		else if (e == " ") {
			t = 1;

			if (oPos < 6) {
				if ((a.charAt(0) != "M") || (find(mem, a.charAt(1)) == -1)) {
					e = "Dirección de memoria no válida: ["+ a +"]";
					t = 0;
				}
			}
			else {
				e = "La sintaxis correcta es "+ o +" Ra, Rb";
				t = 0;
			}
		}
		// Tipo: OPE Ra, Rb
		else if (e == " ,") {
			t = 2;

			if (oPos > 5) {
				if (find(regs, a) == -1) {
					e = "Registro no válido: ["+ a +"]";
					t = 0;
				}
				else if (find(regs, b) == -1) {
					e = "Registro no válido: ["+ b +"]";
					t = 0;
				}
			}
            else {
				e = "La sintaxis correcta es "+ o +" mem";
				t = 0;
            }
		}
		else {
			e = "Error de sintaxis";
			t = 0;
		}
	}
				
	//e = "o["+ o +"] a["+ a +"] b["+ b +"]";
	return new Instruction(o, a, b, t, e);
}
		
function allTrim(s)
{
	var t, i;
			
	t = "";
			
	for (i = 0; i < s.length; i++) {
		if (s.charAt(i) != ' ')
			t += s.charAt(i);
	}
			
	return t;
}
		
function find(a, val)
{
	var i, pos;
			
	pos = -1;
	i = a.length;
	while(i--) {
		if (a[i] == val) {
			pos = i;
			i = 0;
		}
	}
			
	return pos;
}



// </pre>