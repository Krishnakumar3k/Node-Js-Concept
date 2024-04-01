const express = require('express');
require('./p2_config');
const product = require('./p2_product');

const app = express();
app.use(express.json()); // parse it is convert the data into JSON

app.get("/search/:key", async (req, res) => {
    try {
        console.log(req.params.key);
        let data = await product.find({
            $or: [
                { "name": { $regex: req.params.key, $options: "i" } },// $options: "i" for case-insensitive search
                { "brand": { $regex: req.params.key, $options: "i" } } // $options: "i" for case-insensitive search
            ]
        });
        res.send(data); // send data to body
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});
