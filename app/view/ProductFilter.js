Ext.define('Dents.view.ProductFilter', {
    extend: 'Ext.form.Panel',
    alias: 'widget.productfilter',
    renderTo: Ext.getBody(),

    initComponent: function() {
    this.callParent();

    },

    items: [{
        xtype: 'fieldcontainer',
        padding:'20',
        layout: 'hbox',
        items:[
            {
                xtype: 'fieldcontainer',
                layout: 'vbox',
                margin: '0 0 0 30',
                items:[
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Nimi', 
                        name:'filterByName',
                        itemId:'filterByName', 
                        labelAlign:'right'    
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        margin: '0 0 0 160',
                        items:[

                            {       
                                xtype: 'button',
                                text: 'Rajaa',
                                itemId: 'btnFilter',
                            },
                            {       
                                xtype: 'button',
                                text: 'Tyhjennä',
                                itemId: 'btnResetFilter',
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldcontainer',
                layout: 'vbox',
                margin: '0 0 0 30',
                items:[
                    {
                        xtype: 'numberfield',
                        fieldLabel: 'Paino min:', 
                        name:'filterByWeightMin',
                        itemId:'filterByWeightMin',
                        labelAlign:'right',
                        width: 150,
                    },
                    {
                        xtype: 'numberfield',
                        fieldLabel: 'Paino max:', 
                        name:'filterByWeightMax',
                        itemId:'filterByWeightMax',
                        labelAlign:'right',
                        width: 150,      
                    },
                ]
            },
        ]                           
    }]


});