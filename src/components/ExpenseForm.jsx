/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
export default function ExpenseForm({onSubmit}) {
  const categories = ["tour", "utiltiy bill", "personal expense"];
 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm();
  //  const onSubmit = data => console.log(data);
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">ADD Expense📃</h2>
      </div>
      <form action="" className="mb-8" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered input-primary w-full max-w-xs mb-3"
          {...register('description', {
            required: true,
            minLength: 3,
            maxLength: 15,
          })}
        />
        <br />
        {errors.description?.type === 'required' && (
          <span className="text-red-600">This field is required</span>
        )}
        {errors.description?.type === 'minLength' && (
          <span className="text-red-600">
            This word must be more than 3 letters{' '}
          </span>
        )}
        {errors.description?.type === 'maxLength' && (
          <span className="text-red-600">
            This word should not be more than 15 letters{' '}
          </span>
        )}

        <input
          type="number"
          placeholder="Amount"
          className="input input-bordered input-primary w-full max-w-xs flex gap-6 mx-auto mb-3 mt-4"
          {...register('amount', {
            required: true,
            maxLength: 8,
          })}
        />
        {errors.amount?.type === 'required' && (
          <span className="text-red-600">This field is required</span>
        )}

        {errors.amount?.type === 'maxLength' && (
          <span className="text-red-600">
            This word should not be more than 8 letters{' '}
          </span>
        )}
        <br />

        <label htmlFor="category" className="mt-10 text-2xl font-bold">
          Choose Category
        </label>
        <select
          className="select select-bordered w-full max-w-xs flex flex-col mx-auto mt-5 select-secondary"
          {...register('category', {}
          )}
        >
          {categories.map(category => (
            <option value={category} key={category}>
              {' '}
              {category}{' '}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value={'Add Expense'}
          className="btn btn-primary mt-6 p-4 text-[20px]"
        />
      </form>
      <hr className="mb-5" />
    </>
  );
}
