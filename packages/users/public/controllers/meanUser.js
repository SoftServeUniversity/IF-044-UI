'use strict';
angular.module('mean.users')
    .controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$location',
        function($scope, $rootScope, $http, $location) {
            // This object will be filled by the form
            $scope.user = {};

            // Register the login() function
            $scope.login = function() {
                $http.post('/login', {
                    email: $scope.user.email,
                    password: $scope.user.password
                })
                    .success(function(response) {
                        // authentication OK
                        $scope.loginError = 0;
                        $rootScope.user = response.user;
                        $rootScope.$emit('loggedin');
                        if (response.redirect) {
                            if (window.location.href === response.redirect) {
                                //This is so an admin user will get full admin page
                                window.location.reload();
                            } else {
                                window.location = response.redirect;
                            }
                        } else {
                            $location.url('/');
                        }
                    })
                    .error(function() {
                        $scope.loginerror = 'Authentication failed.';
                    });
            };
        }
    ])
    .controller('RegisterCtrl', ['$scope', '$rootScope', '$http', '$location',
        function($scope, $rootScope, $http, $location) {
            $scope.user = {};
                $scope.captcha = Math.ceil(Math.random() * 9999);
            
            $scope.register = function() {
                
                $scope.usernameError = null;
                $scope.registerError = null;
                $http.post('/register', {
                    first_name: $scope.user.first_name,
                    last_name: $scope.user.last_name,
                    password: $scope.user.password,
                    confirmPassword: $scope.user.confirmPassword,
                    username: $scope.user.username,
                    email: $scope.user.email,
                    birthday: $scope.user.birthday,
                    org_troop: $scope.user.org_troop,
                    org_region: $scope.user.org_region,
                    org_level: $scope.user.org_level,
                    txtCaptchaDiv: $scope.captcha,
                    txtInput: $scope.user.txtInput
                })
                    .success(function() {
                        // authentication OK
                        $scope.registerError = 0;
                        $rootScope.user = $scope.user;
                        $rootScope.$emit('loggedin');
                        $location.url('/');
                    })
                    .error(function(error) {
                        // Error: authentication failed
                        if (error === 'Username already taken') {
                            $scope.usernameError = error;
                        } else {
                            $scope.registerError = error;
                        }
                    });
            };
        }
    ]);
