let ut="";
function validateogSubmit() {
    const filmSelect = document.getElementById("filmSelect").value;
    const antall = document.getElementById("antall").value;
    const forNavn = document.getElementById("fornavn").value;
    const etterNavn = document.getElementById("etternavn").value;
    const telefonNr = document.getElementById("tlfnr").value;
    const email = document.getElementById("email").value;

    // Kontroll av unfylle plass
    if (filmSelect === "" || antall === "" || forNavn === "" || etterNavn === "" || telefonNr === "" || email === "") {
        document.getElementById("feilMeldingAntall").innerText='"Må skriv noe inn i antall"';
        document.getElementById("feilMeldingfornavn").innerText='"Må skriv noe inn i fornavn"';
        document.getElementById("feilMeldingetternavn").innerText='"Må skriv noe inn i etternavn"';
        document.getElementById("feilMeldingtlfnr").innerText='"Må skriv noe inn i telefonnr"';
        document.getElementById("feilMeldingemail").innerText='"Må skriv noe inn i email"';
        return;
    }

    // kontrol av telefonnummers formatt
    const tlfnRgl = /^[0-9]{8}$/;
    if (!tlfnRgl.test(telefonNr)) {
        alert("Skriv inn et gyldig telefonnummer.");
        return;
    }

    // kontrol av email formatt
    const emailRgl = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRgl.test(email)) {
        alert("Skriv inn et gyldig epost adresse.");
        return;
    }

    // Legge til informasjon i array
    const filmInfo=document.getElementsByName("orderListe");
    console.log(filmInfo)

    ut+="<tr>";
    for(let f of filmInfo){
        ut+="<th>"+f.value+"</th>";
    }
    ut+="</tr>";
    document.getElementById("table").innerHTML=ut;
    document.getElementById("filmForm").reset();
}

function slettTable() {
    const table = document.getElementById("table");
    table.innerHTML="";
}



