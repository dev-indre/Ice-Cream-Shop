export default function Button({ background, children, onClick }) {
  return (
    <button className="btn" style={{ background }} onClick={onClick}>
      {children}
    </button>
  );
}
