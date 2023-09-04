import axios from "axios";

function App() {

  const onClickHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    axios.get('http://localhost:3000/', {
     withCredentials: true
    })
    .then(response => {
    console.log(response.data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
  };

  return (
    <div>
      <button onClick={onClickHandler}>GET</button>
    </div>
  )
}

export default App
