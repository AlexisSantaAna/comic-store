//Estilos agregados desde JS, tomando un elemento style del head.
//El trucazo es "apagar" todas las cards que no lleven el nombre de la categoría.
const selectValue = () => {
    const selected = document.getElementById('select').value
    const style = document.getElementById('style')
    if (selected == "spiderman") {        
        style.innerHTML = `
        .ironman,
        .batman,
        .daredevil,
        .flash {
            display: none !important;
        }
    `;
        document.head.appendChild(style);
    } else if (selected == "show-all") {
        style.innerHTML = `
        .ironman,
        .batman,
        .daredevil,
        .flash,
        .spiderman {
            display: flex !important;
        }
    `;
        document.head.appendChild(style);
    } else if (selected == "ironman") {
        style.innerHTML = `
        .batman,
        .daredevil,
        .flash,
        .spiderman {
            display: none !important;
        }
    `
    } else if (selected == "daredevil") {
        style.innerHTML = `
        .batman,
        .ironman,
        .flash,
        .spiderman {
            display: none !important;
        }
    `
    } else if (selected == "flash") {
        style.innerHTML = `
        .batman,
        .ironman,
        .daredevil,
        .spiderman {
            display: none !important;
        }
    `
    } else if (selected == "batman") {
        style.innerHTML = `
        .flash,
        .ironman,
        .daredevil,
        .spiderman {
            display: none !important;
        }
    `
    } 
}