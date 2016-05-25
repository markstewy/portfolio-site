angular.module('app', ['ui.router', 'hc.marked'])
   .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
         .state('home', {
            url:'/home',
            templateUrl: './home/home.html',
            // controller: ''
         })
         .state('about', {
            url:'/about',
            templateUrl: './about/about.html',
            // controller: ''
         })
         .state('blog', {
            url:'/blog',
            templateUrl: './blog/blog.html',
            // controller: ''
         })
         .state('portfolio', {
            url:'/portfolio',
            templateUrl: './portfolio/portfolio.html',
            controller: 'postCtrl'
         })
         .state('contact', {
            url:'/contact',
            templateUrl: './contact/contact.html',
            // controller: ''
         })
         .state('contactThankYou', {
            url:'/contactThankYou',
            templateUrl: './contact/contactThankYou.html',
            // controller: ''
         })
         .state('admin', {
            url:'/admin',
            templateUrl: './admin/admin.html',
            controller: 'adminCtrl'
         })
         $urlRouterProvider.otherwise('/home');
         });
