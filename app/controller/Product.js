Ext.define('Dents.controller.Product', {
    extend: 'Ext.app.Controller',
    alias:'controller.product',


    refs: [{
        ref: 'productInfo',
        selector: 'productinfo'
    }, {
        ref: 'productSearch',
        selector: 'productsearch'
    }],

    init: function() {
        console.log('Controlleri up')
        this.control({
            'productsearch > fieldcontainer > button': {
                click: this.searchProduct
            }
        });

        
    },

    searchProduct: function(record) {
        console.log('clicked');
        var data = record ? record.data: {};
        this.getProductInfo().update(data);

    },
    
    
});