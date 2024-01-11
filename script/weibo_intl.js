const url = $request.url;
let body = JSON.parse($response.body);
if (url.includes("friends/timeline")) {
  body.advertises=[];
  body.ad=[];
} else if (url.includes("ad/weibointl") || url.includes("get_coopen_ads")) {
  body.data=[];
}

body = JSON.stringify(body);
$done({
    body
});
