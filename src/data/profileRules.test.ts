import { test } from 'vitest';
import assert from 'node:assert/strict';
import { translations } from '../i18n/translations';
import {
  DEFAULT_PERSONAL_ARCHIVE,
  DEFAULT_PERSONAL_INFO,
} from './defaultProfile';

/**
 * Copy rules the owner set for his own profile. Ported from the repository's
 * original test suite (test/portfolio.test.ts) so the rules keep running here.
 */
const raw = (JSON.stringify(translations) + JSON.stringify(DEFAULT_PERSONAL_ARCHIVE)).toLowerCase();

test('profile copy never claims leadership', () => {
  for (const word of ['lideranç', 'lideranc', 'leadership', 'liderazgo', 'liderar']) {
    assert.strictEqual(raw.includes(word), false, `Found "${word}" in the profile copy`);
  }
});

test('profile copy never mentions Bludata or revenue protection', () => {
  for (const word of [
    'bludata',
    'proteção de receita',
    'revenue protection',
    'protección de ingresos',
  ]) {
    assert.strictEqual(raw.includes(word), false, `Found "${word}" in the profile copy`);
  }
});

test('name is shown exactly as "André Macedo" in every language', () => {
  assert.strictEqual(translations.pt.hero.name, 'André Macedo');
  assert.strictEqual(translations.en.hero.name, 'André Macedo');
  assert.strictEqual(translations.es.hero.name, 'André Macedo');
});

test('main experience lists the four companies in order, spelled Proaço', () => {
  const pt = translations.pt.experience.experiences.map((e: { company: string }) => e.company);
  assert.deepEqual(pt, ['Panorama Sistemas', 'Magazord Tecnologia', 'Soeltech', 'Proaço']);
  assert.strictEqual(JSON.stringify(translations).includes('PROAÇO'), false);
});

test('journey covers the whole career: eight milestones in every language', () => {
  assert.strictEqual(translations.pt.timeline.milestones.length, 8);
  assert.strictEqual(translations.en.timeline.milestones.length, 8);
  assert.strictEqual(translations.es.timeline.milestones.length, 8);
});

test('personal archive keeps the personal facts the owner asked for', () => {
  const all = (i: { title?: string; description?: string; meta?: string; details?: string }) =>
    [i.title, i.description, i.meta, i.details].filter(Boolean).join(' ');

  const pet = DEFAULT_PERSONAL_ARCHIVE.find((i) => i.id === 'pet');
  assert.ok(pet, 'pet item must exist');
  assert.match(all(pet), /Apolo/i);
  assert.match(all(pet), /15 aninhos/i);
  assert.match(all(pet), /Pinscher.*Pequinês/i);

  const family = DEFAULT_PERSONAL_ARCHIVE.find((i) => i.id === 'coop');
  assert.ok(family, 'family item must exist');
  assert.match(all(family), /Flávia.*Manuela.*Helena/i);
  assert.match(all(family), /17 anos/i);
  assert.match(all(family), /base de tudo/i);

  const setup = DEFAULT_PERSONAL_ARCHIVE.find((i) => i.id === 'setup');
  assert.ok(setup, 'home office item must exist');
  assert.match(all(setup), /Home Office Otimizado/i);
  assert.match(all(setup), /ultrawide/i);

  const study = DEFAULT_PERSONAL_ARCHIVE.find((i) => i.id === 'study');
  assert.ok(study, 'study item must exist');
  assert.match(all(study), /Análise e Desenvolvimento de Sistemas/i);
  assert.match(all(study), /FASUL/i);
});

test('contact details point at the owner, with no WhatsApp button', () => {
  assert.strictEqual(DEFAULT_PERSONAL_INFO.linkedinUrl, 'https://www.linkedin.com/in/andremacedo1/');
  assert.strictEqual('whatsappUrl' in DEFAULT_PERSONAL_INFO, false);
});
