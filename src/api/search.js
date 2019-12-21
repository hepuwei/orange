import http from "../utils/request.js";

export const searchHot = (version,referer)=>http({
    method:"get",
    url:"/Show/Search/getHotWord",
    data:{
        version:version,
        referer:referer ,
    }
})
