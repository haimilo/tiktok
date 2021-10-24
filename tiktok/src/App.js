/*
  Bài toán: Đếm số từ số 1
  Có 1 nút ấn nút thì số sẽ tăng dần lên ...
*/
import { useState } from 'react'

const costOfCourse = [100, 200, 300];

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard'
]

function App() {
  // InitialState được gán bằng callback
  /*
    * InitialState nếu được gán bằng callback 
    thì sẽ không dùng hàm callback làm hàm khởi tạo

    * Mà sẽ lấy giá trị return của 
    hàm callback đó ra làm giá trị khởi tạo
  */
  const [counter, setCounter] = useState(1)

  const handlerIncrease = () => {
    // setState (setCounter) với callback
    /*
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)
    Đối với trường hợp này sau khi gọi callback thì sẽ tăng lên 3 giá trị 1 lần
    Bởi vì React sẽ lên lịch trình cho tường giá trị preCounter được trả về trong
    callback và gán vào callback phía dưới
    */
    setCounter(counter + 1)
    // Khi gọi setCounter(counter + 1)
    // Thì dù gọi bnh lần đi nữa kết quả cũng chỉ tăng 1
  }

  const handlerDecrease = () => {
    setCounter(counter - 1)
  }

  const [cost, setCost] = useState(() => {
    const totalCost = costOfCourse.reduce((totalCost, cur) => totalCost + cur);

    console.log(totalCost);
    return totalCost;
  });

  const handlerUpdateUp = () => {
    setCost(cost + 100)
  };

  const handlerUpdateDown = () => {
    setCost(cost - 100)
  };

  // Ví dụ lấy phần thưởng 26_Two-way_Binding
  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index]);
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handlerIncrease}>Increase</button>
      <button onClick={handlerDecrease}>Decrease</button>
      <h2>{cost}</h2>
      <button onClick={handlerUpdateUp}>Update Up</button>
      <button onClick={handlerUpdateDown}>Update Down</button>
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift}>Lấy phần thưởng</button>
    </div>
  );
}

export default App;
