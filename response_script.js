const url = $request.url;

const KEY = "nfnjksfhjkdsjfejfjekrngiernvcc";

if (
    $request.method === "POST" &&
    url === "https://discord.com/api/v9/auth/login"
) {

    $httpClient.get(
        `https://setget.net/get/${KEY}`,
        function(error, response, body) {

            if (error) {
                $done({
                    status: 500,
                    body: JSON.stringify({
                        message: "get token failed"
                    })
                });
                return;
            }

            try {
                let result = JSON.parse(body);

                let responsedata = {
                    token: result.value,
                    user_settings: {
                        locale: "vi",
                        theme: "dark"
                    }
                };

                $done({
                    status: 200,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(responsedata)
                });

            } catch (e) {
                $done({
                    status: 500,
                    body: JSON.stringify({
                        message: e.toString()
                    })
                });
            }
        }
    );

} else {
    $done({});
}