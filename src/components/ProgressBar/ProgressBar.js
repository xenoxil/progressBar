import { useSelector } from 'react-redux';

function ProgressBar() {  
  
  const bars = useSelector((state) => state.bars);  
  const items = useSelector((state) => state.items);  
  
  return (
    <section className="progressBar">
      <div className="barContainer"> 
        {
        bars.map((item) => {
          return <div className="bar" style={{ backgroundColor: item.color }} key={item.id}></div>;
        })}
      </div>
      <ul className="progressBar__itemsContainer">
        {items.map((item) => {
          return (
            <li className="item" key={item.name}>
              <div className="item__colorCircle" style={{ backgroundColor: item.color }}></div>
              <p className="item__text">
                {item.name}: {item.value} ({item.percentage}%)
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProgressBar;
