const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { ConfigureDb } = require('./src/config/dbConfig');
const adminRoutes = require('./src/router/adminRoutes');
const projectRoutes = require('./src/router/project.router');
const clientRoutes = require('./src/router/clientRouter');
const userRoutes = require('./src/router/userRouter');
const subscribeRoutes = require('./src/router/subscribeRouter');
dotenv.config();

const app = express();

// Use built-in middleware for body parsing (no need for body-parser)
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

app.use(cors());
ConfigureDb();

// Set up routes
app.use('/api/admin', adminRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/projects-users', userRoutes);
app.use('/api/subscribed-emails', subscribeRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
