/********************
* Defined constants
*********************/
const MONTH = "May"
const START_DAY = 9;
const YEAR = 2022;
const DATES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const EVENTS = {
  WICS: [
    {
      name: "WICS Crowdstrike Roundtable",
      time: "6 PM - 7 PM",
      date: 0,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    }
  ],
  ICSSC: [
    {
      name: "ICS Professor Q&A",
      time: "6 PM - 7 PM",
      date: 1,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    },
    {
      name: "ICSSC Typing Competition",
      time: "6 PM - 7 PM",
      date: 2,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    },
    {
      name: "ICS Prom",
      time: "6 PM - 9 PM",
      date: 4,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    }
  ],
  Data: [
    {
      name: "Data@UCI Python for Data Analysis Workshop",
      time: "7 PM - 8 PM",
      date: 1,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    }
  ],
  AI: [
    {
      name: "AI@UCI Jeopardy Event",
      time: "6 PM - 7 PM",
      date: 2,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    }
  ],
  MAISS: [
    {
      name: "MAISS Intro to Technical Project Management Workshop",
      time: "5 PM - 6 PM",
      date: 3,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    }
  ],
  Hack: [
    {
      name: "Hack@UCI Scratch-A-Thon",
      time: "5 PM - 6 PM",
      date: 3,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    }
  ],
  VGDC: [
    {
      name: "VGDC Game Night",
      time: "8 PM - 10 PM",
      date: 3,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    }
  ],
  Design: [
    {
      name: "Design at UCI Picnic in Aldrich Park",
      time: "1 PM - 3 PM",
      date: 4,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    }
  ],
  Blockchain: [
    {
      name: "Blockchain at UCI: Mint your own Petr NFT",
      time: "4 PM - 5 PM",
      date: 4,
      location: "TBD",
      rsvp: "",
      zoom: "",
      poster: ""
    }
  ],
  CTC: []
};

function ShowEventInfo(club, eventIdx) {
  let eventInfo = EVENTS[club][eventIdx];
  document.getElementById("event-title").innerText = eventInfo.name;
  document.getElementById("event-date").innerHTML = `<strong>${DATES[eventInfo.date]}</strong>, ${MONTH} ${START_DAY + eventInfo.date}, ${YEAR}`;
  document.getElementById("event-time").innerHTML = eventInfo.time;
  document.getElementById("event-location").innerText = eventInfo.location;

  let rsvpLink = document.getElementById("rsvp-link");
  if (eventInfo.rsvp !== "") {
    rsvpLink.href = eventInfo.rsvp;
    rsvpLink.innerText = "RSVP"
    rsvpLink.style.display = "inline-block";
  }
  else {
    rsvpLink.href = "";
    rsvpLink.innerText = "";
    rsvpLink.style.display = "none";
  }

  let zoomLink = document.getElementById("zoom-link");
  if (eventInfo.zoom !== "") {
    zoomLink.href = eventInfo.zoom;
    zoomLink.innerText = "Zoom"
    zoomLink.style.display = "inline-block";
  }
  else {
    zoomLink.href = "";
    zoomLink.innerText = "";
    zoomLink.style.display = "none";
  }

  let posterImg = document.getElementById("poster-img");
  if (eventInfo.poster !== "") {
    posterImg.src = eventInfo.poster;
    posterImg.style.display = "inline-block";
    console.log(eventInfo.width);

    if (eventInfo.width !== undefined) {
      posterImg.style.width = eventInfo.width;
    }
    else {
      posterImg.style.width = "425px";
    }

    if (eventInfo.height !== undefined) {
      posterImg.style.height = eventInfo.height;
    }
    else {
      posterImg.style.width = "400px";
    }
  }
  else {
    posterImg.src = "";
    posterImg.style.display = "none";
  }

  document.getElementById("event-title").scrollIntoView({behavior: "smooth"});
}