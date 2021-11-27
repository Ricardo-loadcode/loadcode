window.onload = function(){
    emailjs.init("user_fl2DzoP3KmDSNmyvJjKTb");
}

function sendMail(){
    const tempParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    }

    emailjs.send('loadcodeEmail', 'template_ona7dnb', tempParams)
    .then(function(res){
        console.log("email enviado com sucesso", res.status);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('company').value = '';
        document.getElementById('message').value = '';
    });
}