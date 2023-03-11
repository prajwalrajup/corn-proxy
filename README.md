# Proxy Server using Netlify Lambda Function

This project utilizes Netlify Lambda Functions to create a proxy server that can handle HTTP requests and forward them to external APIs.

Netlify Lambda Functions provide a powerful tool for building serverless applications such as this proxy server project. By leveraging the scalability and flexibility of serverless computing, developers can build efficient and cost-effective applications without the overhead of managing servers.

## Lambda Function and Netlify Lambda Function

Lambda Functions and Netlify Lambda Functions are serverless compute services provided by AWS and Netlify respectively that allow developers to run their code without having to manage servers.

## Project Description

The proxy server project uses Netlify Lambda Functions to create a serverless architecture that can handle incoming HTTP requests, process them, and forward them to an external API. This proxy server can be used to mask the origin of requests, handle cross-origin requests, and add security features such as rate limiting or authentication. The project is built using Node.js and Express.js for the backend, and Netlify's serverless functions for the proxy functionality.

## Installation and Usage

To install and use the project, clone the repository and run npm install to install the required dependencies. Then, run npm start to start the server. The server will run on http://localhost:3000 by default.

To use the proxy server, send HTTP requests to http://localhost:3000/proxy?url=[YOUR_API_ENDPOINT]. The proxy server will forward your request to the API endpoint specified in the url query parameter and return the response.
