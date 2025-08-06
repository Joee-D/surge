const url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (obj.lock_session != null) {
  $notification.post("Bare Live", obj.user.display_name, "点击打开", {
  "url":'filebox://play?url=' + obj.flv_live_url,
  "sound":false
  })
  $done()
}

$done();
