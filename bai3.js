var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){
 $scope.students=[
    {
        Fullname : "Lê Thị Bích Hiền",
        Birthday :"29-02-2004",
        Gender:"Nữ",
        Mark:"9",
        Photo:"./img/18198154_10208600482868814_3469513_n.webp"
    },
    {
     Fullname : "Phạm Ngọc Quỳnh",
    Birthday :"06-11-2004",
    Gender:"Nữ",
    Mark:"9",
    Photo:"./img/18198154_10208600482868814_3469513_n.webp"
    },  
    {
        Fullname : "Lý Gia Khang",
        Birthday :"10-11-2022",
        Gender:"Nam",
        Mark:"9",
        Photo:"./img/18198154_10208600482868814_3469513_n.webp"
    },
    {
        Fullname : "Dương Lê Ngọc Quỳnh",
        Birthday :"20-10-2014",
        Gender:"Nữ",
        Mark:"9",
        Photo:"./img/18198154_10208600482868814_3469513_n.webp"
    }
    

 ]
   
});