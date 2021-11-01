import "./style.css";
function CenteredCard({ children }) {
  return (
    <div className="con">
      <span>{children}</span>
    </div>
  );
}

export default CenteredCard;
