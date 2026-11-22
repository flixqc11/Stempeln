# Stempeln

Persönliche Zeiterfassung im Browser: einstempeln, Pausen, ausstempeln, Zeiten korrigieren,
Tagesziel und Wochenübersicht. Alle Daten bleiben lokal im Browser (`localStorage`);
Sicherung per JSON-Export und -Import in der App.

**Live:** <https://boredbreak.net/stempeln/>

## Ordnerstruktur

| Pfad | Inhalt |
|---|---|
| `stempeln/` | Die veröffentlichte App – wird 1:1 nach `boredbreak.net/stempeln/` hochgeladen |
| `stempeln/index.html` | Komplette App (gebündeltes React-Build, eine Datei) |
| `stempeln/sw.js` | Service Worker für Offline-Nutzung (Cache-Version bei Änderungen erhöhen) |
| `stempeln/manifest.webmanifest`, `icon-*.png` | Installation als App (Homescreen) |
| `stempeln/fonts/` | Schrift DM Sans (lokal, wegen Content-Security-Policy keine eingebetteten Schriften) |
| `.github/workflows/deploy.yml` | Automatischer Upload per SFTP |

## Veröffentlichen

Ein Push auf `main`, der etwas in `stempeln/` ändert, lädt den Ordner automatisch per SFTP nach
`/boredbreak-weiche/stempeln/` (Domain-Ordner von boredbreak.net) und prüft danach die Live-Seite.
Manuell starten: GitHub → *Actions* → *Deploy* → *Run workflow*.

- Secrets: `SFTP_HOST`, `SFTP_USER`, `SFTP_PASSWORD`
- Optionale Variable: `STEMPELN_DIR` (anderer Zielordner)
- Auf dem Server wird nichts gelöscht.

## Hinweise zur App

- Die frühere Vanilla-JS-Version „Stempeluhr“ ist nur noch in der Git-Historie enthalten
  (Ordner `archiv/stempeluhr/`, letzter Stand in Commit `0132817`).
- Der ursprüngliche React-Quellcode liegt nicht in diesem Repo; Änderungen erfolgen direkt in
  `stempeln/index.html`. Nach Änderungen die Cache-Version in `stempeln/sw.js` erhöhen.
- Die Server-CSP erlaubt nur Inhalte von derselben Domain (`default-src 'self'`) –
  keine externen Skripte, Schriften oder `data:`-Schriften verwenden.
