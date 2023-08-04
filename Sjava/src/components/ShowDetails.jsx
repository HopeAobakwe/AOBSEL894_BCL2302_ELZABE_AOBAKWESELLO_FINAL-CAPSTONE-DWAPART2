const ShowDetails = ({ showData }) => {
  return (
    <div className="show-data">
      <h2>Show Data</h2>
      <h3>{showData.title}</h3>
      <p>Description: {showData.description}</p>
      {/* Render additional data from the showData object as needed */}
    </div>
  );
};
export default ShowDetails;