import "reflect-metadata"; 
import express from "express";
import "./database";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));