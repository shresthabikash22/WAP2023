document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        var firstName = document.querySelector('input[name="fname"]').value;
        var lastName = document.querySelector('input[name="lname"]').value;
        var address = document.querySelector('input[name="address"]').value;
        var contact = document.querySelector('input[name="contact"]').value;

        if (firstName === '' || lastName === '' || address === '' || contact === '') {
            alert('All fields must be filled out');
            return false;
        }


        return true;
    }
});
