function Build() {
  const showAlert = () => {
    alert("Thank You! Your potato has been saved!");
  };

  return (
    <>
      <h2>Submit your recipes!</h2>
      <form>
        <input type="text" placeholder="Tater Name"></input>
        <input type="text" placeholder="Ingredients"></input>
        <input type="text" placeholder="Instructions"></input>
        <button type="submit" onClick={showAlert}>
          Submit
        </button>
      </form>
    </>
  );
}
export default Build;
