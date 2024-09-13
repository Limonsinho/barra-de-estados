 function generarEstado(estadoActual) {
    let estados = [{ estado: 2, label: 'Open' }, { estado: 3, label: 'Work In Progress' }, { estado: 5, label: 'Pending' }, { estado: 6, label: 'Resolved' }, { estado: 7, label: 'Closed' }];

    html = '<div class="contenedor_incidente">';
    for (let s of estados) {
        html += `<div class="estado_incidente" style="${s.estado <= estadoActual ? 'background-color:#00cd16;': 'background: #ddd;' }">
                    <div style="color: #000;font-weight: 400;">
                        ${s.label}	
                    </div>`;
        if(s.estado <= estadoActual && s.label !== 'Closed') {
            html += `<img style="margin:0; padding:0px;" src="${ s.estado < estadoActual ? './imagenes/chevron_past_past.png' : './imagenes/chevron_current_future.png' }">
                    </div>`;
        } else if (s.label !== 'Closed'){
            html += `<img style="margin:0; padding:0px;" src="./imagenes/chevron_future_future.png">
                    </div>`;
        }
    }
    html += `</div>`;
    let data = document.getElementById('data');
    data.innerHTML = html;

}

generarEstado(2);

let select = document.getElementById('selectbox');

select.addEventListener('change', () => {
    generarEstado(select.value);
});