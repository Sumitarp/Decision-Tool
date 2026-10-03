const RAZORS = [
  {
    "name": "Occam’s Razor",
    "rule": "Prefer the explanation with fewer assumptions.",
    "how": "When two explanations fit, start with the simpler, testable one.",
    "keys": [
      "assumptions",
      "explanation",
      "why",
      "problem",
      "job",
      "application",
      "not working"
    ]
  },
  {
    "name": "Hanlon’s Razor",
    "rule": "Don’t assume bad intent when a simpler explanation fits.",
    "how": "Before creating a story about someone’s motive, check ordinary explanations.",
    "keys": [
      "friend",
      "reply",
      "message",
      "relationship",
      "ignored",
      "rude",
      "angry",
      "team"
    ]
  },
  {
    "name": "Hitchens’s Razor",
    "rule": "What is asserted without evidence can be dismissed without evidence.",
    "how": "Ask what evidence would change your mind before spending time debating a claim.",
    "keys": [
      "claim",
      "proof",
      "evidence",
      "rumor",
      "belief",
      "argument",
      "debate"
    ]
  },
  {
    "name": "Feynman’s Razor",
    "rule": "If you can’t explain it simply, you don’t understand it well enough.",
    "how": "Explain the choice in plain language. Missing pieces reveal what you still need to learn.",
    "keys": [
      "learn",
      "study",
      "course",
      "skill",
      "understand",
      "complex"
    ]
  },
  {
    "name": "Rooms Razor",
    "rule": "Spend time where you are likely to be the least knowledgeable person.",
    "how": "Choose the environment that stretches your current ability.",
    "keys": [
      "community",
      "room",
      "network",
      "mentor",
      "team",
      "learning"
    ]
  },
  {
    "name": "Uphill Razor",
    "rule": "Choose short-term difficulty when it buys long-term capability.",
    "how": "Compare the easy path with the harder path that compounds skill or resilience.",
    "keys": [
      "easy",
      "hard",
      "comfort",
      "skill",
      "growth",
      "career",
      "project"
    ]
  },
  {
    "name": "Sagan’s Standard",
    "rule": "Extraordinary claims require extraordinary evidence.",
    "how": "The bigger the claim, the stronger the evidence you should demand.",
    "keys": [
      "huge",
      "claim",
      "miracle",
      "course",
      "investment",
      "marketing",
      "guarantee"
    ]
  },
  {
    "name": "Affect Heuristic Awareness",
    "rule": "Notice when your current emotion is steering the decision.",
    "how": "If you are unusually angry, afraid, excited, or exhausted, pause before a major commitment.",
    "keys": [
      "angry",
      "emotion",
      "fear",
      "excited",
      "upset",
      "quit",
      "breakup"
    ]
  },
  {
    "name": "Discomfort Razor",
    "rule": "If it is uncomfortable but safe and valuable, don’t automatically avoid it.",
    "how": "Separate useful discomfort from actual danger.",
    "keys": [
      "scared",
      "uncomfortable",
      "conversation",
      "public",
      "speaking",
      "risk"
    ]
  },
  {
    "name": "Grice’s Razor",
    "rule": "Prefer the reasonable interpretation before inventing hidden meaning.",
    "how": "Interpret ambiguous communication generously, then clarify.",
    "keys": [
      "text",
      "message",
      "email",
      "reply",
      "communication",
      "meaning"
    ]
  },
  {
    "name": "Alder’s Razor",
    "rule": "Don’t spend energy arguing about what cannot be tested or acted on.",
    "how": "Move attention from unfalsifiable claims to observable facts and actions.",
    "keys": [
      "unprovable",
      "argument",
      "conspiracy",
      "debate",
      "unknown"
    ]
  },
  {
    "name": "Reversibility Razor",
    "rule": "The harder a decision is to undo, the more carefully you should think.",
    "how": "Move quickly on reversible choices; slow down on irreversible ones.",
    "keys": [
      "tattoo",
      "marriage",
      "quit",
      "move",
      "contract",
      "permanent"
    ]
  },
  {
    "name": "Skin-in-the-game Razor",
    "rule": "Give more weight to advice from people who share the consequences.",
    "how": "Ask who carries the downside if the advice is wrong.",
    "keys": [
      "advice",
      "expert",
      "investor",
      "mentor",
      "career",
      "money"
    ]
  },
  {
    "name": "Patton’s Razor",
    "rule": "A good plan today beats a perfect plan tomorrow.",
    "how": "If waiting mostly buys perfection rather than information, act.",
    "keys": [
      "perfect",
      "wait",
      "launch",
      "blog",
      "project",
      "procrastinate"
    ]
  },
  {
    "name": "Optimist Razor",
    "rule": "When choosing people, notice who brings constructive energy and possibility.",
    "how": "Compare the effect people have on your energy and behavior.",
    "keys": [
      "friend",
      "team",
      "people",
      "partner",
      "negative",
      "positive"
    ]
  },
  {
    "name": "Hume’s Guillotine",
    "rule": "Facts describe what is; they do not automatically tell you what ought to be.",
    "how": "Separate evidence from your values before deciding.",
    "keys": [
      "should",
      "ought",
      "moral",
      "fact",
      "values",
      "ethics"
    ]
  },
  {
    "name": "Einstein’s Razor",
    "rule": "Make it as simple as possible, but not simpler.",
    "how": "Remove complexity that adds no value without deleting important nuance.",
    "keys": [
      "simple",
      "complex",
      "plan",
      "notes",
      "system",
      "communication"
    ]
  },
  {
    "name": "New Project Razor",
    "rule": "If it isn’t a strong yes, be cautious; stress-test the downside before committing.",
    "how": "Imagine the project takes twice as long and returns half as much.",
    "keys": [
      "project",
      "business",
      "startup",
      "offer",
      "side",
      "hustle"
    ]
  },
  {
    "name": "Hourly Rate Razor",
    "rule": "Treat your time as valuable; automate, delegate, or drop low-value work.",
    "how": "Estimate what the time is actually worth compared with the alternative.",
    "keys": [
      "time",
      "money",
      "task",
      "delegate",
      "automate",
      "cheap"
    ]
  },
  {
    "name": "Anchoring Awareness",
    "rule": "The first number or option can distort the next judgment.",
    "how": "Rebuild the decision from zero instead of reacting to the initial anchor.",
    "keys": [
      "price",
      "number",
      "laptop",
      "salary",
      "discount",
      "first"
    ]
  },
  {
    "name": "Availability Heuristic Awareness",
    "rule": "What is easy to remember is not necessarily likely.",
    "how": "Separate vivid examples from base rates and actual frequency.",
    "keys": [
      "news",
      "viral",
      "fear",
      "rare",
      "accident",
      "trend"
    ]
  },
  {
    "name": "Arena Razor",
    "rule": "Listen closely to people who are actually doing the work.",
    "how": "Prefer firsthand experience over spectator commentary when relevant.",
    "keys": [
      "founder",
      "creator",
      "athlete",
      "career",
      "advice",
      "critic"
    ]
  },
  {
    "name": "Luck Razor",
    "rule": "Choose paths that increase your surface area for useful opportunities.",
    "how": "Ask which option creates more people, attempts, experiments, or encounters.",
    "keys": [
      "network",
      "meetup",
      "opportunity",
      "people",
      "collaboration",
      "random"
    ]
  },
  {
    "name": "Listen Mode Razor",
    "rule": "When perspectives differ, listen more than you speak.",
    "how": "Use curiosity to understand the other model before defending yours.",
    "keys": [
      "disagree",
      "meeting",
      "team",
      "argument",
      "opinion",
      "learn"
    ]
  },
  {
    "name": "Taleb’s Look-the-Part Test",
    "rule": "Don’t confuse the appearance of expertise with evidence of it.",
    "how": "Look for results, track record, and skin in the game.",
    "keys": [
      "expert",
      "appearance",
      "course",
      "coach",
      "investor",
      "success"
    ]
  },
  {
    "name": "Duck Test",
    "rule": "Repeated behavior is evidence about what something is.",
    "how": "Judge patterns more than promises when deciding whether to trust a person or situation.",
    "keys": [
      "trust",
      "behavior",
      "promise",
      "repeated",
      "deadline",
      "reliable"
    ]
  },
  {
    "name": "Gratitude Razor",
    "rule": "When comparing close options, notice which choice increases gratitude and reduces resentment.",
    "how": "Use the long-term emotional relationship as one input, not the only input.",
    "keys": [
      "gratitude",
      "job",
      "mentor",
      "family",
      "friend",
      "resentment"
    ]
  },
  {
    "name": "Smart Friends Razor",
    "rule": "Spend time with people who challenge and sharpen your thinking.",
    "how": "Ask which environment raises the quality of your thoughts.",
    "keys": [
      "friends",
      "smart",
      "challenge",
      "ideas",
      "group",
      "community"
    ]
  },
  {
    "name": "Opinion Razor",
    "rule": "Understand the strongest opposing case before holding a strong opinion.",
    "how": "State the other side fairly before deciding.",
    "keys": [
      "opinion",
      "debate",
      "politics",
      "argument",
      "disagree",
      "side"
    ]
  },
  {
    "name": "Braggers Razor",
    "rule": "Prefer quiet evidence of results over loud claims of ability.",
    "how": "Look for demonstrated work rather than self-promotion.",
    "keys": [
      "brag",
      "claim",
      "skills",
      "portfolio",
      "hire",
      "expert"
    ]
  },
  {
    "name": "Invested vs Spent Test",
    "rule": "Prefer time that compounds over time that merely disappears.",
    "how": "Ask whether this activity creates a skill, relationship, asset, or future option.",
    "keys": [
      "time",
      "habit",
      "reading",
      "exercise",
      "learning",
      "scrolling"
    ]
  },
  {
    "name": "Lion Razor",
    "rule": "Sprint when useful; rest deliberately.",
    "how": "Use focused bursts rather than stretching low-quality work across an arbitrary schedule.",
    "keys": [
      "work",
      "focus",
      "sprint",
      "rest",
      "energy",
      "deep work"
    ]
  },
  {
    "name": "Writing Knife Block",
    "rule": "Write to expose gaps in your thinking.",
    "how": "Put the decision on paper before trying to solve it in your head.",
    "keys": [
      "write",
      "think",
      "confused",
      "decision",
      "idea",
      "plan"
    ]
  },
  {
    "name": "Young and Old Test",
    "rule": "Choose what your future older self can respect without killing your present self’s curiosity.",
    "how": "Check both long-term meaning and present aliveness.",
    "keys": [
      "regret",
      "age",
      "fun",
      "career",
      "life",
      "meaning"
    ]
  },
  {
    "name": "Stress Reward Test",
    "rule": "Take stress when the potential reward is meaningfully worth it.",
    "how": "Compare the burden with the upside instead of treating stress as automatically productive.",
    "keys": [
      "stress",
      "burnout",
      "job",
      "project",
      "pressure",
      "reward"
    ]
  },
  {
    "name": "Reading Razor",
    "rule": "Don’t turn reading into a vanity metric.",
    "how": "Read for curiosity, usefulness, or joy—not arbitrary completion numbers.",
    "keys": [
      "book",
      "reading",
      "course",
      "finish",
      "habit"
    ]
  },
  {
    "name": "Inversion Thinking",
    "rule": "Ask what would make this decision fail, then prevent those conditions.",
    "how": "Design the failure case before optimizing the success case.",
    "keys": [
      "fail",
      "risk",
      "plan",
      "avoid",
      "problem",
      "project"
    ]
  },
  {
    "name": "Regret Minimization Razor",
    "rule": "Imagine looking back later: which non-choice would you regret?",
    "how": "Use future regret to surface what matters when the options are close.",
    "keys": [
      "regret",
      "age",
      "miss",
      "opportunity",
      "career",
      "relationship"
    ]
  },
  {
    "name": "Best Story Razor",
    "rule": "When paths are otherwise close, consider which creates the richer lived experience.",
    "how": "Use story as a tie-breaker, not a substitute for safety or facts.",
    "keys": [
      "story",
      "adventure",
      "life",
      "experience",
      "travel",
      "creative"
    ]
  },
  {
    "name": "Pareto Principle",
    "rule": "Find the small number of inputs that drive most of the outcome.",
    "how": "Identify the vital few before spending effort on everything.",
    "keys": [
      "80",
      "20",
      "focus",
      "results",
      "prioritize",
      "work"
    ]
  },
  {
    "name": "Sunk Cost Fallacy",
    "rule": "Past investment is not a reason to keep investing.",
    "how": "Judge the choice from today forward, not from what you already spent.",
    "keys": [
      "sunk",
      "cost",
      "time",
      "money",
      "quit",
      "continue",
      "old"
    ]
  },
  {
    "name": "Positivity Razor",
    "rule": "When thinking about the future, deliberately consider a constructive outcome.",
    "how": "Use optimism as a possibility generator while keeping facts and risks visible.",
    "keys": [
      "positive",
      "future",
      "hope",
      "possibility",
      "opportunity",
      "confidence"
    ]
  }
];

const $ = id => document.getElementById(id);
const state = { selected: [], answers: {} };

function normalize(s){ return s.toLowerCase().replace(/[^\w\s₹]/g," "); }

function scoreRazor(razor, text){
  const t = normalize(text);
  return razor.keys.reduce((score,k)=> score + (t.includes(normalize(k)) ? 1 : 0), 0);
}

function renderRecommendations(){
  const text = [$("decision").value,$("optionA").value,$("optionB").value].join(" ");
  const box = $("recommendations");
  if(!text.trim()){
    box.innerHTML = '<div class="empty-state">Describe your decision above and we\'ll surface a few useful razors.</div>';
    return;
  }
  let ranked = RAZORS.map((r,i)=>({r,i,score:scoreRazor(r,text)}))
    .sort((a,b)=>b.score-a.score);
  if(ranked.every(x=>x.score===0)){
    ranked = [RAZORS.findIndex(r=>r.name.includes("Reversibility")), RAZORS.findIndex(r=>r.name.includes("Inversion")), RAZORS.findIndex(r=>r.name.includes("Opinion"))]
      .map(i=>({r:RAZORS[i],i,score:0}));
  } else ranked = ranked.slice(0,3);

  box.innerHTML = ranked.map(x=>`
    <button class="recommendation" data-index="${x.i}">
      <div class="rec-number">${String(x.i+1).padStart(2,"0")}</div>
      <h3>${x.r.name}</h3>
      <p>${x.r.rule}</p>
    </button>`).join("");

  box.querySelectorAll(".recommendation").forEach(btn=>{
    btn.addEventListener("click",()=>selectRazor(Number(btn.dataset.index)));
  });
}

function populateSelect(){
  $("razorSelect").innerHTML = '<option value="">Choose a razor...</option>' +
    RAZORS.map((r,i)=>`<option value="${i}">${String(i+1).padStart(2,"0")} · ${r.name}</option>`).join("");
}

function selectRazor(index){
  if(!state.selected.includes(index)) state.selected.push(index);
  renderApplication();
  $("applyCard").scrollIntoView({behavior:"smooth",block:"start"});
}

function renderApplication(){
  if(!state.selected.length) return;
  $("applyCard").classList.remove("hidden");
  const i = state.selected[state.selected.length-1];
  const r = RAZORS[i];
  $("selectedNumber").textContent = String(i+1).padStart(2,"0");
  $("selectedName").textContent = r.name;
  $("selectedRule").textContent = r.rule;
  $("razorIntro").textContent = r.how;

  const q = makeQuestions(r);
  $("questions").innerHTML = q.map((item,j)=>`
    <div class="question">
      <label for="q-${i}-${j}">${item.label}</label>
      ${item.type==="textarea"
        ? `<textarea id="q-${i}-${j}" data-q="${j}" placeholder="${item.placeholder||""}"></textarea>`
        : `<select id="q-${i}-${j}" data-q="${j}">
            <option value="">Choose...</option>
            ${item.options.map(o=>`<option>${o}</option>`).join("")}
           </select>`}
      <div class="hint">${item.hint||""}</div>
    </div>`).join("");
}

function makeQuestions(r){
  const n=r.name;
  if(n==="Occam’s Razor") return [
    {label:"What is the simplest explanation for why this decision is difficult?",type:"textarea",placeholder:"I may be overcomplicating..."},
    {label:"Which explanation requires fewer assumptions?",type:"textarea"},
    {label:"What is the smallest test you can run?",type:"textarea"}
  ];
  if(n==="Hanlon’s Razor" || n==="Grice’s Razor") return [
    {label:"What story are you currently telling yourself about the other person?",type:"textarea"},
    {label:"What is the most ordinary, non-malicious explanation?",type:"textarea"},
    {label:"What could you ask or verify instead of guessing?",type:"textarea"}
  ];
  if(n==="Hitchens’s Razor" || n==="Sagan’s Standard") return [
    {label:"What claim or assumption is carrying the most weight?",type:"textarea"},
    {label:"What evidence actually supports it?",type:"textarea"},
    {label:"What evidence would change your mind?",type:"textarea"}
  ];
  if(n==="Affect Heuristic Awareness") return [
    {label:"What emotion are you feeling right now?",type:"textarea"},
    {label:"Would you make the same choice after sleeping on it?",type:"select",options:["Probably yes","Not sure","Probably no"]},
    {label:"What facts remain if you remove the emotion?",type:"textarea"}
  ];
  if(n==="Reversibility Razor") return [
    {label:"How hard is Option A to undo?",type:"select",options:["Easy","Moderate","Hard","Almost impossible"]},
    {label:"How hard is Option B to undo?",type:"select",options:["Easy","Moderate","Hard","Almost impossible"]},
    {label:"What would you do if you knew you could reverse the choice later?",type:"textarea"}
  ];
  if(n==="Skin-in-the-game Razor" || n==="Arena Razor" || n==="Taleb’s Look-the-Part Test") return [
    {label:"Who has actually lived the consequences of this choice?",type:"textarea"},
    {label:"What evidence of real-world results do they have?",type:"textarea"},
    {label:"Whose advice are you currently overweighting?",type:"textarea"}
  ];
  if(n==="Patton’s Razor" || n==="New Project Razor") return [
    {label:"What could you do today instead of waiting for a perfect version?",type:"textarea"},
    {label:"If this took twice as long and returned half as much, would you still choose it?",type:"select",options:["Yes","Maybe","No"]},
    {label:"What information are you hoping waiting will reveal?",type:"textarea"}
  ];
  if(n==="Sunk Cost Fallacy") return [
    {label:"If you had not invested anything yet, would you choose this today?",type:"select",options:["Yes","Maybe","No"]},
    {label:"What future benefit justifies continuing?",type:"textarea"},
    {label:"What past cost are you emotionally trying to recover?",type:"textarea"}
  ];
  if(n==="Regret Minimization Razor" || n==="Young and Old Test") return [
    {label:"Imagine yourself 10–40 years older. What might you wish you had done?",type:"textarea"},
    {label:"What would your younger self want to experience or protect?",type:"textarea"},
    {label:"Which option better matches the life you want to remember?",type:"textarea"}
  ];
  if(n==="Inversion Thinking") return [
    {label:"Assume Option A goes badly. Why?",type:"textarea"},
    {label:"Assume Option B goes badly. Why?",type:"textarea"},
    {label:"Which failure is easier to prevent?",type:"textarea"}
  ];
  if(n==="Pareto Principle" || n==="Hourly Rate Razor" || n==="Invested vs Spent Test") return [
    {label:"What small part of this choice creates most of the value?",type:"textarea"},
    {label:"What is the opportunity cost of your time?",type:"textarea"},
    {label:"What can be removed, automated, delegated, or ignored?",type:"textarea"}
  ];
  if(n==="Opinion Razor" || n==="Listen Mode Razor") return [
    {label:"State the strongest case for Option A.",type:"textarea"},
    {label:"State the strongest case for Option B.",type:"textarea"},
    {label:"What would someone who disagrees with you say?",type:"textarea"}
  ];
  return [
    {label:`How does this razor change the way you see “${$("decision").value.trim()||"the decision"}”?`,type:"textarea"},
    {label:"What does it make you notice that you were ignoring?",type:"textarea"},
    {label:"What would applying this razor look like in practice?",type:"textarea"}
  ];
}

function collectAnswers(){
  document.querySelectorAll("#questions textarea,#questions select").forEach(el=>{
    state.answers[el.id]=el.value.trim();
  });
}

function buildBrief(){
  collectAnswers();
  const decision=$("decision").value.trim();
  const a=$("optionA").value.trim()||"Option A";
  const b=$("optionB").value.trim()||"Option B";

  $("brief").classList.remove("hidden");
  $("briefTitle").textContent = decision ? decision : "A clearer way to see the choice.";
  $("briefA").textContent=a; $("briefB").textContent=b;

  const applied = state.selected.map(i=>RAZORS[i]);
  $("appliedRazors").innerHTML=applied.map(r=>`<span class="chip">${r.name}</span>`).join("");

  const insights=[];
  applied.forEach((r,ri)=>{
    const values = Object.entries(state.answers)
      .filter(([k,v])=>k.startsWith(`q-${state.selected[ri]}-`) && v)
      .map(x=>x[1]);
    if(values.length) insights.push(`<div class="insight"><strong>${r.name}</strong><span>${values.join(" · ")}</span></div>`);
  });
  if(!insights.length) insights.push('<div class="insight"><strong>Start with the evidence.</strong><span>You selected the razors, but no answers were entered. Apply them in writing before acting.</span></div>');
  $("insights").innerHTML=insights.join("");

  const aText=Object.entries(state.answers).filter(([k,v])=>k.includes("q-") && v).map(x=>x[1]).join(" ");
  $("aSummary").textContent = aText ? "Your written reasoning is captured below; compare it against the other option rather than choosing from instinct alone." : "Add written evidence to pressure-test this option.";
  $("bSummary").textContent = "Now ask whether the same facts and standards apply to this option.";

  let next="Choose the smallest reversible next step.";
  let nextText="If the decision is reversible, test it cheaply. If it is hard to reverse, gather the missing evidence before committing.";
  if(state.selected.some(i=>RAZORS[i].name==="Reversibility Razor")) {
    next="Match the amount of thinking to the cost of being wrong.";
    nextText="Move faster on reversible choices and slow down where the downside is durable.";
  } else if(state.selected.some(i=>RAZORS[i].name==="Inversion Thinking")) {
    next="Prevent the most likely failure.";
    nextText="Take the action that removes the clearest failure condition before optimizing everything else.";
  } else if(state.selected.some(i=>RAZORS[i].name==="Patton’s Razor")) {
    next="Turn thinking into a test.";
    nextText="Replace another round of abstract debate with one small action that produces information.";
  }
  $("nextStep").textContent=next;
  $("nextText").textContent=nextText;

  $("brief").scrollIntoView({behavior:"smooth",block:"start"});
}

function reset(){
  $("decision").value="";$("optionA").value="";$("optionB").value="";
  $("stakes").value="medium";$("time").value="none";
  state.selected=[];state.answers={};
  $("applyCard").classList.add("hidden");$("brief").classList.add("hidden");
  $("recommendations").innerHTML='<div class="empty-state">Describe your decision above and we\'ll surface a few useful razors.</div>';
  $("razorSelect").value="";
  window.scrollTo({top:0,behavior:"smooth"});
}

["decision","optionA","optionB"].forEach(id=>$(id).addEventListener("input",renderRecommendations));
$("razorSelect").addEventListener("change",e=>{if(e.target.value!=="")selectRazor(Number(e.target.value));});
$("addRazor").addEventListener("click",()=>{$("razorSelect").focus();});
$("evaluate").addEventListener("click",buildBrief);
$("startOver").addEventListener("click",reset);
$("copyBrief").addEventListener("click",async()=>{
  const text=`DECISION: ${$("briefTitle").textContent}\n\nOPTION A: ${$("briefA").textContent}\n${$("aSummary").textContent}\n\nOPTION B: ${$("briefB").textContent}\n${$("bSummary").textContent}\n\nRAZORS: ${state.selected.map(i=>RAZORS[i].name).join(", ")}\n\nNEXT STEP: ${$("nextStep").textContent}\n${$("nextText").textContent}`;
  await navigator.clipboard.writeText(text);
  $("copyBrief").textContent="Copied";
  setTimeout(()=>$("copyBrief").textContent="Copy",1200);
});

document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".tab,.tab-panel").forEach(el=>el.classList.remove("active"));
  btn.classList.add("active"); $(btn.dataset.tab).classList.add("active");
}));

function renderLibrary(filter=""){
  const f=normalize(filter);
  $("libraryGrid").innerHTML=RAZORS.map((r,i)=>({r,i}))
    .filter(x=>!f || normalize(x.r.name+" "+x.r.rule+" "+x.r.how).includes(f))
    .map(x=>`<article class="library-card"><div class="num">${String(x.i+1).padStart(2,"0")}</div><h3>${x.r.name}</h3><p>${x.r.rule}</p></article>`).join("");
}
$("search").addEventListener("input",e=>renderLibrary(e.target.value));

populateSelect();
renderLibrary();
