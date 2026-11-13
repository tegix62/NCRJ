// "Proposed 2029 EPAS: What Changed?" infographic. Text comes from src/data/epas-what-changed.mjs.
import { EPAS } from '../../src/data/epas-what-changed.mjs';
import { page, icon, logoBadge } from '../common.mjs';

const css = `
.poster{width:1020px;background:var(--cream)}
.top{display:grid;grid-template-columns:1fr 292px;gap:34px;padding:44px 40px 30px;background:
  radial-gradient(ellipse at 90% 0%,#2e5247 0%,transparent 55%),var(--green);color:var(--cream)}
h1{font-family:var(--display);font-weight:700;text-transform:uppercase;line-height:.98;letter-spacing:-.01em}
h1 .a{display:block;font-size:68px}
h1 .b{display:block;font-size:92px}
h1 .c{display:block;font-size:57px;color:#e2a07f;margin-top:4px}
.strip{display:inline-block;margin:20px 0 14px;padding:10px 22px 11px;background:var(--rust-deep);color:#fff;transform:rotate(-1deg);
  font-weight:800;font-size:23px;line-height:1.2;text-transform:uppercase;letter-spacing:.01em}
.lede{font-family:var(--display);font-size:19px;line-height:1.38;color:#f1ebe0;max-width:610px}
.quote{align-self:center;padding:30px 26px;background:var(--sand);color:var(--green);transform:rotate(2deg);
  font-weight:800;font-size:25px;line-height:1.2;text-transform:uppercase;border-bottom:7px solid var(--rust)}
.compare{display:grid;grid-template-columns:1fr 1fr;margin:0 14px;padding-bottom:70px;position:relative;margin-top:-6px;z-index:1}
.col{display:flex;flex-direction:column;border-radius:10px;overflow:hidden;border:1.5px solid var(--green);background:var(--cream)}
.col.now{border-color:var(--rust-deep);background:#f7e6de}
.col h2{padding:18px 26px 16px 24px;color:#fff;background:var(--green);font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:31px;line-height:1.05}
.col.now h2{background:var(--rust-deep);padding-left:62px}
.col h2 em{font-style:normal;color:#e2a07f}
.col .intro{padding:0 26px 18px 24px;color:#e9e4da;background:var(--green);font-family:var(--display);font-size:16px;line-height:1.35}
.col.now .intro{background:var(--rust-deep);padding-left:62px;color:#f6e4dc}
.items{list-style:none;flex:1;display:flex;flex-direction:column}
.items li{flex:1;display:grid;grid-template-columns:62px 1fr;gap:18px;align-items:center;padding:15px 22px 15px 20px;border-bottom:1px solid #d9cfbf;font-family:var(--display);font-size:17px;line-height:1.35}
.col.now .items li{border-bottom-color:#e5c4b6;grid-template-columns:62px 1fr;padding-left:20px}
.items li:last-child{border-bottom:0}
.ic{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;background:#dde5dc;color:var(--green)}
.col.now .ic{background:#efc9b9;color:var(--rust-deep)}
.mid{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);z-index:3;padding:16px 70px 16px 34px;background:var(--rust-deep);color:#fff;font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:22px;white-space:nowrap;letter-spacing:.02em;clip-path:polygon(0 0,calc(100% - 34px) 0,100% 50%,calc(100% - 34px) 100%,0 100%);box-shadow:none}
.why{display:grid;grid-template-columns:278px 1fr 230px;gap:26px;margin-top:0;padding:30px 36px 30px 34px;background:#dde6dc;align-items:start}
.why .lab{display:inline-block;padding:14px 22px;background:var(--green);color:var(--cream);font-family:var(--display);font-weight:700;text-transform:uppercase;font-size:40px;line-height:1;transform:rotate(-2deg)}
.why .lab span{display:block}
.why p.t{margin-top:18px;padding-left:16px;border-left:3px solid var(--green);font-family:var(--display);font-size:17px;line-height:1.38;color:#2a2a28}
.why ul{list-style:none;display:grid;gap:15px}
.why li{display:grid;grid-template-columns:50px 1fr;gap:14px;align-items:center;font-family:var(--display);font-size:16.5px;line-height:1.35}
.why .ic{background:var(--green);color:var(--cream);width:48px;height:48px}
.note{align-self:start;margin-top:8px;padding:20px 18px;background:var(--rust);color:#fff;transform:rotate(5deg);font-weight:800;text-transform:uppercase;font-size:23px;line-height:1.12;box-shadow:0 4px 0 rgba(0,0,0,.12)}
footer{background:var(--green);color:var(--cream);padding:26px 40px 14px}
.f1{display:grid;grid-template-columns:1fr 340px;gap:30px;align-items:center}
.brand{display:flex;gap:22px;align-items:center;padding-right:26px;border-right:1px solid rgba(255,255,255,.28)}
.brand .nm{font-family:var(--display);font-size:25px;line-height:1.2}
.brand .ac{margin-top:10px;letter-spacing:.42em;font-size:15px;font-weight:600;color:#e2a07f;display:flex;align-items:center;gap:14px}
.brand .ac:before,.brand .ac:after{content:'';flex:1;height:1px;background:rgba(255,255,255,.35)}
.f1 .pr{font-size:14.5px;line-height:1.35;font-weight:500}
.f1 .row{display:flex;gap:10px;align-items:center;margin-top:8px;font-size:16px}
.f2{display:flex;justify-content:space-between;margin-top:20px;padding-top:12px;border-top:1px solid rgba(255,255,255,.2);font-size:13.5px;color:#e2ddd2}
.f2 .v{letter-spacing:.14em;font-size:12.5px;font-weight:600}
`;

const li = (items, cls = '') =>
  `<ul class="items">${items.map((i) => `<li><span class="ic">${icon(i.icon, 28, 1.9)}</span><span>${i.text}</span></li>`).join('')}</ul>`;

export default {
  name: 'epas-what-changed',
  width: 1020,
  html: async (site) =>
    page(
      css,
      `<div class="poster">
  <div class="top">
    <div>
      <h1><span class="a">Proposed</span><span class="b">2029 EPAS:</span><span class="c">What changed?</span></h1>
      <p class="strip">${EPAS.strip}</p>
      <p class="lede">${EPAS.lede}</p>
    </div>
    <p class="quote">${EPAS.quote}</p>
  </div>
  <div class="compare">
    <section class="col was"><h2>What the <em>2022</em> EPAS said explicitly</h2><p class="intro">${EPAS.was.intro}</p>${li(EPAS.was.items)}</section>
    <div class="mid">${EPAS.arrow}</div>
    <section class="col now"><h2>What the draft <em>2029</em> EPAS does instead</h2><p class="intro">${EPAS.now.intro}</p>${li(EPAS.now.items)}</section>
  </div>
  <div class="why">
    <div><div class="lab"><span>Why this</span><span>matters</span></div><p class="t">${EPAS.why.text}</p></div>
    <ul>${EPAS.why.items.map((i) => `<li><span class="ic">${icon(i.icon, 26, 1.9)}</span><span>${i.text}</span></li>`).join('')}</ul>
    <p class="note">${EPAS.why.note}</p>
  </div>
  <footer>
    <div class="f1">
      <div class="brand">${logoBadge(96)}<div><div class="nm">${site.orgName}</div><div class="ac">NCRJI-SW</div></div></div>
      <div><p class="pr">Produced by the National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work (NCRJI-SW)</p>
        <p class="row">Email: ${site.email}</p><p class="row">Website: ${site.host}</p></div>
    </div>
    <div class="f2"><span>${EPAS.credit}</span><span class="v">EDUCATION<i class="diamond"></i>JUSTICE<i class="diamond"></i>LIBERATION</span></div>
  </footer>
</div>`,
    ),
};
