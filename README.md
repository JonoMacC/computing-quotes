# Quotion: Computing Quotes

[![Netlify Status](https://api.netlify.com/api/v1/badges/6a5cc58c-c0ff-4663-aa3c-dc5c98342570/deploy-status)](https://app.netlify.com/sites/quotion/deploys)
> This project was bootstrapped with [Create React App](https://create-react-app.dev)

A non-persistent API to CRUD (Create, Read, Update, Delete) quotes and their authors and a responsive web interface for interacting with the API.

* Serverless Lambda with [Netlify Functions](https://github.com/netlify/create-react-app-lambda)
* Express backend via [Serverless-HTTP](https://github.com/dougmoscrop/serverless-http)

See the **master** branch for a version of the app intended for server-side deployment.

## Local Development

You will need to have the Netlify CLI installed

    npm install netlify-cli -g
    netlify login

In your terminal

     yarn
     ntl dev
 
You can view the app by navigating to **http://localhost:3000/** in your browser.
