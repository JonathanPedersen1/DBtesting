const express = requrie("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:admin123@cluster0.1j8ahgl.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const resourceSchema = new mongoose.chema({
    content: String
})

const resource = mongoose.model("resource", resourceSchema)