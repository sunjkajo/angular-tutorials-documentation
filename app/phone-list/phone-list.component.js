angular.module('phonecatApp')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$http',
            function PhoneListController($http) {
                var self = this;
                self.orderProp = 'age'; // inicijalizacija

                $http.get('phone-list/phones/phones.json').then(function(response) {
                    self.phones = response.data;
                });
            }
        ]
    });



