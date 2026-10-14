// WISyE Type — original, lightweight personality quiz.
// Answers add one point to a personality type. No answers or personal data are sent to a server.

const types = {
  social: {
    number: "TYPE 01", name: "The Social Spark", short: "THE CONNECTOR", symbol: "✳",
    tagline: "You make the room feel like a group chat.",
    description: "You have a gift for making people feel included. You can turn a quick hello into a full conversation, and somehow you know who's new, who's quiet, and who needs an invite. Your calendar may be held together by vibes, but your community game is elite.",
    superpower: "Making introductions feel effortless.",
    trait: "You say “we should all hang out” and actually start the group chat.",
    hang: "A casual social with a few new faces and absolutely no awkward standing-around phase.",
    community: "Your people are the friendly initiators, enthusiastic conversationalists, and “come sit with us” types. Start with a low-pressure coffee run or a bring-one-person social.",
    theme: "theme-social"
  },
  mastermind: {
    number: "TYPE 02", name: "The Mastermind", short: "THE STRATEGIST", symbol: "▦",
    tagline: "There is a plan. There is a backup plan. There is a spreadsheet.",
    description: "You like knowing what's happening, when it's happening, and whether anyone has read the instructions. You're the reliable one who turns a vague idea into an actual plan. You may call it being organized; everyone else calls it a minor miracle.",
    superpower: "Turning good intentions into a real plan.",
    trait: "Your notes have headings, your calendar has colors, and your backup plan has a backup plan.",
    hang: "A planned brunch, a study session with a clear goal, or a social where the details are already handled.",
    community: "Your people are the dependable planners and thoughtful doers. Try a study-date group, a low-key planning night, or a social where everyone gets to contribute an idea.",
    theme: "theme-mastermind"
  },
  thinker: {
    number: "TYPE 03", name: "The Big Thinker", short: "THE IDEA PERSON", symbol: "☾",
    tagline: "One “what if” away from a 12-slide presentation.",
    description: "Your brain is always connecting dots, asking questions, and imagining a better version of whatever is in front of you. You love a conversation that goes somewhere unexpected. You can make a simple coffee chat turn into a discussion about the future of literally everything.",
    superpower: "Seeing possibilities other people haven't considered yet.",
    trait: "You have said “wait, that gives me an idea” more than once this week.",
    hang: "A brainstorm over coffee, a museum afternoon, or a conversation that accidentally lasts three hours.",
    community: "Your people are curious, reflective, and idea-driven. Bring them together for a question-of-the-week coffee, a creative brainstorm, or a conversation night with no boring small talk required.",
    theme: "theme-thinker"
  },
  wildcard: {
    number: "TYPE 04", name: "The Wildcard", short: "THE SPONTANEOUS ONE", symbol: "✷",
    tagline: "The plan is to see where the plan goes.",
    description: "You're open to the unexpected and usually make an ordinary day more memorable. You bring a refreshing “why not?” energy, and your best stories often begin with a plan that changed three times. You are not necessarily unorganized; you are committed to plot development.",
    superpower: "Making memories out of ordinary plans.",
    trait: "Your phrase “I'm down” has launched at least one questionable-but-fun adventure.",
    hang: "A spontaneous food run, trying something new, or a social where the itinerary is more of a suggestion.",
    community: "Your people are the flexible, curious, and experience-first crowd. Start with a try-something-new meetup, a casual campus adventure, or a social where the activity is a surprise.",
    theme: "theme-wildcard"
  },
  lowkey: {
    number: "TYPE 05", name: "The Low-Key Legend", short: "THE QUIET MVP", symbol: "≈",
    tagline: "Low volume. Top-tier presence.",
    description: "You don't need to be the loudest person in the room to make an impression. You notice the little things, prefer real connection over collecting acquaintances, and tend to be funnier than people expect once you're comfortable. Your social battery has boundaries, and honestly, good for her.",
    superpower: "Making people feel understood without making a big show of it.",
    trait: "You can enjoy a party and still be thrilled when someone suggests leaving early.",
    hang: "A small-group dinner, a quiet study date, or a walk where conversation can wander naturally.",
    community: "Your people are thoughtful, calm, and connection-focused. Try a small coffee circle, a cozy study session, or a no-pressure meetup where listening counts as participating.",
    theme: "theme-lowkey"
  },
  curator: {
    number: "TYPE 06", name: "The Culture Curator", short: "THE TASTEMAKER", symbol: "✿",
    tagline: "Your recommendations have recommendations.",
    description: "You have a niche for everything: music, movies, cafés, internet lore, oddly specific hobbies. You love sharing the thing you just discovered, and your taste is part of how you connect with people. If someone asks for a recommendation, prepare for a carefully considered list.",
    superpower: "Finding the good stuff and sharing it.",
    trait: "You have a playlist for a mood that has not happened to anyone else yet.",
    hang: "A café crawl, a playlist swap, a movie night, or trading extremely specific recommendations.",
    community: "Your people are the curious collectors of culture, hobbies, and niche interests. Try a playlist swap, a recommendation exchange, or a “show us your current obsession” social.",
    theme: "theme-curator"
  }
};

// Each answer maps to one type. The ten questions intentionally use different scenarios.
// This is a fun reflection tool, not a validated psychological assessment.
const questions = [
  {
    category: "GBM TIME",
    title: "You walk into a WISyE event and only know one person. What's your move?",
    subtitle: "Be honest. Nobody is grading your networking skills.",
    answers: [
      { text: "Introduce myself to someone new and get the conversation going.", type: "social" },
      { text: "Find out what's planned and where I'm most useful.", type: "mastermind" },
      { text: "Look for someone who seems interesting to talk to one-on-one.", type: "thinker" },
      { text: "See where the night takes me. Something will happen.", type: "wildcard" }
    ]
  },
  {
    category: "YOUR GROUP-PROJECT ENERGY",
    title: "The group project just learned about the deadline and they're crashing out.",
    subtitle: "What role do you naturally fall into?",
    answers: [
      { text: "I make the task list, timeline, and shared doc.", type: "mastermind" },
      { text: "I pitch a different approach that could make the whole thing better.", type: "thinker" },
      { text: "I check in so everyone feels included and on the same page.", type: "social" },
      { text: "I quietly do my part, then deliver a surprisingly solid result.", type: "lowkey" }
    ]
  },
  {
    category: "ITS FRIYAY",
    title: "Your ideal Friday night is…",
    subtitle: "Choose the scene you would actually look forward to.",
    answers: [
      { text: "A spontaneous plan that becomes the story of the semester.", type: "wildcard" },
      { text: "A small hang with my favorite people and no pressure to perform.", type: "lowkey" },
      { text: "A playlist, a film, or a café I can put my friends onto.", type: "curator" },
      { text: "A lively group plan where I get to meet everyone.", type: "social" }
    ]
  },
  {
    category: "YOUR BRAIN AT 2 A.M.",
    title: "When you get a random idea late at night…",
    subtitle: "The notes app has seen things.",
    answers: [
      { text: "I map it out into steps and decide what it would take.", type: "mastermind" },
      { text: "I follow the thought until it becomes five bigger questions.", type: "thinker" },
      { text: "I send it to a friend immediately. They need to hear this.", type: "social" },
      { text: "I start researching the niche details and related references.", type: "curator" }
    ]
  },
  {
    category: "SURVIVED THE WEEK",
    title: "After a packed week, what kind of reset sounds best?",
    subtitle: "Protecting your peace is a valid answer.",
    answers: [
      { text: "A cozy plan with two or three people I feel comfortable with.", type: "lowkey" },
      { text: "A new activity or an outing that breaks up the routine.", type: "wildcard" },
      { text: "A properly scheduled reset: errands, calendar, clean slate.", type: "mastermind" },
      { text: "A solo culture fix: music, movies, reading, or a new discovery.", type: "curator" }
    ]
  },
  {
    category: "YOUR FRIENDSHIP STYLE",
    title: "What's your underrated friendship skill?",
    subtitle: "The small things count.",
    answers: [
      { text: "I remember to invite people in and make introductions.", type: "social" },
      { text: "I listen closely and remember what matters to people.", type: "lowkey" },
      { text: "I always have a recommendation that fits the exact mood.", type: "curator" },
      { text: "I can turn “we should do something” into an actual plan.", type: "mastermind" }
    ]
  },
  {
    category: "YOUR COMFORT ZONE",
    title: "Which sentence sounds most like you?",
    subtitle: "No need to overthink this one.",
    answers: [
      { text: "“Okay, but what if we tried it a completely different way?”", type: "thinker" },
      { text: "“I'm in. We can figure out the details as we go.”", type: "wildcard" },
      { text: "“I found this tiny place / song / movie you need to know about.”", type: "curator" },
      { text: "“Let's keep it small. I want to actually catch up with everyone.”", type: "lowkey" }
    ]
  },
  {
    category: "YOUR PLANNING STYLE",
    title: "A free Saturday just appeared on your calendar. You…",
    subtitle: "A rare and beautiful event.",
    answers: [
      { text: "Make a loose plan so I can fit in everything I want to do.", type: "mastermind" },
      { text: "Ask people what they're doing and see who wants to join.", type: "social" },
      { text: "Leave it open for a spontaneous detour or new experience.", type: "wildcard" },
      { text: "Pick one interesting topic or place and fall down a rabbit hole.", type: "thinker" }
    ]
  },
  {
    category: "YOUR KIND OF CONNECTION",
    title: "A new friendship feels most natural when…",
    subtitle: "Think about when you really click with someone.",
    answers: [
      { text: "We can sit together comfortably, even without filling every silence.", type: "lowkey" },
      { text: "We can talk for hours about ideas, goals, or the big questions.", type: "thinker" },
      { text: "We keep introducing each other to new people and plans.", type: "social" },
      { text: "We trade interests, favorites, and oddly specific recommendations.", type: "curator" }
    ]
  },
  {
    category: "YOUR WISyE ERA",
    title: "What would make your WISyE experience even better?",
    subtitle: "Pick the thing you would be most excited to join.",
    answers: [
      { text: "A reliable little circle for study sessions and getting things done.", type: "mastermind" },
      { text: "More casual events where I can meet people without pressure.", type: "lowkey" },
      { text: "More adventures, new activities, and “why not?” plans.", type: "wildcard" },
      { text: "A community for swapping interests, playlists, and recommendations.", type: "curator" }
    ]
  }
];

const introScreen = document.getElementById("intro-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-button");
const restartButton = document.getElementById("restart-button");
const answerList = document.getElementById("answer-list");
const questionCount = document.getElementById("question-count");
const progressPercent = document.getElementById("progress-percent");
const progressTrack = document.getElementById("progress-track");
const progressFill = document.getElementById("progress-fill");
const questionCategory = document.getElementById("question-category");
const questionTitle = document.getElementById("question-title");
const questionSubtitle = document.getElementById("question-subtitle");
const shareStatus = document.getElementById("share-status");

let currentQuestion = 0;
let answers = [];

function showScreen(screen) {
  [introScreen, quizScreen, resultScreen].forEach((section) => section.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  currentQuestion = 0;
  answers = Array(questions.length).fill(null);
  renderQuestion();
  showScreen(quizScreen);
}

function renderQuestion() {
  const question = questions[currentQuestion];
  questionCount.textContent = `QUESTION ${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;
  progressPercent.textContent = `${Math.round(((currentQuestion + 1) / questions.length) * 100)}%`;
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));
  questionCategory.textContent = question.category;
  questionTitle.textContent = question.title;
  questionSubtitle.textContent = question.subtitle;
  backButton.disabled = currentQuestion === 0;
  answerList.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option" + (answers[currentQuestion] === index ? " selected" : "");
    button.setAttribute("aria-pressed", answers[currentQuestion] === index ? "true" : "false");

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const text = document.createElement("span");
    text.className = "answer-text";
    text.textContent = answer.text;
    button.append(letter, text);
    button.addEventListener("click", () => chooseAnswer(index));
    answerList.appendChild(button);
  });
}

function chooseAnswer(answerIndex) {
  answers[currentQuestion] = answerIndex;
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function calculateWinner() {
  const scores = Object.fromEntries(Object.keys(types).map((key) => [key, 0]));
  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex !== null) scores[questions[questionIndex].answers[answerIndex].type] += 1;
  });
  const highest = Math.max(...Object.values(scores));
  const tiedTypes = Object.keys(scores).filter((type) => scores[type] === highest);

  if (tiedTypes.length === 1) return { winner: tiedTypes[0], scores };

  // Transparent tie-break: among tied types, the one selected most recently wins.
  for (let i = answers.length - 1; i >= 0; i -= 1) {
    const pickedType = questions[i].answers[answers[i]].type;
    if (tiedTypes.includes(pickedType)) return { winner: pickedType, scores };
  }
  return { winner: tiedTypes[0], scores };
}

function showResult() {
  const { winner } = calculateWinner();
  const result = types[winner];
  const card = document.getElementById("result-card");
  card.className = `result-card ${result.theme}`;
  document.getElementById("result-number").textContent = result.number;
  document.getElementById("result-symbol").textContent = result.symbol;
  document.getElementById("result-short-label").textContent = result.short;
  document.getElementById("result-name").textContent = result.name;
  document.getElementById("result-tagline").textContent = result.tagline;
  document.getElementById("result-description").textContent = result.description;
  document.getElementById("result-superpower").textContent = result.superpower;
  document.getElementById("result-trait").textContent = result.trait;
  document.getElementById("result-hang").textContent = result.hang;
  document.getElementById("community-copy").textContent = result.community;
  shareStatus.textContent = "";
  showScreen(resultScreen);
}

function resultText() {
  const { winner } = calculateWinner();
  const result = types[winner];
  return `My WISyE Type is ${result.name} ✳\n${result.tagline}\nFind your people, find your type.`;
}

async function copyResult() {
  try {
    await navigator.clipboard.writeText(resultText());
    shareStatus.textContent = "Copied! Paste your WISyE Type into a message or story caption.";
  } catch (error) {
    shareStatus.textContent = resultText() + " (Select and copy this text to share.)";
  }
}

function downloadCard() {
  const { winner } = calculateWinner();
  const result = types[winner];
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 1500;
  const ctx = canvas.getContext("2d");

  const palettes = {
    social: ["#f4e0e7", "#563c4b", "#b36583"],
    mastermind: ["#e3e9db", "#40543b", "#5c7857"],
    thinker: ["#e7def1", "#594475", "#7c61a5"],
    wildcard: ["#f1dfb9", "#79501e", "#a16b27"],
    lowkey: ["#dce9e9", "#315e62", "#4d7f83"],
    curator: ["#f0ddd0", "#75472f", "#a5684d"]
  };
  const [background, ink, accent] = palettes[winner];

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = ink;
  ctx.lineWidth = 3;
  ctx.strokeRect(44, 44, canvas.width - 88, canvas.height - 88);

  ctx.fillStyle = ink;
  ctx.font = "700 26px Arial";
  ctx.letterSpacing = "3px";
  ctx.fillText("WISyE TYPE  /  THE PERSONALITY PROJECT", 86, 112);

  ctx.fillStyle = accent;
  ctx.font = "700 100px Georgia";
  ctx.fillText(result.symbol, 86, 300);

  ctx.fillStyle = accent;
  ctx.font = "700 25px Arial";
  ctx.fillText(result.short, 86, 380);

  ctx.fillStyle = ink;
  ctx.font = "bold 76px Georgia";
  const words = result.name.split(" ");
  let line = "";
  let y = 485;
  const maxWidth = 1000;
  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, 86, y);
      line = word;
      y += 88;
    } else {
      line = testLine;
    }
  });
  if (line) ctx.fillText(line, 86, y);

  y += 90;
  ctx.fillStyle = ink;
  ctx.font = "italic 36px Georgia";
  const taglineWords = result.tagline.split(" ");
  let taglineLine = "";
  const taglineLines = [];
  taglineWords.forEach((word) => {
    const testLine = taglineLine ? `${taglineLine} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && taglineLine) {
      taglineLines.push(taglineLine);
      taglineLine = word;
    } else taglineLine = testLine;
  });
  if (taglineLine) taglineLines.push(taglineLine);
  taglineLines.forEach((text) => {
    ctx.fillText(text, 86, y);
    y += 50;
  });

  y += 55;
  ctx.fillStyle = accent;
  ctx.font = "700 22px Arial";
  ctx.fillText("YOUR SUPERPOWER", 86, y);
  y += 44;
  ctx.fillStyle = ink;
  ctx.font = "30px Arial";
  const traitWords = result.superpower.split(" ");
  let traitLine = "";
  traitWords.forEach((word) => {
    const testLine = traitLine ? `${traitLine} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && traitLine) {
      ctx.fillText(traitLine, 86, y);
      traitLine = word;
      y += 42;
    } else traitLine = testLine;
  });
  if (traitLine) ctx.fillText(traitLine, 86, y);

  ctx.strokeStyle = ink;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(86, 1280);
  ctx.lineTo(1114, 1280);
  ctx.stroke();
  ctx.fillStyle = ink;
  ctx.font = "700 25px Arial";
  ctx.fillText("FIND YOUR PEOPLE, FIND YOUR TYPE.", 86, 1340);
  ctx.fillStyle = accent;
  ctx.fillText("WISyE ✳", 86, 1390);

  const link = document.createElement("a");
  link.download = `wisye-type-${winner}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  shareStatus.textContent = "Your shareable card has been downloaded as a PNG.";
}

async function shareResult() {
  const { winner } = calculateWinner();
  const result = types[winner];
  const shareData = {
    title: "Find Your WISyE Type",
    text: resultText(),
    url: window.location.href
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      shareStatus.textContent = "Your type is ready to share.";
    } else {
      await copyResult();
    }
  } catch (error) {
    if (error.name !== "AbortError") await copyResult();
  }
}

startButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
});
restartButton.addEventListener("click", startQuiz);
document.getElementById("copy-button").addEventListener("click", copyResult);
document.getElementById("share-button").addEventListener("click", shareResult);
document.getElementById("download-button").addEventListener("click", downloadCard);
document.getElementById("home-link").addEventListener("click", (event) => {
  event.preventDefault();
  showScreen(introScreen);
});

// Optional keyboard shortcut: Escape returns to the intro screen.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") showScreen(introScreen);
});
