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
} else if (url.includes("container_detail")) {
  if (obj.pageHeader.data.items && obj.pageHeader.data.items.length > 0) {
    let i = obj.pageHeader.data.items.length;
    while(i--) {
      if(obj.pageHeader.data.items[i].category == 'wboxcard') {
        obj.pageHeader.data.items.splice(i, 1);
      }
    } 
  }
}

body = JSON.stringify(obj);
$done({ body });
