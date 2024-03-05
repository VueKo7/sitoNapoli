//Resconi Gabriele 4AI javascript.js


//display delle opzioni sulle varie pagine nel menu-bar
function display(id) {

    let opz1 = document.getElementById("opz1");
    let opz2 = document.getElementById("opz2");
    let opz3 = document.getElementById("opz3");
    let opz4 = document.getElementById("opz4");
    
    if(id == opz1) {
        opz2.style.display = "none";
        opz3.style.display = "none";
        opz4.style.display = "none";
    }
    else if(id == opz2) {
        opz1.style.display = "none";
        opz3.style.display = "none";
        opz4.style.display = "none";
    }
    else if(id == opz3) {
        opz1.style.display = "none";
        opz2.style.display = "none";
        opz4.style.display = "none";
    }
    else {//if(id == opz4) 
        opz1.style.display = "none";
        opz2.style.display = "none";
        opz3.style.display = "none";
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
    if(selectedIMG.style.opacity == "0.5") { //deselezione
        selectedIMG.style.opacity = "1";
        filesToDownload.pop(id);
    } else { //selezione
        selectedIMG.style.opacity = "0.5";
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
    } else {}
}   