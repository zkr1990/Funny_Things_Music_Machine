Router.configure({
	layoutTemplate: 'layout'
});
Router.route('/', function () {
	this.render("navbar", {to:"navbar"});
	this.render("home", {to:"home"});
});
Router.route('/machine', function () {
	this.render("navbar", {to:"navbar"});
	this.render("playground", {to:"home"});  
});
