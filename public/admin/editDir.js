angular.module( "app" ).directive( "editDir", function () {

     return {
       // scope: {
       //    templHtmlName: '=passToDirName'
       // },
       template: "<div ng-repeat='post in posts'><div>{{post.title}}</div><div>{{post._id}}</div><br></div>",
       restrict: 'E',   //link: function(scope, element, attr) {}, scope: {}   **also optoins,
      //  link: function(scope, element, attribute) {},
       controller: 'postCtrl'
     };

  });
