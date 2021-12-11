window.onload = function(){
    emailjs.init("user_fl2DzoP3KmDSNmyvJjKTb");
}

function sendMail(){

    document.getElementsByClassName('overlay')[0].style.display = 'block';
    document.getElementsByClassName('modal')[0].style.display = 'block';

    const tempParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    }

    let name = document.getElementById('name').value;

    if([name].includes('')){
        var msgModal = document.getElementById('msgModal');
        msgModal.innerHTML += "Por favor inserir seu nome!";
    }else{
        emailjs.send('loadcodeEmail', 'template_ona7dnb', tempParams)
        .then(function(res){
            console.log("email enviado com sucesso", res.status);
            document.getElementById('msgModal').innerHTML = "Mensagem enviada com sucesso!";
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('company').value = '';
            document.getElementById('message').value = '';
        })
        .catch(function(err){
            var msgModal = document.getElementById('msgModal');
            msgModal.innerHTML += "Algo deu errado, tente novamente mais tarde!";
        })
    }
  
}