import validator from 'validator';

function validateEmail(email: string) {
    var validEmail = validator.isEmail(email);
    /**
     * TODO
     * Return a customizable error message here. 
     * Or, have a function to check if true, pass email is valid 
     * else, throw an error that email is not valid
    */
    // if (validEmail) {
    //     return { "message": "Email is valid" }
    // } else {
    //     return { "message": "Email is invalid" }
    // }
    return validEmail;
};

export default validateEmail;
