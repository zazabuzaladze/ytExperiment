# YouTube Video Title Auto-Updater

This project automatically updates the title of a YouTube video to display its current view count every 8 minutes. It leverages the YouTube Data API and a cron job to achieve this functionality.

## Description
The application periodically fetches the latest view count of a specific YouTube video and updates its title to reflect the view count in real-time. This is a demonstration of how automation and APIs can interact with YouTube content dynamically.

**Watch the video here:** [YouTube Video Link](https://youtu.be/dwSiNA1J72Y?feature=shared)

## Key Features
- Fetches YouTube video statistics (view count).
- Updates the video's title dynamically to include the current view count.
- Scheduled updates every 8 minutes using a cron job.
- Secure handling of sensitive credentials via environment variables.

## Technologies Used
- **Node.js**: The runtime environment for executing JavaScript.
- **Google APIs Client Library**: To interact with the YouTube Data API.
- **dotenv**: For managing environment variables securely.
- **cron**: For scheduling periodic tasks.

## Inspiration
This project is a copycat implementation of [Ryan Carmody's tutorial](https://www.ryancarmody.dev/blog/replicate-tom-scotts-this-video-has-x-views-videos-with-nodejs).

---

# YouTube Video-Titel Auto-Updater

Dieses Projekt aktualisiert automatisch den Titel eines YouTube-Videos, um die aktuelle Aufrufzahl alle 8 Minuten anzuzeigen. Es verwendet die YouTube Data API und einen Cron-Job, um diese Funktionalität zu realisieren.


## Beschreibung

Die Anwendung ruft regelmäßig die neuesten Statistiken eines bestimmten YouTube-Videos ab und aktualisiert den Titel, um die aktuelle Aufrufzahl in Echtzeit anzuzeigen. Dies ist ein Demonstrationsprojekt, wie Automatisierung und APIs dynamisch mit YouTube-Inhalten interagieren können.

**Schauen Sie sich das Video hier an:** [YouTube-Video-Link](https://youtu.be/dwSiNA1J72Y?feature=shared)

## Hauptfunktionen
- Abruf von YouTube-Statistiken (Aufrufzahlen).
- Dynamische Aktualisierung des Videotitels mit der aktuellen Aufrufzahl.
- Geplante Updates alle 8 Minuten mithilfe eines Cron-Jobs.
- Sichere Handhabung sensibler Zugangsdaten über Umgebungsvariablen.

## Verwendete Technologien
- **Node.js**: Laufzeitumgebung zur Ausführung von JavaScript.
- **Google APIs Client Library**: Für die Interaktion mit der YouTube Data API.
- **dotenv**: Zur sicheren Verwaltung von Umgebungsvariablen.
- **cron**: Zur Planung periodischer Aufgaben.

## Inspiration
Dieses Projekt ist eine Kopie der Implementierung von [Ryan Carmody's Tutorial](https://www.ryancarmody.dev/blog/replicate-tom-scotts-this-video-has-x-views-videos-with-nodejs).
