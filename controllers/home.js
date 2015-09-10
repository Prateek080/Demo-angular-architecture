var app=angular.module('Test1')

app.controller('MainCtrl', ['$scope', 'API', function($scope, API){
      
      $scope.title="ewfwfwfw";

      API.getFeed().success(function(data) {
      	console.log(data);
        $scope.dataset = data;
      });

    }
    
  ]);

app.controller('AuthCtrl', ['$scope', 'API', function($scope, API){
      

      var user={username:"Rahul",password:"sinha"};
      var header={};

 
      


      API.checklogin(user)

      .success(function(data) {
        //$scope.dataset = data;
        console.log(data);
      })

      .error(function(data, status, headers, config)
      {
         console.log(status);

      })
    }
    
  ]);