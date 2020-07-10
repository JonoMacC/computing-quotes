# Quotion: Computing Quotes

[![Netlify Status](https://api.netlify.com/api/v1/badges/6a5cc58c-c0ff-4663-aa3c-dc5c98342570/deploy-status)](https://app.netlify.com/sites/quotion/deploys)

View Live Site: [Quotion](https://quotion.netlify.app/)

Simple API and web interface for quotes about computing

A non-persistent API to CRUD (Create, Read, Update, Delete) quotes and their authors and a responsive web interface for interacting with the API.

React Front-End and Express Back-End.

## About

This project was bootstrapped with Create-React-App: [Create React App Repo](https://github.com/facebook/create-react-app)

It uses serverless-http to deploy an Express backend on a serverless platform like Netlify: [Serverless HTTP Repo](https://github.com/dougmoscrop/serverless-http)

See the master branch for a conventional version of the app intended for server-side deployment.

## Local Development

- Clone the repository and go to the project directory in your terminal `cd /computing-quotes`
- Install all dependencies by executing `yarn` in your terminal
- You will need to have Netlify CLI installed `npm install netlify-cli -g`
- You will need to login on first time use `netlify login`
- You may need to link to your Netlify site - the live version of this repository on your account (but maybe not?) `netlify link` and follow the prompts for next steps
- Run `ntl dev` (ntl is short for netlify) to start the app.
- You can view the app by navigating to http://localhost:3000/ in your browser.
