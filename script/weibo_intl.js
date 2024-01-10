const url = $request.url;
let body = JSON.parse($response.body);
if (url.includes("friends_timeline") || url.includes("friends/timeline")) {
  body.advertises=[];
  body.ad=[];
} else if (url.includes("ad/weibointl")) {
  body.data=[];
}

body = JSON.stringify(body);
$done({
    body
});
