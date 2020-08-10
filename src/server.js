const { pageLanding, pageStudy, pageGiveClasses, saveClasses, successCreatedProffy  } = require('./pages')

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.get('/success', successCreatedProffy )
.post('/save-classes', saveClasses)
.listen(5500)