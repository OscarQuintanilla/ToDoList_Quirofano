const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = app => {
  app.post('/api/user/login', (req, res) => {
    User.findOne({ user: req.body.user, password: req.body.password })
      .then((response) => {
        console.log(response);
        res.json(response);
      })
  });

  app.get('/api/user/getAll', (req, res) => {
    User.find()
      .then((userList) => {
        res.json({ userList });
      });
  })

  app.post('/api/user/insert', (req, res) => {
    User.findOne({ user: req.body.user })
      .then((userExist) => {
        if (userExist) {
          res.json({ 'status': "false" });
        } else {
          new User({
            user: req.body.user,
            name: req.body.name,
            password: req.body.password,
            job: req.body.job
          }).save();
          res.json({ 'status': "true" });
        }
      })
  });
  app.put('/api/user/update', (req, res) => {
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
  app.delete('/api/user/delete', (req, res) => {
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