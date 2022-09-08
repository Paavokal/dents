Ext.define('Dents.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.loginwindow',

	bodyPadding: 10,
	title: 'Login Window',
	closable: false,
	autoShow: true,

	
	items: [
		{	
			xtype:'form',
			items:[
			{
				xtype: 'textfield',
				name: 'username',
				id: 'username',
				fieldLabel:'Username',
				allowBlank: false
				
			},
			{
				xtype: 'textfield',
				name: 'password',
				id: 'password',
				fieldLabel:'Password',
				allowBlank: false
			}
			],
			buttons:[
			{
				text:'Login',
				handler: function() {
					var form = this.up('form').getForm()
					if(form.isValid()) {
						form.submit({
							url:'php/loginservice.php',
							method:'POST',

							success: function(form, action) {
								Ext.Msg.alert('Login', action.result.data);
								localStorage.setItem("DentsLoggedIn", true);

								//Suljetaan login-ikkuna ja avataan pääohjelma			
								var loginWin = Ext.ComponentQuery.query('loginwindow')[0];
								loginWin.destroy();
								
								var vp = Ext.ComponentQuery.query('viewport')[0];
								vp.add(Ext.widget('mainapp'));
								vp.doLayout();
							},

							failure: function(form, action) {
								Ext.Msg.alert('Login', action.result ? action.result.data : 'No response');
							}
						})
								
					}
				}
			}
			]

		},
	]
});