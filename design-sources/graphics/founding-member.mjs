// "Become a Founding Member" invitation. The QR code and printed link are the ones on the original.
import { page, logoBadge, qr } from '../common.mjs';

const JOIN_URL = 'https://forms.gle/2uGy9NhCb4NzS9ur9';

const css = `
.poster{width:900px;background:var(--green);color:var(--cream);padding:0 0 40px}
.bar{height:16px;background:linear-gradient(90deg,var(--rust) 0 62%,var(--sand) 62%)}
.top{position:relative;padding:40px 48px 0}
.disc{position:absolute;right:-90px;top:-110px;width:420px;height:420px;border-radius:50%;background:#2a4b42}
.kicker{font-weight:800;font-size:17px;letter-spacing:.18em;text-transform:uppercase;color:#e2a07f}
h1{margin-top:22px;font-family:var(--display);font-weight:700;font-size:78px;line-height:1.02;text-transform:uppercase;max-width:620px}
.rule{width:340px;height:6px;margin-top:20px;background:var(--rust)}
.who{position:absolute;right:48px;top:44px;display:grid;justify-items:center;gap:8px;z-index:1}
.who b{font-family:var(--display);font-size:22px;letter-spacing:.04em}
.lede{margin:28px 48px 0;max-width:640px;font-size:21px;line-height:1.45;color:#eee8dc}
.mid{display:grid;grid-template-columns:350px 1fr;gap:34px;margin:38px 48px 0;align-items:center}
.card{background:var(--cream);color:var(--green);border-radius:22px;padding:30px 30px 22px;text-align:center}
.card svg{display:block;width:100%;height:auto}
.card b{display:block;margin-top:18px;font-weight:800;font-size:19px;letter-spacing:.06em;text-transform:uppercase}
.free h3{font-weight:800;font-size:25px;letter-spacing:.08em;text-transform:uppercase;color:#e2a07f}
.free ul{list-style:none;margin-top:22px;display:grid;gap:24px}
.free li{display:grid;grid-template-columns:16px 1fr;gap:16px;align-items:start}
.free li:before{content:'';width:14px;height:14px;margin-top:8px;border-radius:50%;background:var(--rust)}
.free li b{display:block;font-weight:800;font-size:23px;letter-spacing:.02em;text-transform:uppercase}
.free li span{display:block;margin-top:2px;font-size:17px;color:#d9d3c6}
.free p.no{margin-top:26px;font-weight:800;font-size:18px;letter-spacing:.06em;text-transform:uppercase;color:#e2a07f}
.crisis{margin:40px 48px 0;padding:30px 20px;background:var(--rust);color:#fff;border-radius:22px;text-align:center;font-family:var(--display);font-weight:700;font-size:30px;line-height:1.3;text-transform:uppercase}
.foot{margin-top:28px;text-align:center;display:grid;gap:12px}
.foot .r{font-size:17px;color:#d9d3c6}
.foot .t{font-family:var(--display);font-weight:700;font-size:25px;color:#e2a07f}
.foot .u{font-size:15px;color:#cfc9bc}
`;

export default {
  name: 'founding-member',
  width: 900,
  html: async () =>
    page(
      css,
      `<div class="poster">
  <div class="bar"></div>
  <div class="top">
    <div class="disc"></div>
    <div class="who">${logoBadge(150)}<b>NCRJI-SW</b></div>
    <div class="kicker">Our Social Work Future</div>
    <h1>Become a<br>Founding Member</h1>
    <div class="rule"></div>
  </div>
  <p class="lede">Join the National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work.</p>
  <div class="mid">
    <div class="card">${await qr(JOIN_URL)}<b>Scan to join</b></div>
    <div class="free">
      <h3>Free membership</h3>
      <ul>
        <li><div><b>Learn together</b><span>Political education</span></div></li>
        <li><div><b>Organize together</b><span>Collective advocacy</span></div></li>
        <li><div><b>Build together</b><span>Community and care</span></div></li>
      </ul>
      <p class="no">No required time commitment</p>
    </div>
  </div>
  <div class="crisis">We don’t have to wait for a crisis<br>to build collective power.</div>
  <div class="foot"><div class="r">Rooted in Black feminist thought, reproductive justice, and abolition.</div><div class="t">Together, we can change who decides.</div><div class="u">forms.gle/2uGy9NhCb4NzS9ur9</div></div>
</div>`,
    ),
};
