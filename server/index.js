import app from "./app.js";
import envData from "./config/config.js";
import dbConnection from "./config/database.js";

const PORT= envData.port;
app.listen(PORT, async ()=>{
console.log(`BizTrack server is running at port ${PORT}`)
await dbConnection()
})
