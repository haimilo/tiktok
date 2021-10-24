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

  // Ví dụ về two way binding của text
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handlerSubmit = () => {
    console.log({
      name,
      email
    })
  }

  // Ví dụ về two way binding của radio
  const [checked, setChecked] = useState();

  const courses = [
    {
      id: 1,
      name: 'Javascript'
    },
    {
      id: 2,
      name: 'HTML, CSS'
    },
    {
      id: 3,
      name: 'ReactJS'
    }
  ]

  const handlerSubmitCourse = () => {
    console.log({ id: checked })
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      {/* Ví dụ về two-way Binding của text */}
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit" onClick={handlerSubmit}>Register</button>

      {/* Ví dụ về two-way Binding của radio */}
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="radio"
            onChange={() => setChecked(course.id)}
            checked={checked === course.id}
          />
          {course.name}
        </div>
      ))}

      {/* Ví dụ về two-way Binding của checkbox */}
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="checkbox"
          />
          {course.name}
        </div>
      ))}
      <button onClick={handlerSubmitCourse}>Đăng ký khoá học</button>
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
