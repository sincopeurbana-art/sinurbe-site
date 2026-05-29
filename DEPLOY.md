# Deploy do site SINURBE — passo a passo

Vamos pôr `sinurbe.pt` online no Cloudflare Pages.

---

## Pré-requisitos

- [ ] Conta no GitHub (cria em [github.com](https://github.com) se não tiveres — gratuita)
- [ ] Conta no Cloudflare (cria em [cloudflare.com](https://cloudflare.com) — gratuita)
- [ ] Acesso ao painel do PTisp para configurar DNS

---

## Passo 1 — Subir o código para o GitHub

No terminal, dentro da pasta `sinurbe-site`:

```bash
# Se ainda não inicializaste o repo Git
git init
git branch -M main

# Adiciona todos os ficheiros
git add .
git commit -m "Site SINURBE v2 — versão para deploy"
```

Cria um repositório novo no GitHub (privado se preferires) em [github.com/new](https://github.com/new). Chama-lhe `sinurbe-site`. Depois cola no terminal:

```bash
git remote add origin https://github.com/<TEU-USERNAME>/sinurbe-site.git
git push -u origin main
```

✅ **Verifica:** O repositório aparece no GitHub com todos os ficheiros.

---

## Passo 2 — Conectar Cloudflare Pages ao GitHub

1. Vai a [dash.cloudflare.com](https://dash.cloudflare.com)
2. No menu lateral: **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Liga a tua conta GitHub e escolhe o repo `sinurbe-site`
4. Na página de configuração de build:

| Campo | Valor |
|---|---|
| Project name | `sinurbe-site` |
| Production branch | `main` |
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (vazio) |
| Node version | `20` |

5. Em **Environment variables** adiciona:

| Variável | Valor | Notas |
|---|---|---|
| `PUBLIC_WEB3FORMS_KEY` | (a tua chave do web3forms.com) | obrigatório p/ formulários |
| `NOTION_TOKEN` | (vazio por agora) | opcional — adicionar quando criares a integration |
| `NOTION_DATABASE_ID` | `a339f53b-978b-4fc9-8c38-bb11c0b80870` | já pré-configurado |

6. Clica **Save and Deploy**. O primeiro build demora ~2-3 minutos.

✅ **Verifica:** O site fica disponível em `https://sinurbe-site.pages.dev` (URL temporário do Cloudflare).

---

## Passo 3 — Custom domain (sinurbe.pt)

Ainda no Cloudflare Pages → o teu projeto → **Custom domains**:

1. Clica **Set up a custom domain**
2. Escreve `sinurbe.pt`
3. Cloudflare vai pedir-te para alterar os **nameservers** do domínio no PTisp para os deles. Anota os 2 nameservers que ele mostra (algo como `ns1.cloudflare.com` e `ns2.cloudflare.com`).

### No painel do PTisp:

1. Login em [ptisp.pt](https://ptisp.pt)
2. **Os meus domínios** → `sinurbe.pt` → **Gestão DNS** ou **Nameservers**
3. Substitui os nameservers atuais pelos do Cloudflare
4. Guarda alterações

⏱️ Propagação DNS: pode demorar **15 min a 24h**. Geralmente em 30 min está ativo.

✅ **Verifica:** `https://sinurbe.pt` mostra o site. Vai aparecer um cadeado verde — Cloudflare ativa SSL automaticamente.

---

## Passo 4 — Redirect sinurbe.com → sinurbe.pt

No painel do PTisp:

1. **Os meus domínios** → `sinurbe.com` → **Encaminhamento web** (ou "URL Forwarding")
2. Destino: `https://sinurbe.pt`
3. Tipo: **301 (permanente)**
4. **Encaminhar tudo** (manter path se quiseres)
5. Guarda

✅ **Verifica:** Visitas `https://sinurbe.com` no browser e és redirecionado para `https://sinurbe.pt`.

---

## Passo 5 — Formulários: Web3Forms

Sem isto, os formulários de contacto enviam mas não chegam a lado nenhum.

1. Vai a [web3forms.com](https://web3forms.com)
2. Mete `comercial@sinurbe.pt` e recebes uma `access_key` por email
3. No Cloudflare Pages → Settings → Environment variables → adiciona/edita `PUBLIC_WEB3FORMS_KEY` com essa chave
4. Em Cloudflare Pages, clica **Retry deployment** para fazer rebuild com a nova variável

✅ **Verifica:** Submete o form de contacto no site e confirma que recebes email em `comercial@sinurbe.pt`.

---

## Workflow de updates futuros

A partir daqui, **qualquer mudança no site** segue este fluxo:

```bash
# 1. Edita ficheiros localmente
npm run dev   # vê em http://localhost:4321

# 2. Quando estiver pronto, commit + push
git add .
git commit -m "Atualizar texto da home"
git push

# 3. Cloudflare detecta o push e faz redeploy automaticamente (~2 min)
```

---

## Passo 6 — (Opcional) Notion CMS para edição de conteúdo

Quando quiseres editar empreendimentos sem mexer em código:

1. Cria uma integration em [notion.so/profile/integrations](https://www.notion.so/profile/integrations) → **New integration** → tipo "Internal"
2. Copia o **Internal Integration Secret**
3. Abre a DB "📁 Projetos do Site" no Notion → "..." → **Connections** → adiciona a integration
4. No Cloudflare Pages → Environment variables → mete o secret em `NOTION_TOKEN`
5. Redeploy

A DB precisa de ter estas colunas (caso ainda não tenha):
- `Slug` (text)
- `Nome` (title)
- `Localização` (text)
- `Estado` (select: "Em construção", "Lançamento 2027", "À venda", "Concluído")
- `Preço` (text, opcional)
- `Cor primária` (text, ex: "#6B1F2E")
- `Meta` (text)
- `Tagline` (text)
- `Descrição` (text longo)
- `Pasta fotos` (text, ex: "pateo-gastao")
- `CTA` (text)
- `Real` (checkbox)
- `Ativo` (checkbox)
- `Ordem` (number)

A partir daqui, **mudar dados no Notion → push trivial no GitHub para forçar rebuild → site atualiza**. Eventualmente podemos configurar um webhook Notion → Cloudflare para rebuild automático em cada edição.

---

## Troubleshooting

### Build falha no Cloudflare com "rollup-linux-x64-gnu"
Cloudflare usa Linux, mas o `package-lock.json` pode ter ficado com binários macOS. Solução: força reinstalar.

```bash
rm -rf node_modules package-lock.json
npm install
git add .
git commit -m "Regenerate package-lock.json"
git push
```

### Imagens não aparecem
Verificar se os nomes dos ficheiros são **só ASCII** (sem acentos, sem espaços). Já está tudo limpo, mas se adicionares novas fotos, usa o padrão `nome-da-foto.png`.

### SSL não funciona
Espera ~30 min após apontar nameservers. Cloudflare emite certificado automático.

---

**Última atualização:** 2026-05-29 · Sessão 3 do projeto.
