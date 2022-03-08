const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const data = [
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: ["https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg"],
  },
  {
    forename: "jennifer",
    surname: "tran",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: [],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: [],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: ["https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg"],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: ["https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg"],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: ["https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg"],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: ["https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg"],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: ["https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg"],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: ["https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg"],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: ["https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg"],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: [],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: ["https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg"],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: ["https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg", "https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg", "https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg", "https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg"],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "",
    image: [],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "I'm just feeling pretty damn good about this",
    image: [],
  },
  {
    forename: "ross",
    surname: "keeley",
    profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    text: "This is the text of a post",
    image: [
      "https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg", 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnioaaoK8nV0KBbjmsxj4AtGpo3i7lwmGbg&usqp=CAU", 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBrCo3T6TuNgUUya1cY5CDJZ0I9WKnfr4mA&usqp=CAU", 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJDYmlUL8nhxpNHlNTfEwzq_qn34kcSeTpg&usqp=CAU"
    ]
  }
];

app.get("/home", (req, res) => {
  res.json({ message: "Hello from server! Welcome to the homepage" });
});

app.get("/content-feed", (req, res) => {
  res.json(data);
});

app.get("/about", (req, res) => {
  res.json({ message: "Hello from server! Welcome to the about page" });
});

app.get("/contact", (req, res) => {
  res.json({ message: "Hello from server! Welcome to the contact page" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});