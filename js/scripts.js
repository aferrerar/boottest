document.getElementById('scan-button').addEventListener('click', function() {
    var button = this;
    if (button.classList.contains('btn-success')) {
        button.classList.remove('btn-success');
        button.classList.add('btn-danger');
        button.textContent = 'STOP';
    } else {
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');
        button.textContent = 'SCAN';
    }
});