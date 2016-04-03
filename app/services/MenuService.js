var app = angular.module('inprovec');
app.factory('MenuService', function() {
    var _views = [
            {label:'Clientes', icon: 'people', separator: false},
            {label:'Vendedores', icon: 'shopping_cart', separator: false},
            {label:'Ventas', icon: 'shopping_basket', separator: false},
            {label:'Reportes', icon: 'show_chart', separator: false}
        ],
        _current = 'Clientes';

    function _getViews() {
        return _views;
    }

    function _getCurrent() {
        return _current;
    }

    function _setCurrent(current) {
        _current = current
    }

    return {
        getViews: _getViews,
        getCurrent: _getCurrent,
        setCurrent: _setCurrent
    };
});