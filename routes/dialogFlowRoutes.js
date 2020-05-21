
const chatbot = require('../chatbot/chatbot');

module.exports = app => {

  app.get('/',(req,res) => {
    res.send({'hello':'Johhny'});
  });

  app.post('/api/df_text_query',async (req,res) => {
    let responses = await chatbot.textQuery(req.body.text,req.body.parameters);
    res.send(responses[0].queryResult);
  });

  app.post('/api/df_event_query',async (req,res) => {
    let responses = await chatbot.eventQuery(req.body.event,req.body.parameters);
    res.send(responses[0].queryResult);
  });

}


// sessionClient.detectIntent(request).then(responses => {
//   console.log("Detected Intent");
//   const result = responses[0].queryResult;
//   console.log(`Query:${result.queryText}`);
//   console.log(`Response:${result.fulfillmentText}`);
//   if(result.intent){
//     console.log(`Intent:${result.intent.displayName}`);
//   }else{
//     console.log(`No intent matched.`);
//   }
// }).catch(err => {
//   console.error('ERROR:',err);
// });
//
// res.send({'do':'text query'});
