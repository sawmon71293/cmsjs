import express from "express";
import cors from 'cors';
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path'
import { fileURLToPath } from "url";


// Get the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = process.env.PORT || 4000
connectDB ()

const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "My API",
        version: "1.0.0",
        description: "API documentation for my application",
      },
      servers: [
        {
          url: `http://localhost:${port}/api`,
        },
      ],
    },
    apis: [path.join(__dirname, "/routes/*.js")], // Path to your route files
  };
  
const swaggerDocs = swaggerJSDoc(swaggerOptions);
console.log (swaggerDocs)

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}))

// API endpoints
app.get('/', (req, res) => res.send("api is working fine"));
app.use ('/api/auth', authRouter)
// Swagger UI page
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port,() => console.log(`server started on port: ${port}`));
