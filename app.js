/*
 * based upon https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start/
 * Authors: Samuel BAMBA - Julien CORDAT-AUCLAIR 
 */

///////////////          DEPENDENCIES           ///////////////////
'use strict';
const PASS_ADMIN = process.env.PASS_ADMIN;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const PAGE_ACCESS_TOKEN_TEST = process.env.PAGE_ACCESS_TOKEN_TEST;
const API_URL_SERVER = process.env.API_URL_SERVER;
const MESSAGE_ERROR = process.env.MESSAGE_ERROR;
const MESSAGE_DEV = process.env.MESSAGE_DEV;
const MESSAGE_BYE = process.env.MESSAGE_BYE;
const MESSAGE_0_0 = process.env.MESSAGE_0_0;
const MESSAGE_0_1 = process.env.MESSAGE_0_1;
const MESSAGE_0_2 = process.env.MESSAGE_0_2;
const MESSAGE_0_3 = process.env.MESSAGE_0_3;
const QUICK_0_0 = process.env.QUICK_0_0;
const QUICK_0_1 = process.env.QUICK_0_1;
const MESSAGE_1_0 = process.env.MESSAGE_1_0;
const MESSAGE_1_1 = process.env.MESSAGE_1_1;
const MESSAGE_1_2 = process.env.MESSAGE_1_2;
const QUICK_1_0 = process.env.QUICK_1_0;
const QUICK_1_1 = process.env.QUICK_1_1;
const QUICK_1_2 = process.env.QUICK_1_2;
const QUICK_1_3 = process.env.QUICK_1_3;
const QUICK_1_4 = process.env.QUICK_1_4;
const QUICK_1_5 = process.env.QUICK_1_5;
const QUICK_1_6 = process.env.QUICK_1_6;
const MESSAGE_1_2_0 = process.env.MESSAGE_1_2_0;
const MESSAGE_1_2_1 = process.env.MESSAGE_1_2_1;
const MESSAGE_1_2_2 = process.env.MESSAGE_1_2_2;
const MESSAGE_1_2_3 = process.env.MESSAGE_1_2_3;
const MESSAGE_1_2_4 = process.env.MESSAGE_1_2_4;
const MESSAGE_1_2_5 = process.env.MESSAGE_1_2_5;
const MESSAGE_1_2_6 = process.env.MESSAGE_1_2_6;
const QUICK_1_2_0 = process.env.QUICK_1_2_0;
const QUICK_1_2_1 = process.env.QUICK_1_2_1;
const MESSAGE_2_0 = process.env.MESSAGE_2_0;
const QUICK_2_0 = process.env.QUICK_2_0;
const QUICK_2_1 = process.env.QUICK_2_1;
const MESSAGE_3_0 = process.env.MESSAGE_3_0;
const MESSAGE_3bis_0 = process.env.MESSAGE_3bis_0;
const MESSAGE_3_1 = process.env.MESSAGE_3_1;
const MESSAGE_3_2 = process.env.MESSAGE_3_2;
const MESSAGE_3_3 = process.env.MESSAGE_3_3;
const MESSAGE_3_4 = process.env.MESSAGE_3_4;
const MESSAGE_3_5 = process.env.MESSAGE_3_5;
const MESSAGE_4_0 = process.env.MESSAGE_4_0;
let MESSAGE_5_0 = process.env.MESSAGE_5_0;
const MESSAGE_5_1 = process.env.MESSAGE_5_1;
const MESSAGE_5_2 = process.env.MESSAGE_5_2;
const QUICK_5_0 = process.env.QUICK_5_0;
const QUICK_5_1 = process.env.QUICK_5_1;
const QUICK_5_2 = process.env.QUICK_5_2;
const QUICK_5_3 = process.env.QUICK_5_3;
const QUICK_5_4 = process.env.QUICK_5_4;
const QUICK_5_5 = process.env.QUICK_5_5;
const MESSAGE_6_0 = process.env.MESSAGE_6_0;
const MESSAGE_6_2 = process.env.MESSAGE_6_2;
const MESSAGE_6_1 = process.env.MESSAGE_6_1;
const MESSAGE_7_0 = process.env.MESSAGE_7_0;
const QUICK_7_0 = process.env.QUICK_7_0;
const QUICK_7_1 = process.env.QUICK_7_1;
const QUICK_7_2 = process.env.QUICK_7_2;
const QUICK_7_3 = process.env.QUICK_7_3;
const QUICK_7_4 = process.env.QUICK_7_4;
const MESSAGE_8_0 = process.env.MESSAGE_8_0;
const MESSAGE_9_0 = process.env.MESSAGE_9_0;
const QUICK_9_0 = process.env.QUICK_9_0;
const QUICK_9_1 = process.env.QUICK_9_1;
const MESSAGE_10_0 = process.env.MESSAGE_10_0;
const MESSAGE_11_0 = process.env.MESSAGE_11_0;
const MESSAGE_11_1 = process.env.MESSAGE_11_1;
const MESSAGE_11_2 = process.env.MESSAGE_11_2;
const MESSAGE_11_2_0 = process.env.MESSAGE_11_2_0;
const MESSAGE_11_2_1 = process.env.MESSAGE_11_2_1;
const QUICK_11_0 = process.env.QUICK_11_0;
const QUICK_11_1 = process.env.QUICK_11_1;
const MESSAGE_12_0 = process.env.MESSAGE_12_0;
const MESSAGE_12_1 = process.env.MESSAGE_12_1;
const MESSAGE_12_2 = process.env.MESSAGE_12_2;
const MESSAGE_12_3 = process.env.MESSAGE_12_3;
const MESSAGE_12_4 = process.env.MESSAGE_12_4;
const MESSAGE_13_0 = process.env.MESSAGE_13_0;
const MESSAGE_13_1 = process.env.MESSAGE_13_1;
const MESSAGE_14_0 = process.env.MESSAGE_14_0;
const MESSAGE_14_1 = process.env.MESSAGE_14_1;
const MESSAGE_14_2 = process.env.MESSAGE_14_2;
const MESSAGE_14_3 = process.env.MESSAGE_14_3;
const MESSAGE_15_0 = process.env.MESSAGE_15_0;
const MESSAGE_15_1 = process.env.MESSAGE_15_1;
const MESSAGE_16_0 = process.env.MESSAGE_16_0;
const MESSAGE_16_1 = process.env.MESSAGE_16_1;
const MESSAGE_17_0 = process.env.MESSAGE_17_0;
const MESSAGE_17_1 = process.env.MESSAGE_17_1;
const MESSAGE_17_2 = process.env.MESSAGE_17_2;
const QUICK_17_0 = process.env.QUICK_17_0;
const QUICK_17_1 = process.env.QUICK_17_1;
const QUICK_17_2 = process.env.QUICK_17_2;
const MESSAGE_18_0 = process.env.MESSAGE_18_0;
const MESSAGE_18_1 = process.env.MESSAGE_18_1;
const MESSAGE_18_2 = process.env.MESSAGE_18_2;
const QUICK_18_0 = process.env.QUICK_18_0;
const QUICK_18_1 = process.env.QUICK_18_1;
const MESSAGE_19_0 = process.env.MESSAGE_19_0;
const MESSAGE_19_1 = process.env.MESSAGE_19_1;
const QUICK_19_0 = process.env.QUICK_19_0;
const QUICK_19_1 = process.env.QUICK_19_1;
const MESSAGE_20_0 = process.env.MESSAGE_20_0;
const QUICK_20_0 = process.env.QUICK_20_0;
const QUICK_20_1 = process.env.QUICK_20_1;
const MESSAGE_21_0 = process.env.MESSAGE_21_0;
const MESSAGE_21_1 = process.env.MESSAGE_21_1;
const MESSAGE_22_0 = process.env.MESSAGE_22_0;
const MESSAGE_22_1 = process.env.MESSAGE_22_1;
const MESSAGE_22_2 = process.env.MESSAGE_22_2;
const MESSAGE_22_3 = process.env.MESSAGE_22_3;
let MESSAGE_NAMED;
let STATE = null;
let FIRSTNAME = "@prenom";
let ERROR_ANSWER = false;

// Imports dependencies and set up http server
const 
  vue = require('vue'),
  vueRouter = require('vue-router'),
  expressVue = require('express-vue'),
  request = require('request'),
  express = require('express'),
  mongodb = require('mongodb'),
  mongoose = require ('mongoose'),
  body_parser = require('body-parser'),
  routes = require('./routes'),
  controller = require("./controller"),
  adminConnect = controller.adminConnect,
  addNewContact = controller.addNewContact,
  getContacts = controller.getContacts, 
  getContactByID = controller.getContactByID, 
  updateContact = controller.updateContact,
  deleteContact = controller.deleteContact,
  getFieldByID = controller.getFieldByID,
  ContactSchema = require('./model').ContactSchema,
  Contact = mongoose.model('Contact', ContactSchema),
  XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,
  expressVueMiddleware = expressVue.init(),
  app = express(); // creates express http server

// Vue setup
// Development mode
// vue.config.devtools = true
app.use(expressVueMiddleware);

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

///////////////////////////////////////////////////////////////////

/////////////////          DATABASE           /////////////////////    

// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname, details set in .env
var uri = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@cluster0-shard-00-00-se2vl.mongodb.net:27017,cluster0-shard-00-01-se2vl.mongodb.net:27017,cluster0-shard-00-02-se2vl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(uri);

// bodyparser setup
app.use(body_parser.urlencoded({ extended : true }));
app.use(body_parser.json());

///////////////////////////////////////////////////////////////////

//////////////////          ROUTES          //////////////////////  

// Root hook
app.route('/').get(adminConnect);

// CONTACT route block
    app.route('/contact')
    // GET
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        // once we have done that
        next();
    }, getContacts); // semi-colon of end of block CONTACT/
    
    // CONTACT/:messengerId block
    app.route('/contact/:contactId')
    // GET
    .get(getContactByID)
    // POST
    .post(addNewContact)
    // PUT
    .put(updateContact)
    // DELETE
    .delete(deleteContact); // semi-colon of end of block CONTACT/:contactId

// TODO PUT FUNCTION IN CONTROLLERS
// Accepts POST requests at /webhook endpoint
app.post('/webhook', (req, res) => {  

  // Parse the request body from the POST
  let body = req.body;

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
body.entry.forEach(function(entry) {

  // Gets the body of the webhook event
  let webhook_event = entry.messaging[0];


  // Get the sender PSID
  let sender_psid = webhook_event.sender.id;
  console.log('Sender PSID: ' + sender_psid);

  // Check if the event is a message or postback and
  // pass the event to the appropriate handler function
  if (webhook_event.message) {
    handleMessage(sender_psid, webhook_event.message);        
  } else {
    console.log('Received a non-text message');
  }  
});
    
    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Accepts GET requests at the /webhook endpoint
app.get('/webhook', (req, res) => {
  
  /** UPDATE YOUR VERIFY TOKEN **/
  const VERIFY_TOKEN = "token123";
  
  // Parse params from the webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Check if a token and mode were sent
  if (mode && token) {
  
    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);  
    }
  }
});
///////////////////////////////////////////////////////////////////

///////////////          FUNCTIONS           //////////////////////

// Handles messages events
function handleMessage (sender_psid, received_message) {
  let response;
  let state;
  let payload;
  
  // Checks if the message contains text
  if (received_message.text) {  
  console.log(received_message);
  
  
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    
    // TODO: test received_message.text before insering into db
    if(received_message.quick_reply){
      payload = received_message.quick_reply.payload;
    }else{
      payload = received_message.text;}
    
    let s = getState(sender_psid, received_message.text, payload);
                 
  } else {
    console.log('Error no text received');
  }
}

// Send every message passed in argument
function sendMessages(promise, sender_psid){
  var i;
  let response = {};
  
    for (i = 2; i < arguments.length; i++) {
    response = {
      "text": arguments[i],
    }
    console.log(response);
 
    promise = callSendAPI(sender_psid, response);
    // Message to the Test page
    //callSendAPITest(sender_psid, response);
  }
  return promise;
}

// Send all the quick answer options passed in argument
function sendQuicks(promise, sender_psid){
  var i;
  let response = {};
  response.text = arguments[2];
  response.quick_replies = [];
  
  let quick = {};
  for (i = 3; i < arguments.length; i++) {
    quick = {
      "content_type":"text",
      "title": arguments[i],
      "payload": arguments[i]
    };
    response.quick_replies.push(quick);
  }
  
  console.log(response);
  
  // we check for the promise
  if(promise){
    promise.then(function()
                 {
      promise = callSendAPI(sender_psid, response);
      // Message to the Test page
      //callSendAPITest(sender_psid, response);
                 }).catch(
      // Promesse rejetée
      function() { 
        console.error("promesse rompue");
      });
    } else {
      promise = callSendAPI(sender_psid, response);
      // Message to the Test page
      //callSendAPITest(sender_psid, response);
}
  return promise;
}

// Send the data the the right endpoint according to state
function callbackStateGraph(state, sender_psid, text, payload, firstname){
  let promise;
  
  switch(state){
      case null:
      case "O": // Opening discussion state
      promise = sendMessages(promise, sender_psid, MESSAGE_0_0 + "\n" + MESSAGE_0_1);
      promise = sendQuicks(promise, sender_psid, MESSAGE_0_2, QUICK_0_0, QUICK_0_1);
      console.log("FROM : "+ state);
      STATE = "A";
      console.log("STATE : A");
      callPutDB(sender_psid,"A","state");
    break;
      case "O2": // State corresponding to a returning client
      promise = sendMessages(promise, sender_psid, MESSAGE_0_0 + "\n" + MESSAGE_0_3);
      promise = sendQuicks(promise, sender_psid, MESSAGE_0_2, QUICK_0_0, QUICK_0_1);
      console.log("FROM : "+ state);
      STATE = "A";
      console.log("STATE : A");
      callPutDB(sender_psid,"A","state");
    break;
      case "A": // Form or infos
      if(payload.localeCompare(QUICK_0_0) == 0){ // form
        console.log("FROM : "+ state);
        STATE = "1";
        console.log("STATE : 1");
        callPutDB(sender_psid, "1", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_1_0);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_1, QUICK_1_0, QUICK_1_1);
      } else if (payload.localeCompare(QUICK_0_1) == 0){ // infos
        console.log("FROM : "+ state);
        STATE = "I";
        console.log("STATE : I");
        callPutDB(sender_psid,"I","state");
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2, QUICK_1_2, QUICK_1_3, QUICK_1_4, QUICK_1_5, QUICK_1_6);  
      } else{
        console.log("FROM : "+ state);
        STATE = "A";      
        console.log("STATE : A");
        callPutDB(sender_psid,"A","state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendMessages(promise, sender_psid, MESSAGE_0_0 + "\n" + MESSAGE_0_1);
        promise = sendQuicks(promise, sender_psid, MESSAGE_0_2, QUICK_0_0, QUICK_0_1);
        
      }
    break;
      case "I": // infos delidery state
        if(payload.localeCompare(QUICK_1_2) == 0){ // address
        console.log("FROM : "+ state);
        STATE = "I2";
        console.log("STATE : I2");
        callPutDB(sender_psid, "I2", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_1_2_0 + "\n\n" + MESSAGE_1_2_1);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2_6, QUICK_1_2_0, QUICK_1_2_1);
          
      } else if (payload.localeCompare(QUICK_1_3) == 0){ // telephone
        console.log("FROM : "+ state);
        STATE = "I2";
        console.log("STATE : I2");
        callPutDB(sender_psid, "I2", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_1_2_2);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2_6, QUICK_1_2_0, QUICK_1_2_1);
        
      } else if (payload.localeCompare(QUICK_1_4) == 0){ // mail
        console.log("FROM : "+ state);
        STATE = "I2";
        console.log("STATE : I2");
        callPutDB(sender_psid, "I2", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_1_2_3);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2_6, QUICK_1_2_0, QUICK_1_2_1);  
        
      } else if (payload.localeCompare(QUICK_1_5) == 0){ // schedule
        console.log("FROM : "+ state);
        STATE = "I2";
        console.log("STATE : I2");
        callPutDB(sender_psid, "I2", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_1_2_4);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2_6, QUICK_1_2_0, QUICK_1_2_1);
        
      } else if (payload.localeCompare(QUICK_1_6) == 0){ // humain assistance
        console.log("FROM : "+ state);
        STATE = "I2";
        console.log("STATE : I2");
        callPutDB(sender_psid, "I2", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_1_2_5);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2_6, QUICK_1_2_0, QUICK_1_2_1);
        
      } else{
        console.log("FROM : "+ state);
        STATE = "I";        
        console.log("STATE : I");
        callPutDB(sender_psid,"I","state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2, QUICK_1_2, QUICK_1_3, QUICK_1_4, QUICK_1_5, QUICK_1_6);  
        
      }
    break;
      case "I2": // Cycle state
        if(payload.localeCompare(QUICK_1_2_0) == 0){ // more infos
        console.log("FROM : "+ state);
        STATE = "I";
        console.log("STATE : I");
        callPutDB(sender_psid, "I", "state");
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2, QUICK_1_2, QUICK_1_3, QUICK_1_4, QUICK_1_5, QUICK_1_6);
          
      } else if (payload.localeCompare(QUICK_1_2_1) == 0){ // end
        console.log("FROM : "+ state);
        STATE = "O2";
        console.log("STATE : O2");
        callPutDB(sender_psid,"O2","state");
        promise = sendMessages(promise, sender_psid, MESSAGE_BYE);
        
      } else{
        console.log("FROM : "+ state);
        STATE = "I2";        
        console.log("STATE : I2");
        callPutDB(sender_psid,"I2","state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2_6, QUICK_1_2_0, QUICK_1_2_1);
        
      }
    break;
      case "1": // gender state
      if(payload.localeCompare(QUICK_1_0) == 0 || payload.localeCompare(QUICK_1_1) == 0){
        console.log("FROM : "+ state);
        STATE = "2";
        console.log("STATE : 2");
        callPutDB(sender_psid, "2", "state");
        callPutDB(sender_psid, payload, "gender");
        promise = sendQuicks(promise, sender_psid, MESSAGE_2_0, QUICK_2_0, QUICK_2_1);
      } else{
        console.log("FROM : "+ state);
        STATE = "1";
        console.log("STATE : 1");
        callPutDB(sender_psid, "1", "state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendMessages(promise, sender_psid, MESSAGE_1_0);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_1, QUICK_1_0, QUICK_1_1);
      }
    break;
      case "2": // handicap or volontary state
      if(payload.localeCompare(QUICK_2_0) == 0){ // handicap
        console.log("FROM : "+ state);
        STATE = "3";
        console.log("STATE : 3");
        callPutDB(sender_psid, "3", "state");
        callPutDB(sender_psid, payload, "class");
        promise = sendMessages(promise, sender_psid, MESSAGE_3_0 + "\n" + MESSAGE_3_1 + "\n\n" + MESSAGE_3_2 + "\n" + MESSAGE_3_3);
      }
      else if(payload.localeCompare(QUICK_2_1) == 0){ // volontary
        console.log("FROM : "+ state);
        STATE = "3v";
        console.log("STATE : 3v");
        callPutDB(sender_psid, "3v", "state");
        callPutDB(sender_psid, payload, "class");
        promise = sendMessages(promise, sender_psid, MESSAGE_3_4 + "\n" + MESSAGE_3_5 + "\n\n" + MESSAGE_3_2 + "\n" + MESSAGE_3_3);
        
      } else{
        console.log("FROM : "+ state);
        STATE = "2";
        console.log("STATE : 2");
        callPutDB(sender_psid, "2", "state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_2_0, QUICK_2_0, QUICK_2_1);

      }
    break;
      case "3": // firstname state
      console.log("FROM : "+ state);
      STATE = "4";
      console.log("STATE : 4");
      callPutDB(sender_psid, "4", "state");
      callPutDB(sender_psid, text, "firstName");
      promise = sendMessages(promise, sender_psid, MESSAGE_4_0);
    break;
      case "3v": // firstname state
      console.log("FROM : "+ state);
      STATE = "4v";
      console.log("STATE : 4v");
      callPutDB(sender_psid, "4v", "state");
      callPutDB(sender_psid, text, "firstName");
      promise = sendMessages(promise, sender_psid, MESSAGE_4_0);
    break;
      case "4": // lastname state
      console.log("FROM : "+ state);
      STATE = "5";
      console.log("STATE : 5");
      callPutDB(sender_psid, "5", "state");
      callPutDB(sender_psid, text, "lastName");
      MESSAGE_NAMED = MESSAGE_5_0.replace("@prenom", firstname);
      promise = sendMessages(promise, sender_psid, MESSAGE_NAMED);
      promise = sendQuicks(promise, sender_psid, MESSAGE_5_1, QUICK_5_0, QUICK_5_1, QUICK_5_2, QUICK_5_3, QUICK_5_4, QUICK_5_5);
    break;
      case "4v": // lastname state
      console.log("FROM : "+ state);
      STATE = "5v";
      console.log("STATE : 5v");
      callPutDB(sender_psid, "5v", "state");
      callPutDB(sender_psid, text, "lastName");
      MESSAGE_NAMED = MESSAGE_5_0.replace("@prenom", firstname);
      promise = sendMessages(promise, sender_psid, MESSAGE_NAMED + "\n" + MESSAGE_5_2);
    break;
      case "5v": // birthdate state
      console.log("FROM : "+ state);
      STATE = "6v";
      console.log("STATE : 6v");
      callPutDB(sender_psid, "6v", "state");
      callPutDB(sender_psid, text, "birthdate");
      promise = sendMessages(promise, sender_psid, MESSAGE_6_1);
    break;
      case "5": // handicap state
        if(payload.localeCompare(QUICK_5_0) == 0 || payload.localeCompare(QUICK_5_1) == 0 || payload.localeCompare(QUICK_5_2) == 0 || payload.localeCompare(QUICK_5_3) == 0){ // mobility, sight, hearing or speech
        console.log("FROM : "+ state);
        STATE = "7";
        console.log("STATE : 7");
        callPutDB(sender_psid, "7", "state");
        callPutDB(sender_psid, payload, "handicap");
        promise = sendQuicks(promise, sender_psid, MESSAGE_7_0, QUICK_7_0, QUICK_7_1, QUICK_7_2, QUICK_7_3, QUICK_7_4);
      }
      else if(payload.localeCompare(QUICK_5_4) == 0){ // several
        console.log("FROM : "+ state);
        STATE = "6";
        console.log("STATE : 6");
        callPutDB(sender_psid, "6", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_6_0);
        
      } 
      else if(payload.localeCompare(QUICK_5_5) == 0){ // other
        console.log("FROM : "+ state);
        STATE = "6";
        console.log("STATE : 6");
        callPutDB(sender_psid, "6", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_6_2);
        
      } 
      else{
        console.log("FROM : "+ state);
        STATE = "5";
        console.log("STATE : 5");
        callPutDB(sender_psid, "5", "state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_5_1, QUICK_5_0, QUICK_5_1, QUICK_5_2, QUICK_5_3, QUICK_5_4, QUICK_5_5);

      }
    break;
      case "6": // handtyped handicap state
      console.log("FROM : "+ state);
      STATE = "7";
      console.log("STATE : 7");
      callPutDB(sender_psid, "7", "state");
      callPutDB(sender_psid, payload, "handicap");
      promise = sendQuicks(promise, sender_psid, MESSAGE_7_0, QUICK_7_0, QUICK_7_1, QUICK_7_2, QUICK_7_3, QUICK_7_4);
      
    break;
      case "6v": // birthplace state
      console.log("FROM : "+ state);
      STATE = "11v";
      console.log("STATE : 11v");
      callPutDB(sender_psid, "11v", "state");
      callPutDB(sender_psid, text, "birthplace");
      promise = sendMessages(promise, sender_psid, MESSAGE_11_0);
      promise = sendQuicks(promise, sender_psid, MESSAGE_11_2, QUICK_11_0, QUICK_11_1);
    break;
      case "7": // equipment state
      if(payload.localeCompare(QUICK_7_0) == 0 || payload.localeCompare(QUICK_7_1) == 0 || payload.localeCompare(QUICK_7_2) == 0 || payload.localeCompare(QUICK_7_4) == 0){ // wheelchair, crutches, hearing aid or none
        console.log("FROM : "+ state);
        STATE = "9";
        console.log("STATE : 9");
        callPutDB(sender_psid, "9", "state");
        callPutDB(sender_psid, payload, "equipment");
        promise = sendQuicks(promise, sender_psid, MESSAGE_9_0, QUICK_9_0, QUICK_9_1);
      }
      else if(payload.localeCompare(QUICK_7_3) == 0){ // other
        console.log("FROM : "+ state);
        STATE = "8";
        console.log("STATE : 8");
        callPutDB(sender_psid, "8", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_8_0);
        
      } else{
        console.log("FROM : "+ state);
        STATE = "7";
        console.log("STATE : 7");
        callPutDB(sender_psid, "7", "state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_7_0, QUICK_7_0, QUICK_7_1, QUICK_7_2, QUICK_7_3, QUICK_7_4);
      }
    break;
      case "8": // handtyped equipment state
        console.log("FROM : "+ state);
        STATE = "9";
        console.log("STATE : 9");
        callPutDB(sender_psid, "9", "state");
        callPutDB(sender_psid, payload, "equipment");
        promise = sendQuicks(promise, sender_psid, MESSAGE_9_0, QUICK_9_0, QUICK_9_1);
    break;
      case "9": // utilitarian state
      if(payload.localeCompare(QUICK_9_0) == 0){ // yes
        console.log("FROM : "+ state);
        STATE = "10";
        console.log("STATE : 10");
        callPutDB(sender_psid, "10", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_10_0);
      }
      else if(payload.localeCompare(QUICK_9_1) == 0){ // no
        console.log("FROM : "+ state);
        STATE = "11";
        console.log("STATE : 11");
        callPutDB(sender_psid, "11", "state");
        callPutDB(sender_psid, text, "utilitarian");
        promise = sendMessages(promise, sender_psid, MESSAGE_11_0 + "\n" + MESSAGE_11_1);
        
      } else{
        console.log("FROM : "+ state);
        STATE = "9";
        console.log("STATE : 9");
        callPutDB(sender_psid, "9", "state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_9_0, QUICK_9_0, QUICK_9_1);
      }
    break;
      case "10": // handtyped utilitarian state
        console.log("FROM : "+ state);
        STATE = "11";
        console.log("STATE : 11");
        callPutDB(sender_psid, "11", "state");
        callPutDB(sender_psid, text, "utilitarian");
        promise = sendMessages(promise, sender_psid, MESSAGE_11_0 + "\n" + MESSAGE_11_1);
    break;
      case "11": // birthdate state
        console.log("FROM : "+ state);
        STATE = "12";
        console.log("STATE : 12");
        callPutDB(sender_psid, "12", "state");
        callPutDB(sender_psid, text, "birthdate");
        promise = sendMessages(promise, sender_psid, MESSAGE_12_0 + "\n" + MESSAGE_12_1 + "\n" + MESSAGE_12_2);
    break;
      case "11v": // nationality state
      if(payload.localeCompare(QUICK_11_0) == 0){ // French
        console.log("FROM : "+ state);
        STATE = "12v";
        console.log("STATE : 12v");
        callPutDB(sender_psid, "12v", "state");
        callPutDB(sender_psid, text, "nationality");
        promise = sendMessages(promise, sender_psid, MESSAGE_12_3 + "\n" + MESSAGE_12_4);
      }
      else if(payload.localeCompare(QUICK_11_1) == 0){ // Foreign
        console.log("FROM : "+ state);
        STATE = "11v2";
        console.log("STATE : 11v2");
        callPutDB(sender_psid, "11v2", "state");
        promise = sendMessages(promise, sender_psid, MESSAGE_11_2_1 + "\n" + MESSAGE_11_2_0);
        
      } else{
        console.log("FROM : "+ state);
        STATE = "6v";
        console.log("STATE : 6v");
        callPutDB(sender_psid, "6v", "state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_11_2, QUICK_11_0, QUICK_11_1);
      }
    break;
      case "11v2": // handtyped nationality state
      console.log("FROM : "+ state);
      STATE = "12v";
      console.log("STATE : 12v");
      callPutDB(sender_psid, "12v", "state");
      callPutDB(sender_psid, text, "nationality");
      promise = sendMessages(promise, sender_psid, MESSAGE_12_3 + "\n" + MESSAGE_12_4);
      
    break;
      case "12": // address state
        console.log("FROM : "+ state);
        STATE = "13";
        console.log("STATE : 13");
        callPutDB(sender_psid, "13", "state");
        callPutDB(sender_psid, text, "address");
        promise = sendMessages(promise, sender_psid, MESSAGE_13_0);
    break;
      case "12v": // address state
        console.log("FROM : "+ state);
        STATE = "13v";
        console.log("STATE : 13v");
        callPutDB(sender_psid, "13v", "state");
        callPutDB(sender_psid, text, "address");
        promise = sendMessages(promise, sender_psid, MESSAGE_13_1);
    break;
      case "13": // telephone state
        console.log("FROM : "+ state);
        STATE = "14";
        console.log("STATE : 14");
        callPutDB(sender_psid, "14", "state");
        callPutDB(sender_psid, text, "telephone");
        promise = sendMessages(promise, sender_psid, MESSAGE_14_0 + "\n" + MESSAGE_14_1 + "\n" + MESSAGE_14_2);
    break;
      case "13v": // telephone state
        console.log("FROM : "+ state);
        STATE = "14v";
        console.log("STATE : 14v");
        callPutDB(sender_psid, "14v", "state");
        callPutDB(sender_psid, text, "telephone");
        promise = sendMessages(promise, sender_psid, MESSAGE_14_0 + "\n" + MESSAGE_14_3);
    break;
      case "14": // StudentID state
        console.log("FROM : "+ state);
        STATE = "15";
        console.log("STATE : 15");
        callPutDB(sender_psid, "15", "state");
        callPutDB(sender_psid, text, "studentID"); 
        promise = sendMessages(promise, sender_psid, MESSAGE_15_0);
    break;
      case "14v": // email state
        console.log("FROM : "+ state);
        STATE = "15v";
        console.log("STATE : 15v");
        callPutDB(sender_psid, "15v", "state");
        callPutDB(sender_psid, text, "email"); 
        promise = sendMessages(promise, sender_psid, MESSAGE_15_1);
    break;
      case "15": // cursus state
        console.log("FROM : "+ state);
        STATE = "16";
        console.log("STATE : 16");
        callPutDB(sender_psid, "16", "state");
        callPutDB(sender_psid, text, "cursus");
        promise = sendMessages(promise, sender_psid, MESSAGE_16_0);
    break;
      case "15v": // availability state
        console.log("FROM : "+ state);
        STATE = "16v";
        console.log("STATE : 16v");
        callPutDB(sender_psid, "16v", "state");
        callPutDB(sender_psid, text, "availability");
        promise = sendMessages(promise, sender_psid, MESSAGE_16_1);
    break;
      case "16": // dream job state
        console.log("FROM : "+ state);
        STATE = "17";
        console.log("STATE : 17");
        callPutDB(sender_psid, "17", "state");
        callPutDB(sender_psid, text, "dreamJob");
        promise = sendMessages(promise, sender_psid, MESSAGE_17_0);
        promise = sendQuicks(promise, sender_psid, MESSAGE_17_1, QUICK_17_0, QUICK_17_1, QUICK_17_2);
    break;
      case "16v": // cursus state
        console.log("FROM : "+ state);
        STATE = "17v";
        console.log("STATE : 17v");
        callPutDB(sender_psid, "17v", "state");
        callPutDB(sender_psid, text, "cursus");
        promise = sendMessages(promise, sender_psid, MESSAGE_17_0 + "\n" + MESSAGE_17_2);
    break;
      case "17": // location state
      if(payload.localeCompare(QUICK_17_0) == 0 || payload.localeCompare(QUICK_17_1) == 0 || payload.localeCompare(QUICK_17_2) == 0){ // Grenoble, Valence or Vienne
        console.log("FROM : "+ state);
        STATE = "18";
        console.log("STATE : 18");
        callPutDB(sender_psid, "18", "state");
        callPutDB(sender_psid, text, "location");
        promise = sendMessages(promise, sender_psid, MESSAGE_18_0);
        promise = sendQuicks(promise, sender_psid, MESSAGE_18_1, QUICK_18_0, QUICK_18_1);
      } else{
        console.log("FROM : "+ state);
        STATE = "17";
        console.log("STATE : 17");
        callPutDB(sender_psid, "17", "state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_17_1, QUICK_17_0, QUICK_17_1, QUICK_17_2);
      }
    break;
      case "17v": // formation state
        console.log("FROM : "+ state);
        STATE = "18v";
        console.log("STATE : 18v");
        callPutDB(sender_psid, "18v", "state");
        callPutDB(sender_psid, text, "formation");
        promise = sendMessages(promise, sender_psid, MESSAGE_18_2);
    break;
      case "18": // scholarship state
      if(payload.localeCompare(QUICK_18_0) == 0 || payload.localeCompare(QUICK_18_1) == 0){ // Yes or no
        console.log("FROM : "+ state);
        STATE = "19";
        console.log("STATE : 19");
        callPutDB(sender_psid, "19", "state");
        callPutDB(sender_psid, text, "scholarship");
        promise = sendQuicks(promise, sender_psid, MESSAGE_19_0, QUICK_19_0, QUICK_19_1);
      } else{
        console.log("FROM : "+ state);
        STATE = "18";
        console.log("STATE : 18");
        callPutDB(sender_psid, "18", "state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_18_1, QUICK_18_0, QUICK_18_1);
      }
    break;
      case "18v": // spelling state
        console.log("FROM : "+ state);
        STATE = "19v";
        console.log("STATE : 19v");
        callPutDB(sender_psid, "19v", "state");
        callPutDB(sender_psid, text, "spelling");
        promise = sendMessages(promise, sender_psid, MESSAGE_19_1);
    break;
      case "19": // internship state
      if(payload.localeCompare(QUICK_19_0) == 0 || payload.localeCompare(QUICK_19_1) == 0){ // Yes or no
        console.log("FROM : "+ state);
        STATE = "20";
        console.log("STATE : 20");
        callPutDB(sender_psid, "20", "state");
        callPutDB(sender_psid, text, "internship");
        promise = sendQuicks(promise, sender_psid, MESSAGE_20_0, QUICK_20_0, QUICK_20_1);
      } else{
        console.log("FROM : "+ state);
        STATE = "19";
        console.log("STATE : 19");
        callPutDB(sender_psid, "19", "state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_19_0, QUICK_19_0, QUICK_19_1);
      }
    break;
      case "19v": // languages states
        console.log("FROM : "+ state);
        STATE = "I2";
        console.log("STATE : I2");
        callPutDB(sender_psid, "I2", "state");
        callPutDB(sender_psid, text, "languages");
        promise = sendMessages(promise, sender_psid, MESSAGE_22_2 + "\n" + MESSAGE_22_3);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2_6, QUICK_1_2_0, QUICK_1_2_1);
    break;
      case "20": // accompaniment state
        if(payload.localeCompare(QUICK_20_0) == 0 || payload.localeCompare(QUICK_20_1) == 0){ // Yes or no
        console.log("FROM : "+ state);
        STATE = "21";
        console.log("STATE : 21");
        callPutDB(sender_psid, "21", "state");
        callPutDB(sender_psid, text, "accompaniment");
        promise = sendMessages(promise, sender_psid, MESSAGE_21_0 + "\n" + MESSAGE_21_1);
      } else{
        console.log("FROM : "+ state);
        STATE = "20";
        console.log("STATE : 20");
        callPutDB(sender_psid, "20", "state");
        console.error('The answer didn\'t match a pattern');
        promise = sendMessages(promise, sender_psid, MESSAGE_ERROR);
        promise = sendQuicks(promise, sender_psid, MESSAGE_20_0, QUICK_20_0, QUICK_20_1);
      }
    break;
      case "21": // infos state
        console.log("FROM : "+ state);
        STATE = "I2";
        console.log("STATE : I2");
        callPutDB(sender_psid, "I2", "state");
        callPutDB(sender_psid, text, "info");
        promise = sendMessages(promise, sender_psid, MESSAGE_22_0 + "\n" + MESSAGE_22_1);
        promise = sendQuicks(promise, sender_psid, MESSAGE_1_2_6, QUICK_1_2_0, QUICK_1_2_1);
    break;
    default: 
      console.log('Error state '+ state);
    }

}

// Get the contact with corresponding to sender's id
function callGetOneDB(sender_psid) {
  
  //readTextFile(".data/state.txt");
  
  request({
    "url": API_URL_SERVER + "/contact/" + sender_psid,
    "method": "GET"
  }, (err, res, body) => {
    if (!err) {
      console.log("bodyjson : " + body);
      
      let bodystr = eval("(function(){return " + body + ";})()");
      
      console.log("body : " + bodystr);
      if(bodystr === null){
        STATE = "O";
        console.log("State : 0");
        callPostDB(sender_psid);
      } else {
        console.log("State : "+ bodystr.state);
        STATE = bodystr.state;
      }
      
    } else {
      console.error("Unable to send message:" + err);
    }
  });

  
}

// get the state of the sender and call callbackStateGraph
function getState(sender_psid, message, payload){

  let res;
  let state;
  let firstname;
  
  // Nested function
  function getStateInDB(err,contact){

        if(err){
            res = err;
        }
    
        res = contact;
        console.log('////////////////');
        console.log(contact);
        
        if(contact != null){
        if(typeof contact.state != 'undefined'){
          state = contact.state;
          console.log("State : "+contact.state);
        } else{
          state = "A";        
          console.log("State : 0");
          callPutDB(sender_psid, "A");
        }
        if(typeof contact.firstName != 'undefined'){
          firstname = contact.firstName;
          console.log("Firstname : "+contact.firstName);
        }
        }else{
          state = "O";        
          console.log("State : -1");
          callPostDB(sender_psid);
        }
    
    callbackStateGraph(state, sender_psid, message, payload, firstname);
    }
  
  Contact.findOne({_id: sender_psid}, getStateInDB);
  
  console.log("state outside nested: "+state);
}

// Get all the contacts in the database
function callGetDB(sender_psid) {
   // Send the HTTP request to the Messenger Platform
  request({
    "url": API_URL_SERVER + "/contact/",
    "method": "GET"
  }, (err, res, body) => {
    if (!err) {
      let response = {
      "text": body
      }
      callSendAPI(sender_psid, response);
      // Message to the Test page
      //callSendAPITest(sender_psid, response);
      console.log('message sent!');
    } else {
      console.error("Unable to send message:" + err);
    }
  }); 
  
}

// Create a new contact in the database by direct DB manipulation
function callPostDB(sender_psid) {
  let body = {
    "_id": sender_psid
  }
  let res;
  
  let newContact = new Contact(body);

    newContact.save((err, contact) => {
        if(err){
            res = err;
        }
        res = contact;
    });
}

// Create a new contact in the database by API use
function callPostDB2(sender_psid) {
    // Construct the message body
  let request_body = {
    "_id": sender_psid
  }
   // Send the HTTP request to the Messenger Platform
  request({
    "url": API_URL_SERVER + "/contact/" + sender_psid,
    "method": "POST",
    "json" : request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('New contact created')
    } else {
      console.error("Unable to add info:" + err);
    }
  }); 
  
}

// Modify a given contact's field in the database by direct DB manipulation
function callPutDB(sender_psid, data, field) {
  let res;
  
  // Construct the message body
  let body = {
    "_id": sender_psid,
    [field]: data,
  }
  
  Contact.findOneAndUpdate({_id: sender_psid}, body, { new: true}, (err,contact) => {
        if(err){
            res = err;
        }
        res = contact;
    });
}
  
// Modify a given contact's field in the database by API use
function callPutDB2(sender_psid, data, field) {
  
    // Construct the message body
  let request_body = {
    "_id": sender_psid,
    [field]: data,
  }
   // Send the HTTP request to the Messenger Platform
  request({
    "url": API_URL_SERVER + "/contact/" + sender_psid,
    "method": "PUT",
    "json" : request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('info added to DB : '+ field + " " + data);
    } else {
      console.error("Unable to add info:" + err);
    }
  }); 
  
}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

   // Send the HTTP request to the Messenger Platform
  return new Promise((resolve, reject) => { 
    request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
      return resolve(response);
    } else {
      console.error("Unable to send message:" + err);
    }
  });
  });
}

// Sends response messages via the Send API to the Test page
function callSendAPITest(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

   // Send the HTTP request to the Messenger Platform
  return new Promise((resolve, reject) => { 
    request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN_TEST },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
      return resolve(response);
    } else {
      console.error("Unable to send message:" + err);
    }
  });
  });
}
