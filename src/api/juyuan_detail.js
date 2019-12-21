import http from "../utils/request.js";
export const movieNowApi = (schedular_id,version,referer)=>http({
    method:"get",
    url:"/Schedule/Schedule/getScheduleInfo",
    data:{
        schedular_id : schedular_id,
        version:version,
        referer: referer,
    }
})
export const movieRecommend = (category,city_id,version,referer)=>http({
    method:"get",
    url:"/Show/Search/getShowList",
    data:{
        category : category,
        city_id:city_id,
        version:version,
        referer: referer,
    }
})
//获取购买票款时候的价格数据
export const moviemoney = (schedular_id,version,referer)=>http({
    method:"get",
    url:"/Schedule/Schedule/getScheduleTicket",
    data:{
        schedular_id : schedular_id,
        version:version,
        referer: referer,
    }
})
//VIp
export const vipCard = (vip_rule_id,version,referer)=>http({
    method:"get",
    url:"/vip/index/getVipRule",
    data:{
        vip_rule_id : vip_rule_id,
        version:version,
        referer: referer,
    }
})
export const orange = (version,referer)=>http({
    method:"get",
    url:"/Card/Product/info",
    data:{
        version:version,
        referer: referer,
    }
})