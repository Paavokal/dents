Ext.define('Dents.view.ProductList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.productlist',    
    store: 'ProductStore',
    renderTo: Ext.getBody(),
    border:0,
 
    initComponent: function() {

        this.columns = [

            //kuva
            {header: '', dataIndex: 'productcode', width: 50, align:'center',
                renderer: function(value){
                    if(value){
                        return '<img height=16px src=resources/' + value + '.png />';
                    }
                    else{
                        // EI KUVAA SAATAVILLA
                    }
                }
            },

            {header: 'Tuotekoodi',  dataIndex: 'productcode', width: 150, menuDisabled:true},
            {header: 'Nimi', dataIndex: 'productname', width: 250, menuDisabled:true},
            {header: 'Paino (g)',  dataIndex: 'weight', width: 85, menuDisabled:true},
            {header: 'Energia (kcal)',  dataIndex: 'energy', width: 85, menuDisabled:true},
        ];

        this.callParent();
    }
    
});