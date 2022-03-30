function Time({ time }) {
  return <>{String(time).padStart(2, "0")}</>;
}

export default Time;
