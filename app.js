// ── Anthropic API key (local testing only — never commit a real key) ──
const ANTHROPIC_API_KEY = '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';

const CATALOG = [
  // CHAIRS
  { cat:'Chairs', id:'chair-banquet', name:'Banquet Chair', w:1.5, h:1.5, unit:'ft',
    draw: (w,h,c) => `
      <rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="${darken(c)}" opacity="0.9"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="8%" fill="${c}" opacity="0.85" stroke="${darken(c)}" stroke-width="1.5"/>` },

  { cat:'Chairs', id:'chair-cross', name:'Crossback', w:1.5, h:1.5, unit:'ft',
    draw: (w,h,c) => `
      <rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="none" stroke="${c}" stroke-width="2"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="8%" fill="none" stroke="${c}" stroke-width="2"/>
      <line x1="20%" y1="30%" x2="80%" y2="85%" stroke="${c}" stroke-width="1.5" opacity="0.7"/>
      <line x1="80%" y1="30%" x2="20%" y2="85%" stroke="${c}" stroke-width="1.5" opacity="0.7"/>` },

  { cat:'Chairs', id:'chair-ghost', name:'Ghost Chair', w:1.5, h:1.5, unit:'ft',
    draw: (w,h,c) => `
      <rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="rgba(200,220,255,0.5)" stroke="#aac" stroke-width="1.5"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="8%" fill="rgba(200,220,255,0.35)" stroke="#aac" stroke-width="1.5"/>` },

  { cat:'Chairs', id:'chair-chiavari', name:'Chiavari', w:1.4, h:1.4, unit:'ft',
    draw: (w,h,c) => `
      <rect x="10%" y="8%" width="80%" height="14%" rx="3%" fill="none" stroke="${c}" stroke-width="2"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="6%" fill="none" stroke="${c}" stroke-width="2"/>
      <line x1="10%" y1="44%" x2="90%" y2="44%" stroke="${c}" stroke-width="1" opacity="0.5"/>
      <line x1="10%" y1="62%" x2="90%" y2="62%" stroke="${c}" stroke-width="1" opacity="0.5"/>` },

  // ─── BARSTOOLS ───────────────────────────────
  // Barstools are smaller than chairs (seat ~15-17" across) and shown
  // as a round or square seat top with a central pedestal/base ring below

  { cat:'Barstools', id:'barstool-round', name:'Barstool (Round)', w:1.25, h:1.25, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.75" stroke="${darken(c)}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="12%" fill="${darken(c)}" opacity="0.6"/>` },

  { cat:'Barstools', id:'barstool-square', name:'Barstool (Square)', w:1.25, h:1.25, unit:'ft',
    draw:(w,h,c)=>`
      <rect x="8%" y="8%" width="84%" height="84%" rx="8%" fill="${c}" opacity="0.75" stroke="${darken(c)}" stroke-width="2"/>
      <rect x="32%" y="32%" width="36%" height="36%" rx="4%" fill="${darken(c)}" opacity="0.5"/>` },

  { cat:'Barstools', id:'barstool-back', name:'Barstool w/ Back', w:1.25, h:1.5, unit:'ft',
    draw:(w,h,c)=>`
      <rect x="10%" y="5%" width="80%" height="14%" rx="4%" fill="${darken(c)}" opacity="0.85"/>
      <rect x="10%" y="22%" width="80%" height="72%" rx="8%" fill="${c}" opacity="0.75" stroke="${darken(c)}" stroke-width="1.8"/>
      <rect x="28%" y="38%" width="44%" height="40%" rx="4%" fill="${darken(c)}" opacity="0.3"/>` },

  { cat:'Barstools', id:'barstool-swivel', name:'Swivel Barstool', w:1.33, h:1.33, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.75" stroke="${darken(c)}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="20%" fill="none" stroke="${darken(c)}" stroke-width="1.5" stroke-dasharray="3,2"/>
      <circle cx="50%" cy="50%" r="6%" fill="${darken(c)}" opacity="0.7"/>` },

  { cat:'Barstools', id:'barstool-ghost', name:'Ghost Barstool', w:1.25, h:1.25, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="44%" fill="rgba(200,220,255,0.35)" stroke="#aac" stroke-width="1.8"/>
      <circle cx="50%" cy="50%" r="12%" fill="rgba(140,140,200,0.4)"/>` },

  { cat:'Barstools', id:'barstool-cross', name:'Crossback Barstool', w:1.25, h:1.5, unit:'ft',
    draw:(w,h,c)=>`
      <rect x="10%" y="5%" width="80%" height="14%" rx="4%" fill="${darken(c)}" opacity="0.85"/>
      <rect x="10%" y="22%" width="80%" height="72%" rx="8%" fill="${c}" opacity="0.75" stroke="${darken(c)}" stroke-width="1.8"/>
      <line x1="22%" y1="30%" x2="78%" y2="86%" stroke="${darken(c)}" stroke-width="1.5" opacity="0.5"/>
      <line x1="78%" y1="30%" x2="22%" y2="86%" stroke="${darken(c)}" stroke-width="1.5" opacity="0.5"/>` },

  { cat:'Barstools', id:'barstool-saddle', name:'Saddle Barstool', w:1.25, h:1.25, unit:'ft',
    draw:(w,h,c)=>`
      <ellipse cx="50%" cy="50%" rx="44%" ry="36%" fill="${c}" opacity="0.75" stroke="${darken(c)}" stroke-width="2"/>
      <ellipse cx="50%" cy="50%" rx="18%" ry="12%" fill="${darken(c)}" opacity="0.4"/>` },

  // CORT-specific barstools
  { cat:'Barstools', id:'cort-naples-bar-stool', name:'Naples Barstool', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="44%" fill="#2a2a2a" opacity="0.8" stroke="#444" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="14%" fill="#444" opacity="0.6"/>` },

  { cat:'Barstools', id:'cort-baja-bar-stool', name:'Baja Barstool', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="44%" fill="white" opacity="0.9" stroke="#bbb" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="14%" fill="#ccc" opacity="0.6"/>` },

  { cat:'Barstools', id:'cort-allegro-bar-stool', name:'Allegro Barstool', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="44%" fill="#3a5f8a" opacity="0.8" stroke="#2c4a6e" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="14%" fill="#2c4a6e" opacity="0.5"/>` },
  { cat:'Club Chairs', id:'club-chair', name:'Club Chair', w:3, h:2.8, unit:'ft',
    draw: (w,h,c) => `<rect x="5%" y="20%" width="90%" height="65%" rx="10%" fill="${c}" opacity="0.85"/>
      <rect x="5%" y="5%" width="90%" height="30%" rx="10%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="5%" y="20%" width="16%" height="65%" rx="8%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="79%" y="20%" width="16%" height="65%" rx="8%" fill="${darken(c)}" opacity="0.8"/>` },

  { cat:'Club Chairs', id:'accent-chair', name:'Accent Chair', w:2.5, h:2.5, unit:'ft',
    draw: (w,h,c) => `<ellipse cx="50%" cy="62%" rx="42%" ry="35%" fill="${c}" opacity="0.85"/>
      <ellipse cx="50%" cy="30%" rx="42%" ry="28%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="5%" y="28%" width="12%" height="40%" rx="6%" fill="${darken(c)}" opacity="0.9"/>
      <rect x="83%" y="28%" width="12%" height="40%" rx="6%" fill="${darken(c)}" opacity="0.9"/>` },

  { cat:'Club Chairs', id:'chaise', name:'Chaise Lounge', w:5, h:2.5, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="25%" width="70%" height="55%" rx="10%" fill="${c}" opacity="0.85"/>
      <rect x="2%" y="10%" width="28%" height="48%" rx="10%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="2%" y="25%" width="10%" height="55%" rx="6%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="72%" y="40%" width="26%" height="38%" rx="12%" fill="${c}" opacity="0.6"/>` },

  // SOFAS
  { cat:'Sofas', id:'sofa-2', name:'Sofa 2-Seat', w:5, h:2.8, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="22%" width="96%" height="62%" rx="8%" fill="${c}" opacity="0.85"/>
      <rect x="2%" y="8%" width="96%" height="30%" rx="7%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="2%" y="22%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="85%" y="22%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity="0.8"/>
      <line x1="50%" y1="22%" x2="50%" y2="84%" stroke="rgba(0,0,0,0.12)" stroke-width="1.5"/>` },

  { cat:'Sofas', id:'sofa-3', name:'Sofa 3-Seat', w:7, h:2.8, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="22%" width="96%" height="62%" rx="8%" fill="${c}" opacity="0.85"/>
      <rect x="2%" y="8%" width="96%" height="30%" rx="7%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="2%" y="22%" width="10%" height="62%" rx="6%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="88%" y="22%" width="10%" height="62%" rx="6%" fill="${darken(c)}" opacity="0.8"/>
      <line x1="34%" y1="22%" x2="34%" y2="84%" stroke="rgba(0,0,0,0.12)" stroke-width="1.5"/>
      <line x1="66%" y1="22%" x2="66%" y2="84%" stroke="rgba(0,0,0,0.12)" stroke-width="1.5"/>` },

  { cat:'Sofas', id:'sectional-l', name:'Sectional (L)', w:8, h:6, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="40%" width="58%" height="56%" rx="6%" fill="${c}" opacity="0.85"/>
      <rect x="2%" y="28%" width="58%" height="24%" rx="5%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="2%" y="40%" width="12%" height="56%" rx="5%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="40%" y="5%" width="56%" height="50%" rx="6%" fill="${c}" opacity="0.85"/>
      <rect x="40%" y="5%" width="56%" height="20%" rx="5%" fill="${darken(c)}" opacity="0.8"/>
      <rect x="84%" y="5%" width="12%" height="50%" rx="5%" fill="${darken(c)}" opacity="0.8"/>` },

  // TABLES — ROUNDS
  { cat:'Tables — Round', id:'tbl-r48', name:'Round 48"', w:4, h:4, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity="0.15" stroke="${c}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="35%" fill="${c}" opacity="0.1"/>` },

  { cat:'Tables — Round', id:'tbl-r60', name:'Round 60"', w:5, h:5, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity="0.15" stroke="${c}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="35%" fill="${c}" opacity="0.1"/>` },

  { cat:'Tables — Round', id:'tbl-r72', name:'Round 72"', w:6, h:6, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity="0.15" stroke="${c}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="35%" fill="${c}" opacity="0.1"/>` },

  { cat:'Tables — Round', id:'tbl-cocktail', name:'Cocktail Table', w:2, h:2, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity="0.2" stroke="${c}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="20%" fill="${c}" opacity="0.5"/>
      <circle cx="50%" cy="50%" r="4%" fill="${c}"/>` },

  { cat:'Tables — Round', id:'tbl-cocktail-hi', name:'Hi-Top 30"', w:2.5, h:2.5, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity="0.15" stroke="${c}" stroke-width="2" stroke-dasharray="6,3"/>
      <circle cx="50%" cy="50%" r="22%" fill="${c}" opacity="0.4"/>
      <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="${c}" stroke-width="1" opacity="0.4"/>
      <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="${c}" stroke-width="1" opacity="0.4"/>` },

  // TABLES — RECTANGULAR
  { cat:'Tables — Rect', id:'tbl-6ft', name:'Rect 6ft', w:6, h:2.5, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="${c}" opacity="0.15" stroke="${c}" stroke-width="2"/>
      <rect x="5%" y="12%" width="90%" height="76%" rx="3%" fill="${c}" opacity="0.08"/>` },

  { cat:'Tables — Rect', id:'tbl-8ft', name:'Rect 8ft', w:8, h:2.5, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="${c}" opacity="0.15" stroke="${c}" stroke-width="2"/>` },

  { cat:'Tables — Rect', id:'tbl-farm', name:'Farm Table', w:8, h:3, unit:'ft',
    draw: (w,h,c) => `<rect x="1%" y="4%" width="98%" height="92%" rx="2%" fill="rgba(160,120,70,0.18)" stroke="#8B6340" stroke-width="2"/>
      <line x1="8%" y1="4%" x2="8%" y2="96%" stroke="#8B6340" stroke-width="1.5"/>
      <line x1="92%" y1="4%" x2="92%" y2="96%" stroke="#8B6340" stroke-width="1.5"/>` },

  { cat:'Tables — Rect', id:'tbl-sweetheart', name:'Sweetheart', w:4, h:2.5, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="4%" width="96%" height="92%" rx="4%" fill="${c}" opacity="0.18" stroke="${c}" stroke-width="2"/>` },

  // COFFEE & SIDE TABLES
  { cat:'Coffee & Side', id:'coffee-rect', name:'Coffee Table', w:4, h:2, unit:'ft',
    draw: (w,h,c) => `<rect x="4%" y="8%" width="92%" height="84%" rx="6%" fill="${c}" opacity="0.2" stroke="${c}" stroke-width="1.5"/>
      <rect x="10%" y="16%" width="80%" height="68%" rx="4%" fill="${c}" opacity="0.1"/>` },

  { cat:'Coffee & Side', id:'coffee-round', name:'Round Coffee 36"', w:3, h:3, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity="0.2" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="30%" fill="${c}" opacity="0.12"/>` },

  { cat:'Coffee & Side', id:'coffee-round-48', name:'Round Coffee 48"', w:4, h:4, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity="0.2" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="28%" fill="${c}" opacity="0.1"/>` },

  // ROUND SIDE / END TABLES — full range
  { cat:'Coffee & Side', id:'side-round-12', name:'Round Side 12"', w:1, h:1, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.28" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="18%" fill="${c}" opacity="0.6"/>` },

  { cat:'Coffee & Side', id:'side-round-16', name:'Round Side 16"', w:1.33, h:1.33, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.25" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="16%" fill="${c}" opacity="0.55"/>` },

  { cat:'Coffee & Side', id:'side-round-18', name:'Round Side 18"', w:1.5, h:1.5, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.25" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="15%" fill="${c}" opacity="0.6"/>` },

  { cat:'Coffee & Side', id:'side-round-20', name:'Round Side 20"', w:1.67, h:1.67, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.25" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="14%" fill="${c}" opacity="0.55"/>` },

  { cat:'Coffee & Side', id:'side-round-24', name:'Round Side 24"', w:2, h:2, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.25" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="14%" fill="${c}" opacity="0.55"/>` },

  { cat:'Coffee & Side', id:'side-round-30', name:'Round Side 30"', w:2.5, h:2.5, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.22" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="13%" fill="${c}" opacity="0.5"/>` },

  // SQUARE / RECT END TABLES
  { cat:'Coffee & Side', id:'end-sq-18', name:'End Table 18×18"', w:1.5, h:1.5, unit:'ft',
    draw: (w,h,c) => `<rect x="8%" y="8%" width="84%" height="84%" rx="8%" fill="${c}" opacity="0.22" stroke="${c}" stroke-width="1.5"/>` },

  { cat:'Coffee & Side', id:'end-sq-22', name:'End Table 22×22"', w:1.83, h:1.83, unit:'ft',
    draw: (w,h,c) => `<rect x="6%" y="6%" width="88%" height="88%" rx="8%" fill="${c}" opacity="0.22" stroke="${c}" stroke-width="1.5"/>` },

  { cat:'Coffee & Side', id:'end-sq-24', name:'End Table 24×24"', w:2, h:2, unit:'ft',
    draw: (w,h,c) => `<rect x="6%" y="6%" width="88%" height="88%" rx="8%" fill="${c}" opacity="0.22" stroke="${c}" stroke-width="1.5"/>` },

  { cat:'Coffee & Side', id:'end-rect-24x18', name:'End Table 24×18"', w:2, h:1.5, unit:'ft',
    draw: (w,h,c) => `<rect x="5%" y="6%" width="90%" height="88%" rx="8%" fill="${c}" opacity="0.22" stroke="${c}" stroke-width="1.5"/>` },

  // DRUM / PEDESTAL SIDE TABLES (common in event lounge)
  { cat:'Coffee & Side', id:'drum-table-12', name:'Drum Table 12"', w:1, h:1, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.35" stroke="${c}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="28%" fill="${c}" opacity="0.2"/>` },

  { cat:'Coffee & Side', id:'drum-table-16', name:'Drum Table 16"', w:1.33, h:1.33, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.35" stroke="${c}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="26%" fill="${c}" opacity="0.2"/>` },

  { cat:'Coffee & Side', id:'drum-table-20', name:'Drum Table 20"', w:1.67, h:1.67, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity="0.35" stroke="${c}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="24%" fill="${c}" opacity="0.2"/>` },

  { cat:'Coffee & Side', id:'side-rect', name:'Side Table (generic)', w:2, h:2, unit:'ft',
    draw: (w,h,c) => `<rect x="6%" y="6%" width="88%" height="88%" rx="8%" fill="${c}" opacity="0.22" stroke="${c}" stroke-width="1.5"/>` },

  // RUGS
  { cat:'Rugs', id:'rug-rect', name:'Area Rug (Rect)', w:8, h:10, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="2%" width="96%" height="96%" rx="3%" fill="${c}" opacity="0.12" stroke="${c}" stroke-width="1.5" stroke-dasharray="6,3"/>
      <rect x="8%" y="8%" width="84%" height="84%" rx="2%" fill="none" stroke="${c}" stroke-width="1" opacity="0.4"/>` },

  { cat:'Rugs', id:'rug-round', name:'Area Rug (Round)', w:8, h:8, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity="0.12" stroke="${c}" stroke-width="1.5" stroke-dasharray="6,3"/>
      <circle cx="50%" cy="50%" r="38%" fill="none" stroke="${c}" stroke-width="1" opacity="0.4"/>
      <circle cx="50%" cy="50%" r="10%" fill="${c}" opacity="0.2"/>` },

  // LAMPS & LIGHTING
  { cat:'Lighting', id:'floor-lamp', name:'Floor Lamp', w:1.5, h:1.5, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="30%" r="28%" fill="${c}" opacity="0.5" stroke="${c}" stroke-width="1.5"/>
      <line x1="50%" y1="58%" x2="50%" y2="90%" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="50%" cy="90%" rx="25%" ry="8%" fill="${c}" opacity="0.4"/>` },

  { cat:'Lighting', id:'chandelier', name:'Chandelier', w:4, h:4, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="48%" fill="none" stroke="${c}" stroke-width="1.5" stroke-dasharray="4,2" opacity="0.6"/>
      <circle cx="50%" cy="50%" r="30%" fill="${c}" opacity="0.15" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="10%" fill="${c}" opacity="0.6"/>
      ${[0,60,120,180,240,300].map(a=>`<circle cx="${50+38*Math.cos(a*Math.PI/180)}%" cy="${50+38*Math.sin(a*Math.PI/180)}%" r="4%" fill="${c}" opacity="0.7"/>`).join('')}` },

  { cat:'Lighting', id:'chandelier-lg', name:'Chandelier (Lg)', w:6, h:6, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="50%" r="48%" fill="none" stroke="${c}" stroke-width="1.5" stroke-dasharray="4,2" opacity="0.5"/>
      <circle cx="50%" cy="50%" r="32%" fill="${c}" opacity="0.12" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="12%" fill="${c}" opacity="0.5"/>
      ${[0,45,90,135,180,225,270,315].map(a=>`<circle cx="${50+42*Math.cos(a*Math.PI/180)}%" cy="${50+42*Math.sin(a*Math.PI/180)}%" r="3.5%" fill="${c}" opacity="0.7"/>`).join('')}` },

  { cat:'Lighting', id:'string-lights', name:'String Lights', w:10, h:0.5, unit:'ft',
    draw: (w,h,c) => `<line x1="2%" y1="50%" x2="98%" y2="50%" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
      ${[10,22,34,46,58,70,82,94].map(x=>`<circle cx="${x}%" cy="50%" r="4%" fill="${c}" opacity="0.7"/>`).join('')}` },

  // BARS & BACK BAR
  { cat:'Bars', id:'bar-8ft', name:'Bar 8ft', w:8, h:2.5, unit:'ft',
    draw: (w,h,c) => `<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(160,100,40,0.22)" stroke="#8B5A2B" stroke-width="2"/>
      <rect x="1%" y="2%" width="98%" height="35%" rx="3%" fill="rgba(120,70,20,0.3)"/>` },

  { cat:'Bars', id:'bar-straight-12', name:'Bar 12ft', w:12, h:2.5, unit:'ft',
    draw: (w,h,c) => `<rect x="1%" y="2%" width="98%" height="96%" rx="2%" fill="rgba(160,100,40,0.22)" stroke="#8B5A2B" stroke-width="2"/>
      <rect x="1%" y="2%" width="98%" height="32%" rx="2%" fill="rgba(120,70,20,0.3)"/>` },

  { cat:'Bars', id:'backbar', name:'Back Bar Shelf', w:8, h:1.5, unit:'ft',
    draw: (w,h,c) => `<rect x="1%" y="5%" width="98%" height="90%" rx="3%" fill="rgba(100,70,30,0.2)" stroke="#6B4226" stroke-width="1.5"/>
      <line x1="1%" y1="40%" x2="99%" y2="40%" stroke="#6B4226" stroke-width="1" opacity="0.6"/>
      <line x1="1%" y1="70%" x2="99%" y2="70%" stroke="#6B4226" stroke-width="1" opacity="0.6"/>
      ${[10,20,30,40,50,60,70,80,90].map(x=>`<rect x="${x-3}%" y="10%" width="5%" height="28%" rx="1%" fill="#6B4226" opacity="0.3"/>`).join('')}` },

  { cat:'Bars', id:'bar-l', name:'Bar (L-Shape)', w:10, h:8, unit:'ft',
    draw: (w,h,c) => `<rect x="1%" y="1%" width="30%" height="98%" rx="3%" fill="rgba(160,100,40,0.22)" stroke="#8B5A2B" stroke-width="2"/>
      <rect x="30%" y="1%" width="69%" height="30%" rx="3%" fill="rgba(160,100,40,0.22)" stroke="#8B5A2B" stroke-width="2"/>` },

  // GREENERY
  { cat:'Greenery', id:'hedge-4ft', name:'Hedge 4ft', w:4, h:1.5, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="10%" width="96%" height="80%" rx="8%" fill="#4a7c4e" opacity="0.7"/>
      <rect x="4%" y="18%" width="18%" height="64%" rx="50%" fill="#3d6b41" opacity="0.6"/>
      <rect x="26%" y="14%" width="18%" height="72%" rx="50%" fill="#3d6b41" opacity="0.6"/>
      <rect x="50%" y="16%" width="18%" height="68%" rx="50%" fill="#3d6b41" opacity="0.6"/>
      <rect x="72%" y="14%" width="18%" height="72%" rx="50%" fill="#3d6b41" opacity="0.6"/>` },

  { cat:'Greenery', id:'hedge-8ft', name:'Hedge 8ft', w:8, h:1.5, unit:'ft',
    draw: (w,h,c) => `<rect x="1%" y="10%" width="98%" height="80%" rx="6%" fill="#4a7c4e" opacity="0.7"/>
      ${[4,15,26,37,48,59,70,81,92].map(x=>`<rect x="${x}%" y="14%" width="9%" height="72%" rx="50%" fill="#3d6b41" opacity="0.55"/>`).join('')}` },

  // CORT-style rectangular boxwood hedge panels — flat clipped top, planter base
  { cat:'Greenery', id:'boxwood-2x2', name:'Boxwood Panel 2×2\'', w:2, h:2, unit:'ft',
    draw: (w,h,c) => `
      <rect x="8%" y="72%" width="84%" height="24%" rx="4%" fill="#6b5a2e" opacity="0.55"/>
      <rect x="4%" y="10%" width="92%" height="66%" rx="3%" fill="#3a6b3e" opacity="0.9"/>
      <rect x="4%" y="10%" width="92%" height="66%" rx="3%" fill="none" stroke="#2d5530" stroke-width="1.5"/>
      <rect x="8%" y="14%" width="26%" height="28%" rx="2%" fill="#2d5530" opacity="0.3"/>
      <rect x="38%" y="14%" width="26%" height="28%" rx="2%" fill="#2d5530" opacity="0.3"/>
      <rect x="68%" y="14%" width="24%" height="28%" rx="2%" fill="#2d5530" opacity="0.3"/>
      <rect x="8%" y="46%" width="26%" height="26%" rx="2%" fill="#2d5530" opacity="0.3"/>
      <rect x="38%" y="46%" width="26%" height="26%" rx="2%" fill="#2d5530" opacity="0.3"/>
      <rect x="68%" y="46%" width="24%" height="26%" rx="2%" fill="#2d5530" opacity="0.3"/>` },

  { cat:'Greenery', id:'boxwood-4x2', name:'Boxwood Panel 4×2\'', w:4, h:2, unit:'ft',
    draw: (w,h,c) => `
      <rect x="4%" y="72%" width="92%" height="24%" rx="3%" fill="#6b5a2e" opacity="0.55"/>
      <rect x="2%" y="10%" width="96%" height="65%" rx="3%" fill="#3a6b3e" opacity="0.9"/>
      <rect x="2%" y="10%" width="96%" height="65%" rx="3%" fill="none" stroke="#2d5530" stroke-width="1.5"/>
      ${[4,20,36,52,68,84].map(x=>`<rect x="${x}%" y="14%" width="13%" height="56%" rx="2%" fill="#2d5530" opacity="0.25"/>`).join('')}` },

  { cat:'Greenery', id:'boxwood-6x2', name:'Boxwood Panel 6×2\'', w:6, h:2, unit:'ft',
    draw: (w,h,c) => `
      <rect x="3%" y="72%" width="94%" height="24%" rx="3%" fill="#6b5a2e" opacity="0.55"/>
      <rect x="1%" y="10%" width="98%" height="65%" rx="3%" fill="#3a6b3e" opacity="0.9"/>
      <rect x="1%" y="10%" width="98%" height="65%" rx="3%" fill="none" stroke="#2d5530" stroke-width="1.5"/>
      ${[2,15,28,41,54,67,80,92].map(x=>`<rect x="${x}%" y="14%" width="11%" height="56%" rx="2%" fill="#2d5530" opacity="0.22"/>`).join('')}` },

  { cat:'Greenery', id:'boxwood-8x2', name:'Boxwood Panel 8×2\'', w:8, h:2, unit:'ft',
    draw: (w,h,c) => `
      <rect x="2%" y="72%" width="96%" height="24%" rx="3%" fill="#6b5a2e" opacity="0.55"/>
      <rect x="1%" y="10%" width="98%" height="65%" rx="3%" fill="#3a6b3e" opacity="0.9"/>
      <rect x="1%" y="10%" width="98%" height="65%" rx="3%" fill="none" stroke="#2d5530" stroke-width="1.5"/>
      ${[2,13,24,35,46,57,68,79,90].map(x=>`<rect x="${x}%" y="14%" width="9%" height="56%" rx="2%" fill="#2d5530" opacity="0.2"/>`).join('')}` },

  { cat:'Greenery', id:'boxwood-4x4', name:'Boxwood Panel 4×4\'', w:4, h:4, unit:'ft',
    draw: (w,h,c) => `
      <rect x="8%" y="82%" width="84%" height="15%" rx="4%" fill="#6b5a2e" opacity="0.55"/>
      <rect x="4%" y="6%" width="92%" height="78%" rx="3%" fill="#3a6b3e" opacity="0.9"/>
      <rect x="4%" y="6%" width="92%" height="78%" rx="3%" fill="none" stroke="#2d5530" stroke-width="1.5"/>
      ${[6,30,54,78].map(x=>[10,34,58].map(y=>`<rect x="${x}%" y="${y}%" width="20%" height="22%" rx="2%" fill="#2d5530" opacity="0.25"/>`).join('')).join('')}` },

  { cat:'Greenery', id:'boxwood-8x4', name:'Boxwood Panel 8×4\'', w:8, h:4, unit:'ft',
    draw: (w,h,c) => `
      <rect x="4%" y="82%" width="92%" height="14%" rx="3%" fill="#6b5a2e" opacity="0.55"/>
      <rect x="2%" y="6%" width="96%" height="78%" rx="3%" fill="#3a6b3e" opacity="0.9"/>
      <rect x="2%" y="6%" width="96%" height="78%" rx="3%" fill="none" stroke="#2d5530" stroke-width="1.5"/>
      ${[3,16,29,42,55,68,81].map(x=>[10,34,58].map(y=>`<rect x="${x}%" y="${y}%" width="11%" height="22%" rx="2%" fill="#2d5530" opacity="0.2"/>`).join('')).join('')}` },

  { cat:'Greenery', id:'planter-round', name:'Round Planter', w:2, h:2, unit:'ft',
    draw: (w,h,c) => `<circle cx="50%" cy="60%" r="38%" fill="#8B6914" opacity="0.5"/>
      <circle cx="50%" cy="45%" r="32%" fill="#4a7c4e" opacity="0.8"/>
      <circle cx="40%" cy="38%" r="14%" fill="#3d6b41" opacity="0.6"/>
      <circle cx="58%" cy="36%" r="12%" fill="#3d6b41" opacity="0.6"/>` },

  { cat:'Greenery', id:'planter-rect', name:'Rect Planter', w:1, h:3, unit:'ft',
    draw: (w,h,c) => `<rect x="10%" y="45%" width="80%" height="52%" rx="8%" fill="#8B6914" opacity="0.5"/>
      <ellipse cx="50%" cy="45%" rx="38%" ry="32%" fill="#4a7c4e" opacity="0.85"/>
      <ellipse cx="38%" cy="38%" rx="16%" ry="20%" fill="#3d6b41" opacity="0.6"/>
      <ellipse cx="62%" cy="36%" rx="14%" ry="18%" fill="#3d6b41" opacity="0.6"/>` },

  { cat:'Greenery', id:'tree', name:'Potted Tree', w:3, h:3, unit:'ft',
    draw: (w,h,c) => `<rect x="38%" y="65%" width="24%" height="30%" rx="5%" fill="#8B6914" opacity="0.55"/>
      <circle cx="50%" cy="45%" r="38%" fill="#4a7c4e" opacity="0.75"/>
      <circle cx="50%" cy="40%" r="28%" fill="#3d6b41" opacity="0.5"/>
      <line x1="50%" y1="83%" x2="50%" y2="55%" stroke="#5D4E37" stroke-width="3" stroke-linecap="round"/>` },

  // ─── PLANTS ───────────────────────────────────
  // Floor plants — shown as top-down canopy/leaf spread
  { cat:'Plants', id:'plant-palm-small', name:'Palm (Small) 4ft', w:3.5, h:3.5, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="8%" fill="#5D4E37" opacity=".7"/>
      <ellipse cx="50%" cy="18%" rx="7%" ry="18%" fill="#3d7a42" opacity=".8" transform="rotate(-15,50,50)"/>
      <ellipse cx="72%" cy="26%" rx="7%" ry="18%" fill="#4a8c4e" opacity=".75" transform="rotate(30,50,50)"/>
      <ellipse cx="82%" cy="52%" rx="7%" ry="18%" fill="#3d7a42" opacity=".8" transform="rotate(75,50,50)"/>
      <ellipse cx="68%" cy="78%" rx="7%" ry="18%" fill="#4a8c4e" opacity=".75" transform="rotate(120,50,50)"/>
      <ellipse cx="32%" cy="78%" rx="7%" ry="18%" fill="#3d7a42" opacity=".8" transform="rotate(165,50,50)"/>
      <ellipse cx="18%" cy="52%" rx="7%" ry="18%" fill="#4a8c4e" opacity=".75" transform="rotate(210,50,50)"/>
      <ellipse cx="28%" cy="26%" rx="7%" ry="18%" fill="#3d7a42" opacity=".8" transform="rotate(255,50,50)"/>` },

  { cat:'Plants', id:'plant-palm-large', name:'Palm (Large) 6ft', w:5.5, h:5.5, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="6%" fill="#5D4E37" opacity=".7"/>
      <ellipse cx="50%" cy="14%" rx="6%" ry="20%" fill="#3d7a42" opacity=".82" transform="rotate(-15,50,50)"/>
      <ellipse cx="70%" cy="21%" rx="6%" ry="20%" fill="#4a8c4e" opacity=".78" transform="rotate(25,50,50)"/>
      <ellipse cx="84%" cy="44%" rx="6%" ry="20%" fill="#3d7a42" opacity=".82" transform="rotate(65,50,50)"/>
      <ellipse cx="79%" cy="70%" rx="6%" ry="20%" fill="#4a8c4e" opacity=".78" transform="rotate(110,50,50)"/>
      <ellipse cx="58%" cy="86%" rx="6%" ry="20%" fill="#3d7a42" opacity=".82" transform="rotate(150,50,50)"/>
      <ellipse cx="35%" cy="86%" rx="6%" ry="20%" fill="#4a8c4e" opacity=".78" transform="rotate(190,50,50)"/>
      <ellipse cx="16%" cy="70%" rx="6%" ry="20%" fill="#3d7a42" opacity=".82" transform="rotate(235,50,50)"/>
      <ellipse cx="14%" cy="44%" rx="6%" ry="20%" fill="#4a8c4e" opacity=".78" transform="rotate(275,50,50)"/>
      <ellipse cx="28%" cy="21%" rx="6%" ry="20%" fill="#3d7a42" opacity=".82" transform="rotate(315,50,50)"/>` },

  { cat:'Plants', id:'plant-fiddle-leaf', name:'Fiddle Leaf Fig', w:3, h:3, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="9%" fill="#5D4E37" opacity=".65"/>
      <ellipse cx="50%" cy="20%" rx="18%" ry="26%" fill="#3a7040" opacity=".85"/>
      <ellipse cx="70%" cy="35%" rx="16%" ry="24%" fill="#4a8050" opacity=".8"/>
      <ellipse cx="75%" cy="62%" rx="16%" ry="24%" fill="#3a7040" opacity=".75"/>
      <ellipse cx="55%" cy="78%" rx="16%" ry="22%" fill="#4a8050" opacity=".8"/>
      <ellipse cx="30%" cy="72%" rx="16%" ry="24%" fill="#3a7040" opacity=".78"/>
      <ellipse cx="22%" cy="45%" rx="16%" ry="24%" fill="#4a8050" opacity=".8"/>
      <ellipse cx="30%" cy="22%" rx="14%" ry="22%" fill="#3a7040" opacity=".75"/>` },

  { cat:'Plants', id:'plant-banana', name:'Banana Plant', w:4, h:4, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="8%" fill="#5D4E37" opacity=".6"/>
      <ellipse cx="50%" cy="15%" rx="20%" ry="32%" fill="#4a8c3a" opacity=".82"/>
      <ellipse cx="76%" cy="35%" rx="18%" ry="30%" fill="#5a9c48" opacity=".75" transform="rotate(40,50,50)"/>
      <ellipse cx="78%" cy="68%" rx="18%" ry="30%" fill="#4a8c3a" opacity=".8" transform="rotate(100,50,50)"/>
      <ellipse cx="50%" cy="84%" rx="20%" ry="30%" fill="#5a9c48" opacity=".75" transform="rotate(160,50,50)"/>
      <ellipse cx="22%" cy="68%" rx="18%" ry="30%" fill="#4a8c3a" opacity=".8" transform="rotate(220,50,50)"/>
      <ellipse cx="24%" cy="35%" rx="18%" ry="30%" fill="#5a9c48" opacity=".75" transform="rotate(280,50,50)"/>` },

  { cat:'Plants', id:'plant-snake-plant', name:'Snake Plant', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`
      <ellipse cx="50%" cy="88%" rx="18%" ry="10%" fill="#5D4E37" opacity=".55"/>
      <rect x="40%" y="5%" width="8%" height="80%" rx="40%" fill="#3a6e3a" opacity=".9"/>
      <rect x="30%" y="15%" width="7%" height="72%" rx="40%" fill="#4a7e4a" opacity=".85" transform="rotate(-12,50,50)"/>
      <rect x="52%" y="15%" width="7%" height="72%" rx="40%" fill="#3a6e3a" opacity=".85" transform="rotate(12,50,50)"/>
      <rect x="20%" y="22%" width="6%" height="62%" rx="40%" fill="#4a7e4a" opacity=".78" transform="rotate(-22,50,50)"/>
      <rect x="62%" y="22%" width="6%" height="62%" rx="40%" fill="#3a6e3a" opacity=".78" transform="rotate(22,50,50)"/>` },

  { cat:'Plants', id:'plant-fern', name:'Fern', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="8%" fill="#5D4E37" opacity=".5"/>
      <ellipse cx="50%" cy="20%" rx="8%" ry="32%" fill="#3d7a3a" opacity=".8"/>
      <ellipse cx="68%" cy="28%" rx="8%" ry="30%" fill="#4a8a45" opacity=".75" transform="rotate(30,50,50)"/>
      <ellipse cx="78%" cy="50%" rx="8%" ry="30%" fill="#3d7a3a" opacity=".8" transform="rotate(60,50,50)"/>
      <ellipse cx="72%" cy="72%" rx="8%" ry="28%" fill="#4a8a45" opacity=".75" transform="rotate(90,50,50)"/>
      <ellipse cx="52%" cy="82%" rx="8%" ry="28%" fill="#3d7a3a" opacity=".78" transform="rotate(120,50,50)"/>
      <ellipse cx="32%" cy="75%" rx="8%" ry="28%" fill="#4a8a45" opacity=".75" transform="rotate(150,50,50)"/>
      <ellipse cx="22%" cy="55%" rx="8%" ry="28%" fill="#3d7a3a" opacity=".8" transform="rotate(180,50,50)"/>
      <ellipse cx="28%" cy="32%" rx="8%" ry="30%" fill="#4a8a45" opacity=".75" transform="rotate(210,50,50)"/>` },

  { cat:'Plants', id:'plant-monstera', name:'Monstera', w:3, h:3, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="8%" fill="#5D4E37" opacity=".55"/>
      <ellipse cx="38%" cy="22%" rx="22%" ry="28%" fill="#3a7040" opacity=".82"/>
      <ellipse cx="65%" cy="30%" rx="22%" ry="28%" fill="#4a8050" opacity=".78"/>
      <ellipse cx="72%" cy="58%" rx="20%" ry="26%" fill="#3a7040" opacity=".8"/>
      <ellipse cx="55%" cy="78%" rx="20%" ry="24%" fill="#4a8050" opacity=".75"/>
      <ellipse cx="28%" cy="65%" rx="20%" ry="26%" fill="#3a7040" opacity=".8"/>
      <line x1="38%" y1="50%" x2="38%" y2="22%" stroke="#2a5030" stroke-width="2" opacity=".5"/>
      <line x1="50%" y1="50%" x2="65%" y2="30%" stroke="#2a5030" stroke-width="2" opacity=".5"/>` },

  { cat:'Plants', id:'plant-olive-tree', name:'Olive Tree', w:4, h:4, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="7%" fill="#7a6530" opacity=".7"/>
      <circle cx="50%" cy="38%" r="32%" fill="#7a9060" opacity=".7"/>
      <circle cx="40%" cy="44%" r="26%" fill="#8aA070" opacity=".65"/>
      <circle cx="60%" cy="44%" r="26%" fill="#7a9060" opacity=".65"/>
      <circle cx="50%" cy="52%" r="22%" fill="#9aB080" opacity=".6"/>` },

  { cat:'Plants', id:'plant-bird-of-paradise', name:'Bird of Paradise', w:4, h:4, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="8%" fill="#5D4E37" opacity=".6"/>
      <ellipse cx="50%" cy="16%" rx="15%" ry="34%" fill="#3a7840" opacity=".85"/>
      <ellipse cx="70%" cy="28%" rx="13%" ry="30%" fill="#4a8848" opacity=".8" transform="rotate(25,50,50)"/>
      <ellipse cx="78%" cy="55%" rx="13%" ry="28%" fill="#3a7840" opacity=".82" transform="rotate(55,50,50)"/>
      <ellipse cx="64%" cy="78%" rx="13%" ry="28%" fill="#4a8848" opacity=".78" transform="rotate(90,50,50)"/>
      <ellipse cx="36%" cy="82%" rx="13%" ry="28%" fill="#3a7840" opacity=".82" transform="rotate(125,50,50)"/>
      <ellipse cx="22%" cy="60%" rx="13%" ry="28%" fill="#4a8848" opacity=".78" transform="rotate(160,50,50)"/>
      <ellipse cx="26%" cy="32%" rx="13%" ry="30%" fill="#3a7840" opacity=".82" transform="rotate(200,50,50)"/>` },

  { cat:'Plants', id:'plant-succulent', name:'Succulent', w:1, h:1, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="38%" fill="#6a9a55" opacity=".8"/>
      <circle cx="50%" cy="50%" r="22%" fill="#8ab870" opacity=".85"/>
      <circle cx="50%" cy="50%" r="10%" fill="#aad090" opacity=".9"/>` },

  { cat:'Plants', id:'plant-agave', name:'Agave / Spiky Plant', w:2, h:2, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="8%" fill="#7a6530" opacity=".6"/>
      <ellipse cx="50%" cy="22%" rx="6%" ry="28%" fill="#5a8040" opacity=".88"/>
      <ellipse cx="68%" cy="30%" rx="6%" ry="26%" fill="#6a9050" opacity=".82" transform="rotate(35,50,50)"/>
      <ellipse cx="76%" cy="52%" rx="6%" ry="24%" fill="#5a8040" opacity=".85" transform="rotate(70,50,50)"/>
      <ellipse cx="68%" cy="72%" rx="6%" ry="24%" fill="#6a9050" opacity=".82" transform="rotate(105,50,50)"/>
      <ellipse cx="50%" cy="80%" rx="6%" ry="24%" fill="#5a8040" opacity=".85" transform="rotate(140,50,50)"/>
      <ellipse cx="30%" cy="72%" rx="6%" ry="24%" fill="#6a9050" opacity=".82" transform="rotate(175,50,50)"/>
      <ellipse cx="22%" cy="52%" rx="6%" ry="24%" fill="#5a8040" opacity=".85" transform="rotate(210,50,50)"/>
      <ellipse cx="30%" cy="30%" rx="6%" ry="26%" fill="#6a9050" opacity=".82" transform="rotate(245,50,50)"/>` },

  // Table-top accent plants — small footprint for placing on tables
  { cat:'Plants', id:'plant-orchid', name:'Orchid (table)', w:0.75, h:0.75, unit:'ft',
    draw:(w,h,c)=>`
      <ellipse cx="50%" cy="70%" rx="24%" ry="14%" fill="#8B5E3C" opacity=".55"/>
      <ellipse cx="50%" cy="38%" rx="18%" ry="28%" fill="#e060a0" opacity=".85"/>
      <ellipse cx="30%" cy="52%" rx="14%" ry="20%" fill="#e878b0" opacity=".75" transform="rotate(-25,50,50)"/>
      <ellipse cx="70%" cy="52%" rx="14%" ry="20%" fill="#e060a0" opacity=".75" transform="rotate(25,50,50)"/>
      <circle cx="50%" cy="36%" r="6%" fill="#fff0f8" opacity=".9"/>` },

  { cat:'Plants', id:'plant-orchid-arrangement', name:'Orchid Arrangement', w:1, h:1, unit:'ft',
    draw:(w,h,c)=>`
      <ellipse cx="50%" cy="72%" rx="32%" ry="16%" fill="#8B5E3C" opacity=".5"/>
      <ellipse cx="35%" cy="40%" rx="14%" ry="22%" fill="#d050a0" opacity=".82"/>
      <ellipse cx="55%" cy="30%" rx="14%" ry="22%" fill="#e060b0" opacity=".82"/>
      <ellipse cx="72%" cy="42%" rx="13%" ry="20%" fill="#d050a0" opacity=".78"/>
      <circle cx="35%" cy="38%" r="5%" fill="#fff0f8" opacity=".88"/>
      <circle cx="55%" cy="28%" r="5%" fill="#fff0f8" opacity=".88"/>
      <circle cx="72%" cy="40%" r="5%" fill="#fff0f8" opacity=".85"/>` },

  { cat:'Plants', id:'plant-small-fern', name:'Fern (table)', w:0.75, h:0.75, unit:'ft',
    draw:(w,h,c)=>`
      <ellipse cx="50%" cy="72%" rx="22%" ry="12%" fill="#5D4E37" opacity=".5"/>
      <ellipse cx="50%" cy="30%" rx="6%" ry="24%" fill="#3d7a3a" opacity=".8"/>
      <ellipse cx="68%" cy="38%" rx="6%" ry="20%" fill="#4a8a45" opacity=".75" transform="rotate(35,50,50)"/>
      <ellipse cx="76%" cy="58%" rx="6%" ry="18%" fill="#3d7a3a" opacity=".78" transform="rotate(70,50,50)"/>
      <ellipse cx="62%" cy="74%" rx="6%" ry="18%" fill="#4a8a45" opacity=".72" transform="rotate(110,50,50)"/>
      <ellipse cx="38%" cy="74%" rx="6%" ry="18%" fill="#3d7a3a" opacity=".72" transform="rotate(150,50,50)"/>
      <ellipse cx="24%" cy="58%" rx="6%" ry="18%" fill="#4a8a45" opacity=".75" transform="rotate(190,50,50)"/>
      <ellipse cx="30%" cy="38%" rx="6%" ry="20%" fill="#3d7a3a" opacity=".78" transform="rotate(230,50,50)"/>` },

  { cat:'Plants', id:'plant-small-succulent', name:'Succulent (table)', w:0.5, h:0.5, unit:'ft',
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="42%" fill="#6a9a55" opacity=".8"/>
      <circle cx="50%" cy="50%" r="26%" fill="#8ab870" opacity=".85"/>
      <circle cx="50%" cy="50%" r="12%" fill="#aad090" opacity=".9"/>` },

  { cat:'Plants', id:'plant-small-snake', name:'Snake Plant (table)', w:0.5, h:0.75, unit:'ft',
    draw:(w,h,c)=>`
      <ellipse cx="50%" cy="88%" rx="28%" ry="10%" fill="#5D4E37" opacity=".5"/>
      <rect x="43%" y="8%" width="10%" height="78%" rx="40%" fill="#3a6e3a" opacity=".9"/>
      <rect x="28%" y="18%" width="9%" height="68%" rx="40%" fill="#4a7e4a" opacity=".82" transform="rotate(-14,50,50)"/>
      <rect x="56%" y="18%" width="9%" height="68%" rx="40%" fill="#3a6e3a" opacity=".82" transform="rotate(14,50,50)"/>` },

  { cat:'Plants', id:'plant-centerpiece-roses', name:'Rose Centerpiece', w:0.75, h:0.75, unit:'ft',
    draw:(w,h,c)=>`
      <ellipse cx="50%" cy="68%" rx="28%" ry="14%" fill="#5D4E37" opacity=".45"/>
      <circle cx="40%" cy="42%" r="16%" fill="#cc3050" opacity=".85"/>
      <circle cx="60%" cy="36%" r="16%" fill="#dd2040" opacity=".85"/>
      <circle cx="50%" cy="55%" r="14%" fill="#cc3050" opacity=".78"/>
      <circle cx="40%" cy="42%" r="7%" fill="#ee5070" opacity=".7"/>
      <circle cx="60%" cy="36%" r="7%" fill="#ff4060" opacity=".7"/>` },

  { cat:'Plants', id:'plant-centerpiece-white', name:'White Floral Centerpiece', w:0.75, h:0.75, unit:'ft',
    draw:(w,h,c)=>`
      <ellipse cx="50%" cy="68%" rx="28%" ry="14%" fill="#5D4E37" opacity=".4"/>
      <circle cx="40%" cy="42%" r="16%" fill="rgba(255,255,255,.9)" stroke="#ddd" stroke-width="1"/>
      <circle cx="60%" cy="36%" r="16%" fill="rgba(255,255,255,.85)" stroke="#ddd" stroke-width="1"/>
      <circle cx="50%" cy="55%" r="14%" fill="rgba(255,255,255,.88)" stroke="#ddd" stroke-width="1"/>
      <circle cx="40%" cy="42%" r="6%" fill="#f5f0e0" opacity=".9"/>
      <circle cx="60%" cy="36%" r="6%" fill="#f5f0e0" opacity=".9"/>` },

  { cat:'Plants', id:'plant-bud-vase', name:'Bud Vase', w:0.33, h:0.33, unit:'ft',
    draw:(w,h,c)=>`
      <ellipse cx="50%" cy="70%" rx="18%" ry="24%" fill="rgba(180,160,130,.5)" stroke="rgba(150,130,100,.6)" stroke-width="2"/>
      <circle cx="50%" cy="28%" r="18%" fill="#cc4060" opacity=".85"/>
      <line x1="50%" y1="46%" x2="50%" y2="62%" stroke="#3a6030" stroke-width="2"/>` },
  { cat:'Staging', id:'stage-sm', name:'Stage (Small)', w:12, h:8, unit:'ft',
    draw: (w,h,c) => `<rect x="1%" y="1%" width="98%" height="98%" rx="2%" fill="rgba(60,60,80,0.18)" stroke="#555" stroke-width="2"/>
      <rect x="1%" y="1%" width="98%" height="18%" rx="1%" fill="rgba(60,60,80,0.3)"/>` },

  { cat:'Staging', id:'dance-floor', name:'Dance Floor', w:16, h:16, unit:'ft',
    draw: (w,h,c) => `<rect x="1%" y="1%" width="98%" height="98%" rx="1%" fill="none" stroke="#888" stroke-width="2"/>
      ${[0,1,2,3].flatMap(r=>[0,1,2,3].map(c2=>
        `<rect x="${1+c2*24.5}%" y="${1+r*24.5}%" width="24%" height="24%" fill="${(r+c2)%2===0?'rgba(0,0,0,0.06)':'rgba(0,0,0,0.02)'}" stroke="none"/>`
      )).join('')}` },

  { cat:'Staging', id:'podium', name:'Podium', w:2, h:2, unit:'ft',
    draw: (w,h,c) => `<rect x="15%" y="20%" width="70%" height="75%" rx="5%" fill="rgba(80,60,40,0.3)" stroke="#8B6340" stroke-width="1.5"/>
      <polygon points="50,5 80,25 20,25" fill="#8B6340" opacity="0.5"/>
      <rect x="40%" y="5%" width="20%" height="6%" rx="2%" fill="#8B6340" opacity="0.4"/>` },

  // MISC / STRUCTURAL
  { cat:'Structural', id:'entrance-arch', name:'Entrance', w:6, h:4, unit:'ft',
    draw: (w,h,c) => `<path d="M8,95 L8,40 Q8,5 50,5 Q92,5 92,40 L92,95" fill="none" stroke="${c}" stroke-width="2.5"/>
      ${[15,30,50,70,85].map((x,i)=>`<circle cx="${x}%" cy="${[28,15,8,15,28][i]}%" r="${[6,5,5,5,6][i]}%" fill="${c}" opacity="0.5"/>`).join('')}` },

  { cat:'Structural', id:'pillar', name:'Pillar / Column', w:1.5, h:1.5, unit:'ft',
    draw: (w,h,c) => `<rect x="10%" y="5%" width="80%" height="10%" rx="2%" fill="#888"/>
      <rect x="20%" y="15%" width="60%" height="70%" rx="3%" fill="#aaa"/>
      <rect x="10%" y="85%" width="80%" height="10%" rx="2%" fill="#888"/>` },

  { cat:'Structural', id:'photobooth', name:'Photo Booth', w:6, h:5, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="rgba(40,40,60,0.15)" stroke="#555" stroke-width="1.8"/>
      <circle cx="50%" cy="42%" r="18%" fill="none" stroke="#555" stroke-width="2"/>
      <circle cx="50%" cy="42%" r="10%" fill="rgba(40,40,60,0.2)"/>
      <rect x="20%" y="5%" width="22%" height="10%" rx="3%" fill="#555" opacity="0.3"/>` },

  { cat:'Structural', id:'buffet-station', name:'Buffet Station', w:8, h:3, unit:'ft',
    draw: (w,h,c) => `<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="${c}" opacity="0.12" stroke="${c}" stroke-width="1.8" stroke-dasharray="8,4"/>` },

  { cat:'Structural', id:'gift-table', name:'Gift Table', w:3, h:2.5, unit:'ft',
    draw: (w,h,c) => `<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="${c}" opacity="0.15" stroke="${c}" stroke-width="1.5"/>` },

  // ─── ANNOTATIONS ───
  { cat:'Annotations', id:'text-label-sm', name:'Text Label (Small)', w:4, h:1, unit:'ft', isAnnotation:true, isTextLabel:true,
    draw:(w,h,c)=>`<rect x="0" y="0" width="100" height="100" fill="transparent"/>` },
  { cat:'Annotations', id:'text-label-md', name:'Text Label (Medium)', w:6, h:1.5, unit:'ft', isAnnotation:true, isTextLabel:true,
    draw:(w,h,c)=>`<rect x="0" y="0" width="100" height="100" fill="transparent"/>` },
  { cat:'Annotations', id:'text-label-lg', name:'Text Label (Large)', w:10, h:2.5, unit:'ft', isAnnotation:true, isTextLabel:true,
    draw:(w,h,c)=>`<rect x="0" y="0" width="100" height="100" fill="transparent"/>` },

  { cat:'Annotations', id:'note-sm', name:'Note (Small)', w:3, h:1.5, unit:'ft', isAnnotation:true,
    draw:(w,h,c)=>`<rect x="1%" y="1%" width="98%" height="98%" rx="4%" fill="rgba(255,247,180,.9)" stroke="#d4b800" stroke-width="1.2"/>
      <line x1="6%" y1="35%" x2="94%" y2="35%" stroke="#d4b800" stroke-width="0.8" opacity=".4"/>
      <line x1="6%" y1="55%" x2="94%" y2="55%" stroke="#d4b800" stroke-width="0.8" opacity=".4"/>
      <line x1="6%" y1="75%" x2="94%" y2="75%" stroke="#d4b800" stroke-width="0.8" opacity=".4"/>` },

  { cat:'Annotations', id:'note-md', name:'Note (Medium)', w:4, h:3, unit:'ft', isAnnotation:true,
    draw:(w,h,c)=>`<rect x="1%" y="1%" width="98%" height="98%" rx="4%" fill="rgba(255,247,180,.9)" stroke="#d4b800" stroke-width="1.2"/>
      <line x1="5%" y1="25%" x2="95%" y2="25%" stroke="#d4b800" stroke-width="0.8" opacity=".4"/>
      <line x1="5%" y1="40%" x2="95%" y2="40%" stroke="#d4b800" stroke-width="0.8" opacity=".4"/>
      <line x1="5%" y1="55%" x2="95%" y2="55%" stroke="#d4b800" stroke-width="0.8" opacity=".4"/>
      <line x1="5%" y1="70%" x2="95%" y2="70%" stroke="#d4b800" stroke-width="0.8" opacity=".4"/>
      <line x1="5%" y1="85%" x2="95%" y2="85%" stroke="#d4b800" stroke-width="0.8" opacity=".4"/>` },

  { cat:'Annotations', id:'arrow-label', name:'Arrow Label', w:4, h:1.5, unit:'ft', isAnnotation:true,
    draw:(w,h,c)=>`<line x1="8%" y1="50%" x2="88%" y2="50%" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
      <polygon points="88,50 78,35 78,65" fill="${c}"/>` },

  { cat:'Annotations', id:'area-box', name:'Area Box', w:8, h:6, unit:'ft', isAnnotation:true,
    draw:(w,h,c)=>`<rect x="1%" y="1%" width="98%" height="98%" rx="3%" fill="${c}" opacity="0.06" stroke="${c}" stroke-width="1.5" stroke-dasharray="8,4"/>` },

  { cat:'Annotations', id:'area-circle', name:'Area Circle', w:6, h:6, unit:'ft', isAnnotation:true,
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity="0.06" stroke="${c}" stroke-width="1.5" stroke-dasharray="8,4"/>` },

  // ─── CORT EVENTS — SOFT SEATING (inches → feet, Length=W, Depth=D) ───

  // Allegro
  { cat:'CORT Soft Seating', id:'cort-allegro-chair', name:'Allegro Chair', w:3, h:2.88, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="18%" width="14%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="81%" y="18%" width="14%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-allegro-loveseat', name:'Allegro Loveseat', w:5.25, h:2.88, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <line x1="50%" y1="18%" x2="50%" y2="80%" stroke="rgba(0,0,0,.1)" stroke-width="1.5"/>` },

  { cat:'CORT Soft Seating', id:'cort-allegro-sofa', name:'Allegro Sofa', w:6.08, h:2.88, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="88%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <line x1="34%" y1="18%" x2="34%" y2="80%" stroke="rgba(0,0,0,.1)" stroke-width="1.2"/>
      <line x1="66%" y1="18%" x2="66%" y2="80%" stroke="rgba(0,0,0,.1)" stroke-width="1.2"/>` },

  // Aspen
  { cat:'CORT Soft Seating', id:'cort-aspen-chair', name:'Aspen Chair', w:2.29, h:2.54, unit:'ft',
    draw:(w,h,c)=>`<rect x="6%" y="20%" width="88%" height="60%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="6%" y="6%" width="88%" height="30%" rx="10%" fill="${darken(c)}" opacity=".8"/>
      <rect x="6%" y="20%" width="15%" height="60%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="79%" y="20%" width="15%" height="60%" rx="7%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-aspen-loveseat', name:'Aspen Loveseat', w:4.17, h:2.54, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="12%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="86%" y="18%" width="12%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Baja
  { cat:'CORT Soft Seating', id:'cort-baja-chair', name:'Baja Chair', w:3, h:2.54, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="18%" width="14%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="81%" y="18%" width="14%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-baja-loveseat', name:'Baja Loveseat', w:5.08, h:2.54, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-baja-sofa', name:'Baja Sofa', w:7.17, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="88%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <line x1="34%" y1="18%" x2="34%" y2="80%" stroke="rgba(0,0,0,.1)" stroke-width="1.2"/>
      <line x1="66%" y1="18%" x2="66%" y2="80%" stroke="rgba(0,0,0,.1)" stroke-width="1.2"/>` },

  // Brighton (indoor soft seating)
  { cat:'CORT Soft Seating', id:'cort-brighton-armless', name:'Brighton Armless Chair', w:2.71, h:2.71, unit:'ft',
    draw:(w,h,c)=>`<rect x="6%" y="10%" width="88%" height="78%" rx="8%" fill="${c}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-brighton-corner', name:'Brighton Corner Chair', w:2.71, h:2.71, unit:'ft',
    draw:(w,h,c)=>`<path d="M10,90 L10,10 L90,10 L90,50 L50,50 L50,90 Z" fill="${c}" opacity=".8" stroke="${c}" stroke-width="1.5"/>` },

  { cat:'CORT Soft Seating', id:'cort-brighton-loveseat', name:'Brighton Loveseat', w:5.5, h:2.48, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-brighton-sectional', name:'Brighton Sectional', w:8.21, h:5.42, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="40%" width="58%" height="56%" rx="6%" fill="${c}" opacity=".85"/>
      <rect x="1%" y="28%" width="58%" height="24%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="1%" y="40%" width="12%" height="56%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="40%" y="4%" width="58%" height="50%" rx="6%" fill="${c}" opacity=".85"/>
      <rect x="40%" y="4%" width="58%" height="20%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="86%" y="4%" width="12%" height="50%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-brighton-sofa', name:'Brighton Sofa', w:8.13, h:2.48, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="18%" width="98%" height="62%" rx="7%" fill="${c}" opacity=".85"/>
      <rect x="1%" y="5%" width="98%" height="28%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="1%" y="18%" width="9%" height="62%" rx="4%" fill="${darken(c)}" opacity=".8"/>
      <rect x="90%" y="18%" width="9%" height="62%" rx="4%" fill="${darken(c)}" opacity=".8"/>
      <line x1="34%" y1="18%" x2="34%" y2="80%" stroke="rgba(0,0,0,.1)" stroke-width="1.2"/>
      <line x1="66%" y1="18%" x2="66%" y2="80%" stroke="rgba(0,0,0,.1)" stroke-width="1.2"/>` },

  // Cabo (outdoor)
  { cat:'CORT Soft Seating', id:'cort-cabo-chair', name:'Cabo Chair', w:2.63, h:2.88, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="18%" width="14%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="81%" y="18%" width="14%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-cabo-sofa', name:'Cabo Sofa', w:6.67, h:2.88, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="88%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Chandler
  { cat:'CORT Soft Seating', id:'cort-chandler-chair', name:'Chandler Chair', w:3.33, h:2.88, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="18%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="82%" y="18%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-chandler-sofa', name:'Chandler Sofa', w:7.08, h:2.88, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="88%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Constellation
  { cat:'CORT Soft Seating', id:'cort-constellation-sofa', name:'Constellation Sofa', w:7.29, h:3.38, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="88%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Cordoba
  { cat:'CORT Soft Seating', id:'cort-cordoba-chair', name:'Cordoba Chair', w:3.08, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="18%" width="14%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="81%" y="18%" width="14%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-cordoba-loveseat', name:'Cordoba Loveseat', w:5.04, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="12%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="86%" y="18%" width="12%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Fairfax
  { cat:'CORT Soft Seating', id:'cort-fairfax-chair', name:'Fairfax Chair', w:2.25, h:2.17, unit:'ft',
    draw:(w,h,c)=>`<rect x="6%" y="20%" width="88%" height="60%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="6%" y="6%" width="88%" height="30%" rx="10%" fill="${darken(c)}" opacity=".8"/>
      <rect x="6%" y="20%" width="15%" height="60%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="79%" y="20%" width="15%" height="60%" rx="7%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-fairfax-loveseat', name:'Fairfax Loveseat', w:5.17, h:2.17, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Key Largo
  { cat:'CORT Soft Seating', id:'cort-keylargo-chair', name:'Key Largo Chair', w:2.92, h:2.92, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="18%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="82%" y="18%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-keylargo-loveseat', name:'Key Largo Loveseat', w:4.75, h:2.92, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="12%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="86%" y="18%" width="12%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-keylargo-sofa', name:'Key Largo Sofa', w:6.58, h:2.92, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="18%" width="98%" height="62%" rx="7%" fill="${c}" opacity=".85"/>
      <rect x="1%" y="5%" width="98%" height="28%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="1%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="89%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Monroe
  { cat:'CORT Soft Seating', id:'cort-monroe-chair', name:'Monroe Chair', w:2.79, h:2.63, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="55%" rx="43%" ry="38%" fill="${c}" opacity=".85"/>
      <ellipse cx="50%" cy="30%" rx="43%" ry="28%" fill="${darken(c)}" opacity=".8"/>
      <rect x="4%" y="28%" width="12%" height="38%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="84%" y="28%" width="12%" height="38%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-monroe-loveseat', name:'Monroe Loveseat', w:5.63, h:2.63, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Montreal
  { cat:'CORT Soft Seating', id:'cort-montreal-chair', name:'Montreal Chair', w:2.5, h:1.92, unit:'ft',
    draw:(w,h,c)=>`<rect x="6%" y="20%" width="88%" height="60%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="6%" y="6%" width="88%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="6%" y="20%" width="13%" height="60%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="81%" y="20%" width="13%" height="60%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-montreal-loveseat', name:'Montreal Loveseat', w:5.17, h:2.27, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Munich
  { cat:'CORT Soft Seating', id:'cort-munich-armless', name:'Munich Armless Chair', w:1.88, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="6%" y="10%" width="88%" height="78%" rx="8%" fill="${c}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-munich-armless-loveseat', name:'Munich Armless Loveseat', w:3.75, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="10%" width="96%" height="78%" rx="6%" fill="${c}" opacity=".8"/>
      <line x1="50%" y1="10%" x2="50%" y2="88%" stroke="rgba(0,0,0,.1)" stroke-width="1.5"/>` },

  { cat:'CORT Soft Seating', id:'cort-munich-corner', name:'Munich Corner Chair', w:2.17, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="10%" width="90%" height="78%" rx="8%" fill="${c}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-munich-loveseat-arms', name:'Munich Loveseat w/Arms', w:4.5, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-munich-sectional', name:'Munich Sectional 3Pc', w:7.79, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="18%" width="60%" height="78%" rx="6%" fill="${c}" opacity=".85"/>
      <rect x="1%" y="5%" width="60%" height="28%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="60%" y="18%" width="39%" height="40%" rx="6%" fill="${c}" opacity=".85"/>
      <rect x="60%" y="5%" width="39%" height="28%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-munich-sofa-arms', name:'Munich Sofa w/Arms', w:6.21, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="88%" y="18%" width="10%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Naples
  { cat:'CORT Soft Seating', id:'cort-naples-chair', name:'Naples Chair', w:3, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="18%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="82%" y="18%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-naples-loveseat', name:'Naples Loveseat', w:5.17, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-naples-sofa', name:'Naples Sofa', w:7.25, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="18%" width="98%" height="62%" rx="7%" fill="${c}" opacity=".85"/>
      <rect x="1%" y="5%" width="98%" height="28%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="1%" y="18%" width="9%" height="62%" rx="4%" fill="${darken(c)}" opacity=".8"/>
      <rect x="90%" y="18%" width="9%" height="62%" rx="4%" fill="${darken(c)}" opacity=".8"/>` },

  // Palm Beach
  { cat:'CORT Soft Seating', id:'cort-palmbeach-sofa', name:'Palm Beach Sofa', w:5.75, h:2.42, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // Sterling
  { cat:'CORT Soft Seating', id:'cort-sterling-chair', name:'Sterling Chair', w:2.75, h:2.79, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="18%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="82%" y="18%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-sterling-sofa', name:'Sterling Sofa', w:6.83, h:2.79, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="18%" width="98%" height="62%" rx="7%" fill="${c}" opacity=".85"/>
      <rect x="1%" y="5%" width="98%" height="28%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="1%" y="18%" width="9%" height="62%" rx="4%" fill="${darken(c)}" opacity=".8"/>
      <rect x="90%" y="18%" width="9%" height="62%" rx="4%" fill="${darken(c)}" opacity=".8"/>` },

  // Valencia
  { cat:'CORT Soft Seating', id:'cort-valencia-chair', name:'Valencia Chair', w:2.33, h:2.54, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="55%" rx="43%" ry="38%" fill="${c}" opacity=".85"/>
      <ellipse cx="50%" cy="28%" rx="43%" ry="26%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="26%" width="12%" height="36%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="83%" y="26%" width="12%" height="36%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Soft Seating', id:'cort-valencia-loveseat', name:'Valencia Loveseat', w:5.25, h:2.54, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  // ─── CORT ACCENT CHAIRS ───
  { cat:'CORT Accent Chairs', id:'cort-aruba-lounge', name:'Aruba Lounge Chair', w:3.5, h:3.63, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="46%" ry="46%" fill="${c}" opacity=".75"/>
      <ellipse cx="50%" cy="50%" rx="30%" ry="30%" fill="${darken(c)}" opacity=".5"/>` },

  { cat:'CORT Accent Chairs', id:'cort-atherton-chair', name:'Atherton Chair', w:2.25, h:2.58, unit:'ft',
    draw:(w,h,c)=>`<rect x="6%" y="20%" width="88%" height="60%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="6%" y="6%" width="88%" height="30%" rx="10%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Accent Chairs', id:'cort-bowery-chair', name:'Bowery Chair', w:2.48, h:2.58, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="55%" rx="43%" ry="38%" fill="${c}" opacity=".85"/>
      <ellipse cx="50%" cy="28%" rx="40%" ry="24%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Accent Chairs', id:'cort-century-chair', name:'Century Chair', w:2.5, h:2.92, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="18%" width="14%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="81%" y="18%" width="14%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Accent Chairs', id:'cort-labrea-chair', name:'La Brea Swivel Chair', w:2.92, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="44%" ry="44%" fill="${c}" opacity=".8"/>
      <circle cx="50%" cy="50%" r="10%" fill="${darken(c)}" opacity=".6"/>` },

  { cat:'CORT Accent Chairs', id:'cort-lorna-chair', name:'Lorna Chair', w:2.17, h:2.08, unit:'ft',
    draw:(w,h,c)=>`<rect x="6%" y="20%" width="88%" height="60%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="6%" y="6%" width="88%" height="30%" rx="9%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Accent Chairs', id:'cort-madrid-chair', name:'Madrid Chair', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="15%" width="90%" height="70%" rx="8%" fill="${c}" opacity=".8"/>
      <rect x="5%" y="5%" width="90%" height="24%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Accent Chairs', id:'cort-malibu-chair', name:'Malibu Chair', w:3, h:2.58, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="18%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="82%" y="18%" width="13%" height="62%" rx="6%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Accent Chairs', id:'cort-pasadena-chair', name:'Pasadena Chair', w:2.25, h:2.08, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="52%" rx="44%" ry="42%" fill="${c}" opacity=".75"/>
      <ellipse cx="50%" cy="28%" rx="40%" ry="22%" fill="${darken(c)}" opacity=".7"/>` },

  { cat:'CORT Accent Chairs', id:'cort-swanson-swivel', name:'Swanson Swivel Chair', w:2.33, h:2.08, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="44%" ry="44%" fill="${c}" opacity=".8"/>
      <circle cx="50%" cy="50%" r="12%" fill="${darken(c)}" opacity=".5"/>` },

  { cat:'CORT Accent Chairs', id:'cort-terrace-chair', name:'Terrace Accent Chair', w:2, h:2.54, unit:'ft',
    draw:(w,h,c)=>`<rect x="6%" y="18%" width="88%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="6%" y="5%" width="88%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Accent Chairs', id:'cort-wagner-chair', name:'Wagner Chair', w:2.58, h:2.92, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="62%" rx="10%" fill="${c}" opacity=".85"/>
      <rect x="5%" y="5%" width="90%" height="28%" rx="9%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Accent Chairs', id:'cort-wentworth-swivel', name:'Wentworth Swivel Chair', w:2.58, h:2, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="44%" ry="44%" fill="${c}" opacity=".8"/>
      <rect x="20%" y="5%" width="60%" height="22%" rx="5%" fill="${darken(c)}" opacity=".7"/>
      <circle cx="50%" cy="50%" r="10%" fill="${darken(c)}" opacity=".5"/>` },

  // ─── CORT GROUP SEATING CHAIRS ───
  { cat:'CORT Group Seating', id:'cort-blade-chair', name:'Blade Chair', w:1.71, h:1.58, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="6%" fill="${c}" opacity=".8"/>
      <rect x="8%" y="8%" width="84%" height="28%" rx="5%" fill="${darken(c)}" opacity=".7"/>` },

  { cat:'CORT Group Seating', id:'cort-chelsea-chair', name:'Chelsea Chair', w:1.54, h:1.83, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="6%" fill="${c}" opacity=".8"/>
      <rect x="8%" y="8%" width="84%" height="26%" rx="5%" fill="${darken(c)}" opacity=".7"/>` },

  { cat:'CORT Group Seating', id:'cort-laguna-chair', name:'Laguna Chair', w:1.5, h:1.58, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="6%" fill="${c}" opacity=".8"/>
      <rect x="8%" y="8%" width="84%" height="25%" rx="5%" fill="${darken(c)}" opacity=".7"/>` },

  { cat:'CORT Group Seating', id:'cort-lucent-chair', name:'Lucent Chair', w:1.63, h:1.65, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="6%" fill="rgba(200,220,255,0.35)" stroke="#aac" stroke-width="1.5"/>` },

  { cat:'CORT Group Seating', id:'cort-lyon-chair', name:'Lyon Chair', w:1.79, h:1.71, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="8%" fill="${c}" opacity=".8"/>
      <rect x="8%" y="8%" width="84%" height="28%" rx="6%" fill="${darken(c)}" opacity=".7"/>` },

  { cat:'CORT Group Seating', id:'cort-malba-chair', name:'Malba Chair', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="6%" fill="${c}" opacity=".8"/>
      <rect x="8%" y="8%" width="84%" height="26%" rx="5%" fill="${darken(c)}" opacity=".7"/>` },

  { cat:'CORT Group Seating', id:'cort-marina-chair', name:'Marina Chair', w:1.46, h:1.58, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="6%" fill="${c}" opacity=".8"/>
      <rect x="8%" y="8%" width="84%" height="26%" rx="5%" fill="${darken(c)}" opacity=".7"/>` },

  { cat:'CORT Group Seating', id:'cort-zenith-chair', name:'Zenith Chair', w:1.52, h:1.83, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="6%" fill="${c}" opacity=".8"/>
      <rect x="8%" y="8%" width="84%" height="26%" rx="5%" fill="${darken(c)}" opacity=".7"/>` },

  // ─── TABLE SETS (table + chairs as one droppable group) ───
  // These are special: isTableSet:true, seats = default count, chairType = chair to use
  // The draw fn renders the full set as a preview icon

  { cat:'Table Sets', id:'set-round48-4', name:'Round 48" + 4 Chairs', w:7, h:7, unit:'ft',
    isTableSet:true, tableType:'tbl-r48', chairType:'chair-banquet', seats:4,
    draw:(w,h,c)=>{
      const r=48,cr=12; // % units: table radius, chair half-size
      const chairs=[0,90,180,270].map(a=>({x:50+40*Math.cos((a-90)*Math.PI/180),y:50+40*Math.sin((a-90)*Math.PI/180),a}));
      return `<circle cx="50%" cy="50%" r="30%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>
        <circle cx="50%" cy="50%" r="18%" fill="${c}" opacity=".1"/>
        ${chairs.map(ch=>`<rect x="${ch.x-8}%" y="${ch.y-8}%" width="16%" height="16%" rx="30%" fill="${c}" opacity=".7" transform="rotate(${ch.a},${ch.x}%,${ch.y}%)"/>`).join('')}`;
    }},

  { cat:'Table Sets', id:'set-round60-6', name:'Round 60" + 6 Chairs', w:9, h:9, unit:'ft',
    isTableSet:true, tableType:'tbl-r60', chairType:'chair-banquet', seats:6,
    draw:(w,h,c)=>{
      const chairs=[0,60,120,180,240,300].map(a=>({x:50+40*Math.cos((a-90)*Math.PI/180),y:50+40*Math.sin((a-90)*Math.PI/180),a}));
      return `<circle cx="50%" cy="50%" r="28%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>
        ${chairs.map(ch=>`<rect x="${ch.x-7}%" y="${ch.y-7}%" width="14%" height="14%" rx="30%" fill="${c}" opacity=".7"/>`).join('')}`;
    }},

  { cat:'Table Sets', id:'set-round60-8', name:'Round 60" + 8 Chairs', w:10, h:10, unit:'ft',
    isTableSet:true, tableType:'tbl-r60', chairType:'chair-banquet', seats:8,
    draw:(w,h,c)=>{
      const chairs=[0,45,90,135,180,225,270,315].map(a=>({x:50+40*Math.cos((a-90)*Math.PI/180),y:50+40*Math.sin((a-90)*Math.PI/180),a}));
      return `<circle cx="50%" cy="50%" r="26%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>
        ${chairs.map(ch=>`<rect x="${ch.x-6}%" y="${ch.y-6}%" width="12%" height="12%" rx="30%" fill="${c}" opacity=".7"/>`).join('')}`;
    }},

  { cat:'Table Sets', id:'set-round72-8', name:'Round 72" + 8 Chairs', w:11, h:11, unit:'ft',
    isTableSet:true, tableType:'tbl-r72', chairType:'chair-banquet', seats:8,
    draw:(w,h,c)=>{
      const chairs=[0,45,90,135,180,225,270,315].map(a=>({x:50+40*Math.cos((a-90)*Math.PI/180),y:50+40*Math.sin((a-90)*Math.PI/180),a}));
      return `<circle cx="50%" cy="50%" r="28%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>
        ${chairs.map(ch=>`<rect x="${ch.x-6}%" y="${ch.y-6}%" width="12%" height="12%" rx="30%" fill="${c}" opacity=".7"/>`).join('')}`;
    }},

  { cat:'Table Sets', id:'set-round72-10', name:'Round 72" + 10 Chairs', w:12, h:12, unit:'ft',
    isTableSet:true, tableType:'tbl-r72', chairType:'chair-banquet', seats:10,
    draw:(w,h,c)=>{
      const chairs=[0,36,72,108,144,180,216,252,288,324].map(a=>({x:50+41*Math.cos((a-90)*Math.PI/180),y:50+41*Math.sin((a-90)*Math.PI/180)}));
      return `<circle cx="50%" cy="50%" r="27%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>
        ${chairs.map(ch=>`<rect x="${ch.x-6}%" y="${ch.y-6}%" width="11%" height="11%" rx="30%" fill="${c}" opacity=".7"/>`).join('')}`;
    }},

  { cat:'Table Sets', id:'set-6ft-6', name:'Rect 6ft + 6 Chairs', w:10, h:6, unit:'ft',
    isTableSet:true, tableType:'tbl-6ft', chairType:'chair-banquet', seats:6, seatsTop:2, seatsSide:1, seatsBottom:2,
    draw:(w,h,c)=>`
      <rect x="10%" y="28%" width="80%" height="44%" rx="3%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="1.8"/>
      <rect x="20%" y="6%" width="14%" height="18%" rx="3%" fill="${c}" opacity=".65"/>
      <rect x="43%" y="6%" width="14%" height="18%" rx="3%" fill="${c}" opacity=".65"/>
      <rect x="66%" y="6%" width="14%" height="18%" rx="3%" fill="${c}" opacity=".65"/>
      <rect x="20%" y="76%" width="14%" height="18%" rx="3%" fill="${c}" opacity=".65"/>
      <rect x="43%" y="76%" width="14%" height="18%" rx="3%" fill="${c}" opacity=".65"/>
      <rect x="66%" y="76%" width="14%" height="18%" rx="3%" fill="${c}" opacity=".65"/>` },

  { cat:'Table Sets', id:'set-6ft-8', name:'Rect 6ft + 8 Chairs', w:10, h:6, unit:'ft',
    isTableSet:true, tableType:'tbl-6ft', chairType:'chair-banquet', seats:8, seatsTop:3, seatsSide:1, seatsBottom:3,
    draw:(w,h,c)=>`
      <rect x="8%" y="28%" width="84%" height="44%" rx="3%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="1.8"/>
      ${[16,33,50,67,84].slice(0,3).map(x=>`<rect x="${x}%" y="6%" width="13%" height="18%" rx="3%" fill="${c}" opacity=".65"/>`).join('')}
      ${[16,33,50,67,84].slice(0,3).map(x=>`<rect x="${x}%" y="76%" width="13%" height="18%" rx="3%" fill="${c}" opacity=".65"/>`).join('')}
      <rect x="1%" y="38%" width="5%" height="14%" rx="2%" fill="${c}" opacity=".55"/>
      <rect x="94%" y="38%" width="5%" height="14%" rx="2%" fill="${c}" opacity=".55"/>` },

  { cat:'Table Sets', id:'set-8ft-8', name:'Rect 8ft + 8 Chairs', w:12, h:6, unit:'ft',
    isTableSet:true, tableType:'tbl-8ft', chairType:'chair-banquet', seats:8, seatsTop:3, seatsSide:1, seatsBottom:3,
    draw:(w,h,c)=>`
      <rect x="6%" y="28%" width="88%" height="44%" rx="3%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="1.8"/>
      ${[14,30,46,62,78].slice(0,4).map(x=>`<rect x="${x}%" y="6%" width="12%" height="18%" rx="3%" fill="${c}" opacity=".65"/>`).join('')}
      ${[14,30,46,62,78].slice(0,4).map(x=>`<rect x="${x}%" y="76%" width="12%" height="18%" rx="3%" fill="${c}" opacity=".65"/>`).join('')}` },

  { cat:'Table Sets', id:'set-cocktail-4', name:'Cocktail + 4 Stools', w:6, h:6, unit:'ft',
    isTableSet:true, tableType:'tbl-cocktail', chairType:'barstool-round', seats:4,
    draw:(w,h,c)=>{
      const chairs=[0,90,180,270].map(a=>({x:50+36*Math.cos((a-90)*Math.PI/180),y:50+36*Math.sin((a-90)*Math.PI/180)}));
      return `<circle cx="50%" cy="50%" r="22%" fill="${c}" opacity=".3" stroke="${c}" stroke-width="2"/>
        <circle cx="50%" cy="50%" r="8%" fill="${c}" opacity=".5"/>
        ${chairs.map(ch=>`<circle cx="${ch.x}%" cy="${ch.y}%" r="9%" fill="${c}" opacity=".65"/>`).join('')}`;
    }},

  { cat:'Table Sets', id:'set-hightop-4', name:'Hi-Top 30" + 4 Stools', w:6, h:6, unit:'ft',
    isTableSet:true, tableType:'tbl-cocktail-hi', chairType:'barstool-swivel', seats:4,
    draw:(w,h,c)=>{
      const chairs=[0,90,180,270].map(a=>({x:50+36*Math.cos((a-90)*Math.PI/180),y:50+36*Math.sin((a-90)*Math.PI/180)}));
      return `<circle cx="50%" cy="50%" r="20%" fill="${c}" opacity=".22" stroke="${c}" stroke-width="1.8" stroke-dasharray="5,2"/>
        ${chairs.map(ch=>`<circle cx="${ch.x}%" cy="${ch.y}%" r="9%" fill="${c}" opacity=".6"/>`).join('')}`;
    }},

  // ─── LOUNGE SETS ─────────────────────────────
  // Each lounge set defines a list of pieces with relative positions.
  // pieces: [{type, dx, dy, label?}] — dx/dy in feet from the set center

  { cat:'Lounge Sets', id:'lounge-sterling-standard', name:'Sterling Standard', w:18, h:14, unit:'ft',
    isLoungeSet:true,
    pieces:[
      {type:'cort-sterling-sofa',   dx:0,    dy:-3,   label:'Sterling Sofa'},
      {type:'cort-sterling-chair',  dx:-4.5, dy:1.5,  label:'Sterling Chair'},
      {type:'cort-sterling-chair',  dx:4.5,  dy:1.5,  label:'Sterling Chair'},
      {type:'coffee-rect',          dx:0,    dy:1.5,  label:'Coffee Table'},
      {type:'side-round-18',        dx:-4.5, dy:-1.5, label:'End Table'},
      {type:'side-round-18',        dx:4.5,  dy:-1.5, label:'End Table'},
      {type:'rug-rect',             dx:0,    dy:0,    label:'Area Rug'},
    ],
    draw:(w,h,c)=>`
      <rect x="15%" y="5%" width="70%" height="28%" rx="5%" fill="${c}" opacity=".5" stroke="${c}" stroke-width="1.5"/>
      <rect x="5%" y="40%" width="22%" height="25%" rx="8%" fill="${c}" opacity=".5"/>
      <rect x="73%" y="40%" width="22%" height="25%" rx="8%" fill="${c}" opacity=".5"/>
      <rect x="28%" y="38%" width="44%" height="20%" rx="5%" fill="${c}" opacity=".3" stroke="${c}" stroke-width="1"/>
      <rect x="10%" y="18%" width="80%" height="58%" rx="4%" fill="none" stroke="${c}" stroke-width="1" stroke-dasharray="4,3" opacity=".3"/>`},

  { cat:'Lounge Sets', id:'lounge-sterling-large', name:'Sterling Large', w:22, h:16, unit:'ft',
    isLoungeSet:true,
    pieces:[
      {type:'cort-sterling-sofa',   dx:0,    dy:-4,   label:'Sterling Sofa'},
      {type:'cort-sterling-chair',  dx:-5.5, dy:1.5,  label:'Sterling Chair'},
      {type:'cort-sterling-chair',  dx:5.5,  dy:1.5,  label:'Sterling Chair'},
      {type:'cort-sterling-chair',  dx:-3,   dy:4.5,  label:'Sterling Chair'},
      {type:'cort-sterling-chair',  dx:3,    dy:4.5,  label:'Sterling Chair'},
      {type:'coffee-rect',          dx:0,    dy:1.5,  label:'Coffee Table'},
      {type:'side-round-18',        dx:-5.5, dy:-1.5, label:'End Table'},
      {type:'side-round-18',        dx:5.5,  dy:-1.5, label:'End Table'},
      {type:'rug-rect',             dx:0,    dy:1,    label:'Area Rug'},
    ],
    draw:(w,h,c)=>`
      <rect x="12%" y="4%" width="76%" height="22%" rx="5%" fill="${c}" opacity=".5" stroke="${c}" stroke-width="1.5"/>
      <rect x="2%" y="35%" width="20%" height="22%" rx="8%" fill="${c}" opacity=".45"/>
      <rect x="78%" y="35%" width="20%" height="22%" rx="8%" fill="${c}" opacity=".45"/>
      <rect x="22%" y="60%" width="20%" height="22%" rx="8%" fill="${c}" opacity=".4"/>
      <rect x="58%" y="60%" width="20%" height="22%" rx="8%" fill="${c}" opacity=".4"/>
      <rect x="30%" y="36%" width="40%" height="18%" rx="4%" fill="${c}" opacity=".25" stroke="${c}" stroke-width="1"/>
      <rect x="8%" y="18%" width="84%" height="68%" rx="4%" fill="none" stroke="${c}" stroke-width="1" stroke-dasharray="4,3" opacity=".25"/>`},

  { cat:'Lounge Sets', id:'lounge-cocktail-cluster', name:'Cocktail Cluster', w:16, h:14, unit:'ft',
    isLoungeSet:true,
    pieces:[
      {type:'tbl-cocktail',         dx:0,    dy:0,    label:'Cocktail Table'},
      {type:'cort-sterling-chair',  dx:-4,   dy:-2.5, label:'Lounge Chair'},
      {type:'cort-sterling-chair',  dx:4,    dy:-2.5, label:'Lounge Chair'},
      {type:'cort-sterling-chair',  dx:-4,   dy:2.5,  label:'Lounge Chair'},
      {type:'cort-sterling-chair',  dx:4,    dy:2.5,  label:'Lounge Chair'},
      {type:'side-round-16',        dx:-1.5, dy:-3.5, label:'Side Table'},
      {type:'side-round-16',        dx:1.5,  dy:-3.5, label:'Side Table'},
    ],
    draw:(w,h,c)=>`
      <circle cx="50%" cy="50%" r="18%" fill="${c}" opacity=".4" stroke="${c}" stroke-width="1.5"/>
      <rect x="10%" y="15%" width="20%" height="22%" rx="8%" fill="${c}" opacity=".45"/>
      <rect x="70%" y="15%" width="20%" height="22%" rx="8%" fill="${c}" opacity=".45"/>
      <rect x="10%" y="63%" width="20%" height="22%" rx="8%" fill="${c}" opacity=".45"/>
      <rect x="70%" y="63%" width="20%" height="22%" rx="8%" fill="${c}" opacity=".45"/>
      <circle cx="28%" cy="18%" r="6%" fill="${c}" opacity=".35"/>
      <circle cx="72%" cy="18%" r="6%" fill="${c}" opacity=".35"/>`},

  { cat:'Lounge Sets', id:'lounge-sofa-loveseat', name:'Sofa + Loveseat', w:18, h:13, unit:'ft',
    isLoungeSet:true,
    pieces:[
      {type:'sofa-3',               dx:0,    dy:-3.5, label:'Sofa'},
      {type:'sofa-2',               dx:0,    dy:3,    label:'Loveseat'},
      {type:'coffee-rect',          dx:0,    dy:0,    label:'Coffee Table'},
      {type:'side-round-18',        dx:-5,   dy:-2,   label:'End Table'},
      {type:'side-round-18',        dx:5,    dy:-2,   label:'End Table'},
      {type:'rug-rect',             dx:0,    dy:0,    label:'Area Rug'},
    ],
    draw:(w,h,c)=>`
      <rect x="8%" y="6%" width="84%" height="26%" rx="5%" fill="${c}" opacity=".5" stroke="${c}" stroke-width="1.5"/>
      <rect x="18%" y="62%" width="64%" height="24%" rx="6%" fill="${c}" opacity=".45" stroke="${c}" stroke-width="1.5"/>
      <rect x="25%" y="38%" width="50%" height="18%" rx="4%" fill="${c}" opacity=".28" stroke="${c}" stroke-width="1"/>
      <circle cx="12%" cy="30%" r="5%" fill="${c}" opacity=".4"/>
      <circle cx="88%" cy="30%" r="5%" fill="${c}" opacity=".4"/>
      <rect x="10%" y="15%" width="80%" height="65%" rx="3%" fill="none" stroke="${c}" stroke-width="1" stroke-dasharray="4,3" opacity=".25"/>`},

  { cat:'Lounge Sets', id:'lounge-l-shape', name:'L-Shape Lounge', w:20, h:18, unit:'ft',
    isLoungeSet:true,
    pieces:[
      {type:'cort-sterling-sofa',   dx:-3,   dy:-4.5, label:'Sterling Sofa'},
      {type:'sofa-2',               dx:5.5,  dy:1,    label:'Loveseat', rotation:90},
      {type:'cort-sterling-chair',  dx:-3,   dy:2.5,  label:'Sterling Chair'},
      {type:'coffee-round',         dx:1.5,  dy:-1,   label:'Coffee Table'},
      {type:'side-round-18',        dx:-5.5, dy:-2,   label:'End Table'},
      {type:'side-round-18',        dx:3.5,  dy:4,    label:'End Table'},
      {type:'rug-rect',             dx:0,    dy:0,    label:'Area Rug'},
    ],
    draw:(w,h,c)=>`
      <rect x="5%" y="8%" width="55%" height="24%" rx="5%" fill="${c}" opacity=".5" stroke="${c}" stroke-width="1.5"/>
      <rect x="62%" y="30%" width="24%" height="44%" rx="5%" fill="${c}" opacity=".45" stroke="${c}" stroke-width="1.5"/>
      <rect x="5%" y="60%" width="26%" height="22%" rx="8%" fill="${c}" opacity=".45"/>
      <circle cx="35%" cy="50%" r="15%" fill="${c}" opacity=".25" stroke="${c}" stroke-width="1"/>
      <circle cx="12%" cy="36%" r="5%" fill="${c}" opacity=".35"/>
      <rect x="5%" y="18%" width="82%" height="65%" rx="3%" fill="none" stroke="${c}" stroke-width="1" stroke-dasharray="4,3" opacity=".22"/>`},

  { cat:'Lounge Sets', id:'lounge-minimal', name:'Minimal 2-Chair', w:12, h:10, unit:'ft',
    isLoungeSet:true,
    pieces:[
      {type:'cort-sterling-chair',  dx:-2.5, dy:-1.5, label:'Chair'},
      {type:'cort-sterling-chair',  dx:2.5,  dy:-1.5, label:'Chair'},
      {type:'coffee-rect',          dx:0,    dy:1.5,  label:'Coffee Table'},
      {type:'side-round-16',        dx:-4,   dy:-1,   label:'Side Table'},
      {type:'side-round-16',        dx:4,    dy:-1,   label:'Side Table'},
    ],
    draw:(w,h,c)=>`
      <rect x="8%" y="10%" width="35%" height="35%" rx="8%" fill="${c}" opacity=".5"/>
      <rect x="57%" y="10%" width="35%" height="35%" rx="8%" fill="${c}" opacity=".5"/>
      <rect x="25%" y="52%" width="50%" height="22%" rx="5%" fill="${c}" opacity=".3" stroke="${c}" stroke-width="1"/>
      <circle cx="8%" cy="30%" r="6%" fill="${c}" opacity=".35"/>
      <circle cx="92%" cy="30%" r="6%" fill="${c}" opacity=".35"/>`},

  // ─── CHROME EVENT FURNISHING — BARS ──────────
  // Named bars from chrome-eventfurnishing.com, each style × each available size
  // Straight bar SVG helper (reused across styles)
  // Sizes sourced directly from site filter list

  // VELVET BAR — available 4ft, 6ft, 8ft, 10ft
  { cat:'Chrome — Bars', id:'chrome-velvet-bar-4ft', name:'Velvet Bar 4ft', w:4, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="${c}" opacity=".22" stroke="${darken(c)}" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="${darken(c)}" opacity=".22"/>` },
  { cat:'Chrome — Bars', id:'chrome-velvet-bar-6ft', name:'Velvet Bar 6ft', w:6, h:1.92, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="${c}" opacity=".22" stroke="${darken(c)}" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="${darken(c)}" opacity=".22"/>` },
  { cat:'Chrome — Bars', id:'chrome-velvet-bar-8ft', name:'Velvet Bar 8ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="${c}" opacity=".22" stroke="${darken(c)}" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="${darken(c)}" opacity=".22"/>` },
  { cat:'Chrome — Bars', id:'chrome-velvet-bar-10ft', name:'Velvet Bar 10ft', w:10, h:2.04, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="${c}" opacity=".22" stroke="${darken(c)}" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="${darken(c)}" opacity=".22"/>` },

  // VELVET BAR ROUND — 10ft, 11ft, 12ft, 15ft, 18ft
  { cat:'Chrome — Bars', id:'chrome-velvet-bar-round-10ft', name:'Velvet Bar Round 10ft', w:10, h:10, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".18" stroke="${darken(c)}" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="white" opacity=".7"/>` },
  { cat:'Chrome — Bars', id:'chrome-velvet-bar-round-11ft', name:'Velvet Bar Round 11ft', w:11.25, h:11.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".18" stroke="${darken(c)}" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="white" opacity=".7"/>` },
  { cat:'Chrome — Bars', id:'chrome-velvet-bar-round-12ft', name:'Velvet Bar Round 12ft', w:11.83, h:11.83, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".18" stroke="${darken(c)}" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="white" opacity=".7"/>` },
  { cat:'Chrome — Bars', id:'chrome-velvet-bar-round-15ft', name:'Velvet Bar Round 15ft', w:15.83, h:15.83, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".18" stroke="${darken(c)}" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="white" opacity=".7"/>` },
  { cat:'Chrome — Bars', id:'chrome-velvet-bar-round-18ft', name:'Velvet Bar Round 18ft', w:18.67, h:18.67, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".18" stroke="${darken(c)}" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="white" opacity=".7"/>` },

  // VELVET BAR HALF-MOON — 10ft, 11ft, 12ft, 15ft, 18ft
  { cat:'Chrome — Bars', id:'chrome-velvet-halfmoon-10ft', name:'Velvet Half-Moon 10ft', w:10, h:5, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="100%" rx="49%" ry="98%" fill="${c}" opacity=".2" stroke="${darken(c)}" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-velvet-halfmoon-12ft', name:'Velvet Half-Moon 12ft', w:11.83, h:5.92, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="100%" rx="49%" ry="98%" fill="${c}" opacity=".2" stroke="${darken(c)}" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-velvet-halfmoon-15ft', name:'Velvet Half-Moon 15ft', w:15.83, h:7.92, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="100%" rx="49%" ry="98%" fill="${c}" opacity=".2" stroke="${darken(c)}" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-velvet-halfmoon-18ft', name:'Velvet Half-Moon 18ft', w:18.67, h:9.33, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="100%" rx="49%" ry="98%" fill="${c}" opacity=".2" stroke="${darken(c)}" stroke-width="2"/>` },

  // FABRIZIO BAR — 4ft, 6ft, 8ft
  { cat:'Chrome — Bars', id:'chrome-fabrizio-bar-4ft', name:'Fabrizio Bar 4ft', w:4, h:1.92, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(139,90,43,.2)" stroke="#8B5A2B" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(100,60,20,.25)"/>` },
  { cat:'Chrome — Bars', id:'chrome-fabrizio-bar-6ft', name:'Fabrizio Bar 6ft', w:6, h:2.08, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(139,90,43,.2)" stroke="#8B5A2B" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(100,60,20,.25)"/>` },
  { cat:'Chrome — Bars', id:'chrome-fabrizio-bar-8ft', name:'Fabrizio Bar 8ft', w:8, h:2.42, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(139,90,43,.2)" stroke="#8B5A2B" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(100,60,20,.25)"/>` },
  { cat:'Chrome — Bars', id:'chrome-fabrizio-bar-round-10ft', name:'Fabrizio Bar Round 10ft', w:10, h:10, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(139,90,43,.2)" stroke="#8B5A2B" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="white" opacity=".7"/>` },

  // CANE BAR — 4ft, 6ft, 8ft
  { cat:'Chrome — Bars', id:'chrome-cane-bar-4ft', name:'Cane Bar 4ft', w:4, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(160,120,60,.22)" stroke="rgba(140,100,40,.7)" stroke-width="2"/><line x1="20%" y1="2%" x2="20%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="40%" y1="2%" x2="40%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="60%" y1="2%" x2="60%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="80%" y1="2%" x2="80%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/>` },
  { cat:'Chrome — Bars', id:'chrome-cane-bar-6ft', name:'Cane Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(160,120,60,.22)" stroke="rgba(140,100,40,.7)" stroke-width="2"/><line x1="14%" y1="2%" x2="14%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="29%" y1="2%" x2="29%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="57%" y1="2%" x2="57%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="71%" y1="2%" x2="71%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="86%" y1="2%" x2="86%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/>` },
  { cat:'Chrome — Bars', id:'chrome-cane-bar-8ft', name:'Cane Bar 8ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(160,120,60,.22)" stroke="rgba(140,100,40,.7)" stroke-width="2"/><line x1="12%" y1="2%" x2="12%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="25%" y1="2%" x2="25%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="37%" y1="2%" x2="37%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="62%" y1="2%" x2="62%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="75%" y1="2%" x2="75%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/><line x1="88%" y1="2%" x2="88%" y2="98%" stroke="rgba(140,100,40,.25)" stroke-width="1.5"/>` },

  // RATTAN BAR — 4ft, 6ft, 8ft
  { cat:'Chrome — Bars', id:'chrome-rattan-bar-4ft', name:'Rattan Bar 4ft', w:4, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(160,120,60,.2)" stroke="rgba(140,100,40,.7)" stroke-width="2"/><rect x="4%" y="10%" width="92%" height="80%" rx="3%" fill="rgba(140,100,40,.12)" stroke="rgba(140,100,40,.3)" stroke-width="1"/>` },
  { cat:'Chrome — Bars', id:'chrome-rattan-bar-6ft', name:'Rattan Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(160,120,60,.2)" stroke="rgba(140,100,40,.7)" stroke-width="2"/><rect x="3%" y="10%" width="94%" height="80%" rx="3%" fill="rgba(140,100,40,.12)" stroke="rgba(140,100,40,.3)" stroke-width="1"/>` },
  { cat:'Chrome — Bars', id:'chrome-rattan-bar-8ft', name:'Rattan Bar 8ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(160,120,60,.2)" stroke="rgba(140,100,40,.7)" stroke-width="2"/><rect x="2%" y="10%" width="96%" height="80%" rx="3%" fill="rgba(140,100,40,.12)" stroke="rgba(140,100,40,.3)" stroke-width="1"/>` },

  // BOIS / YARD BAR — 6ft, 8ft
  { cat:'Chrome — Bars', id:'chrome-bois-bar-6ft', name:'Bois Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(100,80,50,.2)" stroke="rgba(80,60,30,.7)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="32%" rx="2%" fill="rgba(80,60,30,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-bois-bar-8ft', name:'Bois Bar 8ft', w:8, h:2.42, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(100,80,50,.2)" stroke="rgba(80,60,30,.7)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="32%" rx="2%" fill="rgba(80,60,30,.2)"/>` },

  // LEGNO BAR — 6ft, 8ft
  { cat:'Chrome — Bars', id:'chrome-legno-bar-6ft', name:'Legno Bar 6ft', w:6, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/><line x1="1%" y1="33%" x2="99%" y2="33%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>` },
  { cat:'Chrome — Bars', id:'chrome-legno-bar-8ft', name:'Legno Bar 8ft', w:8, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/><line x1="1%" y1="33%" x2="99%" y2="33%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>` },

  // CYPRUS BAR — 4ft, 6ft, 8ft + Cyprus Round Bar
  { cat:'Chrome — Bars', id:'chrome-cyprus-bar-4ft', name:'Cyprus Bar 4ft', w:4, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(180,160,120,.22)" stroke="rgba(160,140,90,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(160,140,90,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-cyprus-bar-6ft', name:'Cyprus Bar 6ft', w:6, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(180,160,120,.22)" stroke="rgba(160,140,90,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(160,140,90,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-cyprus-bar-8ft', name:'Cyprus Bar 8ft', w:8, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(180,160,120,.22)" stroke="rgba(160,140,90,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(160,140,90,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-cyprus-bar-round-10ft', name:'Cyprus Round Bar 10ft', w:10, h:10, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(180,160,120,.2)" stroke="rgba(160,140,90,.6)" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="white" opacity=".7"/>` },

  // CAPRI BAR — 6ft, 8ft
  { cat:'Chrome — Bars', id:'chrome-capri-bar-6ft', name:'Capri Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(200,185,155,.22)" stroke="rgba(180,160,120,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(180,160,120,.22)"/>` },
  { cat:'Chrome — Bars', id:'chrome-capri-bar-8ft', name:'Capri Bar 8ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(200,185,155,.22)" stroke="rgba(180,160,120,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(180,160,120,.22)"/>` },

  // SNOW BAR — straight, curved, round
  { cat:'Chrome — Bars', id:'chrome-snow-bar-6ft', name:'Snow Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(240,240,248,.5)" stroke="#c0c0d8" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(200,200,220,.3)"/>` },
  { cat:'Chrome — Bars', id:'chrome-snow-bar-8ft', name:'Snow Bar 8ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(240,240,248,.5)" stroke="#c0c0d8" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(200,200,220,.3)"/>` },
  { cat:'Chrome — Bars', id:'chrome-snow-curved-bar', name:'Snow Curved Bar', w:7.33, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<path d="M2,50 Q50,5 98,50 L98,90 Q50,95 2,90 Z" fill="rgba(240,240,248,.5)" stroke="#c0c0d8" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-snow-round-bar-10ft', name:'Snow Round Bar 10ft', w:10, h:10, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(240,240,248,.5)" stroke="#c0c0d8" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="white" opacity=".8"/>` },

  // REFLECTION BAR — straight, round
  { cat:'Chrome — Bars', id:'chrome-reflection-bar-6ft', name:'Reflection Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(180,180,200,.25)" stroke="rgba(150,150,180,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(160,160,190,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-reflection-bar-8ft', name:'Reflection Bar 8ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(180,180,200,.25)" stroke="rgba(150,150,180,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(160,160,190,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-reflection-round-10ft', name:'Reflection Round Bar 10ft', w:10, h:10, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(180,180,200,.25)" stroke="rgba(150,150,180,.6)" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="rgba(220,220,240,.6)"/>` },
  { cat:'Chrome — Bars', id:'chrome-reflection-round-18ft', name:'Reflection Round Bar 18ft', w:18.67, h:18.67, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(180,180,200,.25)" stroke="rgba(150,150,180,.6)" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="rgba(220,220,240,.6)"/>` },

  // POSH BAR — 6ft, 8ft
  { cat:'Chrome — Bars', id:'chrome-posh-bar-6ft', name:'Posh Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(200,185,155,.2)" stroke="rgba(180,160,120,.6)" stroke-width="2.5"/><rect x="3%" y="12%" width="94%" height="76%" rx="3%" fill="rgba(180,160,120,.12)"/>` },
  { cat:'Chrome — Bars', id:'chrome-posh-bar-8ft', name:'Posh Bar 8ft', w:8, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(200,185,155,.2)" stroke="rgba(180,160,120,.6)" stroke-width="2.5"/><rect x="3%" y="12%" width="94%" height="76%" rx="3%" fill="rgba(180,160,120,.12)"/>` },

  // BLANCO BAR — 6ft, 8ft
  { cat:'Chrome — Bars', id:'chrome-blanco-bar-6ft', name:'Blanco Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(248,248,248,.7)" stroke="#ccc" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(220,220,220,.4)"/>` },
  { cat:'Chrome — Bars', id:'chrome-blanco-bar-8ft', name:'Blanco Bar 8ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(248,248,248,.7)" stroke="#ccc" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(220,220,220,.4)"/>` },

  // GOLD / NEON / MARBLE / LIGHTBOX / HOLZ / ZIGZAG / SHINE — single sizes
  { cat:'Chrome — Bars', id:'chrome-gold-bar-6ft', name:'Gold Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(200,160,40,.2)" stroke="rgba(180,140,20,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(180,140,20,.22)"/>` },
  { cat:'Chrome — Bars', id:'chrome-marble-bar-6ft', name:'Marble Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(220,215,205,.45)" stroke="#aaa" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(200,195,185,.3)"/>` },
  { cat:'Chrome — Bars', id:'chrome-marble-bar-8ft', name:'Marble Bar 8ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(220,215,205,.45)" stroke="#aaa" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(200,195,185,.3)"/>` },
  { cat:'Chrome — Bars', id:'chrome-neon-bar-6ft', name:'Neon Bar 6ft', w:6, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(40,20,80,.25)" stroke="rgba(120,40,200,.6)" stroke-width="2"/><rect x="5%" y="15%" width="90%" height="8%" rx="2%" fill="rgba(120,40,200,.4)"/><rect x="5%" y="75%" width="90%" height="8%" rx="2%" fill="rgba(120,40,200,.4)"/>` },
  { cat:'Chrome — Bars', id:'chrome-holz-bar-6ft', name:'Holz Bar 6ft', w:6, h:2.42, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(80,60,40,.22)" stroke="rgba(60,40,20,.6)" stroke-width="2"/><line x1="1%" y1="33%" x2="99%" y2="33%" stroke="rgba(60,40,20,.25)" stroke-width="1.5"/>` },
  { cat:'Chrome — Bars', id:'chrome-zigzag-bar-6ft', name:'Zigzag Bar 6ft', w:6, h:2.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(120,90,50,.2)" stroke="rgba(100,70,30,.6)" stroke-width="2"/><polyline points="10,50 25,20 40,50 55,20 70,50 85,20 90,50" stroke="rgba(100,70,30,.4)" stroke-width="2" fill="none"/>` },
  { cat:'Chrome — Bars', id:'chrome-shine-bar-6ft', name:'Shine Bar 6ft', w:6, h:2.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(200,185,155,.3)" stroke="rgba(180,160,120,.6)" stroke-width="2"/><rect x="4%" y="12%" width="92%" height="76%" rx="3%" fill="rgba(220,205,180,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-universe-bar-6ft', name:'Universe Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(30,30,60,.25)" stroke="rgba(80,80,160,.5)" stroke-width="2"/><circle cx="20%" cy="50%" r="8%" fill="rgba(80,80,160,.3)"/><circle cx="50%" cy="50%" r="8%" fill="rgba(80,80,160,.3)"/><circle cx="80%" cy="50%" r="8%" fill="rgba(80,80,160,.3)"/>` },
  { cat:'Chrome — Bars', id:'chrome-odyssey-bar-6ft', name:'Odyssey Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(60,80,100,.2)" stroke="rgba(50,70,90,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(50,70,90,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-sleek-bar-6ft', name:'Sleek Bar 6ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="2%" fill="rgba(30,30,30,.22)" stroke="rgba(50,50,50,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-cimento-bar-6ft', name:'Cimento Bar 6ft', w:6, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(140,140,140,.25)" stroke="#999" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="2%" fill="rgba(120,120,120,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-carolina-bar-6ft', name:'Carolina Bar 6ft', w:6, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(240,240,248,.5)" stroke="#b0b0c8" stroke-width="2"/><rect x="4%" y="12%" width="92%" height="76%" rx="3%" fill="rgba(220,220,235,.3)"/>` },
  { cat:'Chrome — Bars', id:'chrome-hedge-bar-6ft', name:'Hedge Bar 6ft', w:6, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(40,90,40,.22)" stroke="rgba(30,70,30,.6)" stroke-width="2"/><rect x="3%" y="10%" width="94%" height="80%" rx="3%" fill="rgba(30,70,30,.12)" stroke="rgba(30,70,30,.3)" stroke-width="1"/>` },
  { cat:'Chrome — Bars', id:'chrome-raw-bar-6ft', name:'Raw Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="2%" fill="rgba(100,80,60,.2)" stroke="rgba(80,60,40,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-sonoma-bar-6ft', name:'Sonoma Bar 6ft', w:6, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(180,150,110,.22)" stroke="rgba(160,130,80,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(160,130,80,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-lightbox-bar-6ft', name:'Lightbox Bar 6ft', w:6, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(255,255,240,.5)" stroke="rgba(200,180,80,.6)" stroke-width="2"/><rect x="4%" y="12%" width="92%" height="76%" rx="2%" fill="rgba(255,240,150,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-stbarths-bar', name:'St. Barths Bar', w:5.83, h:2.17, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(180,210,230,.25)" stroke="rgba(100,160,200,.6)" stroke-width="2"/><rect x="1%" y="2%" width="98%" height="34%" rx="3%" fill="rgba(100,160,200,.2)"/>` },
  { cat:'Chrome — Bars', id:'chrome-travertine-bar-6ft', name:'Travertine Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(210,200,180,.4)" stroke="rgba(180,165,140,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-fluto-bar-6ft', name:'Fluto Bar 6ft', w:6, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(180,160,130,.22)" stroke="rgba(150,130,100,.6)" stroke-width="2"/><line x1="20%" y1="2%" x2="20%" y2="98%" stroke="rgba(150,130,100,.25)" stroke-width="1.5"/><line x1="40%" y1="2%" x2="40%" y2="98%" stroke="rgba(150,130,100,.25)" stroke-width="1.5"/><line x1="60%" y1="2%" x2="60%" y2="98%" stroke="rgba(150,130,100,.25)" stroke-width="1.5"/><line x1="80%" y1="2%" x2="80%" y2="98%" stroke="rgba(150,130,100,.25)" stroke-width="1.5"/>` },
  { cat:'Chrome — Bars', id:'chrome-angled-bar-6ft', name:'Angled Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<polygon points="2,98 30,2 98,2 98,98" fill="rgba(120,90,50,.2)" stroke="rgba(100,70,30,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-woodslat-bar-6ft', name:'Wood Slat Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/><line x1="1%" y1="25%" x2="99%" y2="25%" stroke="rgba(140,90,30,.3)" stroke-width="2"/><line x1="1%" y1="50%" x2="99%" y2="50%" stroke="rgba(140,90,30,.3)" stroke-width="2"/><line x1="1%" y1="75%" x2="99%" y2="75%" stroke="rgba(140,90,30,.3)" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-woodslat-bar-8ft', name:'Wood Slat Bar 8ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/><line x1="1%" y1="25%" x2="99%" y2="25%" stroke="rgba(140,90,30,.3)" stroke-width="2"/><line x1="1%" y1="50%" x2="99%" y2="50%" stroke="rgba(140,90,30,.3)" stroke-width="2"/><line x1="1%" y1="75%" x2="99%" y2="75%" stroke="rgba(140,90,30,.3)" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-val-round-bar-18ft', name:'Val Round Bar 18ft', w:18.67, h:18.67, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(200,160,40,.2)" stroke="rgba(180,140,20,.6)" stroke-width="2"/><circle cx="50%" cy="50%" r="30%" fill="white" opacity=".7"/>` },
  { cat:'Chrome — Bars', id:'chrome-lightwood-curved-bar', name:'Light Wood Curved Bar', w:6, h:3, unit:'ft',
    draw:(w,h,c)=>`<path d="M2,80 Q50,5 98,80 L98,98 Q50,90 2,98 Z" fill="rgba(200,170,120,.22)" stroke="rgba(180,150,90,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-chrome-curved-bar', name:'Chrome Curved Bar', w:6, h:3, unit:'ft',
    draw:(w,h,c)=>`<path d="M2,80 Q50,5 98,80 L98,98 Q50,90 2,98 Z" fill="rgba(180,180,200,.25)" stroke="rgba(150,150,180,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-slat-white-bar-6ft', name:'Slat White Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(248,248,248,.7)" stroke="#ccc" stroke-width="2"/><line x1="1%" y1="30%" x2="99%" y2="30%" stroke="#ddd" stroke-width="2"/><line x1="1%" y1="55%" x2="99%" y2="55%" stroke="#ddd" stroke-width="2"/><line x1="1%" y1="78%" x2="99%" y2="78%" stroke="#ddd" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-slat-white-bar-8ft', name:'Slat White Bar 8ft', w:8, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(248,248,248,.7)" stroke="#ccc" stroke-width="2"/><line x1="1%" y1="30%" x2="99%" y2="30%" stroke="#ddd" stroke-width="2"/><line x1="1%" y1="55%" x2="99%" y2="55%" stroke="#ddd" stroke-width="2"/><line x1="1%" y1="78%" x2="99%" y2="78%" stroke="#ddd" stroke-width="2"/>` },
  { cat:'Chrome — Bars', id:'chrome-serpentine-bar-6ft', name:'Serpentine Bar 6ft', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<path d="M2,50 Q25,15 50,50 Q75,85 98,50 L98,90 Q75,98 50,75 Q25,98 2,90 Z" fill="rgba(139,90,43,.18)" stroke="#8B5A2B" stroke-width="2"/>` },

  // ─── CHROME EVENT FURNISHING — BAR STOOLS ─────
  { cat:'Chrome — Bar Stools', id:'chrome-stool-mix', name:'Mix n Match Stool', w:1.42, h:1.42, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity=".75" stroke="${darken(c)}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="12%" fill="${darken(c)}" opacity=".55"/>` },
  { cat:'Chrome — Bar Stools', id:'chrome-stool-panama', name:'Panama Stool', w:1.25, h:1.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity=".75" stroke="${darken(c)}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="12%" fill="${darken(c)}" opacity=".55"/>` },
  { cat:'Chrome — Bar Stools', id:'chrome-stool-legno', name:'Legno Stool', w:1.42, h:1.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="${darken(c)}" opacity=".85"/>
      <rect x="10%" y="26%" width="80%" height="66%" rx="8%" fill="${c}" opacity=".75" stroke="${darken(c)}" stroke-width="1.8"/>` },
  { cat:'Chrome — Bar Stools', id:'chrome-stool-ghost', name:'Ghost Stool', w:1.42, h:1.42, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(200,220,255,.35)" stroke="#aac" stroke-width="1.8"/>
      <circle cx="50%" cy="50%" r="14%" fill="rgba(140,140,200,.4)"/>` },
  { cat:'Chrome — Bar Stools', id:'chrome-stool-wired', name:'Wired White Stool', w:1.42, h:1.42, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(255,255,255,.8)" stroke="#ccc" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="32%" fill="none" stroke="#ddd" stroke-width="1"/>
      <circle cx="50%" cy="50%" r="10%" fill="#ddd" opacity=".7"/>` },
  { cat:'Chrome — Bar Stools', id:'chrome-stool-adjustable', name:'Adjustable Stool', w:1.42, h:1.42, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity=".7" stroke="${darken(c)}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="20%" fill="none" stroke="${darken(c)}" stroke-width="1.5" stroke-dasharray="3,2"/>
      <circle cx="50%" cy="50%" r="7%" fill="${darken(c)}" opacity=".7"/>` },
  { cat:'Chrome — Bar Stools', id:'chrome-stool-farm', name:'Farm Stool', w:1.5, h:1.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="12%" rx="3%" fill="${darken(c)}" opacity=".8"/>
      <rect x="10%" y="24%" width="80%" height="68%" rx="6%" fill="${c}" opacity=".7" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Bar Stools', id:'chrome-stool-rouge', name:'Rouge Stool', w:1.75, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(200,50,60,.45)" stroke="rgba(160,30,40,.7)" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="14%" fill="rgba(160,30,40,.5)"/>` },

  // ─── CHROME EVENT FURNISHING — SOFAS & LOUNGE ─
  { cat:'Chrome — Sofas & Lounge', id:'chrome-velvet-sofa', name:'Velvet Sofa', w:6.5, h:2.75, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="8%" width="90%" height="18%" rx="4%" fill="${darken(c)}" opacity=".85"/>
      <rect x="5%" y="28%" width="90%" height="64%" rx="8%" fill="${c}" opacity=".8" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-velvet-armchair', name:'Velvet Armchair', w:2.5, h:2.75, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="18%" rx="5%" fill="${darken(c)}" opacity=".85"/>
      <rect x="8%" y="28%" width="84%" height="64%" rx="8%" fill="${c}" opacity=".8" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-gatsby-sofa', name:'Gatsby Sofa', w:6.33, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="8%" width="90%" height="16%" rx="4%" fill="${darken(c)}" opacity=".8"/>
      <rect x="5%" y="26%" width="90%" height="66%" rx="8%" fill="${c}" opacity=".75" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-gatsby-armchair', name:'Gatsby Armchair', w:2.33, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="16%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="8%" y="26%" width="84%" height="66%" rx="8%" fill="${c}" opacity=".75" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-aspen-sofa', name:'Aspen Sofa', w:6.5, h:2.75, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="8%" width="90%" height="18%" rx="4%" fill="${darken(c)}" opacity=".85"/>
      <rect x="5%" y="28%" width="90%" height="64%" rx="8%" fill="${c}" opacity=".78" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-aspen-armchair', name:'Aspen Armchair', w:2.5, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="18%" rx="5%" fill="${darken(c)}" opacity=".85"/>
      <rect x="8%" y="28%" width="84%" height="64%" rx="8%" fill="${c}" opacity=".78" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-cloud-sofa', name:'Cloud Sofa', w:6.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="20%" width="96%" height="72%" rx="12%" fill="white" opacity=".9" stroke="#ddd" stroke-width="1.5"/>
      <rect x="8%" y="28%" width="84%" height="55%" rx="10%" fill="rgba(240,240,240,.6)"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-cloud-chair', name:'Cloud Chair', w:2.5, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="18%" width="90%" height="74%" rx="14%" fill="white" opacity=".9" stroke="#ddd" stroke-width="1.5"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-cloud-ottoman', name:'Cloud Ottoman', w:2.83, h:2.58, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="48%" ry="45%" fill="white" opacity=".85" stroke="#ddd" stroke-width="1.5"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-rattan-armchair', name:'Rattan Armchair', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="16%" rx="5%" fill="rgba(160,110,50,.6)"/>
      <ellipse cx="50%" cy="60%" rx="42%" ry="38%" fill="rgba(180,130,70,.45)" stroke="rgba(140,90,30,.6)" stroke-width="1.5"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-velvet-banquette-round', name:'Velvet Round Banquette', w:6, h:6, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".5" stroke="${darken(c)}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="28%" fill="white" opacity=".8"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-noho-armchair', name:'Noho Armchair', w:2.42, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="18%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="8%" y="28%" width="84%" height="64%" rx="8%" fill="${c}" opacity=".75" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Sofas & Lounge', id:'chrome-bali-lounge', name:'Bali Lounge Chair', w:2.5, h:3, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="55%" rx="44%" ry="42%" fill="rgba(160,110,50,.4)" stroke="rgba(120,80,20,.6)" stroke-width="1.5"/>
      <ellipse cx="50%" cy="25%" rx="38%" ry="22%" fill="rgba(160,110,50,.5)"/>` },

  // ─── CHROME EVENT FURNISHING — DINING TABLES ──
  // All tables from chrome-eventfurnishing.com/diningtables
  // Sizes from their filter list

  // FARM DINING TABLE — 6ft (72"×48"), 8ft (96"×48"), 12ft (144"×48")
  { cat:'Chrome — Dining Tables', id:'chrome-farm-dining-6ft', name:'Farm Dining Table 6ft', w:6, h:4, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-farm-dining-8ft', name:'Farm Dining Table 8ft', w:8, h:4, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-farm-dining-12ft', name:'Farm Dining Table 12ft', w:12, h:4, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },

  // ROUND DINING TABLES — 5ft (60"), 6ft (72")
  { cat:'Chrome — Dining Tables', id:'chrome-round-dining-5ft', name:'Round Dining Table 5ft', w:5, h:5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-round-dining-6ft', name:'Round Dining Table 6ft', w:6, h:6, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>` },

  // SLAT RECTANGLE DINING TABLE — 86"×38", 96"×40", 103"×32.5"
  { cat:'Chrome — Dining Tables', id:'chrome-slat-rect-dining-7ft', name:'Slat Rectangle Dining Table 7ft', w:7.17, h:3.17, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/><line x1="2%" y1="35%" x2="98%" y2="35%" stroke="rgba(140,90,30,.25)" stroke-width="1.5"/><line x1="2%" y1="65%" x2="98%" y2="65%" stroke="rgba(140,90,30,.25)" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-slat-rect-dining-8ft', name:'Slat Rectangle Dining Table 8ft', w:8, h:3.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/><line x1="2%" y1="35%" x2="98%" y2="35%" stroke="rgba(140,90,30,.25)" stroke-width="1.5"/><line x1="2%" y1="65%" x2="98%" y2="65%" stroke="rgba(140,90,30,.25)" stroke-width="1.5"/>` },

  // SLAT ROUND DINING TABLE — 60"×60", 72"×72"
  { cat:'Chrome — Dining Tables', id:'chrome-slat-round-dining-5ft', name:'Slat Round Dining Table 5ft', w:5, h:5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(160,110,50,.18)" stroke="rgba(140,90,30,.6)" stroke-width="2"/><line x1="15%" y1="50%" x2="85%" y2="50%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-slat-round-dining-6ft', name:'Slat Round Dining Table 6ft', w:6, h:6, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(160,110,50,.18)" stroke="rgba(140,90,30,.6)" stroke-width="2"/><line x1="10%" y1="50%" x2="90%" y2="50%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>` },

  // VELVET ROUND DINING TABLE — 5ft, 6ft
  { cat:'Chrome — Dining Tables', id:'chrome-velvet-round-dining-5ft', name:'Velvet Round Dining Table 5ft', w:5, h:5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".22" stroke="${darken(c)}" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-velvet-round-dining-6ft', name:'Velvet Round Dining Table 6ft', w:6, h:6, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".22" stroke="${darken(c)}" stroke-width="2"/>` },

  // LEGNO DINING TABLE — 71"×28" (short), 71"×36" (standard)
  { cat:'Chrome — Dining Tables', id:'chrome-legno-dining-short', name:'Legno Dining Table', w:5.92, h:2.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-legno-long-dining', name:'Legno Long Dining Table', w:8.04, h:2.71, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },

  // RATTAN DINING TABLE — 96"×40"
  { cat:'Chrome — Dining Tables', id:'chrome-rattan-dining', name:'Ratan Dining Table', w:8, h:3.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="rgba(160,110,50,.18)" stroke="rgba(140,90,30,.6)" stroke-width="2"/><rect x="5%" y="12%" width="90%" height="76%" rx="3%" fill="rgba(140,90,30,.1)"/>` },

  // CIMENTO DINING TABLE — 72"×48"
  { cat:'Chrome — Dining Tables', id:'chrome-cimento-dining', name:'Cimento Dining Table', w:6, h:4, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(140,140,140,.22)" stroke="#999" stroke-width="2"/>` },

  // CAPRI DINING TABLE — 72"×48"
  { cat:'Chrome — Dining Tables', id:'chrome-capri-dining', name:'Capri Dining Table', w:6, h:4, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="rgba(200,185,155,.25)" stroke="rgba(180,160,120,.6)" stroke-width="2"/>` },

  // WHEAT DINING TABLE — 72"×48"
  { cat:'Chrome — Dining Tables', id:'chrome-wheat-dining', name:'Wheat Dining Table', w:6, h:4, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(200,180,130,.22)" stroke="rgba(180,155,90,.6)" stroke-width="2"/>` },

  // ALEX ROUND DINING TABLE — 5ft (60"), 6ft (72")
  { cat:'Chrome — Dining Tables', id:'chrome-alex-round-5ft', name:'Alex Round Dining Table 5ft', w:5, h:5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(200,185,155,.22)" stroke="rgba(180,160,120,.6)" stroke-width="2"/>` },

  // CURVED DINING TABLE — 96"×40"
  { cat:'Chrome — Dining Tables', id:'chrome-curved-dining', name:'Curved Dining Table', w:8, h:3.33, unit:'ft',
    draw:(w,h,c)=>`<path d="M2,50 Q50,5 98,50 L98,90 Q50,95 2,90 Z" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>` },

  // CURVED FABRIC TABLE — 70"×30"
  { cat:'Chrome — Dining Tables', id:'chrome-curved-fabric-dining', name:'Curved Fabric Table', w:5.83, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<path d="M2,50 Q50,5 98,50 L98,90 Q50,95 2,90 Z" fill="${c}" opacity=".2" stroke="${darken(c)}" stroke-width="2"/>` },

  // FABRIC DINING TABLE — 96"×40"
  { cat:'Chrome — Dining Tables', id:'chrome-fabric-dining', name:'Fabric Dining Table', w:8, h:3.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="${c}" opacity=".2" stroke="${darken(c)}" stroke-width="2"/>` },

  // VERONA DINING TABLE — 94"×40"
  { cat:'Chrome — Dining Tables', id:'chrome-verona-dining', name:'Verona Dining Table', w:7.83, h:3.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="rgba(248,248,248,.5)" stroke="#ccc" stroke-width="2"/>` },

  // SNOW DINING TABLE — 96"×40"
  { cat:'Chrome — Dining Tables', id:'chrome-snow-dining', name:'Snow Dining Table', w:8, h:3.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="rgba(240,240,248,.5)" stroke="#c0c0d8" stroke-width="2"/>` },

  // ODYSSEY DINING TABLE — 96"×40"
  { cat:'Chrome — Dining Tables', id:'chrome-odyssey-dining', name:'Odyssey Dining Table', w:8, h:3.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(60,80,100,.18)" stroke="rgba(50,70,90,.6)" stroke-width="2"/>` },

  // NERO DINING TABLE — 70"×29"
  { cat:'Chrome — Dining Tables', id:'chrome-nero-dining', name:'Nero Dining Table', w:5.83, h:2.42, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(30,30,30,.2)" stroke="rgba(50,50,50,.6)" stroke-width="2"/>` },

  // ARTSY DINING TABLE — 72"×72"
  { cat:'Chrome — Dining Tables', id:'chrome-artsy-dining', name:'Artsy Dining Table', w:6, h:6, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(180,160,120,.2)" stroke="rgba(160,140,90,.6)" stroke-width="2"/><rect x="20%" y="20%" width="60%" height="60%" rx="4%" fill="rgba(160,140,90,.1)" stroke="rgba(160,140,90,.3)" stroke-width="1"/>` },

  // TRUNK TABLE — 40"×40", 36"×36"
  { cat:'Chrome — Dining Tables', id:'chrome-trunk-table', name:'Trunk Table', w:3.33, h:3.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="4%" fill="rgba(100,70,30,.22)" stroke="rgba(80,50,15,.6)" stroke-width="2"/><rect x="12%" y="12%" width="76%" height="76%" rx="3%" fill="rgba(80,50,15,.12)"/>` },

  // PALLET DINING TABLE — 70"×30"
  { cat:'Chrome — Dining Tables', id:'chrome-pallet-dining', name:'Pallet Dining Table', w:5.83, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(160,110,50,.18)" stroke="rgba(140,90,30,.5)" stroke-width="2"/><line x1="33%" y1="5%" x2="33%" y2="95%" stroke="rgba(140,90,30,.25)" stroke-width="1.5"/><line x1="67%" y1="5%" x2="67%" y2="95%" stroke="rgba(140,90,30,.25)" stroke-width="1.5"/>` },

  // HANNOI DINING TABLE — 70"×30"
  { cat:'Chrome — Dining Tables', id:'chrome-hannoi-dining', name:'Hannoi Dining Table', w:5.83, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="rgba(160,110,50,.18)" stroke="rgba(140,90,30,.5)" stroke-width="2"/>` },

  // ROOT CONSOLE TABLE — Large 57"×36", Small 42"×27"
  { cat:'Chrome — Dining Tables', id:'chrome-root-console-large', name:'Root Console Table Large', w:4.75, h:3, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="48%" ry="44%" fill="rgba(100,70,30,.2)" stroke="rgba(80,50,15,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-root-console-small', name:'Root Console Table Small', w:3.5, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="48%" ry="44%" fill="rgba(100,70,30,.2)" stroke="rgba(80,50,15,.6)" stroke-width="2"/>` },

  // OVAL ACCENT TABLE — 94"×32.5"
  { cat:'Chrome — Dining Tables', id:'chrome-oval-accent', name:'Oval Accent Table', w:7.83, h:2.71, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="48%" ry="44%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>` },

  // CONFERENCE TABLE — 121"×33"
  { cat:'Chrome — Dining Tables', id:'chrome-conference-table', name:'Conference Table', w:10.1, h:2.75, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(50,70,60,.18)" stroke="rgba(40,60,50,.6)" stroke-width="2"/>` },

  // WOOD ROUND TABLE — 36"d, 39"d, 40"d
  { cat:'Chrome — Dining Tables', id:'chrome-wood-round-3ft', name:'Wood Round Table 3ft', w:3, h:3, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-wood-round-3pt3ft', name:'Wood Round Table 39"', w:3.25, h:3.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },

  // BISTRO TABLES — Black, White, Wood, Marble Gold, Tulip, Tripod
  { cat:'Chrome — Dining Tables', id:'chrome-bistro-black', name:'Black Bistro Table', w:2.25, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(30,30,30,.3)" stroke="#444" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-bistro-white', name:'White Bistro Table', w:2.25, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(248,248,248,.8)" stroke="#ccc" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-bistro-wood', name:'Wood Bistro Table', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(160,110,50,.22)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-bistro-marble-gold', name:'Marble Gold Bistro Table', w:2.25, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,215,205,.5)" stroke="rgba(180,140,20,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-tulip-table', name:'Tulip Table', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(248,248,248,.7)" stroke="#bbb" stroke-width="2"/><circle cx="50%" cy="50%" r="12%" fill="#bbb" opacity=".5"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-tripod-table', name:'Tripod Table', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity=".2" stroke="${darken(c)}" stroke-width="2"/><line x1="50%" y1="50%" x2="50%" y2="95%" stroke="${darken(c)}" stroke-width="2"/><line x1="50%" y1="50%" x2="10%" y2="85%" stroke="${darken(c)}" stroke-width="2"/><line x1="50%" y1="50%" x2="90%" y2="85%" stroke="${darken(c)}" stroke-width="2"/>` },

  // PICNIC TABLES — standard (96"×48") and wood
  { cat:'Chrome — Dining Tables', id:'chrome-picnic-table', name:'Picnic Table', w:8, h:4, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/><rect x="2%" y="38%" width="96%" height="24%" rx="1%" fill="rgba(140,90,30,.15)"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-wood-picnic-table', name:'Wood Picnic Table', w:8, h:4, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(140,90,30,.18)" stroke="rgba(120,70,15,.6)" stroke-width="2"/>` },

  // SQUARE TABLES — 30"×30", 36"×36", 39"×39", 40"×40", 47"×47"
  { cat:'Chrome — Dining Tables', id:'chrome-square-30', name:'Square Table 30"', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="5%" fill="${c}" opacity=".2" stroke="${c}" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-square-pedestal-36', name:'Square Pedestal Table 36"', w:3, h:3, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="5%" fill="${c}" opacity=".2" stroke="${c}" stroke-width="2"/><circle cx="50%" cy="50%" r="14%" fill="${darken(c)}" opacity=".3"/>` },

  // RECTANGLE DINING TABLE — 70"×29", 86"×38"
  { cat:'Chrome — Dining Tables', id:'chrome-rect-dining-small', name:'Rectangle Dining Table Small', w:5.83, h:2.42, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-rect-dining-large', name:'Rectangle Dining Table 7ft', w:7.17, h:3.17, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="2"/>` },

  // STANDARD TABLES — rect and round (basic folding/banquet style)
  { cat:'Chrome — Dining Tables', id:'chrome-standard-dining-rect', name:'Standard Dining Table 8ft', w:8, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="${c}" opacity=".15" stroke="${c}" stroke-width="1.5" stroke-dasharray="6,3"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-standard-dining-round', name:'Standard Round Dining Table', w:5, h:5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="${c}" opacity=".15" stroke="${c}" stroke-width="1.5" stroke-dasharray="6,3"/>` },

  // SPECIALTY — Ice Sculpture Table (60"×60"×30"), Wood Counter Table (30"×30"×36"h)
  { cat:'Chrome — Dining Tables', id:'chrome-ice-sculpture-table', name:'Ice Sculpture Table', w:5, h:5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(200,230,255,.35)" stroke="rgba(100,170,220,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Dining Tables', id:'chrome-wood-counter-table', name:'Wood Counter Table', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="4%" fill="rgba(160,110,50,.22)" stroke="rgba(140,90,30,.6)" stroke-width="2" stroke-dasharray="5,3"/>` },

  // RATTAN NIGHTSTAND — 24"×20"
  { cat:'Chrome — Dining Tables', id:'chrome-rattan-nightstand', name:'Rattan Nightstand', w:2, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="5%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },

  // ─── CHROME EVENT FURNISHING — HIGH TABLES ─────
  { cat:'Chrome — High Tables', id:'chrome-pub-square', name:'Square Pub Table 32"', w:2.67, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="6%" fill="${c}" opacity=".28" stroke="${c}" stroke-width="2" stroke-dasharray="6,3"/>` },
  { cat:'Chrome — High Tables', id:'chrome-pub-tulip', name:'Tulip Pub Table', w:2.75, h:2.75, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity=".28" stroke="${c}" stroke-width="2" stroke-dasharray="6,3"/>` },
  { cat:'Chrome — High Tables', id:'chrome-pub-legno', name:'Legno Pub Table', w:2.67, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="6%" fill="rgba(160,110,50,.25)" stroke="rgba(140,90,30,.5)" stroke-width="2" stroke-dasharray="6,3"/>` },
  { cat:'Chrome — High Tables', id:'chrome-pub-long', name:'Platform Long Pub Table', w:5, h:1.65, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="${c}" opacity=".28" stroke="${c}" stroke-width="2" stroke-dasharray="6,3"/>` },
  { cat:'Chrome — High Tables', id:'chrome-pub-hanoi', name:'Hanoi Pub Table', w:2.67, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="8%" fill="rgba(160,110,50,.25)" stroke="rgba(140,90,30,.5)" stroke-width="2" stroke-dasharray="6,3"/>` },
  { cat:'Chrome — High Tables', id:'chrome-pub-marble', name:'Marble Square Pub Table', w:2.67, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="6%" fill="rgba(220,210,200,.5)" stroke="#aaa" stroke-width="2" stroke-dasharray="6,3"/>` },

  // ─── CHROME EVENT FURNISHING — COFFEE & END TABLES ─
  // Coffee tables: mostly rectangular 35-48"w × 24-30"d, some round/square
  // End tables: mostly 16-24" square/round
  { cat:'Chrome — Coffee & End Tables', id:'chrome-coffee-cane', name:'Cane Coffee Table', w:4, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="6%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>
      <rect x="10%" y="10%" width="80%" height="80%" rx="4%" fill="rgba(160,110,50,.1)" stroke="rgba(140,90,30,.3)" stroke-width="1"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-coffee-rattan', name:'Rattan Coffee Table', w:3.5, h:2.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="6%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-coffee-marble', name:'Marble Coffee Table', w:3.5, h:2.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="4%" fill="rgba(220,215,205,.5)" stroke="#aaa" stroke-width="2"/>
      <rect x="15%" y="15%" width="70%" height="70%" rx="3%" fill="rgba(210,200,190,.3)"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-coffee-marble-rect', name:'Marble Rect Coffee Table', w:4, h:2.17, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="4%" fill="rgba(220,215,205,.5)" stroke="#aaa" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-coffee-slat', name:'Slat Coffee Table', w:3, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="4%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.5)" stroke-width="2"/>
      <line x1="3%" y1="30%" x2="97%" y2="30%" stroke="rgba(140,90,30,.3)" stroke-width="1"/>
      <line x1="3%" y1="50%" x2="97%" y2="50%" stroke="rgba(140,90,30,.3)" stroke-width="1"/>
      <line x1="3%" y1="70%" x2="97%" y2="70%" stroke="rgba(140,90,30,.3)" stroke-width="1"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-coffee-wired-gold', name:'Wired Gold Coffee Table', w:3.5, h:2.17, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="4%" fill="rgba(200,160,40,.15)" stroke="rgba(180,140,20,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-coffee-reflection', name:'Reflection Coffee Table', w:3.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="4%" fill="rgba(180,180,200,.25)" stroke="rgba(150,150,180,.6)" stroke-width="2"/>
      <rect x="10%" y="10%" width="80%" height="80%" rx="3%" fill="rgba(200,200,220,.15)"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-coffee-root', name:'Root Coffee Table', w:4.25, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="48%" ry="44%" fill="rgba(100,70,30,.2)" stroke="rgba(80,50,15,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-coffee-pebble', name:'Pebble Coffee Table', w:4, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="48%" ry="43%" fill="rgba(130,120,110,.2)" stroke="rgba(100,90,80,.5)" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-coffee-legno-long', name:'Legno Long Coffee Table', w:5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="4%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.5)" stroke-width="2"/>` },

  // End tables: ~16-24" square/round
  { cat:'Chrome — Coffee & End Tables', id:'chrome-end-cane', name:'Cane End Table', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-end-rattan', name:'Rattan End Table', w:1.58, h:1.58, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-end-marble', name:'Marble End Table', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,215,205,.5)" stroke="#aaa" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-end-wired-gold', name:'Wired Gold End Table', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(200,160,40,.18)" stroke="rgba(180,140,20,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-end-reflection', name:'Reflection End Table', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="6%" fill="rgba(180,180,200,.25)" stroke="rgba(150,150,180,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-end-geometric', name:'Geometric End Table', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<polygon points="50,4 96,27 96,73 50,96 4,73 4,27" fill="rgba(180,160,120,.25)" stroke="rgba(140,120,80,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-end-slat', name:'Slat End Table', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="6%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.5)" stroke-width="2"/>
      <line x1="8%" y1="38%" x2="92%" y2="38%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>
      <line x1="8%" y1="62%" x2="92%" y2="62%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-end-white-round', name:'White Round End Table', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(255,255,255,.85)" stroke="#ccc" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-end-brass', name:'Brass End Table', w:1.58, h:1.58, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(180,140,60,.2)" stroke="rgba(160,120,40,.6)" stroke-width="2"/>` },
  { cat:'Chrome — Coffee & End Tables', id:'chrome-end-concrete', name:'Concrete End Table', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="4%" fill="rgba(150,150,150,.3)" stroke="#999" stroke-width="2"/>` },

  // ─── CHROME EVENT FURNISHING — DINING CHAIRS ───
  // Most chairs are 17-23"w × 17-21"d — use ~1.5ft×1.5ft as standard
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-velvet', name:'Velvet Dining Chair', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="${darken(c)}" opacity=".85"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="8%" fill="${c}" opacity=".8" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-touli', name:'Touli Dining Chair', w:1.75, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="${darken(c)}" opacity=".85"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="8%" fill="${c}" opacity=".75" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-ghost', name:'Ghost Dining Chair', w:1.5, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="rgba(200,220,255,.5)" stroke="#aac" stroke-width="1.5"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="8%" fill="rgba(200,220,255,.3)" stroke="#aac" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-cane', name:'Cane Dining Chair', w:1.67, h:1.75, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="rgba(160,110,50,.6)"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="8%" fill="rgba(160,110,50,.35)" stroke="rgba(120,80,20,.6)" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-eames', name:'Eames Dining Chair', w:1.58, h:1.58, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="${darken(c)}" opacity=".7"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="10%" fill="${c}" opacity=".7" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-legno', name:'Legno Dining Chair', w:1.5, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="3%" fill="none" stroke="rgba(140,90,30,.8)" stroke-width="2"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="6%" fill="rgba(160,110,50,.25)" stroke="rgba(140,90,30,.6)" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-metal', name:'Metal Chair', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="3%" fill="none" stroke="#777" stroke-width="2"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="6%" fill="rgba(120,120,120,.2)" stroke="#888" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-bentwood', name:'Bentwood Chair', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="10%" fill="none" stroke="rgba(140,90,30,.8)" stroke-width="2"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="10%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-crossed', name:'Crossed Dining Chair', w:1.5, h:1.58, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="rgba(160,110,50,.5)"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="6%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.5)" stroke-width="1.5"/>
      <line x1="22%" y1="32%" x2="78%" y2="84%" stroke="rgba(140,90,30,.4)" stroke-width="1.5"/>
      <line x1="78%" y1="32%" x2="22%" y2="84%" stroke="rgba(140,90,30,.4)" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-versailles', name:'Versailles Dining Chair', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="${darken(c)}" opacity=".9"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="8%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-rattan', name:'Bistro Dining Chair', w:1.5, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="6%" fill="rgba(160,110,50,.5)"/>
      <ellipse cx="50%" cy="62%" rx="40%" ry="35%" fill="rgba(160,110,50,.25)" stroke="rgba(140,90,30,.5)" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-madeira', name:'Madeira Folding Chair', w:1, h:1.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="12%" y="8%" width="76%" height="12%" rx="4%" fill="rgba(160,110,50,.5)"/>
      <rect x="12%" y="23%" width="76%" height="65%" rx="5%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.5)" stroke-width="1.5"/>` },
  { cat:'Chrome — Dining Chairs', id:'chrome-chair-oro', name:'Oro Dining Chair', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="8%" width="80%" height="14%" rx="4%" fill="rgba(200,160,40,.7)"/>
      <rect x="10%" y="25%" width="80%" height="65%" rx="8%" fill="rgba(200,160,40,.25)" stroke="rgba(180,140,20,.6)" stroke-width="1.5"/>` },

  // ─── CHROME EVENT FURNISHING — FOOD STATIONS ──
  // Straight stations: 4ft=47.5"w×24"d, 6ft=71.25"w×24"d, 8ft=94.5"w×24"d
  // Round station: 180"d = 15ft diameter
  { cat:'Chrome — Food Stations', id:'chrome-food-4ft', name:'Food Station 4ft', w:4, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(139,90,43,.15)" stroke="#8B5A2B" stroke-width="2"/>
      <rect x="1%" y="2%" width="98%" height="36%" rx="3%" fill="rgba(100,60,20,.2)"/>
      <rect x="30%" y="38%" width="40%" height="20%" rx="3%" fill="rgba(100,60,20,.15)" stroke="#8B5A2B" stroke-width="1"/>` },
  { cat:'Chrome — Food Stations', id:'chrome-food-6ft', name:'Food Station 6ft', w:5.94, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(139,90,43,.15)" stroke="#8B5A2B" stroke-width="2"/>
      <rect x="1%" y="2%" width="98%" height="36%" rx="3%" fill="rgba(100,60,20,.2)"/>
      <rect x="20%" y="38%" width="60%" height="20%" rx="3%" fill="rgba(100,60,20,.15)" stroke="#8B5A2B" stroke-width="1"/>` },
  { cat:'Chrome — Food Stations', id:'chrome-food-8ft', name:'Food Station 8ft', w:7.88, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(139,90,43,.15)" stroke="#8B5A2B" stroke-width="2"/>
      <rect x="1%" y="2%" width="98%" height="36%" rx="3%" fill="rgba(100,60,20,.2)"/>
      <rect x="15%" y="38%" width="70%" height="20%" rx="3%" fill="rgba(100,60,20,.15)" stroke="#8B5A2B" stroke-width="1"/>` },
  { cat:'Chrome — Food Stations', id:'chrome-food-round', name:'Round Food Station 15ft', w:15, h:15, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(139,90,43,.15)" stroke="#8B5A2B" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="30%" fill="white" opacity=".7"/>
      <circle cx="50%" cy="50%" r="8%" fill="rgba(100,60,20,.2)"/>` },
  { cat:'Chrome — Food Stations', id:'chrome-food-velvet', name:'Velvet Food Station 6ft', w:5.94, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="${c}" opacity=".2" stroke="${darken(c)}" stroke-width="2"/>
      <rect x="1%" y="2%" width="98%" height="36%" rx="3%" fill="${darken(c)}" opacity=".25"/>` },
  { cat:'Chrome — Food Stations', id:'chrome-food-serpentine-a', name:'Serpentine Station A', w:5.79, h:1.92, unit:'ft',
    draw:(w,h,c)=>`<path d="M2,50 Q25,15 50,50 Q75,85 98,50" stroke="#8B5A2B" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M2,50 Q25,15 50,50 Q75,85 98,50" stroke="rgba(139,90,43,.15)" stroke-width="18" fill="none" stroke-linecap="round"/>` },
  { cat:'Chrome — Food Stations', id:'chrome-food-serpentine-c', name:'Serpentine Station C', w:5.58, h:1.92, unit:'ft',
    draw:(w,h,c)=>`<path d="M2,50 Q25,15 50,50 Q75,85 98,50" stroke="#8B5A2B" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M2,50 Q25,15 50,50 Q75,85 98,50" stroke="rgba(139,90,43,.15)" stroke-width="18" fill="none" stroke-linecap="round"/>` },
  { cat:'Chrome — Food Stations', id:'chrome-food-holz', name:'Holz Food Station', w:7.88, h:1.92, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(160,110,50,.18)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>
      <rect x="1%" y="2%" width="98%" height="36%" rx="3%" fill="rgba(140,90,30,.25)"/>` },
  { cat:'Chrome — Food Stations', id:'chrome-food-odyssey', name:'Odyssey Food Station', w:5.94, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="4%" fill="rgba(180,150,100,.2)" stroke="rgba(160,130,80,.6)" stroke-width="2"/>
      <rect x="1%" y="2%" width="98%" height="36%" rx="3%" fill="rgba(160,130,80,.25)"/>` },
  { cat:'Chrome — Food Stations', id:'chrome-checkin-desk', name:'Check-in Desk', w:3.67, h:1.83, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="5%" fill="rgba(100,100,120,.15)" stroke="#888" stroke-width="2"/>
      <rect x="2%" y="2%" width="96%" height="38%" rx="4%" fill="rgba(80,80,100,.2)"/>
      <rect x="25%" y="45%" width="50%" height="16%" rx="3%" fill="rgba(80,80,100,.12)" stroke="#999" stroke-width="1"/>` },

  // ─── CHROME EVENT FURNISHING — BACKBARS & SHELVING ─
  // Most backbars: 35-88"w × 12-24"d (shallow — display against wall)
  // Shelving units: 35-105"w × 12-20"d (multiple tiers shown as hatching)
  { cat:'Chrome — Backbars & Shelving', id:'chrome-backbar-travertine', name:'Travertine Back Bar', w:5.83, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="5%" width="98%" height="90%" rx="4%" fill="rgba(220,210,195,.4)" stroke="#bbb" stroke-width="2"/>
      <rect x="5%" y="15%" width="90%" height="20%" rx="2%" fill="rgba(200,185,165,.3)" stroke="#bbb" stroke-width="1"/>
      <rect x="5%" y="45%" width="90%" height="20%" rx="2%" fill="rgba(200,185,165,.3)" stroke="#bbb" stroke-width="1"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-backbar-velvet', name:'Velvet Back Bar', w:5.83, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="5%" width="98%" height="90%" rx="4%" fill="${c}" opacity=".25" stroke="${darken(c)}" stroke-width="2"/>
      <rect x="5%" y="15%" width="90%" height="18%" rx="2%" fill="${darken(c)}" opacity=".2"/>
      <rect x="5%" y="45%" width="90%" height="18%" rx="2%" fill="${darken(c)}" opacity=".2"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-backbar-capri', name:'Capri Back Bar', w:5.42, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="5%" width="98%" height="90%" rx="4%" fill="rgba(139,90,43,.18)" stroke="#8B5A2B" stroke-width="2"/>
      <rect x="5%" y="15%" width="90%" height="18%" rx="2%" fill="rgba(100,60,20,.15)"/>
      <rect x="5%" y="45%" width="90%" height="18%" rx="2%" fill="rgba(100,60,20,.15)"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-backbar-fluto', name:'Fluto Back Bar', w:5.83, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="5%" width="98%" height="90%" rx="3%" fill="rgba(180,160,130,.2)" stroke="rgba(140,120,90,.6)" stroke-width="2"/>
      <line x1="20%" y1="5%" x2="20%" y2="95%" stroke="rgba(140,120,90,.3)" stroke-width="1"/>
      <line x1="40%" y1="5%" x2="40%" y2="95%" stroke="rgba(140,120,90,.3)" stroke-width="1"/>
      <line x1="60%" y1="5%" x2="60%" y2="95%" stroke="rgba(140,120,90,.3)" stroke-width="1"/>
      <line x1="80%" y1="5%" x2="80%" y2="95%" stroke="rgba(140,120,90,.3)" stroke-width="1"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-backbar-shine', name:'Shine Back Bar', w:5.83, h:1.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="5%" width="98%" height="90%" rx="4%" fill="rgba(180,180,200,.25)" stroke="rgba(150,150,180,.6)" stroke-width="2"/>
      <rect x="5%" y="15%" width="90%" height="18%" rx="2%" fill="rgba(180,180,200,.2)"/>
      <rect x="5%" y="45%" width="90%" height="18%" rx="2%" fill="rgba(180,180,200,.2)"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-backbar-verona', name:'Verona Back Bar', w:5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="5%" width="98%" height="90%" rx="4%" fill="rgba(255,255,255,.5)" stroke="#ccc" stroke-width="2"/>
      <rect x="5%" y="15%" width="90%" height="18%" rx="2%" fill="rgba(220,220,220,.4)"/>
      <rect x="5%" y="45%" width="90%" height="18%" rx="2%" fill="rgba(220,220,220,.4)"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-backbar-rattan-armoire', name:'Rattan Armoire', w:3.92, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="5%" fill="rgba(160,110,50,.2)" stroke="rgba(140,90,30,.6)" stroke-width="2"/>
      <line x1="50%" y1="2%" x2="50%" y2="98%" stroke="rgba(140,90,30,.4)" stroke-width="1.5"/>
      <rect x="8%" y="20%" width="35%" height="40%" rx="4%" fill="rgba(160,110,50,.15)" stroke="rgba(140,90,30,.3)" stroke-width="1"/>
      <rect x="57%" y="20%" width="35%" height="40%" rx="4%" fill="rgba(160,110,50,.15)" stroke="rgba(140,90,30,.3)" stroke-width="1"/>` },
  // Shelving units — shallow depth (12-20"), shown with shelf lines
  { cat:'Chrome — Backbars & Shelving', id:'chrome-shelving-pine-short-single', name:'Pine Shelving Single Short', w:2.92, h:1, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="4%" fill="rgba(160,110,50,.15)" stroke="rgba(140,90,30,.5)" stroke-width="2"/>
      <line x1="2%" y1="35%" x2="98%" y2="35%" stroke="rgba(140,90,30,.35)" stroke-width="1.5"/>
      <line x1="2%" y1="65%" x2="98%" y2="65%" stroke="rgba(140,90,30,.35)" stroke-width="1.5"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-shelving-pine-short-double', name:'Pine Shelving Double Short', w:6.25, h:1, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="4%" fill="rgba(160,110,50,.15)" stroke="rgba(140,90,30,.5)" stroke-width="2"/>
      <line x1="2%" y1="35%" x2="98%" y2="35%" stroke="rgba(140,90,30,.35)" stroke-width="1.5"/>
      <line x1="2%" y1="65%" x2="98%" y2="65%" stroke="rgba(140,90,30,.35)" stroke-width="1.5"/>
      <line x1="50%" y1="2%" x2="50%" y2="98%" stroke="rgba(140,90,30,.2)" stroke-width="1"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-shelving-pine-short-triple', name:'Pine Shelving Triple Short', w:8.75, h:1, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="4%" fill="rgba(160,110,50,.15)" stroke="rgba(140,90,30,.5)" stroke-width="2"/>
      <line x1="2%" y1="35%" x2="98%" y2="35%" stroke="rgba(140,90,30,.35)" stroke-width="1.5"/>
      <line x1="2%" y1="65%" x2="98%" y2="65%" stroke="rgba(140,90,30,.35)" stroke-width="1.5"/>
      <line x1="33%" y1="2%" x2="33%" y2="98%" stroke="rgba(140,90,30,.2)" stroke-width="1"/>
      <line x1="67%" y1="2%" x2="67%" y2="98%" stroke="rgba(140,90,30,.2)" stroke-width="1"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-shelving-samoa', name:'Samoa Shelving', w:5.83, h:1.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="4%" fill="rgba(160,110,50,.18)" stroke="rgba(140,90,30,.5)" stroke-width="2"/>
      <line x1="2%" y1="30%" x2="98%" y2="30%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>
      <line x1="2%" y1="58%" x2="98%" y2="58%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-shelving-madeira', name:'Madeira Shelving', w:5.83, h:1.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="4%" fill="rgba(160,110,50,.15)" stroke="rgba(140,90,30,.5)" stroke-width="2"/>
      <line x1="2%" y1="28%" x2="98%" y2="28%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>
      <line x1="2%" y1="55%" x2="98%" y2="55%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>
      <line x1="2%" y1="78%" x2="98%" y2="78%" stroke="rgba(140,90,30,.3)" stroke-width="1.5"/>` },
  { cat:'Chrome — Backbars & Shelving', id:'chrome-backbar-10ft', name:'Back Bar 10ft', w:10, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="5%" width="98%" height="90%" rx="3%" fill="rgba(139,90,43,.15)" stroke="#8B5A2B" stroke-width="2"/>
      <rect x="3%" y="15%" width="94%" height="18%" rx="2%" fill="rgba(100,60,20,.15)"/>
      <rect x="3%" y="45%" width="94%" height="18%" rx="2%" fill="rgba(100,60,20,.15)"/>` },

  // ─── CORT BARS / COUNTERS ───
  { cat:'CORT Bars', id:'cort-maxim-bar', name:'Maxim Bar', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(160,100,40,0.22)" stroke="#8B5A2B" stroke-width="2"/>
      <rect x="1%" y="2%" width="98%" height="34%" rx="2%" fill="rgba(120,70,20,0.3)"/>` },

  { cat:'CORT Bars', id:'cort-midtown-bar-circle', name:'Midtown Bar Circle', w:7.25, h:7.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="48%" fill="rgba(160,100,40,0.22)" stroke="#8B5A2B" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="32%" fill="white" opacity=".8"/>` },

  { cat:'CORT Bars', id:'cort-midtown-bar', name:'Midtown Bar', w:5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(160,100,40,0.22)" stroke="#8B5A2B" stroke-width="2"/>
      <rect x="1%" y="2%" width="98%" height="34%" rx="2%" fill="rgba(120,70,20,0.3)"/>` },

  { cat:'CORT Bars', id:'cort-posh-buffet', name:'Posh 6\' Buffet', w:6, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="2%" width="98%" height="96%" rx="3%" fill="rgba(201,147,58,0.12)" stroke="#c9933a" stroke-width="1.8" stroke-dasharray="8,4"/>` },

  // ─── CORT OUTDOOR SOFT SEATING ───
  { cat:'CORT Outdoor Seating', id:'cort-boca-armless', name:'Boca Armless Chair', w:2.33, h:2.08, unit:'ft',
    draw:(w,h,c)=>`<rect x="6%" y="10%" width="88%" height="78%" rx="8%" fill="${c}" opacity=".8"/>` },

  { cat:'CORT Outdoor Seating', id:'cort-boca-loveseat', name:'Boca Loveseat', w:5.5, h:2.75, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="18%" width="96%" height="62%" rx="8%" fill="${c}" opacity=".85"/>
      <rect x="2%" y="5%" width="96%" height="28%" rx="7%" fill="${darken(c)}" opacity=".8"/>
      <rect x="2%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="87%" y="18%" width="11%" height="62%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Outdoor Seating', id:'cort-boca-sectional', name:'Boca Sectional', w:7.83, h:7.83, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="40%" width="58%" height="56%" rx="6%" fill="${c}" opacity=".85"/>
      <rect x="1%" y="28%" width="58%" height="24%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="1%" y="40%" width="12%" height="56%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="40%" y="1%" width="58%" height="46%" rx="6%" fill="${c}" opacity=".85"/>
      <rect x="40%" y="1%" width="58%" height="18%" rx="5%" fill="${darken(c)}" opacity=".8"/>
      <rect x="86%" y="1%" width="12%" height="46%" rx="5%" fill="${darken(c)}" opacity=".8"/>` },

  { cat:'CORT Outdoor Seating', id:'cort-boca-sofa', name:'Boca Sofa', w:7.83, h:2.75, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="18%" width="98%" height="62%" rx="7%" fill="${c}" opacity=".85"/>
      <rect x="1%" y="5%" width="98%" height="28%" rx="6%" fill="${darken(c)}" opacity=".8"/>
      <rect x="1%" y="18%" width="9%" height="62%" rx="4%" fill="${darken(c)}" opacity=".8"/>
      <rect x="90%" y="18%" width="9%" height="62%" rx="4%" fill="${darken(c)}" opacity=".8"/>` },

  // ─── CORT OTTOMANS ─────────────────────────────
  // Beverly Bench Ottoman 60"×20"
  { cat:'CORT Ottomans', id:'cort-beverly-bench', name:'Beverly Bench Ottoman 60"', w:5, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="6%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="15%" y1="5%" x2="15%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>
      <line x1="30%" y1="5%" x2="30%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>
      <line x1="45%" y1="5%" x2="45%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>
      <line x1="60%" y1="5%" x2="60%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>
      <line x1="75%" y1="5%" x2="75%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>
      <line x1="85%" y1="5%" x2="85%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>` },

  // Beverly Oasis Large 139"×80"
  { cat:'CORT Ottomans', id:'cort-beverly-oasis-lg', name:'Beverly Oasis Large Grouping', w:11.58, h:6.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="4%" fill="${c}" opacity=".15" stroke="${c}" stroke-width="1.5" stroke-dasharray="6,3"/>
      <rect x="5%" y="35%" width="40%" height="30%" rx="5%" fill="${c}" opacity=".7" stroke="${darken(c)}" stroke-width="1"/>
      <rect x="55%" y="35%" width="40%" height="30%" rx="5%" fill="${c}" opacity=".7" stroke="${darken(c)}" stroke-width="1"/>
      <rect x="30%" y="5%" width="40%" height="25%" rx="5%" fill="${c}" opacity=".7" stroke="${darken(c)}" stroke-width="1"/>` },

  // Beverly Oasis Medium 100"×80"
  { cat:'CORT Ottomans', id:'cort-beverly-oasis-md', name:'Beverly Oasis Medium Grouping', w:8.33, h:6.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="4%" fill="${c}" opacity=".15" stroke="${c}" stroke-width="1.5" stroke-dasharray="6,3"/>
      <rect x="5%" y="35%" width="40%" height="30%" rx="5%" fill="${c}" opacity=".7" stroke="${darken(c)}" stroke-width="1"/>
      <rect x="55%" y="35%" width="40%" height="30%" rx="5%" fill="${c}" opacity=".7" stroke="${darken(c)}" stroke-width="1"/>` },

  // Beverly Oasis Small 80"×70"
  { cat:'CORT Ottomans', id:'cort-beverly-oasis-sm', name:'Beverly Oasis Small Grouping', w:6.67, h:5.83, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="4%" fill="${c}" opacity=".15" stroke="${c}" stroke-width="1.5" stroke-dasharray="6,3"/>
      <rect x="5%" y="30%" width="42%" height="40%" rx="5%" fill="${c}" opacity=".7" stroke="${darken(c)}" stroke-width="1"/>
      <rect x="53%" y="30%" width="42%" height="40%" rx="5%" fill="${c}" opacity=".7" stroke="${darken(c)}" stroke-width="1"/>` },

  // Beverly Seat Back 30"×20"×28"h
  { cat:'CORT Ottomans', id:'cort-beverly-seatback', name:'Beverly Seat Back', w:2.5, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="8%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="25%" y1="5%" x2="25%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>
      <line x1="50%" y1="5%" x2="50%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>
      <line x1="75%" y1="5%" x2="75%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>` },

  // Beverly Square Ottoman 30"×30"
  { cat:'CORT Ottomans', id:'cort-beverly-square', name:'Beverly Square Ottoman 30"', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="8%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="25%" y1="5%" x2="25%" y2="95%" stroke="${darken(c)}" stroke-width="0.5" opacity=".3"/>
      <line x1="50%" y1="5%" x2="50%" y2="95%" stroke="${darken(c)}" stroke-width="0.5" opacity=".3"/>
      <line x1="75%" y1="5%" x2="75%" y2="95%" stroke="${darken(c)}" stroke-width="0.5" opacity=".3"/>` },

  // Beverly Small Bench Ottoman 30"×24.5"
  { cat:'CORT Ottomans', id:'cort-beverly-small-bench', name:'Beverly Small Bench Ottoman', w:2.5, h:2.04, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="6%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="33%" y1="5%" x2="33%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>
      <line x1="66%" y1="5%" x2="66%" y2="95%" stroke="${darken(c)}" stroke-width="0.8" opacity=".3"/>` },

  // Boho Stool 18.75" round
  { cat:'CORT Ottomans', id:'cort-boho-stool', name:'Boho Stool', w:1.56, h:1.56, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(160,120,60,.7)" stroke="rgba(120,80,30,.8)" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="30%" fill="rgba(140,100,40,.4)" stroke="rgba(120,80,30,.5)" stroke-width="1"/>` },

  // Endless Curved Ottoman 60.5"×37.5"
  { cat:'CORT Ottomans', id:'cort-endless-curved', name:'Endless Curved Ottoman 60"', w:5.04, h:3.13, unit:'ft',
    draw:(w,h,c)=>`<path d="M5,50 Q5,10 50,10 Q95,10 95,50 L95,70 Q95,90 50,90 Q5,90 5,70 Z" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>` },

  // Endless Half Round Ottoman 34.5"×34.5"
  { cat:'CORT Ottomans', id:'cort-endless-halfround', name:'Endless Half Round Ottoman', w:2.88, h:2.88, unit:'ft',
    draw:(w,h,c)=>`<path d="M5,95 L5,50 Q5,5 50,5 Q95,5 95,50 L95,95 Z" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>` },

  // Endless Square Ottoman 34.5"×34.5"
  { cat:'CORT Ottomans', id:'cort-endless-square', name:'Endless Square Ottoman', w:2.88, h:2.88, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="4%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <rect x="15%" y="15%" width="70%" height="70%" rx="3%" fill="none" stroke="${darken(c)}" stroke-width="0.8" opacity=".4"/>` },

  // Marche Boho Ottoman 18" round
  { cat:'CORT Ottomans', id:'cort-marche-boho', name:'Marche Boho Ottoman 18"', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="45%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="28%" fill="none" stroke="${darken(c)}" stroke-width="1" opacity=".5"/>` },

  // Marche Swivel Ottoman 17" round
  { cat:'CORT Ottomans', id:'cort-marche-swivel', name:'Marche Swivel Ottoman 17"', w:1.42, h:1.42, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity=".9" stroke="${darken(c)}" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="12%" fill="${darken(c)}" opacity=".6"/>` },

  // Regis Bench 47"×15.5"
  { cat:'CORT Ottomans', id:'cort-regis-bench', name:'Regis Bench 47"', w:3.92, h:1.29, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="10%" width="96%" height="80%" rx="3%" fill="rgba(180,180,185,.7)" stroke="rgba(160,160,165,.9)" stroke-width="1.5"/>
      <line x1="10%" y1="10%" x2="10%" y2="90%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="20%" y1="10%" x2="20%" y2="90%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="30%" y1="10%" x2="30%" y2="90%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="40%" y1="10%" x2="40%" y2="90%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="60%" y1="10%" x2="60%" y2="90%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="70%" y1="10%" x2="70%" y2="90%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="80%" y1="10%" x2="80%" y2="90%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="90%" y1="10%" x2="90%" y2="90%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>` },

  // Rustique Bench 55"×13.5"
  { cat:'CORT Ottomans', id:'cort-rustique-bench', name:'Rustique Bench 55"', w:4.58, h:1.13, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="8%" width="98%" height="84%" rx="3%" fill="rgba(140,90,40,.7)" stroke="rgba(110,70,25,.8)" stroke-width="1.5"/>
      <rect x="3%" y="12%" width="94%" height="76%" rx="2%" fill="rgba(160,110,55,.4)"/>` },

  // Vibe Boho Ottoman 19"×19"
  { cat:'CORT Ottomans', id:'cort-vibe-boho', name:'Vibe Boho Ottoman 19"', w:1.58, h:1.58, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="5%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="2"/>
      <rect x="15%" y="15%" width="70%" height="70%" rx="4%" fill="none" stroke="${darken(c)}" stroke-width="1" opacity=".4"/>` },

  // Vibe Cube Ottoman 18"×18"
  { cat:'CORT Ottomans', id:'cort-vibe-cube', name:'Vibe Cube Ottoman 18"', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="${c}" opacity=".9" stroke="${darken(c)}" stroke-width="2"/>` },

  // ─── CORT BARSTOOLS ─────────────────────────────
  { cat:'CORT Barstools', id:'cort-banana-barstool', name:'Banana Barstool', w:1.75, h:1.83, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="30%" rx="38%" ry="22%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="50%" y1="52%" x2="50%" y2="88%" stroke="${darken(c)}" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="50%" cy="90%" rx="25%" ry="8%" fill="none" stroke="${darken(c)}" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-blade-barstool', name:'Blade Barstool', w:1.71, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="20%" y="5%" width="60%" height="50%" rx="5%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="30%" y1="55%" x2="30%" y2="90%" stroke="${darken(c)}" stroke-width="2"/>
      <line x1="70%" y1="55%" x2="70%" y2="90%" stroke="${darken(c)}" stroke-width="2"/>
      <line x1="20%" y1="90%" x2="80%" y2="90%" stroke="${darken(c)}" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-chelsea-barstool', name:'Chelsea Barstool', w:1.54, h:1.83, unit:'ft',
    draw:(w,h,c)=>`<path d="M25,5 Q25,5 75,5 Q82,5 82,20 Q82,42 50,42 Q18,42 18,20 Q18,5 25,5 Z" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="50%" y1="42%" x2="50%" y2="88%" stroke="${darken(c)}" stroke-width="3"/>
      <line x1="25%" y1="90%" x2="75%" y2="90%" stroke="${darken(c)}" stroke-width="2"/>` },

  { cat:'CORT Barstools', id:'cort-christopher-barstool', name:'Christopher Barstool', w:1.58, h:1.71, unit:'ft',
    draw:(w,h,c)=>`<rect x="18%" y="5%" width="64%" height="45%" rx="6%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="35%" y1="50%" x2="25%" y2="90%" stroke="${darken(c)}" stroke-width="2"/>
      <line x1="65%" y1="50%" x2="75%" y2="90%" stroke="${darken(c)}" stroke-width="2"/>
      <line x1="20%" y1="72%" x2="80%" y2="72%" stroke="${darken(c)}" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-kamden-barstool', name:'Kamden Barstool', w:1.38, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="28%" rx="35%" ry="22%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="${darken(c)}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="50%" cy="90%" r="10%" fill="none" stroke="${darken(c)}" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-laguna-barstool', name:'Laguna Barstool', w:1.5, h:1.96, unit:'ft',
    draw:(w,h,c)=>`<path d="M20,5 Q20,5 80,5 L75,40 Q50,48 25,40 Z" fill="rgba(200,175,130,.7)" stroke="rgba(160,135,90,.8)" stroke-width="1.5"/>
      <line x1="50%" y1="48%" x2="50%" y2="88%" stroke="${darken(c)}" stroke-width="2.5"/>
      <line x1="25%" y1="90%" x2="75%" y2="90%" stroke="${darken(c)}" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-liberty-barstool', name:'Liberty Barstool', w:1.42, h:1.42, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="30%" r="28%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="50%" y1="58%" x2="50%" y2="88%" stroke="${darken(c)}" stroke-width="2.5"/>
      <circle cx="50%" cy="92%" r="8%" fill="none" stroke="${darken(c)}" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-lift-barstool', name:'Lift Barstool (Adjustable)', w:1.25, h:1.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="28%" r="28%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="50%" y1="56%" x2="50%" y2="82%" stroke="${darken(c)}" stroke-width="3"/>
      <ellipse cx="50%" cy="88%" rx="28%" ry="8%" fill="none" stroke="${darken(c)}" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-lucent-barstool', name:'Lucent Barstool (Acrylic)', w:1.83, h:1.96, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="5%" width="70%" height="50%" rx="5%" fill="rgba(240,248,255,.6)" stroke="rgba(180,220,255,.8)" stroke-width="1.5"/>
      <line x1="30%" y1="55%" x2="25%" y2="90%" stroke="rgba(180,210,240,.9)" stroke-width="2"/>
      <line x1="70%" y1="55%" x2="75%" y2="90%" stroke="rgba(180,210,240,.9)" stroke-width="2"/>
      <line x1="20%" y1="90%" x2="80%" y2="90%" stroke="rgba(180,210,240,.9)" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-marina-barstool', name:'Marina Barstool', w:1.75, h:1.71, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="5%" width="70%" height="48%" rx="5%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="30%" y1="53%" x2="28%" y2="88%" stroke="rgba(180,175,165,.9)" stroke-width="2"/>
      <line x1="70%" y1="53%" x2="72%" y2="88%" stroke="rgba(180,175,165,.9)" stroke-width="2"/>
      <line x1="22%" y1="88%" x2="78%" y2="88%" stroke="rgba(180,175,165,.9)" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-rustique-barstool', name:'Rustique Barstool', w:1.08, h:1.08, unit:'ft',
    draw:(w,h,c)=>`<rect x="20%" y="8%" width="60%" height="45%" rx="4%" fill="rgba(120,115,105,.8)" stroke="rgba(90,85,75,.9)" stroke-width="1.5"/>
      <line x1="30%" y1="53%" x2="28%" y2="90%" stroke="rgba(100,95,85,.9)" stroke-width="2"/>
      <line x1="70%" y1="53%" x2="72%" y2="90%" stroke="rgba(100,95,85,.9)" stroke-width="2"/>
      <line x1="25%" y1="74%" x2="75%" y2="74%" stroke="rgba(100,95,85,.9)" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-shark-barstool', name:'Shark Barstool (Adjustable)', w:1.83, h:1.83, unit:'ft',
    draw:(w,h,c)=>`<path d="M20,5 L80,5 Q88,5 88,20 L88,42 Q88,50 50,50 Q12,50 12,42 L12,20 Q12,5 20,5 Z" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="${darken(c)}" stroke-width="3"/>
      <circle cx="50%" cy="90%" r="10%" fill="none" stroke="${darken(c)}" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-syntax-barstool', name:'Syntax Barstool', w:1.92, h:1.88, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="5%" width="70%" height="52%" rx="5%" fill="rgba(30,30,30,.8)" stroke="rgba(80,80,80,.9)" stroke-width="1.5"/>
      <line x1="30%" y1="57%" x2="28%" y2="90%" stroke="rgba(180,180,180,.8)" stroke-width="2"/>
      <line x1="70%" y1="57%" x2="72%" y2="90%" stroke="rgba(180,180,180,.8)" stroke-width="2"/>
      <line x1="22%" y1="90%" x2="78%" y2="90%" stroke="rgba(180,180,180,.8)" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-zenith-barstool', name:'Zenith Barstool', w:1.58, h:1.83, unit:'ft',
    draw:(w,h,c)=>`<path d="M18,5 Q18,5 82,5 L78,42 Q50,52 22,42 Z" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="50%" y1="52%" x2="50%" y2="88%" stroke="${darken(c)}" stroke-width="2.5"/>
      <line x1="25%" y1="90%" x2="75%" y2="90%" stroke="${darken(c)}" stroke-width="1.5"/>` },

  { cat:'CORT Barstools', id:'cort-zoey-barstool', name:'Zoey Barstool (Adjustable)', w:1.25, h:1.42, unit:'ft',
    draw:(w,h,c)=>`<rect x="20%" y="8%" width="60%" height="42%" rx="6%" fill="${c}" opacity=".85" stroke="${darken(c)}" stroke-width="1.5"/>
      <line x1="50%" y1="50%" x2="50%" y2="82%" stroke="${darken(c)}" stroke-width="3"/>
      <circle cx="50%" cy="90%" r="10%" fill="none" stroke="${darken(c)}" stroke-width="1.5"/>` },

  // ─── CORT BAR & CAFE TABLES ──────────────────────
  { cat:'CORT Bar & Cafe Tables', id:'cort-30-bar-black', name:'30" Round Bar Table (Black Base)', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity=".22" stroke="${c}" stroke-width="1.5" stroke-dasharray="5,3"/>
      <circle cx="50%" cy="50%" r="8%" fill="rgba(30,30,30,.7)"/>` },

  { cat:'CORT Bar & Cafe Tables', id:'cort-30-bar-chrome', name:'30" Round Bar Table (Chrome Base)', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity=".22" stroke="${c}" stroke-width="1.5" stroke-dasharray="5,3"/>
      <circle cx="50%" cy="50%" r="8%" fill="rgba(200,200,205,.8)" stroke="rgba(160,160,165,.9)" stroke-width="1"/>` },

  { cat:'CORT Bar & Cafe Tables', id:'cort-36-bar-black', name:'36" Round Bar Table (Black Base)', w:3, h:3, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity=".22" stroke="${c}" stroke-width="1.5" stroke-dasharray="5,3"/>
      <circle cx="50%" cy="50%" r="7%" fill="rgba(30,30,30,.7)"/>` },

  { cat:'CORT Bar & Cafe Tables', id:'cort-30-cafe-black', name:'30" Round Cafe Table (Black Base)', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity=".2" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="8%" fill="rgba(30,30,30,.7)"/>` },

  { cat:'CORT Bar & Cafe Tables', id:'cort-30-cafe-chrome', name:'30" Round Cafe Table (Chrome Base)', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity=".2" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="8%" fill="rgba(200,200,205,.8)" stroke="rgba(160,160,165,.9)" stroke-width="1"/>` },

  { cat:'CORT Bar & Cafe Tables', id:'cort-36-cafe-black', name:'36" Round Cafe Table (Black Base)', w:3, h:3, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="${c}" opacity=".2" stroke="${c}" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="7%" fill="rgba(30,30,30,.7)"/>` },

  { cat:'CORT Bar & Cafe Tables', id:'cort-posh-bar-table', name:'Posh Bar Table 29"×26"', w:2.42, h:2.17, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="4%" fill="rgba(240,248,255,.4)" stroke="rgba(180,220,255,.8)" stroke-width="2"/>` },

  { cat:'CORT Bar & Cafe Tables', id:'cort-posh-round-bar', name:'Posh Round Bar Table 30"', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(240,248,255,.4)" stroke="rgba(180,220,255,.8)" stroke-width="2"/>` },

  { cat:'CORT Bar & Cafe Tables', id:'cort-rustique-bar-table', name:'Rustique Square Bar Table 24"', w:1.98, h:1.98, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="rgba(120,115,105,.25)" stroke="rgba(90,85,75,.7)" stroke-width="2" stroke-dasharray="5,3"/>` },

  { cat:'CORT Bar & Cafe Tables', id:'cort-sonoma-bar', name:'Sonoma 24" Outdoor Bar Table', w:2, h:2, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(245,245,245,.5)" stroke="rgba(30,30,30,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="8%" fill="rgba(30,30,30,.6)"/>` },

  { cat:'CORT Bar & Cafe Tables', id:'cort-sonoma-cafe', name:'Sonoma 32" Outdoor Cafe Table', w:2.67, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(245,245,245,.5)" stroke="rgba(30,30,30,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="7%" fill="rgba(30,30,30,.6)"/>` },

  // ─── CORT COMMUNAL TABLES ──────────────────────
  { cat:'CORT Communal Tables', id:'cort-lexington-bar', name:'Lexington Communal Bar Table 65"×36"', w:5.42, h:3, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(190,150,80,.25)" stroke="rgba(150,110,40,.7)" stroke-width="1.5"/>
      <rect x="5%" y="10%" width="10%" height="80%" rx="2%" fill="rgba(30,30,30,.6)"/>
      <rect x="85%" y="10%" width="10%" height="80%" rx="2%" fill="rgba(30,30,30,.6)"/>
      <circle cx="35%" cy="50%" r="5%" fill="rgba(200,160,80,.6)" stroke="rgba(160,120,40,.8)" stroke-width="1"/>
      <circle cx="65%" cy="50%" r="5%" fill="rgba(200,160,80,.6)" stroke="rgba(160,120,40,.8)" stroke-width="1"/>` },

  { cat:'CORT Communal Tables', id:'cort-lexington-cafe', name:'Lexington Communal Cafe Table 65"×36"', w:5.42, h:3, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(190,150,80,.25)" stroke="rgba(150,110,40,.7)" stroke-width="1.5"/>
      <rect x="5%" y="10%" width="10%" height="80%" rx="2%" fill="rgba(30,30,30,.6)"/>
      <rect x="85%" y="10%" width="10%" height="80%" rx="2%" fill="rgba(30,30,30,.6)"/>` },

  { cat:'CORT Communal Tables', id:'cort-rustique-comm-bar', name:'Rustique Communal Bar Table 65"×35.5"', w:5.42, h:2.96, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="8%" width="96%" height="84%" rx="3%" fill="rgba(140,90,40,.25)" stroke="rgba(110,70,25,.7)" stroke-width="1.5"/>
      <rect x="5%" y="12%" width="8%" height="76%" rx="2%" fill="rgba(120,80,35,.7)"/>
      <rect x="87%" y="12%" width="8%" height="76%" rx="2%" fill="rgba(120,80,35,.7)"/>` },

  { cat:'CORT Communal Tables', id:'cort-rustique-comm-cafe', name:'Rustique Communal Cafe Table 65"×35.5"', w:5.42, h:2.96, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="8%" width="96%" height="84%" rx="3%" fill="rgba(140,90,40,.2)" stroke="rgba(110,70,25,.7)" stroke-width="1.5"/>
      <rect x="5%" y="12%" width="8%" height="76%" rx="2%" fill="rgba(120,80,35,.6)"/>
      <rect x="87%" y="12%" width="8%" height="76%" rx="2%" fill="rgba(120,80,35,.6)"/>` },

  { cat:'CORT Communal Tables', id:'cort-ventura-bar', name:'Ventura Communal Bar Table 72"×26"', w:6.02, h:2.19, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="8%" width="96%" height="84%" rx="2%" fill="rgba(220,220,220,.35)" stroke="rgba(160,160,165,.8)" stroke-width="1.5"/>
      <rect x="3%" y="10%" width="7%" height="80%" rx="2%" fill="rgba(180,180,185,.7)"/>
      <rect x="90%" y="10%" width="7%" height="80%" rx="2%" fill="rgba(180,180,185,.7)"/>` },

  { cat:'CORT Communal Tables', id:'cort-ventura-cafe', name:'Ventura Communal Cafe Table 72"×26"', w:6.02, h:2.19, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="8%" width="96%" height="84%" rx="2%" fill="rgba(220,220,220,.3)" stroke="rgba(160,160,165,.8)" stroke-width="1.5"/>
      <rect x="3%" y="10%" width="7%" height="80%" rx="2%" fill="rgba(180,180,185,.6)"/>
      <rect x="90%" y="10%" width="7%" height="80%" rx="2%" fill="rgba(180,180,185,.6)"/>` },

  // ─── CORT ACCENT TABLES ─────────────────────────
  { cat:'CORT Accent Tables', id:'cort-adelaide-cocktail', name:'Adelaide Cocktail Table 49"×25"', w:4.07, h:2.11, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="5%" width="94%" height="90%" rx="3%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="1.5"/>
      <rect x="3%" y="5%" width="10%" height="90%" rx="2%" fill="rgba(180,180,185,.5)"/>
      <rect x="87%" y="5%" width="10%" height="90%" rx="2%" fill="rgba(180,180,185,.5)"/>` },

  { cat:'CORT Accent Tables', id:'cort-adelaide-end', name:'Adelaide End Table 21.5"×21.5"', w:1.79, h:1.79, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="1.5"/>
      <rect x="5%" y="5%" width="14%" height="90%" rx="2%" fill="rgba(180,180,185,.5)"/>
      <rect x="81%" y="5%" width="14%" height="90%" rx="2%" fill="rgba(180,180,185,.5)"/>` },

  { cat:'CORT Accent Tables', id:'cort-alondra-cocktail', name:'Alondra Cocktail Table 47"×24"', w:3.92, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="5%" width="94%" height="90%" rx="3%" fill="${c}" opacity=".2" stroke="${c}" stroke-width="1.5"/>
      <line x1="8%" y1="5%" x2="20%" y2="95%" stroke="${c}" stroke-width="2" opacity=".5"/>
      <line x1="92%" y1="5%" x2="80%" y2="95%" stroke="${c}" stroke-width="2" opacity=".5"/>` },

  { cat:'CORT Accent Tables', id:'cort-alondra-end', name:'Alondra End Table 20"×20"', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="${c}" opacity=".2" stroke="${c}" stroke-width="1.5"/>
      <line x1="10%" y1="5%" x2="22%" y2="95%" stroke="${c}" stroke-width="2" opacity=".5"/>
      <line x1="90%" y1="5%" x2="78%" y2="95%" stroke="${c}" stroke-width="2" opacity=".5"/>` },

  { cat:'CORT Accent Tables', id:'cort-cabo-cocktail', name:'Cabo Cocktail Table 50.5"×24"', w:4.21, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(200,165,100,.3)" stroke="rgba(180,140,75,.7)" stroke-width="1.5"/>
      <rect x="5%" y="8%" width="8%" height="84%" rx="2%" fill="rgba(190,155,90,.5)"/>
      <rect x="87%" y="8%" width="8%" height="84%" rx="2%" fill="rgba(190,155,90,.5)"/>` },

  { cat:'CORT Accent Tables', id:'cort-cabo-end', name:'Cabo End Table 22"×22"', w:1.85, h:1.85, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="rgba(200,165,100,.3)" stroke="rgba(180,140,75,.7)" stroke-width="1.5"/>
      <rect x="8%" y="8%" width="12%" height="84%" rx="2%" fill="rgba(190,155,90,.5)"/>
      <rect x="80%" y="8%" width="12%" height="84%" rx="2%" fill="rgba(190,155,90,.5)"/>` },

  { cat:'CORT Accent Tables', id:'cort-galactic-cocktail', name:'Galactic Cocktail Table 27.5"×24"', w:2.29, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="rgba(100,75,50,.25)" stroke="rgba(80,55,30,.7)" stroke-width="1.5"/>
      <polygon points="50,5 95,95 5,95" fill="none" stroke="rgba(80,55,30,.4)" stroke-width="1"/>` },

  { cat:'CORT Accent Tables', id:'cort-galactic-side', name:'Galactic Side Table 20.75"×18"', w:1.73, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="rgba(200,80,30,.35)" stroke="rgba(180,60,20,.7)" stroke-width="1.5"/>` },

  { cat:'CORT Accent Tables', id:'cort-geo-cocktail', name:'Geo Cocktail Table 47"×24"', w:3.92, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="1.5"/>
      <rect x="3%" y="6%" width="12%" height="88%" rx="2%" fill="${c}" opacity=".4"/>
      <rect x="85%" y="6%" width="12%" height="88%" rx="2%" fill="${c}" opacity=".4"/>` },

  { cat:'CORT Accent Tables', id:'cort-geo-end', name:'Geo End Table 20"×20"', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="2%" fill="${c}" opacity=".18" stroke="${c}" stroke-width="1.5"/>
      <rect x="6%" y="6%" width="16%" height="88%" rx="2%" fill="${c}" opacity=".4"/>
      <rect x="78%" y="6%" width="16%" height="88%" rx="2%" fill="${c}" opacity=".4"/>` },

  { cat:'CORT Accent Tables', id:'cort-mesa-cocktail', name:'Mesa Cocktail Table 32"', w:2.69, h:2.69, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(140,90,40,.25)" stroke="rgba(100,65,25,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="10%" fill="rgba(100,65,25,.5)"/>` },

  { cat:'CORT Accent Tables', id:'cort-mesa-end', name:'Mesa End Table 20.5"', w:1.71, h:1.71, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(140,90,40,.25)" stroke="rgba(100,65,25,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="12%" fill="rgba(100,65,25,.5)"/>` },

  { cat:'CORT Accent Tables', id:'cort-posh-cocktail', name:'Posh Cocktail Table 30" (Lighted)', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(240,248,255,.5)" stroke="rgba(180,220,255,.8)" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="30%" fill="rgba(220,238,255,.6)" stroke="rgba(180,220,255,.6)" stroke-width="1"/>` },

  { cat:'CORT Accent Tables', id:'cort-silverado-cocktail', name:'Silverado Cocktail Table 36"', w:3, h:3, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(210,230,240,.4)" stroke="rgba(180,200,215,.8)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="38%" fill="none" stroke="rgba(180,200,215,.5)" stroke-width="1"/>` },

  { cat:'CORT Accent Tables', id:'cort-silverado-end', name:'Silverado End Table 24"', w:2, h:2, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(210,230,240,.4)" stroke="rgba(180,200,215,.8)" stroke-width="1.5"/>` },

  { cat:'CORT Accent Tables', id:'cort-thira-table', name:'Thira Table 30" (Marble)', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(210,205,195,.5)" stroke="rgba(160,155,140,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="10%" fill="rgba(130,100,70,.5)"/>` },

  { cat:'CORT Accent Tables', id:'cort-timber-cocktail', name:'Timber Cocktail Table 30"', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(150,95,45,.35)" stroke="rgba(110,65,20,.7)" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="32%" fill="rgba(130,80,35,.2)" stroke="rgba(110,65,20,.4)" stroke-width="1"/>` },

  { cat:'CORT Accent Tables', id:'cort-timber-end', name:'Timber End Table 16"', w:1.33, h:1.33, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(150,95,45,.35)" stroke="rgba(110,65,20,.7)" stroke-width="2"/>` },

  { cat:'CORT Accent Tables', id:'cort-regis-end', name:'Regis End Table 16"', w:1.33, h:1.29, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="rgba(180,180,185,.4)" stroke="rgba(160,160,165,.8)" stroke-width="1.5"/>
      <line x1="15%" y1="5%" x2="15%" y2="95%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="30%" y1="5%" x2="30%" y2="95%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="50%" y1="5%" x2="50%" y2="95%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="70%" y1="5%" x2="70%" y2="95%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>
      <line x1="85%" y1="5%" x2="85%" y2="95%" stroke="rgba(200,200,205,.9)" stroke-width="1"/>` },

  // ─── CORT SIDE TABLES ──────────────────────────
  { cat:'CORT Side Tables', id:'cort-aura-round', name:'Aura Round Table 15"', w:1.25, h:1.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(230,230,235,.6)" stroke="rgba(180,180,185,.8)" stroke-width="2"/>` },

  { cat:'CORT Side Tables', id:'cort-brisbane-end', name:'Brisbane End Table 25"', w:2.08, h:2.08, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(30,30,30,.3)" stroke="rgba(20,20,20,.7)" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="38%" fill="none" stroke="rgba(80,80,80,.4)" stroke-width="1"/>` },

  { cat:'CORT Side Tables', id:'cort-cayman-side', name:'Cayman Side Table 11"', w:0.92, h:0.92, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(30,25,20,.6)" stroke="rgba(20,15,10,.8)" stroke-width="2"/>` },

  { cat:'CORT Side Tables', id:'cort-dorado-side', name:'Dorado Side Table 15"', w:1.25, h:1.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(185,150,75,.5)" stroke="rgba(160,125,55,.8)" stroke-width="2"/>` },

  { cat:'CORT Side Tables', id:'cort-jacob-wood', name:'Jacob Wood Table 14"×14"', w:1.17, h:1.17, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="4%" fill="rgba(90,55,25,.5)" stroke="rgba(70,40,15,.7)" stroke-width="2"/>` },

  { cat:'CORT Side Tables', id:'cort-sedona-side', name:'Sedona Side Table 15.75"', w:1.31, h:1.31, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="${c}" opacity=".25" stroke="${c}" stroke-width="1.5"/>
      <rect x="5%" y="5%" width="18%" height="90%" rx="2%" fill="${c}" opacity=".4"/>` },

  { cat:'CORT Side Tables', id:'cort-sofia-side', name:'Sofia Side Table 15.5"', w:1.29, h:1.29, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(30,25,20,.5)" stroke="rgba(20,15,10,.7)" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="28%" fill="rgba(50,40,30,.3)"/>` },

  { cat:'CORT Side Tables', id:'cort-taos-side', name:'Taos Side Table 15.75"', w:1.31, h:1.31, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="${c}" opacity=".25" stroke="${c}" stroke-width="1.5"/>
      <rect x="5%" y="5%" width="18%" height="90%" rx="2%" fill="${c}" opacity=".35"/>` },

  { cat:'CORT Side Tables', id:'cort-twist-side', name:'Twist Side Table 14"×14"', w:1.17, h:1.17, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="3%" fill="rgba(185,150,75,.5)" stroke="rgba(160,125,55,.8)" stroke-width="2"/>` },

  { cat:'CORT Side Tables', id:'cort-wireless-charging-table', name:'Wireless Charging Table 20"×20"', w:1.67, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="4%" fill="rgba(220,220,225,.6)" stroke="rgba(180,180,185,.8)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="20%" fill="none" stroke="rgba(74,158,255,.6)" stroke-width="2" stroke-dasharray="4,2"/>` },

  // ─── CORT GREENERY & PLANTERS ────────────────────
  { cat:'CORT Greenery', id:'cort-boxwood-hedge-7', name:'Boxwood Hedge 7\' (36.5"×12")', w:3.04, h:1, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="75%" rx="3%" fill="rgba(40,100,40,.7)" stroke="rgba(20,70,20,.8)" stroke-width="1.5"/>
      <rect x="5%" y="77%" width="90%" height="18%" rx="2%" fill="rgba(50,40,30,.6)"/>` },

  { cat:'CORT Greenery', id:'cort-boxwood-hedge-8', name:'Boxwood Hedge 8\' (36.5"×12")', w:3.04, h:1, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="78%" rx="3%" fill="rgba(40,100,40,.7)" stroke="rgba(20,70,20,.8)" stroke-width="1.5"/>
      <rect x="5%" y="80%" width="90%" height="15%" rx="2%" fill="rgba(245,245,245,.7)" stroke="rgba(200,200,200,.5)" stroke-width="1"/>` },

  { cat:'CORT Greenery', id:'cort-boxwood-hedge-4', name:'Boxwood Hedge 4\' (46"×9")', w:3.83, h:0.75, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="72%" rx="3%" fill="rgba(40,100,40,.7)" stroke="rgba(20,70,20,.8)" stroke-width="1.5"/>
      <rect x="5%" y="77%" width="90%" height="18%" rx="2%" fill="rgba(50,40,30,.6)"/>` },

  { cat:'CORT Greenery', id:'cort-grass-centerpiece', name:'Grass Centerpiece 27.5"×4"', w:2.29, h:0.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="10%" width="96%" height="60%" rx="2%" fill="rgba(60,130,60,.7)" stroke="rgba(30,100,30,.8)" stroke-width="1.5"/>
      <rect x="5%" y="70%" width="90%" height="25%" rx="2%" fill="rgba(50,40,30,.6)"/>` },

  { cat:'CORT Greenery', id:'cort-havana-palm-6', name:'Havana Palm 6\' (18"×18")', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="35%" rx="38%" ry="32%" fill="rgba(40,110,40,.6)" stroke="rgba(20,80,20,.7)" stroke-width="1.5"/>
      <rect x="35%" y="62%" width="30%" height="30%" rx="4%" fill="rgba(245,245,245,.7)" stroke="rgba(210,210,210,.6)" stroke-width="1"/>` },

  { cat:'CORT Greenery', id:'cort-havana-palm-8', name:'Havana Palm Divider 8\' (44"×24")', w:3.67, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="65%" rx="3%" fill="rgba(40,110,40,.6)" stroke="rgba(20,80,20,.7)" stroke-width="1.5"/>
      <rect x="5%" y="68%" width="90%" height="28%" rx="3%" fill="rgba(245,245,245,.7)" stroke="rgba(210,210,210,.6)" stroke-width="1"/>` },

  { cat:'CORT Greenery', id:'cort-lagos-tree-med', name:'Lagos Tree Medium 70"H', w:4.42, h:4.42, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="35%" rx="42%" ry="32%" fill="rgba(50,110,40,.65)" stroke="rgba(30,80,20,.7)" stroke-width="1.5"/>
      <ellipse cx="50%" cy="80%" rx="22%" ry="18%" fill="rgba(190,120,60,.7)" stroke="rgba(160,90,40,.8)" stroke-width="1.5"/>` },

  { cat:'CORT Greenery', id:'cort-lagos-tree-lg', name:'Lagos Tree Large 93"H', w:4.42, h:4.42, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="30%" rx="44%" ry="28%" fill="rgba(50,110,40,.65)" stroke="rgba(30,80,20,.7)" stroke-width="1.5"/>
      <ellipse cx="50%" cy="75%" rx="20%" ry="22%" fill="rgba(190,120,60,.7)" stroke="rgba(160,90,40,.8)" stroke-width="1.5"/>` },

  { cat:'CORT Greenery', id:'cort-palm-tree', name:'Palm Tree 84"H (15.75"×15.75")', w:1.31, h:1.31, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="30%" rx="40%" ry="28%" fill="rgba(40,110,40,.6)" stroke="rgba(20,80,20,.7)" stroke-width="1.5"/>
      <rect x="38%" y="54%" width="24%" height="38%" rx="3%" fill="rgba(50,40,30,.7)"/>` },

  { cat:'CORT Greenery', id:'cort-planter-divider', name:'Planter Divider 47"×17.5" (Bronze)', w:3.92, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="30%" width="96%" height="68%" rx="5%" fill="rgba(100,65,35,.6)" stroke="rgba(80,50,25,.7)" stroke-width="1.5"/>` },

  { cat:'CORT Greenery', id:'cort-planter-divider-fern', name:'Planter Divider w/ Fern 47"', w:3.92, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="28%" rx="46%" ry="25%" fill="rgba(50,120,50,.55)" stroke="rgba(30,90,30,.7)" stroke-width="1"/>
      <rect x="2%" y="48%" width="96%" height="48%" rx="5%" fill="rgba(100,65,35,.6)" stroke="rgba(80,50,25,.7)" stroke-width="1.5"/>` },

  { cat:'CORT Greenery', id:'cort-planter-pot', name:'Planter Pot 17.75" Round (Bronze)', w:1.48, h:1.48, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="60%" rx="44%" ry="38%" fill="rgba(100,65,35,.6)" stroke="rgba(80,50,25,.7)" stroke-width="1.5"/>
      <ellipse cx="50%" cy="25%" rx="38%" ry="22%" fill="rgba(80,50,25,.4)"/>` },

  { cat:'CORT Greenery', id:'cort-planter-pot-fern', name:'Planter Pot w/ Fern 17.75" Round', w:1.48, h:1.48, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="28%" rx="44%" ry="26%" fill="rgba(50,120,50,.6)" stroke="rgba(30,90,30,.7)" stroke-width="1"/>
      <ellipse cx="50%" cy="68%" rx="38%" ry="30%" fill="rgba(100,65,35,.6)" stroke="rgba(80,50,25,.7)" stroke-width="1.5"/>` },

  { cat:'CORT Greenery', id:'cort-succulent-bowl', name:'Succulent Bowl 10" Round', w:0.83, h:0.83, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="55%" r="42%" fill="rgba(200,165,100,.6)" stroke="rgba(170,130,70,.7)" stroke-width="1.5"/>
      <circle cx="35%" cy="42%" r="16%" fill="rgba(50,120,60,.7)"/>
      <circle cx="60%" cy="38%" r="12%" fill="rgba(60,130,50,.7)"/>
      <circle cx="50%" cy="55%" r="10%" fill="rgba(80,140,60,.6)"/>` },

  // ─── CORT OFFICE & STORAGE ───────────────────────
  { cat:'CORT Office & Storage', id:'cort-conf-table-5', name:'5\' Conference Table 60"×48"', w:5, h:4, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(220,220,225,.4)" stroke="rgba(160,160,165,.7)" stroke-width="1.5"/>
      <circle cx="25%" cy="50%" r="5%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>
      <circle cx="50%" cy="50%" r="5%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>
      <circle cx="75%" cy="50%" r="5%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>` },

  { cat:'CORT Office & Storage', id:'cort-conf-table-8', name:'8\' Conference Table 96"×60"', w:8, h:5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(220,220,225,.4)" stroke="rgba(160,160,165,.7)" stroke-width="1.5"/>
      <circle cx="20%" cy="50%" r="4%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>
      <circle cx="40%" cy="50%" r="4%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>
      <circle cx="60%" cy="50%" r="4%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>
      <circle cx="80%" cy="50%" r="4%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>` },

  { cat:'CORT Office & Storage', id:'cort-conf-table-10', name:'10\' Conference Table 120"×48"', w:10, h:4, unit:'ft',
    draw:(w,h,c)=>`<rect x="1%" y="5%" width="98%" height="90%" rx="2%" fill="rgba(220,220,225,.4)" stroke="rgba(160,160,165,.7)" stroke-width="1.5"/>
      <circle cx="15%" cy="50%" r="3.5%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>
      <circle cx="30%" cy="50%" r="3.5%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>
      <circle cx="50%" cy="50%" r="3.5%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>
      <circle cx="70%" cy="50%" r="3.5%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>
      <circle cx="85%" cy="50%" r="3.5%" fill="rgba(74,158,255,.4)" stroke="rgba(74,158,255,.6)" stroke-width="1"/>` },

  { cat:'CORT Office & Storage', id:'cort-conf-table-42round', name:'42" Round Conference Table', w:3.5, h:3.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,220,225,.4)" stroke="rgba(160,160,165,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="10%" fill="rgba(30,30,30,.5)"/>` },

  { cat:'CORT Office & Storage', id:'cort-madison-desk', name:'Madison Executive Desk 60"×30"', w:5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(100,75,50,.25)" stroke="rgba(80,55,30,.7)" stroke-width="1.5"/>
      <rect x="2%" y="5%" width="18%" height="90%" rx="3%" fill="rgba(80,55,30,.3)"/>` },

  { cat:'CORT Office & Storage', id:'cort-tech-desk', name:'Tech Desk Powered 60"×30"', w:5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(30,30,30,.3)" stroke="rgba(20,20,20,.7)" stroke-width="1.5"/>
      <circle cx="85%" cy="50%" r="6%" fill="rgba(74,158,255,.5)" stroke="rgba(74,158,255,.7)" stroke-width="1"/>` },

  { cat:'CORT Office & Storage', id:'cort-geometric-shelving', name:'Geometric Shelving 30"×16"×85"', w:2.5, h:1.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="2%" width="90%" height="96%" rx="2%" fill="rgba(140,95,50,.3)" stroke="rgba(100,65,25,.7)" stroke-width="1.5"/>
      <line x1="5%" y1="25%" x2="95%" y2="25%" stroke="rgba(100,65,25,.5)" stroke-width="1"/>
      <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="rgba(100,65,25,.5)" stroke-width="1"/>
      <line x1="5%" y1="75%" x2="95%" y2="75%" stroke="rgba(100,65,25,.5)" stroke-width="1"/>` },

  { cat:'CORT Office & Storage', id:'cort-madison-bookcase', name:'Madison Bookcase 36"×12"×72"', w:3, h:1, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="2%" fill="rgba(100,75,50,.3)" stroke="rgba(80,55,30,.7)" stroke-width="1.5"/>
      <line x1="2%" y1="25%" x2="98%" y2="25%" stroke="rgba(80,55,30,.5)" stroke-width="1"/>
      <line x1="2%" y1="50%" x2="98%" y2="50%" stroke="rgba(80,55,30,.5)" stroke-width="1"/>
      <line x1="2%" y1="75%" x2="98%" y2="75%" stroke="rgba(80,55,30,.5)" stroke-width="1"/>` },

  { cat:'CORT Office & Storage', id:'cort-posh-shelving', name:'Posh Shelving 36"×18"×72"', w:3, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="2%" width="96%" height="96%" rx="2%" fill="rgba(240,248,255,.3)" stroke="rgba(180,220,255,.7)" stroke-width="1.5"/>
      <line x1="2%" y1="20%" x2="98%" y2="20%" stroke="rgba(180,220,255,.5)" stroke-width="1"/>
      <line x1="2%" y1="40%" x2="98%" y2="40%" stroke="rgba(180,220,255,.5)" stroke-width="1"/>
      <line x1="2%" y1="60%" x2="98%" y2="60%" stroke="rgba(180,220,255,.5)" stroke-width="1"/>
      <line x1="2%" y1="80%" x2="98%" y2="80%" stroke="rgba(180,220,255,.5)" stroke-width="1"/>` },

  { cat:'CORT Office & Storage', id:'cort-3drawer-file', name:'3 Drawer File Cabinet 16"×20"', w:1.33, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="2%" width="90%" height="96%" rx="3%" fill="rgba(30,30,30,.5)" stroke="rgba(20,20,20,.7)" stroke-width="1.5"/>
      <line x1="5%" y1="35%" x2="95%" y2="35%" stroke="rgba(80,80,80,.6)" stroke-width="1"/>
      <line x1="5%" y1="67%" x2="95%" y2="67%" stroke="rgba(80,80,80,.6)" stroke-width="1"/>
      <circle cx="50%" cy="18%" r="4%" fill="rgba(150,150,150,.6)"/>
      <circle cx="50%" cy="51%" r="4%" fill="rgba(150,150,150,.6)"/>
      <circle cx="50%" cy="84%" r="4%" fill="rgba(150,150,150,.6)"/>` },

  { cat:'CORT Office & Storage', id:'cort-whiteboard-divider', name:'Freestanding Whiteboard 39"×72"', w:3.25, h:0.13, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(255,255,255,.9)" stroke="rgba(180,180,185,.7)" stroke-width="1.5"/>
      <line x1="8%" y1="20%" x2="60%" y2="20%" stroke="rgba(74,158,255,.4)" stroke-width="1"/>
      <line x1="8%" y1="40%" x2="45%" y2="40%" stroke="rgba(74,158,255,.4)" stroke-width="1"/>` },

  { cat:'CORT Office & Storage', id:'cort-stanchion', name:'Stanchion w/ Retractable Belt', w:0.83, h:0.13, unit:'ft',
    draw:(w,h,c)=>`<circle cx="20%" cy="50%" r="14%" fill="rgba(180,180,185,.7)" stroke="rgba(140,140,145,.8)" stroke-width="1.5"/>
      <line x1="34%" y1="50%" x2="100%" y2="50%" stroke="rgba(30,30,30,.6)" stroke-width="2"/>
      <circle cx="90%" cy="50%" r="10%" fill="rgba(180,180,185,.7)" stroke="rgba(140,140,145,.8)" stroke-width="1.5"/>` },

  // ─── CORT COUNTERS & PEDESTALS ────────────────────
  { cat:'CORT Counters', id:'cort-maxim-counter-black', name:'Maxim Counter Black 36"×24"×41"', w:3, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="3%" fill="rgba(20,20,20,.7)" stroke="rgba(50,50,55,.8)" stroke-width="1.5"/>
      <rect x="8%" y="8%" width="84%" height="84%" rx="2%" fill="rgba(30,30,35,.5)"/>` },

  { cat:'CORT Counters', id:'cort-maxim-counter-white', name:'Maxim Counter White 36"×24"×41"', w:3, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="3%" fill="rgba(245,245,248,.8)" stroke="rgba(200,200,205,.8)" stroke-width="1.5"/>
      <rect x="8%" y="8%" width="84%" height="84%" rx="2%" fill="rgba(255,255,255,.6)"/>` },

  { cat:'CORT Counters', id:'cort-midtown-counter', name:'Midtown Powered Counter 60"×18"', w:5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(50,45,40,.6)" stroke="rgba(80,70,60,.7)" stroke-width="1.5"/>
      <circle cx="35%" cy="50%" r="6%" fill="rgba(74,158,255,.5)" stroke="rgba(74,158,255,.7)" stroke-width="1"/>
      <circle cx="65%" cy="50%" r="6%" fill="rgba(74,158,255,.5)" stroke="rgba(74,158,255,.7)" stroke-width="1"/>` },

  { cat:'CORT Counters', id:'cort-midtown-circle', name:'Midtown Counter Circle 87" Round', w:7.25, h:7.25, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(50,45,40,.3)" stroke="rgba(80,70,60,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>
      <circle cx="50%" cy="50%" r="30%" fill="rgba(50,45,40,.5)" stroke="rgba(80,70,60,.5)" stroke-width="1"/>` },

  { cat:'CORT Counters', id:'cort-posh-pedestal-20', name:'Posh Pedestal 20" (Lighted)', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="10%" width="80%" height="80%" rx="4%" fill="rgba(240,248,255,.6)" stroke="rgba(180,220,255,.8)" stroke-width="2"/>` },

  { cat:'CORT Counters', id:'cort-posh-pedestal-42', name:'Posh Pedestal 42" (Lighted)', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="5%" width="80%" height="90%" rx="4%" fill="rgba(240,248,255,.6)" stroke="rgba(180,220,255,.8)" stroke-width="2"/>` },

  { cat:'CORT Counters', id:'cort-posh-column-62', name:'Posh Column 62" (Lighted)', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="3%" width="70%" height="94%" rx="4%" fill="rgba(240,248,255,.6)" stroke="rgba(180,220,255,.8)" stroke-width="2"/>` },

  { cat:'CORT Counters', id:'cort-posh-column-84', name:'Posh Column 84" (Lighted)', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="2%" width="70%" height="96%" rx="4%" fill="rgba(240,248,255,.7)" stroke="rgba(180,220,255,.8)" stroke-width="2"/>` },

  // ─── NUAGE — CHAIRS & STOOLS ─────────────────────
  // Soho Chair/Stool 18.5"×17.5" — wire metal frame
  { cat:'Nuage — Chairs', id:'nuage-soho-chair-white', name:'White Soho Chair', w:1.54, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="20%" width="70%" height="60%" rx="6%" fill="rgba(240,240,240,.8)" stroke="rgba(180,180,185,.9)" stroke-width="1.5"/>
      <rect x="15%" y="5%" width="70%" height="22%" rx="5%" fill="none" stroke="rgba(180,180,185,.7)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-soho-stool-white', name:'White Soho Stool', w:1.54, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="35%" rx="35%" ry="28%" fill="rgba(240,240,240,.8)" stroke="rgba(180,180,185,.9)" stroke-width="1.5"/>
      <line x1="35%" y1="60%" x2="30%" y2="92%" stroke="rgba(180,180,185,.8)" stroke-width="2"/>
      <line x1="65%" y1="60%" x2="70%" y2="92%" stroke="rgba(180,180,185,.8)" stroke-width="2"/>
      <line x1="30%" y1="78%" x2="70%" y2="78%" stroke="rgba(180,180,185,.6)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-soho-chair-gold', name:'Gold Soho Chair', w:1.54, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="20%" width="70%" height="60%" rx="6%" fill="rgba(210,165,60,.35)" stroke="rgba(185,145,40,.8)" stroke-width="1.5"/>
      <rect x="15%" y="5%" width="70%" height="22%" rx="5%" fill="none" stroke="rgba(185,145,40,.6)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-soho-stool-gold', name:'Gold Soho Stool', w:1.54, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="35%" rx="35%" ry="28%" fill="rgba(210,165,60,.35)" stroke="rgba(185,145,40,.8)" stroke-width="1.5"/>
      <line x1="35%" y1="60%" x2="30%" y2="92%" stroke="rgba(185,145,40,.7)" stroke-width="2"/>
      <line x1="65%" y1="60%" x2="70%" y2="92%" stroke="rgba(185,145,40,.7)" stroke-width="2"/>
      <line x1="30%" y1="78%" x2="70%" y2="78%" stroke="rgba(185,145,40,.5)" stroke-width="1"/>` },

  // Sienna Chair/Stool 18"×18" wooden frame cushioned
  { cat:'Nuage — Chairs', id:'nuage-sienna-chair', name:'Sienna Chair', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="12%" y="22%" width="76%" height="58%" rx="5%" fill="rgba(220,210,190,.7)" stroke="rgba(160,140,100,.7)" stroke-width="1.5"/>
      <rect x="18%" y="6%" width="64%" height="24%" rx="5%" fill="rgba(180,160,120,.4)" stroke="rgba(160,140,100,.6)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-sienna-stool', name:'Sienna Stool', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="32%" rx="36%" ry="25%" fill="rgba(220,210,190,.7)" stroke="rgba(160,140,100,.7)" stroke-width="1.5"/>
      <line x1="32%" y1="55%" x2="28%" y2="90%" stroke="rgba(160,140,100,.7)" stroke-width="2"/>
      <line x1="68%" y1="55%" x2="72%" y2="90%" stroke="rgba(160,140,100,.7)" stroke-width="2"/>
      <line x1="25%" y1="74%" x2="75%" y2="74%" stroke="rgba(160,140,100,.5)" stroke-width="1"/>` },

  // Avignon Chair/Stool rattan back
  { cat:'Nuage — Chairs', id:'nuage-avignon-chair', name:'Avignon Chair', w:1.5, h:1.54, unit:'ft',
    draw:(w,h,c)=>`<rect x="12%" y="22%" width="76%" height="58%" rx="5%" fill="rgba(215,200,170,.65)" stroke="rgba(170,145,100,.7)" stroke-width="1.5"/>
      <rect x="18%" y="5%" width="64%" height="24%" rx="4%" fill="rgba(180,155,110,.35)" stroke="rgba(155,130,90,.6)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-avignon-stool', name:'Avignon Stool', w:1.5, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="30%" rx="35%" ry="23%" fill="rgba(215,200,170,.65)" stroke="rgba(170,145,100,.7)" stroke-width="1.5"/>
      <line x1="32%" y1="52%" x2="28%" y2="90%" stroke="rgba(170,145,100,.7)" stroke-width="2"/>
      <line x1="68%" y1="52%" x2="72%" y2="90%" stroke="rgba(170,145,100,.7)" stroke-width="2"/>` },

  // Granada Chair linen/cane 18.75"×19.5"
  { cat:'Nuage — Chairs', id:'nuage-granada-linen', name:'Granada Chair Linen', w:1.56, h:1.63, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="20%" width="80%" height="60%" rx="6%" fill="rgba(230,220,200,.7)" stroke="rgba(170,150,110,.7)" stroke-width="1.5"/>
      <rect x="18%" y="4%" width="64%" height="24%" rx="5%" fill="rgba(200,185,160,.4)" stroke="rgba(170,150,110,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-granada-cane', name:'Granada Chair Cane', w:1.56, h:1.63, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="20%" width="80%" height="60%" rx="6%" fill="rgba(215,200,170,.6)" stroke="rgba(160,135,95,.7)" stroke-width="1.5"/>
      <rect x="18%" y="4%" width="64%" height="22%" rx="5%" fill="rgba(185,160,120,.3)" stroke="rgba(160,135,95,.5)" stroke-width="1"/>` },

  // Stockholm Chair/Stool wishbone style 16.5"×18"
  { cat:'Nuage — Chairs', id:'nuage-stockholm-chair', name:'Stockholm Chair', w:1.38, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="25%" width="70%" height="55%" rx="5%" fill="rgba(215,200,170,.65)" stroke="rgba(160,135,95,.7)" stroke-width="1.5"/>
      <path d="M30,8 Q50,22 70,8" fill="none" stroke="rgba(160,135,95,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Chairs', id:'nuage-stockholm-stool', name:'Stockholm Stool', w:1.33, h:1.42, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="30%" rx="34%" ry="22%" fill="rgba(215,200,170,.65)" stroke="rgba(160,135,95,.7)" stroke-width="1.5"/>
      <line x1="32%" y1="50%" x2="28%" y2="90%" stroke="rgba(160,135,95,.7)" stroke-width="2"/>
      <line x1="68%" y1="50%" x2="72%" y2="90%" stroke="rgba(160,135,95,.7)" stroke-width="2"/>
      <line x1="26%" y1="72%" x2="74%" y2="72%" stroke="rgba(160,135,95,.5)" stroke-width="1"/>` },

  // Bentwood Chair/Stool rattan seat
  { cat:'Nuage — Chairs', id:'nuage-bentwood-chair', name:'Bentwood Chair', w:1.33, h:1.38, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="22%" width="70%" height="58%" rx="8%" fill="rgba(180,145,95,.5)" stroke="rgba(140,105,60,.7)" stroke-width="1.5"/>
      <ellipse cx="50%" cy="5%" rx="30%" ry="10%" fill="none" stroke="rgba(140,105,60,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-bentwood-stool', name:'Bentwood Stool', w:1.33, h:1.38, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="28%" rx="33%" ry="22%" fill="rgba(180,145,95,.5)" stroke="rgba(140,105,60,.7)" stroke-width="1.5"/>
      <line x1="30%" y1="48%" x2="25%" y2="90%" stroke="rgba(140,105,60,.7)" stroke-width="2"/>
      <line x1="70%" y1="48%" x2="75%" y2="90%" stroke="rgba(140,105,60,.7)" stroke-width="2"/>
      <line x1="22%" y1="72%" x2="78%" y2="72%" stroke="rgba(140,105,60,.5)" stroke-width="1"/>` },

  // Maison Dining Chair/Bar Stool upholstered
  { cat:'Nuage — Chairs', id:'nuage-maison-chair', name:'Maison Dining Chair', w:1.63, h:1.52, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="35%" rx="38%" ry="30%" fill="rgba(220,210,190,.7)" stroke="rgba(160,140,105,.7)" stroke-width="1.5"/>
      <ellipse cx="50%" cy="12%" rx="28%" ry="14%" fill="rgba(185,165,130,.4)" stroke="rgba(160,140,105,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-maison-stool', name:'Maison Bar Stool', w:1.54, h:1.56, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="28%" rx="35%" ry="24%" fill="rgba(220,210,190,.7)" stroke="rgba(160,140,105,.7)" stroke-width="1.5"/>
      <ellipse cx="50%" cy="8%" rx="25%" ry="12%" fill="rgba(185,165,130,.35)" stroke="rgba(160,140,105,.5)" stroke-width="1"/>
      <line x1="32%" y1="50%" x2="28%" y2="90%" stroke="rgba(160,140,105,.7)" stroke-width="2"/>
      <line x1="68%" y1="50%" x2="72%" y2="90%" stroke="rgba(160,140,105,.7)" stroke-width="2"/>` },

  // Willow Chair/Stool rattan seat natural/black/white
  { cat:'Nuage — Chairs', id:'nuage-willow-chair', name:'Willow Chair', w:1.33, h:1.29, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="22%" width="72%" height="58%" rx="6%" fill="rgba(175,140,90,.5)" stroke="rgba(135,100,55,.7)" stroke-width="1.5"/>
      <path d="M20,22 L15,6 M40,22 L35,6 M60,22 L65,6 M80,22 L85,6" fill="none" stroke="rgba(135,100,55,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-willow-stool', name:'Willow Stool', w:1.35, h:1.31, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="28%" rx="34%" ry="22%" fill="rgba(175,140,90,.5)" stroke="rgba(135,100,55,.7)" stroke-width="1.5"/>
      <line x1="30%" y1="48%" x2="26%" y2="90%" stroke="rgba(135,100,55,.7)" stroke-width="2"/>
      <line x1="70%" y1="48%" x2="74%" y2="90%" stroke="rgba(135,100,55,.7)" stroke-width="2"/>` },

  // Phantom Chair ghost/resin 18"×16.5" — clear/white/smoke/amber
  { cat:'Nuage — Chairs', id:'nuage-phantom-chair', name:'Phantom Chair (Clear)', w:1.5, h:1.38, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="35%" rx="38%" ry="30%" fill="rgba(220,235,245,.45)" stroke="rgba(180,210,230,.7)" stroke-width="1.5"/>
      <ellipse cx="50%" cy="10%" rx="28%" ry="14%" fill="rgba(210,228,240,.35)" stroke="rgba(180,210,230,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-phantom-chair-smoke', name:'Phantom Chair (Smoke)', w:1.5, h:1.38, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="35%" rx="38%" ry="30%" fill="rgba(100,105,110,.35)" stroke="rgba(80,85,90,.7)" stroke-width="1.5"/>
      <ellipse cx="50%" cy="10%" rx="28%" ry="14%" fill="rgba(90,95,100,.25)" stroke="rgba(80,85,90,.5)" stroke-width="1"/>` },

  // Kenzo Stool resin 13.5"×15.75"
  { cat:'Nuage — Chairs', id:'nuage-kenzo-stool-clear', name:'Kenzo Stool (Clear)', w:1.13, h:1.31, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="28%" rx="36%" ry="24%" fill="rgba(220,235,245,.45)" stroke="rgba(180,210,230,.7)" stroke-width="1.5"/>
      <line x1="28%" y1="50%" x2="22%" y2="90%" stroke="rgba(180,210,230,.6)" stroke-width="1.5"/>
      <line x1="72%" y1="50%" x2="78%" y2="90%" stroke="rgba(180,210,230,.6)" stroke-width="1.5"/>
      <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="rgba(180,210,230,.6)" stroke-width="1.5"/>
      <line x1="22%" y1="72%" x2="78%" y2="72%" stroke="rgba(180,210,230,.4)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-kenzo-stool-honey', name:'Kenzo Stool (Honey)', w:1.13, h:1.31, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="28%" rx="36%" ry="24%" fill="rgba(210,165,60,.45)" stroke="rgba(185,140,40,.7)" stroke-width="1.5"/>
      <line x1="28%" y1="50%" x2="22%" y2="90%" stroke="rgba(185,140,40,.6)" stroke-width="1.5"/>
      <line x1="72%" y1="50%" x2="78%" y2="90%" stroke="rgba(185,140,40,.6)" stroke-width="1.5"/>
      <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="rgba(185,140,40,.6)" stroke-width="1.5"/>` },

  // Cloud Chair bouclé 18"×16"
  { cat:'Nuage — Chairs', id:'nuage-cloud-chair', name:'Cloud Chair (Bouclé)', w:1.5, h:1.33, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="18%" width="80%" height="65%" rx="18%" fill="rgba(240,235,225,.85)" stroke="rgba(200,190,175,.7)" stroke-width="1.5"/>` },

  // Gold/Silver Tribeca Chair 18"×17.5" velluto
  { cat:'Nuage — Chairs', id:'nuage-tribeca-chair-gold', name:'Gold Tribeca Chair', w:1.5, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<rect x="12%" y="20%" width="76%" height="60%" rx="4%" fill="${c}" opacity=".7" stroke="rgba(185,145,40,.8)" stroke-width="1.5"/>
      <rect x="12%" y="5%" width="76%" height="22%" rx="3%" fill="${c}" opacity=".4" stroke="rgba(185,145,40,.6)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-tribeca-stool-gold', name:'Gold Tribeca Stool', w:1.46, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="12%" y="18%" width="76%" height="55%" rx="4%" fill="${c}" opacity=".7" stroke="rgba(185,145,40,.8)" stroke-width="1.5"/>
      <rect x="12%" y="4%" width="76%" height="20%" rx="3%" fill="${c}" opacity=".4" stroke="rgba(185,145,40,.6)" stroke-width="1"/>
      <line x1="20%" y1="73%" x2="18%" y2="90%" stroke="rgba(185,145,40,.7)" stroke-width="2"/>
      <line x1="80%" y1="73%" x2="82%" y2="90%" stroke="rgba(185,145,40,.7)" stroke-width="2"/>` },
  { cat:'Nuage — Chairs', id:'nuage-tribeca-chair-silver', name:'Silver Tribeca Chair', w:1.5, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<rect x="12%" y="20%" width="76%" height="60%" rx="4%" fill="${c}" opacity=".7" stroke="rgba(180,180,185,.8)" stroke-width="1.5"/>
      <rect x="12%" y="5%" width="76%" height="22%" rx="3%" fill="${c}" opacity=".4" stroke="rgba(180,180,185,.6)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-tribeca-stool-silver', name:'Silver Tribeca Stool', w:1.46, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="12%" y="18%" width="76%" height="55%" rx="4%" fill="${c}" opacity=".7" stroke="rgba(180,180,185,.8)" stroke-width="1.5"/>
      <rect x="12%" y="4%" width="76%" height="20%" rx="3%" fill="${c}" opacity=".4" stroke="rgba(180,180,185,.6)" stroke-width="1"/>
      <line x1="20%" y1="73%" x2="18%" y2="90%" stroke="rgba(180,180,185,.7)" stroke-width="2"/>
      <line x1="80%" y1="73%" x2="82%" y2="90%" stroke="rgba(180,180,185,.7)" stroke-width="2"/>` },

  // Amsterdam Chair gold oval back 18"×16.5"
  { cat:'Nuage — Chairs', id:'nuage-amsterdam-chair', name:'Amsterdam Chair', w:1.5, h:1.38, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="28%" width="72%" height="55%" rx="5%" fill="${c}" opacity=".7" stroke="rgba(185,145,40,.8)" stroke-width="1.5"/>
      <ellipse cx="50%" cy="12%" rx="28%" ry="14%" fill="none" stroke="rgba(185,145,40,.7)" stroke-width="2"/>` },

  // Verona Chair 16"×15.5" wooden ornate back
  { cat:'Nuage — Chairs', id:'nuage-verona-chair', name:'Verona Chair', w:1.33, h:1.29, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="24%" width="72%" height="58%" rx="5%" fill="${c}" opacity=".65" stroke="rgba(150,110,60,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="10%" r="12%" fill="none" stroke="rgba(150,110,60,.6)" stroke-width="1.5"/>` },

  // Jaz Chair metal frame 19"×18.5"
  { cat:'Nuage — Chairs', id:'nuage-jaz-chair', name:'Jaz Chair', w:1.58, h:1.54, unit:'ft',
    draw:(w,h,c)=>`<rect x="12%" y="20%" width="76%" height="65%" rx="18%" fill="rgba(235,230,220,.85)" stroke="rgba(180,170,155,.7)" stroke-width="1.5"/>
      <rect x="25%" y="5%" width="50%" height="22%" rx="6%" fill="rgba(220,215,205,.6)" stroke="rgba(180,170,155,.5)" stroke-width="1"/>` },

  // Nomad Chair metal legs 18.5"×19.5"
  { cat:'Nuage — Chairs', id:'nuage-nomad-chair', name:'Nomad Chair', w:1.54, h:1.63, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="15%" width="80%" height="70%" rx="8%" fill="${c}" opacity=".75" stroke="${c}" stroke-width="1.5"/>
      <rect x="18%" y="3%" width="64%" height="20%" rx="8%" fill="${c}" opacity=".5" stroke="${c}" stroke-width="1"/>` },

  // Phoenix Chairs (White/Silver/Black/Rose Gold) 16"×15.5"
  { cat:'Nuage — Chairs', id:'nuage-phoenix-white', name:'White Phoenix Chair', w:1.33, h:1.29, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="22%" width="72%" height="58%" rx="5%" fill="rgba(240,235,225,.8)" stroke="rgba(220,215,205,.8)" stroke-width="1.5"/>
      <path d="M30,10 Q50,22 70,10 Q55,18 50,22 Q45,18 30,10" fill="none" stroke="rgba(200,195,185,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Chairs', id:'nuage-phoenix-silver', name:'Silver Phoenix Chair', w:1.33, h:1.29, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="22%" width="72%" height="58%" rx="5%" fill="rgba(200,200,205,.7)" stroke="rgba(170,170,175,.8)" stroke-width="1.5"/>
      <path d="M30,10 Q50,22 70,10 Q55,18 50,22 Q45,18 30,10" fill="none" stroke="rgba(160,160,165,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Chairs', id:'nuage-phoenix-black', name:'Black Phoenix Chair', w:1.33, h:1.29, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="22%" width="72%" height="58%" rx="5%" fill="rgba(40,40,40,.7)" stroke="rgba(60,60,60,.8)" stroke-width="1.5"/>
      <path d="M30,10 Q50,22 70,10 Q55,18 50,22 Q45,18 30,10" fill="none" stroke="rgba(80,80,80,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Chairs', id:'nuage-phoenix-rosegold', name:'Rose Gold Phoenix Chair', w:1.33, h:1.29, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="22%" width="72%" height="58%" rx="5%" fill="rgba(195,140,110,.5)" stroke="rgba(170,115,85,.7)" stroke-width="1.5"/>
      <path d="M30,10 Q50,22 70,10 Q55,18 50,22 Q45,18 30,10" fill="none" stroke="rgba(160,110,80,.6)" stroke-width="1.5"/>` },

  // Eloise Chair silver/gold frame 17"×17"
  { cat:'Nuage — Chairs', id:'nuage-eloise-chair', name:'Silver/Gold Frame Eloise Chair', w:1.42, h:1.42, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="22%" width="72%" height="58%" rx="5%" fill="${c}" opacity=".65" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>
      <line x1="25%" y1="22%" x2="75%" y2="22%" stroke="rgba(185,145,40,.5)" stroke-width="1"/>
      <path d="M38,22 L50,8 L62,22" fill="none" stroke="rgba(185,145,40,.5)" stroke-width="1.2"/>` },

  // Gold/Silver Lucca Chair 16"×17.5"
  { cat:'Nuage — Chairs', id:'nuage-lucca-chair-gold', name:'Gold Lucca Chair', w:1.33, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="22%" width="72%" height="58%" rx="5%" fill="${c}" opacity=".65" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>
      <line x1="20%" y1="10%" x2="20%" y2="80%" stroke="rgba(185,145,40,.4)" stroke-width="1"/>
      <line x1="35%" y1="10%" x2="35%" y2="80%" stroke="rgba(185,145,40,.4)" stroke-width="1"/>
      <line x1="50%" y1="10%" x2="50%" y2="80%" stroke="rgba(185,145,40,.4)" stroke-width="1"/>
      <line x1="65%" y1="10%" x2="65%" y2="80%" stroke="rgba(185,145,40,.4)" stroke-width="1"/>
      <line x1="80%" y1="10%" x2="80%" y2="80%" stroke="rgba(185,145,40,.4)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-lucca-chair-silver', name:'Silver Lucca Chair', w:1.33, h:1.46, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="22%" width="72%" height="58%" rx="5%" fill="${c}" opacity=".65" stroke="rgba(175,175,180,.7)" stroke-width="1.5"/>
      <line x1="20%" y1="10%" x2="20%" y2="80%" stroke="rgba(175,175,180,.4)" stroke-width="1"/>
      <line x1="35%" y1="10%" x2="35%" y2="80%" stroke="rgba(175,175,180,.4)" stroke-width="1"/>
      <line x1="50%" y1="10%" x2="50%" y2="80%" stroke="rgba(175,175,180,.4)" stroke-width="1"/>
      <line x1="65%" y1="10%" x2="65%" y2="80%" stroke="rgba(175,175,180,.4)" stroke-width="1"/>
      <line x1="80%" y1="10%" x2="80%" y2="80%" stroke="rgba(175,175,180,.4)" stroke-width="1"/>` },

  // Firenze Chair 18.5"×20.5" wooden upholstered
  { cat:'Nuage — Chairs', id:'nuage-firenze-chair', name:'Firenze Chair', w:1.54, h:1.71, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="20%" width="80%" height="62%" rx="6%" fill="rgba(35,30,25,.7)" stroke="rgba(55,50,45,.7)" stroke-width="1.5"/>
      <rect x="16%" y="5%" width="68%" height="22%" rx="5%" fill="rgba(45,40,35,.5)" stroke="rgba(55,50,45,.5)" stroke-width="1"/>` },

  // Saigon Chair 18"×20" upholstered
  { cat:'Nuage — Chairs', id:'nuage-saigon-chair', name:'Saigon Chair', w:1.5, h:1.67, unit:'ft',
    draw:(w,h,c)=>`<rect x="10%" y="18%" width="80%" height="68%" rx="12%" fill="rgba(35,30,25,.65)" stroke="rgba(55,50,45,.7)" stroke-width="1.5"/>` },

  // Brooklyn Chair/Stool rattan 17.5"×18"
  { cat:'Nuage — Chairs', id:'nuage-brooklyn-chair', name:'Brooklyn Chair', w:1.46, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="14%" y="22%" width="72%" height="58%" rx="8%" fill="rgba(175,150,105,.55)" stroke="rgba(140,115,75,.7)" stroke-width="1.5"/>
      <rect x="20%" y="6%" width="60%" height="22%" rx="6%" fill="rgba(160,135,90,.35)" stroke="rgba(140,115,75,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Chairs', id:'nuage-brooklyn-stool', name:'Brooklyn Stool', w:1.46, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="28%" rx="34%" ry="22%" fill="rgba(175,150,105,.55)" stroke="rgba(140,115,75,.7)" stroke-width="1.5"/>
      <line x1="30%" y1="48%" x2="26%" y2="90%" stroke="rgba(140,115,75,.7)" stroke-width="2"/>
      <line x1="70%" y1="48%" x2="74%" y2="90%" stroke="rgba(140,115,75,.7)" stroke-width="2"/>
      <line x1="24%" y1="72%" x2="76%" y2="72%" stroke="rgba(140,115,75,.5)" stroke-width="1"/>` },

  // ─── NUAGE — COFFEE & ACCENT TABLES ─────────────
  // Palisades Rect Coffee 47"×27.5"
  { cat:'Nuage — Tables', id:'nuage-palisades-coffee-rect', name:'Palisades Rectangular Coffee Table', w:3.92, h:2.29, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="5%" width="94%" height="90%" rx="5%" fill="rgba(200,165,100,.35)" stroke="rgba(170,130,70,.7)" stroke-width="1.5"/>
      <rect x="8%" y="12%" width="84%" height="76%" rx="4%" fill="rgba(185,150,85,.2)"/>` },

  // Palisades Round Coffee 39.25" D
  { cat:'Nuage — Tables', id:'nuage-palisades-coffee-round', name:'Palisades Round Coffee Table', w:3.27, h:3.27, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(200,165,100,.35)" stroke="rgba(170,130,70,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="32%" fill="rgba(185,150,85,.2)"/>` },

  // Tulum Coffee 27.75" D
  { cat:'Nuage — Tables', id:'nuage-tulum-coffee', name:'Tulum Coffee Table', w:2.31, h:2.31, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(210,175,115,.4)" stroke="rgba(175,135,80,.7)" stroke-width="1.5"/>
      <circle cx="35%" cy="65%" r="10%" fill="rgba(175,135,80,.4)"/>
      <circle cx="65%" cy="65%" r="10%" fill="rgba(175,135,80,.4)"/>
      <circle cx="50%" cy="30%" r="10%" fill="rgba(175,135,80,.4)"/>` },

  // Brooklyn Coffee 24.75" D rattan+glass
  { cat:'Nuage — Tables', id:'nuage-brooklyn-coffee', name:'Brooklyn Coffee Table', w:2.06, h:2.06, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(210,235,245,.35)" stroke="rgba(30,30,30,.6)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="34%" fill="rgba(175,145,95,.3)" stroke="rgba(140,110,65,.4)" stroke-width="1"/>` },

  // Gilda Coffee 35.25" D
  { cat:'Nuage — Tables', id:'nuage-gilda-coffee', name:'Gilda Coffee Table', w:2.94, h:2.94, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(210,180,130,.35)" stroke="rgba(175,140,85,.7)" stroke-width="1.5"/>` },

  // Driftwood Nest Coffee 31.5" D rattan
  { cat:'Nuage — Tables', id:'nuage-driftwood-coffee', name:'Driftwood Nest Coffee Table', w:2.63, h:2.63, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(195,160,100,.4)" stroke="rgba(160,125,70,.7)" stroke-width="2"/>
      <circle cx="50%" cy="50%" r="30%" fill="rgba(175,140,85,.25)" stroke="rgba(155,120,65,.4)" stroke-width="1"/>` },

  // Geo Coffee 32.25" D metal+wood
  { cat:'Nuage — Tables', id:'nuage-geo-coffee', name:'Geo Coffee Table', w:2.69, h:2.69, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(100,70,35,.35)" stroke="rgba(80,55,25,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="10%" fill="rgba(80,55,25,.4)"/>` },

  // Luna Coffee 34" D
  { cat:'Nuage — Tables', id:'nuage-luna-coffee', name:'Luna Coffee Table', w:2.83, h:2.83, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(25,22,18,.6)" stroke="rgba(45,40,35,.7)" stroke-width="1.5"/>` },

  // Carmen Coffee 47"×23.5" wood
  { cat:'Nuage — Tables', id:'nuage-carmen-coffee', name:'Carmen Coffee Table', w:3.92, h:1.96, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="5%" width="94%" height="90%" rx="3%" fill="rgba(22,18,14,.6)" stroke="rgba(40,35,28,.7)" stroke-width="1.5"/>` },

  // White/Gold Soho Coffee 27.75" D glass top
  { cat:'Nuage — Tables', id:'nuage-soho-coffee-white', name:'White Soho Coffee Table', w:2.31, h:2.31, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.4)" stroke="rgba(210,210,215,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="38%" fill="none" stroke="rgba(200,200,205,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Tables', id:'nuage-soho-coffee-gold', name:'Gold Soho Coffee Table', w:2.31, h:2.31, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.4)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="38%" fill="none" stroke="rgba(185,145,40,.4)" stroke-width="1"/>` },

  // Gold Tribeca Coffee 36" D glass
  { cat:'Nuage — Tables', id:'nuage-tribeca-coffee-gold', name:'Gold Tribeca Coffee Table', w:3, h:3, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.4)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="32%" fill="none" stroke="rgba(185,145,40,.4)" stroke-width="1"/>` },

  // Palisades Side Table 34" D
  { cat:'Nuage — Tables', id:'nuage-palisades-side', name:'Palisades Side Table', w:2.83, h:2.83, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(200,165,100,.35)" stroke="rgba(170,130,70,.7)" stroke-width="1.5"/>` },

  // Genevieve Side Table 26" D
  { cat:'Nuage — Tables', id:'nuage-genevieve-side', name:'Genevieve Side Table', w:2.17, h:2.17, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(200,165,100,.35)" stroke="rgba(170,130,70,.7)" stroke-width="1.5"/>` },

  // Rotterdam Side Table 23.5" D
  { cat:'Nuage — Tables', id:'nuage-rotterdam-side', name:'Rotterdam Side Table', w:1.96, h:1.96, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(22,18,14,.5)" stroke="rgba(40,35,28,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="16%" fill="rgba(50,42,32,.5)"/>` },

  // Brooklyn Side Table 19" D rattan+glass
  { cat:'Nuage — Tables', id:'nuage-brooklyn-side', name:'Brooklyn Side Table', w:1.58, h:1.58, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(210,235,245,.35)" stroke="rgba(30,30,30,.6)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="30%" fill="rgba(175,145,95,.3)" stroke="rgba(140,110,65,.4)" stroke-width="1"/>` },

  // Black/Gold Hudson Side Table 17.75" D
  { cat:'Nuage — Tables', id:'nuage-hudson-side-black', name:'Black Hudson Side Table', w:1.48, h:1.48, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(22,18,14,.5)" stroke="rgba(40,35,28,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="28%" fill="none" stroke="rgba(50,45,38,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Tables', id:'nuage-hudson-side-gold', name:'Gold Hudson Side Table', w:1.48, h:1.48, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(185,145,40,.35)" stroke="rgba(160,125,30,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="28%" fill="none" stroke="rgba(160,125,30,.4)" stroke-width="1"/>` },

  // Gold Tribeca Side Table 19.5" D
  { cat:'Nuage — Tables', id:'nuage-tribeca-side-gold', name:'Gold Tribeca Side Table', w:1.63, h:1.63, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.4)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>` },

  // Crosby Side Table 31.5" D glass
  { cat:'Nuage — Tables', id:'nuage-crosby-side', name:'Crosby Side Table', w:2.63, h:2.63, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.35)" stroke="rgba(185,145,40,.6)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(185,145,40,.3)" stroke-width="1"/>` },

  // Valerie Accent Table 15.25"×20" + Laura 15.5"×16"
  { cat:'Nuage — Tables', id:'nuage-valerie-accent', name:'Valerie Accent Table', w:1.27, h:1.27, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="15%" width="70%" height="70%" rx="40%" fill="rgba(22,18,14,.6)" stroke="rgba(40,35,28,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Tables', id:'nuage-laura-accent', name:'Laura Accent Table', w:1.29, h:1.29, unit:'ft',
    draw:(w,h,c)=>`<rect x="15%" y="15%" width="70%" height="70%" rx="40%" fill="rgba(22,18,14,.6)" stroke="rgba(40,35,28,.7)" stroke-width="1.5"/>` },

  // Sullivan Side Table 18" D
  { cat:'Nuage — Tables', id:'nuage-sullivan-side', name:'Sullivan Side Table', w:1.5, h:1.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="${c}" opacity=".3" stroke="${c}" stroke-width="1.5"/>
      <line x1="50%" y1="6%" x2="50%" y2="94%" stroke="${c}" stroke-width="2" opacity=".4"/>` },

  // Brera Side Table 15.75" D gold
  { cat:'Nuage — Tables', id:'nuage-brera-side', name:'Brera Side Table', w:1.31, h:1.31, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="44%" fill="rgba(220,235,245,.35)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(185,145,40,.4)" stroke-width="1"/>` },

  // Stone Stool 12"×12" glass
  { cat:'Nuage — Tables', id:'nuage-stone-stool', name:'Stone Stool (Glass)', w:1, h:1, unit:'ft',
    draw:(w,h,c)=>`<rect x="8%" y="8%" width="84%" height="84%" rx="8%" fill="rgba(210,175,60,.45)" stroke="rgba(185,150,40,.7)" stroke-width="1.5"/>` },

  // ─── NUAGE — DINING & COCKTAIL TABLES ─────────────
  // Gold/Silver Heidy Cocktail 27.5" D × 42"H
  { cat:'Nuage — Tables', id:'nuage-heidy-cocktail-gold', name:'Gold Heidy Cocktail Table', w:2.29, h:2.29, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.35)" stroke="rgba(185,145,40,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>
      <circle cx="50%" cy="50%" r="12%" fill="rgba(185,145,40,.5)"/>` },
  { cat:'Nuage — Tables', id:'nuage-heidy-cocktail-silver', name:'Silver Heidy Cocktail Table', w:2.29, h:2.29, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.35)" stroke="rgba(175,175,180,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>
      <circle cx="50%" cy="50%" r="12%" fill="rgba(175,175,180,.5)"/>` },

  // Gold/Silver Malley High Cocktail 27.5" D
  { cat:'Nuage — Tables', id:'nuage-malley-gold', name:'Gold Malley High Cocktail Table', w:2.29, h:2.29, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,220,215,.4)" stroke="rgba(185,145,40,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>
      <ellipse cx="50%" cy="80%" rx="20%" ry="12%" fill="rgba(185,145,40,.4)"/>` },
  { cat:'Nuage — Tables', id:'nuage-malley-silver', name:'Silver Malley High Cocktail Table', w:2.29, h:2.29, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,220,215,.4)" stroke="rgba(175,175,180,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>
      <ellipse cx="50%" cy="80%" rx="20%" ry="12%" fill="rgba(175,175,180,.4)"/>` },

  // Gold/Silver Berlin High Cocktail 27.5" D mirrored top
  { cat:'Nuage — Tables', id:'nuage-berlin-cocktail-gold', name:'Gold Berlin High Cocktail Table', w:2.29, h:2.29, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(210,175,60,.3)" stroke="rgba(185,145,40,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>` },
  { cat:'Nuage — Tables', id:'nuage-berlin-cocktail-black', name:'Black Berlin High Cocktail Table', w:2.29, h:2.29, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(30,30,35,.5)" stroke="rgba(60,60,65,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>` },

  // Aidan High Cocktail 31.125" D wood
  { cat:'Nuage — Tables', id:'nuage-aidan-cocktail', name:'Aidan High Cocktail Table', w:2.59, h:2.59, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(22,18,14,.6)" stroke="rgba(40,35,28,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>` },

  // White/Gold Soho Highboy 27.75" D, Lowboy 27.5" D
  { cat:'Nuage — Tables', id:'nuage-soho-highboy-white', name:'White Soho Highboy', w:2.31, h:2.31, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.4)" stroke="rgba(210,210,215,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>
      <circle cx="50%" cy="50%" r="32%" fill="none" stroke="rgba(200,200,205,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Tables', id:'nuage-soho-highboy-gold', name:'Gold Soho Highboy', w:2.31, h:2.31, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.4)" stroke="rgba(185,145,40,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>
      <circle cx="50%" cy="50%" r="32%" fill="none" stroke="rgba(185,145,40,.4)" stroke-width="1"/>` },
  { cat:'Nuage — Tables', id:'nuage-soho-lowboy-white', name:'White Soho Lowboy', w:2.29, h:2.29, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.4)" stroke="rgba(210,210,215,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="32%" fill="none" stroke="rgba(200,200,205,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Tables', id:'nuage-soho-lowboy-gold', name:'Gold Soho Lowboy', w:2.29, h:2.29, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.4)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="32%" fill="none" stroke="rgba(185,145,40,.4)" stroke-width="1"/>` },

  // Larry Communal Table 71"×23.5"×42"H
  { cat:'Nuage — Tables', id:'nuage-larry-communal', name:'Larry Communal Table', w:5.92, h:1.96, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="8%" width="96%" height="84%" rx="2%" fill="rgba(190,155,90,.3)" stroke="rgba(30,30,30,.6)" stroke-width="1.5"/>
      <rect x="3%" y="10%" width="8%" height="80%" rx="2%" fill="rgba(30,30,30,.5)"/>
      <rect x="89%" y="10%" width="8%" height="80%" rx="2%" fill="rgba(30,30,30,.5)"/>` },

  // Bilbao Tables — glass top metal frame (gold & silver)
  { cat:'Nuage — Tables', id:'nuage-bilbao-rect-gold', name:'Gold Bilbao Rectangular Table 92"×44"', w:7.65, h:3.65, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(220,235,245,.35)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>
      <rect x="4%" y="8%" width="8%" height="84%" fill="rgba(185,145,40,.4)"/>
      <rect x="88%" y="8%" width="8%" height="84%" fill="rgba(185,145,40,.4)"/>` },
  { cat:'Nuage — Tables', id:'nuage-bilbao-rect-silver', name:'Silver Bilbao Rectangular Table 92"×44"', w:7.65, h:3.65, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(220,235,245,.35)" stroke="rgba(175,175,180,.7)" stroke-width="1.5"/>
      <rect x="4%" y="8%" width="8%" height="84%" fill="rgba(175,175,180,.4)"/>
      <rect x="88%" y="8%" width="8%" height="84%" fill="rgba(175,175,180,.4)"/>` },
  { cat:'Nuage — Tables', id:'nuage-bilbao-high-rect-gold', name:'Gold Bilbao High Rectangle Table 72"×24"', w:6, h:2, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(220,235,245,.35)" stroke="rgba(185,145,40,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>` },
  { cat:'Nuage — Tables', id:'nuage-bilbao-high-square-gold', name:'Gold Bilbao High Square Table 30"×30"', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="5%" y="5%" width="90%" height="90%" rx="2%" fill="rgba(220,235,245,.35)" stroke="rgba(185,145,40,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>` },
  { cat:'Nuage — Tables', id:'nuage-bilbao-oval-gold', name:'Gold Bilbao Oval Table 190"×48"', w:15.83, h:4, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="48%" ry="44%" fill="rgba(220,235,245,.35)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Tables', id:'nuage-bilbao-oval-silver', name:'Silver Bilbao Oval Table 190"×48"', w:15.83, h:4, unit:'ft',
    draw:(w,h,c)=>`<ellipse cx="50%" cy="50%" rx="48%" ry="44%" fill="rgba(220,235,245,.35)" stroke="rgba(175,175,180,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Tables', id:'nuage-bilbao-66round', name:'Bilbao Table 66" Round', w:5.5, h:5.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(220,235,245,.35)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Tables', id:'nuage-bilbao-serpentine-gold', name:'Gold Bilbao Serpentine Table', w:7.96, h:2.67, unit:'ft',
    draw:(w,h,c)=>`<path d="M5,50 Q25,5 50,50 Q75,95 95,50 L95,80 Q75,100 50,65 Q25,95 5,80 Z" fill="rgba(220,235,245,.35)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Tables', id:'nuage-bilbao-hollow-gold', name:'Gold Bilbao Hollow Table (Inner 71" Outer 134")', w:11.17, h:11.17, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="47%" fill="rgba(220,235,245,.2)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="28%" fill="white" stroke="rgba(185,145,40,.5)" stroke-width="1"/>` },
  { cat:'Nuage — Tables', id:'nuage-bilbao-hollow-silver', name:'Silver Bilbao Hollow Table', w:11.17, h:11.17, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="47%" fill="rgba(220,235,245,.2)" stroke="rgba(175,175,180,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="28%" fill="white" stroke="rgba(175,175,180,.5)" stroke-width="1"/>` },

  // Tribeca Tables — metal frame wood/flax top
  { cat:'Nuage — Tables', id:'nuage-tribeca-white-oak', name:'Tribeca Table White Oak 94.5"×47.25"', w:7.88, h:3.94, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(210,185,140,.35)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>
      <rect x="3%" y="7%" width="10%" height="86%" fill="rgba(185,145,40,.4)"/>
      <rect x="87%" y="7%" width="10%" height="86%" fill="rgba(185,145,40,.4)"/>` },
  { cat:'Nuage — Tables', id:'nuage-tribeca-black', name:'Tribeca Table Black 94.5"×47.25"', w:7.88, h:3.94, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="2%" fill="rgba(35,30,25,.5)" stroke="rgba(185,145,40,.7)" stroke-width="1.5"/>
      <rect x="3%" y="7%" width="10%" height="86%" fill="rgba(185,145,40,.4)"/>
      <rect x="87%" y="7%" width="10%" height="86%" fill="rgba(185,145,40,.4)"/>` },

  // Oslo Dining Table 60" D + Highboy 30.125" D
  { cat:'Nuage — Tables', id:'nuage-oslo-dining', name:'Oslo Dining Table 60"', w:5, h:5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(210,185,140,.35)" stroke="rgba(175,140,85,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="16%" fill="rgba(175,140,85,.4)"/>` },
  { cat:'Nuage — Tables', id:'nuage-oslo-highboy', name:'Oslo Highboy 30.125"', w:2.51, h:2.51, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(210,185,140,.35)" stroke="rgba(175,140,85,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>
      <circle cx="50%" cy="50%" r="16%" fill="rgba(175,140,85,.4)"/>` },

  // Granada Dining 63"×63" + Highboy
  { cat:'Nuage — Tables', id:'nuage-granada-dining', name:'Granada Dining Table 63"×63"', w:5.25, h:5.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="3%" fill="rgba(200,165,110,.3)" stroke="rgba(165,130,75,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Tables', id:'nuage-granada-highboy', name:'Granada Highboy Table 63"×63"', w:5.25, h:5.25, unit:'ft',
    draw:(w,h,c)=>`<rect x="3%" y="3%" width="94%" height="94%" rx="3%" fill="rgba(200,165,110,.3)" stroke="rgba(165,130,75,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>` },

  // Maison Tables
  { cat:'Nuage — Tables', id:'nuage-maison-cocktail-high', name:'Maison Cocktail High Table 30"', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(200,165,110,.3)" stroke="rgba(165,130,75,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>
      <circle cx="50%" cy="50%" r="14%" fill="rgba(165,130,75,.4)"/>` },
  { cat:'Nuage — Tables', id:'nuage-maison-cocktail-low', name:'Maison Cocktail Low Table 30"', w:2.5, h:2.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(200,165,110,.3)" stroke="rgba(165,130,75,.7)" stroke-width="1.5"/>
      <circle cx="50%" cy="50%" r="14%" fill="rgba(165,130,75,.4)"/>` },
  { cat:'Nuage — Tables', id:'nuage-maison-dining', name:'Maison Dining Table 66"', w:5.5, h:5.5, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(200,165,110,.3)" stroke="rgba(165,130,75,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Tables', id:'nuage-maison-rect', name:'Maison Rectangular Dining Table 96"×42"', w:8, h:3.5, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="5%" width="96%" height="90%" rx="3%" fill="rgba(200,165,110,.3)" stroke="rgba(165,130,75,.7)" stroke-width="1.5"/>` },
  { cat:'Nuage — Tables', id:'nuage-maison-high', name:'Maison High Table (Hollow 71"/134")', w:11.17, h:11.17, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="47%" fill="rgba(200,165,110,.15)" stroke="rgba(165,130,75,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>
      <circle cx="50%" cy="50%" r="28%" fill="white" stroke="rgba(165,130,75,.4)" stroke-width="1"/>` },

  // Laguna High Cocktail 31.5" D wood
  { cat:'Nuage — Tables', id:'nuage-laguna-cocktail', name:'Laguna High Cocktail Table 31.5"', w:2.63, h:2.63, unit:'ft',
    draw:(w,h,c)=>`<circle cx="50%" cy="50%" r="46%" fill="rgba(200,165,110,.3)" stroke="rgba(165,130,75,.7)" stroke-width="1.5" stroke-dasharray="6,3"/>` },

  // Barcelona Communal Table 71"×23.5"×42"H
  { cat:'Nuage — Tables', id:'nuage-barcelona-communal', name:'Barcelona Communal Table 71"×23.5"', w:5.92, h:1.96, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="8%" width="96%" height="84%" rx="3%" fill="rgba(200,165,110,.3)" stroke="rgba(165,130,75,.7)" stroke-width="1.5"/>` },

  // Walnut Corbin High Table 71"×31.5"×42.5"H
  { cat:'Nuage — Tables', id:'nuage-corbin-high', name:'Walnut Corbin High Table 71"×31.5"', w:5.92, h:2.63, unit:'ft',
    draw:(w,h,c)=>`<rect x="2%" y="8%" width="96%" height="84%" rx="4%" fill="rgba(120,80,40,.35)" stroke="rgba(90,55,20,.7)" stroke-width="1.5"/>` },

  // ─── SHAPES ─────────────────────────────────────────
  { cat:'Shapes', id:'shape-rect', name:'Rectangle', w:8, h:6, unit:'ft', isShape:true,
    draw:(w,h,c)=>`<rect x="3" y="3" width="94" height="94" fill="${c}" stroke="${darken(c)}" stroke-width="3"/>` },
  { cat:'Shapes', id:'shape-ellipse', name:'Ellipse', w:6, h:6, unit:'ft', isShape:true,
    draw:(w,h,c)=>`<ellipse cx="50" cy="50" rx="47" ry="47" fill="${c}" stroke="${darken(c)}" stroke-width="3"/>` },
  { cat:'Shapes', id:'shape-triangle', name:'Triangle', w:6, h:6, unit:'ft', isShape:true,
    draw:(w,h,c)=>`<polygon points="50,3 97,97 3,97" fill="${c}" stroke="${darken(c)}" stroke-width="3" stroke-linejoin="round"/>` },
  { cat:'Shapes', id:'shape-line', name:'Line', w:8, h:1, unit:'ft', isShape:true,
    draw:(w,h,c)=>`<line x1="3" y1="50" x2="97" y2="50" stroke="${c}" stroke-width="8" stroke-linecap="round"/>` },
  { cat:'Shapes', id:'shape-arrow', name:'Arrow', w:8, h:1, unit:'ft', isShape:true,
    draw:(w,h,c)=>`<defs><marker id="apr-prev" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="${c}"/></marker></defs><line x1="3" y1="50" x2="86" y2="50" stroke="${c}" stroke-width="8" stroke-linecap="round" marker-end="url(#apr-prev)"/>` },
];

// ═══════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════
function darken(hex){if(!hex||hex[0]!=='#')return hex;let r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return`#${[r,g,b].map(v=>Math.max(0,v-35).toString(16).padStart(2,'0')).join('')}`;}

const COLORS=['#b5832a','#4a6fa5','#5f7a5e','#8B4513','#6B4C9B','#c0392b','#2c7873','#555555','#e8c46a','#a8c0a0'];
const SNAP_FT=0.5;
let pxPerFt=20,zoom=1,gridOn=true,snapOn=true,labelsOn=false,currentTool='select';
let items=[],groups={},selectedIds=new Set(),history=[],maxHistory=50,idSeq=0;
let lastTableSetGid=null;
let layersPanelOpen=false;

// ═══════════════════════════════════════════════
// PALETTE
// ═══════════════════════════════════════════════
function buildPalette(filter=''){
  const scroll=document.getElementById('palette-scroll');
  scroll.innerHTML='';
  const cats={};

  // Always show Table Sets first
  const CAT_ORDER=['Table Sets','Lounge Sets'];

  CATALOG.forEach(item=>{
    if(filter&&!item.name.toLowerCase().includes(filter.toLowerCase())&&!item.cat.toLowerCase().includes(filter.toLowerCase()))return;
    if(!cats[item.cat])cats[item.cat]=[];
    cats[item.cat].push(item);
  });

  // Sort categories: Table Sets first, then rest alphabetically
  const sortedCats=Object.keys(cats).sort((a,b)=>{
    const ai=CAT_ORDER.indexOf(a), bi=CAT_ORDER.indexOf(b);
    if(ai>=0&&bi<0)return-1;
    if(bi>=0&&ai<0)return 1;
    if(ai>=0&&bi>=0)return ai-bi;
    return a.localeCompare(b);
  });

  sortedCats.forEach(cat=>{
    const catItems=cats[cat];
    const ch=document.createElement('div');
    ch.className='cat-header';
    const isTableSet=cat==='Table Sets';
    const isLoungeSet=cat==='Lounge Sets';
    ch.innerHTML=cat+(cat==='Custom'?'<span class="ai-badge">AI</span>':'')+' ('+catItems.length+')'
      +((isTableSet||isLoungeSet)?'<span style="font-size:.55rem;color:var(--sage);margin-left:4px">drag or click</span>':'');
    scroll.appendChild(ch);
    const grid=document.createElement('div');
    grid.className='palette-grid';
    catItems.forEach(item=>{
      const px=Math.min(ftToPx(item.w),46),py=Math.min(ftToPx(item.h),46);
      const el=document.createElement('div');
      el.className='pitem';el.draggable=true;
      const sizeLabel=item.isTableSet?`${item.seats} seats`:item.isLoungeSet?`${item.pieces.length} pieces`:`${item.w}×${item.h}ft`;
      const setBadge=item.isTableSet?`<span style="font-size:.52rem;background:var(--sage);color:white;padding:1px 4px;border-radius:2px;margin-left:3px;vertical-align:middle">SET</span>`:item.isLoungeSet?`<span style="font-size:.52rem;background:#7a5c8a;color:white;padding:1px 4px;border-radius:2px;margin-left:3px;vertical-align:middle">LOUNGE</span>`:(item.cat==='Custom'?`<span class="ai-badge">AI</span>`:'');
      el.innerHTML=`<div class="pitem-icon"><svg width="${px}" height="${py}" viewBox="0 0 100 100" preserveAspectRatio="none" style="overflow:hidden">${item.draw(item.w,item.h,COLORS[0])}</svg></div><div class="pitem-name">${item.name}${setBadge}</div><div class="pitem-size">${sizeLabel}</div>`;
      el.addEventListener('dragstart',e=>{e.dataTransfer.setData('item-id',item.id);e.dataTransfer.effectAllowed='copy';});
      el.addEventListener('touchstart',e=>{e.preventDefault();_startPaletteTouchDrag(item.id,e.touches[0]);},{passive:false});
      // Click to place in center of current viewport
      el.addEventListener('click',()=>{
        const vr=viewport.getBoundingClientRect();
        const cx=(viewport.scrollLeft+vr.width/2)/zoom;
        const cy=(viewport.scrollTop+vr.height/2)/zoom;
        if(item.isTableSet){
          dropTableSet(item,cx,cy);
        } else if(item.isLoungeSet){
          dropLoungeSet(item,cx,cy);
        } else {
          const x=Math.max(0,cx-ftToPx(item.w)/2);
          const y=Math.max(0,cy-ftToPx(item.h)/2);
          addItem(item.id,x,y);
        }
      });
      grid.appendChild(el);
    });
    scroll.appendChild(grid);
  });
}
function filterPalette(v){buildPalette(v);}
function ftToPx(ft){return Math.round(ft*pxPerFt);}
function pxToFt(px){return px/pxPerFt;}

// ═══════════════════════════════════════════════
// CANVAS & GRID
// ═══════════════════════════════════════════════
const viewport=document.getElementById('viewport');
const canvasWrap=document.getElementById('canvas-wrap');
const fpCanvas=document.getElementById('floorplan-canvas');
const itemsLayer=document.getElementById('items-layer');
const gridLayer=document.getElementById('grid-layer');

function setCanvasSize(w,h){
  fpCanvas.style.width=w+'px';fpCanvas.style.height=h+'px';
  gridLayer.width=w;gridLayer.height=h;
  drawGrid();
}
function drawGrid(){
  const ctx=gridLayer.getContext('2d');
  const w=gridLayer.width,h=gridLayer.height;
  ctx.clearRect(0,0,w,h);
  if(!gridOn)return;
  const minor=ftToPx(1),major=ftToPx(5);

  // Batch all minor lines in one path
  ctx.beginPath();
  for(let x=minor;x<=w;x+=minor){ctx.moveTo(x,0);ctx.lineTo(x,h);}
  for(let y=minor;y<=h;y+=minor){ctx.moveTo(0,y);ctx.lineTo(w,y);}
  ctx.strokeStyle='rgba(180,165,140,.18)';ctx.lineWidth=.5;ctx.stroke();

  // Batch all major lines in one path
  ctx.beginPath();
  for(let x=0;x<=w;x+=major){ctx.moveTo(x,0);ctx.lineTo(x,h);}
  for(let y=0;y<=h;y+=major){ctx.moveTo(0,y);ctx.lineTo(w,y);}
  ctx.strokeStyle='rgba(180,165,140,.42)';ctx.lineWidth=.8;ctx.stroke();
}

// ═══════════════════════════════════════════════
// ZOOM & PAN
// ═══════════════════════════════════════════════
viewport.addEventListener('wheel',e=>{
  e.preventDefault();

  const rect=viewport.getBoundingClientRect();
  const mouseX=e.clientX-rect.left;
  const mouseY=e.clientY-rect.top;

  // Two-finger trackpad pan: no ctrlKey, deltaMode 0, small deltas
  const isPinch=e.ctrlKey; // browsers set ctrlKey=true for pinch gesture
  if(!isPinch&&Math.abs(e.deltaX)+Math.abs(e.deltaY)<60&&e.deltaMode===0&&!e.shiftKey){
    // Pure pan (two-finger drag on trackpad)
    viewport.scrollLeft+=e.deltaX;
    viewport.scrollTop+=e.deltaY;
    return;
  }

  // Zoom (scroll wheel or pinch)
  const delta=isPinch
    ? (e.deltaY>0?0.94:1.06)          // pinch: gentle
    : (e.deltaY>0?0.88:1.14);         // scroll wheel: faster
  const newZoom=Math.max(0.08,Math.min(8,zoom*delta));

  // Zoom toward cursor: adjust scroll so the point under cursor stays fixed
  const scaleChange=newZoom/zoom;
  const scrollX=viewport.scrollLeft;
  const scrollY=viewport.scrollTop;
  // Point in canvas coords before zoom
  const canvasX=(scrollX+mouseX)/zoom;
  const canvasY=(scrollY+mouseY)/zoom;
  // After zoom, adjust scroll so same canvas point is under cursor
  viewport.scrollLeft=canvasX*newZoom-mouseX;
  viewport.scrollTop=canvasY*newZoom-mouseY;

  zoom=newZoom;
  applyZoom();
},{passive:false});

function applyZoom(){
  canvasWrap.style.transform=`scale(${zoom})`;
  canvasWrap.style.transformOrigin='0 0';
  document.getElementById('zoom-display').textContent=Math.round(zoom*100)+'%';
}
function zoomFit(){
  const vr=viewport.getBoundingClientRect();
  const newZoom=Math.min((vr.width-80)/fpCanvas.offsetWidth,(vr.height-80)/fpCanvas.offsetHeight,2);
  zoom=newZoom;
  applyZoom();
  // Center the canvas in the viewport
  setTimeout(()=>{
    const scaledW=fpCanvas.offsetWidth*zoom;
    const scaledH=fpCanvas.offsetHeight*zoom;
    viewport.scrollLeft=Math.max(0,(scaledW+120-vr.width)/2);
    viewport.scrollTop=Math.max(0,(scaledH+120-vr.height)/2);
  },10);
}
function zoomTo(level){
  const vr=viewport.getBoundingClientRect();
  const cx=vr.width/2, cy=vr.height/2;
  const canvasX=(viewport.scrollLeft+cx)/zoom;
  const canvasY=(viewport.scrollTop+cy)/zoom;
  zoom=level;
  viewport.scrollLeft=canvasX*zoom-cx;
  viewport.scrollTop=canvasY*zoom-cy;
  applyZoom();
}

function zoomToSelection(){
  const sel = Array.from(selectedIds).map(id=>items.find(i=>i.id===id)).filter(Boolean);
  if(!sel.length){ showToast('Nothing selected — select items first'); return; }

  // Bounding box of all selected items in canvas px
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  sel.forEach(it=>{
    minX = Math.min(minX, it.x);
    minY = Math.min(minY, it.y);
    maxX = Math.max(maxX, it.x + ftToPx(it.w));
    maxY = Math.max(maxY, it.y + ftToPx(it.h));
  });

  const vr = viewport.getBoundingClientRect();
  const selW = maxX - minX;
  const selH = maxY - minY;

  // Target: selection fills roughly 40% of the viewport — enough to work
  // comfortably without being so zoomed in it feels distorted
  const pad = 120;
  const fitZoom = Math.min(
    (vr.width  - pad*2) / selW,
    (vr.height - pad*2) / selH
  );

  // Cap: never go above 1.5× (comfortable working zoom),
  // never below current zoom (don't zoom OUT when pressing Z)
  // unless the selection is off-screen, in which case navigate to it at current zoom
  const COMFORTABLE_MAX = 1.5;
  const newZoom = Math.min(fitZoom, COMFORTABLE_MAX);

  // If already zoomed in more than the target, just scroll to center — don't zoom out
  const targetZoom = zoom > newZoom ? zoom : newZoom;

  zoom = Math.max(0.15, targetZoom);
  applyZoom();

  // Scroll so selection center is in the middle of the viewport
  const selCx = (minX + maxX) / 2;
  const selCy = (minY + maxY) / 2;
  setTimeout(()=>{
    viewport.scrollLeft = selCx * zoom - vr.width / 2;
    viewport.scrollTop  = selCy * zoom - vr.height / 2;
  }, 10);
}

// Middle-mouse / space+drag pan
let panStart=null,panScroll=null,spaceDown=false;
document.addEventListener('keydown',e=>{if(e.code==='Space'&&e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA'){e.preventDefault();spaceDown=true;viewport.style.cursor='grab';}});
document.addEventListener('keyup',e=>{if(e.code==='Space'){spaceDown=false;viewport.style.cursor='';}});

viewport.addEventListener('mousedown',e=>{
  if(currentTool==='pan'||e.button===1||spaceDown){
    panStart={x:e.clientX,y:e.clientY};
    panScroll={x:viewport.scrollLeft,y:viewport.scrollTop};
    viewport.style.cursor='grabbing';
    e.preventDefault();
  }
});
window.addEventListener('mousemove',e=>{
  if(panStart){
    viewport.scrollLeft=panScroll.x-(e.clientX-panStart.x);
    viewport.scrollTop=panScroll.y-(e.clientY-panStart.y);
  }
  const rect=fpCanvas.getBoundingClientRect();
  const x=(e.clientX-rect.left)/zoom,y=(e.clientY-rect.top)/zoom;
  document.getElementById('st-x').textContent=pxToFt(x).toFixed(1)+'ft';
  document.getElementById('st-y').textContent=pxToFt(y).toFixed(1)+'ft';
});
window.addEventListener('mouseup',()=>{
  panStart=null;
  if(!spaceDown&&currentTool!=='pan') viewport.style.cursor='';
  else if(currentTool==='pan') viewport.style.cursor='grab';
});

// ═══════════════════════════════════════════════
// MARQUEE MULTI-SELECT
// ═══════════════════════════════════════════════
let marqueeStart=null;
let _itemMoving=false; // true while startMove onMove is active
const marqueeEl=document.getElementById('marquee');

// Convert screen coords to canvas-local px
// getBoundingClientRect returns position accounting for CSS transform,
// so (clientX - rect.left) is already in "scaled screen pixels".
// Dividing by zoom converts to actual canvas pixels.
function screenToCanvas(clientX, clientY){
  const rect=fpCanvas.getBoundingClientRect();
  return {
    x:(clientX-rect.left)/zoom,
    y:(clientY-rect.top)/zoom
  };
}

fpCanvas.addEventListener('touchstart',e=>{
  if(e.target.closest('.fitem'))return;
  if(multiSelectMode){ multiSelectMode=false; document.getElementById('btn-multiselect').classList.remove('active'); }
  clearSelection();
},{passive:true});
fpCanvas.addEventListener('mousedown',e=>{
  if(currentTool!=='select')return;
  if(e.button!==0)return;
  if(e.target.closest('.fitem'))return;
  const pos=screenToCanvas(e.clientX,e.clientY);
  marqueeStart={x:pos.x,y:pos.y};
  if(!e.shiftKey&&!e.metaKey&&!e.ctrlKey)clearSelection();
  e.preventDefault();
});
window.addEventListener('mousemove',e=>{
  if(!marqueeStart)return;
  const pos=screenToCanvas(e.clientX,e.clientY);
  const x=Math.min(marqueeStart.x,pos.x),y=Math.min(marqueeStart.y,pos.y);
  const w=Math.abs(pos.x-marqueeStart.x),h=Math.abs(pos.y-marqueeStart.y);
  if(w>3||h>3){
    marqueeEl.style.display='block';
    marqueeEl.style.left=x+'px';marqueeEl.style.top=y+'px';
    marqueeEl.style.width=w+'px';marqueeEl.style.height=h+'px';
  } else {
    marqueeEl.style.display='none';
  }
});
window.addEventListener('mouseup',e=>{
  if(!marqueeStart)return;
  const pos=screenToCanvas(e.clientX,e.clientY);
  const mx=Math.min(marqueeStart.x,pos.x),my=Math.min(marqueeStart.y,pos.y);
  const mw=Math.abs(pos.x-marqueeStart.x),mh=Math.abs(pos.y-marqueeStart.y);
  if(mw>6||mh>6){
    const hits=items
      .filter(item=>item.x+ftToPx(item.w)>mx&&item.x<mx+mw&&item.y+ftToPx(item.h)>my&&item.y<my+mh)
      .map(i=>i.id);
    if(hits.length>0) addManyToSelection(hits);
  }
  marqueeEl.style.display='none';
  marqueeStart=null;
});

// ═══════════════════════════════════════════════
// SHAPE DRAW TOOL
// ═══════════════════════════════════════════════
let currentShapeType = 'shape-rect';
let shapeDrawStart = null;
let shapeDrawPreview = null;

fpCanvas.addEventListener('mousedown', e => {
  if(currentTool !== 'shape') return;
  if(e.button !== 0) return;
  e.preventDefault();
  const pos = screenToCanvas(e.clientX, e.clientY);
  shapeDrawStart = pos;
  shapeDrawPreview = document.createElement('div');
  shapeDrawPreview.style.cssText = 'position:absolute;box-sizing:border-box;pointer-events:none;z-index:9999;border:2px dashed rgba(255,77,143,.8);background:rgba(255,77,143,.07)';
  if(currentShapeType === 'shape-ellipse') shapeDrawPreview.style.borderRadius = '50%';
  if(currentShapeType === 'shape-line' || currentShapeType === 'shape-arrow'){
    shapeDrawPreview.style.background = 'none';
    shapeDrawPreview.style.borderWidth = '0 0 2px 0';
  }
  shapeDrawPreview.style.left = pos.x + 'px';
  shapeDrawPreview.style.top  = pos.y + 'px';
  shapeDrawPreview.style.width = '0';
  shapeDrawPreview.style.height = '0';
  itemsLayer.appendChild(shapeDrawPreview);
});

window.addEventListener('mousemove', e => {
  if(!shapeDrawStart || currentTool !== 'shape') return;
  const pos = screenToCanvas(e.clientX, e.clientY);
  const isLineLike = currentShapeType==='shape-line'||currentShapeType==='shape-arrow';
  const x = Math.min(shapeDrawStart.x, pos.x);
  const y = Math.min(shapeDrawStart.y, pos.y);
  const w = Math.abs(pos.x - shapeDrawStart.x);
  const h = Math.abs(pos.y - shapeDrawStart.y);
  if(shapeDrawPreview){
    shapeDrawPreview.style.left  = x + 'px';
    shapeDrawPreview.style.top   = (isLineLike ? shapeDrawStart.y : y) + 'px';
    shapeDrawPreview.style.width  = w + 'px';
    shapeDrawPreview.style.height = (isLineLike ? 0 : h) + 'px';
  }
});

window.addEventListener('mouseup', e => {
  if(!shapeDrawStart || currentTool !== 'shape') return;
  if(shapeDrawPreview){ shapeDrawPreview.remove(); shapeDrawPreview = null; }
  const pos = screenToCanvas(e.clientX, e.clientY);
  const isLineLike = currentShapeType==='shape-line'||currentShapeType==='shape-arrow';
  let pw = Math.abs(pos.x - shapeDrawStart.x);
  let ph = Math.abs(pos.y - shapeDrawStart.y);
  const minPx = ftToPx(0.5);
  if(pw < minPx && ph < minPx){ shapeDrawStart = null; return; }
  if(pw < minPx) pw = minPx;
  if(ph < minPx || isLineLike) ph = ftToPx(1);
  const ix = Math.min(shapeDrawStart.x, pos.x);
  const iy = isLineLike ? shapeDrawStart.y - ftToPx(0.5) : Math.min(shapeDrawStart.y, pos.y);
  const def = CATALOG.find(c => c.id === currentShapeType);
  pushHistory();
  const item = {
    id: ++idSeq, type: currentShapeType,
    x: Math.max(0, ix), y: Math.max(0, iy),
    w: pxToFt(pw), h: pxToFt(ph),
    rotation: 0, color: '#b5832a',
    strokeColor: '#1c1917', strokeWidth: 2,
    label: def?.name || 'Shape', opacity: 1,
    zIndex: items.length + 1, groupId: null, visible: true
  };
  items.push(item);
  renderItem(item);
  clearSelection(); addToSelection(item.id);
  updateCount(); updateLayers(); buildLegend();
  markDirty();
  shapeDrawStart = null;
});

let multiSelectMode = false;
function toggleMultiSelect() {
  multiSelectMode = !multiSelectMode;
  document.getElementById('btn-multiselect').classList.toggle('active', multiSelectMode);
  showToast(multiSelectMode ? 'Multi-select ON — tap items to add/remove' : 'Multi-select OFF');
}

function toggleShapePicker(){
  const p = document.getElementById('shape-picker');
  const hidden = p.style.display === 'none' || p.style.display === '';
  if(hidden){
    const btn = document.getElementById('btn-shape');
    const r = btn.getBoundingClientRect();
    // Fallback position if layout hasn't fired yet
    const top  = r.bottom > 4 ? r.bottom + 4 : 52;
    const left = r.left   > 0 ? r.left       : 8;
    p.style.top  = top  + 'px';
    p.style.left = left + 'px';
    p.style.display = 'block';
  } else {
    p.style.display = 'none';
  }
}
function activateShape(type){
  currentShapeType = type;
  document.getElementById('shape-picker').style.display = 'none';
  setTool('shape');
  document.querySelectorAll('.shape-pick-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('spick-' + type.replace('shape-',''))?.classList.add('active');
}
document.addEventListener('click', e => {
  if(!e.target.closest('#btn-shape') && !e.target.closest('#shape-picker'))
    document.getElementById('shape-picker').style.display = 'none';
});

// ═══════════════════════════════════════════════
// UPLOAD & SCALE
// ═══════════════════════════════════════════════
function showUpload(){document.getElementById('upload-overlay').classList.add('visible');}
function skipUpload(){document.getElementById('upload-overlay').classList.remove('visible');setCanvasSize(1200,800);}
function handleFile(input){
  const file=input.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=ev=>{
    const img=document.getElementById('bg-img');
    img.src=ev.target.result;img.style.display='block';
    img.onload=()=>{
      setCanvasSize(Math.max(img.naturalWidth,800),Math.max(img.naturalHeight,600));
      document.getElementById('upload-overlay').classList.remove('visible');
      setTimeout(zoomFit,100);
    };
  };
  reader.readAsDataURL(file);input.value='';
}
function openScalePanel(){
  document.getElementById('scale-panel').classList.add('visible');
  document.getElementById('scale-step1').style.display='block';
  document.getElementById('scale-step2').style.display='none';
  document.getElementById('sp-feet').value='';
}
function closeScalePanel(){
  document.getElementById('scale-panel').classList.remove('visible');
  cancelScaleDraw();
}

// ─── SCALE DRAW STATE ───
let scaleDrawing=false, scalePoint1=null, scalePxMeasured=0;
const scaleLineLayer=()=>document.getElementById('scale-line-layer');
const scaleBanner=()=>document.getElementById('scale-draw-banner');

function startScaleDraw(){
  // Hide the panel, enter drawing mode
  document.getElementById('scale-panel').classList.remove('visible');
  scaleDrawing=true; scalePoint1=null;
  document.getElementById('canvas-area').classList.add('scale-drawing');
  scaleBanner().classList.add('show');
  scaleBanner().textContent='📐 Click first point on the floor plan…';
  // Capture clicks on the canvas
  fpCanvas.addEventListener('click', onScaleClick);
  fpCanvas.addEventListener('mousemove', onScaleMove);
}

function onScaleClick(e){
  if(!scaleDrawing)return;
  const rect=fpCanvas.getBoundingClientRect();
  const x=(e.clientX-rect.left)/zoom;
  const y=(e.clientY-rect.top)/zoom;
  if(!scalePoint1){
    scalePoint1={x,y};
    scaleBanner().textContent='📐 Now click the second point…';
    drawScalePoint(x,y);
  } else {
    // Second point — calculate pixel distance
    const dx=x-scalePoint1.x, dy=y-scalePoint1.y;
    scalePxMeasured=Math.sqrt(dx*dx+dy*dy);
    drawScaleLine(scalePoint1.x,scalePoint1.y,x,y,false);
    // Done drawing — show step 2
    fpCanvas.removeEventListener('click',onScaleClick);
    fpCanvas.removeEventListener('mousemove',onScaleMove);
    scaleDrawing=false;
    document.getElementById('canvas-area').classList.remove('scale-drawing');
    scaleBanner().classList.remove('show');
    // Show enter-length panel
    document.getElementById('scale-panel').classList.add('visible');
    document.getElementById('scale-step1').style.display='none';
    document.getElementById('scale-step2').style.display='block';
    document.getElementById('scale-px-readout').textContent=
      `Line drawn: ${Math.round(scalePxMeasured)}px on screen`;
    setTimeout(()=>{
      document.getElementById('sp-feet').focus();
      document.getElementById('sp-feet').select();
    },120);
  }
}

function onScaleMove(e){
  if(!scaleDrawing||!scalePoint1)return;
  const rect=fpCanvas.getBoundingClientRect();
  const x=(e.clientX-rect.left)/zoom;
  const y=(e.clientY-rect.top)/zoom;
  const dx=x-scalePoint1.x,dy=y-scalePoint1.y;
  const dist=Math.sqrt(dx*dx+dy*dy);
  drawScaleLine(scalePoint1.x,scalePoint1.y,x,y,true,dist);
}

function drawScalePoint(x,y){
  scaleLineLayer().innerHTML=`
    <circle cx="${x}" cy="${y}" r="5" fill="var(--accent)" opacity=".9"/>
    <circle cx="${x}" cy="${y}" r="10" fill="none" stroke="var(--accent)" stroke-width="1.5" opacity=".4"/>`;
}

function drawScaleLine(x1,y1,x2,y2,preview,pxDist){
  const capLen=10;
  const len=Math.hypot(x2-x1,y2-y1)||1;
  const nx=-(y2-y1)/len*capLen, ny=(x2-x1)/len*capLen;
  const mx=(x1+x2)/2, my=(y1+y2)/2;
  const dash=preview?'stroke-dasharray="6,3"':'';
  scaleLineLayer().innerHTML=`
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--accent)" stroke-width="2" ${dash}/>
    <line x1="${x1+nx}" y1="${y1+ny}" x2="${x1-nx}" y2="${y1-ny}" stroke="var(--accent)" stroke-width="2"/>
    <line x1="${x2+nx}" y1="${y2+ny}" x2="${x2-nx}" y2="${y2-ny}" stroke="var(--accent)" stroke-width="2"/>
    <circle cx="${x1}" cy="${y1}" r="5" fill="var(--accent)"/>
    <circle cx="${x2}" cy="${y2}" r="5" fill="var(--accent)"/>
    ${pxDist?`<rect x="${mx-28}" y="${my-11}" width="56" height="16" rx="3" fill="rgba(181,131,42,.9)"/>
    <text x="${mx}" y="${my+2}" text-anchor="middle" fill="white" font-family="JetBrains Mono" font-size="10">${Math.round(pxDist)}px</text>`:''}`;
}

function resetScaleDraw(){
  scaleLineLayer().innerHTML='';
  scalePoint1=null; scalePxMeasured=0;
  document.getElementById('scale-step1').style.display='block';
  document.getElementById('scale-step2').style.display='none';
  startScaleDraw();
}

function cancelScaleDraw(){
  scaleDrawing=false; scalePoint1=null;
  fpCanvas.removeEventListener('click',onScaleClick);
  fpCanvas.removeEventListener('mousemove',onScaleMove);
  document.getElementById('canvas-area').classList.remove('scale-drawing');
  scaleBanner().classList.remove('show');
  scaleLineLayer().innerHTML='';
}

function applyScale(){
  const ft=parseFloat(document.getElementById('sp-feet').value);
  if(!ft||ft<=0){
    document.getElementById('sp-feet').focus();
    document.getElementById('sp-feet').style.borderColor='var(--danger)';
    setTimeout(()=>document.getElementById('sp-feet').style.borderColor='',1200);
    return;
  }
  const px=scalePxMeasured||parseFloat(document.getElementById('sp-pixels')?.value)||0;
  if(!px||px<=0){alert('Please draw a line on the canvas first.');return;}
  pxPerFt=px/ft;
  document.getElementById('scale-info').textContent=`1ft = ${pxPerFt.toFixed(1)}px · Scale set ✓`;
  drawGrid(); buildPalette(); closeScalePanel();
  // Clear the scale line after a short delay
  setTimeout(()=>scaleLineLayer().innerHTML='',600);
  items.forEach(item=>{const el=document.getElementById('fi-'+item.id);if(el)refreshItemEl(item);});
  showToast(`Scale set: 1ft = ${pxPerFt.toFixed(1)}px`);
}

// ═══════════════════════════════════════════════
// ITEMS — RENDER & MANAGE
// ═══════════════════════════════════════════════
function getItemSVG(item){
  const def=CATALOG.find(c=>c.id===item.type);if(!def)return'';
  const w=ftToPx(item.w),h=ftToPx(item.h);
  if(def.isShape) return renderShapeSVG(item,w,h);
  return`<svg width="${w}" height="${h}" viewBox="0 0 100 100" preserveAspectRatio="none" style="display:block;position:absolute;inset:0;pointer-events:none">${def.draw(item.w,item.h,item.color||COLORS[0])}</svg>`;
}

function renderShapeSVG(item,w,h){
  const fill = item.color==='none'?'none':(item.color||'#b5832a');
  const stroke = item.strokeColor||'#1c1917';
  const sw = item.strokeWidth??2;
  const inset = sw/2;
  let inner='';
  if(item.type==='shape-rect'){
    inner=`<rect x="${inset}" y="${inset}" width="${Math.max(1,w-sw)}" height="${Math.max(1,h-sw)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
  } else if(item.type==='shape-ellipse'){
    inner=`<ellipse cx="${w/2}" cy="${h/2}" rx="${Math.max(1,w/2-inset)}" ry="${Math.max(1,h/2-inset)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
  } else if(item.type==='shape-triangle'){
    inner=`<polygon points="${w/2},${inset} ${w-inset},${h-inset} ${inset},${h-inset}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>`;
  } else if(item.type==='shape-line'){
    inner=`<line x1="${sw}" y1="${h/2}" x2="${w-sw}" y2="${h/2}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"/>`;
  } else if(item.type==='shape-arrow'){
    const uid='ah'+item.id;
    const hs=Math.max(sw*3,8);
    inner=`<defs><marker id="${uid}" markerWidth="4" markerHeight="4" refX="3.5" refY="2" orient="auto"><path d="M0,0 L4,2 L0,4 z" fill="${stroke}"/></marker></defs>`+
      `<line x1="${sw}" y1="${h/2}" x2="${w-hs}" y2="${h/2}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" marker-end="url(#${uid})"/>`;
  }
  return`<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="display:block;position:absolute;inset:0;pointer-events:none;overflow:visible">${inner}</svg>`;
}

function addItem(type,x,y){
  const def=CATALOG.find(c=>c.id===type);if(!def)return;
  pushHistory();
  const item={id:++idSeq,type,x,y,w:def.w,h:def.h,rotation:0,color:COLORS[0],label:def.name,opacity:1,zIndex:items.length+1,groupId:null,visible:true};
  items.push(item);
  renderItem(item);
  updateCount();updateLayers();
  clearSelection();addToSelection(item.id);
  return item;
}

function renderItem(item){
  const w=ftToPx(item.w),h=ftToPx(item.h);
  const def=CATALOG.find(c=>c.id===item.type);
  const isAnnotation=def?.isAnnotation||false;
  const isTextLabel=def?.isTextLabel||false;
  const el=document.createElement('div');
  el.className='fitem'+(item.locked?' locked':'')+(item.link?' has-link':'')+(item.groupId?' grouped':'');el.id='fi-'+item.id;
  el.style.cssText=`left:${item.x}px;top:${item.y}px;width:${w}px;height:${h}px;transform:rotate(${item.rotation}deg);z-index:${item.zIndex};opacity:${item.opacity};display:${item.visible===false?'none':'block'}`;

  // Text label items render as pure draggable text — no background box
  let annotationOverlay='';
  if(isTextLabel){
    const fs = item.textSize||24;
    const ff = item.textFont||'Karla';
    const fw = item.textBold?'700':'400';
    const fi = item.textItalic?'italic':'normal';
    const ta = item.textAlign||'center';
    const tc = item.color||'#1c1917';
    annotationOverlay=`<div class="annotation-text text-label-overlay" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:${ta==='left'?'flex-start':ta==='right'?'flex-end':'center'};padding:4px 6px;pointer-events:none;z-index:2">
      <span style="font-family:'${ff}',sans-serif;font-size:${fs}px;font-weight:${fw};font-style:${fi};color:${tc};text-align:${ta};word-break:break-word;line-height:1.2;max-width:100%;white-space:pre-wrap">${item.label||'Text'}</span>
    </div>`;
  } else if(isAnnotation){
    annotationOverlay=`<div class="annotation-text" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:6px;pointer-events:none;z-index:2">
      <span style="font-family:'Karla',sans-serif;font-size:${Math.max(10,Math.min(14,w/8))}px;font-weight:600;color:#5a4a00;text-align:center;word-break:break-word;line-height:1.3;max-width:100%">${item.label}</span>
     </div>`;
  }

  el.innerHTML=`
    <div class="fitem-inner">${getItemSVG(item)}${annotationOverlay}<div class="fitem-label">${item.label}</div></div>
    <div class="handle rot-handle"></div>
    <div class="handle del-handle" onclick="deleteItem(${item.id})"></div>
    <div class="lock-badge">🔒</div>
    <div class="link-badge" onclick="event.stopPropagation();openItemLink(${item.id})" onmousedown="event.stopPropagation()">🔗</div>
    <div class="resize-handle rh-tl" data-dir="tl"></div><div class="resize-handle rh-tr" data-dir="tr"></div>
    <div class="resize-handle rh-bl" data-dir="bl"></div><div class="resize-handle rh-br" data-dir="br"></div>
    <div class="resize-handle rh-ml" data-dir="ml"></div><div class="resize-handle rh-mr" data-dir="mr"></div>
    <div class="resize-handle rh-tm" data-dir="tm"></div><div class="resize-handle rh-bm" data-dir="bm"></div>
    <div class="dim-tip">${item.w.toFixed(1)}ft × ${item.h.toFixed(1)}ft</div>
    <div class="dim-badge">${item.w.toFixed(1)}′ × ${item.h.toFixed(1)}′</div>`;
  el.addEventListener('mousedown',e=>{
    if(e.button!==0)return;
    if(e.target.classList.contains('resize-handle')){startResize(e,item.id,e.target.dataset.dir);return;}
    if(e.target.classList.contains('del-handle'))return;
    if(e.target.classList.contains('rot-handle')){startRotate(e,item.id);return;}
    if(e.target.classList.contains('link-badge'))return;
    if(currentTool!=='select')return;
    e.stopPropagation();

    const liveItem=items.find(i=>i.id===item.id);
    if(!liveItem||liveItem.locked) return;

    if(e.shiftKey||e.ctrlKey||e.metaKey){
      const groupMembers = liveItem.groupId && groups[liveItem.groupId]?.length > 0
        ? groups[liveItem.groupId] : [liveItem.id];
      if(selectedIds.has(liveItem.id)) groupMembers.forEach(id => removeFromSelection(id));
      else groupMembers.forEach(id => addToSelection(id));
      return;
    }

    const def=CATALOG.find(c=>c.id===liveItem.type);
    if(def?.isAnnotation && handleAnnotationClick(liveItem.id)) return;

    if(!selectedIds.has(liveItem.id)){
      clearSelection();
      if(liveItem.groupId && groups[liveItem.groupId]?.length>0){
        groups[liveItem.groupId].forEach(id=>selectedIds.add(id));
        _refreshSelClasses();
      } else {
        selectedIds.add(liveItem.id);
        _refreshSelClasses();
      }
    } else if(liveItem.groupId && groups[liveItem.groupId] && selectedIds.size===1){
      groups[liveItem.groupId].forEach(id=>selectedIds.add(id));
      _refreshSelClasses();
    }

    startMove(e, liveItem.id);
    requestAnimationFrame(()=>{ updateRightPanel(); updateStatusBar(); });
  });
  // Native dblclick as a fallback for annotations
  el.addEventListener('dblclick', e => {
    const def = CATALOG.find(c => c.id === item.id);
    const liveItem = items.find(i => i.id === item.id);
    const liveDef = liveItem ? CATALOG.find(c => c.id === liveItem.type) : null;
    if(liveDef?.isAnnotation){ e.stopPropagation(); startAnnotationEdit(item.id); }
  });
  el.querySelectorAll('.resize-handle').forEach(h=>h.addEventListener('mousedown',e=>{e.stopPropagation();startResize(e,item.id,h.dataset.dir);}));
  el.addEventListener('contextmenu',e=>{e.preventDefault();if(!selectedIds.has(item.id)){clearSelection();addToSelection(item.id);}showCtxMenu(e.clientX,e.clientY);});
  itemsLayer.appendChild(el);
}

function refreshItemEl(item){
  const el=document.getElementById('fi-'+item.id);if(!el)return;
  const w=ftToPx(item.w),h=ftToPx(item.h);
  el.style.left=item.x+'px';el.style.top=item.y+'px';
  el.style.width=w+'px';el.style.height=h+'px';
  el.style.transform=`rotate(${item.rotation}deg)`;
  el.style.zIndex=item.zIndex;el.style.opacity=item.opacity;
  el.style.display=item.visible===false?'none':'block';
  el.classList.toggle('locked',!!item.locked);
  el.classList.toggle('has-link',!!item.link);
  el.querySelector('.fitem-label').textContent=item.label;
  el.querySelector('.dim-tip').textContent=`${item.w.toFixed(1)}ft × ${item.h.toFixed(1)}ft`;
  let badge=el.querySelector('.dim-badge');
  if(!badge){badge=document.createElement('div');badge.className='dim-badge';el.appendChild(badge);}
  badge.textContent=`${item.w.toFixed(1)}′ × ${item.h.toFixed(1)}′`;
  // Update annotation text overlay
  const annSpan=el.querySelector('.annotation-text span');
  if(annSpan){
    annSpan.textContent=item.label;
    annSpan.style.fontSize=Math.max(10,Math.min(14,w/8))+'px';
  }
  const svg=el.querySelector('svg');
  if(svg){const def=CATALOG.find(c=>c.id===item.type);svg.setAttribute('width',w);svg.setAttribute('height',h);svg.setAttribute('viewBox','0 0 100 100');svg.setAttribute('preserveAspectRatio','none');if(def)svg.innerHTML=def.draw(item.w,item.h,item.color||COLORS[0]);}
  // Update text label overlay inline
  const def=CATALOG.find(c=>c.id===item.type);
  if(def?.isTextLabel){
    const span=el.querySelector('.text-label-overlay span');
    if(span){
      span.textContent=item.label||'Text';
      span.style.fontSize=(item.textSize||24)+'px';
      span.style.fontFamily="'"+(item.textFont||'Karla')+"',sans-serif";
      span.style.fontWeight=item.textBold?'700':'400';
      span.style.fontStyle=item.textItalic?'italic':'normal';
      span.style.color=item.color||'#1c1917';
      span.style.textAlign=item.textAlign||'center';
      const overlay=el.querySelector('.text-label-overlay');
      if(overlay) overlay.style.justifyContent=(item.textAlign==='left')?'flex-start':(item.textAlign==='right')?'flex-end':'center';
    }
  }
}

// Drop
fpCanvas.addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='copy';});
fpCanvas.addEventListener('drop',e=>{
  e.preventDefault();
  const type=e.dataTransfer.getData('item-id');if(!type)return;
  const def=CATALOG.find(c=>c.id===type);if(!def)return;
  const rect=fpCanvas.getBoundingClientRect();
  let cx=(e.clientX-rect.left)/zoom;
  let cy=(e.clientY-rect.top)/zoom;
  if(snapOn){cx=Math.round(cx/ftToPx(SNAP_FT))*ftToPx(SNAP_FT);cy=Math.round(cy/ftToPx(SNAP_FT))*ftToPx(SNAP_FT);}
  if(def.isTableSet){
    dropTableSet(def, Math.max(0,cx), Math.max(0,cy));
  } else if(def.isLoungeSet){
    dropLoungeSet(def, Math.max(0,cx), Math.max(0,cy));
  } else {
    let x=cx-ftToPx(def.w)/2, y=cy-ftToPx(def.h)/2;
    addItem(type,Math.max(0,x),Math.max(0,y));
  }
});

// ═══════════════════════════════════════════════
// SELECTION
// ═══════════════════════════════════════════════
function clearSelection(){
  selectedIds.clear();
  document.querySelectorAll('.fitem').forEach(el=>{el.classList.remove('sel','multisel','multisel-lead');});
  showEmptyPanel();updateStatusBar();
}

// Add a single item and refresh all class states
function addToSelection(id){
  selectedIds.add(id);
  _refreshSelClasses();
  updateRightPanel(); updateStatusBar();
}

// Add multiple items at once — much more efficient than calling addToSelection repeatedly
function addManyToSelection(ids){
  ids.forEach(id=>selectedIds.add(id));
  _refreshSelClasses();
  updateRightPanel(); updateStatusBar();
}

// Assign .sel / .multisel / .multisel-lead classes based on current selectedIds
function _refreshSelClasses(){
  const ids=Array.from(selectedIds);
  const isMulti=ids.length>1;
  // First clear all
  document.querySelectorAll('.fitem.sel,.fitem.multisel').forEach(el=>{
    el.classList.remove('sel','multisel','multisel-lead');
  });
  ids.forEach((sid,i)=>{
    const el=document.getElementById('fi-'+sid);
    if(!el)return;
    if(i===0){
      el.classList.add('sel');
      if(isMulti) el.classList.add('multisel-lead');
    } else {
      el.classList.add('multisel');
    }
  });
}

function removeFromSelection(id){
  selectedIds.delete(id);
  const el=document.getElementById('fi-'+id);
  if(el){el.classList.remove('sel','multisel','multisel-lead');}
  _refreshSelClasses();
  updateRightPanel(); updateStatusBar();
}
function selectAll(){addManyToSelection(items.map(i=>i.id));}

function updateStatusBar(){
  const n=selectedIds.size;
  document.getElementById('st-sel').textContent=n;
  // Show/hide zoom-to-selection button
  const zBtn=document.getElementById('btn-zoom-sel');
  if(zBtn) zBtn.style.display=n>0?'flex':'none';
  if(n===1){
    const item=items.find(i=>i.id===Array.from(selectedIds)[0]);
    if(item){
      document.getElementById('st-w').textContent=item.w.toFixed(1)+'ft';
      document.getElementById('st-h').textContent=item.h.toFixed(1)+'ft';
      document.getElementById('st-rot').textContent=item.rotation+'°';
    }
  } else {document.getElementById('st-w').textContent='—';document.getElementById('st-h').textContent='—';document.getElementById('st-rot').textContent='—';}
}

// ═══════════════════════════════════════════════
// MOVE (all selected items)
// ═══════════════════════════════════════════════
function startMove(e,leadId){
  // Alt+drag = duplicate selection then move copies
  if(e.altKey && selectedIds.size > 0){
    e.preventDefault();
    expandSelectionToGroups();
    pushHistory();
    const offset=ftToPx(0.1);
    const groupRemap={};
    const newIds=[];
    const originals=Array.from(selectedIds).map(id=>items.find(i=>i.id===id)).filter(Boolean);
    originals.forEach(src=>{
      let newGroupId=null;
      if(src.groupId){
        if(!groupRemap[src.groupId]) groupRemap[src.groupId]='g'+(++groupSeq);
        newGroupId=groupRemap[src.groupId];
      }
      const newItem={...JSON.parse(JSON.stringify(src)),id:++idSeq,x:src.x+offset,y:src.y+offset,groupId:newGroupId,zIndex:items.length+1};
      items.push(newItem);renderItem(newItem);newIds.push(newItem.id);
      if(newGroupId){
        if(!groups[newGroupId]) groups[newGroupId]=[];
        groups[newGroupId].push(newItem.id);
        document.getElementById('fi-'+newItem.id)?.classList.add('grouped');
      }
    });
    clearSelection();
    newIds.forEach(id=>addToSelection(id));
    updateCount();updateLayers();
    showToast('Alt+drag: duplicated — drag to position');
    leadId=newIds[0]||leadId;
  }

  const leadItem=items.find(i=>i.id===leadId);
  if(!leadItem) return;
  if(leadItem.locked){ showToast('Item is locked — press L to unlock'); return; }

  if(leadItem.groupId && groups[leadItem.groupId]?.length>0){
    addManyToSelection(groups[leadItem.groupId]);
  }

  const startMX=e.clientX, startMY=e.clientY;
  const startPositions=new Map();
  selectedIds.forEach(id=>{
    const it=items.find(i=>i.id===id);
    if(it&&!it.locked) startPositions.set(id,{x:it.x,y:it.y});
  });
  if(!e.altKey) pushHistory();

  function onMove(ev){
    const dx=(ev.clientX-startMX)/zoom, dy=(ev.clientY-startMY)/zoom;
    startPositions.forEach(({x,y},id)=>{
      const it=items.find(i=>i.id===id);if(!it)return;
      it.x=Math.max(0,x+dx); it.y=Math.max(0,y+dy);
      const el=document.getElementById('fi-'+id);
      if(el){ el.style.left=it.x+'px'; el.style.top=it.y+'px'; }
    });
    updateSpacingGuides();
  }

  function onUp(){
    window.removeEventListener('mousemove',onMove);
    window.removeEventListener('mouseup',onUp);
    clearSpacingGuides();
    markDirty();
    updateRightPanel();
  }

  window.addEventListener('mousemove',onMove);
  window.addEventListener('mouseup',onUp);
}

// ═══════════════════════════════════════════════
// RESIZE
// ═══════════════════════════════════════════════
function startResize(e,id,dir){
  e.preventDefault();
  const item=items.find(i=>i.id===id);if(!item)return;
  if(item.locked){showToast('Item is locked — unlock first (L)');return;}
  pushHistory();
  const startMX=e.clientX,startMY=e.clientY;
  const startW=ftToPx(item.w),startH=ftToPx(item.h),startX=item.x,startY=item.y;
  const el=document.getElementById('fi-'+id);el.classList.add('resizing');
  function onMove(e){
    const dx=(e.clientX-startMX)/zoom,dy=(e.clientY-startMY)/zoom;
    let nW=startW,nH=startH,nX=startX,nY=startY;
    if(dir.includes('r'))nW=Math.max(ftToPx(.5),startW+dx);
    if(dir.includes('l')){nW=Math.max(ftToPx(.5),startW-dx);nX=startX+(startW-nW);}
    if(dir.includes('b'))nH=Math.max(ftToPx(.5),startH+dy);
    if(dir.includes('t')){nH=Math.max(ftToPx(.5),startH-dy);nY=startY+(startH-nH);}
    if(dir==='ml'||dir==='mr'){nH=startH;}
    if(dir==='tm'||dir==='bm'){nW=startW;}
    if(snapOn){nW=Math.round(nW/ftToPx(SNAP_FT))*ftToPx(SNAP_FT);nH=Math.round(nH/ftToPx(SNAP_FT))*ftToPx(SNAP_FT);}
    item.w=Math.max(.5,pxToFt(nW));item.h=Math.max(.5,pxToFt(nH));item.x=nX;item.y=nY;
    refreshItemEl(item);updateStatusBar();
  }
  function onUp(){el.classList.remove('resizing');window.removeEventListener('mousemove',onMove);window.removeEventListener('mouseup',onUp);markDirty();updateRightPanel();}
  window.addEventListener('mousemove',onMove);window.addEventListener('mouseup',onUp);
}

// ═══════════════════════════════════════════════
// ROTATE
// ═══════════════════════════════════════════════
function startRotate(e,id){
  e.preventDefault();e.stopPropagation();
  const leadItem=items.find(i=>i.id===id);if(!leadItem)return;
  pushHistory();

  // Collect all items to rotate — group members take priority
  const rotateIds=new Set([id]);
  if(leadItem.groupId && groups[leadItem.groupId] && groups[leadItem.groupId].length>1){
    groups[leadItem.groupId].forEach(mid=>rotateIds.add(mid));
  } else {
    selectedIds.forEach(sid=>rotateIds.add(sid));
  }
  const rotateItems=[...rotateIds].map(rid=>items.find(i=>i.id===rid)).filter(Boolean);
  const isSingle=rotateItems.length===1;

  // Calculate group center in CANVAS coordinates (not screen — avoids zoom issues)
  let gcxCanvas, gcyCanvas;
  if(isSingle){
    gcxCanvas = leadItem.x + ftToPx(leadItem.w)/2;
    gcyCanvas = leadItem.y + ftToPx(leadItem.h)/2;
  } else {
    gcxCanvas = rotateItems.reduce((s,it)=>s+it.x+ftToPx(it.w)/2,0)/rotateItems.length;
    gcyCanvas = rotateItems.reduce((s,it)=>s+it.y+ftToPx(it.h)/2,0)/rotateItems.length;
  }

  // Convert group center to screen coordinates
  const canvasRect = fpCanvas.getBoundingClientRect();
  const cx = canvasRect.left + gcxCanvas * zoom;
  const cy = canvasRect.top  + gcyCanvas * zoom;

  // Store each item's start state in canvas coords
  const startStates=rotateItems.map(it=>({
    item:it,
    startRot:it.rotation,
    // Offset of item center from group center, in canvas px
    offX:(it.x+ftToPx(it.w)/2) - gcxCanvas,
    offY:(it.y+ftToPx(it.h)/2) - gcyCanvas,
    startX:it.x, startY:it.y
  }));

  const startAngle=Math.atan2(e.clientY-cy, e.clientX-cx)*180/Math.PI;

  function onMove(e){
    const currentAngle=Math.atan2(e.clientY-cy, e.clientX-cx)*180/Math.PI;
    let delta=currentAngle-startAngle;
    if(snapOn) delta=Math.round(delta/15)*15;
    const rad=delta*Math.PI/180;
    const cosA=Math.cos(rad), sinA=Math.sin(rad);

    startStates.forEach(({item:it,startRot,offX,offY})=>{
      it.rotation=((startRot+delta)%360+360)%360;
      if(!isSingle){
        // Rotate position around group center in canvas coords
        const newOffX = offX*cosA - offY*sinA;
        const newOffY = offX*sinA + offY*cosA;
        it.x = Math.max(0, gcxCanvas + newOffX - ftToPx(it.w)/2);
        it.y = Math.max(0, gcyCanvas + newOffY - ftToPx(it.h)/2);
      }
      refreshItemEl(it);
    });
    updateStatusBar();
    // Sync right panel rotation display
    const r=startStates[0]?.item.rotation||0;
    const rotSlider=document.getElementById('rot-slider');
    const rotInput=document.getElementById('rot-input');
    const rotVal=document.getElementById('rot-val');
    if(rotSlider)rotSlider.value=r;
    if(rotInput)rotInput.value=r;
    if(rotVal)rotVal.textContent=r+'°';
  }
  function onUp(){
    window.removeEventListener('mousemove',onMove);
    window.removeEventListener('mouseup',onUp);
    markDirty();updateRightPanel();
  }
  window.addEventListener('mousemove',onMove);
  window.addEventListener('mouseup',onUp);
}

// Rotate a single item and sync all UI controls
function setRotation(id,deg){
  const item=items.find(i=>i.id===id);if(!item)return;
  deg=((Math.round(deg)%360)+360)%360;
  item.rotation=deg;
  refreshItemEl(item);
  // Sync all three controls
  const rotSlider=document.getElementById('rot-slider');
  const rotInput=document.getElementById('rot-input');
  const rotVal=document.getElementById('rot-val');
  if(rotSlider)rotSlider.value=deg;
  if(rotInput)rotInput.value=deg;
  if(rotVal)rotVal.textContent=deg+'°';
  updateStatusBar();
}

function rotateSelected(deg){
  selectedIds.forEach(id=>{
    const item=items.find(i=>i.id===id);if(!item)return;
    item.rotation=((item.rotation+deg)%360+360)%360;
    refreshItemEl(item);
  });
  updateRightPanel();
}

// Rotate all selected items to an absolute angle, pivoting around their collective center
function rotateAllSelected(targetDeg) {
  targetDeg = ((Math.round(targetDeg) % 360) + 360) % 360;
  const sel = Array.from(selectedIds).map(id=>items.find(i=>i.id===id)).filter(Boolean);
  if (!sel.length) return;

  // Calculate group center in canvas coords
  const gcx = sel.reduce((s,it)=>s+it.x+ftToPx(it.w)/2,0)/sel.length;
  const gcy = sel.reduce((s,it)=>s+it.y+ftToPx(it.h)/2,0)/sel.length;

  if (sel.length === 1) {
    // Single item — just set rotation directly
    setRotation(sel[0].id, targetDeg);
    return;
  }

  // For groups: rotate each item around the group center
  // We need the delta from the "reference" rotation (first item's current rotation)
  const refRot = sel[0].rotation;
  const delta = targetDeg - refRot;
  const rad = delta * Math.PI / 180;
  const cosA = Math.cos(rad), sinA = Math.sin(rad);

  sel.forEach(it => {
    it.rotation = ((it.rotation + delta) % 360 + 360) % 360;
    // Rotate position around group center
    const offX = (it.x + ftToPx(it.w)/2) - gcx;
    const offY = (it.y + ftToPx(it.h)/2) - gcy;
    const newOffX = offX*cosA - offY*sinA;
    const newOffY = offX*sinA + offY*cosA;
    it.x = Math.max(0, gcx + newOffX - ftToPx(it.w)/2);
    it.y = Math.max(0, gcy + newOffY - ftToPx(it.h)/2);
    refreshItemEl(it);
  });

  // Sync all panel controls
  const rotSlider = document.getElementById('rot-slider');
  const rotInput  = document.getElementById('rot-input');
  const rotVal    = document.getElementById('rot-val');
  if (rotSlider) rotSlider.value = targetDeg;
  if (rotInput)  rotInput.value  = targetDeg;
  if (rotVal)    rotVal.textContent = targetDeg + '°';
  updateStatusBar();
}

// ═══════════════════════════════════════════════
// GROUPS
// ═══════════════════════════════════════════════
let groupSeq=0;
function groupSelected(){
  if(selectedIds.size<2)return;
  pushHistory();
  const gid='g'+(++groupSeq);
  selectedIds.forEach(id=>{
    const item=items.find(i=>i.id===id);
    if(item){item.groupId=gid;const el=document.getElementById('fi-'+id);if(el)el.classList.add('grouped');}
  });
  groups[gid]=Array.from(selectedIds);
  updateLayers();
}
function ungroupSelected(){
  const gids=new Set();
  selectedIds.forEach(id=>{const item=items.find(i=>i.id===id);if(item&&item.groupId)gids.add(item.groupId);});
  if(!gids.size)return;
  pushHistory();
  gids.forEach(gid=>{
    const memberIds=groups[gid]||[];
    memberIds.forEach(id=>{
      const item=items.find(i=>i.id===id);
      if(item){item.groupId=null;const el=document.getElementById('fi-'+id);if(el)el.classList.remove('grouped');}
    });
    delete groups[gid];
  });
  updateLayers();
}
function selectGroup(gid){
  clearSelection();
  const memberIds=groups[gid]||[];
  memberIds.forEach(id=>addToSelection(id));
}

// ═══════════════════════════════════════════════
// LAYERS PANEL
// ═══════════════════════════════════════════════
function toggleLayersPanel(){
  layersPanelOpen=!layersPanelOpen;
  document.getElementById('layers-list').classList.toggle('open',layersPanelOpen);
  document.getElementById('layers-header').classList.toggle('open',layersPanelOpen);
}
function updateLayers(){
  const list=document.getElementById('layers-list');
  document.getElementById('layer-count').textContent='('+items.length+')';
  const sortedItems=[...items].sort((a,b)=>(b.zIndex||1)-(a.zIndex||1));
  // Build group headers
  const shownGroups=new Set();
  let html='';
  sortedItems.forEach(item=>{
    if(item.groupId&&!shownGroups.has(item.groupId)){
      shownGroups.add(item.groupId);
      const memberCount=(groups[item.groupId]||[]).length;
      html+=`<div class="layer-item group-layer" onclick="selectGroup('${item.groupId}')">
        <span style="font-size:.75rem">⊞</span>
        <span>Group (${memberCount} items)</span>
        <span class="layer-z">${item.groupId}</span>
      </div>`;
    }
    const icon=item.groupId?'  └':'◻';
    const vis=item.visible===false?'👁‍🗨':'👁';
    html+=`<div class="layer-item ${selectedIds.has(item.id)?'active':''}" onclick="layerClick(${item.id},event)">
      <span class="layer-vis" onclick="toggleVisibility(${item.id},event)">${vis}</span>
      <span style="font-size:.72rem;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${icon} ${item.label}</span>
      <span class="layer-z">${item.zIndex||1}</span>
    </div>`;
  });
  list.innerHTML=html||'<div style="padding:8px 12px;font-size:.72rem;color:var(--faint)">No items yet</div>';
}
function layerClick(id,e){
  if(e.shiftKey||e.ctrlKey||e.metaKey)addToSelection(id);
  else{clearSelection();addToSelection(id);}
  updateLayers();
}
function toggleVisibility(id,e){
  e.stopPropagation();
  const item=items.find(i=>i.id===id);if(!item)return;
  item.visible=item.visible===false;
  refreshItemEl(item);updateLayers();
}

// ═══════════════════════════════════════════════
// Z-ORDER
// ═══════════════════════════════════════════════
function getSelItems(){return Array.from(selectedIds).map(id=>items.find(i=>i.id===id)).filter(Boolean);}
function bringToFront(){getSelItems().forEach(item=>{item.zIndex=Math.max(...items.map(i=>i.zIndex||1))+1;refreshItemEl(item);});updateLayers();}
function sendToBack(){getSelItems().forEach(item=>{item.zIndex=Math.max(1,(Math.min(...items.map(i=>i.zIndex||1))-1));refreshItemEl(item);});updateLayers();}
function bringForward(){getSelItems().forEach(item=>{item.zIndex=(item.zIndex||1)+2;refreshItemEl(item);});updateLayers();}
function sendBackward(){getSelItems().forEach(item=>{item.zIndex=Math.max(1,(item.zIndex||1)-2);refreshItemEl(item);});updateLayers();}

// ═══════════════════════════════════════════════
// ALIGN & DISTRIBUTE & TIDY GRID
// ═══════════════════════════════════════════════
// Build group-aware alignment units from the current selection.
// Each unit represents one group (or one ungrouped item) with a combined bounding box.
function _buildAlignUnits(sel) {
  const unitMap = new Map();
  sel.forEach(item => {
    const key = item.groupId || ('i' + item.id);
    if (!unitMap.has(key)) unitMap.set(key, { items:[], minX:Infinity, minY:Infinity, maxX:-Infinity, maxY:-Infinity });
    const u = unitMap.get(key);
    u.items.push(item);
    u.minX = Math.min(u.minX, item.x);
    u.minY = Math.min(u.minY, item.y);
    u.maxX = Math.max(u.maxX, item.x + ftToPx(item.w));
    u.maxY = Math.max(u.maxY, item.y + ftToPx(item.h));
  });
  return Array.from(unitMap.values());
}

function alignItems(mode){
  const sel=getSelItems();if(sel.length<2)return;
  pushHistory();
  const units=_buildAlignUnits(sel);
  const minX=Math.min(...units.map(u=>u.minX));
  const minY=Math.min(...units.map(u=>u.minY));
  const maxX=Math.max(...units.map(u=>u.maxX));
  const maxY=Math.max(...units.map(u=>u.maxY));
  const centerX=(minX+maxX)/2, centerY=(minY+maxY)/2;
  units.forEach(u=>{
    let dx=0, dy=0;
    if(mode==='left')         dx=minX-u.minX;
    else if(mode==='right')   dx=maxX-u.maxX;
    else if(mode==='centerH') dx=centerX-(u.minX+u.maxX)/2;
    else if(mode==='top')     dy=minY-u.minY;
    else if(mode==='bottom')  dy=maxY-u.maxY;
    else if(mode==='centerV') dy=centerY-(u.minY+u.maxY)/2;
    u.items.forEach(item=>{ item.x+=dx; item.y+=dy; refreshItemEl(item); });
  });
}
function distributeItems(axis){
  const sel=getSelItems();if(sel.length<3)return;
  pushHistory();
  const units=_buildAlignUnits(sel);
  if(units.length<3)return;
  if(axis==='h'){
    units.sort((a,b)=>a.minX-b.minX);
    const total=units[units.length-1].maxX-units[0].minX;
    const itemsWidth=units.reduce((s,u)=>s+(u.maxX-u.minX),0);
    const gap=(total-itemsWidth)/(units.length-1);
    let cx=units[0].maxX;
    units.slice(1,-1).forEach(u=>{
      const dx=cx+gap-u.minX;
      u.items.forEach(item=>{ item.x+=dx; refreshItemEl(item); });
      cx=u.minX+dx+(u.maxX-u.minX);
    });
  } else {
    units.sort((a,b)=>a.minY-b.minY);
    const total=units[units.length-1].maxY-units[0].minY;
    const itemsH=units.reduce((s,u)=>s+(u.maxY-u.minY),0);
    const gap=(total-itemsH)/(units.length-1);
    let cy=units[0].maxY;
    units.slice(1,-1).forEach(u=>{
      const dy=cy+gap-u.minY;
      u.items.forEach(item=>{ item.y+=dy; refreshItemEl(item); });
      cy=u.minY+dy+(u.maxY-u.minY);
    });
  }
}
function distributeAlongAngle(){
  const sel=getSelItems();
  if(sel.length<2){showToast('Select 2+ items to distribute along angle');return;}
  pushHistory();

  // Detect angle from first selected item's rotation
  const angleDeg=sel[0].rotation||0;
  const rad=angleDeg*Math.PI/180;
  const cosA=Math.cos(rad), sinA=Math.sin(rad);

  // Get each item's center in canvas coords
  const centers=sel.map(item=>({
    item,
    cx:item.x+ftToPx(item.w)/2,
    cy:item.y+ftToPx(item.h)/2
  }));

  // Project each center onto the angle axis (dot product with direction vector)
  // Direction along the angle: (cosA, sinA)
  centers.forEach(c=>{
    c.proj = c.cx*cosA + c.cy*sinA; // position along the rail
    c.perp = -c.cx*sinA + c.cy*cosA; // position perpendicular to the rail
  });

  // Sort by position along the rail
  centers.sort((a,b)=>a.proj-b.proj);

  // Calculate total span and even spacing
  const first=centers[0], last=centers[centers.length-1];
  const span=last.proj-first.proj;
  const step=span/(centers.length-1);

  // Move each item to evenly-spaced positions along the rail,
  // keeping each item's perpendicular position (perp) unchanged
  centers.forEach((c,i)=>{
    const targetProj=first.proj+i*step;
    // Convert back from (proj, perp) to (cx, cy)
    const newCx=targetProj*cosA - c.perp*sinA;
    const newCy=targetProj*sinA + c.perp*cosA;
    c.item.x=Math.max(0, newCx-ftToPx(c.item.w)/2);
    c.item.y=Math.max(0, newCy-ftToPx(c.item.h)/2);
    refreshItemEl(c.item);
  });

  showToast(`Distributed ${sel.length} items along ${angleDeg}° axis`);
}

function alignToAngle(){
  const sel=getSelItems();
  if(sel.length<2){showToast('Select 2+ items to align along angle');return;}
  pushHistory();

  const angleDeg=sel[0].rotation||0;
  const rad=angleDeg*Math.PI/180;
  const cosA=Math.cos(rad), sinA=Math.sin(rad);

  // Find average perpendicular position (the "rail line" to snap to)
  const centers=sel.map(item=>({
    item,
    cx:item.x+ftToPx(item.w)/2,
    cy:item.y+ftToPx(item.h)/2
  }));
  centers.forEach(c=>{
    c.proj = c.cx*cosA + c.cy*sinA;
    c.perp = -c.cx*sinA + c.cy*cosA;
  });

  const avgPerp=centers.reduce((s,c)=>s+c.perp,0)/centers.length;

  // Snap all items to the same perpendicular position (same line along the angle)
  centers.forEach(c=>{
    const newCx=c.proj*cosA - avgPerp*sinA;
    const newCy=c.proj*sinA + avgPerp*cosA;
    c.item.x=Math.max(0, newCx-ftToPx(c.item.w)/2);
    c.item.y=Math.max(0, newCy-ftToPx(c.item.h)/2);
    refreshItemEl(c.item);
  });

  showToast(`Aligned ${sel.length} items along ${angleDeg}° axis`);
}

function tidyGrid(){
  // Snaps ALL selected items to nearest grid point and evenly spaces them
  const sel=getSelItems();
  const targets=sel.length>0?sel:items;
  if(targets.length===0)return;
  pushHistory();
  const snapPx=ftToPx(1); // snap to 1ft grid for tidy
  targets.forEach(item=>{
    item.x=Math.round(item.x/snapPx)*snapPx;
    item.y=Math.round(item.y/snapPx)*snapPx;
    item.w=Math.round(item.w*2)/2; // round to 0.5ft
    item.h=Math.round(item.h*2)/2;
    refreshItemEl(item);
  });
  showToast('Snapped '+targets.length+' items to 1ft grid');
}

// Toast
function showToast(msg){
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;bottom:40px;left:50%;transform:translateX(-50%);background:var(--sidebar);color:var(--accent2);font-family:"JetBrains Mono",monospace;font-size:.75rem;padding:7px 16px;border-radius:20px;z-index:9999;pointer-events:none;transition:opacity .3s';document.body.appendChild(t);}
  t.textContent=msg;t.style.opacity='1';
  clearTimeout(t._to);t._to=setTimeout(()=>{t.style.opacity='0';},2200);
}

function flipH(){selectedIds.forEach(id=>{const item=items.find(i=>i.id===id);if(item){item.rotation=(360-item.rotation)%360;refreshItemEl(item);}});}

// ═══════════════════════════════════════════════
// DELETE / DUPLICATE
// ═══════════════════════════════════════════════
function deleteItem(id){
  pushHistory();items=items.filter(i=>i.id!==id);
  document.getElementById('fi-'+id)?.remove();
  removeNote(id); // clean up any attached note
  selectedIds.delete(id);
  updateCount();updateLayers();updateRightPanel();
}
// Expand selectedIds to include all members of any selected group
function expandSelectionToGroups(){
  const gidsToExpand=new Set();
  selectedIds.forEach(id=>{
    const item=items.find(i=>i.id===id);
    if(item?.groupId) gidsToExpand.add(item.groupId);
  });
  const toAdd=[];
  gidsToExpand.forEach(gid=>{
    (groups[gid]||[]).forEach(id=>{if(!selectedIds.has(id))toAdd.push(id);});
  });
  if(toAdd.length>0) addManyToSelection(toAdd);
}

function deleteSelected(){
  if(selectedIds.size===0)return;
  expandSelectionToGroups();
  pushHistory();
  const ids=Array.from(selectedIds);
  ids.forEach(id=>{items=items.filter(i=>i.id!==id);document.getElementById('fi-'+id)?.remove();});
  // Clean up empty groups
  ids.forEach(id=>{
    const item=items.find(i=>i.id===id);
    if(item?.groupId){
      const gid=item.groupId;
      if(!(groups[gid]||[]).some(mid=>items.find(i=>i.id===mid))) delete groups[gid];
    }
  });
  clearSelection();updateCount();updateLayers();
}

function duplicateSelected(){
  if(selectedIds.size===0)return;
  expandSelectionToGroups();
  pushHistory();

  const offset=ftToPx(1.5);
  const groupRemap={};
  const newIds=[];

  // Snapshot originals BEFORE pushing new items
  const originals=Array.from(selectedIds).map(id=>items.find(i=>i.id===id)).filter(Boolean);

  // First pass: create items and register groups fully
  originals.forEach(src=>{
    let newGroupId=null;
    if(src.groupId){
      if(!groupRemap[src.groupId]) groupRemap[src.groupId]='g'+(++groupSeq);
      newGroupId=groupRemap[src.groupId];
    }
    const newItem={
      ...JSON.parse(JSON.stringify(src)),
      id:++idSeq,
      x:src.x+offset,
      y:src.y+offset,
      groupId:newGroupId,
      zIndex:items.length+1
    };
    items.push(newItem);
    newIds.push(newItem.id);
    if(newGroupId){
      if(!groups[newGroupId]) groups[newGroupId]=[];
      groups[newGroupId].push(newItem.id);
    }
  });

  // Second pass: render after all groups registered
  newIds.forEach(id=>{
    const it=items.find(i=>i.id===id);
    if(!it)return;
    renderItem(it);
    if(it.groupId) document.getElementById('fi-'+it.id)?.classList.add('grouped');
  });

  clearSelection();
  addManyToSelection(newIds);
  updateCount();updateLayers();buildLegend();
  showToast(`Duplicated ${newIds.length} item${newIds.length>1?'s':''}`);
}
// Seat counts per item type
const SEAT_COUNTS = {
  // Barstools — 1 each
  'barstool-round':1,'barstool-square':1,'barstool-back':1,'barstool-swivel':1,
  'barstool-ghost':1,'barstool-cross':1,'barstool-saddle':1,
  'cort-naples-bar-stool':1,'cort-baja-bar-stool':1,'cort-allegro-bar-stool':1,
  // Chairs — 1 each
  'chair-banquet':1,'chair-cross':1,'chair-ghost':1,'chair-chiavari':1,
  'cort-blade-chair':1,'cort-chelsea-chair':1,'cort-laguna-chair':1,
  'cort-lucent-chair':1,'cort-lyon-chair':1,'cort-malba-chair':1,
  'cort-marina-chair':1,'cort-zenith-chair':1,
  // Club / accent chairs
  'club-chair':1,'accent-chair':1,'cort-aruba-lounge':1,'cort-atherton-chair':1,
  'cort-bowery-chair':1,'cort-century-chair':1,'cort-labrea-chair':1,
  'cort-lorna-chair':1,'cort-madrid-chair':1,'cort-malibu-chair':1,
  'cort-pasadena-chair':1,'cort-swanson-swivel':1,'cort-terrace-chair':1,
  'cort-wagner-chair':1,'cort-wentworth-swivel':1,
  'cort-allegro-chair':1,'cort-aspen-chair':1,'cort-baja-chair':1,
  'cort-brighton-armless':1,'cort-brighton-corner':1,'cort-cabo-chair':1,
  'cort-chandler-chair':1,'cort-cordoba-chair':1,'cort-fairfax-chair':1,
  'cort-keylargo-chair':1,'cort-monroe-chair':1,'cort-montreal-chair':1,
  'cort-munich-armless':1,'cort-munich-corner':1,'cort-naples-chair':1,
  'cort-sterling-chair':1,'cort-valencia-chair':1,
  // Chaise / lounge
  'chaise':1,
  // Loveseats — 2
  'cort-allegro-loveseat':2,'cort-aspen-loveseat':2,'cort-baja-loveseat':2,
  'cort-brighton-loveseat':2,'cort-cordoba-loveseat':2,'cort-fairfax-loveseat':2,
  'cort-keylargo-loveseat':2,'cort-monroe-loveseat':2,'cort-montreal-loveseat':2,
  'cort-munich-armless-loveseat':2,'cort-munich-loveseat-arms':2,
  'cort-naples-loveseat':2,'cort-sterling-chair':1,'cort-valencia-loveseat':2,
  'sofa-2':2,
  // Sofas — 3
  'sofa-3':3,'cort-allegro-sofa':3,'cort-baja-sofa':3,'cort-brighton-sofa':3,
  'cort-cabo-sofa':3,'cort-chandler-sofa':3,'cort-constellation-sofa':3,
  'cort-keylargo-sofa':3,'cort-munich-sofa-arms':3,'cort-naples-sofa':3,
  'cort-palmbeach-sofa':3,'cort-sterling-sofa':3,
  // Sectionals
  'sectional-l':5,'cort-brighton-sectional':5,'cort-boca-sectional':6,
  'cort-munich-sectional':4,
  // Round tables (with chairs)
  'tbl-r48':6,'tbl-r60':8,'tbl-r72':10,
  'cort-boca-loveseat':2,'cort-boca-sofa':3,
  // Rect tables
  'tbl-6ft':6,'tbl-8ft':8,'tbl-farm':8,'tbl-sweetheart':2,
  // Cocktail / hi-tops (standing, count 4-6)
  'tbl-cocktail':4,'tbl-cocktail-hi':4,
};

function getSeats(type){ return SEAT_COUNTS[type]||0; }

let legendOpen=false, legendOverlayOn=false;

function updateCount(){
  document.getElementById('tally-num').textContent=items.length;
  buildLegend();
}

function toggleLegend(){
  legendOpen=!legendOpen;
  document.getElementById('legend-list').classList.toggle('open',legendOpen);
  document.getElementById('legend-header').classList.toggle('open',legendOpen);
  if(legendOpen) buildLegend();
}

function buildLegend(){
  // Group by type+label+color
  const counts={};
  let totalSeats=0;
  items.forEach(item=>{
    const key=item.type+'|'+item.label+'|'+(item.color||'');
    if(!counts[key]) counts[key]={type:item.type,label:item.label,count:0,color:item.color||'#b5832a',seats:getSeats(item.type)};
    counts[key].count++;
    totalSeats+=getSeats(item.type);
  });

  const entries=Object.values(counts).sort((a,b)=>b.count-a.count);
  document.getElementById('legend-type-count').textContent='('+entries.length+' type'+(entries.length!==1?'s':'')+')';

  const rowsEl=document.getElementById('legend-rows');
  if(entries.length===0){
    rowsEl.innerHTML='<div style="padding:6px 13px;font-size:.72rem;color:var(--faint)">No items on canvas yet</div>';
    updateCanvasLegend(entries,0);
    return;
  }

  rowsEl.innerHTML=entries.map(e=>{
    const def=CATALOG.find(c=>c.id===e.type);
    const iconSvg=def?def.draw(def.w,def.h,e.color):'';
    const iw=def?Math.min(ftToPx(def.w),28):24;
    const ih=def?Math.min(ftToPx(def.h),28):24;
    const vw=def?ftToPx(def.w):24;
    const vh=def?ftToPx(def.h):24;
    const seatStr=e.seats>0?`<span style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--sage);background:rgba(95,122,94,.12);padding:1px 5px;border-radius:3px;margin-left:3px">${e.seats*e.count}🪑</span>`:'';
    return `<div class="legend-row" onclick="selectByType('${e.type}')" title="Click to select all">
      <svg class="legend-icon" width="${iw}" height="${ih}" viewBox="0 0 ${vw} ${vh}" style="overflow:visible;flex-shrink:0">${iconSvg}</svg>
      <span class="legend-name">${e.label}</span>
      <span class="legend-count">×${e.count}${seatStr}</span>
      <span class="leg-select-hint">select</span>
    </div>`;
  }).join('');

  // Total seat count at bottom of sidebar legend
  const existingTotal=document.getElementById('legend-seat-total');
  if(existingTotal) existingTotal.remove();
  if(totalSeats>0){
    const rowsContainer=document.getElementById('legend-rows');
    const div=document.createElement('div');
    div.id='legend-seat-total';
    div.style.cssText='padding:8px 13px;border-top:1px solid var(--border);margin-top:4px;font-size:.75rem;display:flex;justify-content:space-between;align-items:center';
    div.innerHTML=`<span style="color:var(--muted);font-weight:600">Total seats</span><span style="font-family:\'JetBrains Mono\',monospace;font-size:.82rem;color:var(--sage);font-weight:700">${totalSeats} 🪑</span>`;
    rowsContainer.after(div);
  }

  updateCanvasLegend(entries, totalSeats);
}

function updateCanvasLegend(entries, totalSeats){
  if(!legendOverlayOn) return;
  const h5=document.querySelector('#canvas-legend h5');
  if(h5) h5.innerHTML=`Layout Key ${totalSeats>0?`<span>${totalSeats} seats total</span>`:''}`;
  const el=document.getElementById('canvas-legend-rows');
  if(entries.length===0){el.innerHTML='<div style="font-size:.7rem;color:var(--faint)">No items</div>';return;}
  el.innerHTML=entries.map(e=>{
    const def=CATALOG.find(c=>c.id===e.type);
    const iconSvg=def?def.draw(def.w,def.h,e.color):'';
    // Fixed small icon size for the overlay
    const iw=22,ih=22;
    const vw=def?ftToPx(def.w):20;
    const vh=def?ftToPx(def.h):20;
    const seatStr=e.seats>0?` <span style="color:var(--sage);font-size:.6rem">(${e.seats*e.count}🪑)</span>`:'';
    return `<div class="cl-row" style="margin-bottom:5px">
      <div style="width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
        <svg width="${iw}" height="${ih}" viewBox="0 0 ${vw} ${vh}" style="overflow:visible;max-width:22px;max-height:22px">${iconSvg}</svg>
      </div>
      <span class="cl-name" style="flex:1">${e.label}</span>
      <span class="cl-count" style="white-space:nowrap">×${e.count}${seatStr}</span>
    </div>`;
  }).join('');
}

function toggleLegendOverlay(){
  legendOverlayOn=!legendOverlayOn;
  const btn=document.getElementById('legend-overlay-btn');
  const overlay=document.getElementById('canvas-legend');
  btn.classList.toggle('active',legendOverlayOn);
  btn.textContent=legendOverlayOn?'Hide on canvas':'Show on canvas';
  overlay.classList.toggle('show',legendOverlayOn);
  if(legendOverlayOn) buildLegend();
}

function selectByType(type){
  clearSelection();
  items.filter(i=>i.type===type).forEach(i=>addToSelection(i.id));
  showToast('Selected '+items.filter(i=>i.type===type).length+' × '+type.replace(/-/g,' '));
}

// ═══════════════════════════════════════════════
// RIGHT PANEL
// ═══════════════════════════════════════════════
function updateRightPanel(){
  const n=selectedIds.size;
  if(n===0){showEmptyPanel();checkTableSetSelection();return;}
  const ids=Array.from(selectedIds);
  if(n===1){
    const item=items.find(i=>i.id===ids[0]);
    if(item)showSinglePanel(item);
  } else {
    showMultiPanel(ids);
  }
  updateLayers();
  checkTableSetSelection();
}
function showEmptyPanel(){
  document.getElementById('rp-sub').textContent='Nothing selected';
  document.getElementById('rp-body').innerHTML=`<div class="empty-state"><svg width="34" height="34" viewBox="0 0 34 34" fill="none"><rect x="3" y="3" width="28" height="28" rx="4" stroke="currentColor" stroke-width="1.5"/><path d="M11 17h12M17 11v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><p>Click to select · Shift+click or drag to multi-select</p></div>`;
}
function showMultiPanel(ids){
  // Check if this is a grouped set — show a representative rotation value
  const allItems = ids.map(id=>items.find(i=>i.id===id)).filter(Boolean);
  const firstRot = allItems[0]?.rotation || 0;
  const isGroup = allItems.length > 0 && allItems.every(i=>i.groupId && i.groupId===allItems[0].groupId);

  document.getElementById('rp-sub').textContent = isGroup
    ? `Group (${ids.length} items)`
    : `${ids.length} items selected`;

  document.getElementById('rp-body').innerHTML=`
    <div class="prop-group">
      <div class="prop-group-title">${isGroup ? 'Group' : 'Multi-Selection'}</div>
      <div style="font-size:.78rem;color:var(--muted);margin-bottom:10px;line-height:1.5">
        ${ids.length} items selected. Use align tools above, or apply to all:
      </div>
    </div>

    <div class="prop-group" style="background:var(--panel);border-radius:7px;padding:10px 11px;margin-bottom:10px">
      <div class="prop-group-title" style="margin-bottom:8px">Rotate Group</div>
      <div class="prop-row">
        <div class="prop-row-label">
          <div class="prop-label">Rotation</div>
          <div class="prop-val-badge" id="rot-val">${firstRot}°</div>
        </div>
        <input class="prop-slider" type="range" min="0" max="359" value="${firstRot}" id="rot-slider"
          oninput="rotateAllSelected(+this.value)">
        <div style="display:flex;align-items:center;gap:6px;margin-top:5px">
          <input type="number" id="rot-input" min="0" max="359" value="${firstRot}"
            style="flex:1;padding:5px 7px;border:1.5px solid var(--border);border-radius:4px;font-family:'Karla',sans-serif;font-size:.82rem;outline:none;text-align:center"
            onfocus="this.style.borderColor='var(--accent)'"
            onblur="this.style.borderColor='var(--border)'"
            oninput="rotateAllSelected(((+this.value%360)+360)%360)">
          <span style="font-size:.75rem;color:var(--muted)">deg</span>
          <button onclick="rotateAllSelected(0)" title="Reset to 0°"
            style="padding:4px 8px;border:1.5px solid var(--border);border-radius:4px;background:white;font-size:.7rem;cursor:pointer;color:var(--muted)"
            onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'"
            onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">↺ 0</button>
        </div>
      </div>
    </div>

    <div class="prop-group" style="background:var(--panel);border-radius:7px;padding:10px 11px;margin-bottom:10px">
      <div class="prop-group-title" style="margin-bottom:8px">Color</div>
      <div class="color-row">${COLORS.map(c=>`<div class="color-swatch" style="background:${c};width:26px;height:26px;border-radius:5px" onclick="setColorAll('${c}',this)"></div>`).join('')}
        <label title="Pick any color" style="cursor:pointer;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border:1.5px dashed var(--border);border-radius:5px">
          <span style="font-size:.65rem;color:var(--muted)">+</span>
          <input type="color" style="width:0;height:0;opacity:0;position:absolute" oninput="setColorAll(this.value,null)">
        </label>
      </div>
    </div>

    <div class="prop-group">
      <div class="prop-group-title">Opacity</div>
      <div class="prop-row">
        <input class="prop-slider" type="range" min="10" max="100" value="100" oninput="setOpacityAll(+this.value/100)">
      </div>
    </div>`;
}
function showSinglePanel(item){
  document.getElementById('rp-sub').textContent=item.label;
  document.getElementById('rp-body').innerHTML=`

    <!-- LABEL — top and prominent -->
    <div class="prop-group" style="background:var(--panel);border-radius:7px;padding:10px 11px;margin-bottom:10px">
      <div class="prop-group-title" style="margin-bottom:6px">Label</div>
      <input class="prop-input" placeholder="Name this item…"
        value="${item.label}"
        oninput="setProp(${item.id},'label',this.value)"
        style="font-size:.88rem;font-weight:500;background:white">
    </div>

    <!-- COLOR — second, with big swatches and custom picker -->
    <div class="prop-group" style="background:var(--panel);border-radius:7px;padding:10px 11px;margin-bottom:10px">
      <div class="prop-group-title" style="margin-bottom:8px">Color</div>
      <div style="display:flex;flex-wrap:wrap;gap:5px;align-items:center">
        ${COLORS.map((c)=>`<div class="color-swatch ${item.color===c?'active':''}" style="background:${c};width:26px;height:26px;border-radius:5px" onclick="setColor(${item.id},'${c}',this)" title="${c}"></div>`).join('')}
        <label title="Pick any color" style="cursor:pointer;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border:1.5px dashed var(--border);border-radius:5px;transition:border-color .12s" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <span style="font-size:.65rem;color:var(--muted)">+</span>
          <input type="color" value="${item.color||COLORS[0]}" style="width:0;height:0;opacity:0;position:absolute" oninput="setColor(${item.id},this.value,null)">
        </label>
      </div>
      <div style="margin-top:7px;display:flex;align-items:center;gap:6px">
        <div style="width:18px;height:18px;border-radius:3px;background:${item.color||COLORS[0]};border:1px solid rgba(0,0,0,.1);flex-shrink:0"></div>
        <span style="font-family:'JetBrains Mono',monospace;font-size:.68rem;color:var(--muted)">${item.color||COLORS[0]}</span>
      </div>
    </div>

    <!-- POSITION & SIZE -->
    <div class="prop-group">
      <div class="prop-group-title">Position & Size</div>
      <div class="prop-row-2">
        <div><div class="prop-label">X (ft)</div><input class="prop-input" type="number" step=".5" value="${pxToFt(item.x).toFixed(1)}" oninput="setPropPx(${item.id},'x',+this.value)"></div>
        <div><div class="prop-label">Y (ft)</div><input class="prop-input" type="number" step=".5" value="${pxToFt(item.y).toFixed(1)}" oninput="setPropPx(${item.id},'y',+this.value)"></div>
      </div>
      <div class="prop-row-2">
        <div><div class="prop-label">W (ft)</div><input class="prop-input" type="number" step=".5" min=".5" value="${item.w.toFixed(1)}" oninput="setPropFt(${item.id},'w',+this.value)"></div>
        <div><div class="prop-label">H (ft)</div><input class="prop-input" type="number" step=".5" min=".5" value="${item.h.toFixed(1)}" oninput="setPropFt(${item.id},'h',+this.value)"></div>
      </div>
      <div class="prop-row">
        <div class="prop-row-label"><div class="prop-label">Rotation</div><div class="prop-val-badge" id="rot-val">${item.rotation}°</div></div>
        <input class="prop-slider" type="range" min="0" max="359" value="${item.rotation}" id="rot-slider"
          oninput="setRotation(${item.id},+this.value)">
        <div style="display:flex;align-items:center;gap:6px;margin-top:5px">
          <input type="number" id="rot-input" min="0" max="359" value="${item.rotation}"
            style="flex:1;padding:5px 7px;border:1.5px solid var(--border);border-radius:4px;font-family:'Karla',sans-serif;font-size:.82rem;outline:none;text-align:center"
            onfocus="this.style.borderColor='var(--accent)'"
            onblur="this.style.borderColor='var(--border)'"
            oninput="setRotation(${item.id},((+this.value%360)+360)%360)">
          <span style="font-size:.75rem;color:var(--muted)">deg</span>
          <button onclick="setRotation(${item.id},0)" title="Reset to 0°"
            style="padding:4px 8px;border:1.5px solid var(--border);border-radius:4px;background:white;font-size:.7rem;cursor:pointer;color:var(--muted);transition:all .12s"
            onmouseover="this.style.borderColor='var(--accent)';this.style.color='var(--accent)'"
            onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--muted)'">↺ 0</button>
        </div>
      </div>
      <div class="prop-row">
        <div class="prop-row-label"><div class="prop-label">Opacity</div><div class="prop-val-badge" id="op-val">${Math.round(item.opacity*100)}%</div></div>
        <input class="prop-slider" type="range" min="10" max="100" value="${Math.round(item.opacity*100)}" oninput="setProp(${item.id},'opacity',+this.value/100);document.getElementById('op-val').textContent=this.value+'%'">
      </div>
    </div>

    <!-- LAYER & LOCK -->
    <div class="prop-group">
      <div class="prop-group-title">Layer & Lock</div>
      <div class="prop-row-2">
        <button class="btn-block" style="margin:0;font-size:.7rem" onclick="bringToFront()">↑ Front</button>
        <button class="btn-block" style="margin:0;font-size:.7rem" onclick="sendToBack()">↓ Back</button>
      </div>
      <div class="prop-row-2" style="margin-top:5px">
        <button class="btn-block" style="margin:0;font-size:.7rem" onclick="bringForward()">↑ Fwd</button>
        <button class="btn-block" style="margin:0;font-size:.7rem" onclick="sendBackward()">↓ Back 1</button>
      </div>
      <button class="btn-block" style="margin-top:5px;font-size:.75rem;${item.locked?'background:rgba(230,126,34,.1);border-color:#e67e22;color:#e67e22':''}" onclick="toggleLockSelected()">
        ${item.locked ? '🔒 Locked — click to unlock' : '🔓 Lock this item (L)'}
      </button>
    </div>`;
  // Append text label controls if applicable
  const _def=CATALOG.find(c=>c.id===item.type);
  if(_def?.isTextLabel) document.getElementById('rp-body').innerHTML += buildTextLabelControls(item);
  if(_def?.isShape) document.getElementById('rp-body').innerHTML += buildShapeControls(item);
}

function buildShapeControls(item){
  const id=item.id;
  const sc=item.strokeColor||'#1c1917';
  const sw=item.strokeWidth??2;
  const fill=item.color||'#b5832a';
  const isLineLike=item.type==='shape-line'||item.type==='shape-arrow';
  const strokeSwatches=['#1c1917','#ffffff','#b5832a','#4a6fa5','#5f7a5e','#c0392b','#2c7873','#888888'];
  const fillSwatches=['#b5832a','#4a6fa5','#5f7a5e','#8B4513','#c0392b','#2c7873','#888888','#e8c46a'];
  return `
    <div class="prop-group" style="background:var(--panel);border-radius:7px;padding:10px 11px;margin-bottom:10px">
      <div class="prop-group-title" style="margin-bottom:8px">Stroke</div>
      <div style="display:flex;flex-wrap:wrap;gap:5px;align-items:center">
        ${strokeSwatches.map(c=>`<div class="color-swatch ${sc===c?'active':''}" style="background:${c};width:24px;height:24px;border-radius:4px;border:1px solid rgba(128,128,128,.3)" onclick="setShapeProp(${id},'strokeColor','${c}',this)"></div>`).join('')}
        <label style="cursor:pointer;display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:1.5px dashed var(--border);border-radius:4px">
          <span style="font-size:.65rem;color:var(--muted)">+</span>
          <input type="color" value="${sc}" style="width:0;height:0;opacity:0;position:absolute" oninput="setShapeProp(${id},'strokeColor',this.value,null)">
        </label>
      </div>
      <div class="prop-row" style="margin-top:8px">
        <div class="prop-row-label"><div class="prop-label">Thickness</div><div class="prop-val-badge" id="sw-val-${id}">${sw}px</div></div>
        <input class="prop-slider" type="range" min="0" max="20" value="${sw}" oninput="setShapeProp(${id},'strokeWidth',+this.value,null);document.getElementById('sw-val-${id}').textContent=this.value+'px'">
      </div>
    </div>
    ${!isLineLike?`
    <div class="prop-group" style="background:var(--panel);border-radius:7px;padding:10px 11px;margin-bottom:10px">
      <div class="prop-group-title" style="margin-bottom:8px">Fill</div>
      <div style="display:flex;flex-wrap:wrap;gap:5px;align-items:center">
        <div class="color-swatch ${fill==='none'?'active':''}" style="background:white;width:24px;height:24px;border-radius:4px;border:1.5px solid #ccc;position:relative;overflow:hidden" onclick="setShapeProp(${id},'color','none',this)" title="No fill">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center"><svg width="16" height="16" viewBox="0 0 16 16"><line x1="2" y1="14" x2="14" y2="2" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/></svg></div>
        </div>
        ${fillSwatches.map(c=>`<div class="color-swatch ${fill===c?'active':''}" style="background:${c};width:24px;height:24px;border-radius:4px;border:1px solid rgba(0,0,0,.1)" onclick="setShapeProp(${id},'color','${c}',this)"></div>`).join('')}
        <label style="cursor:pointer;display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:1.5px dashed var(--border);border-radius:4px">
          <span style="font-size:.65rem;color:var(--muted)">+</span>
          <input type="color" value="${fill!=='none'?fill:'#b5832a'}" style="width:0;height:0;opacity:0;position:absolute" oninput="setShapeProp(${id},'color',this.value,null)">
        </label>
      </div>
    </div>`:''}
  `;
}
function setShapeProp(id,prop,val,swatchEl){
  const item=items.find(i=>i.id===id);if(!item)return;
  item[prop]=val;refreshItemEl(item);markDirty();
  if(swatchEl){
    swatchEl.closest('.prop-group').querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));
    swatchEl.classList.add('active');
  }
}
function setProp(id,prop,val){const item=items.find(i=>i.id===id);if(!item)return;item[prop]=val;refreshItemEl(item);updateStatusBar();}
function setTextProp(id,prop,val){
  const item=items.find(i=>i.id===id);if(!item)return;
  item[prop]=val;
  refreshItemEl(item);
  markDirty();
  updateRightPanel();
}

function buildTextLabelControls(item){
  const id=item.id;
  const fs=item.textSize||24;
  const ff=item.textFont||'Karla';
  const fonts=['Karla','Playfair Display','Georgia','Arial','Helvetica','Times New Roman','Courier New','Trebuchet MS','Verdana','Impact'];
  const ta=item.textAlign||'center';
  const tc=item.color||'#1c1917';
  const swatches=['#1c1917','#ffffff','#b5832a','#3b82f6','#ef4444','#22c55e','#a855f7','#f59e0b'];
  const boldBorder=item.textBold?'var(--accent)':'var(--border)';
  const boldBg=item.textBold?'rgba(181,131,42,.12)':'white';
  const italBorder=item.textItalic?'var(--accent)':'var(--border)';
  const italBg=item.textItalic?'rgba(181,131,42,.12)':'white';
  const lBorder=ta==='left'?'var(--accent)':'var(--border)';const lBg=ta==='left'?'rgba(181,131,42,.12)':'white';
  const cBorder=ta==='center'?'var(--accent)':'var(--border)';const cBg=ta==='center'?'rgba(181,131,42,.12)':'white';
  const rBorder=ta==='right'?'var(--accent)':'var(--border)';const rBg=ta==='right'?'rgba(181,131,42,.12)':'white';
  const fontOpts=fonts.map(f=>'<option value="'+f+'"'+(ff===f?' selected':'')+'>'+f+'</option>').join('');
  const sw=swatches.map(c=>'<div style="width:22px;height:22px;border-radius:4px;background:'+c+';border:2px solid '+(tc===c?'var(--accent)':'rgba(0,0,0,.1)')+';cursor:pointer" onclick="setTextProp('+id+',' + "'color','"+c+"'" + ')"></div>').join('');
  return '<div class="prop-group" style="background:var(--panel);border-radius:7px;padding:10px 11px;margin-bottom:10px">'
    +'<div class="prop-group-title" style="margin-bottom:8px">Text Style</div>'
    +'<div class="prop-label" style="margin-bottom:4px">Font Size</div>'
    +'<div style="display:flex;align-items:center;gap:6px;margin-bottom:10px">'
    +'<input type="range" min="8" max="120" value="'+fs+'" style="flex:1" oninput="setTextProp('+id+',\'textSize\',+this.value);this.nextElementSibling.textContent=this.value+\'px\'">'
    +'<span style="font-family:\'JetBrains Mono\',monospace;font-size:.72rem;color:var(--accent);min-width:36px">'+fs+'px</span></div>'
    +'<div class="prop-label" style="margin-bottom:4px">Font</div>'
    +'<select style="width:100%;padding:5px 7px;border:1.5px solid var(--border);border-radius:4px;font-family:\'Karla\',sans-serif;font-size:.82rem;margin-bottom:10px;background:white" onchange="setTextProp('+id+',\'textFont\',this.value)">'+fontOpts+'</select>'
    +'<div class="prop-label" style="margin-bottom:6px">Style & Align</div>'
    +'<div style="display:flex;gap:5px;flex-wrap:wrap">'
    +'<button onclick="setTextProp('+id+',\'textBold\',!'+!!item.textBold+')" style="flex:1;min-width:40px;padding:5px;border:1.5px solid '+boldBorder+';border-radius:4px;background:'+boldBg+';font-weight:700;font-size:.82rem;cursor:pointer">B</button>'
    +'<button onclick="setTextProp('+id+',\'textItalic\',!'+!!item.textItalic+')" style="flex:1;min-width:40px;padding:5px;border:1.5px solid '+italBorder+';border-radius:4px;background:'+italBg+';font-style:italic;font-size:.82rem;cursor:pointer">I</button>'
    +'<button onclick="setTextProp('+id+',\'textAlign\',\'left\')" style="flex:1;min-width:40px;padding:5px;border:1.5px solid '+lBorder+';border-radius:4px;background:'+lBg+';font-size:.82rem;cursor:pointer">&#8801;L</button>'
    +'<button onclick="setTextProp('+id+',\'textAlign\',\'center\')" style="flex:1;min-width:40px;padding:5px;border:1.5px solid '+cBorder+';border-radius:4px;background:'+cBg+';font-size:.82rem;cursor:pointer">&#8801;C</button>'
    +'<button onclick="setTextProp('+id+',\'textAlign\',\'right\')" style="flex:1;min-width:40px;padding:5px;border:1.5px solid '+rBorder+';border-radius:4px;background:'+rBg+';font-size:.82rem;cursor:pointer">&#8801;R</button>'
    +'</div>'
    +'<div class="prop-label" style="margin-top:10px;margin-bottom:4px">Text Color</div>'
    +'<div style="display:flex;gap:5px;flex-wrap:wrap;align-items:center">'+sw
    +'<label style="cursor:pointer;display:flex;align-items:center;justify-content:center;width:22px;height:22px;border:1.5px dashed var(--border);border-radius:4px">'
    +'<span style="font-size:.6rem;color:var(--muted)">+</span>'
    +'<input type="color" value="'+tc+'" style="width:0;height:0;opacity:0;position:absolute" oninput="setTextProp('+id+',\'color\',this.value)">'
    +'</label></div></div>';
}
function setPropPx(id,prop,ftVal){const item=items.find(i=>i.id===id);if(!item)return;item[prop]=ftToPx(ftVal);refreshItemEl(item);}
function setPropFt(id,prop,ftVal){const item=items.find(i=>i.id===id);if(!item)return;item[prop]=Math.max(.5,ftVal);refreshItemEl(item);updateStatusBar();}
function setColor(id,color,el){
  const item=items.find(i=>i.id===id);if(!item)return;
  item.color=color;
  refreshItemEl(item);
  document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));
  if(el)el.classList.add('active');
  // Update hex readout in panel
  updateRightPanel();
}
function setColorAll(color,el){selectedIds.forEach(id=>{const item=items.find(i=>i.id===id);if(item){item.color=color;refreshItemEl(item);}});document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));if(el)el.classList.add('active');}
function setOpacityAll(val){selectedIds.forEach(id=>{const item=items.find(i=>i.id===id);if(item){item.opacity=val;refreshItemEl(item);}});}

// ═══════════════════════════════════════════════
// UNDO
// ═══════════════════════════════════════════════
function pushHistory(){
  markDirty();
  history.push(JSON.parse(JSON.stringify({items,groups})));
  if(history.length>maxHistory)history.shift();
  updateUndoCount();
  updateUndoIndicator();
}
function updateUndoCount(){
  const el=document.getElementById('undo-count');
  if(!el)return;
  if(history.length>0){el.textContent='('+history.length+')';el.style.display='';}
  else{el.style.display='none';}
}
function undo(){
  if(!history.length)return;
  const prev=history.pop();
  itemsLayer.innerHTML='<div id="marquee"></div>';
  items=prev.items;groups=prev.groups||{};
  items.forEach(item=>renderItem(item));
  clearSelection();updateCount();updateLayers();
  updateUndoCount();
  updateUndoIndicator();
  showToast(history.length?`Undone · ${history.length} step${history.length>1?'s':''} remaining`:'Undone · no more steps');
}

// ═══════════════════════════════════════════════
// TOOLS
// ═══════════════════════════════════════════════
function setTool(t){
  // Clear measure tool if switching away
  if(currentTool==='measure'&&t!=='measure') clearMeasure();
  currentTool=t;
  ['select','pan','measure','shape'].forEach(n=>document.getElementById('btn-'+n)?.classList.remove('active'));
  document.getElementById('btn-'+t)?.classList.add('active');
  viewport.classList.toggle('panning',t==='pan');
  document.getElementById('st-tool').textContent=t==='pan'?'Pan':t==='measure'?'Measure':t==='shape'?'Shape':'Select';
  // Cursor
  if(t==='measure'){
    fpCanvas.style.cursor='crosshair';
    document.getElementById('measure-layer').style.pointerEvents='all';
  } else if(t==='shape'){
    fpCanvas.style.cursor='crosshair';
    document.getElementById('measure-layer').style.pointerEvents='none';
  } else {
    fpCanvas.style.cursor='';
    document.getElementById('measure-layer').style.pointerEvents='none';
  }
}

// ─── FEATURE 3: MEASURE TOOL ────────────────────
let measureState = null; // {x1,y1} or null

const measureLayer = document.getElementById('measure-layer');

measureLayer.addEventListener('click', e => {
  if (currentTool !== 'measure') return;
  const rect = fpCanvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / zoom;
  const y = (e.clientY - rect.top) / zoom;

  if (!measureState) {
    measureState = { x1: x, y1: y };
    drawMeasurePoint(x, y);
  } else {
    const { x1, y1 } = measureState;
    drawMeasureLine(x1, y1, x, y);
    measureState = null;
  }
});

measureLayer.addEventListener('mousemove', e => {
  if (currentTool !== 'measure' || !measureState) return;
  const rect = fpCanvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / zoom;
  const y = (e.clientY - rect.top) / zoom;
  drawMeasureLine(measureState.x1, measureState.y1, x, y, true);
});

function drawMeasurePoint(x, y) {
  measureLayer.innerHTML = `
    <circle cx="${x}" cy="${y}" r="4" fill="var(--blue)" opacity=".9"/>
    <circle cx="${x}" cy="${y}" r="8" fill="none" stroke="var(--blue)" stroke-width="1" opacity=".4"/>
    <text x="${x+10}" y="${y-6}" fill="var(--blue)" font-family="JetBrains Mono" font-size="10">Click second point…</text>`;
}

function drawMeasureLine(x1, y1, x2, y2, preview = false) {
  const dx = pxToFt(x2 - x1);
  const dy = pxToFt(y2 - y1);
  const dist = Math.sqrt(dx*dx + dy*dy);
  const distIn = (dist * 12).toFixed(0);
  const label = dist >= 1 ? `${dist.toFixed(1)}ft  (${distIn}")` : `${distIn}"`;

  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

  // End cap length
  const capLen = 8;
  const nx = -(y2-y1)/Math.hypot(x2-x1,y2-y1)*capLen;
  const ny = (x2-x1)/Math.hypot(x2-x1,y2-y1)*capLen;

  measureLayer.innerHTML = `
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--blue)" stroke-width="1.5" stroke-dasharray="${preview?'5,3':'none'}"/>
    <line x1="${x1+nx}" y1="${y1+ny}" x2="${x1-nx}" y2="${y1-ny}" stroke="var(--blue)" stroke-width="1.5"/>
    <line x1="${x2+nx}" y1="${y2+ny}" x2="${x2-nx}" y2="${y2-ny}" stroke="var(--blue)" stroke-width="1.5"/>
    <circle cx="${x1}" cy="${y1}" r="3.5" fill="var(--blue)"/>
    <circle cx="${x2}" cy="${y2}" r="3.5" fill="var(--blue)"/>
    <rect x="${mx-30}" y="${my-11}" width="60" height="16" rx="3" fill="rgba(74,111,165,.9)"/>
    <text x="${mx}" y="${my+2}" text-anchor="middle" fill="white" font-family="JetBrains Mono" font-size="10" font-weight="500">${label}</text>
    ${!preview ? `<text x="${mx}" y="${my+18}" text-anchor="middle" fill="rgba(74,111,165,.7)" font-family="JetBrains Mono" font-size="8">click to clear</text>` : ''}`;

  if (!preview) {
    measureLayer.addEventListener('click', clearMeasure, { once: true });
  }
}

function clearMeasure() {
  measureLayer.innerHTML = '';
  measureState = null;
}

// ─── FEATURE 6: ITEM LOCKING ────────────────────
function toggleLockSelected() {
  if (selectedIds.size === 0) { showToast('Select items to lock/unlock'); return; }
  const ids = Array.from(selectedIds);
  const allLocked = ids.every(id => items.find(i=>i.id===id)?.locked);
  ids.forEach(id => {
    const item = items.find(i => i.id === id);
    if (!item) return;
    item.locked = !allLocked;
    const el = document.getElementById('fi-' + id);
    if (el) {
      el.classList.toggle('locked', item.locked);
      el.style.cursor = item.locked ? 'not-allowed' : 'move';
    }
  });
  showToast(allLocked ? `Unlocked ${ids.length} item${ids.length>1?'s':''}` : `Locked ${ids.length} item${ids.length>1?'s':''} 🔒`);
  updateRightPanel();
}


// ─── FEATURE 5: REPEAT / ARRAY ──────────────────
function openRepeatModal() {
  if (selectedIds.size === 0) { showToast('Select an item to repeat'); return; }

  // Expand to full group if grouped item selected
  expandSelectionToGroups();

  // Detect if selection contains a group
  const selItems = Array.from(selectedIds).map(id=>items.find(i=>i.id===id)).filter(Boolean);
  const hasGroup = selItems.some(i=>i.groupId);
  const isTableSet = selItems.some(i=>i._isTableSetTable || i._isTableSetChair);

  const scopeRow = document.getElementById('rep-scope-row');
  const scopeSetLabel = document.getElementById('rep-scope-set-label');
  const scopeItemLabel = document.getElementById('rep-scope-item-label');

  if (hasGroup) {
    scopeRow.style.display = 'block';
    document.getElementById('rep-scope-set').checked = true;
    // Update labels based on whether it's a table set
    if (isTableSet) {
      scopeSetLabel.querySelector('div:first-child').textContent = 'Whole set';
      scopeSetLabel.querySelector('div:last-child').textContent = 'Table + all chairs';
      scopeItemLabel.querySelector('div:first-child').textContent = 'Table only';
      scopeItemLabel.querySelector('div:last-child').textContent = 'Just the table';
    } else {
      scopeSetLabel.querySelector('div:first-child').textContent = 'Whole group';
      scopeSetLabel.querySelector('div:last-child').textContent = 'All items in group';
      scopeItemLabel.querySelector('div:first-child').textContent = 'Lead item only';
      scopeItemLabel.querySelector('div:last-child').textContent = 'First selected item';
    }
  } else {
    scopeRow.style.display = 'none';
  }

  openModal('repeat-modal');
  updateRepeatPreview();
}

function _getRepeatTemplate() {
  // Returns { srcItems, boundsW, boundsH, startX, startY }
  // srcItems = array of items to copy per cell
  const selItems = Array.from(selectedIds).map(id=>items.find(i=>i.id===id)).filter(Boolean);
  const scopeSet = document.getElementById('rep-scope-set')?.checked !== false;
  const hasGroup = selItems.some(i=>i.groupId);

  let srcItems;
  if (hasGroup && scopeSet) {
    // Use all selected items (already expanded to full group)
    srcItems = selItems;
  } else {
    // Just the first item (table or lead item)
    const lead = selItems.find(i=>i._isTableSetTable) || selItems[0];
    srcItems = lead ? [lead] : [];
  }
  if (!srcItems.length) return null;

  // Bounding box of the template
  const minX = Math.min(...srcItems.map(i=>i.x));
  const minY = Math.min(...srcItems.map(i=>i.y));
  const maxX = Math.max(...srcItems.map(i=>i.x+ftToPx(i.w)));
  const maxY = Math.max(...srcItems.map(i=>i.y+ftToPx(i.h)));

  return {
    srcItems,
    boundsW: pxToFt(maxX - minX),
    boundsH: pxToFt(maxY - minY),
    startX: minX,
    startY: minY,
    offsetX: minX, // origin of the group bounding box
    offsetY: minY,
  };
}

function updateRepeatPreview() {
  const cols = parseInt(document.getElementById('rep-cols').value) || 1;
  const rows = parseInt(document.getElementById('rep-rows').value) || 1;
  const gapH = parseFloat(document.getElementById('rep-gap-h').value) || 0;
  const gapV = parseFloat(document.getElementById('rep-gap-v').value) || 0;
  const total = cols * rows;

  const tmpl = _getRepeatTemplate();
  if (!tmpl) return;

  const label = tmpl.srcItems.length > 1
    ? `${tmpl.srcItems.length}-item set`
    : (tmpl.srcItems[0]?.label || 'item');
  const totalW = (tmpl.boundsW * cols + gapH * (cols - 1)).toFixed(1);
  const totalH = (tmpl.boundsH * rows + gapV * (rows - 1)).toFixed(1);

  document.getElementById('repeat-preview').innerHTML =
    `<strong>${total} copies</strong> of "${label}"<br>
    Grid: <strong>${cols} col${cols>1?'s':''} × ${rows} row${rows>1?'s':''}</strong><br>
    Spacing: <strong>${gapH}ft horizontal · ${gapV}ft vertical</strong><br>
    Total footprint: <strong>${totalW}ft × ${totalH}ft</strong>`;
}

function applyRepeat() {
  if (selectedIds.size === 0) return;
  expandSelectionToGroups();

  const cols = Math.max(1, parseInt(document.getElementById('rep-cols').value) || 1);
  const rows = Math.max(1, parseInt(document.getElementById('rep-rows').value) || 1);
  const gapH = parseFloat(document.getElementById('rep-gap-h').value) || 0;
  const gapV = parseFloat(document.getElementById('rep-gap-v').value) || 0;

  const tmpl = _getRepeatTemplate();
  if (!tmpl) return;

  pushHistory();

  const stepX = ftToPx(tmpl.boundsW + gapH);
  const stepY = ftToPx(tmpl.boundsH + gapV);

  // Delete originals
  const origIds = new Set(tmpl.srcItems.map(i=>i.id));
  origIds.forEach(id => {
    items = items.filter(i => i.id !== id);
    document.getElementById('fi-' + id)?.remove();
  });
  clearSelection();

  const allNewIds = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dx = c * stepX;
      const dy = r * stepY;

      // Create a fresh group for each cell
      const cellGroupId = tmpl.srcItems.length > 1 ? 'g' + (++groupSeq) : null;
      const cellIds = [];

      tmpl.srcItems.forEach(src => {
        const newItem = {
          ...JSON.parse(JSON.stringify(src)),
          id: ++idSeq,
          x: src.x + dx,
          y: src.y + dy,
          groupId: cellGroupId,
          zIndex: items.length + 1,
          locked: false,
        };
        items.push(newItem);
        renderItem(newItem);
        cellIds.push(newItem.id);
        allNewIds.push(newItem.id);
      });

      if (cellGroupId) {
        groups[cellGroupId] = cellIds;
        cellIds.forEach(id => {
          document.getElementById('fi-' + id)?.classList.add('grouped');
        });
      }
    }
  }

  addManyToSelection(allNewIds);
  updateCount(); updateLayers(); buildLegend();
  closeModal('repeat-modal');
  showToast(`Created ${cols * rows} ${tmpl.srcItems.length > 1 ? 'sets' : 'items'} ✓`);
}
function toggleGrid(){gridOn=!gridOn;document.getElementById('btn-grid').classList.toggle('active',gridOn);drawGrid();}
function toggleSnap(){snapOn=!snapOn;document.getElementById('btn-snap').classList.toggle('active',snapOn);document.getElementById('st-snap').textContent=snapOn?'ON':'OFF';}
function toggleLabels(){labelsOn=!labelsOn;document.getElementById('btn-labels').classList.toggle('active',labelsOn);document.querySelectorAll('.fitem-label').forEach(l=>l.style.opacity=labelsOn?'1':'');document.querySelector('#items-layer').classList.toggle('labels-on',labelsOn);}

// ═══════════════════════════════════════════════
// CONTEXT MENU
// ═══════════════════════════════════════════════
function showCtxMenu(x,y){
  const m=document.getElementById('ctx-menu');
  // Show/hide link-related items based on whether selected item has a link
  const selItem = selectedIds.size===1 ? items.find(i=>i.id===[...selectedIds][0]) : null;
  const hasLink = selItem?.link;
  document.getElementById('ctx-open-link').style.display = hasLink ? '' : 'none';
  document.getElementById('ctx-remove-link').style.display = hasLink ? '' : 'none';
  // Clamp to window
  m.style.left=Math.min(x, window.innerWidth-200)+'px';
  m.style.top=Math.min(y, window.innerHeight-320)+'px';
  m.classList.add('visible');
}
document.addEventListener('click',()=>document.getElementById('ctx-menu').classList.remove('visible'));

// ═══════════════════════════════════════════════
// KEYBOARD
// ═══════════════════════════════════════════════
// ═══════════════════════════════════════════════
// CLIPBOARD — Cut / Copy / Paste
// ═══════════════════════════════════════════════
let clipboard = []; // array of deep-copied item objects

function copySelected(cut=false){
  if(selectedIds.size===0)return;
  expandSelectionToGroups();
  // Deep copy preserving ALL properties including _isTableSetTable, _isTableSetChair etc
  clipboard = Array.from(selectedIds)
    .map(id=>items.find(i=>i.id===id))
    .filter(Boolean)
    .map(item=>JSON.parse(JSON.stringify(item)));
  if(cut){
    deleteSelected();
    showToast(`Cut ${clipboard.length} item${clipboard.length>1?'s':''} — Ctrl+V to paste`);
  } else {
    showToast(`Copied ${clipboard.length} item${clipboard.length>1?'s':''} — Ctrl+V to paste`);
  }
}

function pasteClipboard(){
  if(!clipboard.length)return;
  pushHistory();
  clearSelection();

  const offset=ftToPx(1.5);
  const groupRemap={};
  const newIds=[];

  // First pass: create all new items with remapped group IDs
  clipboard.forEach(src=>{
    let newGroupId=null;
    if(src.groupId){
      if(!groupRemap[src.groupId]) groupRemap[src.groupId]='g'+(++groupSeq);
      newGroupId=groupRemap[src.groupId];
    }
    const newItem={
      ...JSON.parse(JSON.stringify(src)), // deep copy to preserve _isTableSetTable etc
      id:++idSeq,
      x:src.x+offset,
      y:src.y+offset,
      groupId:newGroupId,
      zIndex:items.length+1
    };
    items.push(newItem);
    newIds.push(newItem.id);

    // Register in groups map immediately
    if(newGroupId){
      if(!groups[newGroupId]) groups[newGroupId]=[];
      groups[newGroupId].push(newItem.id);
    }
  });

  // Second pass: render all items (after groups are fully registered)
  newIds.forEach(id=>{
    const it=items.find(i=>i.id===id);
    if(!it)return;
    renderItem(it);
    // Apply grouped visual class if needed
    if(it.groupId) document.getElementById('fi-'+it.id)?.classList.add('grouped');
  });

  // Select all pasted items at once
  addManyToSelection(newIds);
  updateCount(); updateLayers(); buildLegend();
  showToast(`Pasted ${newIds.length} item${newIds.length>1?'s':''}`);
}

document.addEventListener('keydown',e=>{
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
  if(e.key==='Delete'||e.key==='Backspace')deleteSelected();
  if(e.key==='v'||e.key==='V')setTool('select');
  if(e.key==='h'||e.key==='H')setTool('pan');
  if(e.key==='m'||e.key==='M')setTool(currentTool==='measure'?'select':'measure');
  if(e.key==='s'||e.key==='S')setTool(currentTool==='shape'?'select':'shape');
  if(e.key==='l'||e.key==='L')toggleLockSelected();
  if(e.key==='g'||e.key==='G')toggleGrid();
  if(e.key==='f'||e.key==='F')zoomFit();
  if((e.key==='z'||e.key==='Z')&&!e.ctrlKey&&!e.metaKey)zoomToSelection();
  if(e.key==='='||e.key==='+')zoomTo(zoom*1.25);
  if(e.key==='-'&&!e.ctrlKey&&!e.metaKey)zoomTo(zoom*0.8);
  if(e.key==='0'&&(e.ctrlKey||e.metaKey)){e.preventDefault();zoomFit();}
  if(e.key==='1'&&(e.ctrlKey||e.metaKey)){e.preventDefault();zoomTo(1);}
  if(e.key==='Escape')clearSelection();
  if((e.ctrlKey||e.metaKey)&&e.key==='z'){e.preventDefault();undo();}
  if((e.ctrlKey||e.metaKey)&&e.key==='d'){e.preventDefault();duplicateSelected();}
  if((e.ctrlKey||e.metaKey)&&!e.shiftKey&&e.key==='g'){e.preventDefault();groupSelected();}
  if((e.ctrlKey||e.metaKey)&&e.shiftKey&&e.key==='G'){e.preventDefault();ungroupSelected();}
  if((e.ctrlKey||e.metaKey)&&e.key==='a'){e.preventDefault();selectAll();}
  if((e.ctrlKey||e.metaKey)&&e.key==='c'){e.preventDefault();copySelected(false);}
  if((e.ctrlKey||e.metaKey)&&e.key==='x'){e.preventDefault();copySelected(true);}
  if((e.ctrlKey||e.metaKey)&&e.key==='f'){e.preventDefault();openCanvasSearch();}
  if((e.ctrlKey||e.metaKey)&&e.key==='v'){e.preventDefault();pasteClipboard();}
  if(e.key===']')bringToFront();
  if(e.key==='[')sendToBack();
  const step=ftToPx(e.shiftKey?1:.5);
  if(e.key==='ArrowLeft'){e.preventDefault();selectedIds.forEach(id=>{const item=items.find(i=>i.id===id);if(item){item.x=Math.max(0,item.x-step);refreshItemEl(item);}});}
  if(e.key==='ArrowRight'){e.preventDefault();selectedIds.forEach(id=>{const item=items.find(i=>i.id===id);if(item){item.x+=step;refreshItemEl(item);}});}
  if(e.key==='ArrowUp'){e.preventDefault();selectedIds.forEach(id=>{const item=items.find(i=>i.id===id);if(item){item.y=Math.max(0,item.y-step);refreshItemEl(item);}});}
  if(e.key==='ArrowDown'){e.preventDefault();selectedIds.forEach(id=>{const item=items.find(i=>i.id===id);if(item){item.y+=step;refreshItemEl(item);}});}
});

// ═══════════════════════════════════════════════
// MODALS
// ═══════════════════════════════════════════════
function openModal(id){
  document.getElementById(id).classList.add('open');
  if(id==='save-modal'){
    renderSavesList();
    if(currentLayoutName) document.getElementById('save-name-input').value=currentLayoutName;
  }
}
function closeModal(id){document.getElementById(id).classList.remove('open');}
document.querySelectorAll('.modal-backdrop').forEach(b=>b.addEventListener('click',e=>{if(e.target===b)b.classList.remove('open');}));

// ═══════════════════════════════════════════════
// AI PIECE GENERATOR
// ═══════════════════════════════════════════════
let aiPendingItem=null;
function openAiItemModal(){openModal('ai-item-modal');setTimeout(()=>document.getElementById('ai-prompt').focus(),100);}
function setAiPrompt(el){document.getElementById('ai-prompt').value=el.textContent;document.getElementById('ai-prompt').focus();}

async function generateAiPiece(){
  const prompt=document.getElementById('ai-prompt').value.trim();if(!prompt)return;
  const btn=document.getElementById('ai-generate-btn');
  const spinner=document.getElementById('ai-spinner');
  btn.disabled=true;spinner.classList.add('active');
  document.getElementById('ai-status-text').textContent='Generating…';
  document.getElementById('ai-error').classList.remove('show');
  document.getElementById('ai-preview-area').classList.remove('show');
  aiPendingItem=null;
  const sys=`You are a floor plan SVG symbol designer for an event layout tool. Respond ONLY with valid JSON — no markdown, no explanation.
Return: {"name":"Short name","category":"Custom","w":<width ft>,"h":<depth ft>,"description":"one sentence","svgBody":"<SVG elements for top-down view>"}
svgBody rules:
- Use rect,circle,ellipse,path,line,polygon,text elements only
- Use % strings for x,y,cx,cy,width,height on basic shapes
- For irregular shapes use path with commands in a 100×100 coordinate space, then scale via transform="scale(W_PX/100, H_PX/100)" where W_PX=w*20 H_PX=h*20
- Colors: fill "rgba(181,131,42,0.18)", stroke "#b5832a" stroke-width="2", details "rgba(181,131,42,0.5)"
- Include a short text label: font-size="11" font-family="JetBrains Mono" fill="#8B5A2B"
- No JS, no CSS, no foreignObject`;
  try{
    const controller1=new AbortController();
    const t1=setTimeout(()=>controller1.abort(),20000);
    let res;
    try{
      res=await fetch('https://api.anthropic.com/v1/messages',{
        method:'POST',
        signal:controller1.signal,
        headers:{
          'Content-Type':'application/json',
          'x-api-key':ANTHROPIC_API_KEY,
          'anthropic-version':'2023-06-01',
          'anthropic-dangerous-direct-browser-access':'true'
        },
        body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,system:sys,messages:[{role:'user',content:'Create floor plan symbol: '+prompt}]})});
    }catch(fetchErr){
      throw new Error('Network blocked: '+fetchErr.message+'. AI features only work when Floorcraft is open inside a Claude conversation.');
    }finally{ clearTimeout(t1); }
    if(!res.ok){const errText=await res.text().catch(()=>'');throw new Error('API '+res.status+': '+errText.slice(0,200));}
    const data=await res.json();
    const raw=data.content.filter(b=>b.type==='text').map(b=>b.text).join('');
    const clean=raw.replace(/```json|```/g,'').trim();
    let parsed;
    try{parsed=JSON.parse(clean);}catch(e){const m=clean.match(/\{[\s\S]*\}/);if(m)parsed=JSON.parse(m[0]);else throw new Error('Parse failed');}
    if(!parsed.name||!parsed.w||!parsed.h||!parsed.svgBody)throw new Error('Missing fields');
    aiPendingItem=parsed;showAiPreview(parsed);
    document.getElementById('ai-status-text').textContent='✓ Ready — review below';
  }catch(err){
    document.getElementById('ai-error').textContent='Generation failed: '+err.message+'. Try rephrasing.';
    document.getElementById('ai-error').classList.add('show');
    document.getElementById('ai-status-text').textContent='';
  }finally{btn.disabled=false;spinner.classList.remove('active');}
}
function showAiPreview(item){
  const wPx=Math.round(item.w*20),hPx=Math.round(item.h*20);
  const previewW=Math.min(wPx,220),previewH=Math.round(previewW*(hPx/wPx));
  document.getElementById('ai-preview-name').textContent=item.name;
  document.getElementById('ai-preview-dims').textContent=`${item.w}ft × ${item.h}ft`;
  document.getElementById('ai-label-input').value=item.name;
  document.getElementById('ai-preview-svg-wrap').innerHTML=`<svg width="${previewW}" height="${Math.max(previewH,60)}" viewBox="0 0 ${wPx} ${hPx}" style="overflow:visible">${item.svgBody}</svg>`;
  document.getElementById('ai-preview-area').classList.add('show');
}
function addAiToCanvas(){
  if(!aiPendingItem)return;
  const label=document.getElementById('ai-label-input').value||aiPendingItem.name;
  const def=buildCustomDef(aiPendingItem,label);
  const vp=viewport;
  const x=Math.max(0,(vp.scrollLeft+vp.clientWidth/2)/zoom-ftToPx(def.w)/2);
  const y=Math.max(0,(vp.scrollTop+vp.clientHeight/2)/zoom-ftToPx(def.h)/2);
  addItem(def.id,x,y);closeModal('ai-item-modal');
}
function saveAiToPalette(){
  if(!aiPendingItem)return;
  const label=document.getElementById('ai-label-input').value||aiPendingItem.name;
  const def=buildCustomDef(aiPendingItem,label);
  CATALOG.unshift(def);buildPalette();
  document.getElementById('ai-status-text').textContent='✓ Saved to Custom in palette!';
  showToast('"'+label+'" saved to palette');
}
function buildCustomDef(parsed,label){
  const id='custom-'+Date.now();const svg=parsed.svgBody;
  return{cat:'Custom',id,name:label||parsed.name,w:parsed.w,h:parsed.h,unit:'ft',draw:(w,h,c)=>svg.replace(/#b5832a/g,c).replace(/rgba\(181,131,42,0\.18\)/g,c+'30')};
}
document.getElementById('ai-prompt').addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter')generateAiPiece();});

// ═══════════════════════════════════════════════
// AI LAYOUT ASSISTANT — with canvas actions
// ═══════════════════════════════════════════════
let layoutHistory = [];
let pendingLayoutActions = [];

function openAiLayoutModal() {
  openModal('ai-layout-modal');
  setTimeout(() => document.getElementById('layout-input').focus(), 100);
}

function getLayoutContext() {
  const canvasW = pxToFt(fpCanvas.offsetWidth).toFixed(1);
  const canvasH = pxToFt(fpCanvas.offsetHeight).toFixed(1);
  const itemList = items.map(i =>
    `{id:${i.id}, label:"${i.label}", type:"${i.type}", x:${pxToFt(i.x).toFixed(1)}, y:${pxToFt(i.y).toFixed(1)}, w:${i.w.toFixed(1)}, h:${i.h.toFixed(1)}, rotation:${i.rotation}}`
  ).join('\n');
  return `CANVAS: ${canvasW}ft wide × ${canvasH}ft deep\nITEMS (${items.length}):\n${itemList || 'none'}`;
}

function sendLayoutPrompt(el) {
  const text = el.textContent || el.querySelector('h5')?.textContent || '';
  document.getElementById('layout-input').value = text.trim();
  sendLayoutMessage();
}

async function sendLayoutMessage() {
  const input = document.getElementById('layout-input');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  appendLayoutMessage('user', msg);
  layoutHistory.push({ role: 'user', content: msg });
  const thinking = appendLayoutMessage('assistant', '<span style="opacity:.5">Thinking…</span>');

  const systemPrompt = `You are an expert event designer AI assistant with direct control over a floor plan canvas. You can BOTH give advice AND move/arrange items on the canvas.

Current canvas state:
${getLayoutContext()}

IMPORTANT: You must ALWAYS respond with a JSON object in this exact format — no exceptions, no markdown fences:
{
  "message": "Your conversational reply explaining what you're doing or your advice. Use **bold** for emphasis. Use - for bullet points.",
  "actions": []
}

The "actions" array can be empty (for pure advice) or contain canvas operations.

AVAILABLE ACTIONS:
1. Move item: {"action":"move", "id": <item_id>, "x": <feet_from_left>, "y": <feet_from_top>, "reason": "why"}
2. Rotate item: {"action":"rotate", "id": <item_id>, "rotation": <degrees_0_to_359>, "reason": "why"}  
3. Resize item: {"action":"resize", "id": <item_id>, "w": <width_ft>, "h": <depth_ft>, "reason": "why"}
4. Delete item: {"action":"delete", "id": <item_id>, "reason": "why"}
5. Duplicate item: {"action":"duplicate", "id": <item_id>, "x": <new_x_ft>, "y": <new_y_ft>, "reason": "why"}
6. Add new item: {"action":"add", "type": <catalog_id>, "x": <ft>, "y": <ft>, "label": "name", "reason": "why"}
7. Group items: {"action":"group", "ids": [<id1>, <id2>...], "reason": "why"}

RULES:
- Canvas origin (0,0) is TOP-LEFT. X goes right, Y goes down.
- Keep items within canvas bounds (max x = canvasW - item.w, max y = canvasH - item.h)  
- Standard event spacing: 36" (3ft) between tables for guest circulation, 18" (1.5ft) between chairs
- When arranging multiple items, calculate positions mathematically — don't guess
- Always explain your reasoning in the message field
- If the user asks for advice only (flow, recommendations, guest count), use empty actions array
- Item IDs are numbers — use them exactly as shown above
- For "add" actions, use catalog type IDs like: chair-banquet, tbl-r60, sofa-3, bar-8ft, etc.

CATALOG TYPES available: chair-banquet, chair-cross, chair-ghost, chair-chiavari, club-chair, accent-chair, chaise, sofa-2, sofa-3, sectional-l, tbl-r48, tbl-r60, tbl-r72, tbl-cocktail, tbl-cocktail-hi, tbl-6ft, tbl-8ft, tbl-farm, coffee-rect, coffee-round, side-table, rug-rect, rug-round, floor-lamp, chandelier, bar-8ft, bar-straight-12, backbar, bar-l, hedge-4ft, hedge-8ft, planter-round, planter-rect, tree, stage-sm, dance-floor, podium, photobooth, buffet-station`;

  try {
    const controller2=new AbortController();
    const t2=setTimeout(()=>controller2.abort(),20000);
    let res;
    try{
      res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        signal: controller2.signal,
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2000,
          system: systemPrompt,
          messages: layoutHistory
        })
      });
    }catch(fetchErr){
      throw new Error('Network blocked: '+fetchErr.message);
    }finally{ clearTimeout(t2); }
    if (!res.ok) {const errText=await res.text().catch(()=>'');throw new Error('API ' + res.status+': '+errText.slice(0,200));}
    const data = await res.json();
    const raw = data.content.filter(b => b.type === 'text').map(b => b.text).join('');

    // Parse JSON response
    let parsed;
    try {
      const clean = raw.replace(/```json|```/g, '').trim();
      parsed = JSON.parse(clean);
    } catch(e) {
      // Fallback: extract JSON object
      const match = raw.match(/\{[\s\S]*\}/);
      if (match) parsed = JSON.parse(match[0]);
      else parsed = { message: raw, actions: [] };
    }

    const { message, actions = [] } = parsed;
    thinking.innerHTML = formatChatMsg(message);
    layoutHistory.push({ role: 'assistant', content: raw });
    if (layoutHistory.length > 24) layoutHistory = layoutHistory.slice(-22);

    // Handle actions
    if (actions.length > 0) {
      pendingLayoutActions = actions;
      showPendingActions(actions);
    }

  } catch(err) {
    thinking.innerHTML = `<span style="color:var(--danger)">Error: ${err.message}</span>`;
  }
  const msgs = document.getElementById('layout-messages');
  msgs.scrollTop = msgs.scrollHeight;
}

function showPendingActions(actions) {
  const list = document.getElementById('layout-actions-list');
  const applyBtn = document.getElementById('apply-actions-btn');
  const discardBtn = document.getElementById('discard-actions-btn');

  const actionLabels = {
    move: (a) => `Move <strong>${getItemLabel(a.id)}</strong> → ${a.x}ft, ${a.y}ft`,
    rotate: (a) => `Rotate <strong>${getItemLabel(a.id)}</strong> to ${a.rotation}°`,
    resize: (a) => `Resize <strong>${getItemLabel(a.id)}</strong> to ${a.w}ft × ${a.h}ft`,
    delete: (a) => `Remove <strong>${getItemLabel(a.id)}</strong>`,
    duplicate: (a) => `Duplicate <strong>${getItemLabel(a.id)}</strong> at ${a.x}ft, ${a.y}ft`,
    add: (a) => `Add <strong>${a.label || a.type}</strong> at ${a.x}ft, ${a.y}ft`,
    group: (a) => `Group ${a.ids?.length || 0} items together`,
  };

  const actionColors = { move:'#4a6fa5', rotate:'#b5832a', resize:'#5f7a5e', delete:'#c0392b', duplicate:'#6B4C9B', add:'#2c7873', group:'#4a6fa5' };

  list.innerHTML = actions.map((a, i) => `
    <div style="padding:7px 8px;border:1px solid var(--border);border-radius:5px;margin-bottom:5px;background:white;border-left:3px solid ${actionColors[a.action]||'#888'}">
      <div style="font-size:.75rem;font-weight:600;color:${actionColors[a.action]||'#888'};text-transform:uppercase;letter-spacing:.06em;margin-bottom:2px">${a.action}</div>
      <div style="font-size:.78rem;color:var(--text)">${(actionLabels[a.action]?.(a))||JSON.stringify(a)}</div>
      ${a.reason ? `<div style="font-size:.68rem;color:var(--muted);margin-top:2px;font-style:italic">${a.reason}</div>` : ''}
    </div>`).join('');

  applyBtn.style.display = 'block';
  discardBtn.style.display = 'block';
}

function getItemLabel(id) {
  const item = items.find(i => i.id === id);
  return item ? item.label : `#${id}`;
}

function applyLayoutActions() {
  if (!pendingLayoutActions.length) return;
  pushHistory();

  let applied = 0;
  const errors = [];

  pendingLayoutActions.forEach(a => {
    try {
      if (a.action === 'move') {
        const item = items.find(i => i.id === a.id);
        if (!item) { errors.push(`Item ${a.id} not found`); return; }
        item.x = Math.max(0, ftToPx(parseFloat(a.x)));
        item.y = Math.max(0, ftToPx(parseFloat(a.y)));
        refreshItemEl(item);

      } else if (a.action === 'rotate') {
        const item = items.find(i => i.id === a.id);
        if (!item) return;
        item.rotation = ((parseInt(a.rotation) % 360) + 360) % 360;
        refreshItemEl(item);

      } else if (a.action === 'resize') {
        const item = items.find(i => i.id === a.id);
        if (!item) return;
        item.w = Math.max(0.5, parseFloat(a.w));
        item.h = Math.max(0.5, parseFloat(a.h));
        refreshItemEl(item);

      } else if (a.action === 'delete') {
        const item = items.find(i => i.id === a.id);
        if (!item) return;
        items = items.filter(i => i.id !== a.id);
        document.getElementById('fi-' + a.id)?.remove();
        selectedIds.delete(a.id);

      } else if (a.action === 'duplicate') {
        const item = items.find(i => i.id === a.id);
        if (!item) return;
        const newItem = { ...JSON.parse(JSON.stringify(item)), id: ++idSeq, x: ftToPx(parseFloat(a.x)), y: ftToPx(parseFloat(a.y)), groupId: null, zIndex: items.length + 1 };
        items.push(newItem);
        renderItem(newItem);

      } else if (a.action === 'add') {
        const x = ftToPx(parseFloat(a.x) || 5);
        const y = ftToPx(parseFloat(a.y) || 5);
        const newItem = addItem(a.type, x, y);
        if (newItem && a.label) { newItem.label = a.label; refreshItemEl(newItem); }

      } else if (a.action === 'group') {
        if (a.ids && a.ids.length > 1) {
          const gid = 'g' + (++groupSeq);
          a.ids.forEach(id => {
            const item = items.find(i => i.id === id);
            if (item) {
              item.groupId = gid;
              document.getElementById('fi-' + id)?.classList.add('grouped');
            }
          });
          groups[gid] = a.ids;
        }
      }
      applied++;
    } catch(e) {
      errors.push(e.message);
    }
  });

  updateCount(); updateLayers(); buildLegend();
  clearSelection();
  discardLayoutActions();

  const msg = errors.length
    ? `Applied ${applied} action${applied!==1?'s':''} (${errors.length} skipped)`
    : `Applied ${applied} action${applied!==1?'s':''} to canvas ✓`;

  appendLayoutMessage('assistant', msg + '\n\nChanges are live. You can undo with **Ctrl+Z** if needed.');
  showToast(msg);
}

function discardLayoutActions() {
  pendingLayoutActions = [];
  document.getElementById('layout-actions-list').innerHTML =
    '<div style="padding:12px 8px;font-size:.72rem;color:var(--faint);text-align:center;line-height:1.5">Actions will appear here when AI suggests changes.</div>';
  document.getElementById('apply-actions-btn').style.display = 'none';
  document.getElementById('discard-actions-btn').style.display = 'none';
}

function appendLayoutMessage(role, text) {
  const msgs = document.getElementById('layout-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + role;
  div.innerHTML = formatChatMsg(text);
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function formatChatMsg(text) {
  return String(text)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, s => '<ul>' + s + '</ul>')
    .replace(/\n/g, '<br>');
}

document.getElementById('layout-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendLayoutMessage(); }
});

// ═══════════════════════════════════════════════
// EXPORT — PNG / JPG at chosen quality
// ═══════════════════════════════════════════════
let selectedQuality = 2;

function selectQuality(el, q) {
  document.querySelectorAll('[data-q]').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedQuality = q;
  updateExportNote();
}

function updateExportNote() {
  const fmt = document.getElementById('exp-format')?.value || 'png';
  const labels = {1:'Draft',2:'Standard',3:'High',4:'Ultra'};
  const scales = {1:'1×',2:'2×',3:'3×',4:'4×'};
  const w = fpCanvas.offsetWidth * selectedQuality;
  const h = fpCanvas.offsetHeight * selectedQuality;
  const note = fmt === 'pdf'
    ? `${labels[selectedQuality]} · ${scales[selectedQuality]} render → PDF`
    : `${labels[selectedQuality]} · ${scales[selectedQuality]} · ${w}×${h}px · ${fmt.toUpperCase()}`;
  document.getElementById('export-size-note').textContent = note;
  document.getElementById('export-btn-label').textContent = `Export ${fmt.toUpperCase()}`;
}

async function doExport() {
  const btn = document.getElementById('do-export-btn');
  btn.disabled = true;
  btn.innerHTML = '<div class="ai-spinner active" style="border-top-color:white;display:inline-block;margin-right:6px"></div>Rendering…';

  const prevSel = new Set(selectedIds);
  clearSelection();

  const legendOverlay = document.getElementById('canvas-legend');
  const legendWasShowing = legendOverlay.classList.contains('show');
  const includeLegend = document.getElementById('exp-legend')?.checked;
  if (!includeLegend && legendWasShowing) legendOverlay.classList.remove('show');
  if (includeLegend && !legendWasShowing) legendOverlay.classList.add('show');

  const prevZoom = zoom;
  const prevScrollX = viewport.scrollLeft;
  const prevScrollY = viewport.scrollTop;

  // Reset transform AND zoom var so html2canvas sees the canvas at 1:1
  zoom = 1;
  canvasWrap.style.transform = 'scale(1)';
  canvasWrap.style.transformOrigin = '0 0';
  // Scroll to top-left so canvas is fully in view
  viewport.scrollLeft = 0;
  viewport.scrollTop = 0;

  // Hide overlays that shouldn't appear in export
  const scaleLineLayer = document.getElementById('scale-line-layer');
  const measureLayerEl = document.getElementById('measure-layer');
  if (scaleLineLayer) scaleLineLayer.style.visibility = 'hidden';
  if (measureLayerEl) measureLayerEl.style.visibility = 'hidden';

  // Wait for browser to repaint at 1:1
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  try {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');

    const fmt = document.getElementById('exp-format').value;
    const whiteBg = document.getElementById('exp-bg').checked;
    const scale = selectedQuality;

    const canvasEl = await html2canvas(fpCanvas, {
      backgroundColor: whiteBg ? '#ffffff' : null,
      scale,
      useCORS: true,
      allowTaint: true,
      logging: false,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
      width: fpCanvas.offsetWidth,
      height: fpCanvas.offsetHeight,
    });

    if (fmt === 'pdf') {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
      const { jsPDF } = window.jspdf;
      if (!jsPDF) throw new Error('jsPDF failed to load — try PNG export instead');

      const imgW = canvasEl.width;
      const imgH = canvasEl.height;
      const dpi = 96 * scale;
      const mmW = Math.max(1, imgW * 25.4 / dpi);
      const mmH = Math.max(1, imgH * 25.4 / dpi);
      const orient = mmW >= mmH ? 'landscape' : 'portrait';
      const pdf = new jsPDF({ orientation: orient, unit: 'mm', format: [mmW, mmH] });

      // Use JPEG inside PDF for smaller file size
      const imgData = canvasEl.toDataURL('image/jpeg', 0.92);
      if (!imgData || imgData === 'data:,') throw new Error('Canvas capture failed — try PNG format');
      pdf.addImage(imgData, 'JPEG', 0, 0, mmW, mmH, undefined, 'FAST');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(5);
      pdf.setTextColor(180, 180, 180);
      pdf.text('Floorcraft · ' + new Date().toLocaleDateString(), 2, mmH - 1.5);
      pdf.save(`event-layout-${scale}x.pdf`);
      showToast(`PDF exported at ${scale}× quality`);

    } else {
      const mimeType = fmt === 'jpg' ? 'image/jpeg' : 'image/png';
      const quality = fmt === 'jpg' ? 0.92 : 1.0;
      const dataUrl = canvasEl.toDataURL(mimeType, quality);

      if (!dataUrl || dataUrl === 'data:,' || dataUrl.length < 100) {
        throw new Error('Export produced empty file. Try PNG format or check browser permissions.');
      }

      // Chrome-safe download: create blob URL instead of data URL
      const byteStr = atob(dataUrl.split(',')[1]);
      const arr = new Uint8Array(byteStr.length);
      for (let i = 0; i < byteStr.length; i++) arr[i] = byteStr.charCodeAt(i);
      const blob = new Blob([arr], { type: mimeType });
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `event-layout-${scale}x.${fmt}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Revoke blob URL after download starts
      setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
      showToast(`Exported at ${scale}× as ${fmt.toUpperCase()}`);
    }

    closeModal('export-modal');

  } catch(err) {
    alert('Export failed: ' + err.message + '\n\nTip: If using a local file, try publishing the app first (AI features and some exports require HTTPS).');
    console.error('Export error:', err);
  } finally {
    zoom = prevZoom;
    canvasWrap.style.transform = `scale(${prevZoom})`;
    viewport.scrollLeft = prevScrollX;
    viewport.scrollTop = prevScrollY;
    if (scaleLineLayer) scaleLineLayer.style.visibility = '';
    if (measureLayerEl) measureLayerEl.style.visibility = '';
    if (!includeLegend && legendWasShowing) legendOverlay.classList.add('show');
    if (includeLegend && !legendWasShowing) legendOverlay.classList.remove('show');
    prevSel.forEach(id => addToSelection(id));
    btn.disabled = false;
    btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M3 5.5l3 3 3-3M1 10h10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span id="export-btn-label">Export</span>';
    updateExportNote();
  }
}

function loadScript(src) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = () => rej(new Error('Failed: ' + src));
    document.head.appendChild(s);
  });
}

function exportPNG() { openModal('export-modal'); }


// ═══════════════════════════════════════════════
// SAVE / LOAD  (localStorage)
// ═══════════════════════════════════════════════
const STORE_KEY = 'floorcraft_layouts';
let currentLayoutName = null;
let isDirty = false;

function markDirty() {
  if (!isDirty) {
    isDirty = true;
    document.getElementById('unsaved-dot').classList.add('show');
  }
  clearTimeout(_autoSaveTimer);
  _autoSaveTimer = setTimeout(autoSave, 2000);
}
function markClean(name) {
  isDirty = false;
  currentLayoutName = name;
  document.getElementById('unsaved-dot').classList.remove('show');
  // Update topbar logo tooltip
  document.querySelector('#topbar .logo').title = name ? 'Current: '+name : '';
}

function getSaves() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); }
  catch(e) { return {}; }
}
function putSaves(saves) {
  localStorage.setItem(STORE_KEY, JSON.stringify(saves));
}

function saveLayout() {
  const input = document.getElementById('save-name-input');
  const name = input.value.trim() || ('Layout ' + new Date().toLocaleDateString('en-US', {month:'short', day:'numeric', hour:'2-digit', minute:'2-digit'}));

  const saves = getSaves();
  const bgImg = document.getElementById('bg-img');

  saves[name] = {
    name,
    savedAt: Date.now(),
    itemCount: items.length,
    canvasW: fpCanvas.offsetWidth,
    canvasH: fpCanvas.offsetHeight,
    items: JSON.parse(JSON.stringify(items)),
    groups: JSON.parse(JSON.stringify(groups)),
    pxPerFt,
    bgSrc: bgImg.src && bgImg.style.display !== 'none' ? bgImg.src : null,
  };

  putSaves(saves);
  markClean(name);
  input.value = '';
  renderSavesList();
  showToast('"' + name + '" saved ✓');
}

function loadLayout(name) {
  const saves = getSaves();
  const save = saves[name];
  if (!save) return;

  if (isDirty && items.length > 0) {
    if (!confirm('Load "' + name + '"? Unsaved changes to the current layout will be lost.')) return;
  }

  // Clear canvas
  itemsLayer.innerHTML = '<div id="marquee"></div>';
  items = save.items || [];
  groups = save.groups || {};
  pxPerFt = save.pxPerFt || 20;

  // Restore canvas size
  setCanvasSize(save.canvasW || 1200, save.canvasH || 800);

  // Restore background image
  const bgImg = document.getElementById('bg-img');
  if (save.bgSrc) {
    bgImg.src = save.bgSrc;
    bgImg.style.display = 'block';
  } else {
    bgImg.src = '';
    bgImg.style.display = 'none';
  }

  // Restore scale info
  if (save.pxPerFt && save.pxPerFt !== 20) {
    document.getElementById('scale-info').textContent = `Scale: 1ft=${save.pxPerFt.toFixed(1)}px`;
  }

  // Re-render all items
  items.forEach(item => renderItem(item));
  clearSelection();
  updateCount();
  updateLayers();
  buildLegend();
  markClean(name);
  document.getElementById('save-name-input').value = name; // pre-fill for quick re-save
  closeModal('save-modal');
  setTimeout(zoomFit, 100);
  showToast('"' + name + '" loaded');
}

function deleteLayout(name) {
  if (!confirm('Delete "' + name + '"? This cannot be undone.')) return;
  const saves = getSaves();
  delete saves[name];
  putSaves(saves);
  if (currentLayoutName === name) markClean(null);
  renderSavesList();
  showToast('"' + name + '" deleted');
}

function duplicateLayout(name) {
  const saves = getSaves();
  const orig = saves[name];
  if (!orig) return;
  const newName = name + ' (copy)';
  saves[newName] = { ...JSON.parse(JSON.stringify(orig)), name: newName, savedAt: Date.now() };
  putSaves(saves);
  renderSavesList();
  showToast('Duplicated as "' + newName + '"');
}

function renderSavesList() {
  const saves = getSaves();
  const list = document.getElementById('saves-list');
  const entries = Object.values(saves).sort((a, b) => b.savedAt - a.savedAt);

  if (entries.length === 0) {
    list.innerHTML = `<div class="saves-empty">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style="display:block;margin:0 auto 8px"><rect x="4" y="4" width="28" height="28" rx="4" stroke="currentColor" stroke-width="1.5"/><path d="M12 18h12M18 12v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      No saved layouts yet.<br>Build something and hit Save!
    </div>`;
    return;
  }

  list.innerHTML = entries.map(save => {
    const d = new Date(save.savedAt);
    const dateStr = d.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
    const timeStr = d.toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit'});
    const isActive = save.name === currentLayoutName;
    return `<div class="save-card" style="${isActive ? 'border-color:var(--accent);background:rgba(181,131,42,.04)' : ''}">
      <div class="save-card-icon">${isActive ? '✦' : '📐'}</div>
      <div class="save-card-info">
        <div class="save-card-name">${escHtml(save.name)}${isActive ? ' <span style="font-size:.6rem;color:var(--accent);font-family:\'JetBrains Mono\',monospace">● current</span>' : ''}</div>
        <div class="save-card-meta">${save.itemCount || 0} items · ${dateStr} ${timeStr}</div>
      </div>
      <div class="save-card-actions">
        <button class="sc-btn primary" onclick="loadLayout('${escAttr(save.name)}')">Load</button>
        <button class="sc-btn" onclick="duplicateLayout('${escAttr(save.name)}')" title="Duplicate">⧉</button>
        <button class="sc-btn danger" onclick="deleteLayout('${escAttr(save.name)}')" title="Delete">✕</button>
      </div>
    </div>`;
  }).join('');
}

function escHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function escAttr(s) { return s.replace(/'/g,'&#39;').replace(/"/g,'&quot;'); }

// Open modal → refresh list + pre-fill name
// Close save-modal when clicking backdrop
document.addEventListener('DOMContentLoaded', ()=>{
  const sm = document.getElementById('save-modal');
  if(sm) sm.addEventListener('click', e => { if(e.target===sm) closeModal('save-modal'); });
});

// Dirty tracking is handled directly inside pushHistory() and addItem() above

// Ctrl+S to quick-save
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    if (currentLayoutName) {
      // Quick-save over existing
      document.getElementById('save-name-input').value = currentLayoutName;
      saveLayout();
    } else {
      openModal('save-modal');
      setTimeout(() => document.getElementById('save-name-input').focus(), 150);
    }
  }
});

// ── Autosave ────────────────────────────────────
const AUTOSAVE_KEY = 'floorcraft_autosave';
let _autoSaveTimer = null;

function autoSave() {
  try {
    const bgImg = document.getElementById('bg-img');
    localStorage.setItem(AUTOSAVE_KEY, JSON.stringify({
      savedAt: Date.now(),
      canvasW: fpCanvas.offsetWidth,
      canvasH: fpCanvas.offsetHeight,
      items: JSON.parse(JSON.stringify(items)),
      groups: JSON.parse(JSON.stringify(groups)),
      pxPerFt,
      bgSrc: bgImg.src && bgImg.style.display !== 'none' ? bgImg.src : null,
    }));
  } catch(e) {}
}

function restoreAutosave() {
  try {
    const raw = localStorage.getItem(AUTOSAVE_KEY);
    if (!raw) return;
    const save = JSON.parse(raw);
    if (!save || !save.items || save.items.length === 0) return;
    items = save.items;
    groups = save.groups || {};
    pxPerFt = save.pxPerFt || 20;
    setCanvasSize(save.canvasW || 1200, save.canvasH || 800);
    const bgImg = document.getElementById('bg-img');
    if (save.bgSrc) { bgImg.src = save.bgSrc; bgImg.style.display = 'block'; }
    if (save.pxPerFt && save.pxPerFt !== 20) {
      document.getElementById('scale-info').textContent = `Scale: 1ft=${save.pxPerFt.toFixed(1)}px`;
    }
    itemsLayer.innerHTML = '<div id="marquee"></div>';
    items.forEach(item => renderItem(item));
    clearSelection();
    updateCount();
    updateLayers();
    buildLegend();
  } catch(e) {}
}

// ── Spacing Guides ──────────────────────────────
const SPACING_GUIDE_THRESHOLD_FT = 20; // show guides when gap is within this many feet

function _getDragBBox() {
  const sel = Array.from(selectedIds).map(id => items.find(i => i.id === id)).filter(Boolean);
  if (!sel.length) return null;
  return {
    x1: Math.min(...sel.map(i => i.x)),
    y1: Math.min(...sel.map(i => i.y)),
    x2: Math.max(...sel.map(i => i.x + ftToPx(i.w))),
    y2: Math.max(...sel.map(i => i.y + ftToPx(i.h)))
  };
}

function _getOtherUnitBBoxes() {
  const others = items.filter(i => !selectedIds.has(i.id) && i.visible !== false);
  const unitMap = new Map();
  others.forEach(item => {
    const key = item.groupId || ('i' + item.id);
    if (!unitMap.has(key)) unitMap.set(key, []);
    unitMap.get(key).push(item);
  });
  return Array.from(unitMap.values()).map(its => ({
    x1: Math.min(...its.map(i => i.x)),
    y1: Math.min(...its.map(i => i.y)),
    x2: Math.max(...its.map(i => i.x + ftToPx(i.w))),
    y2: Math.max(...its.map(i => i.y + ftToPx(i.h)))
  }));
}

function updateSpacingGuides() {
  const svg = document.getElementById('spacing-guide-layer');
  if (!svg) return;
  svg.innerHTML = '';
  const drag = _getDragBBox();
  if (!drag) return;
  const others = _getOtherUnitBBoxes();
  if (!others.length) return;

  const threshold = ftToPx(SPACING_GUIDE_THRESHOLD_FT);
  const dragCX = (drag.x1 + drag.x2) / 2;
  const dragCY = (drag.y1 + drag.y2) / 2;
  let left = null, right = null, above = null, below = null;

  others.forEach(b => {
    if (b.x2 <= drag.x1) {
      const gap = drag.x1 - b.x2;
      if (gap <= threshold && (!left || gap < left.gap))
        left = { gap, x1: b.x2, x2: drag.x1, y: dragCY };
    }
    if (b.x1 >= drag.x2) {
      const gap = b.x1 - drag.x2;
      if (gap <= threshold && (!right || gap < right.gap))
        right = { gap, x1: drag.x2, x2: b.x1, y: dragCY };
    }
    if (b.y2 <= drag.y1) {
      const gap = drag.y1 - b.y2;
      if (gap <= threshold && (!above || gap < above.gap))
        above = { gap, y1: b.y2, y2: drag.y1, x: dragCX };
    }
    if (b.y1 >= drag.y2) {
      const gap = b.y1 - drag.y2;
      if (gap <= threshold && (!below || gap < below.gap))
        below = { gap, y1: drag.y2, y2: b.y1, x: dragCX };
    }
  });

  function hGuide(g) {
    if (g.gap < 1) return;
    const midX = (g.x1 + g.x2) / 2;
    const label = pxToFt(g.gap).toFixed(1) + 'ft';
    const lw = label.length * 6 + 14;
    svg.innerHTML += `
      <line x1="${g.x1}" y1="${g.y}" x2="${g.x2}" y2="${g.y}" stroke="#ff4d8f" stroke-width="1.5" stroke-dasharray="4,3" opacity=".85"/>
      <line x1="${g.x1}" y1="${g.y-6}" x2="${g.x1}" y2="${g.y+6}" stroke="#ff4d8f" stroke-width="2" opacity=".85"/>
      <line x1="${g.x2}" y1="${g.y-6}" x2="${g.x2}" y2="${g.y+6}" stroke="#ff4d8f" stroke-width="2" opacity=".85"/>
      <rect x="${midX - lw/2}" y="${g.y-9}" width="${lw}" height="16" rx="3" fill="#ff4d8f" opacity=".95"/>
      <text x="${midX}" y="${g.y+1}" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="9" font-family="JetBrains Mono,monospace" font-weight="500">${label}</text>`;
  }
  function vGuide(g) {
    if (g.gap < 1) return;
    const midY = (g.y1 + g.y2) / 2;
    const label = pxToFt(g.gap).toFixed(1) + 'ft';
    const lw = label.length * 6 + 14;
    svg.innerHTML += `
      <line x1="${g.x}" y1="${g.y1}" x2="${g.x}" y2="${g.y2}" stroke="#ff4d8f" stroke-width="1.5" stroke-dasharray="4,3" opacity=".85"/>
      <line x1="${g.x-6}" y1="${g.y1}" x2="${g.x+6}" y2="${g.y1}" stroke="#ff4d8f" stroke-width="2" opacity=".85"/>
      <line x1="${g.x-6}" y1="${g.y2}" x2="${g.x+6}" y2="${g.y2}" stroke="#ff4d8f" stroke-width="2" opacity=".85"/>
      <rect x="${g.x - lw/2}" y="${midY-8}" width="${lw}" height="16" rx="3" fill="#ff4d8f" opacity=".95"/>
      <text x="${g.x}" y="${midY}" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="9" font-family="JetBrains Mono,monospace" font-weight="500">${label}</text>`;
  }

  if (left)  hGuide(left);
  if (right) hGuide(right);
  if (above) vGuide(above);
  if (below) vGuide(below);
}

function clearSpacingGuides() {
  const svg = document.getElementById('spacing-guide-layer');
  if (svg) svg.innerHTML = '';
}

// ═══════════════════════════════════════════════
// TOUCH SUPPORT (iPad / touch devices)
// ═══════════════════════════════════════════════

// ── Palette touch drag ──────────────────────────
let _tdType = null;
let _tdGhost = null;

function _startPaletteTouchDrag(itemId, touch) {
  _tdType = itemId;
  const def = CATALOG.find(c => c.id === itemId);
  _tdGhost = document.createElement('div');
  const px = Math.min(ftToPx(def?.w||4), 56), py = Math.min(ftToPx(def?.h||4), 56);
  _tdGhost.style.cssText = 'position:fixed;pointer-events:none;z-index:9999;opacity:.8;background:rgba(40,35,30,.9);border:1.5px solid rgba(181,131,42,.5);border-radius:7px;padding:8px;box-shadow:0 4px 16px rgba(0,0,0,.5)';
  _tdGhost.innerHTML = def ? `<svg width="${px}" height="${py}" viewBox="0 0 100 100" preserveAspectRatio="none">${def.draw(def.w,def.h,COLORS[0])}</svg>` : '';
  document.body.appendChild(_tdGhost);
  _movePalGhost(touch.clientX, touch.clientY);
}
function _movePalGhost(cx, cy) {
  if (!_tdGhost) return;
  _tdGhost.style.left = (cx - _tdGhost.offsetWidth/2) + 'px';
  _tdGhost.style.top  = (cy - _tdGhost.offsetHeight/2) + 'px';
}
function _endPaletteTouchDrag(touch) {
  if (_tdGhost) { _tdGhost.remove(); _tdGhost = null; }
  if (!_tdType) return;
  const type = _tdType; _tdType = null;
  const rect = fpCanvas.getBoundingClientRect();
  if (touch.clientX < rect.left || touch.clientX > rect.right || touch.clientY < rect.top || touch.clientY > rect.bottom) return;
  let cx = (touch.clientX - rect.left) / zoom;
  let cy = (touch.clientY - rect.top)  / zoom;
  if (snapOn) { cx = Math.round(cx/ftToPx(SNAP_FT))*ftToPx(SNAP_FT); cy = Math.round(cy/ftToPx(SNAP_FT))*ftToPx(SNAP_FT); }
  const def = CATALOG.find(c => c.id === type); if (!def) return;
  if (def.isTableSet) dropTableSet(def, cx, cy);
  else if (def.isLoungeSet) dropLoungeSet(def, cx, cy);
  else addItem(type, Math.max(0, cx - ftToPx(def.w)/2), Math.max(0, cy - ftToPx(def.h)/2));
}
document.addEventListener('touchmove', e => {
  if (!_tdType) return;
  e.preventDefault();
  _movePalGhost(e.touches[0].clientX, e.touches[0].clientY);
}, {passive:false});
document.addEventListener('touchend', e => {
  if (!_tdType) return;
  _endPaletteTouchDrag(e.changedTouches[0]);
});
document.addEventListener('touchcancel', () => {
  if (_tdGhost) { _tdGhost.remove(); _tdGhost = null; }
  _tdType = null;
});

// ── Viewport: two-finger pan + pinch zoom ────────
let _pinchDist = null;
let _pinchMid  = null;

viewport.addEventListener('touchstart', e => {
  if (e.touches.length === 2) {
    const [t1,t2] = [e.touches[0],e.touches[1]];
    _pinchDist = Math.hypot(t2.clientX-t1.clientX, t2.clientY-t1.clientY);
    _pinchMid  = {x:(t1.clientX+t2.clientX)/2, y:(t1.clientY+t2.clientY)/2};
    e.preventDefault();
  } else if (e.touches.length === 1 && (currentTool==='pan' || spaceDown)) {
    _pinchMid = {x:e.touches[0].clientX, y:e.touches[0].clientY};
    e.preventDefault();
  }
}, {passive:false});

viewport.addEventListener('touchmove', e => {
  if (e.touches.length === 2) {
    e.preventDefault();
    const [t1,t2] = [e.touches[0],e.touches[1]];
    const dist = Math.hypot(t2.clientX-t1.clientX, t2.clientY-t1.clientY);
    const mid  = {x:(t1.clientX+t2.clientX)/2, y:(t1.clientY+t2.clientY)/2};
    if (_pinchDist) {
      const scale = dist / _pinchDist;
      const newZoom = Math.max(0.08, Math.min(8, zoom*scale));
      const rect = viewport.getBoundingClientRect();
      const mx = mid.x - rect.left, my = mid.y - rect.top;
      const sc = newZoom / zoom;
      viewport.scrollLeft = (viewport.scrollLeft + mx) * sc - mx;
      viewport.scrollTop  = (viewport.scrollTop  + my) * sc - my;
      zoom = newZoom; applyZoom();
    }
    if (_pinchMid) {
      viewport.scrollLeft -= mid.x - _pinchMid.x;
      viewport.scrollTop  -= mid.y - _pinchMid.y;
    }
    _pinchDist = dist; _pinchMid = mid;
  } else if (e.touches.length === 1 && _pinchMid && (currentTool==='pan'||spaceDown)) {
    e.preventDefault();
    const t = e.touches[0];
    viewport.scrollLeft -= t.clientX - _pinchMid.x;
    viewport.scrollTop  -= t.clientY - _pinchMid.y;
    _pinchMid = {x:t.clientX, y:t.clientY};
  }
}, {passive:false});

viewport.addEventListener('touchend', e => {
  if (e.touches.length < 2) { _pinchDist = null; _pinchMid = null; }
}, {passive:false});

// ── Item touch: tap = select, drag = move, long-press = menu ──
itemsLayer.addEventListener('touchstart', e => {
  if (_tdType) return;
  const fitem = e.target.closest('.fitem');
  if (!fitem) return;
  if (e.touches.length !== 1) return;
  e.preventDefault(); e.stopPropagation();

  const itemId = +fitem.id.replace('fi-', '');
  const liveItem = items.find(i => i.id === itemId);
  if (!liveItem || liveItem.locked) return;

  const touch = e.touches[0];
  const startX = touch.clientX, startY = touch.clientY;

  // Select on tap — whole group if grouped
  const members = liveItem.groupId && groups[liveItem.groupId]?.length > 0
    ? groups[liveItem.groupId] : [liveItem.id];
  if (multiSelectMode) {
    // Toggle this item/group in or out of selection
    const alreadySelected = selectedIds.has(liveItem.id);
    members.forEach(id => alreadySelected ? selectedIds.delete(id) : selectedIds.add(id));
  } else {
    clearSelection();
    members.forEach(id => selectedIds.add(id));
  }
  _refreshSelClasses();
  updateRightPanel(); updateStatusBar();

  // Long press → context menu
  let moveStarted = false;
  const longPress = setTimeout(() => {
    if (!moveStarted) showCtxMenu(startX, startY);
  }, 600);

  // Capture start positions for all selected items
  const startPositions = new Map();
  selectedIds.forEach(id => {
    const it = items.find(i => i.id === id);
    if (it && !it.locked) startPositions.set(id, {x: it.x, y: it.y});
  });

  function onMove(ev) {
    ev.preventDefault();
    const t = ev.touches[0]; if (!t) return;
    if (!moveStarted) {
      clearTimeout(longPress);
      moveStarted = true;
      pushHistory();
    }
    const cdx = (t.clientX - startX) / zoom;
    const cdy = (t.clientY - startY) / zoom;
    startPositions.forEach(({x, y}, id) => {
      const it = items.find(i => i.id === id); if (!it) return;
      it.x = Math.max(0, x + cdx);
      it.y = Math.max(0, y + cdy);
      const el = document.getElementById('fi-' + id);
      if (el) { el.style.left = it.x + 'px'; el.style.top = it.y + 'px'; }
    });
    updateSpacingGuides();
  }

  function onEnd() {
    clearTimeout(longPress);
    window.removeEventListener('touchmove', onMove);
    window.removeEventListener('touchend', onEnd);
    clearSpacingGuides();
    if (moveStarted) { markDirty(); updateRightPanel(); }
  }

  window.addEventListener('touchmove', onMove, {passive: false});
  window.addEventListener('touchend', onEnd);
}, {passive: false});

// ── New Project ─────────────────────────────────
function newProject() {
  if (items.length > 0) {
    const m = document.getElementById('new-project-modal');
    if (m) { m.style.display = 'flex'; return; }
    // fallback if modal element missing (old cached HTML)
    if (window.confirm('Discard current project and start fresh?')) _clearCanvas();
    return;
  }
  _clearCanvas();
  showToast('New project started');
}
function newProjectSaveFirst() {
  document.getElementById('new-project-modal').style.display = 'none';
  openModal('save-modal');
}
function newProjectDiscard() {
  document.getElementById('new-project-modal').style.display = 'none';
  _clearCanvas();
}
function _clearCanvas() {
  localStorage.removeItem(AUTOSAVE_KEY);
  items = [];
  groups = {};
  pxPerFt = 20;
  setCanvasSize(1200, 800);
  itemsLayer.innerHTML = '<div id="marquee"></div>';
  const bgImg = document.getElementById('bg-img');
  bgImg.src = '';
  bgImg.style.display = 'none';
  document.getElementById('scale-info').textContent = 'Scale: 1ft=20px';
  clearSelection();
  updateCount();
  updateLayers();
  buildLegend();
  markClean();
}

// ═══════════════════════════════════════════════
// TABLE SETS — drop as grouped table + chairs
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
// LOUNGE SETS — drop a full lounge arrangement as one group
// ═══════════════════════════════════════════════
function dropLoungeSet(def, cx, cy) {
  pushHistory();
  const gid = 'g' + (++groupSeq);
  const newIds = [];

  // First pass — create all items, register group
  def.pieces.forEach(piece => {
    const catalog = CATALOG.find(c => c.id === piece.type);
    if (!catalog) return;

    const x = cx + ftToPx(piece.dx) - ftToPx(catalog.w) / 2;
    const y = cy + ftToPx(piece.dy) - ftToPx(catalog.h) / 2;

    const newItem = {
      id: ++idSeq,
      type: catalog.id,
      x: Math.max(0, x),
      y: Math.max(0, y),
      w: catalog.w,
      h: catalog.h,
      rotation: piece.rotation || 0,
      color: COLORS[0],
      label: piece.label || catalog.name,
      opacity: 1,
      zIndex: items.length + 1,
      groupId: gid,
      visible: true,
    };
    items.push(newItem);
    newIds.push(newItem.id);
    if (!groups[gid]) groups[gid] = [];
    groups[gid].push(newItem.id);
  });

  // Second pass — render after group is fully registered
  newIds.forEach(id => {
    const it = items.find(i => i.id === id);
    if (it) {
      renderItem(it);
      document.getElementById('fi-' + it.id)?.classList.add('grouped');
    }
  });

  clearSelection();
  addManyToSelection(newIds);
  updateCount(); updateLayers(); buildLegend();
  showToast(`${def.name} dropped — ${def.pieces.length} pieces grouped`);
}

function dropTableSet(def, cx, cy) {
  pushHistory();
  const newIds = [];
  const gid = 'g' + (++groupSeq);

  // Place the table centered at drop point
  const tableDef = CATALOG.find(c => c.id === def.tableType);
  if (!tableDef) return;
  const tW = ftToPx(tableDef.w), tH = ftToPx(tableDef.h);
  const tx = cx - tW/2, ty = cy - tH/2;
  const tableItem = {
    id: ++idSeq, type: def.tableType,
    x: Math.max(0, tx), y: Math.max(0, ty),
    w: tableDef.w, h: tableDef.h,
    rotation: 0, color: COLORS[0],
    label: tableDef.name, opacity: 1,
    zIndex: items.length + 1, groupId: gid, visible: true,
    _isTableSetTable: true
  };
  items.push(tableItem); renderItem(tableItem); newIds.push(tableItem.id);

  // Place chairs around the table
  placeChairsAroundTable(tableItem, def, gid, newIds);

  // Register group
  groups[gid] = newIds;

  // Select the whole set
  clearSelection();
  newIds.forEach(id => addToSelection(id));
  updateCount(); updateLayers(); buildLegend();
  showToast(`${def.name} dropped — click 🪑 Adjust Seating to change seat count`);
}

function placeChairsAroundTable(tableItem, def, gid, newIds) {
  const chairDef = CATALOG.find(c => c.id === def.chairType) || CATALOG.find(c=>c.id==='chair-banquet');
  if (!chairDef) return;

  const cW = ftToPx(chairDef.w), cH = ftToPx(chairDef.h);
  const gap = ftToPx(0.25); // gap between table edge and chair
  const tCx = tableItem.x + ftToPx(tableItem.w)/2;
  const tCy = tableItem.y + ftToPx(tableItem.h)/2;
  const seats = def.seats || 4;

  const isRound = isRoundTable(def.tableType);

  if (isRound) {
    // Place chairs evenly around circumference
    const tableR = ftToPx(tableItem.w) / 2;
    const radius = tableR + gap + cH/2;
    for (let i = 0; i < seats; i++) {
      const angle = (i / seats) * 2 * Math.PI - Math.PI/2;
      const cx = tCx + radius * Math.cos(angle) - cW/2;
      const cy = tCy + radius * Math.sin(angle) - cH/2;
      const rotation = Math.round(((angle + Math.PI/2) * 180 / Math.PI + 360) % 360);
      addChairToSet(chairDef, cx, cy, rotation, gid, newIds, tableItem.zIndex + 1);
    }
  } else {
    // Rectangular table — distribute along top and bottom, with optional ends
    const tW = ftToPx(tableItem.w), tH = ftToPx(tableItem.h);
    const seatsTop = def.seatsTop || Math.floor(seats / 2);
    const seatsBottom = def.seatsBottom || Math.floor(seats / 2);
    const seatsSide = def.seatsSide || 0;
    const remaining = seats - seatsTop - seatsBottom;
    const actualSide = Math.min(seatsSide, Math.floor(remaining / 2));

    // Top row
    for (let i = 0; i < seatsTop; i++) {
      const fx = (i + 1) / (seatsTop + 1);
      const cx = tableItem.x + tW * fx - cW/2;
      const cy = tableItem.y - gap - cH;
      addChairToSet(chairDef, cx, cy, 180, gid, newIds, tableItem.zIndex + 1);
    }
    // Bottom row
    for (let i = 0; i < seatsBottom; i++) {
      const fx = (i + 1) / (seatsBottom + 1);
      const cx = tableItem.x + tW * fx - cW/2;
      const cy = tableItem.y + tH + gap;
      addChairToSet(chairDef, cx, cy, 0, gid, newIds, tableItem.zIndex + 1);
    }
    // End seats
    if (actualSide > 0) {
      for (let i = 0; i < actualSide; i++) {
        const fy = (i + 1) / (actualSide + 1);
        addChairToSet(chairDef, tableItem.x - gap - cW, tableItem.y + tH*fy - cH/2, 90, gid, newIds, tableItem.zIndex + 1);
        addChairToSet(chairDef, tableItem.x + tW + gap, tableItem.y + tH*fy - cH/2, 270, gid, newIds, tableItem.zIndex + 1);
      }
    }
  }
}

function addChairToSet(chairDef, x, y, rotation, gid, newIds, zIndex) {
  const chairItem = {
    id: ++idSeq, type: chairDef.id,
    x: Math.max(0, x), y: Math.max(0, y),
    w: chairDef.w, h: chairDef.h,
    rotation, color: COLORS[0],
    label: chairDef.name, opacity: 1,
    zIndex, groupId: gid, visible: true,
    _isTableSetChair: true
  };
  items.push(chairItem); renderItem(chairItem); newIds.push(chairItem.id);
}

// ─── SEAT COUNT EDITOR ─────────────────────────
let seatEditorGid = null;
let seatEditorDef = null;

function openSeatEditor(gid, def) {
  seatEditorGid = gid;
  seatEditorDef = def;
  const groupMembers = (groups[gid] || []).map(id => items.find(i => i.id === id)).filter(Boolean);
  const tableItem = groupMembers.find(i => i._isTableSetTable);
  const chairItems = groupMembers.filter(i => i._isTableSetChair);
  const currentSeats = chairItems.length;
  const isRound = def && isRoundTable(def.tableType);

  document.getElementById('seat-editor-title').textContent = tableItem ? tableItem.label : 'Table Set';
  document.getElementById('seat-count-val').value = currentSeats;
  document.getElementById('seat-count-display').textContent = currentSeats + ' seats';

  // Show/hide layout options
  const rectOpts = document.getElementById('seat-rect-options');
  rectOpts.style.display = isRound ? 'none' : 'block';
  if (!isRound && def) {
    document.getElementById('seat-top-val').value = def.seatsTop || Math.floor(currentSeats/2);
    document.getElementById('seat-bottom-val').value = def.seatsBottom || Math.floor(currentSeats/2);
    document.getElementById('seat-side-val').value = def.seatsSide || 0;
  }

  // Chair type selector — show current
  const chairTypeEl = document.getElementById('seat-chair-type');
  const chairCategories = ['Chairs', 'Barstools', 'CORT Group Seating'];
  const chairOptions = CATALOG.filter(c => chairCategories.includes(c.cat) && !c.isTableSet);
  chairTypeEl.innerHTML = chairOptions.map(c =>
    `<option value="${c.id}" ${def && c.id === def.chairType ? 'selected' : ''}>${c.name}</option>`
  ).join('');

  openModal('seat-editor-modal');
}

function applySeatCount() {
  if (!seatEditorGid) return;
  const seats = parseInt(document.getElementById('seat-count-val').value) || 4;
  const chairType = document.getElementById('seat-chair-type').value;

  const isRound = seatEditorDef && isRoundTable(seatEditorDef.tableType);
  const seatsTop    = isRound ? 0 : (parseInt(document.getElementById('seat-top-val')?.value)    || Math.floor(seats/2));
  const seatsBottom = isRound ? 0 : (parseInt(document.getElementById('seat-bottom-val')?.value) || Math.ceil(seats/2));
  const seatsSide   = isRound ? 0 : (parseInt(document.getElementById('seat-side-val')?.value)   || 0);

  // Find all current members of this group
  const allMembers = (groups[seatEditorGid] || []).map(id => items.find(i => i.id === id)).filter(Boolean);
  const tableItem = allMembers.find(i => i._isTableSetTable);
  if (!tableItem) { showToast('Could not find table — try re-selecting'); return; }

  pushHistory();

  // Remove all old chairs
  const oldChairIds = allMembers.filter(i => i._isTableSetChair).map(i => i.id);
  oldChairIds.forEach(id => {
    items = items.filter(i => i.id !== id);
    document.getElementById('fi-' + id)?.remove();
    selectedIds.delete(id);
  });

  // Keep only table in group
  groups[seatEditorGid] = [tableItem.id];

  // Build updated def
  const updatedDef = { ...seatEditorDef, seats, chairType, seatsTop, seatsBottom, seatsSide };
  seatEditorDef = updatedDef;

  // Place fresh chairs
  const newIds = [tableItem.id];
  placeChairsAroundTable(tableItem, updatedDef, seatEditorGid, newIds);
  groups[seatEditorGid] = newIds;

  // Re-select whole group
  clearSelection();
  newIds.forEach(id => addToSelection(id));

  updateCount(); updateLayers(); buildLegend();
  closeModal('seat-editor-modal');
  showToast(`Updated to ${seats} seats ✓`);
}

function isRoundTable(tableType) {
  return !tableType ? false :
    tableType.includes('r48') || tableType.includes('r60') || tableType.includes('r72') ||
    tableType === 'tbl-r48' || tableType === 'tbl-r60' || tableType === 'tbl-r72' ||
    tableType === 'tbl-cocktail' || tableType === 'tbl-cocktail-hi' ||
    tableType.includes('r4') || tableType.includes('r6') || tableType.includes('r7');
}

function updateSeatCountDisplay() {
  const v = document.getElementById('seat-count-val').value;
  document.getElementById('seat-count-display').textContent = v + ' seats';
}

// cached when selection includes a table set

function checkTableSetSelection() {
  const btn = document.getElementById('adjust-seating-btn');
  if (!btn) return;

  const toCheck = new Set(selectedIds);
  for (const id of selectedIds) {
    const item = items.find(i => i.id === id);
    if (item?.groupId && groups[item.groupId]) {
      groups[item.groupId].forEach(mid => toCheck.add(mid));
    }
  }

  lastTableSetGid = null;
  for (const id of toCheck) {
    const item = items.find(i => i.id === id);
    if (item?._isTableSetTable || item?._isTableSetChair) {
      if (item._isTableSetTable && item.groupId) lastTableSetGid = item.groupId;
      else if (item._isTableSetChair && item.groupId) lastTableSetGid = item.groupId;
      break;
    }
  }

  btn.style.display = lastTableSetGid ? 'block' : 'none';

  // Inject/remove a prominent banner at top of right panel
  const rpBody = document.getElementById('rp-body');
  const existing = document.getElementById('table-set-banner');
  if (existing) existing.remove();

  if (lastTableSetGid && rpBody) {
    const members = (groups[lastTableSetGid]||[]).map(id=>items.find(i=>i.id===id)).filter(Boolean);
    const tableItem = members.find(m=>m._isTableSetTable);
    const chairCount = members.filter(m=>m._isTableSetChair).length;
    const banner = document.createElement('div');
    banner.id = 'table-set-banner';
    banner.style.cssText = 'background:rgba(95,122,94,.12);border:1px solid var(--sage);border-radius:7px;padding:10px 12px;margin-bottom:10px;';
    banner.innerHTML = `
      <div style="font-size:.7rem;font-weight:700;color:var(--sage);letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">&#129681; Table Set</div>
      <div style="font-size:.78rem;color:var(--text);margin-bottom:8px">
        <strong>${(tableItem?.label||'Table').replace(/</g,'&lt;')}</strong> &middot; ${chairCount} seat${chairCount!==1?'s':''}
      </div>
      <button onclick="openSeatEditorFromPanel()" style="width:100%;padding:7px;background:var(--sage);color:white;border:none;border-radius:5px;font-family:Karla,sans-serif;font-size:.82rem;font-weight:600;cursor:pointer;">
        &#129681; Adjust Seating &amp; Chair Type
      </button>`;
    rpBody.insertBefore(banner, rpBody.firstChild);
  }
}

function openSeatEditorFromPanel() {
  // Use cached gid first, fall back to searching selectedIds
  let gid = lastTableSetGid;

  if (!gid) {
    const toCheck = new Set(selectedIds);
    for (const id of selectedIds) {
      const item = items.find(i => i.id === id);
      if (item?.groupId && groups[item.groupId]) {
        groups[item.groupId].forEach(mid => toCheck.add(mid));
      }
    }
    for (const id of toCheck) {
      const item = items.find(i => i.id === id);
      if ((item?._isTableSetTable || item?._isTableSetChair) && item.groupId) {
        gid = item.groupId;
        break;
      }
    }
  }

  if (!gid) { showToast('Select a table set first'); return; }

  const members = (groups[gid] || []).map(id => items.find(i => i.id === id)).filter(Boolean);
  const tableItem = members.find(m => m._isTableSetTable);
  const chairItems = members.filter(m => m._isTableSetChair);

  if (!tableItem) { showToast('Could not find table in set'); return; }

  const def = {
    tableType: tableItem.type,
    chairType: chairItems[0]?.type || 'chair-banquet',
    seats: chairItems.length,
    seatsTop: Math.floor(chairItems.length / 2),
    seatsBottom: Math.ceil(chairItems.length / 2),
    seatsSide: 0,
  };
  openSeatEditor(gid, def);
}

// ═══════════════════════════════════════════════
// FEATURE 1: UNDO HISTORY SLIDER
// ═══════════════════════════════════════════════
function updateUndoIndicator() {
  const el = document.getElementById('undo-count');
  const slider = document.getElementById('undo-slider');
  const wrap = document.getElementById('undo-slider-wrap');
  if (el) {
    el.textContent = history.length > 0 ? '(' + history.length + ')' : '';
    el.style.display = history.length > 0 ? '' : 'none';
  }
  if (slider) {
    slider.max = history.length;
    slider.value = history.length;
    const lbl = document.getElementById('undo-slider-label');
    if (lbl) lbl.textContent = history.length + ' step' + (history.length !== 1 ? 's' : '');
  }
  if (wrap) wrap.style.display = history.length > 0 ? 'flex' : 'none';
}

function undoToStep(step) {
  const target = parseInt(step);
  while (history.length > target) {
    const prev = history.pop();
    itemsLayer.innerHTML = '<div id="marquee"></div>';
    items = prev.items; groups = prev.groups || {};
    items.forEach(item => renderItem(item));
  }
  clearSelection(); updateCount(); updateLayers(); updateUndoIndicator();
  const lbl = document.getElementById('undo-slider-label');
  if (lbl) lbl.textContent = history.length === 0 ? 'Original' : history.length + ' step' + (history.length !== 1 ? 's' : '');
}

// ═══════════════════════════════════════════════
// FEATURE 2: DOUBLE-CLICK TO EDIT ANNOTATION TEXT
// ═══════════════════════════════════════════════
function startAnnotationEdit(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;
  const def = CATALOG.find(c => c.id === item.type);
  if (!def?.isAnnotation) return;

  const el = document.getElementById('fi-' + id);
  if (!el) return;

  const span = el.querySelector('.annotation-text span');
  if (!span) return;

  // Replace span with a contenteditable
  const origText = item.label;
  const editor = document.createElement('div');
  editor.contentEditable = 'true';
  editor.style.cssText = `position:absolute;inset:4px;font-family:'Karla',sans-serif;font-size:${Math.max(10,Math.min(14,ftToPx(item.w)/8))}px;font-weight:600;color:#5a4a00;text-align:center;word-break:break-word;line-height:1.3;outline:none;background:rgba(255,255,220,.9);border-radius:3px;padding:4px;z-index:100;cursor:text;display:flex;align-items:center;justify-content:center`;
  editor.textContent = origText === item.type.replace(/-/g,' ') ? '' : origText;
  editor.setAttribute('data-editing', id);

  const overlay = el.querySelector('.annotation-text');
  if (overlay) overlay.style.display = 'none';
  el.querySelector('.fitem-inner').appendChild(editor);

  editor.focus();
  // Select all text
  const range = document.createRange();
  range.selectNodeContents(editor);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  function commit() {
    const newText = editor.textContent.trim() || origText;
    item.label = newText;
    editor.remove();
    refreshItemEl(item);
    if (overlay) overlay.style.display = '';
    updateRightPanel();
    markDirty();
  }

  editor.addEventListener('blur', commit);
  editor.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); commit(); }
    if (e.key === 'Escape') { editor.textContent = origText; commit(); }
    e.stopPropagation(); // prevent canvas shortcuts
  });
}

// Hook double-click on annotation items into renderItem
// We patch the mousedown handler to detect dblclick
const _annotationDblClickMap = new Map(); // id -> last click time
function handleAnnotationClick(id) {
  const now = Date.now();
  const last = _annotationDblClickMap.get(id) || 0;
  _annotationDblClickMap.set(id, now);
  if (now - last < 400) { // double-click threshold
    startAnnotationEdit(id);
    return true;
  }
  return false;
}

// ═══════════════════════════════════════════════
// FEATURE 3: CANVAS BACKGROUND COLOR
// ═══════════════════════════════════════════════
const BG_COLORS = [
  { label: 'White',    value: '#ffffff' },
  { label: 'Off-White',value: '#f8f5f0' },
  { label: 'Cream',    value: '#fef9ec' },
  { label: 'Light Gray',value:'#f0f0f0' },
  { label: 'Slate',    value: '#e8eaed' },
  { label: 'Dark',     value: '#1c1917' },
  { label: 'Black',    value: '#000000' },
];
let canvasBgColor = '#ffffff';

function toggleCanvasBg() {
  // Cycle through bg colors
  const idx = BG_COLORS.findIndex(b => b.value === canvasBgColor);
  const next = BG_COLORS[(idx + 1) % BG_COLORS.length];
  setCanvasBg(next.value);
  showToast(`Canvas: ${next.label}`);
}

function setCanvasBg(color) {
  canvasBgColor = color;
  fpCanvas.style.background = color;
  // Update button to show current color
  const btn = document.getElementById('btn-bg');
  if (btn) {
    btn.style.borderColor = color === '#ffffff' ? '' : 'var(--accent)';
    btn.title = `Canvas background: ${color} (click to cycle)`;
  }
  // Adjust text colors for dark backgrounds
  const isDark = ['#1c1917','#000000'].includes(color);
  fpCanvas.style.color = isDark ? 'white' : '';
}

// Open a color picker popover for BG
function openBgPicker() {
  const existing = document.getElementById('bg-picker-pop');
  if (existing) { existing.remove(); return; }

  const btn = document.getElementById('btn-bg');
  const rect = btn.getBoundingClientRect();

  const pop = document.createElement('div');
  pop.id = 'bg-picker-pop';
  pop.style.cssText = `position:fixed;top:${rect.bottom+4}px;left:${rect.left}px;background:var(--sidebar);border:1px solid var(--border2);border-radius:8px;padding:10px;z-index:9999;display:flex;flex-direction:column;gap:6px;box-shadow:0 8px 24px rgba(0,0,0,.3);min-width:140px`;

  BG_COLORS.forEach(bg => {
    const row = document.createElement('button');
    row.style.cssText = `display:flex;align-items:center;gap:8px;background:none;border:none;cursor:pointer;color:var(--accent2);font-family:'Karla',sans-serif;font-size:.78rem;padding:3px 6px;border-radius:4px;width:100%;text-align:left`;
    row.onmouseover = () => row.style.background = 'rgba(255,255,255,.08)';
    row.onmouseout  = () => row.style.background = 'none';
    const swatch = document.createElement('div');
    swatch.style.cssText = `width:16px;height:16px;border-radius:3px;background:${bg.value};border:1px solid rgba(255,255,255,.15);flex-shrink:0`;
    if (bg.value === canvasBgColor) {
      const check = document.createElement('span');
      check.textContent = '✓';
      check.style.cssText = 'margin-left:auto;color:var(--accent);font-size:.7rem';
      row.appendChild(swatch);
      const span = document.createElement('span');
      span.textContent = bg.label;
      row.appendChild(span);
      row.appendChild(check);
    } else {
      row.appendChild(swatch);
      const span = document.createElement('span');
      span.textContent = bg.label;
      row.appendChild(span);
    }
    row.onclick = () => { setCanvasBg(bg.value); pop.remove(); };
    pop.appendChild(row);
  });

  // Custom color row
  const customRow = document.createElement('label');
  customRow.style.cssText = `display:flex;align-items:center;gap:8px;cursor:pointer;color:var(--accent2);font-family:'Karla',sans-serif;font-size:.78rem;padding:3px 6px;border-radius:4px;border-top:1px solid var(--border);margin-top:2px;padding-top:8px`;
  customRow.innerHTML = `<div style="width:16px;height:16px;border-radius:3px;border:1.5px dashed rgba(255,255,255,.3);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:10px">+</div><span>Custom…</span><input type="color" value="${canvasBgColor}" style="width:0;height:0;opacity:0;position:absolute">`;
  customRow.querySelector('input').oninput = e => { setCanvasBg(e.target.value); };
  pop.appendChild(customRow);

  document.body.appendChild(pop);
  setTimeout(() => document.addEventListener('click', function dismiss(ev) {
    if (!pop.contains(ev.target) && ev.target !== btn) { pop.remove(); document.removeEventListener('click', dismiss); }
  }), 50);
}

// ═══════════════════════════════════════════════
// FEATURE 4: CANVAS ITEM SEARCH
// ═══════════════════════════════════════════════
let searchOverlayOpen = false;

function openCanvasSearch() {
  searchOverlayOpen = !searchOverlayOpen;
  let panel = document.getElementById('canvas-search-panel');
  if (!searchOverlayOpen) {
    if (panel) panel.remove();
    clearCanvasSearchHighlights();
    return;
  }
  if (panel) panel.remove();

  panel = document.createElement('div');
  panel.id = 'canvas-search-panel';
  panel.style.cssText = `position:fixed;top:52px;left:50%;transform:translateX(-50%);background:var(--sidebar);border:1px solid var(--border2);border-radius:10px;padding:12px 16px;z-index:9999;box-shadow:0 8px 32px rgba(0,0,0,.35);display:flex;flex-direction:column;gap:10px;min-width:320px`;
  panel.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4" stroke="#b5832a" stroke-width="1.5"/><path d="M10 10l2.5 2.5" stroke="#b5832a" stroke-width="1.5" stroke-linecap="round"/></svg>
      <input id="canvas-search-input" type="text" placeholder="Search items on canvas… (e.g. 'Round 60', 'bar', 'chair')"
        style="flex:1;background:rgba(255,255,255,.08);border:1px solid var(--border2);border-radius:5px;color:var(--accent2);font-family:'Karla',sans-serif;font-size:.85rem;padding:6px 10px;outline:none">
      <button onclick="closeCanvasSearch()" style="background:none;border:none;color:var(--muted);font-size:1.1rem;cursor:pointer;padding:0 4px">×</button>
    </div>
    <div id="canvas-search-results" style="font-size:.75rem;color:var(--muted);max-height:180px;overflow-y:auto"></div>
  `;
  document.body.appendChild(panel);

  const input = panel.querySelector('#canvas-search-input');
  input.focus();
  input.oninput = () => runCanvasSearch(input.value.trim().toLowerCase());
  input.onkeydown = e => {
    if (e.key === 'Escape') closeCanvasSearch();
    if (e.key === 'Enter') {
      // Select all matching
      runCanvasSearch(input.value.trim().toLowerCase(), true);
    }
    e.stopPropagation();
  };
}

function closeCanvasSearch() {
  searchOverlayOpen = false;
  document.getElementById('canvas-search-panel')?.remove();
  clearCanvasSearchHighlights();
}

function clearCanvasSearchHighlights() {
  document.querySelectorAll('.fitem.search-hit').forEach(el => el.classList.remove('search-hit'));
}

function runCanvasSearch(query, selectAll = false) {
  clearCanvasSearchHighlights();
  const resultsEl = document.getElementById('canvas-search-results');
  if (!query) { resultsEl.innerHTML = ''; return; }

  const matches = items.filter(item =>
    item.label.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsEl.innerHTML = `<div style="padding:4px 2px;color:var(--faint)">No items found for "${query}"</div>`;
    return;
  }

  // Highlight matching items on canvas
  matches.forEach(item => {
    document.getElementById('fi-' + item.id)?.classList.add('search-hit');
  });

  resultsEl.innerHTML = matches.slice(0, 12).map(item =>
    `<div onclick="selectAndZoomTo(${item.id})" style="padding:5px 6px;border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:8px"
      onmouseover="this.style.background='rgba(255,255,255,.08)'" onmouseout="this.style.background='none'">
      <span style="color:var(--accent2)">${item.label}</span>
      <span style="color:var(--faint);font-family:'JetBrains Mono',monospace;font-size:.62rem">${item.w.toFixed(1)}×${item.h.toFixed(1)}ft</span>
    </div>`
  ).join('') + (matches.length > 12 ? `<div style="padding:4px 6px;color:var(--faint)">…${matches.length - 12} more. Press Enter to select all.</div>` : '');

  if (selectAll) {
    clearSelection();
    addManyToSelection(matches.map(i=>i.id));
    closeCanvasSearch();
    showToast(`Selected ${matches.length} matching item${matches.length > 1 ? 's' : ''}`);
    if (matches.length > 0) setTimeout(() => zoomToSelection(), 80);
  }
}

function selectAndZoomTo(id) {
  clearSelection();
  addToSelection(id);
  closeCanvasSearch();
  setTimeout(() => zoomToSelection(), 60);
}

// ═══════════════════════════════════════════════
// FEATURE 5: SMART DUPLICATE (ALT+DRAG)
// ═══════════════════════════════════════════════
// Hold Alt while dragging a selected item to duplicate it in place
// The duplicate appears offset from the original



// ═══════════════════════════════════════════════
// FEATURE 1: EDGE SNAP
// ═══════════════════════════════════════════════
const EDGE_SNAP_PX = 16; // px threshold — feels magnetic without being intrusive
// Guide lines — lazy init since elements are in the DOM after script runs
let guideV = null, guideH = null;
function getGuideV(){ return guideV || (guideV = document.getElementById('guide-v')); }
function getGuideH(){ return guideH || (guideH = document.getElementById('guide-h')); }

function hideGuides() {
  getGuideV()?.classList.remove('show');
  getGuideH()?.classList.remove('show');
}

// Called during drag — finds nearest edge alignment and snaps to it
// draggingIds: Set of item IDs being moved
// rawX, rawY: proposed position of lead item (before snap)
// Returns {x, y} after edge-snap applied (falls back to grid snap)
function edgeSnap(draggingIds, rawX, rawY, leadItem) {
  if(!snapOn){ hideGuides(); return {x:rawX, y:rawY}; }

  const stationary = items.filter(i => !draggingIds.has(i.id) && i.visible !== false);
  if(!stationary.length){ hideGuides(); return {x:rawX, y:rawY}; }

  const lW = ftToPx(leadItem.w), lH = ftToPx(leadItem.h);
  const threshold = EDGE_SNAP_PX / zoom;

  // Candidate edges of the dragged item
  const dragEdges = {
    left: rawX, right: rawX + lW, centerX: rawX + lW/2,
    top: rawY,  bottom: rawY + lH, centerY: rawY + lH/2,
  };

  let bestX = null, bestXDist = threshold, snapLineX = null;
  let bestY = null, bestYDist = threshold, snapLineY = null;

  stationary.forEach(st => {
    const sW = ftToPx(st.w), sH = ftToPx(st.h);
    const stEdges = {
      left: st.x, right: st.x + sW, centerX: st.x + sW/2,
      top: st.y,  bottom: st.y + sH, centerY: st.y + sH/2,
    };

    // X-axis snaps: drag left/right/center vs static left/right/center
    [
      [dragEdges.left,    stEdges.left,    0],
      [dragEdges.left,    stEdges.right,   0],
      [dragEdges.left,    stEdges.centerX, 0],
      [dragEdges.right,   stEdges.left,    -lW],
      [dragEdges.right,   stEdges.right,   -lW],
      [dragEdges.right,   stEdges.centerX, -lW],
      [dragEdges.centerX, stEdges.left,    -lW/2],
      [dragEdges.centerX, stEdges.right,   -lW/2],
      [dragEdges.centerX, stEdges.centerX, -lW/2],
    ].forEach(([dEdge, sEdge, offset]) => {
      const dist = Math.abs(dEdge - sEdge);
      if(dist < bestXDist){ bestXDist = dist; bestX = sEdge + offset; snapLineX = sEdge; }
    });

    // Y-axis snaps
    [
      [dragEdges.top,     stEdges.top,     0],
      [dragEdges.top,     stEdges.bottom,  0],
      [dragEdges.top,     stEdges.centerY, 0],
      [dragEdges.bottom,  stEdges.top,     -lH],
      [dragEdges.bottom,  stEdges.bottom,  -lH],
      [dragEdges.bottom,  stEdges.centerY, -lH],
      [dragEdges.centerY, stEdges.top,     -lH/2],
      [dragEdges.centerY, stEdges.bottom,  -lH/2],
      [dragEdges.centerY, stEdges.centerY, -lH/2],
    ].forEach(([dEdge, sEdge, offset]) => {
      const dist = Math.abs(dEdge - sEdge);
      if(dist < bestYDist){ bestYDist = dist; bestY = sEdge + offset; snapLineY = sEdge; }
    });
  });

  const finalX = bestX !== null ? bestX : Math.round(rawX/ftToPx(SNAP_FT))*ftToPx(SNAP_FT);
  const finalY = bestY !== null ? bestY : Math.round(rawY/ftToPx(SNAP_FT))*ftToPx(SNAP_FT);

  // Show/hide guide lines
  if(snapLineX !== null){
    getGuideV().style.left = snapLineX + 'px';
    getGuideV().classList.add('show');
  } else {
    getGuideV()?.classList.remove('show');
  }
  if(snapLineY !== null){
    getGuideH().style.top = snapLineY + 'px';
    getGuideH().classList.add('show');
  } else {
    getGuideH()?.classList.remove('show');
  }

  return { x: finalX, y: finalY };
}

// ═══════════════════════════════════════════════
// FEATURE 3: ITEM NOTES
// ═══════════════════════════════════════════════
// Notes are stored in a Map: itemId -> { text, el }
const itemNotes = new Map();

function addNoteToSelected() {
  const id = Array.from(selectedIds)[0];
  if(!id){ showToast('Select an item first'); return; }
  const item = items.find(i=>i.id===id);
  if(!item) return;

  // If note already exists, open it for editing
  if(itemNotes.has(id)){
    editNote(id);
    return;
  }

  const text = prompt('Note for "' + item.label + '":');
  if(text === null) return; // cancelled
  if(text.trim() === '') return;

  createNoteEl(id, item, text.trim());
  showToast('Note added — double-click to edit, right-click to remove');
}

// ─── ITEM LINKS ───────────────────────────────────
function addLinkToSelected() {
  const id = [...selectedIds][0];
  if(!id){ showToast('Select an item first'); return; }
  const item = items.find(i=>i.id===id);
  if(!item) return;
  const current = item.link || '';
  const url = prompt('Enter URL (photo, product page, etc.):\nExample: https://chrome-eventfurnishing.com/…', current);
  if(url === null) return; // cancelled
  const trimmed = url.trim();
  // Accept empty string to remove
  if(trimmed === '') {
    item.link = '';
    applyLinkClass(id, false);
    showToast('Link removed');
  } else {
    // Auto-prefix https:// if missing
    item.link = trimmed.startsWith('http') ? trimmed : 'https://' + trimmed;
    applyLinkClass(id, true);
    showToast('Link saved — click 🔗 badge or right-click → Open Link');
  }
  markDirty();
}

function openSelectedLink() {
  const id = [...selectedIds][0];
  if(!id) return;
  const item = items.find(i=>i.id===id);
  if(item?.link) window.open(item.link, '_blank', 'noopener');
  else showToast('No link on this item');
}

function openItemLink(id) {
  const item = items.find(i=>i.id===id);
  if(item?.link) window.open(item.link, '_blank', 'noopener');
}

function removeLinkFromSelected() {
  const id = [...selectedIds][0];
  if(!id) return;
  const item = items.find(i=>i.id===id);
  if(!item) return;
  item.link = '';
  applyLinkClass(id, false);
  showToast('Link removed');
  markDirty();
}

function applyLinkClass(id, hasLink) {
  const el = document.getElementById('fi-' + id);
  if(!el) return;
  if(hasLink) el.classList.add('has-link');
  else el.classList.remove('has-link');
}

function createNoteEl(itemId, item, text) {
  const el = document.createElement('div');
  el.className = 'item-note';
  el.textContent = text;
  el.dataset.itemId = itemId;

  // Position just above the item
  el.style.left = (item.x + ftToPx(item.w)/2 - 40) + 'px';
  el.style.top  = (item.y - 42) + 'px';

  el.addEventListener('dblclick', e => { e.stopPropagation(); editNote(itemId); });
  el.addEventListener('contextmenu', e => {
    e.preventDefault(); e.stopPropagation();
    if(confirm('Remove this note?')) removeNote(itemId);
  });

  // Make it draggable independently
  el.addEventListener('mousedown', e => {
    if(e.button !== 0) return;
    e.stopPropagation();
    const startX = e.clientX, startY = e.clientY;
    const origLeft = parseInt(el.style.left)||0, origTop = parseInt(el.style.top)||0;
    function onMove(e){
      el.style.left = (origLeft + (e.clientX-startX)/zoom) + 'px';
      el.style.top  = (origTop  + (e.clientY-startY)/zoom) + 'px';
    }
    function onUp(){ window.removeEventListener('mousemove',onMove); window.removeEventListener('mouseup',onUp); }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  });

  itemsLayer.appendChild(el);
  itemNotes.set(itemId, { text, el });
}

function editNote(itemId) {
  const note = itemNotes.get(itemId);
  if(!note) return;
  const item = items.find(i=>i.id===itemId);
  const newText = prompt('Edit note:', note.text);
  if(newText === null) return;
  if(newText.trim() === ''){ removeNote(itemId); return; }
  note.text = newText.trim();
  note.el.textContent = newText.trim();
}

function removeNote(itemId) {
  const note = itemNotes.get(itemId);
  if(!note) return;
  note.el.remove();
  itemNotes.delete(itemId);
}

// Keep notes attached when items move
const _origRefreshItemEl_notes = refreshItemEl;
// (we'll patch this inline in refreshItemEl rather than duplicating)

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
buildPalette();
setCanvasSize(1200,800);
restoreAutosave();
setTool('select');
document.getElementById('btn-grid').classList.add('active');
document.getElementById('btn-snap').classList.add('active');
setTimeout(zoomFit,200);
