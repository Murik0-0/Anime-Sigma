my-app/
├── 📂 node_modules/       ⛔️ Сюда не лезем (тут лежат библиотеки)
├── 📂 static/             🖼 Тут храним картинки (logo.png, favicon.ico)
├── 📂 src/                🛠 ТВОЯ РАБОЧАЯ ЗОНА
│   │
│   ├── 📂 lib/            💎 САМАЯ ВАЖНАЯ ПАПКА (Алиас $lib)
│   │   ├── 📂 components/
│   │   │   └── 📂 ui/     🧩 Тут лежат компоненты shadcn (Button, Input...)
│   │   │       ├── button/
│   │   │       └── card/
│   │   └── utils.ts       ⚙️ Утилита для объединения классов (cn)
│   │
│   ├── 📂 routes/         🌐 ТВОИ СТРАНИЦЫ САЙТА
│   │   ├── +layout.svelte 🎨 Общий шаблон (хедер, футер) для всего сайта
│   │   ├── +page.svelte   🏠 Главная страница (Home page)
│   │   └── 📂 about/      
│   │       └── +page.svelte 👉 Страница /about
│   │
│   ├── app.css            🎨 Глобальные стили + Tailwind
│   ├── app.html           💀 Скелет HTML (тут подключаются шрифты, мета-теги)
│   └── app.d.ts           📋 Типы TypeScript (обычно не трогаем)
│
├── .gitignore             🙈 Что не отправлять на GitHub
├── components.json        ⚙️ Настройки shadcn (откуда качать, куда класть)
├── package.json           📦 Список установленных библиотек
├── svelte.config.js       ⚙️ Настройки SvelteKit (тут живут алиасы)
├── tailwind.config.ts     🎨 Настройки Tailwind (цвета, шрифты, отступы)
├── tsconfig.json          📘 Настройки TypeScript
└── vite.config.ts         🚀 Настройки сборщика Vite