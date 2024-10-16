// deploy.js
import pkg from 'basic-ftp';
const { Client:FTPClient } = pkg;
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

async function upload() {
    const client = new FTPClient();
    try {
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            secure: true, // or false depending on your server
            secureOptions: {
                rejectUnauthorized: false // Disable strict SSL verification
            }
        });
        console.log("Connected to FTP server.");

        // Change to the directory where you want to upload
        await client.ensureDir("/");
        await client.clearWorkingDir(); // Optional: clear the directory before upload

        // Upload the dist folder
        await client.uploadFromDir(path.join(process.cwd(), 'dist')); // Use process.cwd() to get the current working directory
        console.log("Upload completed.");
    } catch (err) {
        console.error(err);
    }
    client.close();
}

upload();
