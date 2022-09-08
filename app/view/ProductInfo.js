Ext.define('Dents.view.ProductInfo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.productinfo',
    tpl: '<h1>Tuote: {artist}</h1><p>{description}</p>',

    initComponent: function() {
        this.dockedItems = [{
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'end'
            },
            height: 100,
            items: [{
                xtype: 'component',
                width: 200,
                itemId: 'productinformation',
                tpl: '<h2>{productname}</h2><h1>{energy}</h1><h2>{weight}</h2>'
            }]
        }];

        this.callParent();
    },

    
    update: function(data) {
        this.down('#productinformation').update(data);

    }

});