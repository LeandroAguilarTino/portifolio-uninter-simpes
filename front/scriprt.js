document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnMessage');
    const display = document.getElementById('message');

    btn.addEventListener('click', () => {
        display.innerText = '¡Bienvenido! É um prazer ter você aqui.';
        display.style.opacity = '0';
        
        // Pequena animação de fade-in via JS
        setTimeout(() => {
            display.style.transition = 'opacity 0.5s';
            display.style.opacity = '1';
        }, 10);
    });
});
