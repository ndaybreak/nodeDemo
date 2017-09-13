var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/index');
var tests = require('./routes/test');
var css = require('./routes/css');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: '12345',
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 20000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: true,
    saveUninitialized: true,
}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/myapp/template/:templateId', function (req, res) {
    console.log('------------  /myapp/template/'+ req.params.templateId +'  --------------------------------------------------')
    res.render(req.params.templateId, {})
})
app.get('/login', function(req, res) {
  req.session.login = true
  res.send({state: 'success'})
})
app.get('/info', function(req, res) {
  if(req.session.login) {
    req.session.login = true
    console.log('=======================================info')
    res.send({name: 'xiao'})
  } else {
    res.send('未登录')
  }
})
//app.post('/test', function(req, res) {
//  console.log(req)
//  res.send({name: 'xiaoming'})
//})

app.get('/awesome', function(req, res){
    
    if(req.session.lastPage) {
        console.log('Last page was: ' + req.session.lastPage + ".");    
    }    
    req.session.lastPage = '/awesome'; //每一次访问时，session对象的lastPage会自动的保存或更新内存中的session中去。
    res.send("You're Awesome. And the session expired time is: " + req.session.cookie.maxAge);
});

app.get('/radical', function(req, res){
    if (req.session.lastPage) {
        console.log('Last page was: ' + req.session.lastPage + ".");    
    }
    req.session.lastPage = '/radical';  
    res.send('What a radical visit! And the session expired time is: ' + req.session.cookie.maxAge);
});

app.get('/File/download_resource/*', function(req, res){
    console.log('*********************************************************************************')
    console.log(req.url)
    res.send('What a radical visit! And the session expired time is: ');
});




app.use('/myapp', routes); // angular
app.use('/test', tests);   // testing
app.use('/css', css);      // test css

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var jquery = require('jquery')



module.exports = app;
