Ext.define('Dents.controller.Product', {
    extend: 'Ext.app.Controller',
    alias:'controller.product',

    // selector sama kuin ComponentQuery() -> ref
    refs: [{
        ref: 'productInfo',         // getProductInfo()
        selector: 'productinfo'
    }, {
        ref: 'productSearch',
        selector: 'productsearch'
    },{
        ref: 'productList',
        selector: 'productlist'
    },{
        ref: 'menu',
        selector: 'menu'
    },{
        ref: 'productFilter',
        selector: 'productfilter'
    }],
    
    // Määritellään eventtien hallinnat
    init: function() {
        this.control({
            'productsearch > fieldcontainer > button': {
                click: this.searchProduct
            },
            'productlist': {
                itemdblclick: this.searchByGrid
            },
            'menu': {
                click : this.menuClick
            },
            '#btnFilter':{
                click: this.gridFilter
            },
            '#btnResetFilter':{
                click: this.resetFilter   
            },

        });

        this.listen({
            component:{
                'textfield[itemId=searchcode]':{
                    specialkey: this.enterSearch
                },
                'textfield[itemId=filterByName], textfield[itemId=filterByWeightMin], textfield[itemId=filterByWeightMax]':{
                    specialkey: this.enterFilter
                }
            }
        }) 

    },

    // TUOTEHAKU
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

                //Päivitetään data tuoteinfo paneliin
                if (text.totalCount > 0) { 
                    pi.up('panel').show();
                    pi.update(text.results[0])  
                    img.setSrc('resources/' + text.results[0].productcode + '.png') 
                }
                else{
                    pi.up('panel').hide(); // Piiloitetaan tuoteinfo, jos ei löydy mitään
                    
                }
            }
        });
    },

    // TUOTELISTAN TUPLAKLIKKAUS
    searchByGrid: function(grid, record) {
        var search = record.data.productcode
        var form = Ext.ComponentQuery.query('productsearch')[0]; 
        var textField = Ext.ComponentQuery.query('#searchcode')[0]; 
        var btn = form.down('button') //nappi

        //Vaihdetaan tuotekysely-välilehti aktiiviseksi
        var main = Ext.ComponentQuery.query('mainapp')[0];
        main.setActiveTab(0);

        //Tuotehakuun klikattu koodi ja painetaan nappia
        textField.setValue(search)
        btn.btnEl.dom.click();
    },

    // MENUN KLIKKAUS
    menuClick: function(item, record) {

        //Ei tehdä mitään, jos klikataan submenua
        if(record.text === 'Tuotteet' || record.text === 'Kirjaudu ulos'){
            console.log('Älä tee mitään')
        }

        //Tuotekoodeja klikatessa tapahtuuu
        else
        {    
        var search = record.text
        var form = Ext.ComponentQuery.query('productsearch')[0]; 
        var textField = Ext.ComponentQuery.query('#searchcode')[0]; 
        var btn = form.down('button') 

        var main = Ext.ComponentQuery.query('mainapp')[0]; 
        main.setActiveTab(0);

        textField.setValue(search) 
        btn.btnEl.dom.click();  

        }
    },
    
    // FILTTERIN TOIMINNOT
    gridFilter: function() {
        var nameFilter = this.getProductFilter().down('#filterByName').getValue(),
            minFilter = this.getProductFilter().down('#filterByWeightMin').getValue(),
            maxFilter = this.getProductFilter().down('#filterByWeightMax').getValue();

        var store = Ext.data.StoreManager.lookup('ProductStore');

        //tyhjennetään filtteri ennen uusia 
        store.clearFilter();
        
        store.filterBy(function(record, id){
            if((record.get('productname').toLowerCase().indexOf(nameFilter.toLowerCase()) > -1) // nimi filtteri
                && (record.get("weight") >= (minFilter ? minFilter : 0) && record.get("weight") <= (maxFilter ? maxFilter : 99999))) //paino filtteri
            {
            return true;
            } 
            return false;
        });
      
    },

    // FILTTERIN RESETOINTI
    resetFilter: function() {
        var fc = this.getProductFilter().getForm();
        fc.reset();
        var store = Ext.data.StoreManager.lookup('ProductStore');
        store.clearFilter();
  
    },
    
    enterSearch: function(field, e) {
        if (e.getKey() == e.ENTER){ 
            var btn = this.getProductSearch().down('button') 
            btn.btnEl.dom.click();  
            
        }
    },
    enterFilter: function(field, e) {
        if (e.getKey() == e.ENTER){
            var btn = this.getProductFilter().down('#btnFilter') 
            btn.btnEl.dom.click();     
        }
    }


            

        
    



    
    
});