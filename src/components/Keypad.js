


const keypad = () => {
  const handlePasswordChange = () => console.log("Entering password...");
  return (
    <div>
      {" "}
      <input type="password" name="yo" onChange={handlePasswordChange} />{" "}
    </div>
  );
};

export default keypad
