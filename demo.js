var app = angular.module("appDemo",[]);
app.controller("ctrDemo",function($scope){
    $scope.number1=0;
     $scope.number2=0;
    $scope.sum=function(){
       $scope.chuvi=(parseInt($scope.number1) +parseInt($scope.number2))*2;
        
    };
    $scope.dientich=function(){
        $scope.dtich=parseInt($scope.number1) *parseInt($scope.number2);
    }
        
});