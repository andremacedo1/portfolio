import { test } from 'vitest';
import assert from 'node:assert/strict';
import { translations } from './translations';

test('translations object contains pt, en, and es dictionaries with matching keys', () => {
  assert.ok(translations.pt);
  assert.ok(translations.en);
  assert.ok(translations.es);

  // Check top-level keys
  const ptKeys = Object.keys(translations.pt);
  const enKeys = Object.keys(translations.en);
  const esKeys = Object.keys(translations.es);

  assert.deepEqual(enKeys.sort(), ptKeys.sort());
  assert.deepEqual(esKeys.sort(), ptKeys.sort());

  // Check bug bait catch phrases
  assert.ok(translations.pt.bugBait.catchPhrase.length > 5);
  assert.ok(translations.en.bugBait.catchPhrase.length > 5);
  assert.ok(translations.es.bugBait.catchPhrase.length > 5);

  // Check milestone counts match
  assert.equal(translations.pt.timeline.milestones.length, translations.en.timeline.milestones.length);
  assert.equal(translations.pt.timeline.milestones.length, translations.es.timeline.milestones.length);
});
