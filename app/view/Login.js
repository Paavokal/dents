Ext.define('Dents.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.loginwindow',

	bodyPadding: 10,
	title: 'Kirjaudu',
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
				fieldLabel:'Käyttäjätunnus:',
				allowBlank: false,
				padding:'10 10 0 10'
				
			},
			{
				xtype: 'textfield',
				name: 'password',
				id: 'password',
				fieldLabel:'Salasana:',
				allowBlank: false,
				padding:'0 0 0 10',
				inputType: 'password',

			},
			{
				xtype:'displayfield',
				value:'paavo/paavo',
				fieldStyle: 'color: #00000045;',
				padding:'0 0 0 200'
			}
			],

			buttons:[
			{
				text:'Kirjaudu',
				
				handler: function() {

					//haetaan form, jos OK, lähetetään POST palvelimelle
					var form = this.up('form').getForm()
					if(form.isValid()) {
						form.submit({
							url:'php/loginservice.php',
							method:'POST',

							success: function(form, action) {
								localStorage.setItem("DentsLoggedIn", true);
								window.location.reload();	
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