import axios from "axios";

function App() {
  const onClickHandler = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:3000/", {
        withCredentials: true,
      })
      .then((response) => {
        const cookies = response.headers.get("Set-Cookie");
        console.log(cookies);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const sendAsFetch = (event) => {
    fetch("http://localhost:3000/", {
      method: "GET",
      //credentials: "include",
    });
  };

  return (
    <div>
      <button onClick={onClickHandler}>Axios</button>
      <button onClick={sendAsFetch}>Fetch</button>
    </div>
  );
}

export default App;
