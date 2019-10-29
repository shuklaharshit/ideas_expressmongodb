if (process.env.NODE_ENV === "production") {
    module.exports = {
        mongoURI:
            "mongodb://ideas516:Harshit%401@cluster0-shard-00-00-rfgwz.mongodb.net:27017,cluster0-shard-00-01-rfgwz.mongodb.net:27017,cluster0-shard-00-02-rfgwz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost/vidjot-dev"
        // "mongodb://ideas516:Harshit%401@cluster0-shard-00-00-rfgwz.mongodb.net:27017,cluster0-shard-00-01-rfgwz.mongodb.net:27017,cluster0-shard-00-02-rfgwz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    };
}
