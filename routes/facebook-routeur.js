import { Router } from "express";
import { 
    pageEngagement,
    pagePosts,
    pagePostsEngagements,
    pagePostsReactions,
    pageUserDemographics,
    gendersDistribution,
    pageVideoPosts,
    pageVideoViews
} from "../logic/facebook-logic.js";
const router = Router()

router.get("/engagement", (req, res, next) => {
    res.render('fb-page-engagements', {
        title: 'Fbk Page Engagement',
        pageEngagement: pageEngagement,
        fbStatus: 'active'
    })
    }
)

router.get("/page-posts", (req, res, next) => {
    res.render('fb-page-posts', {
        title: 'Fbk Page Posts',
        pagePosts: pagePosts,
        fbStatus: 'active'
    })
    }
)

router.get("/page-posts-engagements", (req, res, next) => {
    res.render('fb-page-posts-engagements', {
        title: 'Fbk Posts Engagements',
        pagePostsEngagements: pagePostsEngagements,
        fbStatus: 'active'
    })
    }
) 

router.get("/page-posts-reactions", (req, res, next) => {
    res.render('fb-page-posts-reactions', {
        title: 'Fbk Posts Reactions',
        pagePostsReactions: pagePostsReactions,
        fbStatus: 'active'
    })
    }
) 

router.get("/page-users-demographics", (req, res, next) => {
    res.render('fb-page-users-demographics', {
        title: 'Fbk Users demographics',
        pageUserDemographics: pageUserDemographics,
        pageEngagement: pageEngagement,
        gendersDistribution: gendersDistribution,
        fbStatus: 'active'
    })
    }
) 

router.get("/page-videos-posts", (req, res, next) => {
    res.render('fb-page-videos-posts', {
        title: 'Fbk Videos Posts',
        pageVideoPosts: pageVideoPosts,
        fbStatus: 'active'
    })
    }
) 

router.get("/page-videos-views", (req, res, next) => {
    res.render('fb-page-videos-views', {
        title: 'Fbk Videos Views',
        pageVideoViews: pageVideoViews,
        fbStatus: 'active'
    })
    }
) 

export default router