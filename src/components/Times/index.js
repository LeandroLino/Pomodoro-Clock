import Container from "./styles";

function Times({ setMinutes, canChangeTimes }) {
  return (
    <Container>
      <input
        type="number"
        placeholder="Focus"
        onChange={(e) => setMinutes(e.target.value)}
        disabled={canChangeTimes}
      ></input>
      <input
        type="number"
        placeholder="Pause"
        disabled={canChangeTimes}
      ></input>
    </Container>
  );
}

export default Times;
