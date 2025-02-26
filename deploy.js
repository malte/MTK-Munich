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
    // Start timing the upload process
    const startTime = Date.now();
    
    try {
        // Make sure the host doesn't include the protocol prefix (ftp://)
        const host = process.env.FTP_HOST ? process.env.FTP_HOST.replace(/^ftp:\/\//, '') : '';
        
        await client.access({
            host: host,
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
        
        // Calculate and display the elapsed time
        const endTime = Date.now();
        const elapsedSeconds = ((endTime - startTime) / 1000).toFixed(2);
        console.log(`Upload completed in ${elapsedSeconds} seconds.`);
    } catch (err) {
        console.error(err);
        
        // Even if there's an error, show how much time elapsed
        const endTime = Date.now();
        const elapsedSeconds = ((endTime - startTime) / 1000).toFixed(2);
        console.log(`Process failed after ${elapsedSeconds} seconds.`);
    }
    client.close();
}

upload();
