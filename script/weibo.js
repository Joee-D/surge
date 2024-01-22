const url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (obj.items && obj.items.length > 0) {
  let i = obj.items.length;
  while(i--) {
    if(obj.items[i].data && obj.items[i].data.mblogtype && obj.items[i].data.mblogtype == 1) {
      obj.items.splice(i, 1);
    }
    // obj.items[i].data.ad_state == 1
  } 
}
body = JSON.stringify(obj);
$done({ body });
