const header = document.getElementById("siteHeader");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const agentLauncher = document.getElementById("agentLauncher");
const agentPanel = document.getElementById("agentPanel");
const agentClose = document.getElementById("agentClose");
const agentForm = document.getElementById("agentForm");
const agentInput = document.getElementById("agentInput");
const agentMessages = document.getElementById("agentMessages");
const agentSuggestions = document.getElementById("agentSuggestions");

const privacyRefusal = "对不起，涉及隐私机密的事，我做不到。";
const abuseRefusal = "我的妈妈从小教育我要文明用语，stay humble！🫪";
const colaIntro = "Woof！你好～我是Cola🐶！我的主人是Eliah，也就是石光祖，他也是我的好朋友🤩";
const colaGreeting = `${colaIntro}\n你可以问我他的经历、项目、招聘 SOP、兴趣爱好，或者让我帮你把他的介绍整理得更自然一点。`;

const profile = {
  name: "石光祖",
  title: "HR 行业招聘实习生",
  focus: "世界模型与多模态算法人才挖掘",
  school: "郑州大学工商管理",
  contact: {
    phone: "17803997920",
    email: "sgzblue123@163.com",
  },
  strengths: ["业务理解能力强", "结果导向", "AI 爱好者", "细致抗压", "数据复盘"],
  publicCompany:
    "ISpark 是一家面向下一代动态数字内容的 AI 科技公司，致力于用生成式 AI 推动数字内容从视频走向 3D 世界。团队完成首轮融资，是智谱华章的被投，使命关键词是 Rendering。",
  experiences: {
    ispark:
      "ISpark 是 Eliah 最新一段经历，方向是视频交互式生成世界模型。他会参与 HRBP 全模块工作，包括组织架构设计、绩效管理体系搭建、团队活动筹建等，也会继续在世界模型赛道学习。",
    vast:
      "在 VAST，Eliah 对接增长业务社招和实习共 30 个岗位（实习岗位独立负责 14 个，社招岗位协助 mentor 16 个），覆盖设计、策略优化、投放执行、增长工程等业务，招聘工作全流程跟进（沟通 offer 阶段除外）。8 月份共推送简历 204 份，评估通过 166 份，通过率 81.4%；其中社招 92 份，通过 62 份（67.4%），实习 112 份，通过 104 份（93.0%）。主要渠道是脉脉、BOSS 直聘、小红书和 3D 创作者社区（如 tripo、meshy 等）。截至目前，通过自主 Sourcing 产出 offer 14 份并全部接受（社招 3 人、实习 11 人），其中 8 人已入职、6 人待入职；含 4 位高分候选人（面评均分 4.0/5.0 以上），8 月高分候选人数位列组内第1名。后面他还做了招聘数据漏斗和语音 bot，用来优化招聘策略。",
    kuaishou:
      "在快手 · 可灵 AI，Eliah 对接多模态理解与生成一体化算法岗，负责实习生 HR 面试。那段时间推送简历 200+，组织面试 323 场，也做过竞家 mapping、薪酬方案收集和候选人入职流程跟进。",
    gaotu:
      "高途主要是 Eliah 的社群运营经历，他做学员社群日常运营、氛围维护和需求收集，偏用户增长和转化。",
  },
  education:
    "Eliah 在郑州大学读工商管理，本科时间是 2023.09 到 2027.07。核心课包括人力资源管理、组织行为学、管理学原理、市场营销、概率论与数理统计。",
  projects: [
    "HR实习生 · 通用工作SOP：整理长期实习中沉淀的工作方法论。",
    "多语言本地化口语测评 Bot：面向海外本地化招聘，用来补小语种面试官缺口。",
    "招聘漏斗分析：梳理 30+ 岗位招聘链路，做流失归因与看板。",
  ],
  hobbies: ["摄影", "绘画", "旅行", "足球"],
  dailyLife: {
    travel: "Eliah 很喜欢旅行，下一段想从中亚一路走到西班牙，巴塔哥尼亚是他的终极目标。",
    football: "Eliah 喜欢英格兰队和西甲的马德里竞技。",
  },
};

const recruitingSOP = {
  overview:
    "这份招聘 SOP 的核心很简单：先把人和岗匹配准，再把沟通节奏和反馈做细，最后把 offer 和入职盯稳。它更像一套实战方法论，不是死板模板。",
  sourcing:
    "找人时我会先看经验是否匹配，再看能力能不能迁移。岗位多的时候，我会优先用“人配岗”的思路逆向匹配，而不是死盯 JD；稀缺岗位也会适当放宽垂直经历，去找迁移性强的人。每个没通过的候选人我都会记录原因，方便后面复盘画像。",
  preComm:
    "前置沟通我会保持轻量，不把候选人聊跑。重点收集到岗时间、实习时长、出勤要求、其他流程进度等信息，同时只同步公开且必要的岗位信息。遇到太深入的业务问题，我通常会把讨论留到面试里，让候选人和业务老师直接聊。",
  resume:
    "推简历给业务方时，我会顺手附上作品集、个人主页、候选人亮点、风险点，以及前置沟通里同步到的关键信息，这样业务方看起来会更省力。",
  interview:
    "面试阶段最重要的是节奏和反馈。紧急岗位尽量前推面试时间，面试前记得提醒双方，结束后及时跟进反馈、更新台账、同步状态。候选人问结果时，尽量给出明确但不过度展开的回应。",
  offer:
    "offer 沟通更像是持续对齐预期：先搞清楚候选人手里还有哪些选择、顾虑点在哪里，再结合工作内容和成长路径去沟通。最后要持续跟到入职，避免前面都聊顺了，后面临门一脚掉线。",
  fallback:
    "如果你想问更具体的招聘问题，可以直接丢给我：Sourcing、前置沟通、约面试、反馈跟进、offer 沟通、入职跟踪，我会按这套 SOP 的思路跟你聊。",
};

const suggestions = [
  "你是谁？",
  "讲讲 VAST",
  "招聘 SOP 怎么用",
  "候选人问敏感问题怎么办",
  "你有什么爱好",
  "给我一句自我介绍",
];

const chatState = {
  lastTopic: "",
  recentTopics: [],
  recentUserText: "",
};

const topicLabels = {
  intro: "自我介绍",
  contact: "联系方式",
  education: "教育背景",
  vast: "VAST",
  kuaishou: "快手",
  ispark: "ISpark",
  gaotu: "高途",
  projects: "项目",
  hobbies: "兴趣",
  strengths: "优势",
  sop: "招聘 SOP",
  location: "位置",
  privacy: "隐私",
  company: "公司介绍",
  fallback: "其他",
};

const pick = (items) => items[Math.floor(Math.random() * items.length)];

const summarizeRecent = () => {
  const names = chatState.recentTopics
    .slice(-3)
    .map((topic) => topicLabels[topic])
    .filter(Boolean);
  if (!names.length) return "";
  return names.join("、");
};

const rememberTopic = (topic, text) => {
  chatState.lastTopic = topic;
  chatState.recentUserText = text;
  if (topic && topic !== "fallback") {
    chatState.recentTopics.push(topic);
    if (chatState.recentTopics.length > 6) {
      chatState.recentTopics.shift();
    }
  }
};

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const openAgent = () => {
  agentPanel.hidden = false;
  agentLauncher.setAttribute("aria-expanded", "true");
  agentInput.focus();
  if (!agentMessages.childElementCount) {
    appendAssistant(colaGreeting);
  }
};

const closeAgent = () => {
  agentPanel.hidden = true;
  agentLauncher.setAttribute("aria-expanded", "false");
};

const toggleAgent = () => {
  if (agentPanel.hidden) {
    openAgent();
  } else {
    closeAgent();
  }
};

const escapeHtml = (text) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const appendMessage = (role, text, meta = "") => {
  const item = document.createElement("div");
  item.className = "agent-message";
  item.dataset.role = role;

  const bubble = document.createElement("div");
  bubble.className = "agent-bubble";
  bubble.innerHTML = escapeHtml(text).replaceAll("\n", "<br>");

  item.appendChild(bubble);

  if (meta) {
    const badge = document.createElement("div");
    badge.className = "agent-meta";
    badge.textContent = meta;
    item.appendChild(badge);
  }

  agentMessages.appendChild(item);
  agentMessages.scrollTop = agentMessages.scrollHeight;
  return item;
};

const appendAssistant = (text, meta = "Cola") => appendMessage("assistant", text, meta);
const appendUser = (text) => appendMessage("user", text, "你");

const showTyping = () => {
  const item = document.createElement("div");
  item.className = "agent-message agent-message--typing";
  item.dataset.role = "assistant";

  const bubble = document.createElement("div");
  bubble.className = "agent-bubble agent-bubble--typing";
  bubble.innerHTML = '<span></span><span></span><span></span>';

  item.appendChild(bubble);
  agentMessages.appendChild(item);
  agentMessages.scrollTop = agentMessages.scrollHeight;
  return item;
};

const normalize = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[，。！？、,!.?；;：:()\[\]{}'"`~@#%^&*_+=|\\/<>-]/g, "");

const containsAny = (source, words) => words.some((word) => source.includes(word));

const isAbusiveText = (raw, q) => {
  const abusivePhrases = [
    "石光祖傻逼",
    "石光祖煞笔",
    "石光祖sb",
    "石光祖垃圾",
    "滚吧",
    "石光祖是狗",
    "垃圾",
    "卧槽尼玛",
    "尼玛",
    "你妈",
    "卧槽你妈",
    "我操你妈",
    "辣鸡",
    "cnm",
    "wcnm",
    "lj",
    "煞笔",
    "傻逼",
    "吃屎",
    "吃粑粑",
    "狗屎",
    "贱逼",
  ];

  if (abusivePhrases.some((phrase) => q.includes(normalize(phrase)))) {
    return true;
  }

  return /\bsb\b/i.test(raw.toLowerCase());
};

const detectTopic = (q) => {
  if (containsAny(q, ["隐私", "机密", "私密", "私人", "保密", "内部", "团队规模", "薪资", "家人", "家庭", "住址", "证件", "银行卡", "账号"])) {
    return "privacy";
  }
  if (containsAny(q, ["你现在在哪", "你在哪", "你在哪里", "在哪儿"])) {
    return "location";
  }
  if (containsAny(q, ["ispark", "公司介绍", "公司基本情况", "业务", "使命", "rendering", "3d世界", "动态数字内容"])) {
    return "company";
  }
  if (containsAny(q, ["招聘sop", "工作sop", "招聘流程", "工作流程", "招聘疑问", "找人", "sourcing", "前置沟通", "约面试", "面试跟进", "跟进面试", "面试要注意", "面试注意", "offer", "入职"])) {
    return "sop";
  }
  if (containsAny(q, ["你是谁", "你叫什么", "介绍你", "自我介绍", "你是啥", "你是什么"])) {
    return "intro";
  }
  if (containsAny(q, ["怎么联系", "联系方式", "电话", "邮箱", "联系你"])) {
    return "contact";
  }
  if (containsAny(q, ["学校", "教育", "背景", "本科", "专业", "gpa"])) {
    return "education";
  }
  if (containsAny(q, ["vast", "3d", "世界模型", "增长招聘", "offer", "sourcing"])) {
    return "vast";
  }
  if (containsAny(q, ["快手", "可灵", "kuaishou", "多模态", "mapping"])) {
    return "kuaishou";
  }
  if (containsAny(q, ["ispark", "视频交互", "hrbp", "世界模型团队"])) {
    return "ispark";
  }
  if (containsAny(q, ["高途", "社群", "运营", "转化"])) {
    return "gaotu";
  }
  if (containsAny(q, ["项目", "bot", "sop", "漏斗", "工作流"])) {
    return "projects";
  }
  if (containsAny(q, ["兴趣", "爱好", "摄影", "绘画", "旅行", "足球", "日常"])) {
    return "hobbies";
  }
  if (containsAny(q, ["优势", "强项", "亮点", "特点"])) {
    return "strengths";
  }
  if (containsAny(q, ["aiagent", "agent", "对话", "机器人", "为什么做这个"])) {
    return "fallback";
  }
  return "fallback";
};

const isSensitiveQuestion = (q) =>
  containsAny(q, [
    "隐私",
    "机密",
    "私密",
    "私人",
    "保密",
    "内部",
    "内部信息",
    "内部资料",
    "团队规模",
    "团队人数",
    "成员",
    "薪资",
    "工资",
    "收入",
    "年薪",
    "奖金",
    "股权",
    "家人",
    "家庭",
    "住址",
    "家庭住址",
    "身份证",
    "证件",
    "银行卡",
    "账号",
  ]);

const recruitingTopic = (q) => {
  if (containsAny(q, ["sourcing", "找人", "初筛", "画像", "简历筛选", "人才池"])) {
    return recruitingSOP.sourcing;
  }

  if (
    containsAny(q, [
      "前置沟通",
      "候选人问",
      "候选人反问",
      "到岗时间",
      "实习时长",
      "出勤",
      "其他流程进度",
    ])
  ) {
    return recruitingSOP.preComm;
  }

  if (containsAny(q, ["推简历", "简历推送", "业务方", "作品集", "个人主页", "风险点"])) {
    return recruitingSOP.resume;
  }

  if (
    containsAny(q, [
      "约面试",
      "面试跟进",
      "跟进面试",
      "面试提醒",
      "面试要注意",
      "面试注意",
      "台账",
      "面评",
      "爽约",
      "反馈",
      "候选人进度",
    ])
  ) {
    return recruitingSOP.interview;
  }

  if (containsAny(q, ["offer", "入职", "纠结", "拒绝offer", "接受offer", "到场"])) {
    return recruitingSOP.offer;
  }

  if (containsAny(q, ["招聘sop", "工作sop", "招聘流程", "工作流程", "招聘疑问", "招聘工作"])) {
    return recruitingSOP.overview;
  }

  return recruitingSOP.fallback;
};

const answer = (raw) => {
  const q = normalize(raw);
  const topic = detectTopic(q);

  if (!q) {
    return "你可以直接问我：VAST、快手、ISpark、学校、联系方式、招聘 SOP，或者让我帮你把话说得更像聊天一点。";
  }

  if (isAbusiveText(raw, q)) {
    return abuseRefusal;
  }

  if (topic === "privacy") {
    return privacyRefusal;
  }

  if (topic === "location") {
    return "Cola 现在就在 Eliah 的个人主页里，具体一点说，是你右下角打开的这个对话框。我负责帮访问者快速摸到主页里的公开信息。";
  }

  if (containsAny(q, ["石光祖在哪", "eliah在哪", "本人在哪", "住哪", "住在哪里", "地址"])) {
    return privacyRefusal;
  }

  if (topic === "company") {
    return profile.publicCompany;
  }

  if (topic === "sop") {
    return recruitingTopic(q);
  }

  if (topic === "intro") {
    const options = [
      `Eliah 主要方向是${profile.title}，现在关注${profile.focus}。`,
      `Eliah 做的是${profile.title}这一类的事情，也一直在看${profile.focus}。`,
      `你可以把 Eliah 理解成一个专注 ${profile.title} 的学生，最近主要在跟 ${profile.focus} 打交道。`,
    ];
    const tail = summarizeRecent();
    return tail
      ? `${colaIntro}\n${pick(options)}刚刚我们还聊过 ${tail}，所以你也可以继续顺着这个方向问。`
      : `${colaIntro}\n${pick(options)}如果你想，我也可以把他的经历压缩成 20 秒自我介绍版。`;
  }

  if (topic === "contact") {
    return `可以通过电话 ${profile.contact.phone} 或邮箱 ${profile.contact.email} 找到我。`;
  }

  if (topic === "education") {
    return profile.education;
  }

  if (topic === "vast") {
    return profile.experiences.vast;
  }

  if (topic === "kuaishou") {
    return profile.experiences.kuaishou;
  }

  if (topic === "ispark") {
    return profile.experiences.ispark;
  }

  if (topic === "gaotu") {
    return profile.experiences.gaotu;
  }

  if (topic === "projects") {
    return [
      "Eliah 现在比较代表性的项目有：",
      ...profile.projects.map((item) => `- ${item}`),
    ].join("\n");
  }

  if (topic === "hobbies") {
    const openers = [
      `Eliah 平时喜欢${profile.hobbies.join("、")}。`,
      `生活里，Eliah 比较容易被${profile.hobbies.join("、")}这几件事吸引。`,
      `除了工作内容，Eliah 也常常把时间花在${profile.hobbies.join("、")}上。`,
    ];
    return [
      pick(openers),
      profile.dailyLife.travel,
      profile.dailyLife.football,
    ].join("\n");
  }

  if (topic === "strengths") {
    const leadIns = [
      `Cola 通常会这样概括 Eliah：${profile.strengths.join("、")}。`,
      `如果从工作视角说，Eliah 的几个关键词是：${profile.strengths.join("、")}。`,
      `Eliah 比较常被提到的几个点是：${profile.strengths.join("、")}。`,
    ];
    return `${pick(leadIns)}如果你要，我也可以帮你压成更像面试的一版。`;
  }

  if (containsAny(q, ["一句话", "简短", "20秒", "30秒", "自我介绍版"])) {
    return `${colaIntro}\n${pick([
      "Eliah 是郑州大学工商管理专业的学生，关注 AI 行业招聘和世界模型相关的人才挖掘，做过快手、VAST 和 ISpark 的 HR 实习，也在持续尝试用 AI 工具提升招聘和分析效率。",
      "Eliah 主要做 AI 方向的招聘相关工作，实习经历覆盖快手、VAST 和 ISpark，也会顺手把招聘流程和工作方法沉淀下来。",
    ])}`;
  }

  if (containsAny(q, ["aiagent", "agent", "对话", "机器人", "为什么做这个"])) {
    return "做这个对话助手的原因很简单：访问者不用自己翻很长的页面，直接问我就能快速找到关心的信息。先把它做得顺一点、像一点，再决定要不要往真正的模型接。";
  }

  const gentleNudges = [
    "这个我能接住，不过我现在还是按主页资料回答。你可以换个问法，比如：VAST 主要做了什么、快手那段经历怎样、你有什么优势。",
    "我先按主页信息回答你。你要是愿意，我们也可以顺着刚才的话题继续聊，我会尽量说得自然一点。",
    "这题我先不硬编。你换成主页里的关键词问我，会更顺手。",
  ];
  return pick(gentleNudges);
};

const runQuery = (text) => {
  const trimmed = text.trim();
  if (!trimmed) return;
  appendUser(trimmed);
  const normalized = normalize(trimmed);
  rememberTopic(detectTopic(normalized), trimmed);
  const typing = showTyping();
  const pause = Math.min(1100, 240 + Math.round(trimmed.length * 18) + Math.floor(Math.random() * 240));
  window.setTimeout(() => {
    typing.remove();
    appendAssistant(answer(trimmed));
  }, pause);
};

const renderSuggestions = () => {
  agentSuggestions.innerHTML = "";
  suggestions.forEach((text) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "agent-chip";
    chip.textContent = text;
    chip.addEventListener("click", () => {
      openAgent();
      runQuery(text);
    });
    agentSuggestions.appendChild(chip);
  });
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  header.classList.toggle("menu-open", isOpen);
  menuBtn.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    header.classList.remove("menu-open");
    menuBtn.setAttribute("aria-label", "打开导航");
  });
});

agentLauncher.addEventListener("click", toggleAgent);
agentClose.addEventListener("click", closeAgent);

agentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runQuery(agentInput.value);
  agentInput.value = "";
  agentInput.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !agentPanel.hidden) {
    closeAgent();
  }
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((node) => observer.observe(node));
renderSuggestions();
