const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// ''''''''''''''''''''''''''''''''''''''''
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterdev.vuqw7lb.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDev`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();

        // database and collections
        const database = client.db("TravelDB");
        const userCollection = database.collection("Users");
        const touristsCollection = database.collection("Tourists");
        const countriesCollection = database.collection("Countries");

        // create single user
        app.post("/users", async (req, res) => {
            console.log("user req", req.body);
            const user = await userCollection.insertOne(req.body);
            res.send(user);
        });

        // add torist sport
        app.post("/tourists", async (req, res) => {
            console.log("data",req.body);
            const tourist = await touristsCollection.insertOne(req.body);
            res.send(tourist);
        });

        // show ul add torist sport
        app.get("/tourists", async (req, res) =>{
            const tourist = await touristsCollection.find().toArray();
            res.send(tourist);
        })

        // show ul single data torist sport
        app.get("/tourists/:id", async (req, res) =>{
            const id = req.params.id;
            const tourist = await touristsCollection.findOne({
                _id: new ObjectId(id),
            });
            res.send(tourist);
        })

        // torist for delate 
        app.delete("/mylist/:id", async (req, res) =>{
            const tourist = await touristsCollection.deleteOne({
                _id: new ObjectId(req.params.id),
            });
            res.send(tourist);
        })


        // get mylist specific item
        app.get("/update-mylist/:id", async (req, res) => {
            const data = await touristsCollection.findOne({
                _id: new ObjectId(req.params.id),
            });
            res.send(data);
        });

        // mylist update & edit
        app.put("/update-mylist/:id", async(req, res) =>{
            const {
                areaImage,
                area,
                country,
                location,
                description,
                avg_cost,
                seasonality,
                duration,
                total_visitors,
            } = req.body;

            const mylist = await touristsCollection.updateOne(
                {
                    _id: new ObjectId(req.params.id),
                },
                {
                    $set: {
                        areaImage,
                        area,
                        country,
                        location,
                        description,
                        avg_cost,
                        seasonality,
                        duration,
                        total_visitors,
                    },
                },
                { upsert: true }
            );
            res.send(mylist);
        })

     
        

        // match email then show ul
        app.get("/mylist/:email", async (req, res) =>{
            const tourist = await touristsCollection.find({
                email: req.params.email,
            }).toArray();
            res.send(tourist);
        });


        
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Your successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
// '''''''''''''''''''''''''''''''''''''''''''''''

app.get("/", (req, res) => {
    res.send("Hello Everyone!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
