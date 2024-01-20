// script.js
window.addEventListener('DOMContentLoaded', (event) => {
    var figcaptions = document.querySelectorAll('figcaption');

    figcaptions.forEach(function(figcaption) {
        figcaption.addEventListener('click', function() {
            var currentText = this.textContent;
            var input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            this.textContent = '';
            this.appendChild(input);
            input.focus();

            input.addEventListener('blur', function() {
                var newText = this.value;
                this.parentElement.textContent = newText;
            });
        });
    });
});