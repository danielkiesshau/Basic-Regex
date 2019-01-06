// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^\w{5,12}$/,
    email: /^.@.\.[a-z]{2,3}(\.[a-z]{2,3})?$/,
    password: /^[\w@-_]{8,20}$/,
    telephone: /^\d{11}$/,
    slug: /^([a-z\d-]){8,20}$/i,
};

function validate(field, regex) {    
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid'
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    }
    );
});