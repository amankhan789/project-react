

const Validation_login = (userLogin) => {

    let errors = {};
    if(!userLogin.password){
        errors.password="Password is required"
    }else if(userLogin.password.length < 5){
        errors.password="Password must be at least 5 chars long";
    }else if (!userLogin.email) {
        errors.email = "Invalid email";    
    }

};

export default Validation_login;