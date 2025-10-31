import express from "express";
import categoryRoutes from "./routes/category.routes";

const app = express();
app.use(express.json());

app.use("/categories", categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
