const url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (obj.lock_session != null) {
  $notification.post("Bare Live", obj.user.display_name, "点击打开", {
  "url":'SenPlayer://x-callback-url/play?url=' + obj.flv_live_url,
  "sound":false
  })
  $done()
}

$done();
