import createError from 'http-errors'
import express from 'express'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import facebookRouteur from './routes/facebook-routeur.js'

export const app = express()
const _dirname = dirname(fileURLToPath(import.meta.url))

// view engine setup
app.set('views', join(_dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(join(_dirname, 'public')))

// middleware routing
app.use('/', indexRouter)
app.use('/facebook', facebookRouteur)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})