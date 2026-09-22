const messages = {
  instagram: [
    "Massive quantum computing & data storage facilities are being planned across the Rogue Valley — and they threaten the water and power our homes and farms depend on. We're organizing residents to demand transparency and accountability before ground breaks. 💧⚡",
    "Our water. Our grid. Our valley. Data centers don't belong here without answers first. Join the fight."
  ],
  facebook: [
    "The Rogue Valley Water and Power Protection Fund is organizing against the unchecked development of large-scale data centers for quantum computing and data storage. These facilities draw enormous amounts of water and electricity — resources our community can't spare without a real environmental review. Stand with us."
  ],
  story: [
    "🚨 Data centers are coming for our water & power. Fight back with us."
  ]
};

function renderContent() {
  const platform = document.getElementById("platform").value;
  const pool = messages[platform];
  const base = pool[Math.floor(Math.random() * pool.length)];

  const cta = `\n\n🎁 Get a $6 vinyl sticker & support the cause: ${CONFIG.stickerLink}\n💛 Or donate directly: ${CONFIG.donateLink}\n\n#RogueValley #ProtectOurWater #ProtectOurPower`;

  document.getElementById("output").value = base + cta;
}

function copyOutput() {
  const out = document.getElementById("output");
  out.select();
  document.execCommand("copy");
}
