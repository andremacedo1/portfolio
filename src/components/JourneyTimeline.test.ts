import { describe, expect, it } from 'vitest';
import { vehicleFor } from './JourneyTimeline';

describe('journey vehicles (8 jobs)', () => {
  it('first job is on foot', () => expect(vehicleFor(0, 8).label).toBe('A pé'));
  it('second job is by bicycle', () => expect(vehicleFor(1, 8).label).toBe('Bicicleta'));
  it('middle jobs are by bus', () => expect([2, 3, 4].map((i) => vehicleFor(i, 8).label)).toEqual(['Ônibus', 'Ônibus', 'Ônibus']));
  it('jobs 6-7 are by car', () => expect([5, 6].map((i) => vehicleFor(i, 8).label)).toEqual(['Carro', 'Carro']));
  it('last 3 jobs are by car', () => expect([5, 6, 7].map((i) => vehicleFor(i, 8).label)).toEqual(['Carro', 'Carro', 'Carro']));
});
