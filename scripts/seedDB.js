//--Dependencies
    const mongoose = require("mongoose");
    const db = require("../models");

//--This file empties the Tickets collection and inserts the tickets below

    mongoose.connect(
        process.env.MONGODB_URI ||
        "mongodb://localhost/sodo_db"
      );

      const ticketSeed = [
        {
          title: "oven",
          manager: "Vanessa",
          note:
            "Oven pilot light is out every mourning, causing delays in oven temp for lunch",
          date: new Date(Date.now())
        },
        {
          title: "women's bathroom ",
          manager: "Cindy",
          note:
            "sink is leaking where pluming meets the wall",
          date: new Date(Date.now())
        },
        {
          title: "Heat Lamp",
          manager: "Vanessa",
          note:
            "heat lamp by grill cook is out",
          date: new Date(Date.now())
        },
        {
          title: "Office Door",
          manager: "Tia",
          note:
            "Office door jamming, hard to pull the door open",
          date: new Date(Date.now())
        },
        {
          title: "dinning room lights",
          manager: "tia",
          note:
            " three lights out in dinning room ",
          date: new Date(Date.now())
        },
        {
          title: "dishwasher sink",
          manager: "Vanessa",
          note:
            "two gaskets blown item#234421, please re-order parts",
          date: new Date(Date.now())
        },
        {
          title: "Roku",
          manager: "Vanessa",
          note:
            "Roku item#313943 needs replacement",
          date: new Date(Date.now())
        },
        {
          title: "Kitchen tile",
          manager: "Cindy",
          note:
            "Kitchen tile needs replacement under stand up cooler",
          date: new Date(Date.now())
        },
        {
          title: "Kitchen tile groute",
          manager: "Cindy",
          note:
            "new groute needs to be applied on kitchen tile under dishwasher",
          date: new Date(Date.now())
        },
        {
          title: "Back Door alarm",
          manager: "Vanessa",
          note:
            "back door alarm is not sounding when door is opened",
          date: new Date(Date.now())
        },
        {
          title: "Dumpster doors",
          manager: "Vanessa",
          note:
            "Dumpster doors need to be re-painted, no paint purchase needed ask manager on duty to show you left over paint at the store.",
          date: new Date(Date.now())
        },
        {
          title: "patio",
          manager: "Cindy",
          note:
            "patio table's #2 and #5 need to be checked, guest complaint on shaky tables",
          date: new Date(Date.now())
        },
        {
          title: "Prep Sink",
          manager: "Tia",
          note:
            "Prep sink clogged",
          date: new Date(Date.now())
        },
        {
          title: "grill",
          manager: "Vanessa",
          note:
            "grill coil is out",
          date: new Date(Date.now())
        },
        {
          title: "grill hood",
          manager: "Vanessa",
          note:
            "Grill Hood is not working",
          date: new Date(Date.now())
        },
        {
          title: "prep sink",
          manager: "Cindy",
          note:
            "2nd prep sink clogged",
          date: new Date(Date.now())
        }
      ];

      db.Ticket
        .remove({})
        .then(()=> db.Ticket.collection.insertMany(ticketSeed))
        .then(data => {
            console.log(data.result.n + " records inserted!");
            process.exit(0);
        })
        .catch(err =>{
            console.error(err);
            process.exit(1);
        });