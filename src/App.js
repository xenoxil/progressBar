import { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import utils from './utils/utils';

function App() {
  const totalItems = 1225;
  const dispatch = useDispatch();

  const addBars = (item) => {
    dispatch({ type: 'ADD_BARS', payload: item });
  };

  const calculateFreePercentages = () => {
    dispatch({ type: 'CALCULATE_FREE_PERCENTAGES', payload: '' });
  };

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const setTotal = (total) => {
    dispatch({ type: 'SET_TOTAL', payload: total });
  };

  useEffect(() => {
    const barsArr = [];
    let free = totalItems;
    setTotal(totalItems);
    utils.forEach((item) => {
      free -= item.value;
      item.percentage = ((item.value / totalItems) * 100).toFixed(2);
      item.barsAmount = Math.floor(item.percentage) >= 1 && item.value !== 0 ? Math.floor(item.percentage) : 1;
      addItem(item);
      if (item.value !== 0) {
        for (let i = 0; i < item.barsAmount; i++) {
          barsArr.push({ color: item.color, id: barsArr.length });
        }
      }
    });
    calculateFreePercentages();
    addItem({
      name: 'Free float',
      value: free,
      color: '#808080',
      percentage: ((free / totalItems) * 100).toFixed(2),
    });
    for (let b = barsArr.length - 1; b < 99; b++) {
      barsArr.push({ color: '#808080', id: barsArr.length });
    }
    addBars(barsArr);
  }, []);

  return (
    <div className="App">
      <ProgressBar />
    </div>
  );
}

export default App;
