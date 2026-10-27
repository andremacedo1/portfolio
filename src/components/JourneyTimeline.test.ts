import { describe, expect, it } from 'vitest';
import { vehicleFor } from './JourneyTimeline';
import { translations } from '../i18n/translations';

describe('journey vehicles (8 jobs)', () => {
  it('first job is on foot', () => expect(vehicleFor(0, 4).label).toBe('A pé'));
  it('second job is by bicycle', () => expect(vehicleFor(1, 4).label).toBe('Bicicleta'));
  it('jobs before Proaço are by bus', () => expect([2, 3].map((i) => vehicleFor(i, 4).label)).toEqual(['Ônibus', 'Ônibus']));
  it('Proaço and every later job use the car in all languages', () => {
    for (const dictionary of Object.values(translations)) {
      const milestones = dictionary.timeline.milestones;
      const start = milestones.findIndex((m) => m.title.includes('Proaço'));
      expect(start).toBe(4);
      expect(milestones.slice(start).map((_, i) => vehicleFor(start + i, start).label)).toEqual(['Carro', 'Carro', 'Carro', 'Carro']);
    }
  });
});
