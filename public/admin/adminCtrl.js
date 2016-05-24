angular.module("app").controller("adminCtrl", function($scope, postService) {

$scope.addpost = function(post) {
   postService.addPost(post);
}

});
