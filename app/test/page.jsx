import './page.scss';

export default function TestPage() {
  return (
    <main className="demo-page">
      <h1 className="t-h1 demo-title">Типографика</h1>
      
      <div className="demo-section">
        <h2 className="t-h2 demo-section-title">Заголовки</h2>
        <div className="demo-texts">
          <div className="demo-text-item">
            <h1 className="t-h1">Заголовок H1</h1>
            <span className="t-sm">$font-size-heading-1</span>
          </div>
          <div className="demo-text-item">
            <h2 className="t-h2">Заголовок H2</h2>
            <span className="t-sm">$font-size-heading-2</span>
          </div>
          <div className="demo-text-item">
            <h3 className="t-h3">Заголовок H3</h3>
            <span className="t-sm">$font-size-heading-3</span>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2 className="t-h2 demo-section-title">Текст</h2>
        <div className="demo-texts">
          <div className="demo-text-item">
            <p className="t-p">Обычный текст</p>
            <span className="t-sm">$font-size-paragraph</span>
          </div>
          <div className="demo-text-item">
            <p className="t-sm">Маленький текст</p>
            <span className="t-sm">$font-size-small</span>
          </div>
          <div className="demo-text-item">
            <p className="t-btn">Текст кнопки</p>
            <span className="t-sm">$font-size-button</span>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2 className="t-h2 demo-section-title">Цвета</h2>
        <div className="demo-colors">
          <div className="demo-colors-group">
            <h3 className="t-h3 demo-section-title">Основные цвета</h3>
            <div className="demo-colors-list">
              <div className="demo-color-item">
                <div className="demo-color-box ac"></div>
                <span className="t-sm">$ac</span>
              </div>
              <div className="demo-color-item">
                <div className="demo-color-box wh"></div>
                <span className="t-sm">$wh</span>
              </div>
              <div className="demo-color-item">
                <div className="demo-color-box bl"></div>
                <span className="t-sm">$bl</span>
              </div>
            </div>
          </div>

          <div className="demo-colors-group">
            <h3 className="t-h3 demo-section-title">Статусы</h3>
            <div className="demo-colors-list">
              <div className="demo-color-item">
                <div className="demo-color-box error"></div>
                <span className="t-sm">$error</span>
              </div>
              <div className="demo-color-item">
                <div className="demo-color-box warning"></div>
                <span className="t-sm">$warning</span>
              </div>
              <div className="demo-color-item">
                <div className="demo-color-box success"></div>
                <span className="t-sm">$success</span>
              </div>
              <div className="demo-color-item">
                <div className="demo-color-box info"></div>
                <span className="t-sm">$info</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 