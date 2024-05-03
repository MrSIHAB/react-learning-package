import Draggable from "react-draggable";

const Text = (profs) => {
  return (
    <Draggable>
      <h2
        onChange={profs.onChange}
        contentEditable="true"
        style={{
          color: "#000",
          backgroundColor: "whitesmoke",
          position: "absolute",
          right: "-20%",
          top: "50%",
        }}
      >
        {profs.value}
      </h2>
    </Draggable>
  );
};

export default Text;
