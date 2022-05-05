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
      time: "6:30 PM - 8 PM",
      date: 0,
      location: "DBH 6011",
      rsvp: "https://bit.ly/WICSxCrowdstrike",
      zoom: "",
      blurb: "Ever wonder what it's like to work for any industry leader in cybersecurity? Join us Monday 5/9! 6:30 - 8 PM in DBH 6011.",
      poster: "assets/img/icsweek/crowdstrike.png"
    }
  ],
  ICSSC: [
    {
      name: "ICS Professor Q&A",
      time: "6 PM - 7 PM",
      date: 1,
      location: "DBH 6011",
      rsvp: "",
      zoom: "",
      blurb: "",
      poster: ""
    },
    {
      name: "ICSSC Typing Competition",
      time: "6 PM - 7 PM",
      date: 2,
      location: "DBH 6011",
      rsvp: "https://bit.ly/TypingTournament22",
      zoom: "",
      blurb: "Think you have the fastest fingers in ICS? Crown yourself the WPM winner of our typeracer tournament happening on Wednesday 5/11 from 7-9 PM at DBH 6011!",
      poster: ""
    },
    {
      name: "ICS Prom",
      time: "6 PM - 9 PM",
      date: 4,
      location: "DBH 6011",
      rsvp: "https://bit.ly/ICSProm",
      zoom: "hello",
      blurb: "Want to meet new people and make new relationships (platonically and romantically 👀)? Did COVID ruin your chances at your in-person Prom/Dances? If your answer is yes to either of these questions, come out and participate in our ICS Prom during ICS week on Friday, May 13th at 6:30PM. We will have fun activities including : dancing, eating, and socializing! As this is like many other proms, you should dress to impress - just like you’re impressing a date. You can still come without dressing up, but know that your fictional date will be disappointed. Hope to see everyone there!",
      poster: ""
    }
  ],
  Data: [
    {
      name: "Data@UCI Python for Data Analysis Workshop",
      time: "7 PM - 8 PM",
      date: 1,
      location: "DBH 6011",
      rsvp: "",
      zoom: "",
      blurb: "",
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
      blurb: "",
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
      blurb: "",
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
      blurb: "",
      poster: ""
    }
  ],
  VGDC: [
    {
      name: "VGDC Game Night",
      time: "8 PM - 10 PM",
      date: 3,
      location: "DBH 1412",
      rsvp: "",
      zoom: "",
      blurb: "",
      poster: ""
    }
  ],
  Design: [
    {
      name: "Design at UCI Picnic in Aldrich Park",
      time: "1 PM - 3 PM",
      date: 4,
      location: "Aldrich Park",
      rsvp: "",
      zoom: "",
      blurb: "",
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
      blurb: "",
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
    rsvpLink.innerHTML = "<strong>RSVP</strong>"
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
    zoomLink.innerHTML = "<strong>Zoom</strong>"
    zoomLink.style.display = "inline-block";
  }
  else {
    zoomLink.href = "";
    zoomLink.innerText = "";
    zoomLink.style.display = "none";
  }

  let eventBlurb = document.getElementById("event-blurb");
  if (eventInfo.blurb !== "") {
    eventBlurb.style.display = "block";
    eventBlurb.innerText = eventInfo.blurb;
  }
  else {
    eventBlurb.style.display = "none";
    eventBlurb.innerText = "";
  }

  let posterImg = document.getElementById("poster-img");
  if (eventInfo.poster !== "") {
    posterImg.src = eventInfo.poster;
    posterImg.style.display = "inline-block";

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
  
  document.getElementsByTagName("footer")[0].scrollIntoView({behavior: "smooth"});
}