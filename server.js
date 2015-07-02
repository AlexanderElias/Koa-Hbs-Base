/*
	Notes:
            This is a minimal template to quickly start using koa, koa-router, and koa-hbs.

*/
var router = require('koa-router')();
var hbs = require('koa-hbs');
var serve = require('koa-static');
var app = require('koa')();


// Registrar Views & Partials With Middleware
// Middleware must be defined before an instance of koa-router
app.use( hbs.middleware({
      viewPath: __dirname + '/views',
      partialsPath: [ __dirname + '/views/partials', __dirname + '/views/css' ]
}));


// Routes
router.get( '/', function *(next){

      yield this.render('index',{title:'Index'});
})
.get( ['/home', '/h'], function *(next){

      yield this.render('home',{title:'Home'});
});


app.use( router.routes() ).use( router.allowedMethods() );

app.use( serve(__dirname + '/views/static/') );

app.listen(8080);
