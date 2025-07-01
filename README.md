# Game Hub 🎮

A modern video game discovery platform built with React and TypeScript. Search, filter, and explore a vast library of games, view details, and enjoy a beautiful, responsive UI.  
**Repository:** [`@UsamahThani/game-hub`](https://github.com/UsamahThani/game-hub)

## Features

- 🔍 **Game Search & Filtering**: Easily find games by genre, platform, rating, and more.
- 🖼️ **Game Previews**: See covers, screenshots, and key information at a glance.
- 📱 **Responsive Design**: Seamless experience across desktop and mobile.
- ⚡ **Fast & Modern UI**: Built with React, TypeScript, Chakra UI, and Vite.
- 🌙 **Light/Dark Mode**: Switch themes according to your preference.
- 🗂️ **Type-Safe Code**: End-to-end TypeScript for reliability and scalability.
- 🌐 **API Integration**: Fetches live data from RAWG.io or similar game APIs.

## Demo

[Live Demo](#) <!-- (replace with your deployment URL if available) -->

![Screenshot of Game Hub](./assets/screenshot.png) <!-- replace with your own screenshot path -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) or [npm](https://www.npmjs.com/get-npm)

### Installation

```bash
git clone https://github.com/UsamahThani/game-hub.git
cd game-hub
yarn install
# or
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your API key:

```env
VITE_RAWG_API_KEY=your_rawg_api_key_here
```

### Running Locally

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
game-hub/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── theme/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── package.json
└── README.md
```

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Vite](https://vitejs.dev/)
- [RAWG Video Games Database API](https://rawg.io/apidocs)

## Contributing

Contributions are welcome!  
Please open issues and submit pull requests for new features, bug fixes, or suggestions.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

[MIT](./LICENSE)

## Acknowledgements

- [RAWG.io](https://rawg.io/) for the game data API.
- [Chakra UI](https://chakra-ui.com/) for UI components.
- [Open Source Community](https://github.com/UsamahThani/game-hub/graphs/contributors)

---

> Made by [@UsamahThani](https://github.com/UsamahThani)
