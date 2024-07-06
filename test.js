import ParseToRawHtml from "./parser/parseToRawHtml.js"
const result = await ParseToRawHtml.FindCommandByCore({
    "$type": "group",
    "core": "group",
    "name": "ROOT_GROUP",
    "Commands": [
      {
        "$type": "dbsource",
        "core": "dbsource",
        "ConnectionName": "basiscore",
        "extra-attribute": { "id": "maincat", "lid": "1", "mid": "20" },
        "name": "db",
        "Members": [
          {
            "extra-attribute": {
              "request": "cat",
              "type": "tree",
              "order": "id desc"
            },
            "name": "maincat",
            "postsql": "select * from [db.maincat] where parentid=55933"
          }
        ]
      },
      {
        "$type": "dbsource",
        "core": "dbsource",
        "name": "db",
        "ConnectionName": "basiscore",
        "extra-attribute": { "lid": "1", "mid": "20", "catid": "55933" },
        "Members": [
          {
            "name": "defaultpro",
            "extra-attribute": {
              "order": "id",
              "type": "list",
              "size": "230x120",
              "perpage": "15"
            }
          }
        ]
      },
      {
        "$type": "rawtext",
        "core": "rawtext",
        "content": [
          "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!DOCTYPE html >\r\n<html lang=\"fa\">\r\n <head id=\"headTag\"> \r\n <meta charset=\"utf-8\">\r\n <title>فینگر فود | سفارش فینگر فود | خرید فینگر فود</title>\r\n <meta name=\"description\" content=\"مشاهده و سفارش انواع فینگر فود، مزه، دسر، کیک، شیرینی و... به صورت مستقیم از فروشندگان فینگرفود با قیمت مناسب و تنوع کامل محصولات\"> \r\n <link rel=\"stylesheet\" href=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/css/fingerfood_desktop.css\" />\r\n <link rel=\"stylesheet\" href=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/css/firstPage.css\" />\r\n "
        ]
      },
      { "$type": "call", "core": "call", "FileName": "default_style.html" },
      { "$type": "call", "core": "call", "FileName": "header_desktop.html" },
      {
        "$type": "rawtext",
        "core": "rawtext",
        "content": " \r\n<link rel=\"canonical\" href=\"https://fingerfood.ir/\" />\r\n\r\n </head>\r\n <body > \r\n "
      },
      {
        "$type": "dbsource",
        "core": "dbsource",
        "ConnectionName": "media",
        "name": "db",
        "extra-attribute": {
          "lid": "1",
          "sourcemid": "product",
          "usedforid": "1610159"
        },
        "Members": [
          {
            "extra-attribute": { "type": "list", "request": "taglist" },
            "name": "addPrice"
          }
        ]
      },
      {
        "$type": "dbsource",
        "core": "dbsource",
        "ConnectionName": "media",
        "name": "third",
        "extra-attribute": {
          "lid": "1",
          "sourcemid": "product",
          "usedforid": "1610160"
        },
        "Members": [
          {
            "extra-attribute": { "type": "list", "request": "taglist" },
            "name": "slide"
          }
        ]
      },
      {
        "$type": "dbsource",
        "core": "dbsource",
        "ConnectionName": "media",
        "name": "second",
        "extra-attribute": {
          "lid": "1",
          "sourcemid": "product",
          "usedforid": "1610161"
        },
        "Members": [
          {
            "extra-attribute": { "type": "list", "request": "taglist" },
            "name": "slides"
          }
        ]
      },
      {
        "$type": "rawtext",
        "core": "rawtext",
        "content": [
          "\r\n\r\n <main id=\"main\">\r\n \r\n <div class=\"slider_resize\">\r\n <div class=\"sliderPriceNoticeBox\">\r\n برای دیدن قیمت روی عکس محصولات کلیک کنید\r\n <svg width=\"45\" height=\"46\" viewBox=\"0 0 45 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.8619 13.177C18.4998 12.818 17.7076 12.7538 17.0855 13.3703C16.4658 13.9847 16.5346 14.7564 16.8904 15.1091L21.1631 19.345C21.5161 19.6949 21.5186 20.2648 21.1686 20.6177C20.8187 20.9707 20.7927 20.383 19.8959 20.6233C18.9096 21.1933 18.2353 21.7637 18.6365 23.2613C18.9895 23.6113 18.992 24.1811 18.6421 24.5341C18.2921 24.8871 18.517 24.0674 17.3693 24.5396C15.8561 26.0227 15.6344 26.7062 18.9584 30.0016C21.6803 32.7 26.5605 32.5047 29.8655 29.2285C33.1683 25.9546 33.3615 21.1304 30.646 18.4383L26.3733 14.2025C26.0112 13.8435 25.2189 13.7792 24.5969 14.3958C23.9772 15.0101 24.046 15.7818 24.4018 16.1346L27.2503 18.9585C27.4208 19.1275 27.5167 19.3576 27.5167 19.5976C27.5167 19.8377 27.4207 20.0678 27.2503 20.2368C25.7362 21.7376 25.7176 23.8602 26.86 24.9927C27.213 25.3427 27.2155 25.9125 26.8656 26.2655C26.5156 26.6185 25.9458 26.621 25.5928 26.271C24.0487 24.7403 23.8909 22.4412 24.8436 20.531C25.1099 19.997 25.0725 19.3341 24.6487 18.914L18.8619 13.177Z\" fill=\"white\"/>\r\n <g opacity=\"0.5\">\r\n <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.5264 32.1475C15.8764 31.7945 16.4462 31.792 16.7992 32.1419C18.198 33.5287 19.9963 34.379 22.0193 34.7013C22.5102 34.7795 22.8447 35.2408 22.7665 35.7317C22.6883 36.2225 22.227 36.5571 21.7361 36.4789C19.3852 36.1043 17.2287 35.1023 15.5319 33.4202C15.179 33.0703 15.1765 32.5005 15.5264 32.1475Z\" fill=\"white\"/>\r\n <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.9956 11.4919C26.4988 10.6065 24.7041 10.6129 23.1885 11.5194C22.7619 11.7745 22.2092 11.6356 21.9541 11.209C21.699 10.7824 21.838 10.2298 22.2645 9.97462C24.3398 8.73342 26.8406 8.71744 28.912 9.94257C29.3398 10.1956 29.4815 10.7476 29.2285 11.1754C28.9754 11.6032 28.4235 11.7449 27.9956 11.4919Z\" fill=\"white\"/>\r\n </g>\r\n </svg> \r\n </div>\r\n <div class=\"lazy slider\" data-sizes=\"50vw\">\r\n <div>\r\n <div class=\"slider-wrapper\" style=\"position: relative;width: 1200px;\">\r\n\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/1044689510161001B\" alt=\"فینگر فود\">\r\n\r\n "
        ]
      },
      {
        "$type": "print",
        "core": "print",
        "data-member-name": "db.addPrice",
        "faces": [
          {
            "content": "\r\n <div class=\"circlesContainer\" style=\"top: @yCoordinatespx; left: @xCoordinatespx;\" id=\"circlesContainer\" onclick=\"showBlackBox(this)\"> \r\n <div class=\"innerCircle\"></div>\r\n </div>\r\n <div class=\"balckBoxPrice\" style=\"top: @yCoordinatespx; left: @xCoordinatespx;\">\r\n <div class=\"blackPriceTitle\">\r\n @description\r\n </div>\r\n <!-- <div class=\"balckPrice\">\r\n 700,000 تومان\r\n </div> -->\r\n <a class=\"blackBoxLinkBtn\" href=\"/@link\">صفحه محصول</a>\r\n </div>\r\n \r\n "
          }
        ]
      },
      {
        "$type": "rawtext",
        "core": "rawtext",
        "content": [
          "\r\n \r\n\r\n \r\n </div>\r\n </div>\r\n <div>\r\n <div class=\"slider-wrapper\" style=\"position: relative;width: 1200px;\">\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/1044681610161001B\" alt=\"فینگر فود\" >\r\n \r\n "
        ]
      },
      {
        "$type": "print",
        "core": "print",
        "data-member-name": "second.slides",
        "faces": [
          {
            "content": "\r\n <div class=\"circlesContainer\" style=\"top: @yCoordinatespx; left: @xCoordinatespx;\" id=\"circlesContainer\" onclick=\"showBlackBox(this)\"> \r\n <div class=\"innerCircle\"></div>\r\n </div>\r\n <div class=\"balckBoxPrice\" style=\"top: @yCoordinatespx; left: @xCoordinatespx;\">\r\n <div class=\"blackPriceTitle\">\r\n @description\r\n </div>\r\n <!-- <div class=\"balckPrice\">\r\n 700,000 تومان\r\n </div> -->\r\n <a class=\"blackBoxLinkBtn\" href=\"/@link\">صفحه محصول</a>\r\n </div>\r\n \r\n "
          }
        ]
      },
      {
        "$type": "rawtext",
        "core": "rawtext",
        "content": [
          "\r\n </div>\r\n </div>\r\n <div>\r\n <div class=\"slider-wrapper\" style=\"position: relative;width: 1200px;\">\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/1044680610161001B\" alt=\"سفارش فینگر فود \" >\r\n \r\n "
        ]
      },
      {
        "$type": "print",
        "core": "print",
        "data-member-name": "third.slide",
        "faces": [
          {
            "content": "\r\n <div class=\"circlesContainer\" style=\"top: @yCoordinatespx; left: @xCoordinatespx;\" id=\"circlesContainer\" onclick=\"showBlackBox(this)\"> \r\n <div class=\"innerCircle\"></div>\r\n </div>\r\n <div class=\"balckBoxPrice\" style=\"top: @yCoordinatespx; left: @xCoordinatespx;\">\r\n <div class=\"blackPriceTitle\">\r\n @description\r\n </div>\r\n <!-- <div class=\"balckPrice\">\r\n 700,000 تومان\r\n </div> -->\r\n <a class=\"blackBoxLinkBtn\" href=\"/@link\">صفحه محصول</a>\r\n </div>\r\n \r\n "
          }
        ]
      },
      {
        "$type": "rawtext",
        "core": "rawtext",
        "content": "\r\n </div>\r\n </div>\r\n \r\n </div>\r\n </div>\r\n </main>\r\n <main id=\"main2\" style=\"display: none;\" >\r\n <!-- <div class=\"right-shadow-box\"></div>\r\n <div class=\"left-shadow-box\"></div> -->\r\n <div class=\"cat_wrapper\">\r\n <div class=\"cats\">\r\n <div class=\"items2222\">\r\n\r\n "
      },
      {
        "$type": "repeater",
        "core": "repeater",
        "data-member-name": "db.maincat",
        "name": "rep",
        "Commands": [
          {
            "$type": "dbsource",
            "core": "dbsource",
            "ConnectionName": "basiscore",
            "name": "db",
            "extra-attribute": {
              "lid": "1",
              "mid": "20",
              "catid": {
                "Params": [
                  { "Source": "rep", "Member": "current", "Column": "catID" }
                ]
              }
            },
            "Members": [
              {
                "extra-attribute": { "type": "list" },
                "name": "productCount",
                "postsql": "select count(*) as cc from [db.productCount]"
              }
            ]
          },
          {
            "$type": "print",
            "core": "print",
            "data-member-name": "db.productCount",
            "faces": [
              {
                "filter": [
                  {
                    "Params": [
                      {
                        "Source": "rep",
                        "Member": "current",
                        "Column": "parentid"
                      }
                    ]
                  },
                  " = 55933"
                ],
                "content": [
                  "\r\n <div class=\"cats_main_item\" data-href=\"",
                  {
                    "Params": [
                      { "Source": "rep", "Member": "current", "Column": "catID" }
                    ]
                  },
                  "\">\r\n \r\n <img src=\"",
                  {
                    "Params": [
                      { "Source": "cms", "Member": "cms", "Column": "cdn" }
                    ]
                  },
                  "/",
                  {
                    "Params": [
                      { "Source": "rep", "Member": "current", "Column": "image" }
                    ]
                  },
                  "\" width=\"248\" height=\"148\" alt=\"",
                  {
                    "Params": [
                      { "Source": "rep", "Member": "current", "Column": "title" }
                    ]
                  },
                  "\" />\r\n <div class=\"cats_cover\">\r\n <a href=\"",
                  {
                    "Params": [
                      { "Source": "rep", "Member": "current", "Column": "link" }
                    ]
                  },
                  "\"></a>\r\n <p>",
                  {
                    "Params": [
                      { "Source": "rep", "Member": "current", "Column": "title" }
                    ]
                  },
                  "</p>\r\n <div class=\"cat_count\">\r\n <span class=\"num\">@cc </span><span>نوع</span>\r\n <a href=\"",
                  {
                    "Params": [
                      { "Source": "rep", "Member": "current", "Column": "link" }
                    ]
                  },
                  "\" class=\"yellowSuggestedLink\">محصولات این دسته</a>\r\n </div>\r\n </div>\r\n </div>\r\n "
                ]
              }
            ]
          }
        ]
      },
      {
        "$type": "rawtext",
        "core": "rawtext",
        "content": "\r\n </div>\r\n \r\n </div>\r\n </div>\r\n <div class=\"suggested_product_resize\">\r\n <div class=\"cats suggested_product_cats suggested_product_cats1\">\r\n <div class=\"suggested_product_title\">پر فروش ترین ها</div>\r\n <div class=\"right-shadow-box\"></div>\r\n <div class=\"left-shadow-box\"></div>\r\n <div class=\"offer\">\r\n \r\n \r\n "
      },
      {
        "$type": "repeater",
        "core": "repeater",
        "name": "rep1",
        "data-member-name": "db.defaultpro",
        "Commands": [
          {
            "$type": "dbsource",
            "core": "dbsource",
            "ConnectionName": "userbehavior",
            "name": "db",
            "extra-attribute": {
              "usedforid": {
                "Params": [
                  { "Source": "rep1", "Member": "current", "Column": "id" }
                ]
              }
            },
            "Members": [
              {
                "extra-attribute": { "request": "avgrate", "type": "scalar" },
                "name": "avgrate"
              }
            ]
          },
          {
            "$type": "rawtext",
            "core": "rawtext",
            "content": [
              "\r\n <face> \r\n \r\n <div class=\"pro_item \" >\r\n <a class=\"pro_item_link\" aria-label=\"",
              {
                "Params": [
                  { "Source": "rep1", "Member": "current", "Column": "title" }
                ]
              },
              "\" href=\"/",
              {
                "Params": [
                  { "Source": "rep1", "Member": "current", "Column": "link" }
                ]
              },
              "\" tabindex=\"-1\"></a>\r\n <img src=\"",
              {
                "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }]
              },
              "/",
              {
                "Params": [
                  {
                    "Source": "rep1",
                    "Member": "current",
                    "Column": "00230X00120prp"
                  }
                ]
              },
              "\" width=\"232\" height=\"120\" alt=\"",
              {
                "Params": [
                  { "Source": "rep1", "Member": "current", "Column": "title" }
                ]
              },
              "\" />\r\n <div class=\"pro_title1\">\r\n <p class=\"pro_title\">\r\n <a href=\"/",
              {
                "Params": [
                  { "Source": "rep1", "Member": "current", "Column": "link" }
                ]
              },
              "\" tabindex=\"-1\">",
              {
                "Params": [
                  { "Source": "rep1", "Member": "current", "Column": "title" }
                ]
              },
              " </a>\r\n </p>\r\n <div class=\"supplier_info_rate\">\r\n <span class=\"num\">",
              {
                "Params": [
                  { "Source": "db", "Member": "avgrate", "Column": "average" },
                  { "Value": "3.5" }
                ]
              },
              "</span> \r\n <span class=\"rates\">\r\n <i class=\"fa fa-star\"></i>\r\n </span>\r\n \r\n </div>\r\n <div class=\"clr\"></div>\r\n </div>\r\n <div class=\"clr\"></div>\r\n \r\n <div class=\"supplier_info\">\r\n <div>\r\n <div class=\"\"> <span class=\"shop_btn_list supplier_info_title\" style=\"position: relative; z-index: 9999;\" bc-value=\"",
              {
                "Params": [
                  { "Source": "rep1", "Member": "current", "Column": "id" }
                ]
              },
              "\" data-target=\"#frameModalBottom001\" bc-triggers=\"click\" name=\"db.shop\" data-toggle=\"modal\"><i class=\"fa fa-shopping-cartt\"></i>افزودن به سبد خرید</span> </div>\r\n </div>\r\n </div>\r\n </div> \r\n </face>\r\n "
            ]
          }
        ]
      },
      {
        "$type": "rawtext",
        "core": "rawtext",
        "content": [
          "\r\n \r\n </div>\r\n </div>\r\n </div>\r\n\r\n \r\n </main>\r\n <div class=\"fingerfoodSpeciesContainer\">\r\n <div class=\"suggested_product_title\">امکانات فینگرفود</div>\r\n <div class=\"goldBoxesContainer\">\r\n <div class=\"goldBox\">\r\n <svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n <rect width=\"80\" height=\"80\" rx=\"20\" fill=\"#EFAA2C\" fill-opacity=\"0.1\"/>\r\n <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 63.3334C29.6907 63.3334 21.3334 54.8263 21.3334 44.3324C21.3334 33.9206 27.2911 21.7711 36.5865 17.4263C37.67 16.9199 38.835 16.6667 40 16.6667V63.3334Z\" fill=\"#EFAA2C\"/>\r\n <path opacity=\"0.3\" d=\"M43.4135 17.4263C42.3301 16.9198 41.165 16.6666 40 16.6666V33.0001L50.3405 22.6596C48.3275 20.448 45.9997 18.6351 43.4135 17.4263Z\" fill=\"#EFAA2C\"/>\r\n <path opacity=\"0.4\" d=\"M40 33.0002V45.8335L55.4332 30.4002C54.0983 27.5531 52.3812 24.9016 50.3405 22.6597L40 33.0002Z\" fill=\"#EFAA2C\"/>\r\n <path opacity=\"0.6\" d=\"M40 57.5L58.2257 39.2744C57.7125 36.2633 56.7623 33.2347 55.4332 30.4L40 45.8334V57.5Z\" fill=\"#EFAA2C\"/>\r\n <path opacity=\"0.7\" d=\"M58.2257 39.2744L40 57.5001V63.3333C50.3093 63.3333 58.6667 54.8262 58.6667 44.3323C58.6667 42.6774 58.5162 40.9787 58.2257 39.2744Z\" fill=\"#EFAA2C\"/>\r\n </svg>\r\n <div class=\"goldBoxTitle\">\r\n منو گیاه خواران\r\n </div>\r\n <div class=\"goldBoxText\">\r\n تنوع بالا منو فینگرفود شامل تنوع وسیعی از محصولات با پایه کاملا گیاهی دارند\r\nکه مشخص بودن آنها در قیمت مشخصات محصول میتواند به مخاطبانش کمک بسیاری کند.\r\n </div>\r\n </div>\r\n <div class=\"goldBox\">\r\n <svg width=\"81\" height=\"80\" viewBox=\"0 0 81 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n <rect x=\"0.333313\" width=\"80\" height=\"80\" rx=\"20\" fill=\"#EFAA2C\" fill-opacity=\"0.1\"/>\r\n <path opacity=\"0.5\" d=\"M16.6667 30.6666V40C16.6667 46.5996 16.6667 49.8995 18.7169 51.9497C20.225 53.4578 22.4093 53.8566 26.0856 53.9621C26.0941 52.2452 26.6906 50.5307 27.8749 49.1409C27.9419 49.0623 27.9824 48.9646 27.9906 48.8616C28.2832 45.1949 31.1949 42.2831 34.8617 41.9905C34.9646 41.9823 35.0624 41.9418 35.141 41.8748C37.9407 39.4889 42.0585 39.4889 44.8582 41.8748C44.9368 41.9418 45.0345 41.9823 45.1375 41.9905C48.8043 42.2831 51.716 45.1949 52.0086 48.8616C52.0168 48.9646 52.0573 49.0623 52.1243 49.1409C53.3086 50.5307 53.9051 52.2452 53.9136 53.9621C57.5904 53.8567 59.7749 53.4579 61.2831 51.9497C63.3334 49.8995 63.3334 46.5996 63.3334 40V30.6666C63.3334 24.067 63.3334 20.7671 61.2831 18.7169C59.2328 16.6666 55.933 16.6666 49.3334 16.6666H30.6667C24.067 16.6666 20.7672 16.6666 18.7169 18.7169C16.6667 20.7671 16.6667 24.067 16.6667 30.6666Z\" fill=\"#EFAA2C\"/>\r\n <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M42.588 44.5388C41.0965 43.2677 38.9027 43.2677 37.4111 44.5388C36.7719 45.0835 35.9772 45.4127 35.1401 45.4795C33.1866 45.6354 31.6354 47.1866 31.4795 49.1401C31.4127 49.9772 31.0835 50.7719 30.5388 51.4111C29.2677 52.9027 29.2677 55.0965 30.5388 56.588C31.0835 57.2272 31.4127 58.0219 31.4795 58.859C31.6354 60.8125 33.1866 62.3638 35.1401 62.5197C35.9772 62.5865 36.7719 62.9157 37.4111 63.4604C38.9027 64.7315 41.0965 64.7315 42.588 63.4604C43.2272 62.9157 44.0219 62.5865 44.859 62.5197C46.8125 62.3638 48.3638 60.8125 48.5197 58.859C48.5865 58.0219 48.9157 57.2272 49.4604 56.588C50.7315 55.0965 50.7315 52.9027 49.4604 51.4111C48.9157 50.7719 48.5865 49.9772 48.5197 49.1401C48.3638 47.1866 46.8125 45.6354 44.859 45.4795C44.0219 45.4127 43.2272 45.0835 42.588 44.5388ZM44.6941 52.946C45.4006 52.2866 45.4388 51.1792 44.7794 50.4726C44.1199 49.7661 43.0125 49.7279 42.306 50.3873L38.5 53.9395L37.6941 53.1873C36.9875 52.5279 35.8801 52.5661 35.2207 53.2726C34.5612 53.9792 34.5994 55.0866 35.3059 55.746L37.306 57.6127C37.9783 58.2402 39.0217 58.2402 39.6941 57.6127L44.6941 52.946Z\" fill=\"#EFAA2C\"/>\r\n <path d=\"M31.25 26C31.25 25.0335 32.0335 24.25 33 24.25H47C47.9665 24.25 48.75 25.0335 48.75 26C48.75 26.9665 47.9665 27.75 47 27.75H33C32.0335 27.75 31.25 26.9665 31.25 26Z\" fill=\"#EFAA2C\"/>\r\n <path d=\"M28.3333 32.4167C27.3668 32.4167 26.5833 33.2002 26.5833 34.1667C26.5833 35.1332 27.3668 35.9167 28.3333 35.9167H51.6666C52.6331 35.9167 53.4166 35.1332 53.4166 34.1667C53.4166 33.2002 52.6331 32.4167 51.6666 32.4167H28.3333Z\" fill=\"#EFAA2C\"/>\r\n </svg> \r\n <div class=\"goldBoxTitle\">\r\n فاکتور رسمی\r\n </div>\r\n <div class=\"goldBoxText\">\r\n \r\nامکان صدور فاکتور رسمی فینگرفود را برای همکاری با شرکت ها و مجموعه های\r\nمختلف، به یک گزینه بی تقص تبدیل میکند. \r\n\r\n </div>\r\n </div>\r\n <div class=\"goldBox\">\r\n <svg width=\"81\" height=\"80\" viewBox=\"0 0 81 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n <rect x=\"0.666626\" width=\"80\" height=\"80\" rx=\"20\" fill=\"#EFAA2C\" fill-opacity=\"0.1\"/>\r\n <path opacity=\"0.5\" d=\"M41 24.1659C39.4047 24.1659 38.5328 23.7895 36.9919 23.3761C33.8556 22.5345 31.7815 20.7834 29.3334 20.1374C27.2648 19.5915 24.5705 19.3148 22.2923 19.1747C19.7347 19.0175 17.6667 21.0991 17.6667 23.6615V49.6684C17.6667 52.2606 19.7808 54.3581 22.368 54.5199C24.63 54.6614 27.2877 54.938 29.3334 55.4778C30.4673 55.7771 32.171 56.4839 33.7036 57.1716C36.0476 58.2234 37.999 59.5827 41 59.5827C44.001 59.5827 45.9525 58.2234 48.2965 57.1716C49.829 56.4839 51.5328 55.7771 52.6667 55.4778C54.7123 54.938 57.37 54.6614 59.632 54.5199C62.2192 54.3581 64.3334 52.2606 64.3334 49.6684V23.6615C64.3334 21.0991 62.2653 19.0175 59.7077 19.1747C57.4296 19.3148 54.7352 19.5915 52.6667 20.1374C50.2185 20.7834 48.1444 22.5345 45.0081 23.3761C43.4673 23.7895 42.5954 24.1659 41 24.1659Z\" fill=\"#EFAA2C\"/>\r\n <path d=\"M22.9694 41.9093C23.2038 40.9717 24.1539 40.4016 25.0915 40.636L34.4249 42.9693C35.3625 43.2037 35.9326 44.1539 35.6982 45.0915C35.4638 46.0292 34.5136 46.5992 33.576 46.3648L24.2427 44.0315C23.305 43.7971 22.7349 42.8469 22.9694 41.9093Z\" fill=\"#EFAA2C\"/>\r\n <path d=\"M25.0915 31.3027C24.1539 31.0683 23.2038 31.6383 22.9694 32.576C22.7349 33.5136 23.305 34.4638 24.2427 34.6982L33.576 37.0315C34.5136 37.2659 35.4638 36.6958 35.6982 35.7582C35.9326 34.8205 35.3625 33.8704 34.4249 33.636L25.0915 31.3027Z\" fill=\"#EFAA2C\"/>\r\n <path d=\"M59.0306 41.9093C58.7962 40.9717 57.8461 40.4016 56.9085 40.636L47.5751 42.9693C46.6375 43.2037 46.0674 44.1539 46.3018 45.0915C46.5362 46.0292 47.4864 46.5992 48.424 46.3648L57.7573 44.0315C58.695 43.7971 59.2651 42.8469 59.0306 41.9093Z\" fill=\"#EFAA2C\"/>\r\n <path d=\"M56.9085 31.3027C57.8461 31.0683 58.7962 31.6383 59.0306 32.576C59.2651 33.5136 58.695 34.4638 57.7573 34.6982L48.424 37.0315C47.4864 37.2659 46.5362 36.6958 46.3018 35.7582C46.0674 34.8205 46.6375 33.8704 47.5751 33.636L56.9085 31.3027Z\" fill=\"#EFAA2C\"/>\r\n </svg> \r\n <div class=\"goldBoxTitle\">\r\n منو متنوع\r\n </div>\r\n <div class=\"goldBoxText\">\r\n منو متنوع به شما این امکان را میدهد تا، از نوشیدنی یا دسر و غذای اصلی\r\n خودتان را یکجا سفارش داده و خیالتان آسوده باشد.\r\n \r\n </div>\r\n </div>\r\n <div class=\"goldBox\">\r\n <svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n <rect width=\"80\" height=\"80\" rx=\"20\" fill=\"#EFAA2C\" fill-opacity=\"0.1\"/>\r\n <path opacity=\"0.5\" d=\"M25.3333 58.6666C29.7516 58.6666 33.3333 55.0849 33.3333 50.6666H17.3333C17.3333 55.0849 20.9151 58.6666 25.3333 58.6666Z\" fill=\"#EFAA2C\"/>\r\n <path opacity=\"0.5\" d=\"M58.1981 35.9941L55.9998 37.3333L51.6196 28H55.5714C57.2179 28 58.0412 28 58.6559 28.3511C59.0697 28.5874 59.4126 28.9303 59.6489 29.3441C60 29.9588 60 30.7821 60 32.4286C60 33.2992 60 33.7346 59.8736 34.1304C59.7875 34.3998 59.6591 34.6538 59.4933 34.8829C59.2495 35.2195 58.8991 35.4777 58.1981 35.9941L58.1981 35.9941Z\" fill=\"#EFAA2C\"/>\r\n <path d=\"M44.9715 23.4223C44.1349 23.3358 43.0524 23.3334 41.4076 23.3334H40C38.8954 23.3334 38 22.4379 38 21.3334C38 20.2288 38.8954 19.3334 40 19.3334H41.506C43.0259 19.3333 44.3164 19.3333 45.3829 19.4436C46.5184 19.561 47.5678 19.8159 48.5592 20.4286C49.5506 21.0413 50.2479 21.8659 50.8607 22.829C51.4363 23.7336 52.0134 24.8879 52.6931 26.2474L61.0894 43.0401C64.3234 44.0666 66.6667 47.093 66.6667 50.6667C66.6667 55.085 63.0849 58.6667 58.6667 58.6667C54.939 58.6667 51.8068 56.1172 50.9187 52.6667L16.1606 52.6668C15.9837 52.6667 15.8025 52.6656 15.6339 52.6523C13.3455 52.4722 11.5279 50.6546 11.3478 48.3662C11.3331 48.1801 11.3332 47.9787 11.3333 47.7847L11.3334 47.6318C11.3333 46.7383 11.3333 46.1702 11.3724 45.6729C11.8613 39.4615 16.7948 34.5279 23.0062 34.0391C23.0711 34.034 23.1371 34.0296 23.205 34.0257C23.5922 34.0037 24.0371 34.0005 24.6447 34.0001L26.8054 34H26.8054C29.2013 34 31.1992 33.9999 32.7853 34.2131C34.4594 34.4382 35.9709 34.9333 37.1855 36.1479C38.4001 37.3625 38.8952 38.874 39.1203 40.5481C39.3335 42.1342 39.3334 44.1321 39.3334 46.528L39.3334 48.6667H50.9187C51.6339 45.888 53.8045 43.6935 56.5694 42.9444L49.1593 28.1242C48.4237 26.653 47.9374 25.6859 47.486 24.9764C47.0594 24.3059 46.7537 24.015 46.4562 23.8312C46.1588 23.6474 45.762 23.5041 44.9715 23.4223Z\" fill=\"#EFAA2C\"/>\r\n </svg> \r\n <div class=\"goldBoxTitle\">\r\n نحوه ارسال\r\n </div>\r\n <div class=\"goldBoxText\">\r\n شما میتونید بعد از انتخاب آیتم های مورد علاقه‌اتون،سفارشتون رو از حداقل سه روز آینده و در ساعت مدنظرتون تحویل بگیرید\r\n\r\n\r\n </div>\r\n </div>\r\n </div>\r\n </div>\r\n \r\n <main>\r\n <div class=\"suggested_product_resize someOfOurWorks\">\r\n <div class=\"cats suggested_product_cats\">\r\n <div class=\"suggested_product_title\">برخی از اجراهای ما</div>\r\n <div class=\"right-shadow-box\"></div>\r\n <div class=\"left-shadow-box\"></div>\r\n <div class=\"offer\"> \r\n \r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct1.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct2.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct3.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct4.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct5.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct6.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct7.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct8.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct9.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct10.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct11.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n <div>\r\n <img src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/images/fingerfoofProduct12.JPEG\" width=\"298\" height=\"184\" alt=\"\">\r\n </div>\r\n </div>\r\n </div>\r\n </div>\r\n </main>\r\n <div class=\"\">\r\n\t\t<div class=\"modal fade \" id=\"frameModalBottom1\" tabindex=\"-1\" role=\"dialog\">\r\n\t\t\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t\t\t<!--Content-->\r\n\t\t\t\t<div class=\"modal-content\" id=\"modal-content\">\r\n\t\t\t\t\t<!--Body-->\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<div class=\"row d-flex justify-content-center align-items-center\">\r\n\t\t\t\t\t\t\t<div class=\"comment_list_resize \">\r\n\t\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"title_line\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"clr\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"modal-body acc_render gallery_resize_left\">\r\n\t\t\t\t\t\t\t\t\t<div id=\"acc_render\"> </div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"clr\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"clr\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clr\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--/.Content-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n"
        ]
      },
      { "$type": "call", "core": "call", "FileName": "footer_desktop.html" },
      { "$type": "call", "core": "call", "FileName": "script_desktop.html" },
      {
        "$type": "rawtext",
        "core": "rawtext",
        "content": [
          "\r\n <script src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/js/slick.js\" ></script>\r\n <!-- <script src=\"",
          { "Params": [{ "Source": "cms", "Member": "cms", "Column": "cdn" }] },
          "/js/platform_default_script.js\" ></script> -->\r\n <script>\r\n\r\n window.addEventListener('DOMContentLoaded', function(){\r\n (function($) {\r\n $(\"#main2\").show() \r\n })(jQuery);\r\n }); \r\n \r\n // var circlesContainer = document.getElementById(\"circlesContainer\");\r\n function showBlackBox(el) {\r\n var boxes= $(\".balckBoxPrice\")\r\n for (let i = 0; i < boxes.length; i++) {\r\n const element = boxes[i];\r\n $(element).css(\"transform\",\"scale(0)\")\r\n }\r\n\r\n var el = $(el).next(\".balckBoxPrice\")\r\n el.css(\"transform\",\"scale(1)\")\r\n \r\n }\r\n\r\n\r\n $(\".slider\").slick({\r\n dots: true,\r\n infinite: true,\r\n arrows : true , \r\n slidesToShow: 1,\r\n navigation: true , \r\n mobileFirst : true ,\r\n autoplay: true,\r\n autoplaySpeed: 5000,\r\n }); \r\n $('.items22').slick({\r\n infinite: true,\r\n slidesToShow: 4,\r\n slidesToScroll: 0,\r\n centerMode: true \r\n }); \r\n $('.offer').slick({\r\n infinite: true,\r\n slidesToShow: 4,\r\n slidesToScroll: 1 ,\r\n cssEase: 'ease' ,\r\n initialSlide : 8,\r\n responsive: [\r\n {\r\n breakpoint: 1400,\r\n settings: {\r\n slidesToShow: 6,\r\n slidesToScroll: 1\r\n }\r\n }\r\n ] \r\n }); \r\n function slickCarousel() {\r\n $('.offer1').removeClass(\"slick-initialized slick-slider\");\r\n $('.offer1').slick({\r\n infinite: true,\r\n slidesToShow: 4,\r\n slidesToScroll: 1 \r\n });\r\n } \r\n\r\n </script>\r\n \r\n </body>\r\n</html>"
        ]
      }
    ]
  },"dbsource"
  )
  console.log(result)