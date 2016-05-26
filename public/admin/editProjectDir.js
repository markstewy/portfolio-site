angular.module( "app" ).directive( "editProjectDir", function () {

     return {
       // scope: {
       //    templHtmlName: '=passToDirName'
       // },
       template: "<div ng-repeat='project in projects'><div>{{project.title}}<button type='button' name='button' ng-click='deleteProject(project._id)'>DELETE PORTFOLIO PROJECT</button><br><br></div><br></div>",
       restrict: 'E',   //link: function(scope, element, attr) {}, scope: {}   **also optoins,
      //  link: function(scope, element, attribute) {},
       controller: 'postCtrl'
     };

  });
