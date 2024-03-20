//Resconi Gabriele 4AI javascript.js


//display delle opzioni sulle varie pagine nel menu-bar
function displayOptions(id) {

    let opz1 = document.getElementById("opz1");
    let opz2 = document.getElementById("opz2");
    let opz3 = document.getElementById("opz3");
    let opz4 = document.getElementById("opz4");
    let opz5 = document.getElementById("opz5");
    
    if(id == opz1) {
        opz2.style.display = "none";
        opz3.style.display = "none";
        opz4.style.display = "none";
        opz5.style.display = "none";
    }
    else if(id == opz2) {
        opz1.style.display = "none";
        opz3.style.display = "none";
        opz4.style.display = "none";
        opz5.style.display = "none";
    }
    else if(id == opz3) {
        opz1.style.display = "none";
        opz2.style.display = "none";
        opz4.style.display = "none";
        opz5.style.display = "none";
    }
    else if(id == opz4) {
        opz1.style.display = "none";
        opz2.style.display = "none";
        opz3.style.display = "none";
        opz5.style.display = "none";
    }
    else {//if(id == opz5) 
        opz1.style.display = "none";
        opz2.style.display = "none";
        opz3.style.display = "none";
        opz4.style.display = "none";
    }    
    
//l'elemento cliccato sara' seggeto solo al cambiamento di stato come interruttore
    if(id.style.display == "none")
        id.style.display = "block";
    else
        id.style.display = "none";
}


const filesToDownload = [];

function download_selection(id) {

    let selectedIMG = document.getElementById(id);

    //cambio dell'opacità + impostazione percorso per download per selezione
    if(selectedIMG.style.opacity == "0.7") { //deselezione
        selectedIMG.style.opacity = "1";
        filesToDownload.pop(id);
    } else { //selezione
        selectedIMG.style.opacity = "0.7";
        filesToDownload.push(id);
    }

}
 

function downloadFILES() {

    let downloadBUTTON = document.getElementById("download");

    if(filesToDownload.length > 0)
    {
        for(let i = 0; i < filesToDownload.length; i++) {

            if(filesToDownload[i] == "pdf") {
                downloadBUTTON.setAttribute('download', "Programma Viaggio di Istruzione Napoli.pdf");
                downloadBUTTON.setAttribute('href', "./risorse/Programma Viaggio di Istruzione Napoli.pdf");
            }
            else if(filesToDownload[i] == "docx") {
                downloadBUTTON.setAttribute('download', "Programma Viaggio di Istruzione Napoli.docx");
                downloadBUTTON.setAttribute('href', "./risorse/Programma Viaggio di Istruzione Napoli.docx");
            }
            
            downloadBUTTON.click();
        }
    }
}   


const imgs = [
    "./risorse/imgs/museoJago.jpg",
    "./risorse/imgs/sanCallisto.jpg"
];
let img_index = 0;

function switchImg(button) {

    console.log(imgs.length);
    if(button == "inc" && img_index < imgs.length-1) {
        img_index++;
    }
    else if(button == "dec" && img_index > 0) {
        img_index--;
    }

    document.getElementById("img").setAttribute("src", imgs[img_index]);
    document.getElementById("imgLink").setAttribute("href", imgs[img_index]);
}











let output = []; //dati dell'utente

function submit() {

    console.log(output.toString());

    //controllo che siano tutti riempiti i campi
    if(output.length == 4) {
        let nome = document.getElementById(output[0].toString()).value;
        let email = document.getElementById(output[1].toString()).value;
        let ogg = document.getElementById(output[2].toString()).value;
        let msg = document.getElementById(output[3].toString()).value;
        alert(nome + "\n" + email + "\n" + ogg + "\n" + msg);
    }
}


function nameCtrl() {

    let nameID = document.getElementById("nome");
    let err = document.getElementById("errName");
    isValid = true;

    try {
        let strName = String(nameID.value);
        if(strName.length != 0)
        {
            for(let i = 0; i < strName.length && isValid; i++) {
                if((strName.charAt(i) < 'a' || strName.charAt(i) > 'z') //ignoro le minuscole
                && (strName.charAt(i) < 'A' || strName.charAt(i) > 'Z') //ignoro le maiuscole
                && strName.charAt(i) != ' ') { //ignoro gli spazi
                    isValid = false;
                }
            }
        }
        else {
            isValid = false;
        }
    }catch(err) {
        alert('errore generato');
    }

    setValue(isValid, err, "nome");
}


function emailCtrl() {
    let nameID = document.getElementById("email");
    let err = document.getElementById("errEmail");
    isValid = true;

    try {
        let strEmail = String(nameID.value);
        if(strEmail.length != 0)
        {
            if(!strEmail.includes('@') || !strEmail.includes('.')) {
                isValid = false;
            }
        }
        else {
            isValid = false;
        }
    } catch(err) {
        alert('errore generato');
    }

    setValue(isValid, err, "email");
}


function emptyCtrl(ID, errID) {

    let nameID = document.getElementById(ID);
    let err = document.getElementById(errID);
    isValid = true;

    try {
        let str = String(nameID.value);
        if(str.length == 0) {
            isValid = false;
        }
    } catch(err) {
        alert('errore generato');
    }

    setValue(isValid, err, ID);
}


function setValue(isValid, err, msg) {
    
    if(!isValid) { //non valido
        err.innerHTML = msg + ": non valido!";
        if(output.includes(msg))
            output.pop(msg);
    }
    else { //valido
        err.innerHTML = msg;
        if(!output.includes(msg))
            output.push(msg);
    }
}





function displayImg(imgSrc) {

    



}











