angular.module('app').directive('postDir', function() {

   return {
      // scope: {
      //
      // },
      restrict: 'E',
      templateUrl: '/blog/blogPosts/posts.html',
      // link: function(scope, element, attr) {
      //
      // },
      controller: function($scope, postService) {
      //=====================promise for when mongo is up ===================
      //    $scope.getPosts = function() {
      //       postService.getPostData()
      //       .then(function(res) {
      //          $scope.posts = res.data;
      //       })                                        //this is part of the promise that will be needed when pulling from a server
      //    }
      //    $scope.getPosts();
      //==========================================================================
         // $scope.getPosts = function() {
         //    $scope.posts = postService.posts;
         // }                                               //dont' need this function if this.post instead of var post =
         // $scope.getPosts();
// ========================================================================


$scope.posts = postService.posts;



         //    // end of controller
      }
   };//end of obj

   //end of directive
});//=======================
