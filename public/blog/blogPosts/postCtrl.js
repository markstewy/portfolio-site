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
            //  console.log(res)
               $scope.projects = res.reverse();

           })
  }
  $scope.getProjects();


    $scope.deletePost = function(trashID) {
      // console.log(trashID)
       postService.deletePost(trashID);
    }

    $scope.deleteProject = function(trashID) {
      // console.log(trashID)
       postService.deleteProject(trashID);
    }



}); //end of ctrl
