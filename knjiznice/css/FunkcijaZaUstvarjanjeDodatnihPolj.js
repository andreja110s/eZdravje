/*function dodajPolje(imeSeznama) {
    var seznam= document.getElementById("imeSeznama");
    var karSmoOznacli= seznam.options[seznam.selectedIndex].value;
    if (karSmoOznacli!=0) {                                                     //če je value zadnjega dodanega elementa(hrane ali pijače)!=0
        if (imeSeznama.equals("hrana")) {
            var vrni= document.createElement("select");							//ustvarimo now element, ki je seznam
            vrni.setAttribute("name", "hrana");
            vrni.setAttribute("id", "hrana");
            var opcije;
            opcije= document.createElement("option");
            opcije.setAttribute("value", "0");
            opcije.innerHTML("");
            vrni.appendChild(opcije);
        }
        else {
            
        }
                                                                                //vrnemo nov drop list
    }
    return vrni;
}


<select class="poravnaj-seznam" id="hrana">
	<option value="0"></option>
	<option value="1">Ledeni čaj</option>
	<option value="2">Čaj</option>
	<option value="3">Energijska pijača</option>
	<option value="4">Voda</option>
	<option value="5">Sok</option>
	<option value="6">Coca cola</option>
	<option value="7">Mleko</option>
	<option value="8">Kava</option>
	<option value="9">Kakav</option>
	<option value="10">Pica</option>
	<option value="11">Rižota</option>
	<option value="12">Pečene piščančje perutničke</option>
	<option value="13">Piščančji file</option>
	<option value="14">Sladoled</option>
	<option value="15">Torta</option>
	<option value="16">Pire krompir</option>
	<option value="17">Zelenjava</option>
</select>
*/

var dodajVSeznameH= function(event) {
    var karSmoOznacli= document.getElementById("hrana");
    var seznam= document.getElementById("seznamHrane");
    var kolicina= document.getElementById("kolicinaH");
    
    var kajSmoDali= seznam.options[seznam.selectedIndex].text;
    var kaj= seznam.options[seznam.selectedIndex].value;
    var kolikoSmoDali= kolicina.options[kolicina.selectedIndex].value;
    var napis= kolicina+"x   "+karSmoOznacli;
    var z=false;
    var nz=false;
    var s=false;
    
    if (kaj.equals(1) || kaj.equals(2) || kaj.equals(5) || kaj.equals(9) || kaj.equals(10) || kaj.equals(12)) {
        nz=true;
    }
    
    if (kaj.equals(14) || kaj.equals(15)) {
        s=true;
    }
    
    if (kaj.equals(3) || kaj.equals(7) || kaj.equals(17)) {
        z=true;
    }
    
    if (!kajSmoDali.equals("0")) {
        var vrni= document.createElement("div");
        vrni.setAttribute("jed", karSmoOznacli);
        vrni.setAttribute("kolicina", "1");
        vrni.setAttribute("zdravo", z);
        vrni.setAttribute("sladko", s);
        vrni.setAttribute("nezdravo", nz);
    }
}




