# Dynamischer YouTube-Video-Titel-Aktualisierer

![image](https://github.com/user-attachments/assets/1d1b955f-4edb-4c17-b65d-0aa796dc5df2)


## Beschreibung
Dieses Projekt aktualisiert den Titel meines YouTube-Videos automatisch, um die aktuelle Anzahl der Aufrufe und die geschätzten Einnahmen anzuzeigen. Alle 8 Minuten wird der Videotitel mithilfe der YouTube-API dynamisch aktualisiert, um Zuschauer zu motivieren und Abonnenten zu gewinnen.

Das Ziel des Projekts ist es, 1.000 Abonnenten zu erreichen, um die Monetarisierung von YouTube freizuschalten und Einnahmen zu erzielen.

**Schauen Sie sich das Video hier an:** [YouTube-Video-Link](https://youtu.be/dwSiNA1J72Y?feature=shared)

## Hauptfunktionen
- Automatisches Abrufen der aktuellen Aufrufzahlen eines YouTube-Videos.
- Dynamische Berechnung der potenziellen Einnahmen basierend auf den Aufrufzahlen.
- Echtzeit-Aktualisierung des Videotitels mit den neuesten Statistiken.
- Verwendung eines Cron-Jobs, um alle 8 Minuten Updates zu automatisieren.

## Verwendete Technologien
- **Node.js**: Als Laufzeitumgebung für den Backend-Code.
- **Google APIs (YouTube Data API v3)**: Zum Zugriff auf und zur Aktualisierung von Videodaten.
- **dotenv**: Für die Verwaltung von Umgebungsvariablen.
- **cron**: Zur Planung wiederkehrender Updates.

## Funktionsweise
- Das Skript ruft die aktuelle Aufrufzahl des Videos mithilfe der YouTube-API ab.
- Es berechnet die geschätzten Einnahmen mit einem Wert von 0,007 $ pro Aufruf.
- Der Videotitel wird mit folgendem Format aktualisiert:
  ```
  Dieses Video hat X Aufrufe, und wenn du abonnierst, verdiene ich Y$
  ```

## Inspiration
Dieses Projekt ist eine Kopie der Implementierung von [Ryan Carmody's Tutorial](https://www.ryancarmody.dev/blog/replicate-tom-scotts-this-video-has-x-views-videos-with-nodejs).

---

# Dynamic YouTube Video Title Updater

![image](https://github.com/user-attachments/assets/e3a1ce47-0fe9-4421-bdd7-bc12dc9424c5)


## Description
This project automatically updates the title of a YouTube video to reflect the current number of views and estimated earnings. Every 8 minutes, the video title dynamically refreshes using the YouTube API to engage viewers and encourage subscriptions.

The project aims to achieve 1,000 subscribers to unlock YouTube monetization and generate earnings.

**Watch the video here:** [YouTube Video Link](https://youtu.be/dwSiNA1J72Y?feature=shared)

## Key Features
- Automatically fetches the current view count of a YouTube video.
- Dynamically calculates potential earnings based on the view count.
- Updates the video title in real-time with the latest statistics.
- Uses a cron job to automate updates every 8 minutes.

## Technologies Used
- **Node.js**: For the backend runtime environment.
- **Google APIs (YouTube Data API v3)**: To access and update video data.
- **dotenv**: For environment variable management.
- **cron**: To schedule recurring updates.

## How It Works
- The script fetches the video’s current view count using the YouTube API.
- It calculates the estimated earnings assuming $0.007 per view.
- The video title is updated with the format:
  ```
  This video has X views, and if you subscribe, I will make Y$
  ```

## Inspiration
This project is a copycat implementation of [Ryan Carmody's tutorial](https://www.ryancarmody.dev/blog/replicate-tom-scotts-this-video-has-x-views-videos-with-nodejs).








