function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login =="kaike.rb3@gmail.com" && senha == "direx@123"){
        alert('Bem vindo Kaike Ribeiro');
        location.href="acesso.html"

    }else if(login =="adriana.alves" && senha == "Adriana@123"){
        alert('Bem vinda Adriana Alves');
        location.href="acessodri.html"
    }
    else if(login =="michael" && senha == "Mikadopoder@123"){
        alert('Bem vindo Mika');
        location.href="acessomika.html"
    }
    else if(login =="ayrton" && senha == "Ayrtonger@123"){
        alert('Bem vindo Ayrton');
        location.href="acessoay.html"
    }
    else if(login =="thyessa" && senha == "Thyessa@123"){
        alert('Bem vindo Mika');
        location.href="acessomika.html"
    }
    else if(login =="Amaro" && senha == "Amaro@123"){
        alert('Bem vindo Amaro');
        location.href="index.html"
    }

    else{
        alert('Usuario ou senha incorretos');
    }
}