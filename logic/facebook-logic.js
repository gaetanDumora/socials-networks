import { facebookCallAPI } from "../models/fbk-call-API.js";

let pageEngagement,
pagePosts ,
pagePostsEngagements,
pagePostsReactions ,
pageUserDemographics ,
gendersDistribution,
pageVideoViews ,
pageVideoPosts 

const insights = {
        pageEngagement: [
        "page_fans",
        "page_engaged_users",
        "page_post_engagements",
        "page_negative_feedback",
    /* "page_fan_adds_by_paid_non_paid_unique" an Object */
        ],
        pagePosts: [
        "page_posts_impressions",
        "page_posts_impressions_paid",
        "page_posts_impressions_organic",
        "page_posts_impressions_viral",
        ],
        PagePostsEngagements: [
        "post_negative_feedback",
        "post_engaged_fan",
        "post_clicks",
        ],
        PagePostsReactions: [
        "post_reactions_by_type_total",
        "post_reactions_like_total",
        "post_reactions_love_total",
        "post_reactions_wow_total",
        "post_reactions_haha_total",
        "post_reactions_sorry_total",
        "post_reactions_anger_total",
        ],
        PageUserDemographics: [
        "page_fans",
        "page_fans_locale",
        "page_fans_city",
        "page_fans_country",
        "page_fans_gender_age",
        "page_fan_adds",
        ],
        PageVideoViews: [
        "page_video_views",
        "page_video_views_paid",
        "page_video_views_organic",
        ],
        PageVideoPosts: [
        "post_video_avg_time_watched",
        "post_video_complete_views_organic",
        "post_video_complete_views_paid",
        "post_video_views",
        "post_video_length",
        ],
}

async function main() {
        pageEngagement = await facebookCallAPI("insights", insights.pageEngagement)
        pagePosts = await facebookCallAPI("insights", insights.pagePosts)
        pagePostsEngagements = await facebookCallAPI("insights", insights.PagePostsEngagements)
        pagePostsReactions = await facebookCallAPI("insights", insights.PagePostsReactions)
        const demo = await facebookCallAPI("insights", insights.PageUserDemographics)

    /* Get lang, city, country, age inside demograhics */
        pageUserDemographics = {
                lang: Object.entries(demo
                        .filter(e => e.name == 'page_fans_locale')[0]
                        .values[0]
                        .value)
                        .sort(([,a],[,b]) => b-a)
                        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {}),
                city: Object.entries(demo
                        .filter(e => e.name == 'page_fans_city')[0]
                        .values[0]
                        .value)
                        .sort(([,a],[,b]) => b-a)
                        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {}),
                country: Object.entries(demo
                        .filter(e => e.name == 'page_fans_country')[0]
                        .values[0]
                        .value)
                        .sort(([,a],[,b]) => b-a)
                        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {}),
                age: Object.entries(demo
                        .filter(e => e.name == 'page_fans_gender_age')[0]
                        .values[0]
                        .value)
                        .sort(([,a],[,b]) => b-a)
                        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})   
        }
        
        gendersDistribution = {
                male: Object.entries(pageUserDemographics.age)
                        .filter(el => el[0].startsWith("M"))
                        .map(range => [range[0].replace('M.',""),range[1]])
                        .sort((a, b) => a[0].substring(0,2) - b[0].substring(0,2)),
                female: Object.entries(pageUserDemographics.age)
                        .filter(el => el[0].startsWith("F"))
                        .map(range => [range[0].replace('F.',""),range[1]])
                        .sort((a, b) => a[0].substring(0,2) - b[0].substring(0,2)),
                pie: Object.entries(pageUserDemographics.country)
                }
        
        pageVideoViews = await facebookCallAPI("insights", insights.PageVideoViews)
        pageVideoPosts = await facebookCallAPI("insights", insights.PageVideoPosts)
        
        console.log('OK GOTO ++> localhost:1234')
}

main()

export { 
        pageEngagement, 
        pagePosts,
        pagePostsEngagements,
        pagePostsReactions,
        pageUserDemographics,
        gendersDistribution,
        pageVideoViews,
        pageVideoPosts
}
