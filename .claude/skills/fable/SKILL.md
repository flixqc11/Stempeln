---
name: fable
description: Überarbeitet einen Prompt für Claude Fable (Fable 5.2), Anthropics stärkstes Modell für schwierige und lange Agent-Aufgaben. Nutzen, wenn der Nutzer einen Prompt für Fable optimieren will oder "/fable" sagt.
---

# Fable Prompter – gleiche Politur, aber für Fable

Wende zuerst alle Punkte aus `/opus-optimizer` an. Dann zusätzlich für Fable 5.2:

1. **Weniger vorschreiben.** Prompts für ältere Modelle sind für Fable oft zu kleinteilig und senken die Qualität. Streiche Schritt-für-Schritt-Anleitungen, wo das Ziel und die Kriterien reichen.
2. **Keine „denk weniger“-Anweisungen.** Sie wirken ab `medium` nicht. Stattdessen Effort senken.
3. **Aufgabe zu Ende bringen.** Bei langen Aufgaben einen Abschnitt `# Finishing work` ergänzen: weiterarbeiten statt anzubieten weiterzumachen; normale Hindernisse (Fehler, Timeouts) selbst lösen; echte Sperren (bewusst verweigerter Zugriff, Sicherheitsregeln) respektieren und melden; Rückfrage bei riskanten oder unumkehrbaren Aktionen bleibt.
4. **Eigentum am Code klären.** Soll Fable umbauen dürfen, schreib: „Diese Codebasis gehört dir …“. Soll es nur minimal ändern, sag das ausdrücklich.
5. **Vorsicht nicht anhäufen.** Alte Notizen und „niemals“-Regeln ohne aktuellen Grund entfernen; Ausnahmen direkt in die Regel schreiben.
6. **Unteragenten.** Nur wenn nötig zur Delegation auffordern; sie kosten viel.
7. **Berichte.** Für Abschlussberichte einen Abschnitt `# Communicating clearly` ergänzen: für Leser ohne Kontext schreiben, Kernaussage zuerst, klare ganze Sätze, keine selbst erfundenen Begriffe.
8. **Effort:** mit `high` starten; `xhigh` nur, wo ein Gewinn messbar ist.

## Ausgabe

Optimierter Prompt im Codeblock, darunter die Änderungen mit Begründung, dann der empfohlene Effort.
