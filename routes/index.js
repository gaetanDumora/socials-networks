import { Router } from 'express'
import { pageEngagement } from '../logic/facebook-logic.js'
const router = Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  const fans = pageEngagement[0].values[0].value.toLocaleString()
  res.render('index', {
    title: 'Socials networks metrics',
    fans: fans,
    followers: 'comming soon',
    relations: 'comming soon'})
})

export default router 