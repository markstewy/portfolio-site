angular.module( "app" ).directive( "editDir", function () {

     return {
       // scope: {
       //    templHtmlName: '=passToDirName'
       // },
       template: "<div ng-repeat='post in posts'><div>{{post.title}}<button type='button' name='button' ng-click='deletePost(post._id)'>DELETE POST</button><br><br></div><br></div>",
       restrict: 'E',   //link: function(scope, element, attr) {}, scope: {}   **also optoins,
      //  link: function(scope, element, attribute) {},
       controller: 'postCtrl'
     };

  });
