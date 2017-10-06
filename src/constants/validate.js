
export function emailValidate(email){
    var reg_exp = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg_exp.test(email)){
        return true;
    }
    return false;
}

export function passwordConfirm(pass1, pass2){
    if (pass1 === pass2){
        return true;
    }
    return false;
}

export function passwordValidate(password){
    if (password.length >= 3) {
        return true;
    }
    return false;
}

export function fullnameValidate(name){
    if (name.indexOf(" ") > 0 && name.indexOf(" ") < name.length - 1){
        return true;
    }
    return false;
}

export const errorStyle = {
    border: 1,
    borderStyle: 'solid',
    borderColor: '#ac2d3f',
    backgroundColor: '#ecaeb6'
}
