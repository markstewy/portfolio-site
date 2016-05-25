angular.module("app").controller("postCtrl", function($scope, postService) {

    $scope.getPosts = function() {
        postService.getPostData()
            .then(function(res) {
                $scope.posts = res.reverse();

            })
    }
    $scope.getPosts();

    $scope.getProjects = function() {
      postService.getProjectData()
           .then(function(res) {
             console.log(res)
               $scope.projects = res.reverse();

           })
  }
  $scope.getProjects();


    $scope.deletePost = function(trashID) {
       postService.deletePost(trashID);
    }


}); //end of ctrl
