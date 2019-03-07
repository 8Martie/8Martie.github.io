var password = document.getElementById('pass');

document.getElementById('heartButt').onclick = function() {
	password.style.display = "block";
}

/*Password :
	m1m2m3 - mamica -------------
	m1a2m3 - mama ---------------
	a1l2i3 - alisa 
	t1t2l3 - tanti lena ---------
*/

password.addEventListener("input", function() {
	if (password.value == "m1m2m3") {
		hidePass("a");	
	} else if (password.value == "m1a2m3") {
		hidePass("b");
	} else if (password.value == "a1l2i3") {
		hidePass("c");
	} else if (password.value == "t1t2l3") {
		hidePass("d");
	}
})

function hidePass(n) {
	password.classList.add("hidd");
	password.value = " ";
	password.disabled = true;
	document.getElementById('content').style.display = "block";
	if (n == "a") {
		showContA()
	} else if (n == "b") {
		showContB()
	} else if (n == "c") {
		showContC()
	} else if (n == "d") {
		showContD()
	}
}

var a, b, c, d, e, f;
a = ["Felicitări cu 8 martie mămica !", "Cu oacazia acestei sărbători miraculoase care este dedicată vouă, femeilor, vreau sa-ți doresc sănătate, iubire din partea noastră, bani căci fără ei nicicum și să ne răbzi și în continuare așa cum ne-ai răbdat până acum. <br>Noi nu suntem ideali, eu nu sunt așa cum tu ai vrut să fiu dar trebuie să te mulțumești de ce ai și să te bucuri de tot ce ai."];
b = ["Felicitări cu 8 martie !", "Cu oacazia acestei sărbători miraculoase care este dedicată femeilor îți doresc sănătate de care mereu ceri, nu pot să ți-o dau, dar pot să ți-o urez, dragoste din partea noastră, răbdare caci fără ea ncicum, bani, ascultăl pe Tata și Tata lasăl să te asculte și el și mulțumesc că mai făcut așa cum sunt."];
c = ["Alisa, felicitări cu 8 martie !!!", "Mă bucur că cunosc așa persoană inteligentă că tine, îți doresc fericire în viață, cât mai multe clipe frumoase cu cei dragi, 'succes' în realizarea visurilor și scopurilor tale precum și să ai dragoste față de ceea ce faci. <br>Și apropo, veseleștete cum trebuie la Odesa !!!"];
d = ["Felicitări cu 8 martie Tanti Lena !", "Cu oacazia acestei sărbători miraculoase care este dedicată vouă, femeilor, Vă doresc bani, răbdare căci aveți nevoie, iubire din partea celor dragi, sănătate și mulțumesc mult pentru lecțiile pe care mi le-ați dat, eu nu eram chiar cel mai bun elev, eu știu că foarte mulți nervi ați cheltuit pe pe mine dar sunt foarte recunoscător și aș spune că mi-au prins bine, nu știu ce mă făceam fără lecțiile dumnevoastre."];

function showContA() {
	document.getElementById('title').innerHTML = a[0];
	document.getElementById('text').innerHTML = a[1];
}

function showContB() {
	document.getElementById('title').innerHTML = b[0];
	document.getElementById('text').innerHTML = b[1];
}

function showContC() {
	document.getElementById('title').innerHTML = c[0];
	document.getElementById('text').innerHTML = c[1];
}

function showContD() {
	document.getElementById('title').innerHTML = d[0];
	document.getElementById('text').innerHTML = d[1];
}