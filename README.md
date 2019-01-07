# hello-api

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Test](#test)

## General info
Design and implement a hello API with JavaScript (Node.js)

## Technologies
* Node version: 8.15.0

## Setup
To run server.js locally

``` 
$ git clone https://github.com/shihyon/hello-api.git
$ cd hello-api
$ node server.js
```
## Test
Initially shihyon is storad. 
To see all the names, on the browser http://localhost:3000
Returns [{"name":"shihyon"}]

To check the name for shihyon  http://localhost:3000/hello/shihyon
Returns "Hello shihyon!"

To check without name parameter http://localhost:3000/hello
Returns Hello stranger!

To store more name, use postman POST  http://localhost:3000/hello
{
  "name": jack
}

To see all the names again http://localhost:3000
Returns [{"name":"shihyon"},{"name":"jack"}]


