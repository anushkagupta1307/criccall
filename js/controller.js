app.controller("Cricctrl",function($scope,Cricfactory){
 $scope.showIt = false;
    $scope.searchByPid=function(){
        var playerId = $scope.PlayerId;
        var promise = Cricfactory.serverCall(playerId);
        promise.then(function(data){
            $scope.showIt=true;
            $scope.result = data;
        },function(error){
            $scope.error = error;
        })
    }



})