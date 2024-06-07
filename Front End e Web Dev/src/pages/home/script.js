document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de alerta
    alert('Bem-vindo ao BlueGuard!');

    // Validação de login
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;

            if (username === '' || password === '') {
                alert('Por favor, preencha todos os campos.');
                event.preventDefault();
            } else {
                alert('Login realizado com sucesso!');
                // Aqui você pode adicionar a lógica para tratar o login, como redirecionar para outra página.
            }
        });
    }

    // Função para inicializar um carrossel
    function initCarousel(carouselClass) {
        let slideIndex = 0;
        const slides = document.querySelectorAll(`.${carouselClass} .slide`);
        showSlides();

        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = 'block';
            setTimeout(showSlides, 5000); // Muda a cada 5 segundos
        }
    }

    
    initCarousel('objetivos-carousel');
    initCarousel('publico-carousel');
    initCarousel('tecnologia-carousel');
    initCarousel('problema-carousel');
    initCarousel('beneficios-carousel');
    initCarousel('uso-diario-carousel');
});
