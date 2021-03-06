import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT);

// start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
