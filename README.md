# Dynamic YouTube Video Thumbnail and Title Updater

## Description
This project automatically updates a YouTube video's title and thumbnail based on the current view count. The script runs every 10 minutes to ensure the view count stays up to date.

**Watch the video here:** [YouTube Video Link](https://youtu.be/dwSiNA1J72Y?feature=shared)

## Key Features
- Fetch YouTube video statistics using the YouTube Data API.
- Generate a custom thumbnail with an overlay displaying the current view count.
- Automatically update the video's title and thumbnail on YouTube every 10 minutes.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Google APIs (YouTube Data API v3)**: Fetch video stats, update metadata, and set thumbnails.
- **OAuth2 Authentication**: Secure API access using google.auth.OAuth2.
- **Canvas**: Image manipulation for generating thumbnails.
- **File System (fs)**: Read and write files for thumbnail processing.
- **dotenv**: Manage environment variables securely.
- **Asynchronous Programming**: Handled via async/await.

## Inspiration
This project is a copycat implementation of [Ryan Carmody's tutorial](https://www.ryancarmody.dev/blog/replicate-tom-scotts-this-video-has-x-views-videos-with-nodejs).

---

# Dynamischer YouTube-Video-Thumbnail- und Titel-Updater

## Beschreibung
Dieses Projekt aktualisiert automatisch den Titel und das Thumbnail eines YouTube-Videos basierend auf der aktuellen Aufrufzahl. Das Skript wird alle 10 Minuten ausgeführt, um die Aufrufzahl stets auf dem neuesten Stand zu halten.

**Schauen Sie sich das Video hier an:** [YouTube-Video-Link](https://youtu.be/dwSiNA1J72Y?feature=shared)

## Hauptfunktionen
- Abrufen von YouTube-Video-Statistiken mit der YouTube Data API.
- Erstellen eines benutzerdefinierten Thumbnails mit einer Overlay-Anzeige der aktuellen Aufrufzahl.
- Automatische Aktualisierung des Videotitels und Thumbnails auf YouTube alle 10 Minuten.

## Verwendete Technologien
- **Node.js**: JavaScript-Laufzeitumgebung.
- **Google APIs (YouTube Data API v3)**: Abrufen von Videostatistiken, Aktualisieren von Metadaten und Festlegen von Thumbnails.
- **OAuth2 Authentication**: Sicherer API-Zugriff mit google.auth.OAuth2.
- **Canvas**: Bildbearbeitung zur Erstellung von Thumbnails.
- **File System (fs)**: Lesen und Schreiben von Dateien für die Thumbnail-Verarbeitung.
- **dotenv**: Sichere Verwaltung von Umgebungsvariablen.
- **Asynchronous Programming**: Realisiert mit async/await.

## Inspiration
Dieses Projekt ist eine Kopie der Implementierung von [Ryan Carmody's Tutorial](https://www.ryancarmody.dev/blog/replicate-tom-scotts-this-video-has-x-views-videos-with-nodejs).
