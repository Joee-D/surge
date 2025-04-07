const url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.includes("v1/lives")) {
  if (obj.is_lock) {
    obj.is_lock = false;
  } else if (obj.watermark_enabled) {
    obj.watermark_enabled = false;
  }
} else if (url.includes("v3/profile")) {
  if (obj.premium == false) {
    obj.premium = true;
  }
}

body = JSON.stringify(obj);
$done({ body });
