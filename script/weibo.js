const url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.includes("container_timeline") || url.includes("repost_timeline")|| url.includes("searchall")) {
  if (obj.items && obj.items.length > 0) {
    let i = obj.items.length;
    while(i--) {
      if(obj.items[i].data && obj.items[i].data.mblogtype && obj.items[i].data.mblogtype == 1) {
        obj.items.splice(i, 1);
      }
    } 
  }
} else if (url.includes("extend")) {
  if (obj.head_cards) {
    delete obj.head_cards;
  }
  if (obj.trend) {
    delete obj.trend;
  }
} else if (url.includes("ad/preload")) {
  if (obj.ads) {
    obj.ads = [];
  }
}

body = JSON.stringify(obj);
$done({ body });
