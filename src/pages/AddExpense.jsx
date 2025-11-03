import React, { useEffect, useState } from "react";

function AddExpense() {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [rows, setRows] = useState([]);

  
  useEffect(() => {
    const expenseList = JSON.parse(localStorage.getItem("expenses")) || [];
    setRows(expenseList);
  }, []);

 
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(rows));
  }, [rows]);


  const handleSave = (e) => {
    e.preventDefault();
    if (!expenseName || !amount) {
      alert("Please fill all fields!");
      return;
    }

    const newExpense = {
      id: Date.now(),
      expenseName,
      amount: Number(amount),
    };

    setRows([...rows, newExpense]);
    setExpenseName("");
    setAmount("");
  };


  const handleDelete = (id) => {
    const filtered = rows.filter((item) => item.id !== id);
    setRows(filtered);
  };

  return (
    <div className='bg-black container' style={{ minHeight: "100vh" }}>
      <form className="bg-black d-flex justify-content-center flex-column p-5 m-5 text-warning">
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6 text-center border border-warning p-5 rounded-4">
            <h2 className="mb-2">Add Expense</h2>

            <div className="mb-3">
              <input
                type="text"
                className="w-100 p-2 rounded text-warning"
                placeholder="Expense name"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="w-100 p-2 rounded text-warning"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <button onClick={handleSave} className="btn btn-warning w-100">
              Save
            </button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </form>

     
      <div className="container text-warning">
        <table className="table table-dark table-bordered text-center">
          <thead>
            <tr >
              <th>Sl No.</th>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-warning">
                  No expenses added yet
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.expenseName}</td>
                  <td>₹{row.amount}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleDelete(row.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <h4 className="text-warning mt-3 text-end">
          Total Expense: ₹{rows.reduce((sum, r) => sum + r.amount, 0)}
        </h4>
      </div>
    </div>
  );
}

export default AddExpense;
