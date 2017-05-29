// TODO: Step 1

// 'use strict'
// const Hapi = require('hapi')
//
// const server = new Hapi.Server()
// server.connection({
//   host: 'localhost',
//   port: 8000
// })
//
// server.route({
//   method: 'GET',
//   path: '/',
//   handler: (request, reply) => {
//     reply('hello hapi!')
//   }
// })
//
// server.route({
//   method: 'GET',
//   path: '/{name}',
//   handler: (request, reply) => {
//     reply(`hello ${request.params.name}!`)
//   }
// })
//
// server.start(() => console.log('Started at:', server.info.uri))

// use this with nodemon
// currently this is working only after running as superuser
// sudo su
// using: $ nodemon -w ./ index.js

// TODO: Step 2
// now we will install good and good console
// good is a process monitor for hapi , it listens to different event types and passes events on
// to reporters , good console output reports to stdout
// 'use strict'
// const Hapi = require('hapi')
//
// const server = new Hapi.Server()
// server.connection({
//   host: 'localhost',
//   port: 8000
// })
//
// let goodOptions = {
//   // reporters: [{
//   //   reporter: require('good-console'),
//   //   events: { log: ['error'], response: '*' }
//   // }]
//   reporters: {
//     console: [{
//         module: 'good-console',
//         args: [{ log: '*', response: '*' }]
//       }, 'stdout'],
//     }
// }
//
// server.register({
//   register: require('good'),
//   options: goodOptions
// }, err => {
//
//   server.route({
//     method: 'GET',
//     path: '/',
//     handler: (request, reply) => {
//       server.log('error', 'Oh no!')
//       server.log('info', 'replying')
//       reply('hello hapi')
//     }
//   })
//
//   server.route({
//     method: 'GET',
//     path: '/{name}',
//     handler: (request, reply) => {
//       reply(`hello ${request.params.name}`)
//     }
//   })
//
//   server.start(() => console.log(`Started at: ${server.info.uri}`))
//
// })

// TODO: step 3
// 'use strict'
// const Hapi = require('hapi')
//
// const server = new Hapi.Server()
// server.connection({ port: 8800 })
//
// function handler(request, reply) {
//   reply(request.params)
// }
//
//
// // wildcard parameter
// // so if : http://localhost:8800/stuff/a/a/a
// // our stuff parameter has value : stuff/a/a/a
// // server.route({
// //   method: 'GET',
// //   path: '/{stuff*}',
// //   handler: handler
// // })
//
// // {userID} It expects user id parameter, if not found it throws the error
// // {userID?} userID is optional parameter here if not found it still loads with no 404 error
// server.route({
//   method: 'GET',
//   path: '/users/{userId?}',
//   handler: handler
// })
//
// // number of matching segments specified file * 2(# of matching segments)
// // after 2 segments if any extra segment is supplied it would throw out an error
// server.route({
//   method: 'GET',
//   path: '/files/{file*2}',
//   handler: handler
// })
//
//
// // partial segments , segments with specified postfix will be accepted only
// server.route({
//   method: 'GET',
//   path: '/some/{some}.jpeg',
//   handler: handler
// })
//
// server.start(() => console.log(`Started at: ${server.info.uri}`))

// TODO: step 4

// 'use strict'
// const Hapi = require('hapi')
//
// const server = new Hapi.Server()
// server.connection({ port: 8800 })
//
// function handler(request, reply) {
//   reply(request.params)
// }
//
//
// // wildcard parameter
// // so if : http://localhost:8800/stuff/a/a/a
// // our stuff parameter has value : stuff/a/a/a
// server.route({
//   method: 'GET',
//   path: '/{stuff*}',
//   handler: handler
// })
//
// // {userID} It expects user id parameter, if not found it throws the error
// // {userID?} userID is optional parameter here if not found it still loads with no 404 error
// server.route({
//   method: 'GET',
//   path: '/users/{userId?}',
//   handler: handler
// })
//
// // number of matching segments specified file * 2(# of matching segments)
// // after 2 segments if any extra segment is supplied it would throw out an error
// server.route({
//   method: 'GET',
//   path: '/files/{file*2}',
//   handler: handler
// })
//
//
// // partial segments , segments with specified postfix will be accepted only
// server.route({
//   method: 'GET',
//   path: '/some/{some}.jpeg',
//   handler: handler
// })
//
// server.start(() => console.log(`Started at: ${server.info.uri}`))

// TODO: Step 5

// 'use strict'
// const Hapi = require('hapi')
// const Boom = require('boom')
// const server = new Hapi.Server()
// server.connection({ port: 8000 })
//
// server.route({
//   method: 'GET',
//   path: '/',
//   handler: function(request, reply) {
//     reply()
//     // reply(null, 'hello world')
//     // reply('hello world')
//     // reply({ hello: 'world' })
//     // reply(Promise.resolve('hello world'))
//     // reply(require('fs').createReadStream(__filename))
//
//     // internal server 500
//     // reply(new Error('oops'))
//
//     // 404 not found handler Boom
//     //reply(Boom.notFound())
//   }
// })
//
// server.start(() => {})

// TODO: Step 6
// 'use strict'
// const Hapi = require('hapi')
// const Boom = require('boom')
// const server = new Hapi.Server()
// server.connection({ port: 8000 })
//
// server.route({
//   method: 'GET',
//   path: '/',
//   handler: function(request, reply) {
//     let resp = reply('hello world')
//     // we can change the status code of the response
//     resp.code(418)
//
//     // we can also change the content type of the reponse
//     resp.type('text/plain')
//     // we can also change the headers
//     // first argument is the header name and the second is header value
//     resp.header('hello', 'world')
//
//     // we can set the cookies using the method state
//     resp.state('hello', 'world')
//
//     // reponses are chainable so it would work without resp just supplying more chains in the reply
//     // reply('hello world')
//     //   .code(418)
//     //   .type('text/plain')
//     //   .header('hello', 'world')
//     //   .state('hello', 'world')
//   }
// })
//
// server.start(() => {})

// TODO: Step 7
// 'use strict'
// const Hapi = require('hapi')
// const Path = require('path')
//
// const server = new Hapi.Server()
// server.connection({ port: 8000 })
//
// server.register(require('inert'), () => {
//
//   server.route({
//     method: 'GET',
//     path: '/hapi.png',
//     handler: function(request, reply) {
//       var path = Path.join(__dirname, 'public/hapi.png')
//       reply.file(path)
//     }
//   })
//
//   server.route({
//     method: 'GET',
//     path: '/hapi2.png',
//     handler: {
//
//       // this is one way of readin files
//       // var path = Path.join(__dirname, 'public/hapi2.png')
//       // reply.file(path)
//
//       file: Path.join(__dirname, 'public/hapi2.png')
//     }
//   })
//
//   server.route({
//     method: 'GET',
//     path: '/{param*}',
//     handler: {
//       // serving multiple files just by name so it directoy property would find the files and show
//       directory: {
//         path: Path.join(__dirname, 'public')
//       }
//     }
//   })
//
//   server.start(() => console.log(`Started at: ${server.info.uri}`))
// })

// TODO: Step 8

// 'use strict'
// const Hapi = require('hapi')
// const server = new Hapi.Server()
// server.connection({ port: 8000 })
//
// server.register(require('vision'), () => {
//
//   server.views({
//     engines: {
//       hbs: require('handlebars')
//     },
//     relativeTo: __dirname,
//     layout: true,
//     path: 'views'
//   })
//
//   server.route({
//     method: 'GET',
//     path: '/{name?}',
//     handler: function(request, reply) {
//       reply.view('home', { name: request.params.name || 'World' })
//     }
//   })
//
//   server.start(() => console.log(`Started at: ${server.info.uri}`))
// })

// post and put request payloads

// TODO: Step 9
// 'use strict'
// const Hapi = require('hapi')
// const server = new Hapi.Server()
// server.connection({ port: 8000 })
//
// server.route({
//   // If parse is set to False and then request and response would have the same content type until explicitely allowed it would throw
//   // unsupported media type error
//   method: ['POST', 'PUT'],
//   path: '/',
//   // config: {
//   //   payload: {
//   //     output: 'data',
//   //     parse: false,
//   //     allow: 'application/json'
//   //   }
//   // },
//   handler: function(request, reply) {
//     // this would simply print the requested data and handles content type
//     // http -v POST localhost:8000 fname=Chitrank lname=dixit (this would print the reponse with correct content type on the console)
//     // http -v PUT localhost:8000 fname=Chitrank lname=dixit (this would print the reponse with correct content type on the console) (data is handled the same way)
//     // http -v --form  PUT  localhost:8000 fname=Chitrank lname=dixit (makes the content type of request to application/x-www-form-urlencoded)
//     reply(request.payload)
//   }
// })
//
// server.start(() => console.log(`Started at: ${server.info.uri}`))

// extending the request with life cycle events
// TODO: Step 10
// 'use strict'
// const Hapi = require('hapi')
// const Boom = require('boom')
// const server = new Hapi.Server()
// server.connection({ port: 8000 })
//
// server.ext('onRequest', (request, reply) => {
//   request.setUrl('/')
//   request.setMethod('GET')
//   reply.continue()
// })
//
// server.ext('onRequest', (request, reply) => {
//   console.log('onRequest')
//   reply.continue()
// })
//
// server.ext('onPreAuth', (request, reply) => {
//   console.log('onPreAuth')
//   reply.continue()
// })
//
// server.ext('onPostAuth', (request, reply) => {
//   console.log('onPostAuth')
//   reply.continue()
// })
//
// server.ext('onPreHandler', (request, reply) => {
//   console.log('onPreHandler')
//   reply.continue()
// })
//
// server.ext('onPostHandler', (request, reply) => {
//   console.log('onPostHandler')
//   reply.continue()
// })
//
// server.ext('onPreResponse', (request, reply) => {
//   console.log('onPreResponse')
//   reply.continue()
// })
//
// server.route({
//   method: 'GET',
//   path: '/',
//   handler: function(request, reply) {
//     console.log('handler')
//     reply('hello world')
//   }
// })
//
// server.start(() => {})

// TODO: Step 11
// Friendly error pages with extension events
// 'use strict'
// const Hapi = require('hapi')
// const Boom = require('boom')
// const server = new Hapi.Server()
// server.connection({ port: 8000 })
//
// server.register(require('vision'), () => {
//
//   server.views({
//     engines: { hbs: require('handlebars') },
//     relativeTo: __dirname,
//     path: 'views'
//   })
//
//   server.ext('onPreResponse', (request, reply) => {
//     let resp = request.response
//     if (resp.isBoom) {
//       return reply.view('error', resp.output.payload)
//         .code(resp.output.statusCode)
//     }
//     reply.continue()
//   })
//
//   server.route({
//     method: 'GET',
//     path: '/',
//     handler: function(request, reply) {
//       reply(Boom.badRequest())
//     }
//   })
//
//   server.start(() => {})
//
// })

// TODO: Step 12

// 'use strict'
// const Hapi = require('hapi')
// const Joi = require('joi')
// const server = new Hapi.Server()
// server.connection({ port: 8000 })
//
//
// // request : http -v POST localhost:8000/user/123 id=123
// server.route({
//   method: ['POST','PUT'],
//   path: '/user/{id?}',
//   config: {
//     validate: {
//       params: Joi.object().keys({
//         id: Joi.number()
//       }),
//       payload: Joi.object().keys({
//         id: Joi.number(),
//         email: Joi.string()
//       }).unknown(),
//       query: Joi.object().keys({
//         id: Joi.number()
//       })
//     },
//     handler: function(request, reply) {
//       reply({
//         params: request.params,
//         query: request.query,
//         payload: request.payload
//       })
//     }
//   }
// })
//
// server.start(() => console.log(`Started at: ${server.info.uri}`))

// TODO: Step 13
// Managing state with cookies
// State can be set using the cookies
'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8000 })

server.state('hello', {
  ttl: 60 * 60 * 1000,
  isHttpOnly: true,
  isSecure: false,
  encoding: 'iron',
  password: 'a5LewP10pXNbWUdYQakUfVlk1jUVuLuUU6E1WEE302k'
})

server.route({
  method: 'GET',
  path: '/',
  config: {

    // handler: function(request, reply) {
    //   reply(`Cookies! world`)
    //     .state('hello', 'world')
    // }

    handler: function(request, reply) {
      let hello = request.state.hello
      reply(`Cookies! ${hello}`)
        .state('hello', 'world')
    }
  }
})

server.start(() => console.log(`Started at: ${server.info.uri}`))
