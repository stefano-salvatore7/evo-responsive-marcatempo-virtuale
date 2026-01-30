# EVO - Responsive Marcatempo Virtuale

Questo script Tampermonkey/Greasemonkey è progettato per ottimizzare l'interfaccia della pagina **"Marcatempo Virtuale"** del sistema EVO (utilizzato su `https://personale-unibo.hrgpi.it/`). Lo script trasforma la pagina originale in un layout completamente **responsive**, facilitando la timbratura da smartphone grazie a elementi ingranditi e una disposizione ottimizzata per il touch.

**(Versione Script: 1.2)**

## Caratteristiche

* **Layout Mobile First:**
    * Riorganizza la tabella dei dati trasformandola in blocchi verticali leggibili su schermi stretti.
    * Espande il contenitore del form al **95-98% della larghezza** dello schermo per sfruttare tutto lo spazio disponibile.
* **Selettori Entrata/Uscita Ottimizzati:**
    * I radio button per "Entrata" e "Uscita" sono stati **notevolmente ingranditi** (area di tocco maggiorata).
    * Mantiene i selettori **affiancati sulla stessa riga** per una scelta rapida e intuitiva senza scorrere la pagina.
* **Leggibilità Superiore:**
    * Font dei testi e delle etichette aumentati fino a **1.8rem - 2.2rem** per una lettura immediata senza zoom.
    * Testi di avviso e orario (`#hour`) resi in grassetto e con dimensioni generose.
* **Elementi Interattivi Ingranditi:**
    * **Menu a tendina (Select):** Molto più alti e facili da aprire.
    * **Bottoni:** Dimensioni "extra-large" per i tasti di conferma e indietro, con icone Material Symbols proporzionate.
* **Adattamento Intelligente:**
    * Include media query specifiche per diverse risoluzioni (Smartphone, Tablet, Portrait mode).
    * Rilevamento automatico dei dispositivi touch-screen per applicare correzioni di layout specifiche.

## Installazione

Per installare lo script e assicurarti che si aggiorni automaticamente dal repository GitHub, segui i passaggi per il tuo dispositivo:

## Installazione su Smartphone Android

Per utilizzare questo script su smartphone, è necessario installare Firefox per Android e Tampermonkey.

### 1. Installa Firefox per Android
* Scarica **"Firefox Browser"** dal Google Play Store.

### 2. Abilita le Estensioni
1. Apri Firefox e vai in **Impostazioni** > **Informazioni su Firefox**.
2. **Tocca 5 volte il logo di Firefox** finché non appare il messaggio "Modalità debug abilitata".
3. Torna alle Impostazioni e tocca **Componenti aggiuntivi**.

### 3. Installa Tampermonkey
1. Cerca **Tampermonkey** nella lista dei componenti aggiuntivi.
2. Tocca **"+ Aggiungi"** e conferma.

### 4. Installazione dello Script
[**Clicca qui per installare/aggiornare EVO - Responsive Marcatempo Virtuale**](https://github.com/stefano-salvatore7/evo-responsive-marcatempo-virtuale/raw/refs/heads/main/evo-responsive-marcatempo.user.js)

* Conferma l'installazione toccando **"Installa"** nel popup di Tampermonkey.

---

## Installazione su PC

### 1. Installare Tampermonkey
Installa l'estensione per il tuo browser:
* **[Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)** | **[Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)** | **[Firefox](https://addons.mozilla.org/it/firefox/addon/tampermonkey/)**

### 2. Configurazione Browser (Chrome/Edge)
1. Vai in `chrome://extensions/` (o `edge://extensions/`).
2. Attiva la **"Modalità sviluppatore"**.
3. Nei dettagli di Tampermonkey, abilita **"Consenti l'accesso agli URL del file"**.

### 3. Installazione dello Script
[**Clicca qui per installare/aggiornare EVO - Responsive Marcatempo Virtuale**](https://github.com/stefano-salvatore7/evo-responsive-marcatempo-virtuale/raw/refs/heads/main/evo-responsive-marcatempo.user.js)

---

## Utilizzo

Una volta installato, lo script si attiva esclusivamente nella pagina del Marcatempo Virtuale.
1. Accedi al portale EVO.
2. Apri la sezione **Marcatempo Virtuale**.
3. Noterai immediatamente che l'interfaccia è più grande, i bottoni sono più semplici da premere e non è necessario fare lo "pinch-to-zoom" per leggere l'orario o selezionare il verso della timbratura.

## Compatibilità Script

Questo script è progettato per lavorare in sinergia con:
* **[EVO - Bottone Marcatempo Virtuale (HOME)](https://github.com/stefano-salvatore7/evo-new-virtual-button-HOME)**: Per accedere a questa pagina con un solo click dalla dashboard.

## Log delle Versioni

### Versione 1.2 (Gennaio 2026)
* **Novità:** Selettori Entrata/Uscita ora affiancati e ulteriormente ingranditi.
* **Miglioramento:** Ottimizzazione del layout `inline-flex` per i radio button.
* Fix per evitare l'andata a capo forzata dei selettori su schermi medi.

### Versione 1.1
* Introduzione del CSS responsive per tabelle e form.
* Ingrandimento font e bottoni.

---

**Nota:** Questo script modifica solo l'aspetto estetico (CSS) per migliorare l'usabilità e non interferisce con l'invio dei dati o la sicurezza del portale.

**Link Utili:**
* [Repository GitHub](https://github.com/stefano-salvatore7/evo-responsive-marcatempo-virtuale)
* [Portale EVO UniBo](https://personale-unibo.hrgpi.it/)
