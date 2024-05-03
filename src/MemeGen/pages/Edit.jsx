import { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";
import Text from "../components/Text";

// import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState("text");

  const memeRef = createRef();

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div className="editContainer">
      <div
        className="meme"
        ref={memeRef}
        style={{ width: "fit-content", position: "relative"}}
      >
        <img
          src={params.get("url")}
          alt="Meme"
          style={{ maxWidth: "70vw", maxHeight: "70vh" }}
        />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text
              value={txt}
              onChange={(e) => {
                setTxt(e.target.value);
              }}
            />
          ))}
      </div>

      <div className="btns">
        <button
          className="btn taskBtn"
          onClick={addText}
          style={{ display: "inline", width: 200 }}
        >
          Add Text
        </button>
        <Button
          className="btn taskBtn"
          variant="success"
          style={{ display: "inline", width: 100, marginLeft: 10 }}
          onClick={async () => {
            exportComponentAsJPEG(memeRef);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
