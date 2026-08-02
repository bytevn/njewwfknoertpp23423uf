if ($request.method !== "POST") {
  $done({});
}

if ($request.url !== "https://api.baontq.xyz/v4/client/credential-v3") {
  $done({});
}

const body =
"y1KGTV56b2nPKvP6c1dVznbyIsHRucMhYO/kdgsTehZ3LFfpoPcIH3mazYeFXhx38pF11IYgfIkHX5Anmo8Hxd8LnbjUBTWjZc826w5ZDhtCuUpp5JlSsayb+m8hzJ6wQ8a3p9yYd+pMlzh4AMclwnEe2Dx/glrppa2j+SV1iEwsAQrsKlclHQlo3azFWV97nELENL6g47ymg4pJbgisRtoNnPZwSqDBCA179iiU7sSDEnkhmZNSyI2Q58VbcyRICODPKeZwGh+gUqo7zc2l2mn4zt2uiWk3U9WQCUXjY2X8R9yo5C8fYbwHxsKJx5M6dHWA1uCTQ3WgF6U9ZF80aG8DseudTPQWQLq9QhzNIseB15VOa7Yeec1YvOnmECRwsGPz6YPM4rfTjEgEYgSkyVe4IOFXBBhkzK5qiKCvz7a3oklGTXBAkEsc+ZMYuwmY2t/R/kNBNWDO3RirteEf2Q==";

$done({
  body: body
});