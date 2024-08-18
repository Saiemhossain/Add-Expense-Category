/* eslint-disable react/prop-types */
export default function ExpensList({ expenses, onDelete }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl text-primary">
              <th>Id</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <p>No Data Found</p>
            ) : (
              expenses.map(expense => (
                <tr key={expense.id}>
                  <th>{expense.id}</th>
                  <td> {expense.category} </td>
                  <td> {expense.description} </td>
                  <td> {expense.amount} </td>
                  <td>
                    {' '}
                    <button
                      className="btn btn-secondary"
                      onClick={() => onDelete(expense.id)}
                    >
                      Delete
                    </button>{' '}
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td className="text-2xl text-primary">Total</td>
              <td className="text-2xl text-primary">
                {expenses.reduce(
                  (pre, currValue) => pre + parseInt(currValue.amount),
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
