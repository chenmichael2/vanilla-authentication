class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
    }

    
}

const form = document.querySelector(".loginForm");

if (form) {
    const fields = ["username", "password"];
    const validator = new Login (form, fields);
}