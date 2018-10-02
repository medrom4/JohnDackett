(function() {

    var pwd = document.getElementById('pwd');
    var chk = document.getElementById('showPwd');

    addEvent(chk, 'change', function(e) {
        var target = e.target || e.srcElement;
        try {
            if (target.checked) {
                pwd.type = 'text';
            }
            else {
                pwd.type = 'password';
            }
        }
        catch (error) {
            alert('Браузер не умеет переключать типы');
        }
    });

    var form = document.getElementById('login');

    addEvent(form, 'submit', function(e) {
        e.preventDefault();
        var elements = this.elements;
        var username = elements.username.value;
        var msg = 'Welcome, ' + username;
        document.getElementById('main').textContent = msg;
    });
}());
