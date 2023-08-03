import "./styles.css";

function LunchProject() {
  const loading = false;
  const name = "Avtar Surothiya";
  const currentDate = new Date();
  const currentTime = currentDate.getHours();
  if (currentTime < 12 && currentTime >= 4) {
    return <BreakFast />;
    s;
  }
  if (currentTime >= 12 && currentTime < 18) {
    return <Lunch />;
  }
  return <Dinner />;
}

export function BreakFast() {
  return (
    <div id="breakfast">
      <h1>BreakFast Time</h1>
    </div>
  );
}
export function Lunch() {
  return (
    <div id="lunch">
      <h1>Lunch Time</h1>
    </div>
  );
}
export function Dinner() {
  return (
    <div id="dinner">
      <h1>Dinner Time</h1>
    </div>
  );
}
export default LunchProject;
