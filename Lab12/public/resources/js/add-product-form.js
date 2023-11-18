document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let title = document.querySelector('input[name="title"]').value;
        let price = document.querySelector('input[name="price"]').value;

        if (title.trim() === '') {
            alert('Title must not be empty');
            return false;
        }

        if (isNaN(parseFloat(price)) || parseFloat(price) < 1) {
            alert('Please enter a valid price');
            return false;
        }

        return true;
    }
});
