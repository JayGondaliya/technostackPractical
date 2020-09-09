
export default class Validation {
emailValidate (text, message= "Please enter email") {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(text == ""){
        return message
    }else if(!reg.test(text)){
        return "Please enter proper email"
    }
    return ""
}

passwordValidate (text, message= "Please enter password") {
    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(text == ""){
        return message
    }else if(!reg.test(text)){
        return "Please enter proper password"
    }
    return ""
}

}