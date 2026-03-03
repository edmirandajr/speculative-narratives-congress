# Design Brainstorming: Speculative Narratives Congress Website

## Abordagem 1: Neo-Brutalismo Especulativo

<response>
<text>
**Design Movement**: Neo-Brutalismo Digital com influências de Glitch Art e Cyberpunk académico

**Core Principles**:
- Honestidade estrutural: elementos visíveis, camadas expostas, grid aparente
- Contraste dramático entre blocos sólidos e espaços vazios
- Tipografia como arquitetura: letras grandes, peso pesado, hierarquia agressiva
- Imperfeição intencional: bordas irregulares, glitches subtis, texturas granuladas

**Color Philosophy**: 
Base em grafite profundo (oklch(0.18 0.01 240)) com destaques em ciano elétrico (oklch(0.75 0.15 195)) e magenta vibrante (oklch(0.65 0.22 330)). A paleta evoca terminais de computador antigos e interfaces de ficção científica, criando tensão entre o académico e o especulativo. Âmbar (oklch(0.70 0.18 85)) usado para alertas e call-to-actions, sugerindo urgência e transformação.

**Layout Paradigm**: 
Grid assimétrico quebrado — secções em ângulos de 2-5 graus, sobreposições intencionais, caixas de texto que "invadem" outras áreas. Navegação fixa lateral esquerda com menu vertical. Conteúdo principal em blocos desalinhados que criam ritmo visual irregular. Uso de `clip-path` para cortes diagonais e formas poligonais.

**Signature Elements**:
- Bordas grossas (4-8px) em cores contrastantes
- Números de secção grandes e semi-transparentes como elementos de fundo
- Linhas de conexão entre secções (como diagramas técnicos)
- Glitch text effect nos títulos principais (via CSS animation)

**Interaction Philosophy**:
Interações diretas e tácteis. Hover states com mudanças abruptas de cor e escala. Transições rápidas (100-200ms) que reforçam a sensação de interface responsiva. Scroll revela elementos com movimento lateral, não apenas vertical. Cliques produzem feedback visual imediato (pulse effect).

**Animation**:
Micro-glitches ao carregar (text flicker, color shift). Parallax discreto em backgrounds. Elementos entram com slide + fade de direções alternadas. Hover em cards: lift + shadow expansion. Transições de página com wipe diagonal.

**Typography System**:
- Display/Títulos: **Space Grotesk** (700-800) — geométrica, industrial, tech
- Corpo: **IBM Plex Mono** (400-500) — monospace académica, legível
- Destaques: **Space Grotesk** (600) em caixa alta
- Hierarquia: Contraste extremo de tamanhos (64px títulos, 16px corpo)
</text>
<probability>0.08</probability>
</response>

## Abordagem 2: Surrealismo Onírico Académico

<response>
<text>
**Design Movement**: Surrealismo Digital com influências de Arte Nouveau e Vaporwave académico

**Core Principles**:
- Fluidez orgânica: formas curvas, transições suaves, ausência de ângulos retos
- Camadas de profundidade: elementos flutuantes, sobreposições translúcidas
- Ambiguidade espacial: não é claro onde começa uma secção e termina outra
- Estética liminar: entre o real e o imaginado, o científico e o místico

**Color Philosophy**:
Base em azul petróleo profundo (oklch(0.25 0.08 230)) transitando para roxo ametista (oklch(0.35 0.12 290)). Gradientes suaves e multi-direcionais criam atmosfera onírica. Destaques em ciano aquático (oklch(0.78 0.12 200)) e coral suave (oklch(0.72 0.15 25)). A paleta evoca profundezas oceânicas e espaços cósmicos, sugerindo exploração de territórios desconhecidos.

**Layout Paradigm**:
Layout fluido não-linear — secções conectadas por "portais" circulares ou elípticos. Navegação como mapa estelar: pontos interconectados que revelam conteúdo ao hover. Conteúdo principal em "ilhas" flutuantes com margens irregulares. Uso extensivo de `border-radius` variável (30-60%) e `backdrop-filter: blur()`.

**Signature Elements**:
- Formas blob orgânicas como containers de conteúdo
- Gradientes radiais e cónicos em backgrounds
- Partículas flutuantes animadas (via CSS ou canvas)
- Bordas com gradiente animado (rotating border gradient)
- Ícones customizados com estética retrofuturista

**Interaction Philosophy**:
Interações fluidas e contemplativas. Hover states com morphing suave de formas. Transições longas (400-600ms) com easing personalizado (cubic-bezier). Scroll ativa parallax multi-camada criando sensação de profundidade. Elementos respondem ao cursor com magnetic effect subtil.

**Animation**:
Entrada com fade + scale + blur (elementos "materializam"). Backgrounds com movimento perpétuo lento (gradient animation, particle drift). Hover em links: underline wave animation. Secções revelam com curtain effect (clip-path animation). Transições de página com liquid morph.

**Typography System**:
- Display/Títulos: **Playfair Display** (700-900) — serif elegante, dramática
- Corpo: **Inter** (400-500) — sans-serif neutra, alta legibilidade
- Destaques: **Cormorant Garamond** (600 italic) — serif clássica para citações
- Hierarquia: Tamanhos progressivos (56px → 40px → 24px → 16px) com line-height generoso (1.6-1.8)
</text>
<probability>0.09</probability>
</response>

## Abordagem 3: Minimalismo Especulativo Cinematográfico

<response>
<text>
**Design Movement**: Minimalismo Suíço encontra Sci-Fi Cinema — influências de Blade Runner, Arrival, e design editorial contemporâneo

**Core Principles**:
- Economia visual radical: cada elemento tem propósito claro
- Tipografia como protagonista: texto grande, espaçamento generoso
- Contraste tonal subtil: variações de cinza e azul com acentos precisos
- Ritmo cinematográfico: secções como "cenas", transições como "cortes"

**Color Philosophy**:
Base em azul-cinza escuro (oklch(0.22 0.03 250)) com variações tonais mínimas. Texto em cinza-pérola (oklch(0.85 0.01 250)). Acentos em âmbar quente (oklch(0.68 0.16 75)) usado exclusivamente para CTAs e elementos interativos. Ciano gelo (oklch(0.80 0.08 210)) para highlights de texto. A paleta evoca noites urbanas futuristas e interfaces de naves espaciais — fria, contemplativa, precisa.

**Layout Paradigm**:
Grid modular rigoroso — sistema de 12 colunas com gutter largo (32px). Secções full-width alternadas com secções contidas (max-width: 1200px). Navegação horizontal fixa no topo, minimalista. Conteúdo organizado em blocos retangulares perfeitos. Uso estratégico de whitespace (padding vertical de 120-200px entre secções).

**Signature Elements**:
- Linhas horizontais finas (1px) como separadores de secção
- Números de secção em fonte display extra-large (120px+) com opacity baixa
- Citações em blocos destacados com borda lateral grossa (4px âmbar)
- Imagens em aspect ratio cinematográfico (21:9) com overlay gradient
- Ícones geométricos minimalistas (círculos, quadrados, triângulos)

**Interaction Philosophy**:
Interações precisas e intencionais. Hover states com mudanças subtis (opacity, underline, color shift). Transições médias (250-350ms) com easing natural. Scroll revela elementos com fade-up simples. Foco em legibilidade e clareza — nada distrai do conteúdo.

**Animation**:
Entrada com fade-up staggered (elementos aparecem sequencialmente com 100ms delay). Backgrounds estáticos ou com movimento imperceptível (slow gradient shift). Hover em cards: subtle lift (4px) + shadow. Transições de página com fade cross-dissolve. Parallax mínimo apenas em hero section.

**Typography System**:
- Display/Títulos: **Archivo** (600-700) — sans-serif geométrica, moderna
- Corpo: **Crimson Pro** (400-500) — serif contemporânea, excelente legibilidade
- Destaques: **Archivo** (500) em caixa alta com letter-spacing aumentado
- Hierarquia: Escala modular (1.25 ratio) — 16px base → 20px → 25px → 31px → 39px → 49px
- Line-height: 1.7 para corpo, 1.2 para títulos
</text>
<probability>0.07</probability>
</response>

---

## Decisão Final

**Abordagem escolhida: Surrealismo Onírico Académico**

Esta abordagem melhor captura a essência do congresso — navegação entre realidades, exploração de territórios especulativos, e a dimensão poética da ficção especulativa. A estética fluida e liminar reflete os temas de horror, weird fiction, e futuros imaginados. A profundidade visual e as camadas translúcidas evocam a complexidade teórica e interdisciplinar do evento.
