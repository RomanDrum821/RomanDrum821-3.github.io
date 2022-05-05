function agregarDigito(digito)
{
    let display = document.getElementById("display");
    display.value = display.value + digito;
}

function allclear()
{
    document.getElementById("display").value = "";
}

function agregarOperador(operador)
{
    let display = document.getElementById("display");
    display.value = display.value + operador;
}

function calcularResultado()
{
    display.value = eval(display.value);
}

function calcularPotencia()
{
    let display = document.getElementById("display");
    let base = eval(display.value);
    let exponente = document.getElementById("elevar_potencia").value;
    let resultadoPotencia = Math.pow(base, exponente);
    display.value = resultadoPotencia;
}

function raizcuadrada()
{
    let display = document.getElementById("display");
    let resultadoRaiz = Math.sqrt(display.value);
    display.value = resultadoRaiz;
}

function calcularPorcentaje()
{
    let display = document.getElementById("display");
    let porciento = eval(display.value);
    let numero = document.getElementById("porcientode").value;
    let resultadoporciento = (numero *(porciento/100));
    display.value = resultadoporciento;
}

function factorial() 
{
    let display = document.getElementById("display");

	for (i=1; i<= display.value; i++) 
    {
		let Resultado = display.value * i; 
	}
	
    display.value = Resultado; 
}

function logaritmoconbase10()
{
    let display = document.getElementById("display");
    let Numero = eval(display.value);
    let Resultadolog = Math.log10(Numero);
    display.value = Resultadolog;
}

function logaritmoconbase2()
{
    let display = document.getElementById("display");
    let Numero = eval(display.value);
    let Resultadoln = Math.log2(Numero);
    display.value = Resultadoln;
}


