# 🍪 CroustiCoin - Twitch Interactive Crypto Overlay

Un overlay interactif pour streamers Twitch qui permet aux viewers d'influencer le cours d'une crypto-monnaie virtuelle (le **CroustiCoin**) en temps réel via le chat.

*(N'oublie pas de remplacer cette image par une vraie capture de ton overlay !)*

## 🚀 Fonctionnalités

* **📈 Graphique en Temps Réel :** Courbe dynamique style "Néon" (Chart.js) qui réagit instantanément.
* **💬 Interaction Chat :** Les commandes `!buy` et `!sell` font monter ou descendre le prix.
* **💎 Design Moderne :** Style **Glassmorphism** (effet verre fumé) avec indicateurs lumineux (Vert/Rouge).
* **🤖 Volatilité Naturelle :** Le marché "respire" et bouge légèrement même sans interaction pour rester vivant.
* **⚡ WebSocket :** Mise à jour instantanée sans rafraîchir la page (Socket.io).

## 🛠️ Stack Technique

* **Runtime :** Node.js
* **Serveur :** Express
* **Temps Réel :** Socket.io
* **Twitch API :** Tmi.js
* **Frontend :** HTML5, CSS3, Chart.js

## 📦 Installation

1.  **Cloner le projet**
    ```bash
    git clone [https://github.com/TON_PSEUDO/CroustiCoin.git](https://github.com/TON_PSEUDO/CroustiCoin.git)
    cd CroustiCoin
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Configurer la chaîne Twitch**
    Oouvre le fichier `server.js` et modifie la ligne suivante avec le nom de ta chaîne :
    ```javascript
    // server.js - Ligne ~15
    const monPseudoTwitch = 'ton_pseudo_twitch_ici';
    ```

4.  **Lancer le serveur**
    ```bash
    node server.js
    ```
    *Le serveur démarrera sur `http://localhost:3000`.*

## 🎥 Intégration dans OBS / Streamlabs

1.  Ajoute une nouvelle source **Navigateur** (Browser Source).
2.  **URL :** `http://localhost:3000`
3.  **Largeur (Width) :** `450`
4.  **Hauteur (Height) :** `160` (Ajuste selon tes besoins)
5.  Coche la case *"Rafraîchir le navigateur quand la scène devient active"*.
6.  Utilise le **Chroma Key** (Filtre) si tu veux rendre le fond totalement transparent (optionnel, car le design est déjà en transparence).

## 🎮 Commandes Chat

Les viewers peuvent utiliser ces commandes dans le chat :

| Commande | Effet | Description |
| :--- | :--- | :--- |
| **!buy** | 📈 +0.5% | Fait monter le prix (Pump) |
| **!sell** | 📉 -0.5% | Fait descendre le prix (Dump) |

## ⚙️ Personnalisation

Tu peux ajuster la logique du marché dans `server.js` :

* **Prix de départ :** Change `market.price = 10.00;`
* **Impact du chat :** Modifie les multiplicateurs `1.005` (Buy) ou `0.995` (Sell).
* **Volatilité :** Ajuste le `setInterval` pour changer la vitesse des fluctuations automatiques.

## 📝 Auteur

Créé pour le fun et l'engagement communautaire.
N'hésite pas à fork le projet pour créer ta propre monnaie !
