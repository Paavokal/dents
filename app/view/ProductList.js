Ext.define('Dents.view.ProductList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.productlist',    
    store: 'ProductStore',
    renderTo: Ext.getBody(),

    
    initComponent: function() {

        this.columns = [

            {header: 'Tuotekoodi',  dataIndex: 'productcode'},
            {header: 'Nimi', dataIndex: 'productname',width:100},
            {header: 'Paino',  dataIndex: 'weight'},
            {header: 'Energia',  dataIndex: 'energy'},
        ];
        
        this.callParent();
    }
    
});