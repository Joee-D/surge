let body = JSON.parse($request.body);
let args = getArgs();
let xmin = parseFloat(args.xmin) || body.x;
let xmax = parseFloat(args.xmax) || body.x;
let ymin = parseFloat(args.ymin) || body.y;
let ymax = parseFloat(args.ymax) || body.y;
if ((body.x < xmin) || (body.x > xmax) || (body.y < ymin) || (body.y > ymax)) {
	let x = random(xmin, xmax);
  let y = random(ymin, ymax);
  console.log('x:' + body.x + '->' + x);
  console.log('y:' + body.y + '->' + y);
  body.x = x;
  body.y = y;
  body = JSON.stringify(body);
  $done({
    body
  });
} else {
	$done({});
}

function random(min, max) {
	return (Math.random() * (max - min) + min).toFixed(6);
}

function getArgs() {
  return Object.fromEntries(
    $argument
      .split("&")
      .map((item) => item.split("="))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  );
}
