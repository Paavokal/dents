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
                name:'searchcode',
                itemId:'searchcode'     
            },
            {
                xtype: 'button',
                text: 'Hae',
            }

        ]
        						

    },{
        xtype:'displayfield',
        fieldStyle: 'color: #b78094;',
        value:'*Esim 6420256001547'
    }
    ]
});