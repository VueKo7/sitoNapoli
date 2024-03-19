//Resconi Gabriele 4AI javascript.js


//display delle opzioni sulle varie pagine nel menu-bar
function display(id) {

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



function submit() {

    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let oggetto = document.getElementById('ogg').value;
    let messaggio = document.getElementById('msg').value;



    let output = nome + "\n" + email + "\n" + oggetto + "\n" + messaggio; 

    alert(output);
}


function isEmpty(campo) {
    let isEmpty = false;

    if(string == undefined || string.length == 0)
        isEmpty = true;

    return isEmpty;
}


function nameCtrl() {

    let nameID = document.getElementById("name");
    let err = document.getElementById("errName");
    let isValid = true;

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

    
    if(!isValid) {
        err.innerHTML = "nome: nome non valido!";
    }
    else {
        err.innerHTML = "nome: Corretto!";
    }
}








