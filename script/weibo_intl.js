let url = $request.url;
let body = $response.body;
let e = JSON.parse(body);
if (url.includes("a=trends")) {
	if (e.data?.order) {
    e.data.order = ["search_topic"];
  }
} else if (url.includes("a=open_app")) {
  if (e.data) {
    e.data.uve_ad_scene = "";
    e.data.vip_info.tips = {};
    e.data.vip_title_ad = "";
    e.data.close_ad_setting = {};
    e.data.background_preview = "";
    e.data.detail_banner_ad = [];
  }
} else if (url.includes("a=get_coopen_ads")) {
  if (e.data) {
    e.data.ad_list = [];
    e.data.gdt_video_ad_ios = [];
    e.data.display_ad = 0;
    e.data.ad_ios_id = null;
    e.data.app_ad_ios_id = null;
    e.data.reserve_ad_ios_id = "";
    e.data.reserve_app_ad_ios_id = "";
    e.data.ad_duration = 6e6;
    e.data.ad_cd_interval = 6e6;
    e.data.pic_ad = [];
  }
}
$done({ body: JSON.stringify(e) });
