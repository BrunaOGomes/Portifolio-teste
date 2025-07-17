document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.curso-carrossel').forEach(function(carrossel) {
    const imagensWrapper = carrossel.querySelector('.carrossel-imagens');
    const prevBtn = carrossel.querySelector('.carrossel-btn.prev');
    const nextBtn = carrossel.querySelector('.carrossel-btn.next');
    let scrollAmount = 220 + 20; // largura da imagem + gap
    prevBtn.addEventListener('click', function() {
      imagensWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', function() {
      imagensWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
});
