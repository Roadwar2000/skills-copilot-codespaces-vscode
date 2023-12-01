// Create web server
// 2016-04-11
// ---------------------------------

var express = require('express');
var router = express.Router();
var comments = require('../models/comments.js');

/* GET comments listing. */
router.get('/', function(req, res, next) {
  comments.find(function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

/* POST /comments */
router.post('/', function(req, res, next) {
  comments.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /comments/id */
router.get('/:id', function(req, res, next) {
  comments.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /comments/:id */
router.put('/:id', function(req, res, next) {
  comments.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /comments/:id */
router.delete('/:id', function(req, res, next) {
  comments.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});