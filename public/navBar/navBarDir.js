angular.module('app').directive('navBarDir', function() {

    return {
        // scope: {
        //
        // },
        restrict: 'E',
        templateUrl: '/navBar/navBar.html',
        // link: function(scope, element, attr) {
        //
        // },
        controller: function($scope) {

           //jquery hamburger menu
                $(document).ready(function() {

                    $(".cross").hide();
                    $(".menu").hide();
                    $(".hamburger").click(function() {
                        $(".menu").slideToggle("slow", function() {
                            $(".hamburger").hide();
                            $(".cross").show();
                        });
                    });

                    $(".cross").click(function() {
                        $(".menu").slideToggle("slow", function() {
                            $(".cross").hide();
                            $(".hamburger").show();
                        });
                    });

                });
            } //end jquery hamburger menu

    };
    //end of directive
});
