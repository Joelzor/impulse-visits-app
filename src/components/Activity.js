const Activity = ({ name, kinds }) => {
  // Splitting string into an array then replacing underscores with space
  const tags = kinds.split(",");
  const tagsFixed = tags.map((tag) => {
    return tag.replaceAll("_", " ");
  });

  return (
    <li className="activity-item">
      <h3>{`${name.substring(0, 50)}...`}</h3>
      <p className="tags">
        <span className="tag">{tagsFixed[0]}</span> -{" "}
        <span className="tag">{tagsFixed[1]} </span> -{" "}
        <span className="tag">{tagsFixed[2]}</span>
      </p>
    </li>
  );
};

export default Activity;