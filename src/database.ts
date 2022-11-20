import index from "./index";
import { database } from "./database/connection";

async function main() {
  database
    .sync({ alter: true })
    .then(() => {})
    .catch((err) => console.log(err));
    
  await index.listen(index.get("port"));
  console.log("Server running http://localhost:"+index.get("port"));
}


main();
