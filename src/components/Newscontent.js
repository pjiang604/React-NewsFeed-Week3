export default function NewsContent(props) {
  let image;

  if (!props.image) {
    image = "https://randomuser.me/api/portraits/men/7.jpg";
  } else {
    image = props.image;
  }

  function handleDelete(e) {
    const button = e.target;

    if (button == "[object HTMLSpanElement]" && button.textContent === "X") {
      return e.currentTarget.remove();
    }
  }

  return (
    <div className="news-content-container" onClick={handleDelete}>
      <div className="img-col">
        <a href={props.link}>
          <img src={image} alt="" />
        </a>
      </div>
      <div className="content-col">
        <a className="article-link" href={props.link}>
          <p className="article-title">{props.title}</p>
        </a>
        <p className="author">Written by: {props.author}</p>
        <p className="article-content">
          {props.content}{" "}
          <i>
            <a className="article-link" href={props.link}>
              Read More.
            </a>
          </i>
        </p>
      </div>
      <span className="deleteButton">X</span>
    </div>
  );
}
