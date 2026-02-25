const residuos = document.querySelectorAll('.residuo');
const tachos = document.querySelectorAll('.tacho');
const mensaje = document.getElementById('mensaje');
const reiniciar = document.getElementById('reiniciar');

let puntaje = 0;


/* ================= DRAG PC ================= */

residuos.forEach(residuo => {

residuo.addEventListener('dragstart', e => {

e.dataTransfer.setData(
'text',
e.target.dataset.tacho + ',' + e.target.textContent
);

});

});



/* ================= TACHOS ================= */

tachos.forEach(tacho => {

const img = tacho.querySelector('img');


/* Abrir boca mientras pasa encima */

tacho.addEventListener('dragover', e => {

e.preventDefault();

img.src = img.dataset.abierto;

});


/* Cerrar si sale */

tacho.addEventListener('dragleave', e => {

img.src = img.dataset.cerrado;

});


/* Al soltar */

tacho.addEventListener('drop', e => {

e.preventDefault();

img.src = img.dataset.abierto;



const data =
e.dataTransfer.getData('text').split(',');

const tachoCorrecto = data[0];
const residuoTexto = data[1];

const residuoElement =
[...residuos].find(
r => r.textContent === residuoTexto
);



if(tacho.id === tachoCorrecto){

puntaje++;

residuoElement.style.backgroundColor = '#A5D6A7';

residuoElement.style.pointerEvents = 'none';


tacho.style.transform = 'scale(1.1)';

setTimeout(() => {

tacho.style.transform = 'scale(1)';

img.src = img.dataset.cerrado;

},500);

}
else{

residuoElement.style.backgroundColor = '#FFCDD2';

residuoElement.style.pointerEvents = 'none';


setTimeout(() => {

img.src = img.dataset.cerrado;

},500);

}



/* Resultado final */

if([...residuos].every(r =>
r.style.pointerEvents === 'none'
)){

if(puntaje === residuos.length){

mensaje.textContent =
'🎉 ¡Felicidades! Clasificaste todos correctamente.';

mensaje.style.color = '#2E7D32';

}
else{

mensaje.textContent =
`Has clasificado ${puntaje}/${residuos.length} correctamente. Vuelve a intentarlo.`;

mensaje.style.color = '#D32F2F';

}

}

});

});



/* ================= CELULAR TOUCH ================= */

let residuoSeleccionado = null;


residuos.forEach(residuo => {

residuo.addEventListener('touchstart', () => {

residuoSeleccionado = residuo;


residuo.style.transform = 'scale(1.1)';

});


residuo.addEventListener('touchend', () => {

residuo.style.transform = 'scale(1)';

});

});



tachos.forEach(tacho => {

const img = tacho.querySelector('img');


tacho.addEventListener('touchstart', () => {


if(!residuoSeleccionado) return;


/* Abrir boca */

img.src = img.dataset.abierto;


const tachoCorrecto =
residuoSeleccionado.dataset.tacho;



if(tacho.id === tachoCorrecto){

puntaje++;

residuoSeleccionado.style.backgroundColor =
'#A5D6A7';

residuoSeleccionado.style.pointerEvents =
'none';

}
else{

residuoSeleccionado.style.backgroundColor =
'#FFCDD2';

residuoSeleccionado.style.pointerEvents =
'none';

}



/* Cerrar boca */

setTimeout(()=>{

img.src = img.dataset.cerrado;

},500);



residuoSeleccionado = null;



/* Resultado final */

if([...residuos].every(r =>
r.style.pointerEvents === 'none'
)){

if(puntaje === residuos.length){

mensaje.textContent =
'🎉 ¡Felicidades! Clasificaste todos correctamente.';

mensaje.style.color = '#2E7D32';

}
else{

mensaje.textContent =
`Has clasificado ${puntaje}/${residuos.length} correctamente. Vuelve a intentarlo.`;

mensaje.style.color = '#D32F2F';

}

}


});

});



/* ================= REINICIAR ================= */

reiniciar.addEventListener('click', () => {

residuos.forEach(r => {

r.style.backgroundColor = '#EEEEEE';

r.style.pointerEvents = 'auto';

r.style.transform = 'scale(1)';

});

puntaje = 0;

mensaje.textContent = '';

});
