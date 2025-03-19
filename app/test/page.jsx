'use client';

import { Text, LinkV, Button, TextInput } from '../components/components';
import './styles.scss';

export default function TestPage() {
  return (
    <div className="test-page">
      <div className="test-section">
        <Text type="h1">Типографика</Text>
        <div className="test-grid">
          <div className="test-item">
            <Text type="h1">Заголовок H1</Text>
            <Text type="sm">2rem (32px)</Text>
          </div>
          <div className="test-item">
            <Text type="h2">Заголовок H2</Text>
            <Text type="sm">1.5rem (24px)</Text>
          </div>
          <div className="test-item">
            <Text type="h3">Заголовок H3</Text>
            <Text type="sm">1.25rem (20px)</Text>
          </div>
          <div className="test-item">
            <Text type="p">Обычный текст</Text>
            <Text type="sm">1rem (16px)</Text>
          </div>
          <div className="test-item">
            <Text type="sm">Маленький текст</Text>
            <Text type="sm">0.875rem (14px)</Text>
          </div>
          <div className="test-item">
            <Text type="btn">Текст кнопки</Text>
            <Text type="sm">1rem (16px)</Text>
          </div>
        </div>
      </div>

      <div className="test-section">
        <Text type="h2">Ссылки</Text>
        <div className="test-grid">
          <div className="test-item">
            <Text type="h3">Белые ссылки</Text>
            <div className="test-variants">
              <LinkV href="#" text="p" color="wh">Белая ссылка</LinkV>
              <LinkV href="#" text="p" color="wh-ac">Белая ссылка (акцент)</LinkV>
            </div>
          </div>
          <div className="test-item">
            <Text type="h3">Черные ссылки</Text>
            <div className="test-variants">
              <LinkV href="#" text="p" color="bl">Черная ссылка</LinkV>
              <LinkV href="#" text="p" color="bl-ac">Черная ссылка (акцент)</LinkV>
            </div>
          </div>
          <div className="test-item">
            <Text type="h3">Акцентные ссылки</Text>
            <div className="test-variants">
              <LinkV href="#" text="p" color="ac">Акцентная ссылка</LinkV>
            </div>
          </div>
        </div>
      </div>

      <div className="test-section">
        <Text type="h2">Кнопки</Text>
        <div className="test-grid">
          <div className="test-item">
            <Text type="h3">Белые кнопки</Text>
            <div className="test-variants">
              <Button text="btn" color="wh">Белая кнопка</Button>
              <Button text="btn" color="wh-ac">Белая кнопка (акцент)</Button>
              <Button text="btn" color="wh" outline>Белая кнопка (outline)</Button>
              <Button text="btn" color="wh-ac" outline>Белая кнопка (outline акцент)</Button>
            </div>
          </div>
          <div className="test-item">
            <Text type="h3">Черные кнопки</Text>
            <div className="test-variants">
              <Button text="btn" color="bl">Черная кнопка</Button>
              <Button text="btn" color="bl-ac">Черная кнопка (акцент)</Button>
              <Button text="btn" color="bl" outline>Черная кнопка (outline)</Button>
              <Button text="btn" color="bl-ac" outline>Черная кнопка (outline акцент)</Button>
            </div>
          </div>
          <div className="test-item">
            <Text type="h3">Акцентные кнопки</Text>
            <div className="test-variants">
              <Button text="btn" color="ac">Акцентная кнопка</Button>
              <Button text="btn" color="ac" outline>Акцентная кнопка (outline)</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="test-section">
        <Text type="h2">Цветовая палитра</Text>
        <div className="test-grid">
          <div className="test-item">
            <div className="color-block ac">Акцентный</div>
            <Text type="sm">#00FFBF</Text>
          </div>
          <div className="test-item">
            <div className="color-block ac-hover">Акцентный (hover)</div>
            <Text type="sm">#30BF9A</Text>
          </div>
          <div className="test-item">
            <div className="color-block wh">Белый</div>
            <Text type="sm">#E5E5E5</Text>
          </div>
          <div className="test-item">
            <div className="color-block wh-hover">Белый (hover)</div>
            <Text type="sm">#A6A6A6</Text>
          </div>
          <div className="test-item">
            <div className="color-block bl">Черный</div>
            <Text type="sm">#000000</Text>
          </div>
          <div className="test-item">
            <div className="color-block bl-hover">Черный (hover)</div>
            <Text type="sm">#404040</Text>
          </div>
        </div>
      </div>

      <div className="test-section">
        <Text type="h2">Текстовые поля</Text>
        <div className="test-grid">
          <div className="test-item">
            <Text type="h3">Белые поля</Text>
            <div className="test-variants">
              <TextInput color="wh" label="Белое поле" />
              <TextInput color="wh" outline label="Белое поле (outline)" />
            </div>
          </div>
          <div className="test-item">
            <Text type="h3">Черные поля</Text>
            <div className="test-variants">
              <TextInput color="bl" label="Черное поле" />
              <TextInput color="bl" outline label="Черное поле (outline)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 