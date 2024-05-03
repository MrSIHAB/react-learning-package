import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MemeCard = (profs) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem", marginTop: "20px", position: "relative" }}>
      <Card.Img variant="top" src={profs.img} />
      <Card.Body>
        <Card.Title style={{marginBottom: 50}}>{profs.name}</Card.Title>
        <Button
          onClick={(e) => navigate(`./edit?url=${profs.img}`)}
          variant="primary"
          className="taskBtn btn"
          style={{
            background: "#39a",
            color: "#dfd",
            position: "absolute",
            bottom: "10px",
            right: "15px",
            left: "15px"
          }}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
