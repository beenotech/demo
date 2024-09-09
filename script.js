var contentNav = document.getElementById('headNav');
var navLinks = contentNav.querySelectorAll('a');

// Definir la media query para pantallas menores a 992px
var mediaQuery = window.matchMedia("(max-width: 991px)");

// Agrega los eventos hover una vez, no en cada scroll
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#e33e13'; // Cambia el color al hacer hover
    });

    link.addEventListener('mouseout', () => {
        if (window.scrollY > 10 && !mediaQuery.matches) {
            link.style.color = '#000000'; // Mantiene negro si está scrolleado
        } else if (!mediaQuery.matches) {
            link.style.color = '#FFFFFF'; // Vuelve a blanco si no está scrolleado en pantallas grandes
        }
    });
});

window.addEventListener('scroll', () => {
    var scroll = window.scrollY;

    if (scroll > 10) {
        contentNav.style.backgroundColor = '#FFFFFF'; // Cambia el fondo a blanco
        navLinks.forEach(link => {
            link.style.color = '#000000'; // Cambia el color del texto a negro
        });
    } else {
        contentNav.style.backgroundColor = 'transparent'; // Fondo transparente

        // Si la pantalla es grande, el color vuelve a blanco
        if (!mediaQuery.matches) {
            navLinks.forEach(link => {
                link.style.color = '#FFFFFF'; // Vuelve el color del texto a blanco
            });
        } else {
            // Si es pantalla pequeña, mantener siempre el texto en negro
            navLinks.forEach(link => {
                link.style.color = '#000000';
            });
        }
    }
});

// Escuchar cambios en el tamaño de la pantalla
mediaQuery.addEventListener('change', () => {
    if (mediaQuery.matches) {
        // Si la pantalla es pequeña, el color del texto será siempre negro
        navLinks.forEach(link => {
            link.style.color = '#000000';
        });
    } else {
        // Si vuelve a ser grande, se ajusta según el scroll
        window.dispatchEvent(new Event('scroll'));
    }
});




// Obtener elementos
var modal = document.getElementById("contactModal");
var btn = document.getElementById("openModalLink");
var span = document.getElementsByClassName("close-btn")[0];

// Abrir el modal al hacer clic en el botón
btn.onclick = function(event) {
    event.preventDefault(); 
    modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la 'X'
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



