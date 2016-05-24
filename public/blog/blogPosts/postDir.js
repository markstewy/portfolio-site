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
        controller: 'postCtrl'
    }; //end of return obj

    //end of directive
}); //=======================
