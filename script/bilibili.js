const url = $request.url;
let body = JSON.parse($response.body);

if (url.includes("/x/v2/feed/index?")) {
  // 首页推荐信息流
  if (body?.data?.items?.length > 0) {
    // 白名单
    body.data.items = body.data.items.filter((i) => i?.card_goto === "av");
  }
} else if (url.includes("/x/v2/feed/index/story")) {
  // 竖屏模式信息流
  if (body?.data?.items?.length > 0) {
    // vertical_live 直播内容
    // vertical_pgc 大会员专享
    body.data.items = body.data.items.filter(
      (i) =>
        !(
          i.hasOwnProperty("ad_info") ||
          i.hasOwnProperty("story_cart_icon") ||
          ["ad", "vertical_live", "vertical_pgc"]?.includes(i?.card_goto)
        )
    );
  }
} else if (url.includes("/x/v2/splash")) {
  // 开屏广告
  if (body?.data) {
    const item = ["account", "event_list", "preload", "show"];
    item.forEach((i) => {
      delete body.data[i];
    });
    if (body?.data?.max_time) {
      body.data.max_time = 0;
    }
    if (body?.data?.min_interval) {
      body.data.min_interval = 31536000;
    }
    if (body?.data?.pull_interval) {
      body.data.pull_interval = 31536000;
    }
    if (body?.data?.list?.length > 0) {
      for (let i of body.data.list) {
        i.duration = 0;
        i.enable_pre_download = false;
        i.begin_time = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
        i.end_time = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
      }
    }
  }
}

body = JSON.stringify(body);
$done({
    body
});
