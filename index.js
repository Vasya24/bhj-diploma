require('dotenv').config();
const { PORT, PUBLIC_PATH, INDEX_FILE } = process.env;
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync', {
    serialize: (data) => encrypt(JSON.stringify(data)),
    deserialize: (data) => JSON.parse(decrypt(data))
  });
const db = low(new FileSync('db.json'));
if(!db.get('users').value())
    setDefaultUser(db);

const app = express();
app.use(express.static(`${__dirname}/${PUBLIC_PATH}`));

const api = require('./routes');
app.use('/', api);
app.use(morgan('tiny'));

app.get('*', function (_, res) {
    res.sendFile(path.resolve(`${__dirname}/${PUBLIC_PATH}`, INDEX_FILE));
});

app.listen(PORT, () => console.log(`Server started at ${PORT}`));


function setDefaultUser(database){
    database.defaults({
        users: [
          { name: "demo", email: "demo@demo.ru", password: "demo", id: "1", isAuthorized: false }
        ],
        accounts: [
          { name: "ЗП счет", user_id: "1", id: "1" },
          { name: "Фриланс", user_id: "1", id: "2" },
        ],
        transactions: [
          { account_id: "1", created_at: "2019-09-15 10:24:02", id: "1", name: "Кредит", sum: 5000, type: "expense", user_id: "1" },
          { account_id: "1", created_at: "2019-09-17 15:53:02", id: "2", name: "ЗП", sum: 80000, type: "income", user_id: "1" },
          { account_id: "1", created_at: "2019-09-19 20:12:02", id: "3", name: "На чёрный день", sum: 1500, type: "income", user_id: "1" },
          { account_id: "2", created_at: "2019-09-26 16:23:02", id: "4", name: "Учеба", sum: 100, type: "income", user_id: "2" }        ]
      }).write()
}
