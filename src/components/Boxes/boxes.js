import { useState } from "react";

const Boxes = () => {
  const [color1, setColor1] = useState("white");
  const [color2, setColor2] = useState("white");
  const [color3, setColor3] = useState("white");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [isShowBox1, setIsShowBox1] = useState(false);
  const [isShowBox2, setIsShowBox2] = useState(false);
  const [isShowBox3, setIsShowBox3] = useState(false);
  const [addRemoveButton1, setAddRemoveButton1] = useState(true);
  const [addRemoveButton2, setAddRemoveButton2] = useState(true);
  const [addRemoveButton3, setAddRemoveButton3] = useState(true);

  const addBox1 = () => {
    if (isShowBox1) {
      return setIsShowBox1(false), setAddRemoveButton1(true);
    } else {
      return setIsShowBox1(true), setAddRemoveButton1(false);
    }
  };
  const addBox2 = () => {
    if (isShowBox2) {
      return setIsShowBox2(false), setAddRemoveButton2(true);
    } else {
      return setIsShowBox2(true), setAddRemoveButton2(false);
    }
  };
  const addBox3 = () => {
    if (isShowBox3) {
      return setIsShowBox3(false), setAddRemoveButton3(true);
    } else {
      return setIsShowBox3(true), setAddRemoveButton3(false);
    }
  };

  const changeBoxColor = (count, b) => {
    const arrayOfColors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "purple",
      "pink",
    ];

    if (count === arrayOfColors.length) {
      switch (b) {
        case 1:
          setColor1(arrayOfColors[count]);
          setCounter1(0);
          break;
        case 2:
          setColor2(arrayOfColors[count]);
          setCounter2(0);
          break;
        default:
          setColor3(arrayOfColors[count]);
          setCounter3(0);
      }
    } else {
      switch (b) {
        case 1:
          setColor1(arrayOfColors[count]);
          break;
        case 2:
          setColor2(arrayOfColors[count]);
          break;
        default:
          setColor3(arrayOfColors[count]);
      }
    }

    return;
  };

  const onClickBoxOne = () => {
    let b1 = 1;
    setCounter1(counter1 + 1);
    return changeBoxColor(counter1, b1);
  };
  const onClickBoxTwo = () => {
    let b2 = 2;
    setCounter2(counter2 + 1);
    changeBoxColor(counter2, b2);
    return;
  };
  const onClickBoxThree = () => {
    let b3 = 3;
    setCounter3(counter3 + 1);
    changeBoxColor(counter3, b3);
    return;
  };

  return (
    <>
      <button
        onClick={addBox1}
        style={{
          marginBottom: "1rem",
          marginTop: "2rem",
          width: "8rem",
          height: "2rem",
        }}
      >
        {addRemoveButton1 ? "Add Box1" : "Remove Box1"}
      </button>
      {isShowBox1 ? (
        <div
          onClick={onClickBoxOne}
          style={{
            backgroundColor: color1,
            color: "black",
            fontSize: "2rem",
            border: "1px solid black",
            width: "8rem",
            height: "8rem",
            margin: "auto",
            padding: "2rem",
          }}
        >
          {color1}
        </div>
      ) : null}
      <button
        onClick={addBox2}
        style={{
          marginBottom: "1rem",
          marginTop: "2rem",
          width: "8rem",
          height: "2rem",
        }}
      >
        {addRemoveButton2 ? "Add Box2" : "Remove Box2"}
      </button>
      {isShowBox2 ? (
        <div
          onClick={onClickBoxTwo}
          style={{
            backgroundColor: color2,
            color: "black",
            fontSize: "2rem",
            border: "1px solid black",
            width: "8rem",
            height: "8rem",
            margin: "auto",
            padding: "2rem",
          }}
        >
          {color2}
        </div>
      ) : null}
      <button
        onClick={addBox3}
        style={{
          marginBottom: "1rem",
          marginTop: "2rem",
          width: "8rem",
          height: "2rem",
        }}
      >
        {addRemoveButton3 ? "Add Box3" : "Remove Box3"}
      </button>
      {isShowBox3 ? (
        <div
          onClick={onClickBoxThree}
          style={{
            backgroundColor: color3,
            color: "black",
            fontSize: "2rem",
            border: "1px solid black",
            width: "8rem",
            height: "8rem",
            margin: "auto",
            padding: "2rem",
          }}
        >
          {color3}
        </div>
      ) : null}
    </>
  );
};

export default Boxes;
