vapp.controller('productCtrl', ['$scope','$rootScope','$state','$ionicScrollDelegate', function ($scope,$rootScope,$state,$ionicScrollDelegate) {
    var header = this;
        $ionicScrollDelegate.scrollTop(true);

    $scope.text = 'Powered by Bailfire Labs';
    $scope.proData=$rootScope.product;

    $scope.specType=[
        {
            "dataKey":"category",
            "displayTxt":"Category"
            
        },
        {
            "dataKey":"subCategory",
            "displayTxt":"Sub Category"
            
        },{
            "dataKey":"proDimensions",
            "displayTxt":"Product Dimensions"
            
        },{
            "dataKey":"contents",
            "displayTxt":"Contents"
            
        },{
            "dataKey":"itemType",
            "displayTxt":"Item Type"
            
        },{
            "dataKey":"color",
            "displayTxt":"Color"
            
        },{
            "dataKey":"finish",
            "displayTxt":"Finishing"
            
        },{
            "dataKey":"washCare",
            "displayTxt":"Wash Care"
            
        },{
            "dataKey":"seller",
            "displayTxt":"Seller"
            
        },{
            "dataKey":"brand",
            "displayTxt":"Brand"
            
        },{
            "dataKey":"proWeight",
            "displayTxt":"Weight"
            
        },
        {
            "dataKey":"packWeight",
            "displayTxt":"Packaging Weight"    
        },
        {
            "dataKey":"length",
            "displayTxt":"Length"    
        },
        {
            "dataKey":"height",
            "displayTxt":"width"    
        },
        {
            "dataKey":"dispatchTime",
            "displayTxt":"Dispatch Time"    
        },
        {
            "dataKey":"deliverTime",
            "displayTxt":"Delivery Time"    
        },
        {
            "dataKey":"deliveryArea",
            "displayTxt":"Delivery Area"    
        }
    ]
}]);