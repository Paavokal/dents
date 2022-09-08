Ext.define('Dents.model.Product', {
    extend: 'Ext.data.Model',
    fields: ['id', 'productname', 'energy', 'weight', 'productcode'],

    proxy: {
        type: 'ajax',
        url: 'php/products.php',
        reader: {
            type: 'json',
            root: 'results'
        },
    }
});