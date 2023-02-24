const regexName = /\d/i;
const regexPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$');
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


function isCharNumber(c) {
    return c >= '0' && c <= '9';
}



export const validate = (form) => {
    
  const errors = {};
    
    

    if(  form.password.length > 15 || form.password.length < 3 )
      errors.password = "Type password at least 3 characters, less than 15 ";

    if(  form.Nickname.length > 22 || form.Nickname.length < 3 || regexName.test(form.Nickname))
      errors.Nickname = "Type nickname at least 3 characters, less than 22 ";

    if (!regexEmail.test(form.email)) 
        errors.email  = 'Type a valid email ';
    
    if (form.password){
            let num = false ;
            for (let i = 0; i < form.password.length; i++) {
              const element = form.password.charAt(i) ;
              if (isCharNumber(element)) {
                 num = true
              }
            }
            if (!num) {
              errors.password =  'Must have at least one number'
            }               
        }

        if (form.password !== form.password2) 
        errors.password2  = 'Password is not matching';


    //console.log(errors)
    return errors
}
