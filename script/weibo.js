const url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.includes("container_timeline")) {
  if (obj.items && obj.items.length > 0) {
    let i = obj.items.length;
    while(i--) {
      if(obj.items[i].data && obj.items[i].data.mblogtype && obj.items[i].data.mblogtype == 1) {
        obj.items.splice(i, 1);
      }
    } 
  }
} else if (url.includes("container_detail_comment")) {
  if (obj.items && obj.items.length > 0) {
    let i = obj.items.length;
    while(i--) {
      if(obj.items[i].commentAdType) {
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
}

body = JSON.stringify(obj);
$done({ body });
