/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// DevTools / F12 & DOM Investigative Bait System
// Installs subtle, humorous, and deeply technical honeypots in console and window

export function initDevToolsBait(onTriggerBait: (baitId: string) => void) {
  // Global event listener so any part of the page or console command can open the bait modal
  const handleCustomTrigger = (e: Event) => {
    const customEvt = e as CustomEvent<string>;
    if (customEvt.detail) {
      onTriggerBait(customEvt.detail);
    }
  };

  window.addEventListener('trigger-bug-bait', handleCustomTrigger);

  // Set up global methods accessible in browser console (F12)
  const triggerFromConsole = (baitId = 'f12-console-trap') => {
    console.log(
      '%c🎯 VOCÊ ACHOU MESMO QUE EU SOU TÃO AMADOR ASSIM? 😉',
      'color: #10b981; font-weight: 900; font-size: 16px; background: #022c22; padding: 8px 16px; border-radius: 6px; border: 2px solid #10b981;'
    );
    console.log(
      '%c[SDET REALITY]: Em produção, 100% dos fluxos críticos passam por contratos OpenAPI, testes E2E (Playwright/Cypress) e validação de schema antes de qualquer merge.',
      'color: #38bdf8; font-family: monospace; font-size: 12px; margin-top: 6px;'
    );
    console.log(
      '%c🏆 Parabéns pelo seu faro investigativo no F12! Abrindo modal com a análise técnica...',
      'color: #fbbf24; font-weight: bold; font-size: 12px;'
    );
    onTriggerBait(baitId);
    return '🎯 Pegadinha de QA concluída com sucesso! Verifique a tela!';
  };

  // Expose on window
  (window as unknown as { [key: string]: unknown }).investigarBug = () => triggerFromConsole('f12-console-trap');
  (window as unknown as { [key: string]: unknown }).reportBug = () => triggerFromConsole('f12-console-trap');
  (window as unknown as { [key: string]: unknown }).findBug = () => triggerFromConsole('f12-console-trap');

  (window as unknown as { [key: string]: unknown }).andreMacedo = {
    nome: 'André Macedo',
    cargo: 'Senior SDET / Especialista em Qualidade & Automação',
    foco: 'Panorama Sistemas, 27 Marketplaces, Contratos OpenAPI, Cypress & Playwright',
    status: 'Zero bugs não tratados em produção 🛡️',
    investigarBug: () => triggerFromConsole('f12-console-trap'),
    relatarBug: () => triggerFromConsole('f12-console-trap'),
    solveBug: () => triggerFromConsole('f12-console-trap'),
    dica: 'Existem 6 armadilhas investigativas escondidas no site e no código. Consegue achar todas?',
  };

  // Print initial banner in console
  try {
    const banner = `
    ██████╗  ███████╗████████╗   ██████╗  █████╗ 
    ██╔══██╗██╔════╝╚══██╔══╝  ██╔═══██╗██╔══██╗
    ██████╔╝█████╗     ██║     ██║   ██║███████║
    ██╔═══╝ ██╔══╝     ██║     ██║▄▄ ██║██╔══██║
    ██║     ███████╗   ██║     ╚██████╔╝██║  ██║
    `;

    console.log(
      `%c${banner}`,
      'color: #10b981; font-weight: bold; font-family: monospace; line-height: 1.1;'
    );
    console.log(
      '%c🕵️ MODO INVESTIGATIVO ATIVO // ANDRÉ MACEDO — SENIOR SDET',
      'color: #f8fafc; background: #0f172a; font-size: 13px; font-weight: bold; padding: 6px 12px; border-radius: 4px; border-left: 4px solid #10b981;'
    );
    console.log(
      '%c⚠️ [MOCK_EXCEPTION]: TypeError: Cannot read properties of undefined (reading "executeSyncQueue")\n  at PanoramaSyncWorker (/core/integrations/ali-express-sync.ts:404:12)\n  at processQueueItem (redis-consumer.ts:88:5)\n  at EventEmitter.emit (events.js:315:20)',
      'color: #ff5733; background: #260a0a; border-left: 3px solid #ff5733; padding: 4px 8px; font-weight: bold; font-family: monospace; font-size: 11px;'
    );
    console.log(
      '%c[ALERTA DE SUSPEITA DE BUG] Pensou que encontrou um erro não tratado em produção?\n👉 Digite window.investigarBug() ou window.andreMacedo.relatarBug() no console para inspecionar essa anomalia...',
      'color: #38bdf8; background: #082f49; border-left: 3px solid #38bdf8; padding: 4px 8px; font-family: monospace; font-size: 11px;'
    );
    console.log(
      '%c🔍 DICA: Existem 6 pistas falsas "pega-curioso" espalhadas na tela e no inspecionar elementos (DOM). Encontre todas!',
      'color: #a855f7; font-family: monospace; font-size: 10px; font-style: italic;'
    );
  } catch {
    // console might be restricted in some iframe sandboxes
  }

  return () => {
    window.removeEventListener('trigger-bug-bait', handleCustomTrigger);
  };
}
