let btn = document.getElementById('btn');
let inp = document.getElementsByClassName('inp');
let msgName = document.querySelector('.msg-name');
let msgEmail = document.querySelector('.msg-email');
let msgPhone = document.querySelector('.msg-phone');
let succesmsg = document.querySelector('.success-msg');
let errorMsgArray = Array.from(document.querySelectorAll('.err-msg'))
let inpArray = Array.from(inp)

let [name, email, phone, msg] = inpArray;


btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (name.value.length <= 0) {
        msgName.innerHTML = '* Name Field can not be Empty';
        return false;
    }

    if (name.value.length >= 0) msgName.innerHTML = '';

    if (email.value.length <= 0) {
        msgEmail.innerText = '* Email Lenght must be greater than 3 characters';
        return false;
    }

    if (email.value.charAt(email.value.length - 4) != '.' && email.value.charAt(email.value.length - 3) != '.') {
        msgEmail.innerText = '* Invalid Dot (.) Placed';
        return false;
    }

    if (email.value.length >= 0) msgEmail.innerText = '';

    if (phone.value.length < 10 || phone.value.length > 10) {
        msgPhone.innerText = '* Minimum and Maximum 10 Characters Required!';
        return false;
    }


    else {
        succesmsg.innerHTML = 'Succesfully Submitted';

        let templateParams = {
            from_name: name.value,
            from_email: email.value,
            from_phone: phone.value,
            message: !msg.value ? 'no message' : msg.value
        };
        // console.log(templateParams.from_name, 'tempParam')
        let serviceID = 'service_1aegxhe';
        let templateID = 'template_57q2vpn';
        emailjs.send(serviceID, templateID, templateParams).then(
            response => console.log('SUCCESS!', response.status, response.text),
            error => console.log('FAILED...', error),
        )

        errorMsgArray.map(elem => elem.style.display = 'none');
        inpArray.map(elem => elem.value = '');

        let time = 3000;
        setTimeout(() => succesmsg.innerHTML = '', time)
        setTimeout(() => window.location.reload(), time * 1.5)

        return true;

    }

})

// console.log(emailjs)