funcionarioApp.service('funcionarioService', function ($http) {

    this.getTodosFuncionarios = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:50142/api/Funcionarios',
            dataType: 'jsonp',
            headers: { 'Authorization': 'Token token=xxxxYYYYZzzz' }
        });
    }

    //var baseUrl = 'http://localhost:50142/api/Funcionarios';

    //this.getTodosFuncionarios = function () {
    //    return $http.get(baseUrl).then(function (response) {
    //        $scope.users = response.data;
    //    }, function (err) {
    //        console.log(err);
    //    });
    //}
});

