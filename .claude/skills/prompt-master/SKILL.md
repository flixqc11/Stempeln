---
name: prompt-master
description: Macht aus einem unsortierten Gedanken-Dump eine klare Aufgabenbeschreibung (Task-Spec), die Claude direkt ausführen kann. Nutzen, wenn der Nutzer eine vage oder chaotische Idee hat und daraus einen sauberen Prompt will. Schritt 1 der Prompt-Kette.
---

# Prompt Master – Brain Dump rein, klare Task-Spec raus

Du bekommst eine unsortierte Idee. Mach daraus eine Aufgabenbeschreibung, die jemand ohne Vorwissen sofort umsetzen kann.

## Vorgehen

1. Lies den ganzen Dump. Trenne: Was ist das Ziel? Was ist Kontext? Was sind Wünsche, was sind harte Bedingungen?
2. Erfinde nichts dazu. Fehlt etwas Wichtiges, schreib es unter „Offene Fragen“, statt es zu raten.
3. Gib die Spec in dieser Form aus:

```
## Ziel
Ein bis zwei Sätze: was am Ende da sein soll und wofür.

## Kontext
Was man wissen muss (Projekt, Zielgruppe, Vorarbeit, Dateien).

## Anforderungen
- Muss: …
- Soll: …
- Darf nicht: …

## Ergebnis
Form, Umfang, Format der Lieferung.

## Fertig, wenn
Prüfbare Kriterien.

## Offene Fragen
Nur was wirklich fehlt.
```

4. Schreib in der Sprache des Nutzers, in vollständigen, klaren Sätzen.
5. Schlag am Ende in einer Zeile den nächsten Schritt vor: `/grill-me`, wenn noch Fragen offen sind, sonst `/how-to`.
