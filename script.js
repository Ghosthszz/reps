function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    
    if (email === 'ghosthszz' && password === 'senha') {
        
        window.location.href = 'ghosthszz.html';

        function setPermissao() {
            document.cookie = "permission=granted; expires=session;";
        }

        setPermissao();

    } else {
        
        
        document.getElementById('error-msg').style.display = 'block';
    }
if (email === 'Thiago' && password === 'senha') {
      
        
        window.location.href = 'Thiago.html';

        function setPermissionCookie() {
            document.cookie = "permission=granted; expires=session;";
        }

        setPermissionCookie();

    } else {
        
        document.getElementById('error-msg').style.display = 'block';
    }
    
}
