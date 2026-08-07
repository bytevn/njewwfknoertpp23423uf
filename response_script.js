const url = $request.url;

const KEY = "nfnjksfhjkdsjfejfjekrngiernvcc";

function clearSetget() {
    $httpClient.delete({
        url: `https://setget.net/delete/${KEY}`
    }, function(error, response, body) {
        console.log("clear:", error || "OK");
    });
}


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

                clearSetget();

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