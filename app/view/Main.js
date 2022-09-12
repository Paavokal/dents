Ext.define('Dents.view.Main', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.mainapp',
	tabPosition: 'bottom',
	title: 'Dents 0.1',
	renderTo: Ext.getBody(),

	requires:[
		'Dents.view.ProductInfo',
		'Dents.view.ProductSearch',
		'Dents.view.ProductList',
		'Dents.store.ProductStore',
	],


	initComponent: function() {
		this.createMenu();
		this.callParent();
	},

	items: [
		{
			title: 'Tuotekysely',
			items:[{
				xtype:'panel',
				items:[{
					xtype: 'productsearch',			
					},{
					xtype:'productinfo',
					}
				],
			}],
		},
		{
			title: 'Tuotteet',
			items:[
				{
					xtype:'productlist'

			}],


		}
	],

	createMenu: function(){
		
		var menu = Ext.create('Ext.menu.Menu');
        var store = Ext.data.StoreManager.lookup('ProductStore');

		store.load(function(records){
			Ext.each(records, function(record){
				menu.add({text: record.raw.productcode})
			})
		})

		this.tools = [{
			xtype: 'button',
			text: 'Menu',
			floating: false,
			renderTo: Ext.getBody(),
			menu: [
				{
					text:'tuotteet',
					menu:menu,
					hideOnClick:false,
				},
				{
					//kirjaudu ulos
					text: 'Kirjaudu ulos',
					handler: function() {
					localStorage.removeItem("DentsLoggedIn");
					window.location.reload();
					}
				}
			]

		  }];



		

	}
	
});




