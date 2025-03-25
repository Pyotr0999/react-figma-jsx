import blac from "./img/black.jpg"
import sliver from "./img/silver 1.jpg"
import purple from "./img/purple (1).jpg"
import gold from "./img/голд.jpg"
function Cards() {
  return (
    <div class="card_cont">
    <div class="card_parent">
        <div class="card_1">
        <div class="card">
            <div className="img_color">
        <img src={sliver}  />
                <h4>Sliver</h4>
                <p>Серебристый</p>
        </div>
        <div class="card">
        <div className="img_color">
        <img src={purple} />
                <h4>Deep purple</h4>
                <p>Темно фиолетовый</p>
        </div>
        </div>
     <div class="card_2">
        <div class="card">
        <div className="img_color">
        <img src={gold} />
                <h4>Gold</h4>
                <p>Золотой</p>
        </div>
        <div class="card">
        <div className="img_color">
        <img src={blac} />
                <h4>Space Black</h4>
                <p>Космический черный</p>
                                </div>
                        </div>
                </div>
        </div>
</div>
</div>
</div>
</div>

  );
}

export default Cards;
