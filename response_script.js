const url = $request.url;

const KEY = "nfnjksfhjkdsjfejfjekrngiernvcc";


if (
    url === "https://myapp.com/api"
) {


    $httpClient.get(
        `https://setget.net/get/${KEY}`,
        function(error, response, body) {


            if (error) {

                console.log("[GET ERROR]", error);
                $done({});
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


            } catch(e) {

                console.log("[RESPONSE ERROR]", e);
                $done({});

            }


        }
    );


    return;

}


$done({});