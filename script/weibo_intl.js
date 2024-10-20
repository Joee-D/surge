let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("a=trends")) {
  if (obj.data?.order) {
    obj.data.order = ["search_topic"];
  }
} else if (url.includes("a=open_app")) {
  if (obj.data) {
    obj.data.uve_ad_scene = "";
    obj.data.vip_info.tips = {};
    obj.data.vip_title_ad = "";
    obj.data.close_ad_setting = {};
    obj.data.background_preview = "";
    obj.data.detail_banner_ad = [];
  }
} else if (url.includes("a=get_coopen_ads")) {
  if (obj.data) {
    obj.data.ad_list = [];
    obj.data.gdt_video_ad_ios = [];
    obj.data.display_ad = 0;
    obj.data.ad_ios_id = null;
    obj.data.app_ad_ios_id = null;
    obj.data.reserve_ad_ios_id = "";
    obj.data.reserve_app_ad_ios_id = "";
    obj.data.ad_duration = 6e6;
    obj.data.ad_cd_interval = 6e6;
    obj.data.pic_ad = [];
  }
}
$done({ body: JSON.stringify(obj) });
