# Vyakulin UI

Modern UI kit for React applications built with Next.js 15 and React 19.

## 🚀 Features

- ⚡️ Next.js 15 with Turbopack
- 🎨 SCSS with variables and mixins
- 📱 Responsive design
- 🎯 Component-based approach
- 🎨 Customizable styles
- 📦 Lightweight

## 🛠 Technologies

- Next.js 15.2.3
- React 19
- SCSS
- React Icons

## 📦 Installation

```bash
npm install
```

## 🚀 Running

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm run start
```

## 🎨 Components

### Common Attributes

All components support these attributes:

- `text` (string) - text size (inherits from parent):
  - `h1` - heading 1
  - `h2` - heading 2
  - `h3` - heading 3
  - `p` - paragraph
  - `sm` - small text
  - `btn` - button text
- `className` (string) - additional classes

### Typography

`Text` component for displaying text with various styles.

```jsx
<Text text="h1">Heading</Text>
```

#### Attributes

- `text` (string) - text style:
  - `h1` - heading 1
  - `h2` - heading 2
  - `h3` - heading 3
  - `p` - paragraph
  - `sm` - small text
  - `btn` - button text

### Links

`LinkV` component for displaying links with various styles.

```jsx
<LinkV color="wh">Link</LinkV>
```

#### Attributes

- `color` (string) - link color:
  - `wh` - white
  - `wh-ac` - white accent
  - `bl` - black
  - `bl-ac` - black accent
  - `ac` - accent
- `href` (string) - link URL

### Buttons

`Button` component for displaying buttons with various styles.

```jsx
<Button color="wh">Button</Button>
```

#### Attributes

- `color` (string) - button color:
  - `wh` - white
  - `wh-ac` - white accent
  - `bl` - black
  - `bl-ac` - black accent
  - `ac` - accent
- `outline` (boolean) - use outline style
- `onClick` (function) - click handler

### Text Input

`TextInput` component for displaying text fields with various styles.

```jsx
<TextInput color="wh" label="Field" placeholder="Enter text" />
```

#### Attributes

- `color` (string) - input color:
  - `wh` - white
  - `bl` - black
- `outline` (boolean) - use outline style
- `label` (string) - label text
- `placeholder` (string) - placeholder text
- `value` (string) - input value
- `onChange` (function) - change handler

## 🎨 Styling

### Color Palette

- Accent: `#00FFBF`
- Accent (hover): `#30BF9A`
- White: `#E5E5E5`
- White (hover): `#A6A6A6`
- Black: `#000000`
- Black (hover): `#404040`

### Typography

- Font: Montserrat
- Sizes:
  - H1: 2rem (32px)
  - H2: 1.5rem (24px)
  - H3: 1.25rem (20px)
  - Paragraph: 1rem (16px)
  - Small text: 0.875rem (14px)
  - Button: 1rem (16px)

### Spacing

- Base spacing: 0.25rem (4px)
- Base size: 1rem (16px)

## 📁 Project Structure

```
vyakulin-ui/
├── app/
│   ├── components/     # React components
│   ├── styles/        # SCSS styles
│   ├── layout.jsx     # Root layout
│   └── page.jsx       # Main page
├── public/            # Static files
└── package.json       # Dependencies and scripts
```

## 🔧 Configuration

### Fonts
Fonts are configured in `app/fonts.js`

### Styles
Main styles are located in:
- `app/styles/globals.scss` - Global styles
- `app/styles/variables.scss` - Variables and mixins

## 📝 License

MIT 