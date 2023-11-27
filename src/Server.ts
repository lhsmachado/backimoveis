import { app } from "./index";

const port = process.env.PORT;

app.listen(port, () => console.log(`Server Running at port ${port}`));
