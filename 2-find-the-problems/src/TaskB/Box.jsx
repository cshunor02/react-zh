export const Box = (props) => {

  return (
    <div
      style={{
        position: "absolute",
        top: `${props.y}px`,
        left: `${props.x}px`,
        backgroundColor: props.color,
        width: "100px",
        height: "100px",
      }}
    ></div>
  );
};
