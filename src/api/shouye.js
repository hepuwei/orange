import http from "../utils/request.js";

export const labelItem = (city_id,abbreviation,version,referer)=>http({
    method:"get",
    url:"/home/index/getClassifyHome",
    data:{
        city_id:city_id,
        abbreviation:abbreviation ,
        version:version,
        referer:referer

    }
})
//热门演出
export const getHotsRecommendList = (city_id,version,referer)=>http({
    method:"get",
    url:"/home/index/getHotsRecommendList",
    data:{
        city_id:city_id,
        version:version,
        referer:referer

    }
})
//巡回演出
export const getTourRecommendList = (city_id,version,referer)=>http({
    method:"get",
    url:"/home/index/getTourRecommendList",
    data:{
        city_id:city_id,
        version:version,
        referer:referer

    }
})
//5个分类
export const getFloorRecommendList = (city_id,version,referer)=>http({
    method:"get",
    url:"/home/index/getFloorShow",
    data:{
        city_id:city_id,
        version:version,
        referer:referer

    }
})
//热门场馆
export const getHotTheatreList = (version,referer)=>http({
    method:"get",
    url:"/home/index/getHotTheatre",
    data:{
        version:version,
        referer:referer

    }
})
//热门推荐
export const getShowList = (city_id,page,version,referer)=>http({
    method:"get",
    url:"/Show/Search/getShowList",
    data:{
        city_id:city_id,
        page:page,
        version:version,
        referer:referer

    }
})

