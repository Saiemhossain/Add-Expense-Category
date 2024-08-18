/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function ExpenseFilter({ onSelectedCategory }) {
  return (
    <div>
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={e => onSelectedCategory(e.target.value)}
        
      >
        <option value={''}>all</option>
        <option value={'tour'}>tour</option>
        <option value={'utility bill'}>utility bill</option>
        <option value={'personal expense'}>personal expense</option>
        
      </select>
    </div>
  );
}
