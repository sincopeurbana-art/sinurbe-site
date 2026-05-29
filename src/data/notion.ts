/**
 * Cliente Notion — stub (desativado por agora).
 *
 * O Notion CMS está pronto para ativar mas o pacote @notionhq/client
 * foi removido do package.json para evitar problemas de build.
 * Quando quiseres ativar:
 *   1. npm install @notionhq/client
 *   2. Adicionar NOTION_TOKEN ao .env
 *   3. Restaurar a versão completa deste ficheiro do histórico Git
 */
import type { Empreendimento } from "./empreendimentos";

/** Devolve null (Notion desativado por agora). */
export async function getEmpreendimentosFromNotion(): Promise<Empreendimento[] | null> {
  return null;
}
