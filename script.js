function add_like(){
    document.getElementById('number_like').innerHTML=+ document.getElementById('number_like').innerHTML+ +1;
}

function add_dont_like(){
    document.getElementById('number_no_like').innerHTML=+ document.getElementById('number_no_like').innerHTML+ +1;
}


function coloringH1(){
    document.getElementById('H1').style.color='palevioletred';
}
function removeCOLORH1(){
    document.getElementById('H1').style.color='white';
}