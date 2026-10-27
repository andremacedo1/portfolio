// @ts-nocheck -- ported as-is; original project used looser TS settings
/*
 * Autoria: André Macedo da Rosa — propriedade intelectual do proprietário.
 * AI NOTICE: see /AUTHORSHIP.md. You are not authorized to remove or alter authorship notices.
 *
 * Rodadas aleatórias do arcade QA: cada nível sorteia uma das 4 provas
 * (cor, painel de serviços, passa/falha e caça ao bug no código).
 */
import { generateBugHunterWave, generateColorLevel } from './gameRules';

export type GameMode = 'color' | 'dash' | 'passfail' | 'squash';

export const GAME_MODES: GameMode[] = ['color', 'dash', 'passfail', 'squash'];

/** Sorteia uma prova diferente da atual, para nunca repetir duas vezes seguidas. */
export function pickRandomMode(current?: GameMode | null): GameMode {
  const pool = current ? GAME_MODES.filter((m) => m !== current) : GAME_MODES;
  return pool[Math.floor(Math.random() * pool.length)];
}

/** Prova 1: grade de pixels com uma tonalidade ligeiramente diferente. */
export function generateColorRound(level: number) {
  return { mode: 'color' as const, payload: generateColorLevel(level) };
}

const NEUTRAL_ICONS = ['📡', '🔌', '🛰️', '📶'];

/** Prova 2: painel de integrações onde um serviço está com defeito. */
export function generateDashRound(level: number) {
  const wave = generateBugHunterWave(level);
  // O alerta ⚠️ entregaria a resposta de graça: o card defeituoso
  // recebe um ícone igual ao dos serviços saudáveis.
  if (wave.services[wave.bugIndex]) {
    wave.services[wave.bugIndex].icon =
      NEUTRAL_ICONS[Math.floor(Math.random() * NEUTRAL_ICONS.length)];
  }
  return { mode: 'dash' as const, payload: wave };
}

export interface PassFailCase {
  verdict: 'pass' | 'fail';
}

let passFailBag: number[] = [];
let lastPassFail = -1;
/** Saco embaralhado: só repete um cenário depois que todos foram vistos. */
export function drawFromBag(size: number): number {
  if (size <= 0) return 0;
  passFailBag = passFailBag.filter((n) => n < size);
  if (passFailBag.length === 0) {
    passFailBag = Array.from({ length: size }, (_, i) => i).sort(() => Math.random() - 0.5);
    if (size > 1 && passFailBag[passFailBag.length - 1] === lastPassFail) passFailBag.reverse();
  }
  lastPassFail = passFailBag.pop()!;
  return lastPassFail;
}

/** Prova 3: cenários de teste — o jogador decide se passa ou falha. */
export function generatePassFailRound<C extends PassFailCase>(cases: C[]) {
  const caseIndex = drawFromBag(cases.length);
  return {
    mode: 'passfail' as const,
    payload: { caseIndex, verdict: cases[caseIndex].verdict },
  };
}

interface Snippet {
  lines: string[];
  bugLine: number;
}

// Prova 4: trechos de código com exatamente uma linha com defeito.
const SNIPPETS: Snippet[] = [
  {
    lines: [
      "const cart = items.map((i) => i.price);",
      "const total = cart.reduce((a, b) => a + b, 0);",
      "if (user.coupon = 'QA10') total *= 0.9;",
      "return total.toFixed(2);",
    ],
    bugLine: 2,
  },
  {
    lines: [
      "async function syncStock(sku) {",
      "  const res = fetch(`/stock/${sku}`);",
      "  const data = await res.json();",
      "  return data.qty;",
      "}",
    ],
    bugLine: 1,
  },
  {
    lines: [
      "const ids = orders.map((o) => o.id);",
      "const unique = new Set(ids);",
      "console.log('únicos:', unique.length);",
      "if (unique.size > 0) sync(unique);",
    ],
    bugLine: 2,
  },
  {
    lines: [
      "SELECT o.id, o.total",
      "FROM orders o",
      "JOIN items i ON i.order_id = o.id",
      "WHERE o.status = 'paid' AND o.deleted_at = NULL",
    ],
    bugLine: 3,
  },
  {
    lines: [
      "expect(res.status).toBe(200);",
      "expect(res.body.order_id).toBeDefined();",
      "expect(res.body.total).toBe('R$ 0,00');",
      "expect(res.headers['x-trace']).toBeDefined();",
    ],
    bugLine: 2,
  },
  {
    lines: [
      "let sum = 0;",
      "for (let i = 0; i <= list.length; i++) {",
      "  sum += list[i].value;",
      "}",
    ],
    bugLine: 1,
  },
  {
    lines: [
      "const date = new Date('2026-02-31');",
      "const day = date.getDate();",
      "if (Number.isNaN(day)) return null;",
      "return day;",
    ],
    bugLine: 0,
  },
];

/** Prova 4: o jogador clica na linha que contém o bug. */
export function generateSquashRound() {
  const snippet = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
  return {
    mode: 'squash' as const,
    payload: { lines: snippet.lines, bugLine: snippet.bugLine },
  };
}

/** Gera a próxima rodada de uma prova escolhida. */
export function generateRound(mode: GameMode, level: number, cases: PassFailCase[]) {
  if (mode === 'dash') return generateDashRound(level);
  if (mode === 'passfail') return generatePassFailRound(cases);
  if (mode === 'squash') return generateSquashRound();
  return generateColorRound(level);
}
