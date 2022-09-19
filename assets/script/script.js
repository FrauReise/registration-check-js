let validateName = (nameField) => {
    let nameFormat = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
    if (nameField.match(nameFormat)) {
        return true;
    }
    else {
        alert("Ведите корректное имя!)");
        document.getElementById('formGroupName').value = "";
        return false;
    }
}


let validateNickName = (nickNameField) => {
    let nickNameFormat = /^[a-z0-9_-]{3,16}$/;
    if (nickNameField.match(nickNameFormat)) {
        return true;
    }
    else {
        alert("Ведите корректный никнейм.Допустимы только строчные латинские буквы, цифры, нижнее подчеркивание, тире.Количество символов от 3-16)");
        document.getElementById('formGroupNickname').value = "";
        return false;
    }
}

let validateEmail = (emailField) => {
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (emailField.match(mailFormat)) {
        return true;
    }
    else {
        alert("Адрес электронной почты введен неверно!Пример: space-post006@mail.com");
        document.getElementById('exampleInputEmail').value = "";
        return false;
    }
}

let validatePassword = (passwordField) => {
    let passwordFormat = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (passwordField.match(passwordFormat)) {
        return true;
    }
    else {
        alert("Проверьте пароль!Он должен содержать строчные и прописные латинские буквы, цифры, спецсимволы" );
        document.getElementById('exampleInputPassword1').value = "";
        document.getElementById('showInputPassword').checked = false;
        document.querySelector('.password').type = 'password';
        return false;
    }
    
}

let validatePhone = (phoneField) => {
    let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
    if (phoneField.match(phoneFormat)) {
        return true;
    }
    else {
        alert("Проверьте корректность номера телефона!Пример: +7 xxx xxx xx xx" );
        document.getElementById('exampleInputPhone').value = ""
        return false;
    }
}

const check = () => {
    let name = document.getElementById('formGroupName').value;
    let nickName = document.getElementById('formGroupNickname').value;
    let email = document.getElementById('exampleInputEmail').value;
    let password = document.getElementById('exampleInputPassword1').value;
    let tel = document.getElementById('exampleInputPhone').value;
    
    if(validateNickName(nickName) == false){
        return;
    } else if(validateName(name) == false){
        return;   
    } else if(validateEmail(email) == false){
        return;
    } else if(validatePassword(password) == false){
        return;
    } else if(validatePhone(phone) == false){
        return;
    } else {
        alert(`Добро пожаловать, ${nickName}!`);
    }
    
    document.getElementById('formGroupName').value = "";
    document.getElementById('formGroupNickname').value = "";
    document.getElementById('exampleInputEmail').value = "";
    document.getElementById('exampleInputPassword1').value = "";
    document.getElementById('exampleInputPhone').value = "";

}