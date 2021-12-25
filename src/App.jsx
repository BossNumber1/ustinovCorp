import "./App.css"

function App() {
  return (
    <div className="App">

      <div className="intro">

        <div className="intro__inner">
          <div className="intro__blocks">
            <div className="intro__block middle">
                <a href="ya.ru">Поэт</a>
            </div>
            <div className="intro__block">
                <a href="ya.ru">Игры</a>
            </div>
            <div className="intro__block middle">
                <a href="ya.ru">Соц. Сеть</a>
            </div>
          </div>

          <h1 className="intro__title">Ustinov Corp</h1>

          <div className="intro__blocks">
            <div className="intro__block">
                <a href="ya.ru">Bookmen</a>
            </div>
            <div className="intro__block middle">
                <a href="ya.ru">ПП</a>
            </div>
            <div className="intro__block">
                <a href="ya.ru">Сайтодел</a>
            </div>
          </div>
        </div>

      </div>

      <div className="description">

        <div className="container">
          <p className="description__text">Ustinov Corp - это объединение онлайн-продуктов, меняющих мир...</p>

          <div className="images">
            <div className="image__block">
              <img src="https://i.artfile.ru/2560x1600_486677_[www.ArtFile.ru].jpg" alt="" className="image" />
              <img src="https://w-dog.ru/wallpapers/2/91/506744381780451/oblaka-alpy-priroda-les-cvety-nebo-gory-oduvanchiki.jpg" alt="" className="image" />
              <img src="https://s1.1zoom.ru/big3/53/378799-svetik.jpg" alt="" className="image" />
            </div>  
            <div className="image__block">
              <img src="https://w-dog.ru/wallpapers/9/15/458745441613494/vajoming-ssha-grand-teton-nacionalnyj-park-snejk-river-grand-titon-nacionalnyj-park-zakat-oblaka-vecher-gory-pole-cvety-zelen-les-derevya-sosny.jpg" alt="" className="image" />
              <img src="https://www.culture.ru/storage/images/5e56edcf7973c42673e142734d44fb07/7585f5010a800f4697d28b13237212d3.jpeg" alt="" className="image" />
              <img src="https://img.fonwall.ru/o/33/goryi-sneg-derevya-polyana.jpg?route=mid&amp;h=750" alt="" className="image" />
            </div> 
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
