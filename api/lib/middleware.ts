import express from "express";

export const setupMiddleware = (app) => {
  console.log("middleware!");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
