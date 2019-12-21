import http from "../../utils/request.js";

export const juyuanApi = (page,version,referer)=>http({
    method:"get",
    url:"/theatre/index/getTheatreList",
    data:{
        page:page,
        version:version ,
        referer: referer,
    }
});

export const showApi=(keywords,venue_id,page,sort_type,version,referer)=>http({
    method:'get',
    url:"/Show/Search/getShowList",
    data:{
        keywords:keywords,
        venue_id:venue_id,
        page:page,
        sort_type:sort_type,
        version:version,
        referer,referer,
    }
})
