const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

const getNewId = () => {
    const data = readData();
    return data.length;
}

// Middleware to parse JSON body
app.use(bodyParser.json());

// Read data from JSON file
const readData = () => {
    const data = fs.readFileSync('data.json', 'utf8');
    return JSON.parse(data);
};

// Write data to JSON file
const writeData = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf8');
};

// Get all items
app.get('/items', (req, res) => {
    const data = readData();
    res.json(data);
});

// Get an item by id
app.get('/items/:id', (req, res) => {
    const data = readData();
    const itemId = Number(req.params.id);
    const item = data.find(item => item.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send({error: true, message: 'Item not found'});
    }
});

// Create a new item
app.post('/items', (req, res) => {
    const data = readData();
    const newItem = {...req.body, id: getNewId()};
    data.push(newItem);
    writeData(data);
    res.json(newItem);
});

app.patch('/items/:id', (req, res) => {
    const data = readData();
    const itemId = Number(req.params.id);
    const updateFields = req.body;
    const index = data.findIndex(item => item.id === itemId);
    if (index !== -1) {
        Object.assign(data[index], updateFields);
        writeData(data);
        res.json(data[index]);
    } else {
        res.status(404).send({error: true, message: 'Item not found'});
    }
});

// Update an item by id
app.put('/items/:id', (req, res) => {
    const data = readData();
    const itemId = Number(req.params.id);
    const newItem = {...req.body, id: itemId};
    const index = data.findIndex(item => item.id === itemId);
    if (index !== -1) {
        data[index] = newItem;
        writeData(data);
        res.json(newItem);
    } else {
        res.status(404).send({error: true, message: 'Item not found'});
    }
});

// Delete an item by id
app.delete('/items/:id', (req, res) => {
    const data = readData();
    const itemId = Number(req.params.id);
    const index = data.findIndex(item => item.id === itemId);
    if (index !== -1) {
        const [ deletedItem ] = data.splice(index, 1);
        writeData(data);
        res.send(deletedItem);
    } else {
        res.status(404).send({error: true, message: 'Item not found'});
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
