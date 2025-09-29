import { Link } from 'react-router'
import '../../index.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          Ласкаво просимо до <span className="brand-name">TechShop</span>
        </h1>
        <p className="hero-subtitle">Ваш надійний партнер у світі комп'ютерної техніки та інновацій</p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛍️</div>
            <h3>Широкий асортимент</h3>
            <p>Понад 50 найменувань комп'ютерної техніки від провідних брендів</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3>Якість гарантована</h3>
            <p>Тільки сертифікована техніка з офіційною гарантією</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Швидка доставка</h3>
            <p>Безкоштовна доставка по Україні від 1000 грн</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Технічна підтримка</h3>
            <p>Професійна консультація та післяпродажне обслуговування</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Готові розпочати покупки?</h2>
          <Link to="/products" className="cta-button">
            Переглянути каталог товарів
          </Link>
        </div>

        <div className="categories-preview">
          <h2>Наші категорії</h2>
          <div className="categories-list">
            <div className="category-item">💻 Ноутбуки</div>
            <div className="category-item">🖥️ Комп'ютери</div>
            <div className="category-item">📺 Монітори</div>
            <div className="category-item">⌨️ Клавіатури</div>
            <div className="category-item">🖱️ Миші</div>
            <div className="category-item">🔊 Акустика</div>
            <div className="category-item">🎧 Навушники</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
