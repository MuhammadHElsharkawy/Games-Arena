# 🎮 Games Arena

A modern, responsive gaming and eSports landing page built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**.

Games Arena is designed as a gaming community / eSports platform concept, featuring a hero section, game showcase, services, team members, sponsors, tournaments, and contact information.

## 🔗 Live Demo

**Live Demo: [Games Arena](https://muhammadhelsharkawy.github.io/Games-Arena/)**

## ✨ Features

- 🎮 Modern gaming / eSports themed UI
- 📱 Fully responsive layout for desktop, tablet, and mobile
- 🧭 Sticky navigation with active-section highlighting
- 📂 Responsive mobile navigation menu
- 🎯 Hero section with call-to-action buttons
- 🕹️ Latest games carousel powered by **Swiper.js**
- 👥 Team members showcase
- 🏆 Gaming / eSports content sections
- 🤝 Sponsors section
- 📬 Contact and newsletter sections
- 🎨 Custom gaming theme using Tailwind CSS
- 🔤 Google Fonts integration:
  - Chakra Petch
  - Days One
- ⭐ Font Awesome icons

## 🛠️ Technologies

- **HTML5**
- **CSS3**
- **Tailwind CSS v4**
- **JavaScript (ES6+)**
- **Swiper.js**
- **Font Awesome**
- **Google Fonts**

## 📁 Project Structure

```text
Games-Arena/
├── index.html
├── js/
│   └── main.js
├── src/
│   ├── input.css
│   ├── output.css
│   └── all.min.css
├── webfonts/
│   └── Font Awesome webfonts
├── images/
│   └── Project images and graphics
├── package.json
└── package-lock.json
```

> **Note:** The provided project archive references an `images/` directory from `index.html`, but that directory is not included in the uploaded archive. Add the required image assets under `images/` before deploying if they are not present in your local project.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MuhammadHElsharkawy/Games-Arena.git
cd games-arena
```

### 2. Install dependencies

Make sure you have **Node.js** and **npm** installed, then run:

```bash
npm install
```

### 3. Build Tailwind CSS

The project uses Tailwind CSS v4. You can generate the compiled stylesheet with:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css
```

For development with automatic rebuilding:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

### 4. Run the project

You can open `index.html` directly in your browser.

For a better development experience, use a local server such as **VS Code Live Server** or any static HTTP server.

For example, with Python:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## 🎨 Customization

### Colors

The main theme colors are defined in `src/input.css`:

```css
--color-primary: #cbfe1c;
--color-light: #f1f1f1;
--color-dark: #0b0e13;
```

You can change these values to create your own gaming theme.

### Fonts

The project uses:

- `Chakra Petch` for general UI text
- `Days One` for major headings

These are loaded from Google Fonts in `src/input.css`.

### JavaScript

Main interactive functionality is located in:

```text
js/main.js
```

It currently handles:

- Active navigation links using `IntersectionObserver`
- Mobile navigation open/close behavior
- Swiper carousel configuration

## 📱 Responsive Design

The layout adapts to different screen sizes using Tailwind CSS responsive utilities.

The games carousel changes based on viewport width:

| Screen Size | Slides |
|---|---:|
| Mobile | 1 |
| Tablet (`768px+`) | 2 |
| Desktop (`1024px+`) | 3 |

## 🌐 External Resources

The project uses the following external resources:

- [Google Fonts](https://fonts.google.com/)
- [Swiper.js](https://swiperjs.com/)
- [Font Awesome](https://fontawesome.com/)

Swiper is loaded through jsDelivr in `index.html`.

## 🔮 Possible Improvements

Some ideas for future versions:

- Add real authentication for the Sign In button
- Connect the contact form to a backend or form service
- Add real tournament functionality
- Add dynamic game data from an API
- Add filtering/search for games
- Add dark/light theme switching
- Add animations and page transitions
- Improve accessibility with additional ARIA labels and keyboard navigation
- Add SEO metadata and Open Graph tags

## 📄 License

This project does not currently specify a license.

If you plan to make the repository open source, consider adding a license such as the MIT License and updating this section accordingly.

## 👨‍💻 Author

**Muhammad Elsharkawy**

Frontend Developer focused on building modern, responsive, and maintainable web applications.

* GitHub: [MuhammadHElsharkawy](https://github.com/MuhammadHElsharkawy)

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.
