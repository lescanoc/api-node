const repuesta = require('../libs/requests');
const db = require('../databases/mysql');

const TABLA = "motores";

export const getMotorstodos = async (req, res) => { 
  const todos = await db.todos(TABLA);
  repuesta.success(req, res, todos, 200);
};

export const getMotors = (req, res) => {  
  repuesta.success(req, res,'Todo Ok',200);
};

export const getMotorById = (req, res) => {  
  repuesta.success(req, res,'Todo Ok',200);
};

export const createMotors = (req, res) => {  
  res.json("Creaate Motors");
};

export const updateMotorsById = (req, res) => {  
  res.json("Update Motors");
};

export const deleteMotorsById = (req, res) => {  
  res.json("Delete Motors");
};

