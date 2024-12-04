const url = $request.url;
let body = JSON.parse($response.body);

if (url.includes("/x/v2/feed/index?")) {
  if (body?.data?.items?.length > 0) {
    body.data.items = body.data.items.filter(i => {
      const {card_type: cardType, card_goto: cardGoto} = i;
      if (cardType && cardGoto) {
          if (cardType === 'banner_v8' && cardGoto === 'banner') {
              if (i.banner_item) {
                  for (const v of i.banner_item) {
                      if (v.type){
                          if (v.type === 'ad') {
                              return false;
                          }
                      }
                  }
              }
          } else if ((cardGoto.includes("ad")) || (cardGoto.includes("game"))) {
              return false;
          }
      }
      return true;
    });
  }
} else if (url.includes("x/v2/splash")) {
  if (body.data) {
    body.data = {};
  }
} else if (url.includes("resource/show/tab/v2")) {
  if (body.data.top) {
    body.data.top = body.data.top.filter(item => {
      if (item.name === '游戏中心') {
        return false;
      }
      return true;
    });
    fixPos(body.data.top);
  }
  if (body.data.bottom) {
    body.data.bottom = body.data.bottom.filter(item => {
      if (item.name === '发布') {
        return false;
      } else if (item.name === '会员购' || item.tab_id === '会员购Bottom') {
        return false;
      }
      return true;
    });
    fixPos(body.data.bottom);
  }
}

body = JSON.stringify(body);
$done({
    body
});

function fixPos(arr) {
    for (let i = 0; i < arr.length; i++) {
        // 修复pos
        arr[i].pos = i + 1;
    }
}
