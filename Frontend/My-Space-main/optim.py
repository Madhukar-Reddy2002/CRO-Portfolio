import sys

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Hero Section CSS
content = content.replace(
    '''#hero{
  min-height:100vh;display:flex;flex-direction:column;
  justify-content:center;padding:11rem 5% 7rem;position:relative;overflow:hidden
}''',
    '''#hero{
  min-height:100vh;display:flex;flex-direction:column;
  justify-content:center;padding:7rem 5% 3rem;position:relative;overflow:hidden
}
@media(max-height:800px) { #hero { min-height:auto; padding-top:8rem; } }'''
)

content = content.replace(
    '''.hero-inner{position:relative;z-index:1;max-width:960px}''',
    '''.hero-inner{position:relative;z-index:1;max-width:1200px;display:grid;grid-template-columns:1.05fr 0.95fr;gap:4rem;align-items:center}
@media(max-width:960px){.hero-inner{grid-template-columns:1fr;text-align:center;gap:3rem}}'''
)

content = content.replace(
    '''.h-eyebrow{
  display:inline-flex;align-items:center;gap:.6rem;
  background:var(--surface2);border:1px solid var(--border);
  border-radius:999px;padding:.38rem 1rem;margin-bottom:2rem;''',
    '''.h-eyebrow{
  display:inline-flex;align-items:center;gap:.6rem;
  background:var(--surface2);border:1px solid var(--border);
  border-radius:999px;padding:.38rem 1rem;margin-bottom:1.2rem;'''
)

content = content.replace(
    '''  font-size:clamp(3rem,7.5vw,6.8rem);line-height:1.0;letter-spacing:-.03em;margin-bottom:1.6rem''',
    '''  font-size:clamp(2.5rem,6vw,5rem);line-height:1.05;letter-spacing:-.03em;margin-bottom:1rem'''
)

content = content.replace(
    '''.h-sub{font-size:clamp(1rem,1.8vw,1.2rem);color:var(--muted);max-width:560px;margin-bottom:3rem;line-height:1.75}''',
    '''.h-sub{font-size:clamp(.95rem,1.5vw,1.1rem);color:var(--muted);max-width:560px;margin-bottom:2rem;line-height:1.6;margin-left:auto;margin-right:auto}
@media(min-width:961px){.h-sub{margin-left:0;margin-right:0}}'''
)

content = content.replace(
    '''/* stats */
.h-stats{
  display:flex;gap:3.5rem;flex-wrap:wrap;
  margin-top:4rem;padding-top:2rem;border-top:1px solid var(--border)
}''',
    '''/* stats */
.h-stats{
  display:flex;gap:2.5rem;flex-wrap:wrap;justify-content:center;
  margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid var(--border)
}
@media(min-width:961px){.h-stats{justify-content:flex-start}}'''
)

content = content.replace(
    '''.h-ctas{display:flex;gap:1rem;flex-wrap:wrap}''',
    '''.h-ctas{display:flex;gap:1rem;flex-wrap:wrap;justify-content:center}
@media(min-width:961px){.h-ctas{justify-content:flex-start}}'''
)

svg_css = '''
/* ════════ SVG ANIMATIONS ════════ */
@keyframes floatY { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes floatX { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(12px); } }
@keyframes pulseGlow { 0%, 100% { filter: drop-shadow(0 0 6px var(--accent)); } 50% { filter: drop-shadow(0 0 18px var(--accent)); } }
@keyframes drawLine { to { stroke-dashoffset: 0; } }
.svg-f1 { animation: floatY 6s ease-in-out infinite; }
.svg-f2 { animation: floatY 7.5s ease-in-out infinite reverse; }
.svg-f3 { animation: floatX 8s ease-in-out infinite; }
.svg-pulse { animation: pulseGlow 3.5s infinite; }
.svg-draw { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: drawLine 2.5s ease-out forwards; animation-delay: .8s; }
'''
content = content.replace('/* scroll cue */', svg_css + '\n/* scroll cue */')

start_tag = '<div class="hero-inner">'
end_tag = '<div class="scroll-cue">'
hero_start = content.find(start_tag)
hero_end = content.find(end_tag)

hero_html = '''<div class="hero-inner">
    <div class="hero-text-col">
      <div class="h-eyebrow"><span class="h-dot"></span>Available for Roles — 2025</div>
      <h1 class="h-title">
        <span class="line">Turning Data Into</span>
        <span class="line">Decisions &amp; <span class="ac">Apps.</span></span>
      </h1>
      <p class="h-sub">CRO Analyst &nbsp;|&nbsp; Data Analyst &nbsp;|&nbsp; Full-Stack Developer (Data-Driven Apps).</p>
      <div class="h-ctas">
        <button class="btn-p" onclick="document.getElementById('projects').scrollIntoView({behavior:'smooth'})">Explore My Work ↗</button>
        <button class="btn-n" onclick="showPage('github')">GitHub Portfolio</button>
      </div>
      <div class="h-stats">
        <div><div class="stat-num" id="c1">0</div><div class="stat-label">Years of Experience</div></div>
        <div><div class="stat-num" id="c2">0</div><div class="stat-label">Real-World Projects</div></div>
        <div><div class="stat-num" id="c3">0</div><div class="stat-label">Data Apps Built</div></div>
        <div><div class="stat-num" id="c4">0</div><div class="stat-label">Enterprise Clients</div></div>
      </div>
    </div>
    <div class="hero-svg-col reveal" style="width:100%;height:100%;min-height:300px;display:flex;align-items:center;justify-content:center;">
      <svg viewBox="0 0 500 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;overflow:visible;">
        <defs>
          <linearGradient id="gradAcc" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="var(--accent)" />
            <stop offset="100%" stop-color="var(--accent-dim)" />
          </linearGradient>
          <linearGradient id="gradAmb" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="var(--amber)" />
            <stop offset="100%" stop-color="transparent" stop-opacity="0.1" />
          </linearGradient>
        </defs>
        
        <!-- Grid Floor -->
        <path d="M40 380 L460 380" stroke="var(--border)" stroke-width="2" stroke-dasharray="8 8" />
        <path d="M40 380 L40 60" stroke="var(--border)" stroke-width="2" stroke-dasharray="8 8" />
        
        <!-- CRO Bar Chart -->
        <rect x="90" y="270" width="45" height="110" fill="var(--surface2)" stroke="var(--border)" class="svg-f1" />
        <rect x="180" y="200" width="45" height="180" fill="var(--surface2)" stroke="var(--border)" class="svg-f2" />
        <rect x="270" y="110" width="45" height="270" fill="url(#gradAcc)" rx="6" class="svg-pulse" />
        <rect x="360" y="40" width="45" height="340" fill="url(#gradAmb)" rx="6" class="svg-f1" opacity="0.8" />
        
        <!-- Data connecting nodes line -->
        <path d="M40 330 L112 210 L202 240 L292 100 L420 70" fill="none" class="svg-draw" stroke="var(--amber)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        
        <circle cx="112" cy="210" r="7" fill="var(--bg)" stroke="var(--amber)" stroke-width="3" class="svg-f3" />
        <circle cx="202" cy="240" r="7" fill="var(--bg)" stroke="var(--amber)" stroke-width="3" class="svg-f3" />
        <circle cx="292" cy="100" r="9" fill="var(--amber)" class="svg-pulse" />
        <circle cx="420" cy="70" r="7" fill="var(--bg)" stroke="var(--amber)" stroke-width="3" class="svg-f3" />
        
        <!-- Floating Design Elements -->
        <text x="350" y="290" font-family="var(--mono)" font-size="28" font-weight="bold" fill="var(--muted)" class="svg-f1" opacity="0.4">&lt;/&gt;</text>
        <text x="80" y="90" font-family="var(--mono)" font-size="28" font-weight="bold" fill="var(--muted)" class="svg-f2" opacity="0.4">{ }</text>
        
        <!-- Tech Nodes -->
        <g class="svg-f2">
          <circle cx="380" cy="210" r="28" fill="var(--surface)" stroke="var(--border)" stroke-width="2" />
          <text x="380" y="215" font-family="var(--body)" font-size="13" fill="var(--accent)" text-anchor="middle" font-weight="600">SQL</text>
        </g>
        
        <g class="svg-f1">
          <circle cx="160" cy="90" r="28" fill="var(--surface)" stroke="var(--border)" stroke-width="2" />
          <text x="160" y="95" font-family="var(--body)" font-size="14" fill="var(--accent)" text-anchor="middle" font-weight="600">PY</text>
        </g>
        
        <!-- CRO Tag -->
        <g class="svg-f3" opacity="0.9">
          <rect x="230" y="40" width="60" height="24" rx="4" fill="var(--accent-dim)" stroke="var(--accent)" stroke-width="1" />
          <text x="260" y="56" font-family="var(--mono)" font-size="11" fill="var(--accent)" text-anchor="middle" font-weight="bold" letter-spacing="1">CRO</text>
        </g>
      </svg>
    </div>
  </div>
  '''

if hero_start != -1 and hero_end != -1:
    content = content[:hero_start] + hero_html + content[hero_end:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("SUCCESS")
else:
    print("FAILED")
