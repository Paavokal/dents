Ext.define('Dents.view.ProductList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.productlist',    
    store: 'ProductStore',
    renderTo: Ext.getBody(),
    border:0,

    viewConfig: {
        listeners: {
            refresh: function(grid) {
                grid.panel.columns[1].autoSize();
            }
        }
    },

    
    initComponent: function() {

        this.columns = [

            {header: 'Tuotekoodi',  dataIndex: 'productcode'},
            {header: 'Nimi', dataIndex: 'productname'},
            {header: 'Paino (g)',  dataIndex: 'weight'},
            {header: 'Energia (kcal)',  dataIndex: 'energy'},
        ];

        
        
        this.callParent();
    }
    
});