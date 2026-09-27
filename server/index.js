import app from "./app.js";
import dbConnection from "./config/database.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await dbConnection();

    app.listen(PORT, () => {
      console.log(`BizTrack server is running at port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();