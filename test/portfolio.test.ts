import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { translations } from '../src/i18n/translations.ts';
import { DEFAULT_PERSONAL_ARCHIVE } from '../src/data/defaultProfile.ts';

describe('Portfolio Integrity & Specifications', () => {
  test('Translations must have zero occurrences of leadership / liderança / liderazgo', () => {
    const rawJson = JSON.stringify(translations).toLowerCase();
    const bannedWords = ['liderança', 'lideranca', 'leadership', 'liderazgo', 'liderar'];
    for (const word of bannedWords) {
      assert.strictEqual(
        rawJson.includes(word),
        false,
        `Found banned word "${word}" in translations!`
      );
    }
  });

  test('Translations symmetry between pt, en, and es', () => {
    const ptKeys = Object.keys(translations.pt);
    const enKeys = Object.keys(translations.en);
    const esKeys = Object.keys(translations.es);

    assert.deepStrictEqual(ptKeys, enKeys, 'PT and EN top keys must match');
    assert.deepStrictEqual(ptKeys, esKeys, 'PT and ES top keys must match');

    const ptPersonalKeys = Object.keys(translations.pt.personal).sort();
    const enPersonalKeys = Object.keys(translations.en.personal).sort();
    const esPersonalKeys = Object.keys(translations.es.personal).sort();

    assert.deepStrictEqual(ptPersonalKeys, enPersonalKeys, 'Personal keys match between PT and EN');
    assert.deepStrictEqual(ptPersonalKeys, esPersonalKeys, 'Personal keys match between PT and ES');

    // Verify study fields exist
    assert.ok(translations.pt.personal.studyTitle);
    assert.ok(translations.en.personal.studyTitle);
    assert.ok(translations.es.personal.studyTitle);
  });

  test('Personal Archive contains required personal details', () => {
    // 1. Dog Apolo, 15 years old, Pinscher & Pekingese mix
    const apolo = DEFAULT_PERSONAL_ARCHIVE.find((i) => i.id === 'pet');
    assert.ok(apolo, 'Pet item must exist');
    assert.match(apolo.title, /Apolo/i);
    assert.match(apolo.description, /15 aninhos/i);
    assert.match(apolo.meta, /Pinscher.*Pequinês/i);

    // 2. Flávia (17 years) and daughters Manuela & Helena (a base de tudo)
    const family = DEFAULT_PERSONAL_ARCHIVE.find((i) => i.id === 'coop');
    assert.ok(family, 'Family/Partner item must exist');
    assert.match(family.title, /Flávia.*Manuela.*Helena/i);
    assert.match(family.description, /17 anos/i);
    assert.match(family.details || '', /base de tudo/i);

    // 3. Optimized Home Office Setup
    const setup = DEFAULT_PERSONAL_ARCHIVE.find((i) => i.id === 'setup');
    assert.ok(setup, 'Home office setup item must exist');
    assert.match(setup.title, /Home Office Otimizado/i);
    assert.match(setup.details || '', /ultrawide/i);

    // 4. Studies & Continuous Knowledge Updating
    const study = DEFAULT_PERSONAL_ARCHIVE.find((i) => i.id === 'study');
    assert.ok(study, 'Study item must exist');
    assert.match(study.title, /Estudos & Atualização de Conhecimento/i);
    assert.match(study.details || '', /Playwright.*Cypress/i);
  });

  test('Name display must be strictly "André Macedo"', () => {
    assert.strictEqual(translations.pt.hero.name, 'André Macedo');
    assert.strictEqual(translations.en.hero.name, 'André Macedo');
    assert.strictEqual(translations.es.hero.name, 'André Macedo');
  });

  test('Zero occurrences of "Bludata" across codebase & data', () => {
    const rawJson = JSON.stringify(translations).toLowerCase();
    assert.strictEqual(rawJson.includes('bludata'), false, 'Found "Bludata" in translations!');
  });

  test('Zero occurrences of "Proteção de Receita" / "Revenue Protection" / "Protección de Ingresos"', () => {
    const rawJson = JSON.stringify(translations).toLowerCase();
    assert.strictEqual(rawJson.includes('proteção de receita'), false, 'Found "proteção de receita" in translations!');
    assert.strictEqual(rawJson.includes('revenue protection'), false, 'Found "revenue protection" in translations!');
    assert.strictEqual(rawJson.includes('protección de ingresos'), false, 'Found "protección de ingresos" in translations!');
  });

  test('Work history contains Panorama Sistemas, Magazord, Soeltech, PROAÇO', () => {
    const ptExp = translations.pt.experience.experiences;
    assert.strictEqual(ptExp.length, 4);
    assert.strictEqual(ptExp[0].company, 'Panorama Sistemas');
    assert.strictEqual(ptExp[1].company, 'Magazord Tecnologia');
    assert.strictEqual(ptExp[2].company, 'Soeltech');
    assert.strictEqual(ptExp[3].company, 'PROAÇO');
  });
});

