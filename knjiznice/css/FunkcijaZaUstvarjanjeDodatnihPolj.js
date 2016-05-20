var seznamHrane= document.getElementById("hrana");

function dodajPolje() {
    if (tisto!=0) {
        var vrni= "<select id='hrana'>
						<option value='0'></option>
						<option value='1'>Hamburger</option>
						<option value='2'>Krompirček</option>
						<option value='3'>Sadje</option>
						<option value='4'>Testenine/lazanja</option>
						<option value='5'>Pohano meso</option>
						<option value='6'>Goveja juha</option>
						<option value='7'>Zelenjavna juha</option>
						<option value='8'>Gobova juha</option>
						<option value='9'>Čips</option>
						<option value='10'>Pica</option>
						<option value='11'>Rižota</option>
						<option value='12'>Pečene piščančje perutničke</option>
						<option value='13'>Piščančji file</option>
						<option value='14'>Sladoled</option>
						<option value='15'>Torta</option>
						<option value='16'>Pire krompir</option>
						<option value='17'>Zelenjava</option>
						</select>"
    }
    return vrni;
}