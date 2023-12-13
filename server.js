import express from "express"
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get("/home", (req, res) => {res.send("hello World Express Js")})
app.get("/productos", (req, res) => {
    try {
        const productos = JSON.parse(fs.readFileSync("productos.json"));
        res.json(productos);
    } catch (error) {
        res.status(500).json({error: "Error al procesar la solicitud"});
        console.error("Error al procesar la solicitud", error);
    }
});

app.listen(PORT, console.log("¡Servidor encendido"))

