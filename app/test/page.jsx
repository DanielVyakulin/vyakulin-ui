'use client';

import { Text, LinkV, Button, TextInput } from '../components/components';
import './styles.scss';

export default function TestPage() {
  return (
    <div className="test-page">
      <div className="test-section">
        <Text text="h1">Typography</Text>
        <div className="test-grid">
          <div className="test-item">
            <Text text="h1">Heading H1</Text>
            <Text text="sm">2rem (32px)</Text>
          </div>
          <div className="test-item">
            <Text text="h2">Heading H2</Text>
            <Text text="sm">1.5rem (24px)</Text>
          </div>
          <div className="test-item">
            <Text text="h3">Heading H3</Text>
            <Text text="sm">1.25rem (20px)</Text>
          </div>
          <div className="test-item">
            <Text text="p">Regular text</Text>
            <Text text="sm">1rem (16px)</Text>
          </div>
          <div className="test-item">
            <Text text="sm">Small text</Text>
            <Text text="sm">0.875rem (14px)</Text>
          </div>
          <div className="test-item">
            <Text text="btn">Button text</Text>
            <Text text="sm">1rem (16px)</Text>
          </div>
        </div>
      </div>

      <div className="test-section">
        <Text text="h2">Links</Text>
        <div className="test-grid">
          <div className="test-item">
            <Text text="h3">White links</Text>
            <div className="test-variants">
              <LinkV href="#" text="p" color="wh">White link</LinkV>
              <LinkV href="#" text="p" color="wh-ac">White link (accent)</LinkV>
            </div>
          </div>
          <div className="test-item">
            <Text text="h3">Black links</Text>
            <div className="test-variants">
              <LinkV href="#" text="p" color="bl">Black link</LinkV>
              <LinkV href="#" text="p" color="bl-ac">Black link (accent)</LinkV>
            </div>
          </div>
          <div className="test-item">
            <Text text="h3">Accent links</Text>
            <div className="test-variants">
              <LinkV href="#" text="p" color="ac">Accent link</LinkV>
            </div>
          </div>
        </div>
      </div>

      <div className="test-section">
        <Text text="h2">Buttons</Text>
        <div className="test-grid">
          <div className="test-item">
            <Text text="h3">White buttons</Text>
            <div className="test-variants">
              <Button text="btn" color="wh">White button</Button>
              <Button text="btn" color="wh-ac">White button (accent)</Button>
              <Button text="btn" color="wh" outline>White button (outline)</Button>
              <Button text="btn" color="wh-ac" outline>White button (outline accent)</Button>
            </div>
          </div>
          <div className="test-item">
            <Text text="h3">Black buttons</Text>
            <div className="test-variants">
              <Button text="btn" color="bl">Black button</Button>
              <Button text="btn" color="bl-ac">Black button (accent)</Button>
              <Button text="btn" color="bl" outline>Black button (outline)</Button>
              <Button text="btn" color="bl-ac" outline>Black button (outline accent)</Button>
            </div>
          </div>
          <div className="test-item">
            <Text text="h3">Accent buttons</Text>
            <div className="test-variants">
              <Button text="btn" color="ac">Accent button</Button>
              <Button text="btn" color="ac" outline>Accent button (outline)</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="test-section">
        <Text text="h2">Color palette</Text>
        <div className="test-grid">
          <div className="test-item">
            <div className="color-block ac">Accent</div>
            <Text text="sm">#00FFBF</Text>
          </div>
          <div className="test-item">
            <div className="color-block ac-hover">Accent (hover)</div>
            <Text text="sm">#30BF9A</Text>
          </div>
          <div className="test-item">
            <div className="color-block wh">White</div>
            <Text text="sm">#E5E5E5</Text>
          </div>
          <div className="test-item">
            <div className="color-block wh-hover">White (hover)</div>
            <Text text="sm">#A6A6A6</Text>
          </div>
          <div className="test-item">
            <div className="color-block bl">Black</div>
            <Text text="sm">#000000</Text>
          </div>
          <div className="test-item">
            <div className="color-block bl-hover">Black (hover)</div>
            <Text text="sm">#404040</Text>
          </div>
        </div>
      </div>

      <div className="test-section">
        <Text text="h2">Text Input</Text>
        <div className="test-grid">
          <div className="test-item">
            <Text text="h3">White fields</Text>
            <div className="test-variants">
              <TextInput color="wh" label="White field" />
              <TextInput color="wh" outline label="White field (outline)" />
            </div>
          </div>
          <div className="test-item">
            <Text text="h3">Black fields</Text>
            <div className="test-variants">
              <TextInput color="bl" label="Black field" />
              <TextInput color="bl" outline label="Black field (outline)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 