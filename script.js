function addNewRegister() {
    const macchinaInput = document.querySelector('.new input[placeholder="Nome macchina..."]');
    const temperaturaInput = document.querySelector('.new input[placeholder="Temperatura..."]');
    const container = document.querySelector('.container');

    const macchina = macchinaInput.value.trim();
    const temperatura = temperaturaInput.value.trim();

    if (macchina === '' || temperatura === '') {
        alert('Per favore compila tutti i campi');
        return;
    }

    const newRegister = document.createElement('div');
    newRegister.className = 'register';
    newRegister.innerHTML = `
        <div class="macchina">${macchina}</div>
        <div class="temperatura">${temperatura}</div>
    `;

    container.appendChild(newRegister);

    macchinaInput.value = '';
    temperaturaInput.value = '';
    macchinaInput.focus();
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.new button');
    button.addEventListener('click', addNewRegister);

    const inputs = document.querySelectorAll('.new input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addNewRegister();
            }
        });
    });
});
