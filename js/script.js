// Define o tempo de atraso em milissegundos (5 minutos e 10 segundos = 310000 milissegundos)
const delayTime = 310000; // Ajuste conforme necessário

// Função para mostrar o botão de compra abaixo do vídeo e os depoimentos após o atraso
function showElements() {
    document.getElementById('buy-button-below-video').style.display = 'block';
    showTestimonials();
}

// Função para mostrar os depoimentos com atraso
function showTestimonials() {
    const testimonials = document.getElementById('testimonials').getElementsByClassName('testimonial');
    for (let i = 0; i < testimonials.length; i++) {
        setTimeout(() => {
            testimonials[i].style.display = 'flex';
        }, i * 5000); // Adiciona um atraso de 5 segundos entre cada depoimento
    }
}

// Executar a função showElements após o delayTime
setTimeout(showElements, delayTime);
