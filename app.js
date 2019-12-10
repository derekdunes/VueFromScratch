new Vue({
el: '#event',
data: {
age: '25'
}

});

new Vue({
	el: '#vue-app',
	data: {
		name : 'Derek',
		job : 'Ninja',
		website: 'www.thenetninja.co.uk',
		webTag: '<a href="www.thenetninja.co.uk">The Net Ninja Web</a>'
	},
	methods : {
		greet : function(time){
			return 'Good ' + time + ' ' + this.name;
		}
	}
})