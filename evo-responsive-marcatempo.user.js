// ==UserScript==
// @name          EVO - Responsive Marcatempo Virtuale
// @namespace     https://unibo.it/
// @version       1.1
// @description   Rende responsive la pagina "Marcatempo Virtuale" su smartphone con font grandi e layout ottimizzato
// @author        Stefano
// @match         https://personale-unibo.hrgpi.it/*
// @icon          https://www.unibo.it/favicon.ico
// @grant         none
// @run-at        document-end
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Inietta il CSS responsive per la pagina Marcatempo Virtuale
     */
    function injectResponsiveCSS() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            /* Media query per dispositivi mobile */
            @media (max-width: 1024px) and (orientation: portrait),
                   (max-width: 768px) {
                
                /* Form container più largo */
                .form_interno.w-50 {
                    width: 95% !important;
                    max-width: 100% !important;
                    margin: 0 auto !important;
                }

                /* Card bianca con padding ottimizzato */
                .bg-white.p-4 {
                    padding: 1.5rem !important;
                }

                /* Testo di attenzione più grande */
                .bg-white p b {
                    font-size: 1.8rem !important;
                    line-height: 1.5 !important;
                }

                /* Tabella form responsive */
                .formTable {
                    font-size: 1.8rem !important;
                }

                .formTable td {
                    display: block !important;
                    width: 100% !important;
                    padding: 0.8rem 0 !important;
                    border: none !important;
                }

                .formTable td.desc {
                    font-weight: bold !important;
                    font-size: 1.9rem !important;
                    padding-left: 0 !important;
                    margin-bottom: 0.5rem !important;
                }

                .formTable tr {
                    display: block !important;
                    margin-bottom: 1.5rem !important;
                    border-bottom: 1px solid #ddd !important;
                    padding-bottom: 1rem !important;
                }

                /* Giorno e ora */
                #hour {
                    font-size: 2rem !important;
                    font-weight: bold !important;
                }

                /* Radio buttons molto più grandi */
                .form-check {
                    margin-bottom: 1.5rem !important;
                    padding: 0.5rem !important;
                }

                .form-check-input {
                    width: 2.5rem !important;
                    height: 2.5rem !important;
                    margin-top: 0 !important;
                    cursor: pointer !important;
                    flex-shrink: 0 !important;
                }

                .form-check-label {
                    font-size: 2rem !important;
                    margin-left: 0.8rem !important;
                    padding-left: 0.5rem !important;
                    cursor: pointer !important;
                    display: flex !important;
                    align-items: center !important;
                }

                /* Select più grandi */
                .form-select {
                    width: 100% !important;
                    max-width: 100% !important;
                    font-size: 1.7rem !important;
                    padding: 0.8rem !important;
                    margin: 0.5rem 0 !important;
                }

                /* Testo obbligatorio */
                .bg-white p {
                    font-size: 1.6rem !important;
                    line-height: 1.6 !important;
                }

                /* Bottoni enormi */
                .bottone,
                .bottone-plus,
                .bottone_indietro,
                .bottone-indietro-plus {
                    font-size: 1.9rem !important;
                    padding: 1rem 1.5rem !important;
                    margin: 0.5rem 0.5rem 0.5rem 0 !important;
                    width: auto !important;
                    min-width: 150px !important;
                    display: inline-block !important;
                }

                /* Icone nei bottoni */
                .bottone .material-symbols-outlined,
                .bottone-plus .material-symbols-outlined,
                .bottone_indietro .material-symbols-outlined,
                .bottone-indietro-plus .material-symbols-outlined {
                    font-size: 2.2rem !important;
                }

                /* Container bottoni */
                .bg-white > div:last-child {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 1rem !important;
                    margin-top: 2rem !important;
                }

                /* Fix per il layout dei radio buttons */
                .formTable td.d-flex {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                    padding-left: 0 !important;
                }

                /* Messaggi di errore */
                .errors {
                    font-size: 1.7rem !important;
                    padding: 1rem !important;
                }

                .errors .material-symbols-outlined {
                    font-size: 2rem !important;
                }

                /* Modal responsive */
                .modal-dialog {
                    margin: 1rem !important;
                    max-width: 95% !important;
                }

                .modal-title {
                    font-size: 2rem !important;
                }

                .modal-body {
                    font-size: 1.7rem !important;
                    line-height: 1.6 !important;
                }

                .modal-body p {
                    font-size: 1.7rem !important;
                }
            }

            /* Media query per schermi molto piccoli */
            @media (max-width: 480px) and (orientation: portrait),
                   (max-width: 640px) and (orientation: portrait) and (max-height: 800px) {
                
                .form_interno.w-50 {
                    width: 98% !important;
                }

                .bg-white.p-4 {
                    padding: 1rem !important;
                }

                .bg-white p b {
                    font-size: 1.6rem !important;
                }

                .formTable {
                    font-size: 1.6rem !important;
                }

                .formTable td.desc {
                    font-size: 1.7rem !important;
                }

                .form-check-input {
                    width: 2.2rem !important;
                    height: 2.2rem !important;
                }

                .form-check-label {
                    font-size: 1.8rem !important;
                }

                .form-select {
                    font-size: 1.5rem !important;
                }

                .bottone,
                .bottone-plus,
                .bottone_indietro,
                .bottone-indietro-plus {
                    font-size: 1.7rem !important;
                    padding: 0.9rem 1.3rem !important;
                }
            }

            /* Rilevamento touch screen */
            @media (hover: none) and (pointer: coarse) {
                .form_interno.w-50 {
                    width: 95% !important;
                }

                .formTable td {
                    display: block !important;
                    width: 100% !important;
                }

                .form-select {
                    width: 100% !important;
                    font-size: 1.7rem !important;
                }
            }
        `;
        document.head.appendChild(style);
        console.log("CSS responsive per Marcatempo Virtuale iniettato con successo.");
    }

    // Aspetta che il DOM sia completamente caricato
    const waitForPageLoad = setInterval(() => {
        // Verifica che siamo sulla pagina Marcatempo Virtuale
        const isMarcatempoPage = document.querySelector('form[name="OnlineClockingRequestEdit"]') !== null;
        const hasFormTable = document.querySelector('.formTable') !== null;
        
        if (isMarcatempoPage && hasFormTable) {
            clearInterval(waitForPageLoad);
            injectResponsiveCSS();
            console.log("Layout responsive attivato per Marcatempo Virtuale.");
        }
    }, 500);

    // Timeout di sicurezza dopo 10 secondi
    setTimeout(() => {
        clearInterval(waitForPageLoad);
    }, 10000);

})();
