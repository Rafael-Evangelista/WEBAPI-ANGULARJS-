funcionarioApp.service('funcionarioService', function ($http) {

        this.getTodosFuncionarios = function () { 
        return $http({
                method: 'GET',
                url: 'http://localhost:50142/api/Funcionarios',
                dataType: 'jsonp',
                headers: { 'Authorization': 'Token token=xxxxYYYYZzzz' }
            });
    }

    //this.getTodosFuncionarios = function () {
    //    return $http.get("api/Funcionarios");
    //}

});

