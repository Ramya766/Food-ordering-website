const AccordianBody = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div>
            <span>{item.card.info.name}</span>
            <span>{item.card.info.price / 10}</span>
          </div>
          <p>{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};
export default AccordianBody;
