import { useDispatch, useSelector } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";
const Home = () => {
  const dispatch = useDispatch();

  const number = useSelector((state) => state);

  const handleAdd = () => {
    dispatch(addNumber(1));
  };

  const handleSub = () => {
    dispatch(subNumber(1));
  };

  return (
    <div>
      <div>contador: {number.counter}</div>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  );
};

export default Home;
