export type EpisodeReference = {
  label: string;
  url: string;
};

export type EpisodeSection = {
  title: string;
  content: string[];
};

export type Episode = {
  slug: string;
  number: number;
  title: string;
  publishDate: string; // ISO date
  durationMinutes?: number;
  summary: string;
  topics: string[];
  audioUrl?: string;
  videoUrl?: string;
  transcriptUrl?: string;
  references?: EpisodeReference[];
  checklist?: string[];
  keyTakeaways: string[];
  sections: EpisodeSection[];
};

export const EPISODES: Episode[] = [
  {
    slug: "energy-audit-basics",
    number: 1,
    title: "Energy Audit: Fix The Fundamentals First",
    publishDate: "2024-01-10",
    durationMinutes: 48,
    summary:
      "A practical decision tree for fatigue complaints—sleep timing, movement minimums, fuel targets, and when to consider labs.",
    topics: ["fatigue", "sleep", "fundamentals"],
    audioUrl: "https://example.com/audio/peak-01.mp3",
    transcriptUrl: "https://example.com/transcripts/peak-01",
    keyTakeaways: [
      "Energy issues usually start with inconsistent behaviors, not exotic lab panels.",
      "Anchor wake times before adding supplements.",
      "Track fuel targets for two weeks before assuming hormonal issues.",
    ],
    checklist: [
      "Audit sleep/wake consistency for 10 days.",
      "Log total daily steps plus two deliberate strength sessions.",
      "Hit protein minimum of 1.6 g/kg before adding adaptogens.",
      "Order labs only if fundamentals are consistent and symptoms persist.",
    ],
    sections: [
      {
        title: "Energy leaks start with rhythm",
        content: [
          "Most fatigue consults still show a rolling wake time that swings by 60–90 minutes.",
          "We run through alarm chaining and morning light exposure tactics to lock the circadian anchor.",
        ],
      },
      {
        title: "Movement and fuel minimums",
        content: [
          "Two resistance sessions plus a weekly vigour walk build the muscular engine that stabilizes glucose.",
          "Protein graphs and grocery templates beat complicated macro calculators when compliance is the limiter.",
        ],
      },
    ],
  },
  {
    slug: "tendon-triage",
    number: 2,
    title: "Tendon Triage: Loading Before Needling",
    publishDate: "2024-01-17",
    durationMinutes: 52,
    summary:
      "The order-of-operations for achy tendons—irritability screen, loading progressions, and when advanced tools add value.",
    topics: ["tendon", "rehab"],
    keyTakeaways: [
      "Irritability dictates the starting load, not imaging.",
      "Tendon care is about dose control more than modality shopping.",
      "Expensive injectables belong after a legitimate loading sprint.",
    ],
    checklist: [
      "Score AM pain and 24-hour response for one week.",
      "Start with isometric holds if pain >5/10 with mid-range work.",
      "Progress to isotonic reps, then plyometrics as morning pain drops.",
    ],
    sections: [
      {
        title: "Irritability screen",
        content: [
          "We flag sleep debt and sudden volume spikes before assuming structural failure.",
          "Symptom diaries guide whether to start with isometrics or immediately load heavy slow resistance.",
        ],
      },
      {
        title: "Dose the rehab like training",
        content: [
          "Three-stage loading (iso → isotonic → plyo) sets guardrails for athletes and clinicians.",
          "We drop cost-aware notes on when imaging or injectables help.",
        ],
      },
    ],
  },
  {
    slug: "sleep-architecture",
    number: 3,
    title: "Sleep Architecture For Busy Humans",
    publishDate: "2024-01-24",
    durationMinutes: 45,
    summary:
      "A clear framework for protecting deep sleep without full tech stacks or supplement overload.",
    topics: ["sleep", "recovery"],
    keyTakeaways: [
      "Bedtime routines support wake times, not the other way around.",
      "Environment tweaks beat tracking gadgets for most people.",
      "Reserve wearables for behavior experiments, not 24/7 judgment.",
    ],
    sections: [
      {
        title: "Anchor the wake side",
        content: [
          "Consistent wake timing sets the stage for easier bedtimes.",
          "Light hygiene, caffeine rules, and evening boundaries matter more than supplements.",
        ],
      },
      {
        title: "Build recovery rituals",
        content: [
          "We share a 15-minute wind-down protocol that stacks breath work, mobility, and journaling.",
        ],
      },
    ],
  },
  {
    slug: "immune-load-mapping",
    number: 4,
    title: "Immune Load Mapping During Hard Seasons",
    publishDate: "2024-01-31",
    durationMinutes: 50,
    summary:
      "How to triage immune complaints during big training blocks without chasing every supplement on social media.",
    topics: ["immune", "recovery"],
    keyTakeaways: [
      "Track sleep debt, travel, and training spikes before assuming immune dysfunction.",
      "Adjust carbohydrate availability in-season before adding labs.",
      "Reserve advanced testing for persistent patterns despite recovered load.",
    ],
    sections: [
      {
        title: "First three questions",
        content: [
          "What changed in the last 14 days, what loads stayed the same, and what stressors are new?",
          "We collect that intel before recommending products.",
        ],
      },
      {
        title: "Cost-aware lab work",
        content: [
          "CBC with differential, ferritin, and CRP cover 80% of what most athletes need.",
        ],
      },
    ],
  },
  {
    slug: "brain-performance",
    number: 5,
    title: "Brain & Concussion Recovery Basics",
    publishDate: "2024-02-07",
    durationMinutes: 56,
    summary:
      "Decision-order guide for athletes navigating concussion symptoms and return-to-learn/play timelines.",
    topics: ["brain", "recovery"],
    keyTakeaways: [
      "Set expectations for symptom windows to lower anxiety.",
      "Match exertion levels to symptom thresholds daily.",
      "Bring in neuro referral when symptoms plateau for 10–14 days.",
    ],
    sections: [
      {
        title: "Symptom buckets",
        content: [
          "We separate cognitive, vestibular, and mood clusters to target interventions.",
        ],
      },
      {
        title: "Return-to-play map",
        content: [
          "Simple exertion ladder plus school accommodations keep the athlete on script.",
        ],
      },
    ],
  },
  {
    slug: "lab-sequencing",
    number: 6,
    title: "Lab Sequencing Without Guess Panels",
    publishDate: "2024-02-14",
    durationMinutes: 44,
    summary:
      "When to order basic labs, when to escalate, and how to explain costs to athletes.",
    topics: ["labs", "cost-aware"],
    keyTakeaways: [
      "Always tie labs to a decision you'll actually make.",
      "Start with CBC/CMP/TSH/ferritin before specialty panels.",
      "Explain the why + cost before printing requisitions.",
    ],
    sections: [
      {
        title: "Decision-first lab orders",
        content: [
          "We list the clinical questions that justify each panel so athletes understand the context.",
        ],
      },
      {
        title: "Escalate when necessary",
        content: [
          "Functional GI maps and hormone DUTCH testing have their place, just not for every complaint.",
        ],
      },
    ],
  },
  {
    slug: "nutrition-periodization",
    number: 7,
    title: "Nutrition Periodization For Busy Athletes",
    publishDate: "2024-02-21",
    durationMinutes: 42,
    summary:
      "Macro timing, grocery systems, and supplement sanity for athletes balancing real jobs.",
    topics: ["nutrition", "performance"],
    keyTakeaways: [
      "Energy availability needs a weekly review, not a yearly reset.",
      "Simplify with grocery templates and pre-built breakfasts.",
      "Use supplements to close gaps, not to avoid cooking.",
    ],
    sections: [
      {
        title: "Phase the plate",
        content: [
          "We outline base, build, and taper meal frameworks with cost-aware swaps.",
        ],
      },
      {
        title: "Grocery tactics",
        content: [
          "Order-of-operations shopping plus quick prep templates keep people compliant.",
        ],
      },
    ],
  },
  {
    slug: "return-to-running",
    number: 8,
    title: "Return To Running After Layoffs",
    publishDate: "2024-02-28",
    durationMinutes: 47,
    summary:
      "Joint-friendly waypoints, progressions, and warning signs for athletes ramping up running volume again.",
    topics: ["running", "rehab"],
    keyTakeaways: [
      "Walk-run intervals beat ego-driven long runs on week one.",
      "Keep cadence cues ready for athletes with cranky tendons.",
      "Respect 10% load bumps only after two quiet weeks.",
    ],
    sections: [
      {
        title: "Entry criteria",
        content: [
          "Pain <3/10 with walking and single-leg calf raises sets the floor.",
        ],
      },
      {
        title: "Progression guardrails",
        content: [
          "We map a six-week ladder with optional trail and track variations.",
        ],
      },
    ],
  },
  {
    slug: "recovery-stack-myths",
    number: 9,
    title: "Recovery Stack Myth Busting",
    publishDate: "2024-03-06",
    durationMinutes: 39,
    summary:
      "Sorting the helpful from the hype across cold plunges, PEMF, wearables, and peptides.",
    topics: ["recovery", "tools"],
    keyTakeaways: [
      "Basics outperform gadgets until behaviors are consistent.",
      "Budget the boring stuff (sleep, protein) before tech subscriptions.",
      "Pair any tool with a hypothesis and exit date.",
    ],
    sections: [
      {
        title: "Behavior-first lens",
        content: [
          "We show how to triage requests for new tools by tying them to the athlete's constraints.",
        ],
      },
      {
        title: "When to say yes",
        content: [
          "If recovery scores drive actual decisions, tech can stay. If not, pause it.",
        ],
      },
    ],
  },
  {
    slug: "female-athlete-framework",
    number: 10,
    title: "Female Athlete Frameworks",
    publishDate: "2024-03-13",
    durationMinutes: 55,
    summary:
      "Cycle-aware training tweaks, RED-S screening, and talking through hormone therapies with clarity.",
    topics: ["female-athlete", "performance"],
    keyTakeaways: [
      "We screen for RED-S anytime energy availability tanks.",
      "Cycle tracking informs training volume and recovery windows.",
      "Coordinate with the athlete's primary team when considering hormones.",
    ],
    sections: [
      {
        title: "Screening cues",
        content: [
          "Simple questionnaires catch missed periods, mood dips, and bone stress risk early.",
        ],
      },
      {
        title: "Programming tweaks",
        content: [
          "We offer a framework for adjusting intensity around high-symptom days without derailing training.",
        ],
      },
    ],
  },
  {
    slug: "travel-toolkit",
    number: 11,
    title: "Travel Toolkit For Athletes",
    publishDate: "2024-03-20",
    durationMinutes: 36,
    summary:
      "Sleep, digestion, and training guardrails when athletes bounce through time zones.",
    topics: ["travel", "performance"],
    keyTakeaways: [
      "Reset the watch at takeoff and protect the first night of sleep.",
      "Prioritize protein and hydration before new supplements.",
      "Use micro circuits to maintain tissue capacity on the road.",
    ],
    sections: [
      {
        title: "Pre-trip protocols",
        content: [
          "We use simple checklists for flights, hydration, and med kits.",
        ],
      },
      {
        title: "On-the-road training",
        content: [
          "Five-movement micro circuits plus walk goals keep joints honest.",
        ],
      },
    ],
  },
  {
    slug: "performance-check-ins",
    number: 12,
    title: "Quarterly Performance Check-Ins",
    publishDate: "2024-03-27",
    durationMinutes: 40,
    summary:
      "A structured review template to reassess goals, symptoms, and next experiments.",
    topics: ["strategy", "fundamentals"],
    keyTakeaways: [
      "Quarterly reviews beat annual resets because athletes actually remember the data.",
      "Use the same form for self-audits and clinician visits.",
      "Document experiments so you know what to stop.",
    ],
    sections: [
      {
        title: "Quarterly template",
        content: [
          "We outline four buckets: energy, performance, recovery, and mindset.",
        ],
      },
      {
        title: "Close the loop",
        content: [
          "Archive what worked, stop what didn't, and plan the next experiment.",
        ],
      },
    ],
  },
];
