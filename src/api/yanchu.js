import http from '../utils/request';

export const getShowCategoryList = (version, referer) => http({
    method: "get",
    url: "/Show/Index/getShowCategoryList",
    data: {
        version: version,
        referer: referer
    }
});

export const getShowList = (category, city_id, page, keywords, version, referer) => http({
    method: "get",
    url: "/Show/Search/getShowList",
    data: {
        category: category,
        city_id: city_id,
        page: page,
        keywords: keywords,
        version: version,
        referer: referer,
    }
});