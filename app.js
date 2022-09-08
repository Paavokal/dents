Ext.application({
    name: 'Dents',
    
	requires: [
        'Dents.view.Login',
		'Dents.view.Main'
    ],
    
    controllers: ['Product'],
    models: ['Product'],
    stores: ['ProductStore'],

	
    launch: function() {
		var loggedIn;
        loggedIn = localStorage.getItem("DentsLoggedIn");
	
		
		Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: loggedIn ? 'mainapp' : 'loginwindow'
            },

    
        });

    }
});