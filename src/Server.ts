import { app } from "./index";
import fs from 'fs';
import https from 'https';

const port = process.env.PORT;

app.listen(port, () => console.log(`Server Running at port ${port}`));

https.createServer({
   
}, app).listen(3001, () => console.log("Rodando em https"))