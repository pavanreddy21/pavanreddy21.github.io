"use strict";
exports.id = 590;
exports.ids = [590];
exports.modules = {

/***/ 8590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HJ": () => (/* binding */ SEO),
/* harmony export */   "Is": () => (/* binding */ PageSeo)
/* harmony export */ });
/* unused harmony export BlogSeo */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3403);



const SEO = {
    title: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN,
    description: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .description */ .WL,
    openGraph: {
        type: "website",
        locale: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .language */ .dK,
        url: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .siteUrl */ .or,
        title: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN,
        description: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .description */ .WL,
        images: [
            {
                url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .siteUrl */ .or}`,
                alt: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN,
                width: 1200,
                height: 600
            }, 
        ]
    },
    twitter: {
        handle: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .twitter */ .km,
        site: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .twitter */ .km,
        cardType: "summary_large_image"
    },
    additionalMetaTags: [
        {
            name: "author",
            content: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .author */ .v
        }, 
    ]
};
const PageSeo = ({ title , description , url  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
        title: `${title}`,
        description: description,
        canonical: url,
        openGraph: {
            url,
            title,
            description
        }
    });
};
const BlogSeo = ({ title , summary , date , lastmod , url , tags , images =[]  })=>{
    const publishedAt = new Date(date).toISOString();
    const modifiedAt = new Date(lastmod || date).toISOString();
    let imagesArr = images.length === 0 ? [
        siteMetadata.socialBanner
    ] : typeof images === "string" ? [
        images
    ] : images;
    const featuredImages = imagesArr.map((img)=>{
        return {
            url: `${siteMetadata.siteUrl}${img}`,
            alt: title
        };
    });
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(NextSeo, {
                title: `${title}`,
                description: summary,
                canonical: url,
                openGraph: {
                    type: "article",
                    article: {
                        publishedTime: publishedAt,
                        modifiedTime: modifiedAt,
                        authors: [
                            `${siteMetadata.siteUrl}/about`
                        ],
                        tags
                    },
                    url,
                    title,
                    description: summary,
                    images: featuredImages
                },
                additionalMetaTags: [
                    {
                        name: "twitter:image",
                        content: featuredImages[0].url
                    }, 
                ]
            }),
            /*#__PURE__*/ _jsx(ArticleJsonLd, {
                authorName: siteMetadata.author,
                dateModified: modifiedAt,
                datePublished: publishedAt,
                description: summary,
                images: featuredImages,
                publisherName: siteMetadata.author,
                title: title,
                url: url
            })
        ]
    });
};


/***/ }),

/***/ 3403:
/***/ ((module) => {

module.exports = JSON.parse('{"TN":"Pavan Reddy Gottimukkula","v":"","r9":"","WL":"Software Engineer","dK":"en-us","or":"https://pavanreddy21.github.io/","Do":"pavanreddy1998@gmail.com","bW":"https://github.com/pavanreddy21","km":"https://twitter.com/pavanreddy1998","kG":"https://www.linkedin.com/in/pavanreddy-g/","v4":"https://docs.google.com/document/d/1P-uHWEJEOVgUkeQD3qHN2daYAseIU5vta-j-DCP3Tr4/edit?usp=sharing"}');

/***/ })

};
;