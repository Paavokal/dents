Ext.define('Dents.controller.Product', {
    extend: 'Ext.app.Controller',
    alias:'controller.product',


    refs: [{
        ref: 'productInfo',
        selector: 'productinfo'
    }, {
        ref: 'productSearch',
        selector: 'productsearch'
    }],

    init: function() {
        console.log('Controlleri up')
        this.control({
            'productsearch > fieldcontainer > button': {
                click: this.searchProduct
            }
        });

        
    },

    searchProduct: function(button) {
        var search = button.up('form').getValues();

        //Pyyntö palvelimelle, tuotekoodi parametreissä
        Ext.Ajax.request({
            url: 'php/productsearch.php',
            params: {
                productcode: search.searchcode
            },

            success: function(response){
                var text = Ext.decode(response.responseText);
                var pi = Ext.ComponentQuery.query('#productinformation')[0];
                var img = Ext.ComponentQuery.query('#tuotekuva')[0];

                if (text.totalCount > 0) { 
                    pi.up('panel').show();
                    pi.update(text.results[0])
                    img.setSrc('resources/' + text.results[0].productcode + '.png') //päivitetään tuotekuvan lähde
                }
                else{
                    pi.up('panel').hide(); // Piiloitetaan tuoteinfo, jos ei löydy mitään
                    
                }
            }
            
        });

    },
    
    
});