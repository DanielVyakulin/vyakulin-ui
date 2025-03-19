'use client';

import { Text, Link, Button } from '@/components/components';
import './styles.scss';

export default function TestPage() {
  return (
    <div className="test-page">
      {/* Typography */}
      <section className="test-page__section">
        <h2 className="test-page__title">Typography</h2>
        <div className="test-page__grid">
          <Text type="h1">Heading 1</Text>
          <Text type="h2">Heading 2</Text>
          <Text type="h3">Heading 3</Text>
          <Text type="p">Paragraph text</Text>
          <Text type="sm">Small text</Text>
          <Text type="btn">Button text</Text>
        </div>
      </section>

      {/* Links */}
      <section className="test-page__section">
        <h2 className="test-page__title">Links</h2>
        <div className="test-page__grid">
          <Link text="h3" color="wh">White Link</Link>
          <Link text="h3" color="wh-ac">White Accent Link</Link>
          <Link text="h3" color="bl">Black Link</Link>
          <Link text="h3" color="bl-ac">Black Accent Link</Link>
          <Link text="h3" color="ac">Accent Link</Link>
        </div>
      </section>

      {/* Buttons */}
      <section className="test-page__section">
        <h2 className="test-page__title">Buttons</h2>
        <div className="test-page__grid">
          <Button text="btn" color="wh">White Button</Button>
          <Button text="btn" color="wh-ac">White Accent Button</Button>
          <Button text="btn" color="bl">Black Button</Button>
          <Button text="btn" color="bl-ac">Black Accent Button</Button>
          <Button text="btn" color="ac">Accent Button</Button>
        </div>
      </section>
    </div>
  );
} 