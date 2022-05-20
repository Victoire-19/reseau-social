module.exports.signUpErros = (err) => {
    let errors = { pseudo: '', email: '', password: '' };
    if (err.message.includes('pseudo'))
        errors.pseudo = "Pseudo doit avoire au moins trois caracteres";

    if (err.message.includes('email'))
        errors.email = "Format du mail incorrect";

    if (err.message.includes('password'))
        errors.password = "Le mot de passe doit faire 6 caracteres au moins";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = "Ce Pseudo ne correspond pas "

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = "Cet mail ne correspond pas "

    return errors;
}

module.exports.signInErros = (err) => {
    let errors = { email: '', password: '' }

    if(err.message.includes('email'))
        errors.email=" Le mail est incorrect ";

    if(err.message.includes('password'))
        errors.password=" Le password est incorrect";
    
    return errors;   
}

module.exports.uploadErrors=(err)=>{
    let errors = {format: '', maxSize: ''}

    if(err.message.includes('invalide file'))
    errors.format="format invalide"

    if(err.message.includes('max size'))
    errors.maxSize="le fichier depasse 500k"

    return errors

}