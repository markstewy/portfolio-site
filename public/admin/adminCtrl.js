angular.module("app").controller("adminCtrl", function($scope, postService) {

$scope.post={};

$scope.addpost = function(post) {
   postService.addPost(post);
}

$scope.addproject = function(post) {
   postService.addProject(post);
}

$scope.deletePost = function(trashID) {
   postService.deletePost(trashID);
}

// $scope.deleteProject = function(trashID) {
//    postService.deleteProject(trashID);
// }

//==============================================================================
//simplemde plugin
var simplemde = new SimpleMDE({ element: $("#MyID")[0] });
simplemde.codemirror.on("change", function() {
   // console.log(simplemde.value());
   $scope.post.fullpost = simplemde.value();
})
//==============================================================================

});
