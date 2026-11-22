# Stempeln (boredbreak.net/stempeln/)

Gebündelte React-Version der Zeiterfassung. Der ursprüngliche Quellcode liegt nicht in diesem Repo;
Korrekturen wurden direkt im Build vorgenommen.

## Deploy
Bei einem Push auf `main` lädt der Workflow `.github/workflows/deploy-ionos.yml` diesen Ordner per SFTP
nach `/boredbreak-weiche/stempeln/` (Domain-Ordner von boredbreak.net). Anderes Ziel: Repository-Variable
`STEMPELN_DIR` setzen. Manuell: Inhalt inkl. `fonts/` dorthin hochladen.

Nicht mehr benötigte Altdateien auf dem Server (können gelöscht werden):
`importexport.js`, `feiertage.js`, `abgleich.js`, `auswertung.js`, `beispiel-zeiterfassung.csv`.
