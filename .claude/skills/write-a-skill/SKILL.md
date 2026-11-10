---
name: write-a-skill
description: Verpackt einen bewährten Prompt oder Arbeitsablauf als wiederverwendbaren Claude-Code-Skill (SKILL.md). Nutzen, wenn der Nutzer etwas "als Skill speichern", "wiederverwendbar machen" oder einen neuen Skill anlegen will.
---

# Write a Skill – als wiederverwendbaren Skill abfüllen

## Vorgehen

1. **Klären:** Was soll der Skill tun? Wann soll er greifen (Auslöser, Schlüsselwörter)? Was ist Eingabe, was Ausgabe? Hol das aus dem Gespräch; frag nur, was fehlt.
2. **Namen wählen:** kurz, Kleinbuchstaben, Ziffern und Bindestriche (z. B. `release-notes`). Er wird als `/name` aufgerufen.
3. **Speicherort:**
   - Projekt-Skill: `.claude/skills/<name>/SKILL.md` (wird mit dem Repo geteilt),
   - persönlicher Skill: `~/.claude/skills/<name>/SKILL.md`.
4. **Datei schreiben:**

```markdown
---
name: <name>
description: <Was der Skill tut und wann er genutzt werden soll – in einem bis zwei Sätzen, mit den Wörtern, die der Nutzer typischerweise sagt.>
---

# <Titel>

## Vorgehen
1. …

## Ausgabe
…
```

5. **Gute Skills:** Die `description` entscheidet, ob der Skill gefunden wird – konkret formulieren. Anweisungen mit Begründung statt „IMMER/NIEMALS“. Kurz halten; längere Referenzen in eigene Dateien im Skill-Ordner auslagern und im SKILL.md verlinken. Skripte, die der Skill braucht, ebenfalls in den Ordner legen.
6. **Testen:** Den Skill einmal mit einem typischen Beispiel aufrufen und prüfen, ob das Ergebnis passt.
