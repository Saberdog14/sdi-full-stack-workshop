import Potato from "../Images/Potato.jpg";

function Build() {
  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <h2> Choose a link to see recipes or build your own tater!</h2>
        <img src={Potato} alt="Baked Potato" width="400" />
      </div>
    </>
  );
}
export default Build;
