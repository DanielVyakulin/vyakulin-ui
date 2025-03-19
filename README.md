# Vyakulin UI

UI-кит на Next.js с использованием SASS.

## Technologies

- Next.js
- React
- SASS
- JavaScript

## Компоненты

### Text
Компонент для отображения текста с различными стилями.

```jsx
<Text type="h1">Заголовок</Text>
<Text type="h2">Подзаголовок</Text>
<Text type="h3">Заголовок секции</Text>
<Text type="p">Обычный текст</Text>
<Text type="sm">Маленький текст</Text>
<Text type="btn">Текст кнопки</Text>
```

### Link
Компонент ссылки с различными цветами и стилями текста.

```jsx
<Link text="h3" color="wh">Белая ссылка</Link>
<Link text="h3" color="wh-ac">Белая ссылка с акцентом</Link>
<Link text="h3" color="bl">Черная ссылка</Link>
<Link text="h3" color="bl-ac">Черная ссылка с акцентом</Link>
<Link text="h3" color="ac">Акцентная ссылка</Link>
```

### Button
Компонент кнопки с различными цветами и стилями текста.

```jsx
<Button text="btn" color="wh">Белая кнопка</Button>
<Button text="btn" color="wh-ac">Белая кнопка с акцентом</Button>
<Button text="btn" color="bl">Черная кнопка</Button>
<Button text="btn" color="bl-ac">Черная кнопка с акцентом</Button>
<Button text="btn" color="ac">Акцентная кнопка</Button>
```

## Цветовая палитра

- Акцентный: #00FFBF
- Акцентный (hover): #30BF9A
- Белый: #E5E5E5
- Белый (hover): #A6A6A6
- Черный: #1A1A1A
- Черный (hover): #595959

## Установка и запуск

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build the project
npm run build

# Run the built project
npm start
```

## Тестирование компонентов

Для просмотра всех компонентов и их вариаций перейдите по адресу `/test`. 