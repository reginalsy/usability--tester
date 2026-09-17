import { Article, VisualStory, ArticleComment } from '../types';

export const AD_BANNER_DATA = {
  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOo8PyT3GptWb971xc5oZbK8o1n4HOy1l90-saFHokE_Xa0zRWE3AFAEbOZpocEtB6g9A93W2RqEaiEYS8jKxACa4BfPLeFhYMtuh-o5Cb6nyF0Dhg_dQ6CtIJ-S057qFZPdKDTJ5DOzbSeDFbD8av6ExEGrBYMWbyfavVNLUcOaqqQwGisOpPBAL1n6Rt8G4mlxnluCr7g1gprNzF8wHZcsI4tAk3ZFjpqs9CbdbWDxlRF1FROS6dsQ",
  headline: "S'pore stocks here, overseas shares there: Get them on one platform",
  sponsor: "straitstimes.com",
  actionText: "READ MORE >"
};

export const TRENDING_TOPICS = [
  "# US Federal Reserve",
  "# Kevin Warsh",
  "# Accidents - traffic",
  "# HDB",
  "# Manchester United"
];

export const LEAD_ARTICLE: Article = {
  id: "fed-rate-hike-2024",
  title: "US Fed raises interest rates for first time in 3 years, sees more tightening ahead",
  slug: "us-fed-raises-interest-rates-more-tightening",
  excerpt: "Almost all policymakers indicated upside inflation risks that they no longer saw as largely arising from one-off supply shocks.",
  category: "Business",
  subcategoryTag: "ECONOMY",
  author: "Ovamir Anjum & Reuters",
  authorRole: "Senior Economics Correspondent, Washington",
  publishedTime: "2 hours ago",
  readTimeMinutes: 4,
  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLEwicOL5qaxIVkBV2IzOSMUxmd2azNW_G0NDWRls4uUABveFkOemWs8403jlNB676sq4QP4UKXraDNqTy6lLNs_UocPmkpUnKz-TBcUUzQxt2cbYVF4Y30GqbqWZeXa3l1HQziiwQhZesjr1FVgiuw1azGaEeAxUfdbhR4IXEjZPnKhjiA6kufUGOT0vcq7RpVOD7LL3Xqqz4mQiKeb7Bhv2oR5nB78NUAnx5FmyZKUM-rWopc-xPbQ",
  imageCaption: "Federal Reserve policymakers signaled multiple rate increases throughout the year.",
  imageCredit: "PHOTO: REUTERS",
  commentsCount: 42,
  trendingTag: "# US Federal Reserve",
  keyTakeaways: [
    "Federal Open Market Committee lifts benchmark borrowing cost by 25 basis points.",
    "Dot-plot median projection points to six further rate increases before the end of the year.",
    "Chairman Jerome Powell stresses US labor market resilience despite persistent price pressures."
  ],
  pullQuote: {
    quote: "The committee is determined to take the measures necessary to restore price stability. The American economy is very strong and well positioned to handle tighter monetary policy.",
    attribution: "Jerome Powell, Federal Reserve Chairman"
  },
  content: [
    "WASHINGTON — The US Federal Reserve raised interest rates for the first time in more than three years on Wednesday, lifting its benchmark rate by a quarter percentage point and signaling aggressive tightening ahead as policymakers scramble to rein in four-decade high inflation.",
    "Concluding a pivotal two-day monetary policy meeting, the Federal Open Market Committee (FOMC) moved the federal funds target range to 0.25%–0.50%, with only one dissent favoring a larger half-point move.",
    "New economic projections released alongside the statement revealed that most officials now anticipate lifting the benchmark rate at each of the remaining six meetings this year, which would put the policy rate near 1.9% by December.",
    "The central bank also signaled it expects to begin reducing its nearly $9 trillion balance sheet at an upcoming meeting, delivering a one-two punch of higher borrowing costs and quantitative tightening.",
    "In Singapore, market analysts noted the move had been broadly anticipated by global investors, though local lenders and mortgage holders are closely watching SORA benchmark adjustments that typically follow US rate paths.",
    "'The inflation picture had deteriorated even before the war in Ukraine added further upside price pressures on commodities and energy,' said one chief economist based in Singapore. 'The Fed is making it clear that inflation containment is priority number one.'"
  ]
};

export const LATEST_HEADLINES: Article[] = [
  {
    id: "shares-tick-higher-fed-hike",
    title: "Shares tick higher as Fed hikes rates, dollar jumps with short-term yields",
    slug: "shares-tick-higher-fed-hikes-rates",
    excerpt: "Global equity benchmarks mounted a modest relief rally while treasury yields spiked following the US central bank's policy announcement.",
    category: "Business",
    publishedTime: "1 min ago",
    readTimeMinutes: 3,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLEwicOL5qaxIVkBV2IzOSMUxmd2azNW_G0NDWRls4uUABveFkOemWs8403jlNB676sq4QP4UKXraDNqTy6lLNs_UocPmkpUnKz-TBcUUzQxt2cbYVF4Y30GqbqWZeXa3l1HQziiwQhZesjr1FVgiuw1azGaEeAxUfdbhR4IXEjZPnKhjiA6kufUGOT0vcq7RpVOD7LL3Xqqz4mQiKeb7Bhv2oR5nB78NUAnx5FmyZKUM-rWopc-xPbQ",
    commentsCount: 18,
    author: "Market Watch Team",
    content: [
      "Asian and European stock markets ticked higher in afternoon trading after US equity markets shook off initial volatility to close in positive territory.",
      "The Straits Times Index (STI) gained 14.2 points to hover around 3,189.45, buoyed by banking counters DBS, OCBC, and UOB which benefit from widening net interest margins in rising interest rate environments.",
      "Meanwhile, short-term sovereign bond yields touched multi-year highs as fixed income traders priced in higher terminal rates."
    ]
  },
  {
    id: "trump-iran-war-statement",
    title: "Trump says 'hopefully we are towards end' of Iran war",
    slug: "trump-towards-end-iran-war",
    excerpt: "Former US president addressed reporters during a campaign stop, voicing guarded optimism regarding Middle East tensions.",
    category: "World",
    publishedTime: "5 mins ago",
    readTimeMinutes: 3,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB49DKACUtGalgY_tA12v6XvFxA1HVNCfx8a1hD72AwdmHwk5Z1Da2IYaoDh27XH0OvfggSHm7Jo7ykvLK36yThBkhtd_BqcR8-E7V8NdIbWGpFl_mMKu2djvTXdGgf6wI60U5gxmqR-JlBpJv-4qpfC5949URM8N7pFmIZ8A-_iPsS3Q_GaxSxZeBIzE5JWbhW3ayISzik8Y1zRMdVkcCPq6l1wynV64RYfj8zIsGAAMnRPVD3JMMtJg",
    commentsCount: 31,
    author: "Washington Bureau",
    content: [
      "Speaking during an impromptu media briefing, Donald Trump remarked that international diplomatic backchannels were working under intense scrutiny.",
      "'Nobody wants an unending regional conflagration,' Trump stated, adding that strategic deterrence combined with renewed economic pressure could stabilize trade lanes in the Strait of Hormuz."
    ]
  },
  {
    id: "north-korea-nuclear-expansion",
    title: "North Korea says US-led arms buildup justifies expanding nuclear force",
    slug: "north-korea-nuclear-expansion-statement",
    excerpt: "Pyongyang's state media KCNA issued a strongly worded dispatch warning against trilateral security drills in the Sea of Japan.",
    category: "Asia",
    publishedTime: "12 mins ago",
    readTimeMinutes: 4,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB49DKACUtGalgY_tA12v6XvFxA1HVNCfx8a1hD72AwdmHwk5Z1Da2IYaoDh27XH0OvfggSHm7Jo7ykvLK36yThBkhtd_BqcR8-E7V8NdIbWGpFl_mMKu2djvTXdGgf6wI60U5gxmqR-JlBpJv-4qpfC5949URM8N7pFmIZ8A-_iPsS3Q_GaxSxZeBIzE5JWbhW3ayISzik8Y1zRMdVkcCPq6l1wynV64RYfj8zIsGAAMnRPVD3JMMtJg",
    commentsCount: 24,
    author: "Lim Min Zhang, Seoul Correspondent",
    content: [
      "Pyongyang declared on Thursday that continued joint military exercises by the United States, South Korea, and Japan leave it no choice but to accelerate the qualitative buildup of its strategic nuclear deterrent.",
      "The statement comes after allied naval forces conducted ballistic missile defense interoperability drills off the Korean peninsula."
    ]
  },
  {
    id: "japan-swimmer-ohashi-record",
    title: "Japan's 17-year-old swimmer Ohashi targets breaststroke world record",
    slug: "japan-swimmer-ohashi-breaststroke-record",
    excerpt: "The teenage sensation clocked blistering split times at the Tokyo Open championships, eyeing the Olympic trials.",
    category: "Sport",
    publishedTime: "25 mins ago",
    readTimeMinutes: 3,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfij5k2fJG8_CFo0ndIUWeWQYBpB1kWUOmr7dgPdZr72sbWZdYtLbDUdZuDmq3gQ7NI9JBL85wAmNT7qLdFbd5qO8ry9M7Ogyk_YdPTazv57F-5im9xUB7sSj-txKeU3kPoo0VcMLYB0wmIrLnMKeIKiMvwSvUnkCmFzGGsavQL2LG2m7Hvi2Z0AiAKYw_pCtZNLcvx5pqmHBCypf-5a3dBMzIhGk6lHky1-S8ObDhFX2aUsaMVwL1iQ",
    commentsCount: 9,
    author: "David Lee, Sports Desk",
    content: [
      "TOKYO — Seventeen-year-old Japanese prodigy Kenzo Ohashi sent ripples through the international swimming community after shaving another 0.32 seconds off his national 200m breaststroke record.",
      "'My focus is purely on my stroke rhythm and turn efficiency,' Ohashi told reporters. 'If I execute my race plan cleanly, the world record will follow naturally.'"
    ]
  },
  {
    id: "singapore-weekend-bazaars-culture",
    title: "To market, to market: What is behind Singapore's never-ending weekend bazaars?",
    slug: "behind-singapores-never-ending-weekend-bazaars",
    excerpt: "From pop-up thrift markets in Bugis to artisanal coffee gatherings in Tiong Bahru, weekend pop-ups show no sign of slowing down.",
    category: "Life",
    publishedTime: "40 mins ago",
    readTimeMinutes: 5,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX3b-nURS40xbtoVDSFTPx3E5FehYhJKDTnYqaOPemswqVuMINZohZd3Ope0RcMuPr8j7lAgYg69XfP1XDMeQC_YZFs8NAbMFocpTZUY5bk1sFEWreSh1TDSjXSGdoApfhsPm40miHGgqdy-g7Dw2gOJyQkEorW30mZioqZSZOH4B1zzhMn1SoJPRA3PrYplGdciCdLPD17QkgT6ZtI3QCNGYLESTbAQGxPIdhXlwE2zxnJlieTQDAXA",
    commentsCount: 29,
    author: "Charmaine Ng, Lifestyle Editor",
    content: [
      "Every Saturday and Sunday, thousands of young Singaporeans flock to curated bazaars offering pre-loved vintage garments, handcrafted ceramics, and bespoke cold brews.",
      "Anthropologists and urban planners say these transient community hubs reflect an appetite for tactile, experiential weekend socializing that sterile modern shopping malls often fail to deliver."
    ]
  }
];

export const SINGAPORE_LEAD: Article = {
  id: "spore-cardiac-arrest-taiwan-bus",
  title: "Singaporean suffers cardiac arrest after being run over by bus in Taiwan; resuscitated in hospital",
  slug: "singaporean-cardiac-arrest-taiwan-bus-accident",
  excerpt: "The 49-year-old victim was crossing an intersection in Taipei when the incident took place on Saturday morning.",
  category: "Singapore",
  publishedTime: "3 hours ago",
  readTimeMinutes: 4,
  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqdLTaCP3k6Q7AaX9REY1JxlQH3C_QJoxaQYcSkn-HiUsfg7PUpcWUYOmTab1cOKkwwTUUT6ATVFuQKfzJhBZFCF7UAVDXOYyzPnKprk3QRULUgMY0IpiFdHogNsitOgb1qhLnnvwrZhUkLaiLK4QBEs4VjZQ2pGtW4j3D8gJJHi-dh5szfK7fFivTvuIfJlhg_FdQEBL7Dnf-7sfzpscMU4RqOgDglUtlcuJs2XLXxw4AzvFcHsOUzA",
  imageCaption: "Emergency service vehicles deployed along the bustling intersection in Taipei.",
  imageCredit: "PHOTO: SETN TAIWAN",
  author: "Nadine Chua, Crime & Courts Reporter",
  commentsCount: 38,
  trendingTag: "# Accidents - traffic",
  content: [
    "TAIPEI — A 49-year-old Singaporean man is in intensive care after he was struck and run over by a passenger bus at a busy pedestrian crossing in Taipei's Zhongshan District on Saturday morning.",
    "First responders arriving at the scene found the victim unconscious and without a pulse. Paramedics immediately initiated CPR and administered emergency automated external defibrillation (AED) en route to Mackay Memorial Hospital.",
    "Taiwanese medical staff confirmed that after 18 minutes of intensive resuscitation maneuvers, the victim's heartbeat was successfully restored. He remains in critical condition under specialized neurological and trauma monitoring.",
    "Singapore's Ministry of Foreign Affairs (MFA) stated that the Singapore Trade Office in Taipei is in direct contact with local authorities and the victim's immediate family to render all necessary consular and medical repatriation assistance.",
    "Taipei police said initial investigations suggest the bus driver, a 58-year-old man, may have experienced a blind spot while executing a left turn. The driver was breathalyzed with zero alcohol detected and is cooperating with ongoing inquiries."
  ]
};

export const SINGAPORE_SUB_ARTICLES: Article[] = [
  {
    id: "ai-mankind-governance-audit",
    title: "Instead of speculating if AI will end mankind, audit and govern the tech",
    slug: "audit-govern-ai-technology-focus",
    excerpt: "Policymakers and technologists in Singapore urge verifiable benchmarks, algorithmic sandboxes, and enterprise compliance over science-fiction doomsday scenarios.",
    category: "Singapore",
    publishedTime: "4 hours ago",
    readTimeMinutes: 5,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX3b-nURS40xbtoVDSFTPx3E5FehYhJKDTnYqaOPemswqVuMINZohZd3Ope0RcMuPr8j7lAgYg69XfP1XDMeQC_YZFs8NAbMFocpTZUY5bk1sFEWreSh1TDSjXSGdoApfhsPm40miHGgqdy-g7Dw2gOJyQkEorW30mZioqZSZOH4B1zzhMn1SoJPRA3PrYplGdciCdLPD17QkgT6ZtI3QCNGYLESTbAQGxPIdhXlwE2zxnJlieTQDAXA",
    author: "Deepak Choudhury, Tech Policy Editor",
    commentsCount: 15,
    content: [
      "While global headlines regularly oscillate between AI utopian euphoria and existential doom, Singapore is quietly constructing one of the world's most pragmatic regulatory governance frameworks.",
      "Speaking at an industry symposium at Marina Bay Sands, authorities highlighted the expansion of the AI Verify foundation, an open-source testing toolkit that checks models for hallucination rates, demographic bias, and data lineage integrity.",
      "'Regulation must be measurable and implementable, not purely philosophical,' noted one committee chair."
    ]
  },
  {
    id: "hdb-resale-prices-february-climb",
    title: "HDB resale prices climb 1.5% in February amid robust buyer demand in prime estates",
    slug: "hdb-resale-prices-climb-february",
    excerpt: "Million-dollar flats in Queenstown, Toa Payoh, and Kallang/Whampoa continue to register brisk transactions despite cooling measures.",
    category: "Singapore",
    publishedTime: "5 hours ago",
    readTimeMinutes: 4,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSlsPomhiykQNaKIFxFcntL2n9c0N3sRihpqQr0KpVbaIXA9Eytaevd8vXPkPO4mJqiu021KGRz5QU8Mc1acoPMhUg0erfE6MHVAT2Vr71DjtaJwncUAS8w-MVo_P5ZRowhxtwq2tVmY7NALHzPIxmCg_7uXr9KOLkhnQfHBjVOnjioFz3dcDRJUgzvvoIv-_Srdzdpuytsuc0qcAPeX5JOYfLpqEgPLt4VYe1Bx5k_vm9c5e0Bq0o_w",
    author: "Michelle Ng, Housing Correspondent",
    commentsCount: 56,
    trendingTag: "# HDB",
    content: [
      "Resale prices of Housing Board (HDB) flats rose by 1.5% in February, accelerating slightly from the 1.2% rise recorded in January, according to flash data released on Friday by real estate portals.",
      "A total of 48 flats changed hands for at least $1 million during the month, with prime city-fringe and mature estates dominating transactions.",
      "Analysts point to strong demand from private property downgraders and young couples prioritizing central convenience over waiting times for Build-To-Order (BTO) completions."
    ]
  }
];

export const ASIA_WORLD_LEAD: Article = {
  id: "great-powers-regional-security-panel",
  title: "Great powers should shoulder higher expectations, says regional security panel",
  slug: "great-powers-shoulder-higher-expectations-security-panel",
  excerpt: "Ministers and defense leaders emphasized preserving free navigation and stabilizing multilateral dialogues.",
  category: "Asia",
  publishedTime: "3 hours ago",
  readTimeMinutes: 5,
  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB49DKACUtGalgY_tA12v6XvFxA1HVNCfx8a1hD72AwdmHwk5Z1Da2IYaoDh27XH0OvfggSHm7Jo7ykvLK36yThBkhtd_BqcR8-E7V8NdIbWGpFl_mMKu2djvTXdGgf6wI60U5gxmqR-JlBpJv-4qpfC5949URM8N7pFmIZ8A-_iPsS3Q_GaxSxZeBIzE5JWbhW3ayISzik8Y1zRMdVkcCPq6l1wynV64RYfj8zIsGAAMnRPVD3JMMtJg",
  imageCaption: "Delegates assemble at the multilateral security roundtable session.",
  imageCredit: "PHOTO: REUTERS",
  author: "Danson Cheong, Regional Security Correspondent",
  commentsCount: 22,
  content: [
    "JAKARTA / SINGAPORE — As geopolitical friction simmers across key maritime chokepoints and border zones, senior regional defense officials meeting at an annual security dialogue urged the world's superpowers to practice transparent crisis communication.",
    "Asean member states emphasized that regional prosperity relies strictly on adherence to international law, specifically the 1982 United Nations Convention on the Law of the Sea (UNCLOS).",
    "'When great powers compete recklessly, smaller economies bear disproportionate collateral damage,' remarked one visiting dignitary during plenary discussions.",
    "The session concluded with calls for formalizing defense hotlines and expanding multilateral maritime search-and-rescue exercises to prevent miscalculations."
  ]
};

export const ASIA_WORLD_SUB_ARTICLES: Article[] = [
  {
    id: "malaysia-central-bank-rate-steady",
    title: "Malaysia central bank keeps benchmark rate steady at 3.00%",
    slug: "malaysia-central-bank-keeps-rate-steady-3-percent",
    excerpt: "Bank Negara Malaysia noted that current monetary policy stance remains supportive of domestic economic growth while monitoring currency volatility.",
    category: "Asia",
    publishedTime: "4 hours ago",
    readTimeMinutes: 3,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB49DKACUtGalgY_tA12v6XvFxA1HVNCfx8a1hD72AwdmHwk5Z1Da2IYaoDh27XH0OvfggSHm7Jo7ykvLK36yThBkhtd_BqcR8-E7V8NdIbWGpFl_mMKu2djvTXdGgf6wI60U5gxmqR-JlBpJv-4qpfC5949URM8N7pFmIZ8A-_iPsS3Q_GaxSxZeBIzE5JWbhW3ayISzik8Y1zRMdVkcCPq6l1wynV64RYfj8zIsGAAMnRPVD3JMMtJg",
    author: "Hazlin Hassan, Malaysia Bureau",
    commentsCount: 11,
    content: [
      "KUALA LUMPUR — Bank Negara Malaysia (BNM) maintained its overnight policy rate (OPR) at 3.00% on Thursday, in line with consensus market expectations.",
      "The central bank noted that both headline and core inflation have remained moderate, while sustained household spending and expanding tourist arrivals continue to anchor domestic demand."
    ]
  },
  {
    id: "china-growth-target-around-5-percent",
    title: "China sets 2024 economic growth target at 'around 5%' as fiscal support widens",
    slug: "china-sets-growth-target-5-percent-fiscal-support",
    excerpt: "Premier Li Qiang delivered his inaugural work report at the National People's Congress, pledging ultra-long special treasury bonds.",
    category: "World",
    publishedTime: "5 hours ago",
    readTimeMinutes: 5,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB49DKACUtGalgY_tA12v6XvFxA1HVNCfx8a1hD72AwdmHwk5Z1Da2IYaoDh27XH0OvfggSHm7Jo7ykvLK36yThBkhtd_BqcR8-E7V8NdIbWGpFl_mMKu2djvTXdGgf6wI60U5gxmqR-JlBpJv-4qpfC5949URM8N7pFmIZ8A-_iPsS3Q_GaxSxZeBIzE5JWbhW3ayISzik8Y1zRMdVkcCPq6l1wynV64RYfj8zIsGAAMnRPVD3JMMtJg",
    author: "Aw Cheng Wei, China Bureau Chief, Beijing",
    commentsCount: 34,
    content: [
      "BEIJING — China set an annual economic expansion target of 'around 5 per cent' for 2024, signaling that the leadership in Beijing will maintain aggressive fiscal and policy support to stimulate manufacturing and domestic consumption.",
      "Delivering the government work report to thousands of delegates at the Great Hall of the People, Premier Li Qiang acknowledged headwinds including real estate drag and local government debt, but pledged focused investments into advanced robotics, artificial intelligence, and renewable energy."
    ]
  }
];

export const OPINION_ARTICLES: Article[] = [
  {
    id: "opinion-petrodollar-to-ai-dollar",
    title: "From petrodollar to AI dollar: Can the greenback continue to rule?",
    slug: "from-petrodollar-to-ai-dollar-greenback-rule",
    excerpt: "As computational power, microchip capital expenditure, and cloud infrastructure are priced globally in USD, the greenback's hegemony finds a modern technological anchor.",
    category: "Opinion",
    subcategoryTag: "ANALYSIS",
    author: "Vikram Khanna",
    authorRole: "Associate Editor",
    publishedTime: "6 hours ago",
    readTimeMinutes: 6,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLEwicOL5qaxIVkBV2IzOSMUxmd2azNW_G0NDWRls4uUABveFkOemWs8403jlNB676sq4QP4UKXraDNqTy6lLNs_UocPmkpUnKz-TBcUUzQxt2cbYVF4Y30GqbqWZeXa3l1HQziiwQhZesjr1FVgiuw1azGaEeAxUfdbhR4IXEjZPnKhjiA6kufUGOT0vcq7RpVOD7LL3Xqqz4mQiKeb7Bhv2oR5nB78NUAnx5FmyZKUM-rWopc-xPbQ",
    commentsCount: 47,
    content: [
      "For half a century, the term 'petrodollar' explained why global central banks held colossal US dollar reserves: if every country needed oil, and oil was quoted in dollars, holding greenbacks was an existential prerequisite.",
      "Today, critics frequently proclaim the imminent demise of the dollar, citing bilateral local-currency trade pacts between BRICS members. Yet, a quieter and arguably more potent transformation is underway: the emergence of the 'AI dollar'.",
      "Virtually all premier semiconductor intellectual property, cloud computation tokens, frontier foundation models, and high-bandwidth memory supplies are denominated and settled in US currency.",
      "Until alternative financial architectures can offer comparable liquidity, transparent legal recourse, and deep capital markets, the technological infrastructure of the 21st century will continue to reinforce, rather than erode, American monetary primacy."
    ]
  },
  {
    id: "opinion-trump-trade-problem-china",
    title: "Trump is no longer China's biggest trade problem",
    slug: "trump-no-longer-chinas-biggest-trade-problem",
    excerpt: "Even as US tariff threats escalate, China's more urgent vulnerability lies in domestic consumer sentiment and industrial overcapacity looking for outlets.",
    category: "Opinion",
    subcategoryTag: "GLOBAL VIEW",
    author: "Jonathan Eyal",
    authorRole: "Global Affairs Columnist",
    publishedTime: "8 hours ago",
    readTimeMinutes: 5,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB49DKACUtGalgY_tA12v6XvFxA1HVNCfx8a1hD72AwdmHwk5Z1Da2IYaoDh27XH0OvfggSHm7Jo7ykvLK36yThBkhtd_BqcR8-E7V8NdIbWGpFl_mMKu2djvTXdGgf6wI60U5gxmqR-JlBpJv-4qpfC5949URM8N7pFmIZ8A-_iPsS3Q_GaxSxZeBIzE5JWbhW3ayISzik8Y1zRMdVkcCPq6l1wynV64RYfj8zIsGAAMnRPVD3JMMtJg",
    commentsCount: 39,
    content: [
      "In Washington, both parties vie to outdo each other in hawkish rhetoric regarding tariff walls. Yet inside China's export manufacturing powerhouses in Guangdong and Zhejiang, seasoned factory owners are far more concerned with domestic demand than with American election cycles.",
      "Having spent five years rerouting supply chains through Southeast Asia, Mexico, and Central Europe, Chinese exporters have proven remarkably adept at tariff arbitrage.",
      "The true bottleneck is internal: restoring domestic household consumption confidence after three years of real estate balance sheet contractions."
    ]
  },
  {
    id: "opinion-gaze-into-dogs-eyes",
    title: "What I see when I gaze into my dog's eyes",
    slug: "what-i-see-when-i-gaze-into-my-dogs-eyes",
    excerpt: "In an era of relentless algorithmic notifications and rapid geopolitical turmoil, the quiet, unvarnished devotion of a pet provides an irreplaceable sanctuary.",
    category: "Opinion",
    subcategoryTag: "PERSONAL ESSAY",
    author: "Sumiko Tan",
    authorRole: "Executive Editor",
    publishedTime: "10 hours ago",
    readTimeMinutes: 4,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX3b-nURS40xbtoVDSFTPx3E5FehYhJKDTnYqaOPemswqVuMINZohZd3Ope0RcMuPr8j7lAgYg69XfP1XDMeQC_YZFs8NAbMFocpTZUY5bk1sFEWreSh1TDSjXSGdoApfhsPm40miHGgqdy-g7Dw2gOJyQkEorW30mZioqZSZOH4B1zzhMn1SoJPRA3PrYplGdciCdLPD17QkgT6ZtI3QCNGYLESTbAQGxPIdhXlwE2zxnJlieTQDAXA",
    commentsCount: 68,
    content: [
      "Every evening after the day's final edition is put to bed and the print deadline sirens fall quiet, I return home to two soulful, amber eyes waiting patiently behind the front gate.",
      "My golden retriever doesn't care about interest rate dot plots, central bank reserves, or cabinet reshuffles. In his universe, the most consequential event of the day is whether we take the turn toward the park or linger by the grassy canal bank.",
      "Neurologists tell us that eye contact between humans and dogs stimulates mutual surges of oxytocin. But beyond biochemical explanations, there is something deeply restorative about entering a world free of deceit, ambition, and digital noise."
    ]
  }
];

export const VISUAL_STORIES: VisualStory[] = [
  {
    id: "national-museum-revamped-gallery",
    title: "Keys to the past: National Museum's revamped Singapore History Gallery",
    type: "Interactive",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX3b-nURS40xbtoVDSFTPx3E5FehYhJKDTnYqaOPemswqVuMINZohZd3Ope0RcMuPr8j7lAgYg69XfP1XDMeQC_YZFs8NAbMFocpTZUY5bk1sFEWreSh1TDSjXSGdoApfhsPm40miHGgqdy-g7Dw2gOJyQkEorW30mZioqZSZOH4B1zzhMn1SoJPRA3PrYplGdciCdLPD17QkgT6ZtI3QCNGYLESTbAQGxPIdhXlwE2zxnJlieTQDAXA",
    subtitle: "A multi-sensory journey through 700 years of the island's transformation.",
    publishedTime: "1 day ago",
    description: "Take an interactive 360-degree tour inside the newly reopened permanent exhibition featuring rarely seen artifacts, immersive soundscapes, and digital recreations of early colonial Singapore.",
    slides: [
      {
        title: "The Singapore Stone & Ancient Temasek",
        description: "14th-century sandstone fragment inscribed with un-deciphered Majapahit script, greeting visitors in the newly illuminated entrance gallery.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX3b-nURS40xbtoVDSFTPx3E5FehYhJKDTnYqaOPemswqVuMINZohZd3Ope0RcMuPr8j7lAgYg69XfP1XDMeQC_YZFs8NAbMFocpTZUY5bk1sFEWreSh1TDSjXSGdoApfhsPm40miHGgqdy-g7Dw2gOJyQkEorW30mZioqZSZOH4B1zzhMn1SoJPRA3PrYplGdciCdLPD17QkgT6ZtI3QCNGYLESTbAQGxPIdhXlwE2zxnJlieTQDAXA",
        credit: "PHOTO: NATIONAL MUSEUM OF SINGAPORE"
      },
      {
        title: "Early River Trade & Immigrant Settlements",
        description: "Scale model recreations and sound tapestries capturing the clamor of coolies, merchants, and lighters along the historic Singapore River.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSlsPomhiykQNaKIFxFcntL2n9c0N3sRihpqQr0KpVbaIXA9Eytaevd8vXPkPO4mJqiu021KGRz5QU8Mc1acoPMhUg0erfE6MHVAT2Vr71DjtaJwncUAS8w-MVo_P5ZRowhxtwq2tVmY7NALHzPIxmCg_7uXr9KOLkhnQfHBjVOnjioFz3dcDRJUgzvvoIv-_Srdzdpuytsuc0qcAPeX5JOYfLpqEgPLt4VYe1Bx5k_vm9c5e0Bq0o_w",
        credit: "PHOTO: SPH MEDIA / KEVIN LIM"
      },
      {
        title: "Post-War Reconstruction & Nation Building",
        description: "Interactive oral history booths allowing visitors to listen to first-hand accounts of the 1965 independence declaration and pioneering public housing drives.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfij5k2fJG8_CFo0ndIUWeWQYBpB1kWUOmr7dgPdZr72sbWZdYtLbDUdZuDmq3gQ7NI9JBL85wAmNT7qLdFbd5qO8ry9M7Ogyk_YdPTazv57F-5im9xUB7sSj-txKeU3kPoo0VcMLYB0wmIrLnMKeIKiMvwSvUnkCmFzGGsavQL2LG2m7Hvi2Z0AiAKYw_pCtZNLcvx5pqmHBCypf-5a3dBMzIhGk6lHky1-S8ObDhFX2aUsaMVwL1iQ",
        credit: "PHOTO: SPH MEDIA ARCHIVE"
      }
    ]
  },
  {
    id: "haze-season-explained-wind-hotspots",
    title: "The haze season explained: Wind shifts, hotspots and regional monitoring",
    type: "Graphic Story",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSlsPomhiykQNaKIFxFcntL2n9c0N3sRihpqQr0KpVbaIXA9Eytaevd8vXPkPO4mJqiu021KGRz5QU8Mc1acoPMhUg0erfE6MHVAT2Vr71DjtaJwncUAS8w-MVo_P5ZRowhxtwq2tVmY7NALHzPIxmCg_7uXr9KOLkhnQfHBjVOnjioFz3dcDRJUgzvvoIv-_Srdzdpuytsuc0qcAPeX5JOYfLpqEgPLt4VYe1Bx5k_vm9c5e0Bq0o_w",
    subtitle: "How meteorological patterns steer particulate plumes across the Malacca Strait.",
    publishedTime: "2 days ago",
    description: "An animated breakdown of the southwest monsoon cycle, satellite infrared hotspot detection, and the science behind Singapore's 24-hour PSI readings.",
    slides: [
      {
        title: "Monsoon Wind Vector Dynamics",
        description: "During June to October, prevailing winds blow consistently from the south and southwest, pushing smoke plumes from regional agricultural burning toward the peninsula.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSlsPomhiykQNaKIFxFcntL2n9c0N3sRihpqQr0KpVbaIXA9Eytaevd8vXPkPO4mJqiu021KGRz5QU8Mc1acoPMhUg0erfE6MHVAT2Vr71DjtaJwncUAS8w-MVo_P5ZRowhxtwq2tVmY7NALHzPIxmCg_7uXr9KOLkhnQfHBjVOnjioFz3dcDRJUgzvvoIv-_Srdzdpuytsuc0qcAPeX5JOYfLpqEgPLt4VYe1Bx5k_vm9c5e0Bq0o_w",
        credit: "GRAPHIC: ST GRAPHICS / MET SERVICES"
      },
      {
        title: "Satellite Infrared Hotspot Mapping",
        description: "NOAA and Himawari satellites register thermal anomalies across peatlands, feeding real-time geospatial alerts to the Asean Specialised Meteorological Centre (ASMC).",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB49DKACUtGalgY_tA12v6XvFxA1HVNCfx8a1hD72AwdmHwk5Z1Da2IYaoDh27XH0OvfggSHm7Jo7ykvLK36yThBkhtd_BqcR8-E7V8NdIbWGpFl_mMKu2djvTXdGgf6wI60U5gxmqR-JlBpJv-4qpfC5949URM8N7pFmIZ8A-_iPsS3Q_GaxSxZeBIzE5JWbhW3ayISzik8Y1zRMdVkcCPq6l1wynV64RYfj8zIsGAAMnRPVD3JMMtJg",
        credit: "DATA: ASMC SINGAPORE"
      }
    ]
  },
  {
    id: "inside-spore-vintage-classic-cars",
    title: "Inside Singapore's world of vintage and classic cars",
    type: "Photo Gallery",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfij5k2fJG8_CFo0ndIUWeWQYBpB1kWUOmr7dgPdZr72sbWZdYtLbDUdZuDmq3gQ7NI9JBL85wAmNT7qLdFbd5qO8ry9M7Ogyk_YdPTazv57F-5im9xUB7sSj-txKeU3kPoo0VcMLYB0wmIrLnMKeIKiMvwSvUnkCmFzGGsavQL2LG2m7Hvi2Z0AiAKYw_pCtZNLcvx5pqmHBCypf-5a3dBMzIhGk6lHky1-S8ObDhFX2aUsaMVwL1iQ",
    subtitle: "Dedicated collectors preserving chrome, carburettors, and automotive heritage.",
    publishedTime: "3 days ago",
    description: "Meet the passionate mechanics and collectors keeping vintage Jaguars, Corvettes, and Mercedes running under Singapore's Classic Vehicle Scheme.",
    slides: [
      {
        title: "The 1961 Jaguar E-Type Series 1",
        description: "Enzo Ferrari once called it the most beautiful car in the world; here restored to immaculate factory British Racing Green in an Ubi workshop.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfij5k2fJG8_CFo0ndIUWeWQYBpB1kWUOmr7dgPdZr72sbWZdYtLbDUdZuDmq3gQ7NI9JBL85wAmNT7qLdFbd5qO8ry9M7Ogyk_YdPTazv57F-5im9xUB7sSj-txKeU3kPoo0VcMLYB0wmIrLnMKeIKiMvwSvUnkCmFzGGsavQL2LG2m7Hvi2Z0AiAKYw_pCtZNLcvx5pqmHBCypf-5a3dBMzIhGk6lHky1-S8ObDhFX2aUsaMVwL1iQ",
        credit: "PHOTO: SPH MEDIA / DESMOND WEE"
      },
      {
        title: "Classic Car Club Sunday Morning Convoy",
        description: "Owners congregate along Dempsey Hill before embarking on scenic coastal dawn drives along Tanah Merah Coast Road.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX3b-nURS40xbtoVDSFTPx3E5FehYhJKDTnYqaOPemswqVuMINZohZd3Ope0RcMuPr8j7lAgYg69XfP1XDMeQC_YZFs8NAbMFocpTZUY5bk1sFEWreSh1TDSjXSGdoApfhsPm40miHGgqdy-g7Dw2gOJyQkEorW30mZioqZSZOH4B1zzhMn1SoJPRA3PrYplGdciCdLPD17QkgT6ZtI3QCNGYLESTbAQGxPIdhXlwE2zxnJlieTQDAXA",
        credit: "PHOTO: SPH MEDIA / TIMOTHY DAVID"
      }
    ]
  }
];

export const ALL_ARTICLES: Article[] = [
  LEAD_ARTICLE,
  ...LATEST_HEADLINES,
  SINGAPORE_LEAD,
  ...SINGAPORE_SUB_ARTICLES,
  ASIA_WORLD_LEAD,
  ...ASIA_WORLD_SUB_ARTICLES,
  ...OPINION_ARTICLES
];

export const INITIAL_COMMENTS: Record<string, ArticleComment[]> = {
  "fed-rate-hike-2024": [
    {
      id: "c1",
      author: "Winston Koh",
      location: "Tampines, Singapore",
      timestamp: "1 hour ago",
      content: "Local banks will certainly adjust their 3-month fixed deposit rates upwards. Time to look into Singapore Savings Bonds (SSB) again.",
      likes: 14
    },
    {
      id: "c2",
      author: "Grace Tan",
      location: "Singapore",
      timestamp: "45 mins ago",
      content: "The balance sheet reduction is what will really squeeze global liquidity. Homeowners with floating rate mortgages need to recalculate their monthly buffer.",
      likes: 8
    }
  ],
  "spore-cardiac-arrest-taiwan-bus": [
    {
      id: "c3",
      author: "Bernard Lee",
      location: "Singapore",
      timestamp: "2 hours ago",
      content: "Kudos to the Taipei paramedics and doctors for the prompt CPR and resuscitation. Praying for his swift and complete recovery.",
      likes: 27
    }
  ],
  "opinion-petrodollar-to-ai-dollar": [
    {
      id: "c4",
      author: "Marcus Aurelius",
      location: "Novena, Singapore",
      timestamp: "3 hours ago",
      content: "Fascinating analysis by Vikram Khanna. Chips and compute power are indeed the new crude oil of our century.",
      likes: 19
    }
  ]
};
