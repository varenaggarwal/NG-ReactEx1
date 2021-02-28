export default function Toast(props) {
  console.log(props.onClick);
  return (
    <div>
      <h3>Warning! slow down</h3>
      <button onClick={() => props.onClick(false)}>Hide</button>
    </div>
  );
}
