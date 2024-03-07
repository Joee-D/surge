const url = $request.url;
let body = JSON.parse($response.body);

if (url.includes("v1/profile_info")) {
    body.profile.is_premium = true;
    body.profile.end_of_premium = 3818419199,
    body.profile._end_of_premium = "2090-12-31 23:59:59"
} else if (url.includes("v1/blockedvideo")) {
    body.videos = [];
} else if (url.includes("v1/speed_dial_tiles")) {
    body.modal = false;
}

body = JSON.stringify(body);
