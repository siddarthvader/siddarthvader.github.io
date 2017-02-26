vapp.controller('playgroundCtrl', ['$scope', '$rootScope', '$state', '$ionicScrollDelegate', '$cordovaCamera', function ($scope, $rootScope, $state, $ionicScrollDelegate, $cordovaCamera) {

    $scope.takeImage = function () {
        var options = {
            quality: 80,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 250,
            targetHeight: 250,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            $scope.srcImage = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            // error
        });
    }

    $scope.goToProduct = function () {
        $state.go('product');
    };

}]);