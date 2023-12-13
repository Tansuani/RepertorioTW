import express from "express"
const app = express()
const PORT = process.env.PORT || 3000

app.get("/home", (req, res) => {res.send("hello World Express Js")})

app.listen(PORT, console.log("¡Servidor encendido"))

