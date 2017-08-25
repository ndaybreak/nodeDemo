app.controller('headerCtrl', function($scope){
    $scope.angularItems = [
        {
            name: 'Data Binding',
            href: '#/dataBindTest'
        },
        {
            name: 'Directive Demo',
            href: '#/directiveTest'
        },
        {
            name: 'Service Demo',
            href: '#/serviceTest'
        },
        {
            name: 'Validate',
            href: '#/validate'
        }
    ]

    $scope.directiveItems = [
        {
            name: 'Scroll Demo',
            href: '#/scroll'
        },
        {
            name: 'Pica Pagination',
            href: '#/picaPagination'
        }
    ]
})
