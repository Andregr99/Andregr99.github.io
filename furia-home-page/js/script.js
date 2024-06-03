// menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#menu-mob .menu-toggle");
    const menu = document.querySelector("#menu-mob");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("open");
    });

    const closeMenu = document.querySelector("#menu-mob .close-menu");
    closeMenu.addEventListener("click", function () {
        menu.classList.remove("open");
    });
});


//carrossel roupas

$(document).ready(function () {
    var owl = $('.roupas-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 16,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1124: {
                items: 4
            }

        }
    });

    // Adiciona a função de clicar na seta "Próximo"
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    // Adiciona a função de clicar na seta "Anterior"
    $('.owl-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });
});