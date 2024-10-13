# WiFi DOS Detector

Ce projet est une application web simple pour l'analyse de trafic réseau et la détection des attaques de type déni de service (DoS) sur un réseau WiFi. L'application permet aux utilisateurs de visualiser les appareils connectés à un réseau, de vérifier l'état des dispositifs, et d'analyser les attaques potentielles via des graphiques et des statistiques.

### Développé par Chaima Ayadi

## Fonctionnalités

- **Affichage des IPs connectées** : Montre les adresses IP des appareils connectés au réseau.
- **Visualisation des attaques DoS** : Génère des graphiques pour analyser les attaques DoS en temps réel.
- **Analyse par heure des IPs source** : Visualise la répartition des adresses IP source sur une heure.
- **Statistiques sur les IPs les plus fréquentes** : Affiche un graphique sur les IPs les plus fréquentes du dernier quart d'heure.
- **Vérification des appareils** : Permet à l'utilisateur de vérifier l'état de connectivité d'un appareil en utilisant son adresse IP.

## Prérequis

Avant d'exécuter l'application, assurez-vous que les éléments suivants sont installés :

- Python 3.x
- Flask (`pip install flask`)
- Matplotlib (`pip install matplotlib`)
- Scapy (`pip install scapy`)
- Bootstrap (inclus via CDN)
- JQuery (inclus via CDN)

## Installation
1. **Installer les dépendances :**
   ```bash
   pip install -r requirements.txt
