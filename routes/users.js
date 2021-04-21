import { Router } from 'express'

/* GET users listing. */
export const usersRouter = Router().get('/', function(req, res, next) {
  res.send('respond with a resource');
})
