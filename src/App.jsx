import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
    <div class="header">
      <h4>calc</h4>

    </div>
    <div class="screen">
      <p>399,981</p>
    </div>
    <div class="footer">
      <div class="grup-one">
        <button><p>7</p></button>
        <button><p>8</p></button>
        <button><p>9</p></button>
        <button class="del-one"><p class="del">DEL</p></button>
      </div>
      <div class="grup-one">
        <button><p>4</p></button>
        <button><p>5</p></button>
        <button><p>6</p></button>
        <button><p>+</p></button>
      </div>
      <div class="grup-one">
        <button><p>1</p></button>
        <button><p>2</p></button>
        <button><p>3</p></button>
        <button><p>-</p></button>
      </div>
      <div class="grup-one">
        <button><p>.</p></button>
        <button><p>0</p></button>
        <button><p>/</p></button>
        <button><p>x</p></button>
      </div>
      <div class="grup-five">
        <button><p>RESET</p></button>
        <button><p>=</p></button>
      </div>
    </div>
  </div>
  )
}

export default App
