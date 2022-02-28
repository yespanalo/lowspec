import "./ItemLogo.css";
function ItemLogo(props) {
  return (
    <div className="item-logo">
      <a href={props.direct}>
        <div>
          <img src={props.link} alt="" />
          <p>{props.title}</p>
        </div>
      </a>
    </div>
  );
}
export default ItemLogo;
