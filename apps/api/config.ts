import { config } from "dotenv";

config();

export const NODE_ENV = process.env.NODE_ENV || "development";

// Load all environment variables from .env file

export const PORT = process.env.PORT || 8000;
export const DATABASE_URL = process.env.DATABASE_URL || "";
export const JWT_SECRET = process.env.JWT_SECRET || "";
