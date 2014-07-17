
var cbButtonSwitch = angular.module( 'cbButtonSwitch', [] );

     cbButtonSwitch.controller('BtnAppContrl', ['$scope', function($scope, $element, $attrs, $transclude) {
        $scope.editMode = "off";
        $scope.align    = "centre"
      }]);

        cbButtonSwitch.directive( 'cbButtonSwitch', function () {

        return {
           /* restrict: 'EA',*/
            restrict: 'E',
            scope: {
         
                selected: '='
             /*   selected: 'cbSelectButton'*/

                   
            },

            link: function postLink( scope, element, attributes, controller ) {

                var buttons = element.find('button');             

                angular.forEach( buttons, function( button ) {

                                      
                    $(button).on( 'click', function(){
                        //alert("clicked off");
                        buttons.removeClass( 'btn-selected' );
                        $(button).addClass( 'btn-selected' );
                        scope.$apply( function() {
                            scope.selected = $(button).attr('id');    
                        });
                        
                        console.log(scope.selected, "selected button");

                    });



                     if ( $(button).attr('id') == scope.selected ) {
                        console.log( button );
                        $(button).addClass( 'btn-selected' );
                       

                    }



                });

                
            },          
        };  
    });

