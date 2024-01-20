var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){
$scope.students={};
$scope.xeploai=function(){
    var a=parseFloat($scope.students.Mark);
    if(a<5){
        $scope.students.xeploai="Không đạt";
    }
    else{
        $scope.students.xeploai="Đạt";
    }
}
})