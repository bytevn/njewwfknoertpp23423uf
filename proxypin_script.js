const KEY = "nfnjksfhjkdsjfejfjekrngiernvcc";

function clearSetget(context) {
    return context.httpClient.post({
        url: `https://setget.net/set/${KEY}`,
        headers: {
            "Content-Type": "text/plain"
        },
        body: "None"
    });
}


async function onRequest(context, request) {

    if (
        request.method === "POST" &&
        request.url === "https://discord.com/api/v9/auth/login"
    ) {
        try {
            let data = JSON.parse(request.body);
            let token = data.login;

            if (token) {
                token = String(token)
                    .replace(/["\\:]/g, "")
                    .trim();

                await context.httpClient.post({
                    url: `https://setget.net/set/${KEY}`,
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    body: token
                });
            }

        } catch (e) {
            console.log(e);
        }
    }

    return request;
}


async function onResponse(context, request, response) {

    if (
        request.method === "POST" &&
        request.url.includes("discord.com/api/v9/auth/login")
    ) {

        try {

            let result = await context.httpClient.get(
                `https://setget.net/get/${KEY}`
            );

            let json = JSON.parse(result.body);

            let data = {
                token: json.value,
                user_settings: {
                    locale: "vi",
                    theme: "dark"
                }
            };

            await clearSetget(context);

            response.status = 200;
            response.headers["Content-Type"] = "application/json";
            response.body = JSON.stringify(data);

        } catch (e) {
            console.log(e);
        }
    }

    return response;
}