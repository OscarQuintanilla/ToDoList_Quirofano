const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = app => {
  app.get('/user/getAll', (req, res) => {
    User.find()
      .then((userList) => {
        res.json({ userList });
      });
  })

  app.post('/user/insert', (req, res) => {
    User.findOne({ user: req.body.user })
      .then((userExist) => {
        if (userExist) {
          res.json({ 'status': "false" });
        } else {
          new User({
            user: req.body.user,
            name: req.body.name,
            pasword: req.body.password,
            job: req.body.job
          }).save();
          res.json({ 'status': "true" });
        }
      })
  });
  app.put('/user/update', (req, res) => {
    User.findOne({ user: req.body.newuser })
      .then((userExist) => {
        if (userExist) {
          res.json({ 'status': 'false' });
        } else {
          User.updateOne({ user: req.body.user },
            {
              user: req.body.newuser,
              name: req.body.name,
              pasword: req.body.password,
              job: req.body.job
            }).then((updatedUser) => {
              console.log(updatedUser);
            });
          res.json({ 'status': 'true' });
        }
      });
  });
  app.delete('/user/delete', (req, res) => {
    User.deleteOne({ user: req.body.user })
      .then((deletedUser) => {
        if (deletedUser) {
          res.json({ 'status': 'true' });
        } else {
          res.json({ 'status': 'false' });
        }
      })
  })
}