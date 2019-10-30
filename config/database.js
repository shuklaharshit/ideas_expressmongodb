if (process.env.NODE_ENV === "production") {
    module.exports = {
        mongoURI:
            "ur database"
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost/vidjot-dev"
   
    };
}
