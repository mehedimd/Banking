document.querySelector('#loginBtn').addEventListener('click', function(){
    
    let email = document.querySelector('#email').value;
    let pass  = document.querySelector('#pass').value;

    if(email === 'mehedi@gmail.com' && pass === '12345'){
        window.location.href = 'details.html';
    }
    else{
        alert('Please Enter Valid Email or Password');
    }
})