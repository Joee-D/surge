const url = $request.url;
const method = $request.method;
const notifyTitle = "aloha-json";
//console.log(`aloha-json-2024.01.02`);
if (!$response.body) {
    // 有undefined的情况
    console.log(`$response.body为undefined:${url}`);
    $done({});
}
if (method !== "GET") {
    $notification.post(notifyTitle, "method错误:", method);
}
let body = JSON.parse($response.body);

if (url.includes("v1/profile_info")) {
    //console.log('会员资格修改');
    body.profile.is_premium = true;
    body.profile.end_of_premium = 3818419199,
    body.profile._end_of_premium = "2090-12-31 23:59:59"
    //console.log('成功');
} else if (url.includes("v1/blockedvideo")) {
    //console.log('去除视频下载屏蔽');
    body.videos = [];
    //console.log('成功');
} else if (url.includes("v1/speed_dial_tiles")) {
    //console.log('去除首页悬浮广告');
    body.modal = false;
    //console.log('成功');
} else {
    $notification.post(notifyTitle, "路径匹配错误:", url);
}

body = JSON.stringify(body);
$done({
    body
});
