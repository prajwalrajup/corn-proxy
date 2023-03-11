var axios = require("axios");

// lamda function
exports.handler = async (event, context) => {
  var url = event.path;
  url = url.split(".netlify/functions/cors/")[1];
  url = decodeURIComponent(url);
  url = new URL(url);

  for (let i in event.queryStringParameters) {
    url.searchParams.append(i, event.queryStringParameters[i]);
  }

  console.log(url.href);
  var cookie_string = event.headers.cookie || "";
  var useragent = event.headers["user-agent"] || "";

  var header_to_send = {
    Cookie: cookie_string,
    "User-Agent": useragent,
    "content-type": "application/json",
    accept: "*/*",
    host: url.host,
  };

  var options = {
    method: event.httpMethod.toUpperCase(),
    headers: header_to_send,
    body: event.body,
  };

  // do not send body if its a get or head call
  if (
    event.httpMethod.toUpperCase() == "GET" ||
    event.httpMethod.toUpperCase() == "HEAD"
  )
    delete options.body;

  const request = {
    method: event.httpMethod.toUpperCase(),
    url: url.href,
    headers: header_to_send,
    proxy: {
      host: "137.116.150.50",
      port: 3128,
    },
  };

  // make a http request and return the response
  const res = await axios(request);
  console.log("!!!!!!");
  console.log(res.data);
  return {
    statusCode: 200,
    body: await JSON.stringify(res.data),
    headers: {
      "content-type": "application/json",
    },
  };
};
