import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready ");
// });

// get a list of 5 jokes
app.get("/apijokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Invisible Man",
      content:
        "Why did the invisible man turn down the job offer? Because he couldn't see himself working there!",
    },
    {
      id: 2,
      title: "Time Traveler's Dilemma",
      content:
        "A time traveler walks into a bar. The bartender says, 'We don't serve time travelers here.' The time traveler responds, 'Well, I won't be coming here again.'",
    },
    {
      id: 3,
      title: "Math Joke",
      content:
        "Why was the equal sign so humble? Because he knew he wasn't less than or greater than anyone else!",
    },
    {
      id: 4,
      title: "Coffee Addiction",
      content: "Why did the coffee file a police report? It got mugged!",
    },
    {
      id: 5,
      title: "Smartphone Puns",
      content: "Why did the smartphone go to therapy? It had too many issues!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is raedy and listing at 3000");
});
