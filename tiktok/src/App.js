/*
  Bài toán: Đếm số từ số 1
  Có 1 nút ấn nút thì số sẽ tăng dần lên ...
*/
import { useState } from 'react'

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

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handlerIncrease}>Increase</button>
      <button onClick={handlerDecrease}>Decrease</button>
    </div>
  );
}

export default App;
