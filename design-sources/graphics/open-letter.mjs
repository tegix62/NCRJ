// "National Open Letter to CSWE" signature-drive poster, co-sponsored by Payment 4 Placements.
// The QR code and the printed link are the ones on the original poster.
// The signature count ("1,400+") is a snapshot: change it here and render again when it grows.
import { page, icon, logoBadge, qr, p4pLogo } from '../common.mjs';

const SIGN_URL = 'https://forms.gle/v6TeAWbvZZwEC5tn9';
const SIGNATURES = '1,400+';

const css = `
.poster{width:900px;background:var(--green);color:var(--cream);padding:0 0 0}
.head{display:flex;align-items:center;gap:20px;padding:26px 36px 22px}
.head .org{display:flex;gap:16px;align-items:center;padding-right:20px;border-right:2px solid var(--rust)}
.head .org b{display:block;font-family:var(--display);font-size:30px;letter-spacing:.02em}
.head .org span{display:block;font-size:12.5px;line-height:1.3;max-width:200px;color:#d9d3c6}
.x{font-size:34px;color:var(--rust);font-weight:700}
.head .p4p{display:flex;align-items:center;gap:16px}
.head .p4p img{height:74px}
.head .p4p b{font-family:var(--display);font-size:25px;line-height:1.1;text-transform:uppercase;padding-left:16px;border-left:2px solid var(--rust)}
.t1{margin:0 28px;padding:16px 26px;background:var(--rust);color:#fff;text-align:center;transform:rotate(-1deg);font-family:var(--display);font-weight:700;font-size:44px}
.t2{margin:10px 40px 0;padding:11px 20px;background:var(--cream);color:var(--green);text-align:center;transform:rotate(.6deg);font-weight:800;font-size:26px}
.count{display:flex;align-items:center;justify-content:center;gap:34px;margin-top:22px}
.count .mega{color:var(--cream);width:112px;height:112px;transform:rotate(-8deg)}
.count h2{font-family:var(--display);font-weight:700;font-size:118px;line-height:.92;letter-spacing:-.02em;text-align:center}
.count h2 small{display:block;font-size:52px;letter-spacing:.02em;margin-top:2px;text-transform:uppercase}
.goal{width:max-content;margin:14px auto 0;padding:10px 40px;background:var(--rust);color:#fff;transform:rotate(-1.5deg);font-weight:800;font-size:34px;text-transform:uppercase}
.ms-label{display:flex;align-items:center;gap:20px;margin:26px 40px 14px;font-weight:700;font-size:15px;letter-spacing:.2em;text-transform:uppercase;color:#e8d5c8}
.ms-label:before,.ms-label:after{content:'';flex:1;height:2px;background:var(--rust)}
.ms{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:0 36px}
.ms div{display:grid;grid-template-columns:54px 1fr;gap:12px;align-items:center;padding:16px 16px;background:var(--cream);color:var(--green);border-radius:14px}
.ms b{display:block;font-family:var(--display);font-size:38px;line-height:1;color:var(--rust-deep)}
.ms span{display:block;font-weight:600;font-size:15px;line-height:1.2;margin-top:3px}
.ms svg{color:var(--green)}
.join{display:grid;grid-template-columns:1fr 210px;gap:26px;margin:24px 36px 0;align-items:start}
.join p{padding-left:16px;border-left:4px solid var(--rust);font-size:19px;line-height:1.4;font-weight:500;color:#eee8dc}
.sign{display:inline-block;margin-top:22px;padding:14px 42px;background:var(--rust);color:#fff;border-radius:999px;font-weight:800;font-size:38px;text-transform:uppercase;letter-spacing:.01em}
.note{margin-top:12px;font-size:16px;font-style:italic;color:#d9d3c6}
.link{display:flex;align-items:center;gap:10px;margin-top:6px;font-weight:700;font-size:21px}
.link svg{color:var(--rust)}
.qrbox{background:var(--cream);padding:16px;border-radius:12px;text-align:center}
.qrbox svg{display:block;width:100%;height:auto}
.qrbox span{display:inline-block;margin-top:12px;padding:6px 14px;background:var(--rust);color:#fff;font-weight:800;font-size:16px;letter-spacing:.04em;text-transform:uppercase}
.foot{margin-top:26px;padding:15px 36px;background:var(--rust-deep);text-align:center;font-weight:600;font-size:17px}
`;

export default {
  name: 'open-letter-to-cswe',
  width: 900,
  html: async (site) =>
    page(
      css,
      `<div class="poster">
  <div class="head">
    <div class="org">${logoBadge(70)}<div><b>NCRJI-SW</b><span>National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work</span></div></div>
    <span class="x">×</span>
    <div class="p4p"><img src="${p4pLogo()}" alt=""><b>Payment 4<br>Placements</b></div>
  </div>
  <div class="t1">National Open Letter to CSWE</div>
  <div class="t2">Defend Anti-Racism in Social Work Education</div>
  <div class="count"><span class="mega">${icon('megaphone', 112, 1.4)}</span><h2>${SIGNATURES}<small>Signatures</small></h2></div>
  <div class="goal">Next goal: 1,865</div>
  <div class="ms-label">Our historically meaningful milestones</div>
  <div class="ms">
    <div>${icon('unlink', 50, 1.7)}<p><b>1,865</b><span>Abolition of slavery · 1865</span></p></div>
    <div>${icon('book-open', 50, 1.7)}<p><b>1,994</b><span>Reproductive justice framework · 1994</span></p></div>
    <div>${icon('library', 50, 1.7)}<p><b>2,022</b><span>Anti-racism in the 2022 EPAS</span></p></div>
  </div>
  <div class="join">
    <div>
      <p>Join social work educators, students, practitioners, scholars, and community members in a national call for CSWE to restore explicit anti-racist and anti-oppressive educational commitments in the 2029 EPAS.</p>
      <div class="sign">Sign the letter</div>
      <p class="note" style="border:0;padding:0;font-size:16px">Public or confidential support welcome.</p>
      <div class="link">${icon('link', 26, 2)}forms.gle/v6TeAWbvZZwEC5tn9</div>
    </div>
    <div class="qrbox">${await qr(SIGN_URL)}<span>Scan to sign</span></div>
  </div>
  <div class="foot">Convened by NCRJI-SW · Campaign co-sponsored by Payment 4 Placements</div>
</div>`,
    ),
};
