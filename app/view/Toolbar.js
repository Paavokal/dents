var tbar = Ext.define('Dents.view.Toolbar', { 
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.toolbar',
    id:'menuToolbar',    
    listeners: {
        beforerender: function() {
        var store = Ext.create('Ext.data.Store', {
             fields: ['productcode'],
             proxy: {
                  type: 'ajax',
                  url: 'php/products.php',
                  reader: {
                      type: 'json',
                      root: 'results'
                  }
             },
             autoLoad: true,
             listeners: {
                load: function(store,records,success,operation,opts) {
                     var toolbar = Ext.getCmp('menuToolbar');                               
                     store.each(function(record) {
                         var menu = Ext.create('Ext.menu.Menu');
                         Ext.each(record.raw.menu, function(item){
                             menu.add({
                                   text: item.productcode
                             })
                         });

                         toolbar.add({
                                xtype: 'button',
                                text: record.data.text,
                                menu: menu
                         });
                         this.callParent();
                     });
                  }
               }
          });
       }
    }
 });