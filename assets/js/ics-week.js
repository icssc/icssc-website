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
      location: "<a href='https://goo.gl/maps/5smLR77dkm8EM42j8' target='_blank'>DBH 6011</a>",
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
      location: "<a href='https://goo.gl/maps/5smLR77dkm8EM42j8' target='_blank'>DBH 6011</a>",
      rsvp: "",
      zoom: "",
      blurb: "Want to get to know your Professor outside of school? Are you interested in how they came to their professional career?  Come to the ICS Professor Q&A on Tuesday, May 10th from 6-7 in DBH 6011, featuring Professor Alfaro and Professor Navarro! Come find out how Professor Alfaro has ran multiple marathons or learn more about Professor Navarro and her iconic partner Robert!",
      poster: "assets/img/icsweek/icsprofessorqa.PNG"
    },
    {
      name: "ICSSC Typing Competition",
      time: "7:30 PM - 8:30 PM",
      date: 2,
      location: "<a href='https://goo.gl/maps/5smLR77dkm8EM42j8' target='_blank'>DBH 6011</a>",
      rsvp: "https://bit.ly/TypingTournament22",
      zoom: "",
      blurb: "Think you have the fastest fingers in ICS? Crown yourself the WPM winner of our typeracer tournament happening on Wednesday 5/11 from 7-9 PM at DBH 6011!",
      poster: "assets/img/icsweek/typingcompetition.png"
    },
    {
      name: "ICS Prom",
      time: "6:30 PM - 9 PM",
      date: 4,
      location: "<a href='https://goo.gl/maps/5smLR77dkm8EM42j8' target='_blank'>DBH 6011</a>",
      rsvp: "https://bit.ly/ICSProm",
      zoom: "",
      blurb: "Want to meet new people and make new relationships (platonically and romantically 👀)? Did COVID ruin your chances at your in-person Prom/Dances? If your answer is yes to either of these questions, come out and participate in our ICS Prom during ICS week on Friday, May 13th at 6:30PM. We will have fun activities including : dancing, eating, and socializing! As this is like many other proms, you should dress to impress - just like you’re impressing a date. You can still come without dressing up, but know that your fictional date will be disappointed. Hope to see everyone there!",
      poster: "assets/img/icsweek/icsprom.png"
    }
  ],
  Data: [
    {
      name: "Data@UCI Python for Data Analysis Workshop",
      time: "7 PM - 8 PM",
      date: 1,
      location: "<a href='https://goo.gl/maps/qUkezxpfewj2G3Du5' target='_blank'>ISEB 1200</a>",
      rsvp: "https://docs.google.com/forms/d/e/1FAIpQLSdrUkPs-PtE2gIs1WQm5xxIpEvrY0LxOQzK-EY1jUVIz252cw/viewform",
      zoom: "",
      blurb: "Want to learn how to analyze data with Python or add a new skill to your toolbox? Data @ UCI will be hosting an Intro to Python for Data Analysis Workshop in the Interdisciplinary Science and Engineering Building (ISEB) in Room 1200 on Tuesday, 5/10/2022 from 7-8:30 pm. This workshop is intended for people who have some experience with Python but are new to its applications in data analysis. We will be going over dataframes using the Pandas library. There will be free food and drinks for attendees as well as a gift card raffle! This workshop will be highly interactive so make sure to bring your laptop!",
      poster: "assets/img/icsweek/dataworkshop.PNG"
    }
  ],
  AI: [
    {
      name: "AI@UCI Jeopardy Event",
      time: "6 PM - 7:30 PM",
      date: 2,
      location: "<a href='https://goo.gl/maps/LRJaQVRiQyPomdA87' target='_blank'>ICS 428</a>",
      rsvp: "",
      zoom: "",
      blurb: "This week is ICS Week! There will be a number of special events hosted by different ICS Student Organizations. We'll be hosting an AI-themed Jeopardy Game with prizes in ICS 428 from 6:00pm-7:30pm...hope to see you there!",
      poster: ""
    }
  ],
  MAISS: [
    {
      name: "MAISS Intro to Technical Project Management Workshop",
      time: "5 PM - 6 PM",
      date: 3,
      location: "Zoom",
      rsvp: "https://forms.gle/f7sCDfMPqtMioAWJA",
      zoom: "https://uci.zoom.us/j/3133884551",
      blurb: "Come out to MAISS’ ICS Week event and learn about the basics of Technical Project Management! We’ll be going over concepts such as what is Technical Project Management, Agile methodologies & Scrum, and project management tools. Hope to see you there!",
      poster: ""
    }
  ],
  Hack: [
    {
      name: "Hack@UCI Scratch-A-Thon",
      time: "7 PM - 8:30 PM",
      date: 3,
      location: "<a href='https://goo.gl/maps/LRJaQVRiQyPomdA87' target='_blank'>ICS 428</a>",
      rsvp: "",
      zoom: "",
      blurb: "Hack@UCI is hosting our inaugural scratch-a-thon!! Come out to work on your very own Scratch hack and see what others have built 😼",
      poster: "assets/img/icsweek/scratchathon.jpg"
    }
  ],
  VGDC: [
    {
      name: "VGDC Game Night",
      time: "8 PM - 10 PM",
      date: 3,
      location: "<a href='https://goo.gl/maps/5smLR77dkm8EM42j8' target='_blank'>DBH 1412</a>",
      rsvp: "",
      zoom: "",
      blurb: "Come join the Video Game Development Club for a Game Night, this Thursday, May 12th, from 8-10pm! We will have our very own Game Lab open at DBH 1412 for you to play some games our past members have made, as well as compete against each other Smash, Mario Kart, and Jackbox. Stop by to see what our club is all about!",
      poster: "assets/img/icsweek/gamenight.png"
    }
  ],
  Design: [
    {
      name: "Design at UCI Picnic in Aldrich Park",
      time: "1 PM - 3 PM",
      date: 4,
      location: "<a href='https://goo.gl/maps/4xXd1ddVCyhKEdNi7' target='_blank'>Aldrich Park</a>",
      rsvp: "",
      zoom: "",
      blurb: "Join us for a picnic in the middle of Aldrich where we'll host games, icebreakers, and food!",
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
  document.getElementById("event-location").innerHTML = eventInfo.location;

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
  
  document.getElementById("event-title").scrollIntoView({behavior: "smooth"});
}