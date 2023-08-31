let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra() {
    myExtras.push(myExtrasInput.value);
    updateExtras();
}

function updateExtras() {
    let extrasHTML = myExtras.map(extra => `<p>${extra}</p>`).join('');
    myExtrasListElement.innerHTML = extrasHTML; 
}






