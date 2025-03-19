# Vyakulin UI

Современный UI-кит для React приложений, построенный на Next.js 15 и React 19.

## 🚀 Особенности

- ⚡️ Next.js 15 с Turbopack
- 🎨 SCSS с переменными и миксинами
- 📱 Адаптивный дизайн
- 🎯 Компонентный подход
- 🎨 Кастомизируемые стили
- 📦 Легковесный

## 🛠 Технологии

- Next.js 15.2.3
- React 19
- SCSS
- React Icons

## 📦 Установка

```bash
npm install
```

## 🚀 Запуск

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Продакшн
npm run start
```

## 🎨 Компоненты

### Typography

Компонент `Text` для отображения текста с различными стилями.

```jsx
<Text text="h1">Заголовок 1</Text>
<Text text="h2">Заголовок 2</Text>
<Text text="h3">Заголовок 3</Text>
<Text text="p">Параграф</Text>
<Text text="sm">Маленький текст</Text>
<Text text="btn">Текст кнопки</Text>
```

### Links

Компонент `LinkV` для отображения ссылок с различными стилями.

```jsx
<LinkV color="wh">Белая ссылка</LinkV>
<LinkV color="wh-ac">Белая акцентная ссылка</LinkV>
<LinkV color="bl">Черная ссылка</LinkV>
<LinkV color="bl-ac">Черная акцентная ссылка</LinkV>
<LinkV color="ac">Акцентная ссылка</LinkV>
```

### Buttons

Компонент `Button` для отображения кнопок с различными стилями.

```jsx
<Button color="wh">Белая кнопка</Button>
<Button color="wh-ac">Белая акцентная кнопка</Button>
<Button color="bl">Черная кнопка</Button>
<Button color="bl-ac">Черная акцентная кнопка</Button>
<Button color="ac">Акцентная кнопка</Button>
<Button color="wh" outline>Белая outline кнопка</Button>
<Button color="wh-ac" outline>Белая акцентная outline кнопка</Button>
<Button color="bl" outline>Черная outline кнопка</Button>
<Button color="bl-ac" outline>Черная акцентная outline кнопка</Button>
<Button color="ac" outline>Акцентная outline кнопка</Button>
```

### Text Input

Компонент `TextInput` для отображения текстовых полей с различными стилями.

```jsx
<TextInput color="wh" label="Белое поле" placeholder="Введите текст" />
<TextInput color="wh" outline label="Белое outline поле" placeholder="Введите текст" />
<TextInput color="bl" label="Черное поле" placeholder="Введите текст" />
<TextInput color="bl" outline label="Черное outline поле" placeholder="Введите текст" />
```

#### Параметры

- `color` (string) - цвет инпута:
  - `wh` - белый
  - `bl` - черный
- `outline` (boolean) - использовать ли outline стиль
- `text` (string) - размер текста (наследуется от родителя):
  - `h1` - заголовок 1
  - `h2` - заголовок 2
  - `h3` - заголовок 3
  - `p` - параграф
  - `sm` - маленький текст
  - `btn` - текст кнопки
- `label` (string) - текст лейбла
- `placeholder` (string) - текст плейсхолдера
- `value` (string) - значение инпута
- `onChange` (function) - функция обработки изменения значения
- `className` (string) - дополнительные классы

#### Состояния

- **Default**: 
  - Белый инпут: белый фон, черный текст
  - Черный инпут: черный фон, белый текст
  - Белый outline: прозрачный фон, белая рамка, белый текст
  - Черный outline: прозрачный фон, черная рамка, черный текст

- **Hover**:
  - Белый инпут: hover-белый фон, hover-черный текст
  - Черный инпут: hover-черный фон, hover-белый текст
  - Белый outline: белый фон, белая рамка, черный текст
  - Черный outline: черный фон, черная рамка, белый текст

- **Focus**:
  - Все варианты: акцентный фон, черный текст, акцентная рамка (для outline)

- **Filled**:
  - Белый инпут: белый фон, черный текст
  - Черный инпут: черный фон, белый текст
  - Белый outline: прозрачный фон, белая рамка, белый текст
  - Черный outline: прозрачный фон, черная рамка, черный текст

#### Лейбл

- В состоянии default лейбл находится внутри инпута
- При фокусе или заполнении лейбл перемещается над инпутом
- Цвет лейбла меняется в зависимости от состояния инпута
- Размер шрифта лейбла наследуется от родителя

## 🎨 Стилизация

### Цветовая палитра

- Акцентный: `#00FFBF`
- Акцентный (hover): `#30BF9A`
- Белый: `#E5E5E5`
- Белый (hover): `#A6A6A6`
- Черный: `#000000`
- Черный (hover): `#404040`

### Типографика

- Шрифт: Montserrat
- Размеры:
  - H1: 2rem (32px)
  - H2: 1.5rem (24px)
  - H3: 1.25rem (20px)
  - Параграф: 1rem (16px)
  - Маленький текст: 0.875rem (14px)
  - Кнопка: 1rem (16px)

### Отступы

- Базовый отступ: 0.25rem (4px)
- Базовый размер: 1rem (16px)

## 📁 Структура проекта

```
vyakulin-ui/
├── app/
│   ├── components/     # React компоненты
│   ├── styles/        # SCSS стили
│   ├── layout.jsx     # Корневой layout
│   └── page.jsx       # Главная страница
├── public/            # Статические файлы
└── package.json       # Зависимости и скрипты
```

## 🔧 Настройка

### Шрифты
Шрифты настраиваются в `app/fonts.js`

### Стили
Основные стили находятся в:
- `app/styles/globals.scss` - Глобальные стили
- `app/styles/variables.scss` - Переменные и миксины

## 📝 Лицензия

MIT 