
function SubDetailList() {
  return (
    <div>
      {[...Array(20)].map((_, i) => (
        <div key={i} className="mb-4 p-4 bg-gray-800 rounded text-white">
          Scrollable content {i + 1}
        </div>
      ))}
    </div>
  );
}

export default SubDetailList;
