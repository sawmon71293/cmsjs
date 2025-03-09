import express from 'express'
import { login, logout, register } from '../controller/authController.js';

const authRouter = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Use this endpoint to register a new user in the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully registered
 *       400:
 *         description: Invalid registration data
 *       500:
 *         description: Internal server error
 */
authRouter.post('/register', register)
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login to the application
 *     description: Use this endpoint to log in with your credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
authRouter.post('/login', login)
/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Login to the application
 *     description: Use this endpoint to log in with your credentials.
 *     
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       500:
 *         description: Internal server error
 */
authRouter.post('/logout', logout)

export default authRouter