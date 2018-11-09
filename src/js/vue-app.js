'use strict';

var vueApp = new Vue({
    
    el : '#vueApp',

    created : function() {
        //this.fetchData();	
    },

    /*
    components : {
        'default-component' : 'default-component',
    },
    */

    data : {
        session : {
            profile : {
                id : 0,
            },
        },
        page : {

        },
    },

    computed : {
		full_name: function(){
			return this.first_name + this.last_name; //Вася Пупкин   
		},
	},

    methods : {
        
        // методы жизненного цикла
		beforeCreate : function() {

        },
		created : function() {

        },
		beforeMount : function() {

        },
		mounted : function() {

        },
		beforeUpdate : function() {

        },
		updated : function() {

        },
		beforeDestroy : function() {

        },
        destroyed : function() {

        },
        
        onBtn : function(item_id) {
			//if (event) {
			//	alert(event.target.tagName)
			//}
			//window.alert(item_id);
		},

        fetchData : function() {
			axios.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
				
				vueApp.profiles = response.data;
				
			});
        },

    },

});
