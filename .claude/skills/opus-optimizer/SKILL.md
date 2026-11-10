---
name: opus-optimizer
description: Überarbeitet einen fertigen Prompt so, dass er auf dem aktuellen Claude Opus (Opus 5.5) gut funktioniert – klarer, weniger veraltete Anweisungen, passende Effort-Empfehlung. Nutzen, wenn der Nutzer einen Prompt für Opus optimieren oder polieren will.
---

# Optimizer – Prompt polieren für Claude Opus

Ziel: Der Prompt sagt klar, was gewollt ist, und enthält nichts, was nur für ältere Modelle nötig war.

## Prüfen und ändern

1. **Ziel und Ergebnis zuerst.** Der Prompt beginnt mit dem Auftrag und dem gewünschten Ergebnis, dann Kontext, dann Regeln.
2. **Gründe statt Großbuchstaben.** Ersetze „IMMER“, „NIEMALS“, „WICHTIG!!“ durch normale Sätze mit Begründung. Aktuelle Modelle befolgen Regeln sehr wörtlich; harte Regeln ohne Grund machen sie übervorsichtig.
3. **Veraltetes entfernen:** „Denk Schritt für Schritt“, „du bist ein Experte für …“-Rollenfloskeln ohne Inhalt, Wiederholungen derselben Regel, Anweisungen wie „antworte ohne nachzudenken“ (wirkt nicht; stattdessen niedrigeren Effort wählen).
4. **Konkret statt allgemein.** „Vermeide generisches Design“ wirkt kaum. Nenne die konkreten Muster, die vermieden werden sollen.
5. **Länge und Format** im Prompt festlegen (Effort ändert die Antwortlänge kaum).
6. **Freigaben genau benennen.** Welche Schritte darf das Modell ohne Rückfrage machen, welche nicht.
7. **Effort empfehlen:** `medium` ist bei Opus 5.5 der Standard; `high`/`xhigh` für Coding und lange Agent-Aufgaben, `low` für Chat und einfache Aufgaben.

## Ausgabe

1. Der optimierte Prompt komplett in einem Codeblock.
2. Darunter eine kurze Liste: was geändert wurde und warum (ein Satz pro Punkt).
3. Empfohlener Effort in einer Zeile.
