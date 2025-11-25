let btn = document.getElementById('btn');
let inp = document.getElementsByClassName('inp');
let msgName = document.querySelector('.msg-name');
let msgEmail = document.querySelector('.msg-email');
let msgPhone = document.querySelector('.msg-phone');
let succesmsg = document.querySelector('.success-msg');
let errorMsgArray = Array.from(document.querySelectorAll('.err-msg'))
let inpArray = Array.from(inp)
let [name, email, phone, msg] = inpArray;


name.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[0-9!@#$%^&*(),.?":{}|<>_\-\/\\\[\]`~+=;']/g, "");
    if (e.target.value.length > 20) e.target.value = e.target.value.slice(0, 20)
})

phone.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
    if (e.target.value.length > 10) e.target.value = e.target.value.slice(0, 10)
})


btn.addEventListener('click', async (e) => {
    e.preventDefault()
    // <span class="loader"></span>
    if (name.value.length <= 0) {
        msgName.innerHTML = '* Name Field can not be Empty';
        return false;
    }
    if (name.value.length >= 0) msgName.innerHTML = '';

    if (email.value.length <= 0) {
        msgEmail.innerText = '* Invalid Email';
        return false;
    }

    if (email.value.charAt(email.value.length - 4) != '.' && email.value.charAt(email.value.length - 3) != '.') {
        msgEmail.innerText = '* Invalid Email';
        return false;
    }

    if (email.value.length >= 0) msgEmail.innerText = '';

    if (phone.value.length < 10 || phone.value.length > 10) {
        msgPhone.innerText = '* Minimum and Maximum 10 Characters Required!';
        return false;
    }

    else {


        let templateParams = {
            from_name: name.value,
            from_email: email.value,
            from_phone: phone.value,
            message: !msg.value ? 'no message' : msg.value
        };
        // console.log(templateParams.from_name, 'tempParam')
        let serviceID = 'service_1aegxhe';
        let templateID = 'template_57q2vpn';
        // await emailjs.send(serviceID, templateID, templateParams).then(
        //     response => console.log('SUCCESS!', response.status, response.text),
        //     error => console.log('FAILED...', error),
        // )

        btn.setAttribute('disabled', true)
        btn.innerHTML = " <span class='loader'></span>"
        await emailjs.send(serviceID, templateID, templateParams)




        btn.removeAttribute('disabled')
        btn.innerHTML = "SUBMIT"

        succesmsg.innerHTML = 'Form submitted succesfully';

        errorMsgArray.map(elem => elem.style.display = 'none');
        inpArray.map(elem => elem.value = '');

        // let time = 3000;
        setTimeout(() => succesmsg.style.display = 'none', 2000)
        // setTimeout(() => succesmsg.innerHTML = '', time)
        // setTimeout(() => window.location.reload(), time * 1.5)
        return true;
    }




    // else {
    //     console.log('got this', this)
    //     console.log('btn', btn)
    // }





    // else {
    //     succesmsg.innerHTML = 'Form submitted succesfully';

    //     let templateParams = {
    //         from_name: name.value,
    //         from_email: email.value,
    //         from_phone: phone.value,
    //         message: !msg.value ? 'no message' : msg.value
    //     };
    //     // console.log(templateParams.from_name, 'tempParam')
    //     let serviceID = 'service_1aegxhe';
    //     let templateID = 'template_57q2vpn';
    //     emailjs.send(serviceID, templateID, templateParams).then(
    //         response => console.log('SUCCESS!', response.status, response.text),
    //         error => console.log('FAILED...', error),
    //     )

    //     errorMsgArray.map(elem => elem.style.display = 'none');
    //     inpArray.map(elem => elem.value = '');

    //     let time = 3000;
    //     setTimeout(() => succesmsg.innerHTML = '', time)
    //     setTimeout(() => window.location.reload(), time * 1.5)
    //     return true;
    // }
})

// console.log(emailjs)