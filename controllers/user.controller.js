const { response, request } = require("express");

const usersGet = (req = request, res = response) => {
  const query = req.query;

  res.json({
    ok: true,
    msg: "get API - controller - controller",
    query,
  });
};

const usersPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    ok: true,
    msg: "put API - controller",
    nombre,
    edad,
  });
};

const usersPut = (req, res = response) => {
  const { id } = req.params;

  res.status(201).json({
    ok: true,
    msg: "post API - controller",
    id,
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    ok: true,
    msg: "delete API - controller",
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    ok: true,
    msg: "patch API - controller",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
  usersPatch,
};
