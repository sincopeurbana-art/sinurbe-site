# sinurbe-site

Site institucional da **SINURBE** — promoção imobiliária premium em Lisboa.

Stack: **Astro 4** · estático · deploy em **Cloudflare Pages**.

---

## Como correr localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Build de produção

```bash
npm run build
npm run preview   # vê o build localmente em http://localhost:4321
```

A pasta `dist/` é o que vai para o Cloudflare Pages.

---

## Configuração — `.env`

Copia o `.env.example` para `.env` e preenche:

```bash
PUBLIC_WEB3FORMS_KEY=...
NOTION_TOKEN=...
```

**Web3Forms** (formulário de contacto sem backend):
1. Cria conta grátis em [web3forms.com](https://web3forms.com)
2. Recebes uma `access_key` por email — copia para `PUBLIC_WEB3FORMS_KEY`.
3. Os formulários enviam emails para `comercial@sinurbe.pt`.

**Notion** (sessão 3 — opcional, para edição de empreendimentos):
1. Cria integration em [notion.so/profile/integrations](https://www.notion.so/profile/integrations)
2. Partilha a database `📁 Projetos do Site` com a integration
3. Cola o token em `NOTION_TOKEN`.

---

## Estrutura

```
src/
  components/        # Components reutilizáveis
    Nav.astro
    Footer.astro
    HeroFullscreen.astro       # Hero com 3 fotos a alternar
    EmpreendimentoCard.astro   # Card de empreendimento (com mini-slideshow)
    CaracteristicasIcons.astro # Grid de ícones de features
    ContactCard.astro          # Form lateral nas páginas de empreendimento
    Gallery.astro              # Galeria com lightbox
    WhatsappButton.astro       # Botão WhatsApp pré-preenchido
    SocialLinks.astro          # Redes sociais (dark/light)
    Pilares.astro              # 3 pilares ATENDIMENTO/QUALIDADE/CONFIANÇA
    CtaBlock.astro             # Banner CTA telha
  layouts/
    Base.astro                 # SEO + fonts + schema.org JSON-LD
  data/
    empreendimentos.ts         # 6 empreendimentos (estático; migra para Notion na fase 2)
  pages/
    index.astro                # /
    marca.astro                # /marca
    contacto.astro             # /contacto
    empreendimentos/
      index.astro              # /empreendimentos
      [slug].astro             # /empreendimentos/pateo-gastao, etc.
  styles/
    tokens.css                 # Cores, fontes, helpers
public/
  fotos/                       # Fotos dos empreendimentos
  logos/                       # Logos dos Páteos (SVG sem fundo)
```

---

## Deploy — Cloudflare Pages

1. **Cria repositório no GitHub** com este projeto.
2. Vai a **Cloudflare Pages** → "Create application" → "Connect to Git" → escolhe o repo.
3. Configurações de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20
4. **Environment variables:**
   - `PUBLIC_WEB3FORMS_KEY` = (a tua chave)
   - `NOTION_TOKEN` = (opcional)
   - `NOTION_DATABASE_ID` = `a339f53b-978b-4fc9-8c38-bb11c0b80870`
5. **Custom domain:** adiciona `sinurbe.pt` em Cloudflare Pages → Custom domains
6. **DNS:** no PTisp, aponta `sinurbe.pt` para os nameservers do Cloudflare
7. **Redirect `sinurbe.com` → `sinurbe.pt`:** no PTisp, configura um forward 301

---

## Conteúdo

- **6 empreendimentos** (todos fictícios exceto Páteo Gastão / Beato)
- **102 fotos** distribuídas por `public/fotos/pateo-*/`
- **43 logos** em `public/logos/` (master, símbolo, mono branco, horizontal — todos disponíveis também em versão `-nobg.svg` sem fundo)

---

## Próximas sessões (TODO)

- [ ] Integrar Notion CMS para os empreendimentos (substituir `src/data/empreendimentos.ts`)
- [ ] Otimizar imagens (gerar WebP automaticamente com `astro:assets`)
- [ ] Adicionar seletor de idioma PT/EN (i18n)
- [ ] Deploy final em Cloudflare Pages + DNS
- [ ] Configurar redirect sinurbe.com → sinurbe.pt

---

**Versão atual:** Sessão 2 concluída (2026-05-29) · estrutura completa + 6 páginas de empreendimentos + Marca + Contacto.
