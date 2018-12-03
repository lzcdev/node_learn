var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "bower_components")))
app.listen(port)

console.log('immoc started on port ' + port)

// index page
app.get('/', function(req, res) {
	res.render('index', {
		title: 'immoc 首页',
		movies: [{
			title: '机械战警',
			_id: 1,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 2,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 3,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 4,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 5,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 6,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	})
})

// detail page
app.get('/movie/:id', function(req, res) {
	res.render('detail', {
		title: 'immoc 详情页',
		movies: [{
			title: '机械战警',
			doctor: '何塞帕迪利亚',
			country: '美国',
			year: 2014,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary: '哈哈哈哈',
			language: '英语'			
		}]
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


// list page
app.get('/admin/list', function(req, res) {
	res.render('list', {
		title: 'immoc 列表页',
		movies: [{
			title: '机械战警',
			_id: 1,
			doctor: '何塞帕迪利亚',
			country: '美国',
			year: 2014,
			language: '英语',
			flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary: '反派啊和技术开发环境啊啥的饭卡的时刻发动机哈电视就看韩剧卡收到啦好久好久啊还是飞机卡号发哈就上飞机啊书法家卡手机壳拉萨河看见了哈哈的 '
		}]
	})
})