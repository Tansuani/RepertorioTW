import express from "express"
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get("/home", (req, res) => {res.send("hello World Express Js")})
app.get("/cansiones", (req, res) => {
    try {
        const cansiones = JSON.parse(fs.readFileSync("cansiones.json"));
        res.json(cansiones);
    } catch (error) {
        res.status(500).json({error: "Error al procesar la solicitud"});
        console.error("Error al procesar la solicitud", error);
    }
});

app.post("/cansiones", (req, res) => {
    const cansion = req.body;
    const cansiones = JSON.parse(fs.readFileSync("cansiones.json", "utf8"));
    cansiones.push(cansion);
    fs.writeFileSync("cansiones.json", JSON.stringify(cansiones));
    res.send("cansion agregada")
})

app.delete("/cansiones/:id", (req, res) => {
    const { id } = req.params;
    const cansiones = JSON.parse(fs.readFileSync("cansiones.json", "utf8"));
    const index = cansiones.findIndex(cansion => cansion.id === id);
    cansiones.splice(index, 1);
    fs.writeFileSync("cansiones.json", JSON.stringify(cansiones));
})
app.listen(PORT, console.log("¡Servidor encendido"))

