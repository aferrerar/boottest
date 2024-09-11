// BUTTON SCAN/STOP
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

// COLOR PICKER MODAL
document.getElementById('fanalet-icon').addEventListener('click', function(event) {
	var myModal = new bootstrap.Modal(document.getElementById('colorPickerModal'));
	myModal.show();
});

(function () {
    $('#cp5d').colorpicker({
      inline: true
    });
    $('#cp5d_toggle').on('click', function () {
      var cp = $('#cp5d').colorpicker('colorpicker');
      if (cp.isEnabled()) {
        cp.disable();
      } else {
        cp.enable();
      }
    });
  });