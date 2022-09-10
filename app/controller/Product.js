Ext.define('Dents.controller.Product', {
    extend: 'Ext.app.Controller',
    alias:'controller.product',


    refs: [{
        ref: 'productInfo',
        selector: 'productinfo'
    }, {
        ref: 'productSearch',
        selector: 'productsearch'
    },{
        ref: 'productList',
        selector: 'productlist'
    }],
    

    init: function() {
        this.control({
            'productsearch > fieldcontainer > button': {
                click: this.searchProduct
            },
            'productlist': {
                itemdblclick: this.searchByGrid
            }

        });

        
    },

    searchProduct: function(button) {
        var search = button.up('form').getValues();

        //Pyyntö palvelimelle, parametreissa tuotekoodi
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

    searchByGrid: function(grid, record) {
        var search = record.data.productcode
        var form = Ext.ComponentQuery.query('productsearch')[0]; //form
        var textField = Ext.ComponentQuery.query('#searchcode')[0]; //tekstikenttä
        var btn = form.down('button') //nappi

        var main = Ext.ComponentQuery.query('mainapp')[0]; //main 
        main.setActiveTab(0);

        textField.setValue(search) //päivitetään tekstikenttä
        btn.btnEl.dom.click();  //klikataan hakunappia
    
 

    }


    
    
});