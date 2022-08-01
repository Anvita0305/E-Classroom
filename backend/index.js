const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/conn");
const cors = require("cors");
const mongoose = require("mongoose");
//models
const User = require("./models/user.model");
const studentAssignmentUploads = require("./models/studentsuploads.model");
const TodoListItems = require("./models/todo.model");
// for authentication
const jwt = require("jsonwebtoken");
var validator = require('validator');
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const formidable = require('formidable');
const multer = require('multer');
let path = require('path');
// var fetchController= require('../');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



//register route
app.post("/register", (req, res) => {
  try {
    console.log(req.body)
    var regEx = /^[0-9a-zA-Z]+$/;
    var alpha = /^[A-Za-z]+$/;
    const { firstName, lastName, email, password, confirmpassword } = req.body;
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        // res.send({ message: "user already exist" });
        res.json({ status: "dupemail" });
      }
      // validations
      else if (!validator.isEmail(email)) {
        // res.send({ message: "email is not valid" })
        res.json({ status: "invemail" });

      }
      else if (password !== confirmpassword) {
        // res.send({ message: "password does not match" })
        res.json({ status: "passmatch" });
      }
      else if (password.length < 8) {
        // res.send({ message: "password is too short" })
        res.json({ status: "shortpass" });
      }
      else if (password.length > 20) {
        // res.send({ message: "password is too long" })
        res.json({ status: "longpass" });
      }
      else if (!regEx.test(password)) {
        // res.send({ message: "Password should contain only alphanumeric characters!" })
        res.json({ status: "invpass" });
      }
      else if (!regEx.test(firstName)) {
        // res.send({ message: "First name should contain only alphabets!" })
        res.json({ status: "invfname" });
      }
      else {
        const user = new User({ firstName, lastName, email, password, confirmpassword })

        user.save(err => {
          if (err) {
            // res.send(err) 
            window.location.href = "http://localhost:3000/Login";

          } else {
            // res.send({ message: "Successful" })
            res.json({ status: "ok" });
          }
        })
      }
    })
  } catch (error) {
    console.log(error);
  }
});

//login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      const match = bcrypt.compare(password, user.password);
      if (match) {
        //  res.send({message:"login sucess",user:user})
        res.json({ status: "ok" });
      } else {
        //  res.send({message:"wrong credentials"})
        res.json({ status: "wrongcreds" });
      }
    } else {
      // res.send("not register")
      res.json({ status: "plsregis" });
    }
  })
});

//to-do route
app.post("/api/todo", (req, res) => {
  const { username, itemName } = req.body;
  TodoListItems.findOne({ username: username }, (err, user) => {
    if (!user) {
      TodoListItems.create({
        username: username,
        itemName: itemName,
      })
      res.json({ status: "ok" });
    } else {
      TodoListItems.findOneAndUpdate({ username: username }, { $push: { itemName: itemName } }, (err, user) => {
        if (err) {
          console.log(err);
        } else {
          res.json({ status: "ok" });
        }
      })
    }
  })
})

app.get('/api/todo', function(req, res, next) {
  const { username, itemName } = req.body;
  TodoListItems.find({}, function(err, todo) {
    if (err) {
      // res.send(err);
      console.log(err);
    }
    res.json(todo);
    } 
)});

app.delete("/api/todo/:id/:username/:itemName", (req, res) => {
  const id = req.params.id;
  const username = req.params.username;
  // const { username, itemName } = req.body;
  const itemName = req.params.itemName;
  TodoListItems.findByIdAndUpdate({_id:id},{$pull:{itemName:itemName }}).then(() => {
    res.json({ status: "ok" }); 
  }
  ).catch(err => {
    console.log(err);
  })
}
)

app.get("/logout", (req, res) => {
  req.logout();  
  res.redirect("/");
})


const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

let uploadAssg = multer({ Storage, fileFilter });

// const uploadAssg = multer({
//   storage: Storage,
//   // limits: { fileSize: 1000000 },
// }).single('myImage');

//assignment uploads route
app.post("/api/uploadassg", uploadAssg.single('assignment'), (req, res) => {
  // uploadAssg(req, res, (err) => 
  // {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     if (req.file == undefined) {
  //       // res.send('No file selected');
  //       console.log("no file selected");
  //     }
  //     else {
  //       console.log(req.file);
  //       // res.send('File uploaded successfully');
  //     }
  //   }
  try {
    console.log(req.body)

    // const { assignmentId, studentId, fileName, assignment, fileUploadDate, fileUploadTime } = req.body;

    const upload = new studentAssignmentUploads({
      assignmentId: req.body.assignmentId,
      studentId: req.body.studentId,
      fileName: req.body.fileName,
      assignment:
      {
        data: req.body.data,
        contentType: req.body.mimetype,
      },
      fileUploadDate: req.body.fileUploadDate,
      fileUploadTime: req.body.fileUploadTime,
    })

    upload.save(err => {
      if (err) {
        // res.send(err);
        console.log(err);
      } else {
        // res.send({ message: "Successful" })
        res.json({ status: "ok" });
      }
    })
  }
  catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(port, "Started Successfully!");
});