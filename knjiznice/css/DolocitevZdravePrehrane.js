// za pridobit kaj je jedel

var seznamHrane= document.getElementById("hrana");
var kajImamo= seznamHrane.options[seznamHrane.selectedIndex].value;

var nezdravo;
var sladko;

var kajVseSmoOznacili=5;
var NezdravaHrana= function(kajVseSmoOznacili) {
    for (var i=0; i<kajVseSmoOznacili; i++) {
        if (kajImamo==1 || kajImamo==2 || kajImamo==5 || kajImamo==9 || kajImamo==10 || kajImamo==12) {
            nezdravo++
        }
    }
    return nezdravo;
}

var SladkaHrana= function(kajVseSmoOznacili) {
    for (var i=0; i<kajVseSmoOznacili; i++) {
        if (kajImamo==14 || kajImamo==15) {
            sladko++
        }
    }
    return sladko;
}

var ZdravaHrana= function(kajVseSmoOznacili) {
    for (var i=0; i<kajVseSmoOznacili; i++) {
        if (kajImamo==3 || kajImamo==7 || kajImamo==17) {
            sladko++
        }
    }
    return sladko;
}