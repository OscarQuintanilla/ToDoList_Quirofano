const mongoose = require('mongoose');
const Category = mongoose.model('category')

module.exports = app => {

  /**
   * Status
   * *true: operation done
   * *false: it was already created
   */

  app.get('/api/category/getAll', (req, res) => {
    Category.find()
      .then((categoryList) => {
        res.json({ categoryList });
      });
  });

  app.post('/api/category/insert', (req, res) => {
    Category.findOne({ nameCategory: req.body.nameCategory })
      .then((exitingCategory) => {
        if (exitingCategory) {
          //Prevents to repeat insertion
          res.json({ 'status': "false" });
        } else {
          var data = new Category({ nameCategory: req.body.nameCategory, user: req.body.user });
          data.save();
          console.log(data);
          res.json({ 'status': "true" });
        }
      });
  });
  app.put('/api/category/update', (req, res) => {
    Category.findOne({ nameCategory: req.body.nameCategory })
      .then((existingCateogry) => {
        if (existingCateogry) {
          res.json({ 'status': "false" });
        } else {
          Category.updateOne({ nameCategory: req.body.oldName }, { nameCategory: req.body.nameCategory })
            .then((updatedCategory) => {
              res.json({ 'status': 'true' });
            });
        }
      });
  });

  app.delete('/api/category/delete', (req, res) => {
    Category.deleteOne({ nameCategory: req.body.nameCategory })
      .then((deletedCategory) => {
        if (deletedCategory) {
          res.json({ 'status': '1' });
        } else {
          res.json({ 'status': '0' })
        }
      });
  });
}