//modal
const popup = () => {
  const modal = document.querySelector('.modal');
  modal.innerHTML = `
    <div id="moda">
      <div><button class="botaoFechar" onclick="botaoFechar()">FECHAR</button></div>
        <div id="containerModal">       
            <div class="imagem"><img src="img/corredor.png" alt="cartao"> </div>   
            <div class="BemVindo"> 
                <img src="img/newsletter.png" alt="cartao"> 
                <div>
                <p class="bVindoEmail">BEM VINDO AO MEU PORTIFÓLIO</p> 
                <p class="textEmail">Receba em primeira mão</p>
                <p class="textEmail" id="textDescEmail">Desconto e ofertas exclusivas</p>
                </div>
                <input placeholder="Digite seu e-mail" type="text" class="inputEmail">
                <button id="botaoModal" onclick="botaoModal()">ENVIAR <img src="img/aviaozinho.png" class="aviao" alt="aviao de papel"></button> 
            </div>                     
        </div>
    </div>`;
}
window.addEventListener("load", popup);

const botaoFechar = () => {
  document.querySelector("#moda").remove()
}

const botaoModal = () => {
  document.querySelector("#moda").remove()
}





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


//carrossel banner
document.addEventListener('DOMContentLoaded', function () {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');

  let currentIndex = 0;
  const totalItems = carouselItems.length;
  const itemWidth = carouselItems[0].clientWidth;

  function showSlide(index) {
    const offset = -index * itemWidth;
    carouselInner.style.transition = 'transform 0.5s ease';
    carouselInner.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
  }

  function autoSlide() {
    setInterval(function () {
      nextSlide();
    }, 5000);
  }

  autoSlide(); // Iniciar o carrossel automaticamente

  prevBtn.addEventListener('click', function () {
    prevSlide();
  });

  nextBtn.addEventListener('click', function () {
    nextSlide();
  });

  showSlide(currentIndex);
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
      992: {
        items: 3
      },
      1200: {
        items: 4
      },
      1500: {
        items: 6
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

//footer-menu
function toggleDetails() {
  const infoDetails = document.getElementById('infoDetails');
  const accountDetails = document.getElementById('accountDetails');
  const locationDetails = document.getElementById('locationDetails');

  if (window.innerWidth <= 851) {
    infoDetails.removeAttribute('open');
    accountDetails.removeAttribute('open');
    locationDetails.removeAttribute('open');
  } else { // Desktop
    infoDetails.setAttribute('open', '');
    accountDetails.setAttribute('open', '');
    locationDetails.setAttribute('open', '');
  }
}

// Executar a função ao carregar a página e redimensionar a tela
window.onload = toggleDetails;
window.onresize = toggleDetails;