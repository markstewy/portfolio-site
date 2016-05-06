angular.module('app').service('postService', function($http, $q) {

this.addPost = function(post){
   return $http.post('/api/posts', post).then(function(response){
      return response.data;
   },function (err){
      console.log(err);
   })
}

this.posts = [
   {
      title: "The Startup Bug",
      subtitle: "How working with startups changed my perspective and career path.",
      fullpost: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
   },
   {
      title: "Devmountain",
      subtitle: "My coding bootcamp experience.",
      fullpost: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
   },
   {
      title: "To VC or not to VC?",
      subtitle: "Cliff notes from my 5 years experience with startup / VC consulting.",
      fullpost: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
   },
   {
      title: "Javascript Logic",
      subtitle: "How Microsoft Excel prepared me to use javascript.",
      fullpost: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
   },
   {
      title: "Startup Options",
      subtitle: "What are they worth?",
      fullpost: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
   }
]

// var posts;
// this.simpleNoPromise = function() {
//    return posts;   //don't need to return var in function if it is directly on this.post[]
// };


// ================promise for when mongo is setup======================
// this.getPostData = function() {
//    var deferred = $q.defer();
//
//    $http({
//       method: 'GET',
//       url: '/some mongoURL'
//    }).then(function(response) {
//       deferred.resolve(response)
//       // console.log(response);   //narrow data scope
//    })
//    return deferred.promise;
// }
// ============================================================================


   //end of service
})
