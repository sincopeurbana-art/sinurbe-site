# Imagens dos empreendimentos

Local onde colocas as fotos de cada empreendimento. Tudo o que estiver aqui fica acessível no site em `https://sinurbe.pt/empreendimentos/[slug]/[ficheiro]`.

## Como funciona

1. Cada empreendimento tem **uma pasta com o slug** (ex: `edificio-chiado/`)
2. Dentro, colocas as fotos com nomes simples
3. O site carrega-as automaticamente — não precisas de editar código

## Nomes obrigatórios

| Ficheiro            | Para quê                                    | Mínimo                |
|---------------------|---------------------------------------------|-----------------------|
| `capa.jpg`          | Cards na home + hero da página individual   | 1600×1200 (4:3)       |
| `galeria-01.jpg`    | Primeira foto da galeria                    | 1600×1200             |
| `galeria-02.jpg`    | Segunda foto da galeria                     | 1600×1200             |
| `galeria-NN.jpg`    | Restantes (numeradas 01, 02, 03…)           | 1600×1200             |

## Nomes opcionais

| Ficheiro              | Para quê                                     |
|-----------------------|----------------------------------------------|
| `planta-t1.jpg`       | Planta da tipologia T1 (imagem)              |
| `planta-t2.jpg`       | Planta da tipologia T2                       |
| `brochura.pdf`        | PDF para download                            |
| `localizacao.jpg`     | Mapa ou foto do lote/rua                     |

## Boas práticas

- **Formato:** `.jpg` para fotos (mais leve), `.png` só para plantas com texto
- **Tamanho:** mínimo 1600×1200 px (4:3) — o site otimiza automaticamente
- **Compressão:** sem necessidade de comprimir, o Astro trata disso
- **Orientação:** horizontal sempre que possível (cards e hero ficam melhores)
- **Antes/depois:** podes pôr lado a lado num único `galeria-NN.jpg`

## Slugs atuais

| Slug              | Empreendimento     | Estado          |
|-------------------|--------------------|-----------------|
| `edificio-chiado` | Edifício no Chiado | Em lançamento   |
| `edificio-beato`  | Edifício no Beato  | Em construção   |

## Adicionar novo empreendimento

Criar nova subpasta com slug em kebab-case, sem acentos:
- ✅ `edificio-principe-real`
- ✅ `palacete-estrela`
- ❌ `Edifício Príncipe Real` (com espaços, acentos, maiúsculas)

E avisar-me para eu adicionar a entrada no site.

---

*Convenções definidas em 2026-05-27. Se mudarem, atualizar este ficheiro.*
