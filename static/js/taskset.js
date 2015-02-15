(function(window) {
    var CyclicX = angular.module('CyclicX', []);
    // dominion.directive('shortcut', function() {
    //     return {
    //         restrict: 'E',
    //         replace: true,
    //         scope: true,
    //         link: function postLink(scope, iElement, iAttrs) {
    //             jQuery(document).on('keypress', function(e) {
    //                 scope.$apply(scope.keyPressed(e));
    //             });
    //         }
    //     };
    // });

    window.taskController = function($scope){


    };





    window.taskCreator = function($scope, $http){
        $scope.tasks = [];
        $scope.taskNames = [];
        $scope.nameExists = ""
        $scope.dateMessage = "";
        $scope.enjoyment = 0;
        var d = new Date();
        var month = d.getMonth() + 1;
        $scope.todaysDate = new Date(d.getFullYear()+"-"+month+"-"+d.getDate());

        $scope.maxDate = new Date(d.getFullYear()+10+"-"+month+"-"+d.getDate());

        $scope.test = function(){
            alert("you clicked it!");

        };

        $scope.addTask = function () {
            var taskDate = new Date($scope.deadline);
            if (taskDate < $scope.todaysDate||
                taskDate > $scope.maxDate){
                    $scope.dateMessage = "Date Invalid";
                    console.log("date wrong");
                return;
            }
            $scope.dateMessage = "";
            console.log($scope.taskNames.indexOf($scope.taskName));
            if ($scope.taskNames.indexOf($scope.taskName) >= 0){
                $scope.nameExists = "Name Already Taken"
                return;
            }
            $scope.taskNames.push($scope.taskName);
            $scope.nameExists = "";

            $scope.tasks.push({name:$scope.taskName,
                 deadline:$scope.deadline,
                 executionTime:$scope.executionTime,
                 kind:$scope.kind,
                 enjoyment:$scope.enjoyment,
                 date:taskDate});

         };


        $scope.endTurn = function(){
            $http.post('/endTurn/'+window.gameid).success(
                function(data){
                    $scope.updateState();
                });
        };



    };
})(window);
