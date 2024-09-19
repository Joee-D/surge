const url = $request.url;
let body = JSON.parse($response.body);

body.profile.is_premium = true;
body.profile.has_active_paid_subscription = true;
body.profile.end_of_premium = 3818419199;
body.profile._end_of_premium = "2090-12-31 23:59:59";
body.profile.active_premium_sources.purchase = true;

body = JSON.stringify(body);
$done({
    body
});
