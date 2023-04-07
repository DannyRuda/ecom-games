import "./DropdownOptions.scss";

export default function DropdownOptions(props:any) {

  const optionsClass = props.show ? "options show" : "options";

  return (
    <div className={optionsClass}>
      <p>Option one </p>
      <p>option 2 lol</p>
      <p>perhaps option 4</p>
      <p>no it was option 3</p>
    </div>
  );
}
