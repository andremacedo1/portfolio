import { describe, expect, it } from 'vitest';
import {
  GAME_MODES,
  pickRandomMode,
  generateColorRound,
  generateDashRound,
  generatePassFailRound,
  generateSquashRound,
  generateRound,
} from './gameModes';

describe('pickRandomMode', () => {
  it('retorna sempre uma das 4 provas', () => {
    for (let i = 0; i < 200; i++) {
      expect(GAME_MODES).toContain(pickRandomMode());
    }
  });

  it('nunca repete a prova atual', () => {
    for (let i = 0; i < 200; i++) {
      for (const current of GAME_MODES) {
        expect(pickRandomMode(current)).not.toBe(current);
      }
    }
  });
});

describe('generateColorRound', () => {
  it('traz a resposta dentro da grade', () => {
    const round = generateColorRound(3);
    expect(round.mode).toBe('color');
    expect(round.payload.anomalyIndex).toBeGreaterThanOrEqual(0);
    expect(round.payload.anomalyIndex).toBeLessThan(round.payload.totalTiles);
    expect(round.payload.baseColor).not.toBe(round.payload.anomalyColor);
  });
});

describe('generateDashRound', () => {
  it('esconde o alerta do card com defeito', () => {
    const round = generateDashRound(3);
    expect(round.mode).toBe('dash');
    const bug = round.payload.services[round.payload.bugIndex];
    if (!bug) throw new Error('buggy service row missing');
    expect(bug.isBug).toBe(true);
    expect(bug.icon).not.toBe('⚠️');
    expect(round.payload.services.filter((s: any) => s.isBug)).toHaveLength(1);
  });
});

describe('generatePassFailRound', () => {
  it('devolve o veredicto do cenário sorteado', () => {
    const cases: { text: string; verdict: 'pass' | 'fail' }[] = [
      { text: 'a', verdict: 'pass' },
      { text: 'b', verdict: 'fail' },
    ];
    const round = generatePassFailRound(cases);
    const chosen = cases[round.payload.caseIndex];
    if (!chosen) throw new Error('case index out of range');
    expect(round.payload.verdict).toBe(chosen.verdict);
    expect(['pass', 'fail']).toContain(round.payload.verdict);
  });
});

describe('generateSquashRound', () => {
  it('marca uma linha existente como resposta', () => {
    for (let i = 0; i < 50; i++) {
      const round = generateSquashRound();
      expect(round.payload.lines.length).toBeGreaterThanOrEqual(3);
      expect(round.payload.bugLine).toBeGreaterThanOrEqual(0);
      expect(round.payload.bugLine).toBeLessThan(round.payload.lines.length);
    }
  });
});

describe('generateRound', () => {
  it('gera cada uma das 4 provas', () => {
    const cases = [{ text: 'a', verdict: 'pass' as const }];
    expect(generateRound('color', 2, cases).mode).toBe('color');
    expect(generateRound('dash', 2, cases).mode).toBe('dash');
    expect(generateRound('passfail', 2, cases).mode).toBe('passfail');
    expect(generateRound('squash', 2, cases).mode).toBe('squash');
  });
});
