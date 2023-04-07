import "./DropdownOptions.scss";

export default function DropdownOptions(props: any) {
  const optionsClass = props.show ? "options show" : "options";

  function handleOptionClick(
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) {
    console.log("p clicked")
    const option = event.currentTarget.innerText;
    props.setValue(option);
    props.setShowOptions(false);
  }

  return (
    <div className={optionsClass}>
      <p onClick={handleOptionClick} >A - Z</p>
      <p onClick={handleOptionClick} >Z - A</p>
      <p onClick={handleOptionClick} >New Release</p>
      <p onClick={handleOptionClick} >Old Release</p>
      <p onClick={handleOptionClick} >Worst Rating</p>
      <p onClick={handleOptionClick} >Best Rating</p>
      <p onClick={handleOptionClick} >Liked</p>
    </div>
  );
}
