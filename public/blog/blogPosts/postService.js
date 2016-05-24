angular.module('app').service('postService', function($http, $q) {

this.addPost = function(post){
   return $http.post('/api/addposts', post).then(function(response){
      return response.data;
   },function (err){
      console.log(err);
   })
}

this.getPostData = function() {
  return $http({
     method: 'GET',
     url: '/api/posts'
     }).then(function(res) {
      //   console.log(res);
        return res.data
        })
        };




   //end of service
})
