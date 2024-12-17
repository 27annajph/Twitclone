const Tweet = ({ content }) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {content}
    </div>
  );
};

export default Tweet;
