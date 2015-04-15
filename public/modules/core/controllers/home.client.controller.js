'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
    function ($scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
    }
]).directive('dropzone', function () {
   return {
       link: function (scope, element, attr) {
           element.on('dragover', function (evt) {
               evt.stopPropagation();
               evt.preventDefault();
               evt.dataTransfer.dropEffect = 'copy';
           });
           element.on('drop', function (evt) {
               evt.stopPropagation();
               evt.preventDefault();

               var files = evt.dataTransfer.files;
               var formData = new FormData();
               for (var i = 0; i < files.length; i++) {
                   formData.append('file', files[i]);
               }

               // now post a new XHR request
               var xhr = new XMLHttpRequest();
               xhr.open('POST', '/uploadtest');
               xhr.onload = function () {
                   if (xhr.status === 200) {
                       console.log('all done: ' + xhr.status);
                   } else {
                       console.log('Something went terribly wrong...' + xhr.status);
                   }
               };
               xhr.send(formData);
           });
       }
   };
});
