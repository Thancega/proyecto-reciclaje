const residuos = document.querySelectorAll('.residuo');
const tachos = document.querySelectorAll('.tacho');
const mensaje = document.getElementById('mensaje');
const reiniciar = document.getElementById('reiniciar');

let puntaje = 0;

// ================= Drag & Drop =================
residuos.forEach(residuo => {
    residuo.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', e.target.dataset.tacho + ',' + e.target.textContent);
    });
});

tachos.forEach(tacho => {
    tacho.addEventListener('dragover', e => e.preventDefault());

    tacho.addEventListener('drop', e => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text').split(',');
        const tachoCorrecto = data[0];
        const residuoTexto = data[1];
        const residuoElement = [...residuos].find(r => r.textContent === residuoTexto);

        if (tacho.id === tachoCorrecto) {
            puntaje++;
            residuoElement.style.backgroundColor = '#A5D6A7';
            residuoElement.style.pointerEvents = 'none';
            tacho.style.transform = 'scale(1.05)';
            setTimeout(() => tacho.style.transform = 'scale(1)', 200);
        } else {
            residuoElement.style.backgroundColor = '#FFCDD2';
            residuoElement.style.pointerEvents = 'none';
        }

        if ([...residuos].every(r => r.style.pointerEvents === 'none')) {
            if (puntaje === residuos.length) {
                mensaje.textContent = '🎉 ¡Felicidades! Clasificaste todos correctamente.';
                mensaje.style.color = '#2E7D32';
            } else {
                mensaje.textContent = `Has clasificado ${puntaje}/${residuos.length} correctamente. Vuelve a intentarlo.`;
                mensaje.style.color = '#D32F2F';
            }
        }
    });
});

// ================= Reiniciar =================
reiniciar.addEventListener('click', () => {
    residuos.forEach(r => {
        r.style.backgroundColor = '#C8E6C9';
        r.style.pointerEvents = 'auto';
    });
    puntaje = 0;
    mensaje.textContent = '';
});
