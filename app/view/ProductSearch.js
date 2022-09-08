Ext.define('Dents.view.ProductSearch', {
    extend: 'Ext.form.Panel',
    alias: 'widget.productsearch',
    items:[{
        xtype: 'fieldcontainer',
        padding:'20',
        layout: 'column',
        items:[
            {
                xtype: 'textfield',
                fieldLabel: 'Tuotehaku',          
            },
            {
                xtype: 'button',
                text: 'Hae',
            }
        ]						

    }]
});