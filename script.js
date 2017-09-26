document.getElementById('photo').onmouseover = function() {
    document.getElementById('photo').src = "http://www.linformationdunordsainteagathe.ca/content/dam/tc/linformation-du-nord-sainte-agathe/images/2015/5/14/IA-14052015-soleil.jpg";
}
document.getElementById('photo').onmouseout = function() {
    document.getElementById('photo').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4EtFBdRHk7Lni4CNQczgQ3BLiIoI--mcFMAwgCEIIKuAdhgYriQ";
}

document.getElementById('lien-plus').onclick = function() {
    console.log("zoom+");
    //    return false;
    document.getElementById('photo').style.zoom = '1.2';
    console.log(document.getElementById('photo').style.width);
    event.preventDefault();
}
document.getElementById('lien-moins').onclick = function() {
    console.log("zoom-");

    document.getElementById('photo').style.zoom = '0.8';

    //    return false;
    event.preventDefault();
}

document.getElementById('button').onclick = function() {
    console.log('calcul');
    var error = 0;
    if (document.getElementById('q').value /* == ou */ == "") {
        document.getElementById('q').style.backgroundColor = "orange";
        error++;
    } else {
        if (isNaN(document.getElementById('q').value)) {
            document.getElementById('q').style.backgroundColor = "red";
        error++;
        } else {
            
            document.getElementById('q').style.backgroundColor = "initial";
            
            document.getElementById('ht').value =
                document.getElementById('q').value * document.getElementById('pu').value;

            document.getElementById('tva').value =
                document.getElementById('ht').value * 0.20;

            document.getElementById('ttc').value =
                parseInt(document.getElementById('q').value) + parseInt(document.getElementById('pu').value);
        }
    }
}