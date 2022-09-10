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

	tbar: [
		'->', //spacer -> napit oikeaan reunaan
		{	
			text:'Menu',
			menu: {
					xtype:'menu',
					id:'itemMenu',
					items:[
						{text:'Nappi'},
						{text:'Nappi 2'}
					]
					
			}
		},
		{ 
			//kirjaudu ulos
			xtype: 'button', 
			text: 'Kirjaudu ulos',
			style:'background-color: #ffa9b6;',

			handler: function() {
				localStorage.removeItem("DentsLoggedIn");
				window.location.reload();
			}

			
		}
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
