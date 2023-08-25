import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./step4.css";
const Step4 = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Double Bubble Outline Pattern" to the project
  }, []);

  return (
    <div className="step-4">
      <div className="union">
        <div className="union-child" />
        <div className="union-item" />
        <div className="union-inner" />
        <div className="ellipse-div" />
        <div className="union-child1" />
        <img className="ellipse-icon" alt="" src="/ellipse-50@2x.png" />
      </div>
      <div className="just-look-for">
        Just look for these traffic lights, each one of them is a step.
      </div>
      <Button className="button" variant="primary" onClick={onButtonClick}>
        Next
      </Button>
      <img className="group-icon" alt="" src="/group.svg" />
      <img className="frame-icon" alt="" src="/frame.svg" />
    </div>
  );
};

export default Step4;
