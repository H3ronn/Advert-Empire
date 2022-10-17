import Item from './Item';
import { items as itemsData } from '../../data/items';

const Items = () => {
  return (
    <ul className="wrapper">
      {itemsData.map((item) => (
        <Item key={item.id} />
      ))}
    </ul>
  );
};

export default Items;
