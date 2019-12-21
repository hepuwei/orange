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