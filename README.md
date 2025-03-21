# Vyakulin UI

Modern React component library with a clean design and intuitive API.

## Installation

```bash
npm install vyakulin-ui
```

## Usage

```jsx
import { Header, Text, Button } from 'vyakulin-ui';
import 'vyakulin-ui/dist/styles.css';

function App() {
  return (
    <div>
      <Header>
        <Text text="h1">Hello, World!</Text>
        <Button color="ac">Click me</Button>
      </Header>
    </div>
  );
}
```

## Components

### Header
Website header component with logo and navigation.

```jsx
<Header>
  <Logo />
  <nav>
    <LinkV href="/docs">Docs</LinkV>
    <LinkV href="/contact">Contact</LinkV>
  </nav>
</Header>
```

### Text
Text display component with various styles.

```jsx
<Text text="h1">Heading</Text>
<Text text="p">Paragraph</Text>
<Text text="sm">Small text</Text>
```

### Button
Button with various styles and states.

```jsx
<Button color="ac">Primary Button</Button>
<Button color="wh" outline>Outline Button</Button>
```

### Input
Input field with floating label.

```jsx
<Input label="Email" color="wh" />
<Input label="Password" color="wh" outline />
```

### Feature
Component for displaying features or benefits.

```jsx
<Feature icon={<Icon />}>
  <Feature.Title>Title</Feature.Title>
  <Feature.Description>Description</Feature.Description>
</Feature>
```

### DocsNav
Documentation navigation component.

```jsx
<DocsNav>
  <DocsNav.List>
    <DocsNav.Item href="/docs/getting-started">Getting Started</DocsNav.Item>
    <DocsNav.Item href="/docs/components">Components</DocsNav.Item>
  </DocsNav.List>
</DocsNav>
```

### Snip
Code snippet component with copy functionality.

```jsx
<Snip name="example.js" icon={<Icon />}>
  {`const hello = "world";`}
</Snip>
```

## Styles

The library uses SCSS for styling and provides the following utilities:

### Colors
- `wh` - white
- `bl` - black
- `ac` - accent color

### Text Sizes
- `h1` - heading 1
- `h2` - heading 2
- `h3` - heading 3
- `p` - paragraph
- `sm` - small text
- `btn` - button text

### Spacing
- `gap-1` - 4px spacing
- `gap-2` - 8px spacing
- `gap-3` - 12px spacing
- `gap-4` - 16px spacing

- `ph-1` - 4px horizontal padding
- `ph-2` - 8px horizontal padding
- `ph-3` - 12px horizontal padding
- `ph-4` - 16px horizontal padding

- `pv-1` - 4px vertical padding
- `pv-2` - 8px vertical padding
- `pv-3` - 12px vertical padding
- `pv-4` - 16px vertical padding

### Alignment
- `ch` - center horizontal alignment
- `cv` - center vertical alignment

## Development

### Prerequisites
- Node.js >= 16.8.0
- npm >= 7.0.0

### Setup
1. Clone the repository
```bash
git clone https://github.com/yourusername/vyakulin-ui.git
cd vyakulin-ui
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build the package
```bash
npm run build
```

### Project Structure
```
vyakulin-ui/
├── src/
│   ├── components/     # React components
│   ├── styles/        # SCSS styles
│   └── index.ts       # Main entry point
├── public/            # Static files
├── package.json       # Dependencies and scripts
└── README.md         # Documentation
```

## License

MIT 