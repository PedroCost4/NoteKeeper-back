import app from './app';
import router from './routes';
import bodyparser  from 'body-parser';
require('dotenv').config();

app.use(bodyparser.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}!`));