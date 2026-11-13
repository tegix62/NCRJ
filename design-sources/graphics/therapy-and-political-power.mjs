// Poster for "Therapy and Political Power", Our Social Work Future: Community Organizing Hour,
// Tuesday, November 17, 2026, 7:00 PM ET. The QR code is the registration link on the original poster.
import { page, logoBadge, qr, p4pLogo, dataUri } from '../common.mjs';

const REGISTER_URL = 'https://us06web.zoom.us/meeting/register/eMzzmd-FTWys8xpOI7xQfQ';

const css = `
.poster{width:800px;background:var(--cream)}
.head{display:flex;align-items:center;gap:22px;padding:22px 30px;background:var(--green);color:var(--cream)}
.head .t{padding-left:22px;border-left:2px solid var(--rust)}
.head .pres{font-family:var(--display);font-weight:700;font-size:31px;letter-spacing:.06em;text-transform:uppercase}
.head .series{display:flex;align-items:center;gap:12px;margin-top:6px;font-weight:800;font-size:15px;letter-spacing:.2em;color:#e2a07f;text-transform:uppercase}
.head .series:before,.head .series:after{content:'';flex:1;height:2px;background:var(--rust)}
.head .hour{margin-top:4px;font-family:var(--display);font-size:35px}
.head .org{margin-top:6px;font-size:12.5px;color:#d9d3c6}
.bar{height:5px;background:var(--rust)}
h1{margin:24px 24px 0;text-align:center;font-family:var(--display);font-weight:700;font-size:55px;line-height:1.05;color:var(--rust-deep)}
.sub{margin-top:10px;text-align:center;font-weight:800;font-size:25px;color:var(--ink)}
.pol{display:flex;align-items:center;gap:20px;margin:14px 50px 0;font-weight:800;font-size:15px;letter-spacing:.14em;color:var(--rust-text);text-transform:uppercase;white-space:nowrap}
.pol:before,.pol:after{content:'';flex:1;height:2px;background:var(--rust)}
.people{display:grid;grid-template-columns:1fr 1fr;gap:34px;margin:22px 42px 0}
.person{text-align:center}
.person img{display:block;width:100%;aspect-ratio:1/.98;object-fit:cover;border-bottom:5px solid var(--rust)}
.person .role{margin-top:14px;font-weight:800;font-size:16px;letter-spacing:.04em;color:var(--rust-deep);text-transform:uppercase}
.person .nm{margin-top:4px;font-family:var(--display);font-weight:700;font-size:28px}
.person p{margin-top:6px;font-size:16px;line-height:1.35;color:#2b2b29}
.topic{margin:22px 30px 0;padding-top:16px;border-top:2px solid var(--rust);text-align:center}
.topic b{display:block;font-weight:800;font-size:23px}
.topic span{display:block;margin-top:4px;font-size:18px;color:#2b2b29}
.co{display:flex;align-items:center;justify-content:center;gap:22px;margin:18px 30px 0;padding:14px 20px;background:#fff;border:2px solid var(--rust);border-radius:6px}
.co img{height:70px}
.co div{padding-left:22px;border-left:2px solid var(--rust)}
.co small{display:block;font-weight:800;font-size:15px;letter-spacing:.1em;color:var(--rust-deep);text-transform:uppercase}
.co b{display:block;margin-top:2px;font-family:var(--display);font-size:29px;text-transform:uppercase}
.when{display:grid;grid-template-columns:1fr 150px;gap:24px;align-items:center;margin-top:22px;padding:24px 30px;background:var(--green);color:var(--cream)}
.when .d{font-family:var(--display);font-weight:700;font-size:44px;line-height:1.05}
.when .tm{margin-top:8px;font-weight:800;font-size:27px;color:#e2a07f}
.when .reg{margin-top:8px;font-size:17px;color:#d9d3c6}
.qrb{background:var(--cream);padding:10px 10px 8px;border-radius:6px;text-align:center;color:var(--green)}
.qrb svg{display:block;width:100%;height:auto}
.qrb span{display:block;margin-top:6px;font-weight:800;font-size:12px;letter-spacing:.06em;text-transform:uppercase}
`;

export default {
  name: 'therapy-and-political-power',
  width: 800,
  html: async (site) =>
    page(
      css,
      `<div class="poster">
  <div class="head">
    ${logoBadge(104)}
    <div class="t"><div class="pres">NCRJI-SW Presents</div><div class="series">Our Social Work Future</div><div class="hour">Community Organizing Hour</div>
    <div class="org">National Collaborative for Reproductive Justice, Innovation, and Political Education in Social Work</div></div>
  </div>
  <div class="bar"></div>
  <h1>Therapy and Political Power</h1>
  <div class="sub">Healing, grief, and the structures that shape our lives</div>
  <div class="pol">Political education for social work</div>
  <div class="people">
    <div class="person"><img src="${dataUri('public/images/leadership/e-goldblatt-hyatt.webp', 'image/webp')}" alt="">
      <div class="role">Conversation lead</div><div class="nm">Dr. E. Goldblatt Hyatt</div>
      <p>Co-Director, NCRJI-SW<br>Director, Doctor of Social Work Degree Program<br>Associate Professor of Professional Practice for Reproductive Justice<br>Rutgers School of Social Work</p></div>
    <div class="person"><img src="${dataUri('design-sources/assets/joanne-cacciatore.jpg', 'image/jpeg')}" alt="">
      <div class="role">Featured guest</div><div class="nm">Dr. Joanne Cacciatore</div>
      <p>Professor, Arizona State University<br>Founder, MISS Foundation<br>2025 Fellow, American Academy of Social Work and Social Welfare</p></div>
  </div>
  <div class="topic"><b>Grief, trauma, compassionate care, and institutional power</b><span>What does healing mean when suffering has social and political roots?</span></div>
  <div class="co"><img src="${p4pLogo()}" alt=""><div><small>Series co-sponsor:</small><b>Payment 4 Placements</b></div></div>
  <div class="when">
    <div><div class="d">Tuesday, November 17</div><div class="tm">7:00 PM ET · Virtual</div><div class="reg">Registration required · Hosted by NCRJI-SW</div></div>
    <div class="qrb">${await qr(REGISTER_URL)}<span>Scan to register</span></div>
  </div>
</div>`,
    ),
};
