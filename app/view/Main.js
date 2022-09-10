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
	
});
