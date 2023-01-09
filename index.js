const express = require("express");

const app = express();
const propertiesRoutes = require("./routes/properties"); 



app.use("/api/v1",propertiesRoutes);


app.listen(3000, () => {
    console.log("Server is listening on port: 3000");
})
