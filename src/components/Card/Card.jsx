import "./Card.css"

export default function Card(props) {
    const item = props.item;
    return <div className="card">
    <h2>{item.nome}</h2>
    <div className="card__tags">
      <span className="tag">Nome Cientifico: Melipona quadrifasciata</span>
    </div>
    <img src={item.imagemUrl}/>
  </div>
}