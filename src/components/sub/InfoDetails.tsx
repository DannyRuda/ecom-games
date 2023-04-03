import "./InfoDetails.scss";

export default function InfoDetails(props: any) {

    const status = props.show ? "show" : "noshow";

  return (
    <div className={'info-details ' + status }>
      <hr className="seperator"></hr>
      <div className="info-line">
        <h6 className="info-title">Release Date</h6>
        <h6 className="info-data">01.10.2021</h6>
      </div>
      <hr className="seperator"></hr>
      <div className="info-line">
        <h6 className="info-title">Genre</h6>
        <h6 className="info-data">Action, RPG, Shooter</h6>
      </div>
      <hr className="seperator"></hr>
    </div>
  );
}
