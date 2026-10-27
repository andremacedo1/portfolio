import { ArcadeParticipant } from '../types/portfolio';

export interface ServiceCardData {
  id: string;
  name: string;
  status: string;
  latency: string;
  icon: string;
  isBug: boolean;
  bugLabel?: string;
}

const HEALTHY_SERVICES = [
  { name: 'Mercado Livre API', latency: '42ms', icon: '🛒' },
  { name: 'Amazon Ads Sync', latency: '68ms', icon: '📦' },
  { name: 'Shopee Webhook', latency: '35ms', icon: '⚡' },
  { name: 'Magalu Orders', latency: '54ms', icon: '🛍️' },
  { name: 'Stripe Gateway', latency: '110ms', icon: '💳' },
  { name: 'Pix Central Bacen', latency: '28ms', icon: '🪙' },
  { name: 'ERP Stock Worker', latency: '75ms', icon: '📊' },
  { name: 'Catalog Sync Microservice', latency: '82ms', icon: '🏷️' },
  { name: 'Pano-QA Guard Agent', latency: '19ms', icon: '🤖' },
  { name: 'Fiscal Invoice Worker', latency: '95ms', icon: '📄' },
  { name: 'Logistics SLA Tracker', latency: '48ms', icon: '🚚' },
  { name: 'Fraud Shield AI', latency: '62ms', icon: '🛡️' },
];

const BUG_TYPES = [
  { label: '500 Internal Server Error (NullPointer)', status: '500 ERROR', latency: '4200ms' },
  { label: 'Cart Price Desync (Race Condition R$ 0,00)', status: 'DATA LEAK', latency: '1850ms' },
  { label: 'API Gateway Timeout (504 Drop)', status: '504 TIMEOUT', latency: '12000ms' },
  { label: 'SSL Certificate Expired on Webhook', status: 'SSL ERROR', latency: 'FAIL' },
  { label: '401 Unauthorized (Stale OAuth Bearer)', status: '401 UNAUTH', latency: '950ms' },
  { label: 'Duplicate Stock Subtraction Bug', status: 'CORRUPTED', latency: '2100ms' },
  { label: 'Payload Overflow (Buffer Memory Leak)', status: 'MEMORY OOM', latency: '8900ms' },
];

/**
 * Generates an interactive wave of microservices for the Bug Hunter arcade.
 * Cards scale from 4 cards (level 1-2) up to 8 cards (level 5+).
 */
export function generateBugHunterWave(level: number): {
  services: ServiceCardData[];
  bugIndex: number;
  totalCards: number;
} {
  const totalCards = level <= 2 ? 4 : level <= 4 ? 6 : 8;
  const bugIndex = Math.floor(Math.random() * totalCards);
  const bugType = BUG_TYPES[Math.floor(Math.random() * BUG_TYPES.length)];

  // Shuffle sample healthy services
  const shuffledHealthy = [...HEALTHY_SERVICES]
    .sort(() => 0.5 - Math.random())
    .slice(0, totalCards);

  const services: ServiceCardData[] = [];

  for (let i = 0; i < totalCards; i++) {
    const isThisBug = i === bugIndex;
    const base = shuffledHealthy[i] || HEALTHY_SERVICES[i % HEALTHY_SERVICES.length];

    if (isThisBug) {
      services.push({
        id: `svc-bug-${level}-${i}`,
        name: base.name,
        status: bugType.status,
        latency: bugType.latency,
        icon: '⚠️',
        isBug: true,
        bugLabel: bugType.label,
      });
    } else {
      services.push({
        id: `svc-ok-${level}-${i}`,
        name: base.name,
        status: '200 OK',
        latency: base.latency,
        icon: base.icon,
        isBug: false,
      });
    }
  }

  return {
    services,
    bugIndex,
    totalCards,
  };
}

/**
 * Calculates score and revenue protected when a bug is intercepted in production
 */
export function calculateBugScore(currentScore: number, streak: number): {
  newScore: number;
  newStreak: number;
  revenueProtected: number;
  pointsAdded: number;
} {
  const newStreak = streak + 1;
  const pointsAdded = 10 + Math.floor(newStreak * 2.5);
  const revenueBase = 1850;
  const revenueProtected = (currentScore + pointsAdded) * revenueBase;

  return {
    newScore: currentScore + pointsAdded,
    newStreak,
    revenueProtected,
    pointsAdded,
  };
}

/**
 * Legacy/Alternative Grid Dimension calculation
 */
export function getGridDimension(level: number): number {
  if (level <= 1) return 2;
  if (level <= 4) return 3;
  if (level <= 8) return 4;
  if (level <= 14) return 5;
  if (level <= 22) return 6;
  return 7;
}

/**
 * Generates an HSL base color and a subtle anomaly color
 */
export function generateColorLevel(level: number, seedHue?: number): {
  baseColor: string;
  anomalyColor: string;
  anomalyIndex: number;
  gridDim: number;
  totalTiles: number;
} {
  const gridDim = getGridDimension(level);
  const totalTiles = gridDim * gridDim;
  const anomalyIndex = Math.floor(Math.random() * totalTiles);

  const hue = seedHue !== undefined ? seedHue % 360 : Math.floor(Math.random() * 360);
  const saturation = 55 + Math.floor(Math.random() * 25);
  const lightness = 45 + Math.floor(Math.random() * 20);

  const delta = Math.max(3.5, 20 - level * 0.7);
  const sign = Math.random() > 0.5 ? 1 : -1;
  const anomalyLightness = Math.min(92, Math.max(12, lightness + sign * delta));

  const baseColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const anomalyColor = `hsl(${hue}, ${saturation}%, ${anomalyLightness.toFixed(1)}%)`;

  return {
    baseColor,
    anomalyColor,
    anomalyIndex,
    gridDim,
    totalTiles,
  };
}

/**
 * Calculates bonus score based on speed and current streak
 */
export function calculateNextScore(currentScore: number, streak: number): {
  newScore: number;
  newStreak: number;
  pointsAdded: number;
} {
  const newStreak = streak + 1;
  const pointsAdded = 1 + Math.floor(newStreak / 5);
  return {
    newScore: currentScore + pointsAdded,
    newStreak,
    pointsAdded,
  };
}

/**
 * Pure function to insert a score and keep top ranking sorted descending
 */
export function sortAndLimitLeaderboard(
  list: ArcadeParticipant[],
  newEntry?: ArcadeParticipant,
  maxItems: number = 20
): ArcadeParticipant[] {
  const merged = newEntry ? [...list, newEntry] : [...list];
  return merged
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, maxItems);
}
