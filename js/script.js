/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Maratona Tracker
Aluno 1: Andressa Tizl Americo - RA: 252295
Aluno 2: Isabela Reis Alves - RA: 252222
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

const formulario = document.querySelector('#formContato');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const mensagem = document.querySelector('#mensagem').value;

        // Validação simples
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
        } else {
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso para a equipe do Maratona Tracker.`);
            formulario.reset();
        }
    });
}

const btnTopo = document.createElement('button');
btnTopo.innerHTML = '↑';
btnTopo.id = 'btnTopo';
btnTopo.className = 'btn-topo';
document.body.appendChild(btnTopo);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        btnTopo.classList.add('mostrar');
    } else {
        btnTopo.classList.remove('mostrar');
    }
});

btnTopo.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const cards = document.querySelectorAll('.meu-card');

cards.forEach(function(card) {
    // Quando o mouse entra no card
    card.addEventListener('mouseenter', function() {
        card.classList.add('card-destaque-js');
    });

    // Quando o mouse sai do card
    card.addEventListener('mouseleave', function() {
        card.classList.remove('card-destaque-js');
    });
});