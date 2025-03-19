# Vyakulin UI

Проект на Next.js с настроенной типографикой и цветовой схемой.

## Технологии

- Next.js 14
- React
- SCSS
- Google Fonts (Montserrat)

## Структура проекта

```
app/
├── styles/
│   ├── variables.scss    # SCSS переменные
│   └── globals.scss      # Глобальные стили
├── test/
│   ├── page.jsx         # Демо страница
│   └── page.scss        # Стили демо страницы
├── fonts.js             # Конфигурация шрифтов
├── layout.jsx           # Корневой layout
└── page.jsx             # Главная страница
```

## Настройка шрифтов

Проект использует шрифт Montserrat с поддержкой кириллицы и следующими начертаниями:
- Light (300)
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

## Типографика

Настроены следующие стили текста:
- H1: 2.5rem (40px)
- H2: 2rem (32px)
- H3: 1.5rem (24px)
- Paragraph: 1rem (16px)
- Small: 0.875rem (14px)
- Button: 0.875rem (14px)

## Цветовая схема

### Основные цвета
- `$ac`: #FF6B00
- `$wh`: #FFFFFF
- `$bl`: #000000

### Статусные цвета
- `$error`: #FF0000
- `$warning`: #FFA500
- `$success`: #00FF00
- `$info`: #0000FF

## Демо

Демонстрация типографики и цветов доступна по адресу `/test`

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка проекта
npm run build

# Запуск собранного проекта
npm start
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
