Ext.define('Dents.view.ProductInfo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.productinfo',
    initComponent: function() {
        this.hide()
        this.items = [{
            xtype: 'container',
            layout: {
                type:'hbox'
            },
            margin: 10,
            padding:10,

            items: [{
                xtype: 'component',
                margin:'0 50 0 0',
                itemId: 'productinformation',
                tpl: '<h1>{productname}</h1> Tuotekoodi: {productcode} <br> Paino: {weight}g <br> Energia: {energy}g'
            },
            {
                xtype:'image',
                padding: 20,
                itemId:'tuotekuva',
                src:'',
                height:300,
  
            }
        ]
        }];

        this.callParent();
    },


});