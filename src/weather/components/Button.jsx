/* as it rendaring only a Button, it will not affact much in direct use. 
But we are creationg a new component for buttons for best practices */

const Button = (profs) => {
  return (
    <button className={`btn taskBtn ${profs.class}`} onClick={profs.onClick}>
      {profs.value}
    </button>
  );
};

export default Button;
