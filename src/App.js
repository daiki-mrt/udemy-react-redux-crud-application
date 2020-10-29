


function App() {  
  return (
    <>
      <p>Hello, World</p>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked!")}}/>
    </>
  );
}

export default App;
