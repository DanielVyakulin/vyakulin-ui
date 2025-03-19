# Vyakulin UI

UI-кит на Next.js с использованием SASS.

## Technologies

- Next.js
- React
- SASS
- JavaScript

## Components

### Text
```jsx
<Text type="h1 | h2 | h3 | p | sm | btn">
  children
</Text>
```

### Link
```jsx
<Link 
  text="h1 | h2 | h3 | p | sm | btn"
  color="wh | wh-ac | bl | bl-ac | ac"
  href="string"
>
  children
</Link>
```

### Button
```jsx
<Button 
  text="h1 | h2 | h3 | p | sm | btn"
  color="wh | wh-ac | bl | bl-ac | ac"
>
  children
</Button>
```

## Color Palette

- Accent: #00FFBF
- Accent (hover): #30BF9A
- White: #E5E5E5
- White (hover): #A6A6A6
- Black: #1A1A1A
- Black (hover): #595959

## Installation & Run

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

## Testing

View all components and their variations at `/test`. 