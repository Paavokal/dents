Ext.define('Dents.store.ProductStore', {
    extend: 'Ext.data.Store',
    requires: 'Dents.model.Product',
    model: 'Dents.model.Product',
    id:'productStore',
    autoLoad: true
});