const mongoose = require('mongoose');
const List = mongoose.model('list');

module.exports = app => {
  app.get('/list/getAll', (req, res) => {
    List.find().then((metaList) => {
      res.json({ metaList });
    });
  });
  app.post('/list/insert', (req, res) => {
    List.findOne({ nameList: req.body.nameList })
      .then((existList) => {
        if (existList) {
          res.json({ 'status': 'false' });
        } else {
          new List({
            nameList: req.body.nameList,
            category: req.body.category,
            user: req.body.user,
            items: req.body.items
          }).save();
          res.json({ 'status': 'true' });
        }
      });
  });
  app.put('/list/update', (req, res) => {
    List.findOne({ nameList: req.body.newnamelist })
      .then((exitingList) => {
        if (exitingList) {
          res.json({ 'status': 'false' });
        } else {
          List.updateOne({ nameList: req.body.newnamelist })
            .then((updatedList) => {
              res.json({ 'status': 'true' });
            });
        }
      })
  });
  app.delete('/list/delete', (req, res) => {
    List.deleteOne({ nameList: req.body.nameList }).then((deletedList) => { res.json({ 'status': 'true' }) });
  });
}