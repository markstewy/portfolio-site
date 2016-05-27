angular.module('app').service('postService', function($http, $q) {

    this.addPost = function(post) {
      // console.log(post)
        return $http.post('/api/addposts', post).then(function(response) {
            return response.data;
        }, function(err) {
            // console.log(err);
        })
    };

    this.addProject = function(post) {
        return $http.post('/api/addprojects', post).then(function(response) {
            return response.data;
        }, function(err) {
            // console.log(err);
        })
    };

    this.getPostData = function() { //postCtrl
        return $http({
            method: 'GET',
            url: '/api/posts'
        }).then(function(res) {
            //   console.log(res);
            return res.data
        })
    };

    this.getProjectData = function() { //postCtrl
        return $http({
            method: 'GET',
            url: '/api/projects'
        }).then(function(res) {
            //   console.log(res);
            return res.data
        })
    };

    this.deletePost = function(trashID) { //adminCtrl
      //   console.log(trashID)
        return $http({
            method: 'DELETE',
            url: '/api/deletepost/' + trashID
        }).then(function(res) {
            return res.data;
        })
    };

    this.deleteProject = function(trashID) { //adminCtrl
        console.log(trashID)
        return $http({
            method: 'DELETE',
            url: '/api/deleteproject/' + trashID
        }).then(function(res) {
            return res.data;
        })
    };



    //end of service
})
