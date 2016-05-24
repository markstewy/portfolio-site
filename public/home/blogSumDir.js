angular.module( "app" ).directive( "blogSumDir", function () {

     return {
       // scope: {
       //    templHtmlName: '=passToDirName'
       // },
       templateUrl: './home/blogSum.html',
       restrict: 'E',   //link: function(scope, element, attr) {}, scope: {}   **also optoins,
      //  link: function(scope, element, attribute) {},
       controller: 'postCtrl'
     };

  });
