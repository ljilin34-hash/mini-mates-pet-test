const questions = [
  {
    axis: "social", context: "社交观察",
    text: "家里来了不熟悉的人，{name} 通常会……",
    answers: [
      [2, "主动靠近，想闻闻或打招呼"],
      [0, "先保持距离，熟悉后再决定"],
      [-2, "躲到自己的安全区域观察"]
    ]
  },
  {
    axis: "explore", context: "探索观察",
    text: "一个从没见过的新玩具出现时，{name} 会……",
    answers: [
      [2, "马上上前研究怎么玩"],
      [0, "绕着看看，确认后再接近"],
      [-2, "先不碰，过一阵子再说"]
    ]
  },
  {
    axis: "bond", context: "陪伴观察",
    text: "你从客厅走去另一个房间，{name} 更可能……",
    answers: [
      [2, "立刻跟上，看看你去哪儿"],
      [0, "看心情，有时跟有时不跟"],
      [-2, "继续忙自己的，完全不受影响"]
    ]
  },
  {
    axis: "social", context: "社交观察",
    text: "在人比较多、稍微热闹的环境里，{name} 通常……",
    answers: [
      [2, "越热闹越兴奋，想参与其中"],
      [0, "适应一会儿，也能正常活动"],
      [-2, "明显想离开，寻找安静角落"]
    ]
  },
  {
    axis: "explore", context: "探索观察",
    text: "家里移动了家具或增加了新物件，{name} 会……",
    answers: [
      [2, "第一时间过来检查变化"],
      [0, "注意到了，但反应不算强烈"],
      [-2, "有些警惕，需要较久适应"]
    ]
  },
  {
    axis: "bond", context: "陪伴观察",
    text: "当你坐下休息时，{name} 最常选择……",
    answers: [
      [2, "主动贴着你或待在很近的地方"],
      [0, "待在同一个空间，各自放松"],
      [-2, "去自己最喜欢的地方独处"]
    ]
  },
  {
    axis: "social", context: "社交观察",
    text: "遇到一位友善但陌生的同类时，{name} 往往……",
    answers: [
      [2, "释放友好信号，愿意进一步接触"],
      [0, "保持礼貌距离，慢慢判断"],
      [-2, "尽量回避，不希望对方靠近"]
    ]
  },
  {
    axis: "explore", context: "探索观察",
    text: "听见没出现过的轻微声音，{name} 会……",
    answers: [
      [2, "循着声音去寻找来源"],
      [0, "停下来听听，很快恢复正常"],
      [-2, "马上戒备，需要安抚或躲避"]
    ]
  },
  {
    axis: "bond", context: "陪伴观察",
    text: "短暂独自在熟悉、安全的家里时，{name} 通常……",
    answers: [
      [-2, "能安心休息，独处对 TA 很自然"],
      [0, "偶尔找你，但总体能够适应"],
      [2, "会明显等待或寻找你的踪迹"]
    ]
  },
  {
    axis: "social", context: "社交观察",
    text: "有人温柔地叫 {name} 的名字时，TA 更可能……",
    answers: [
      [2, "积极回应，并主动靠近"],
      [0, "先看看是谁，再决定要不要过去"],
      [-2, "假装没听见，保持自己的节奏"]
    ]
  },
  {
    axis: "explore", context: "探索观察",
    text: "到了一个安全但陌生的新地方，{name} 通常……",
    answers: [
      [2, "很快开始四处探索"],
      [0, "先观察环境，再慢慢活动"],
      [-2, "更愿意待在熟悉的人或物旁边"]
    ]
  },
  {
    axis: "bond", context: "陪伴观察",
    text: "当你情绪低落时，{name} 更常表现为……",
    answers: [
      [2, "主动靠近，陪在你身边"],
      [0, "好像有所察觉，但保持平常状态"],
      [-2, "没有明显变化，继续自己的安排"]
    ]
  }
];

// 12 道答案先计算出社交、探索、陪伴三个维度；三位 key 依次表示这三个维度的倾向。
// 现有问卷共有 2³ = 8 种宠格组合，因此从 16 种人类 MBTI 类型中选取 8 个相近的趣味标签。
const petMbtiByProfile = {
  "111": "ENFP",
  "110": "ESTP",
  "101": "ESFJ",
  "100": "ENFJ",
  "011": "INFP",
  "010": "ISTP",
  "001": "ISFJ",
  "000": "INTJ"
};

const types = {
  "111": {
    number: "01", name: "元气小太阳", color: "#f6c321",
    tagline: "“有朋友的地方，就是我的主场。”",
    description: "热情、好奇，又把你放在心尖上。TA 喜欢参与家里的每一件事，也很乐意把快乐分享给新朋友，是天生的气氛担当。",
    tags: ["热场达人", "好奇宝宝", "贴贴专家"],
    tip: "丰富的互动和小型社交会让 TA 很开心；兴奋时也要留出安静休息的空间。"
  },
  "110": {
    number: "02", name: "自由冒险家", color: "#f6c321",
    tagline: "“世界这么大，我想自己闻一闻。”",
    description: "大胆友好、行动力十足，同时保留自己的节奏。TA 爱新鲜体验，也享受独立做决定，是不需要时刻被照顾的探索家。",
    tags: ["行动派", "自带主见", "社交轻松"],
    tip: "给 TA 安全的探索机会和可以自主选择的空间，比持续干预更能建立信任。"
  },
  "101": {
    number: "03", name: "温柔跟屁虫", color: "#f6c321",
    tagline: "“外面的世界慢一点，有你就安心。”",
    description: "对人友善，但面对变化会谨慎确认。只要熟悉的人在身边，TA 就能逐渐放松，是温柔、体贴又让人很有陪伴感的小伙伴。",
    tags: ["陪伴感满分", "温柔派", "熟了很热情"],
    tip: "进入新环境时让 TA 跟着熟悉的人慢慢适应，不要用突然接触催促 TA。"
  },
  "100": {
    number: "04", name: "淡定外交官", color: "#f6c321",
    tagline: "“我很友好，也很懂得保持分寸。”",
    description: "TA 待人随和、情绪稳定，却不会轻易被热闹牵着走。面对新变化会先判断，再用自己的方式融入，是很有边界感的社交高手。",
    tags: ["边界清晰", "情绪稳定", "礼貌社交"],
    tip: "尊重 TA 的独处时间；邀请而不是强迫互动，TA 反而更愿意主动靠近。"
  },
  "011": {
    number: "05", name: "反差侦察员", color: "#f6c321",
    tagline: "“别看我慢热，好奇心可一点不少。”",
    description: "初见时安静谨慎，熟悉后却会展现旺盛的好奇心。TA 特别依赖信任关系，有你做后盾，就敢一点点打开自己的世界。",
    tags: ["外冷内热", "细节雷达", "认定就黏"],
    tip: "用熟悉的气味、奖励和陪伴支持探索；允许 TA 自己决定接近陌生人的速度。"
  },
  "010": {
    number: "06", name: "神秘探险家", color: "#f6c321",
    tagline: "“我不是害羞，只是在执行秘密任务。”",
    description: "TA 不急着和谁打成一片，却对环境充满兴趣。独立、专注、观察细致，常常在没有人注意时完成自己的探索计划。",
    tags: ["独立调查", "神秘气质", "安静好奇"],
    tip: "准备藏食、嗅闻或益智游戏，让 TA 在低干扰的环境中自由探索。"
  },
  "001": {
    number: "07", name: "安心守护者", color: "#f6c321",
    tagline: "“我不需要很多朋友，有你就够了。”",
    description: "慢热、谨慎、重感情。TA 不轻易把信任交出去，但一旦认定你，就会用安静而坚定的方式陪伴，是家里最可靠的温柔守护者。",
    tags: ["专属陪伴", "安全感优先", "重感情"],
    tip: "稳定的作息和可预测的互动会给 TA 安全感；变化发生时尽量保留熟悉物品。"
  },
  "000": {
    number: "08", name: "冷静观察家", color: "#f6c321",
    tagline: "“先让我看看，再决定要不要参与。”",
    description: "TA 喜欢安静、稳定和清楚的边界。不是冷淡，只是更习惯先观察、后行动；当环境足够安全，TA 会以低调的方式表达信任。",
    tags: ["稳定派", "观察细致", "独处达人"],
    tip: "为 TA 设置不被打扰的安全角落，并用低强度、可退出的方式邀请互动。"
  }
};

const state = {
  petName: "",
  species: "dog",
  index: 0,
  answers: Array(questions.length).fill(null),
  result: null,
  mbti: "",
  scores: null
};

const $ = (selector) => document.querySelector(selector);
const screens = ["#welcome-screen", "#quiz-screen", "#result-screen"];

function showScreen(id) {
  screens.forEach((selector) => $(selector).classList.toggle("screen--active", selector === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[state.index];
  $("#question-count").textContent = `${String(state.index + 1).padStart(2, "0")} / ${questions.length}`;
  $("#progress-bar").style.width = `${((state.index + 1) / questions.length) * 100}%`;
  $("#question-icon").textContent = String(state.index + 1).padStart(2, "0");
  $("#question-context").textContent = question.context;
  $("#question-title").textContent = question.text.split("{name}").join(state.petName);
  $("#back-button").textContent = state.index === 0 ? "← 修改宠物信息" : "← 上一题";
  $("#back-button").style.visibility = "visible";
  $("#previous-question-label").textContent = state.index === 0 ? "返回修改宠物信息" : "返回上一问";

  const answerList = $("#answer-list");
  answerList.innerHTML = "";
  question.answers.forEach(([score, label]) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => chooseAnswer(score));
    answerList.appendChild(button);
  });
}

function chooseAnswer(score) {
  state.answers[state.index] = score;
  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    calculateResult();
    renderResult();
    showScreen("#result-screen");
  }
}

function calculateResult() {
  const scores = { social: 0, explore: 0, bond: 0 };
  questions.forEach((question, index) => { scores[question.axis] += state.answers[index] ?? 0; });
  const key = `${scores.social >= 0 ? 1 : 0}${scores.explore >= 0 ? 1 : 0}${scores.bond >= 0 ? 1 : 0}`;
  state.scores = scores;
  state.result = types[key];
  state.mbti = petMbtiByProfile[key];
}

function scoreToPercent(score) {
  return Math.max(8, Math.min(92, Math.round(((score + 8) / 16) * 100)));
}

function traitMarkup(left, right, score) {
  const percent = scoreToPercent(score);
  const dominant = percent >= 50 ? right : left;
  return `
    <div class="trait-row">
      <div class="trait-row__labels"><span>${left}</span><strong>${dominant} ${Math.max(percent, 100 - percent)}%</strong><span>${right}</span></div>
      <div class="trait-row__track"><div class="trait-row__fill" style="width:${percent}%"></div></div>
    </div>`;
}

function renderResult() {
  const result = state.result;
  const serialSeed = [...state.petName].reduce((sum, char) => sum + char.charCodeAt(0), 0) + state.answers.reduce((sum, value) => sum + value + 2, 0) * 17;
  const serial = `MM-${String(serialSeed % 10000).padStart(4, "0")}`;
  $("#result-pet-name").textContent = state.petName;
  $("#result-serial").textContent = serial;
  $("#result-animal").src = state.species === "dog" ? "./assets/mini-mates-dog.png" : "./assets/mini-mates-cat.png";
  $("#result-code").textContent = `MINI TYPE ${result.number}`;
  $("#result-mbti").textContent = `宠物 MBTI · ${state.mbti}`;
  $("#result-type").textContent = result.name;
  $("#result-tagline").textContent = result.tagline;
  $("#result-description").textContent = result.description;
  $("#result-tip").textContent = result.tip;
  $("#result-card").style.setProperty("--result-color", result.color);
  $("#trait-list").style.setProperty("--result-color", result.color);
  $("#trait-list").innerHTML = [
    traitMarkup("慢热", "热情", state.scores.social),
    traitMarkup("谨慎", "好奇", state.scores.explore),
    traitMarkup("独立", "黏人", state.scores.bond)
  ].join("");
  $("#result-tags").innerHTML = result.tags.map((tag) => `<span># ${tag}</span>`).join("");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("toast--show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("toast--show"), 2200);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 99) {
  const chars = [...text];
  let line = "";
  let lineCount = 0;
  for (let i = 0; i < chars.length; i += 1) {
    const test = line + chars[i];
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y + lineCount * lineHeight);
      line = chars[i];
      lineCount += 1;
      if (lineCount >= maxLines - 1) break;
    } else {
      line = test;
    }
  }
  if (lineCount < maxLines) ctx.fillText(line, x, y + lineCount * lineHeight);
  return y + (lineCount + 1) * lineHeight;
}

function roundedRect(ctx, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + height - safeRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  ctx.lineTo(x + safeRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
  ctx.closePath();
  ctx.fill();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function downloadResultCard() {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");
  const result = state.result;

  ctx.fillStyle = "#fff9ef";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = result.color;
  ctx.beginPath();
  ctx.arc(910, 70, 260, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#25302b";
  roundedRect(ctx, 70, 80, 940, 1185, 54);

  ctx.fillStyle = "rgba(255,255,255,.62)";
  ctx.font = "700 24px Arial";
  ctx.fillText("MINI MATES社交圈", 125, 150);
  ctx.textAlign = "right";
  ctx.fillText($("#result-serial").textContent, 950, 150);
  ctx.textAlign = "left";

  ctx.fillStyle = "#ffd65a";
  ctx.font = "700 24px Arial";
  ctx.fillText(`MINI TYPE ${result.number}`, 125, 265);
  ctx.fillStyle = "#ffffff";
  ctx.font = '700 36px "PingFang SC", Arial';
  ctx.fillText(`宠物 MBTI · ${state.mbti}`, 125, 320);
  ctx.fillStyle = "#ffffff";
  ctx.font = '700 74px "PingFang SC", Arial';
  ctx.fillText(state.petName, 125, 405);
  ctx.fillStyle = result.color;
  ctx.font = '700 98px "PingFang SC", Arial';
  ctx.fillText(result.name, 125, 515);
  try {
    const mascot = await loadImage(state.species === "dog" ? "./assets/mini-mates-dog.png" : "./assets/mini-mates-cat.png");
    ctx.drawImage(mascot, 750, 205, 210, 210);
  } catch {
    // The result card still remains usable if a local browser blocks image loading.
  }

  ctx.fillStyle = "rgba(255,255,255,.72)";
  ctx.font = '30px "PingFang SC", Arial';
  ctx.fillText(result.tagline, 125, 580);

  const traitRows = [
    ["社交能量", state.scores.social, "慢热", "热情"],
    ["探索能量", state.scores.explore, "谨慎", "好奇"],
    ["陪伴能量", state.scores.bond, "独立", "黏人"]
  ];
  traitRows.forEach(([label, score, left, right], index) => {
    const y = 675 + index * 100;
    const percent = scoreToPercent(score);
    ctx.fillStyle = "rgba(255,255,255,.72)";
    ctx.font = '24px "PingFang SC", Arial';
    ctx.fillText(`${label} · ${percent >= 50 ? right : left} ${Math.max(percent, 100 - percent)}%`, 125, y);
    ctx.fillStyle = "rgba(255,255,255,.13)";
    roundedRect(ctx, 125, y + 24, 830, 14, 7);
    ctx.fillStyle = result.color;
    roundedRect(ctx, 125, y + 24, 830 * percent / 100, 14, 7);
  });

  ctx.fillStyle = "rgba(255,255,255,.82)";
  ctx.font = '29px "PingFang SC", Arial';
  wrapText(ctx, result.description, 125, 960, 820, 48, 4);

  ctx.fillStyle = "#25302b";
  ctx.font = '700 24px "PingFang SC", Arial';
  result.tags.forEach((tag, index) => {
    ctx.fillStyle = "rgba(255,255,255,.11)";
    const x = 125 + index * 270;
    roundedRect(ctx, x, 1162, 240, 48, 24);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`# ${tag}`, x + 22, 1195);
  });

  ctx.fillStyle = "#7e817f";
  ctx.font = '22px "PingFang SC", Arial';
  ctx.fillText("每一种小个性，都值得被喜欢。", 70, 1315);
  ctx.textAlign = "right";
  ctx.fillText("Mini Mates 宠格研究所", 1010, 1315);

  const imageData = canvas.toDataURL("image/png");
  if (/MicroMessenger/i.test(navigator.userAgent)) {
    $("#wechat-preview-image").src = imageData;
    $("#wechat-preview").hidden = false;
    document.body.style.overflow = "hidden";
    return;
  }

  const link = document.createElement("a");
  link.download = `${state.petName}-${result.name}-Mini-Mates.png`;
  link.href = imageData;
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast("结果卡已生成，正在保存");
}

async function copyShareText() {
  const text = `我家${state.petName}的 Mini Mates 宠格是「${state.result.name} · ${state.mbti}」\n${state.result.tagline}\n你家毛孩子会是哪一种？`;
  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error("clipboard unavailable");
    await navigator.clipboard.writeText(text);
    showToast("分享文案已复制");
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, input.value.length);
    const copied = document.execCommand && document.execCommand("copy");
    input.remove();
    if (copied) showToast("分享文案已复制");
    else window.prompt("复制这段分享文案：", text);
  }
}

$("#pet-form").addEventListener("submit", (event) => {
  event.preventDefault();
  state.petName = $("#pet-name").value.trim();
  state.species = document.querySelector('input[name="species"]:checked').value;
  if (!state.petName) return;
  state.index = 0;
  state.answers.fill(null);
  renderQuestion();
  showScreen("#quiz-screen");
});

function goToPreviousQuestion() {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  } else {
    showScreen("#welcome-screen");
  }
}

$("#back-button").addEventListener("click", goToPreviousQuestion);
$("#previous-question-button").addEventListener("click", goToPreviousQuestion);

$("#restart-button").addEventListener("click", () => {
  state.index = 0;
  state.answers.fill(null);
  showScreen("#welcome-screen");
});

$("#download-button").addEventListener("click", downloadResultCard);
$("#copy-button").addEventListener("click", copyShareText);
$("#close-preview-button").addEventListener("click", () => {
  $("#wechat-preview").hidden = true;
  $("#wechat-preview-image").removeAttribute("src");
  document.body.style.overflow = "";
});
$("#wechat-preview").addEventListener("click", (event) => {
  if (event.target === $("#wechat-preview")) $("#close-preview-button").click();
});

document.querySelectorAll('input[name="species"]').forEach((input) => {
  input.addEventListener("change", () => {
    document.querySelectorAll(".species-option").forEach((option) => option.classList.remove("species-option--selected"));
    input.closest(".species-option").classList.add("species-option--selected");
  });
});
document.querySelector('input[name="species"]:checked').closest(".species-option").classList.add("species-option--selected");

document.addEventListener("keydown", (event) => {
  if (!$("#quiz-screen").classList.contains("screen--active")) return;
  const number = Number(event.key);
  if (number >= 1 && number <= 3) {
    const button = $("#answer-list").children[number - 1];
    if (button) button.click();
  }
});
