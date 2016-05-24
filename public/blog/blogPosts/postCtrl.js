angular.module("app").controller("postCtrl", function($scope, postService) {

    var random = function(min, max) {
        return Math.random() * (max - min) + min;
    };


    //=====================promise for when mongo is up ===================
    $scope.getPosts = function() {
        postService.getPostData()
            .then(function(res) {
               console.log(res)
                $scope.posts = res.reverse();

            })
    }
    $scope.getPosts();

}); //end of ctrl
