const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// var config = {
//   method: "get",
//   url: "https://api.twitter.com/1.1/1286810786594082816/show.json",
//   headers: {
//     Authorization:
//       "Bearer AAAAAAAAAAAAAAAAAAAAAFApGgEAAAAAtfLgnx16ANS0ojGzLQt2N%2FHIGds%3DsZtqlTGMqMlTyNpyD8XxaEWfrute8YsKsUNshB6KWgAp9tbMzf",
//     Cookie:
//       'personalization_id="v1_9UB28lmsoNJhwvm0kFQ+sQ=="; guest_id=v1%3A159659739364068268',
//   },
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Listens to incoming messages that contain "hello"
app.message("hello", async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Hey there <@${message.user}>!`,
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
          },
          action_id: "button_click",
        },
      },
    ],
    text: `Hey there <@${message.user}>!`,
  });
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
