const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Головна сторінка
app.get("/", (req, res) => {
    const currentDate = new Date().toLocaleString();
    res.send(`
        <h1>Календар</h1>
        <p>Сьогоднішня дата: ${currentDate}</p>
    `);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});