

const Validation = (userRegistration) => {

    let errors = {};
    

    if(!userRegistration.password){
        errors.password="Password is required"
    }else if(userRegistration.password.length < 5){
        errors.password="Password must be at least 5 chars long";
    }else if (!userRegistration.email) {
        errors.email = "Invalid email";    
    }else if (!userRegistration.shop_name) {
        errors.shop_name = "Shop can not be blank";
    }else if (!userRegistration.api_key) {
        errors.api_key = "API Key can not be blank";
    }else if (!userRegistration.api_password) {
        errors.api_password = "API Password can not be blank";
    }else if (!userRegistration.api_url) {
        errors.api_url = "API URL can not be blank";
    }else if (!userRegistration.api_secret) {
        errors.api_secret = "API Secret can not be blank";
    }
    return errors;


};

export default Validation;
