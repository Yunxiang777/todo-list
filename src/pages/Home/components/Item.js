const Item = ({ note, date, time, deleteData, id }) => {
  function deleteItme() {
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="item">
      <p>{note}</p>
      <p>{`${date} ${time}`}</p>
      <button className="remove" type="button" onClick={deleteItme}>
        刪除
      </button>
    </div>
  );
};

export default Item;
