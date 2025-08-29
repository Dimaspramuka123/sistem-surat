const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

// GitHub config - TOKEN AMAN DI SERVER
const GITHUB_CONFIG = {
    username: 'Dimaspramuka123',
    repo: 'sistem-surat',
    token: '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'
};

app.use(cors());
app.use(express.json());

// Endpoint untuk save data
app.post('/api/save', async (req, res) => {
    // Implementasi save ke GitHub
});

// Endpoint untuk load data  
app.get('/api/load/:type', async (req, res) => {
    // Implementasi load dari GitHub
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
