var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var mongoose = require('mongoose')
var _ = require('underscore')
var Movie = require('./models/movie')
var port = process.env.PORT || 3000
var app = express()

mongoose.connect('mongodb://localhost/movie_web').then(() => {
	console.log('Connected to Database');
	}).catch((err) => {
		console.log("Not Connected to Database Error ", err);
});


app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "bower_components")))
app.listen(port)

console.log('immoc started on port ' + port)

// index page
app.get('/', function(req, res) {

	Movie.fetch(function(err, movies){
		if (err) {
			console.log(err)
		}
		res.render('index', {
			title: 'immoc 首页',
			movies: movies
		})
	})
})

// detail page
app.get('/movie/:id', function(req, res) {
	var id = req.params.id

	Movie.findById(id, function(err, movie){
		res.render('detail', {
			title: 'immoc ' + movie.title,
			movies: movie
		})
	})
})

// admin page
app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'immoc 后台录入页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary: '',
			language: ''
		}
	})
})

// admin update movie
app.get('/admin/update/:id', function(req, res) {
	var id = req.params.id

	if (id) {
		Movie.findById(id, function(err, movie) {
			res.render('admin', {
				title: 'imooc 后台更新页',
				movie: movie
			})
		})
	}
})

// admin post movie
app.post('/amdin/movie/new', function(res, req) {
	var id = req.body.movie._id
	var movieObj = req.body.movie
	var _movie

	if (id !== 'undefined') {
		Movie.findById(id, function(err, movie) {
			if (err) {console.log(err)}

			_movie = _.extend(movie, movieObj)
			_movie.save(function(err, movie){
				if (err) {console.log(err)}

				res.redirect('/movie/' + movie._id)
			})
		})
	}
	else {
		_movie = new Movie({
			doctor: movieObj.doctor,
			title: movieObj.title,
			country: movieObj.country,
			language: movieObj.language,
			year: movieObj.year,
			poster: movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash,
		})
		_movie.save(function(err, movie) {
			if (err) {console.log(err)}

			res.redirect('/movie/' + movie._id)
		})
	}
})


// list page
app.get('/admin/list', function(req, res) {
	Movie.fetch(function(err, movies) {
		if (err) {
			console.log(err)
		}
		res.render('list', {
			title: 'immoc 列表页',
			movies: movies
		})
	})
})