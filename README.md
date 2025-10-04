# CV statique - Structure du projet

## Arborescence

```
.
├─ assets/
│  ├─ css/
│  │  └─ cv.css
│  └─ js/
│     └─ main.js
├─ cv.html
└─ README.md
```

## Utilisation

- Ouvrir `cv.html` dans un navigateur.
- Les styles sont chargés via `assets/css/cv.css`.
- Les interactions (animations, modale, PDF) sont gérées par `assets/js/main.js`.

## Dépendances externes (CDN)

- Icônes: `https://unpkg.com/lucide@latest`
- Impression PDF (optionnel): `https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js`

## Notes

- Le bouton "Télécharger PDF" déclenche la boîte d'impression du navigateur afin de sauvegarder le CV en PDF.
- La modale de détails d'expérience est disponible sur les deux premières expériences.
