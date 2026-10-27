// @ts-nocheck -- ported as-is; original project used looser TS settings
import { test } from 'vitest';
import assert from 'node:assert/strict';
import {
  getGridDimension,
  generateColorLevel,
  calculateNextScore,
  sortAndLimitLeaderboard,
  generateBugHunterWave,
  calculateBugScore,
} from './gameRules';

test('generateBugHunterWave generates valid services and marks exactly one critical bug', () => {
  const wave1 = generateBugHunterWave(1);
  assert.equal(wave1.totalCards, 4);
  assert.equal(wave1.services.length, 4);
  assert.ok(wave1.bugIndex >= 0 && wave1.bugIndex < 4);
  assert.equal(wave1.services[wave1.bugIndex].isBug, true);

  // Check that other cards are healthy
  const healthyCount = wave1.services.filter((s) => !s.isBug).length;
  assert.equal(healthyCount, 3);

  // Higher level scales to 8 cards
  const wave5 = generateBugHunterWave(5);
  assert.equal(wave5.totalCards, 8);
  assert.equal(wave5.services.length, 8);
});

test('calculateBugScore increments score, streak and calculates revenue protected', () => {
  const res = calculateBugScore(0, 0);
  assert.ok(res.newScore > 0);
  assert.equal(res.newStreak, 1);
  assert.ok(res.revenueProtected > 0);

  const res2 = calculateBugScore(res.newScore, res.newStreak);
  assert.ok(res2.newScore > res.newScore);
  assert.equal(res2.newStreak, 2);
  assert.ok(res2.revenueProtected > res.revenueProtected);
});

test('getGridDimension scales progressively with level', () => {
  assert.equal(getGridDimension(1), 2);
  assert.equal(getGridDimension(2), 3);
  assert.equal(getGridDimension(4), 3);
  assert.equal(getGridDimension(5), 4);
  assert.equal(getGridDimension(9), 5);
  assert.equal(getGridDimension(15), 6);
  assert.equal(getGridDimension(30), 7);
});

test('generateColorLevel creates distinct colors and valid anomaly index within bounds', () => {
  const levelData = generateColorLevel(5, 120);
  assert.equal(levelData.gridDim, 4);
  assert.equal(levelData.totalTiles, 16);
  assert.ok(levelData.anomalyIndex >= 0 && levelData.anomalyIndex < 16);
  assert.notEqual(levelData.baseColor, levelData.anomalyColor);
  assert.ok(levelData.baseColor.startsWith('hsl('));
  assert.ok(levelData.anomalyColor.startsWith('hsl('));
});

test('calculateNextScore adds score and streak multipliers', () => {
  const r1 = calculateNextScore(0, 0);
  assert.equal(r1.newScore, 1);
  assert.equal(r1.newStreak, 1);

  const r2 = calculateNextScore(10, 4);
  assert.equal(r2.newScore, 12);
  assert.equal(r2.newStreak, 5);
});

test('sortAndLimitLeaderboard keeps ranking strictly descending and respects limits', () => {
  const initial = [
    { id: '1', name: 'Alice', avatar: '🦊', score: 25, date: '2026-01-01' },
    { id: '2', name: 'Bob', avatar: '🐼', score: 40, date: '2026-01-02' },
  ];

  const sorted = sortAndLimitLeaderboard(initial, {
    id: '3',
    name: 'Charlie',
    avatar: '🦁',
    score: 35,
    date: '2026-01-03',
  });

  assert.equal(sorted.length, 3);
  assert.equal(sorted[0].name, 'Bob');
  assert.equal(sorted[1].name, 'Charlie');
  assert.equal(sorted[2].name, 'Alice');
});
