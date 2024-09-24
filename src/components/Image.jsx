/* eslint-disable react/prop-types */
function Image({ urls, alt, links, user }) {
  return (
    <div>
      <img
        src={urls.regular}
        alt="Image"
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
}
export default Image;
