import { useDispatch, useSelector } from 'react-redux';
import css from './Step.module.css';
import { setStep } from 'store/counter/actions';

// import { setStep } from 'store/store';

const Step = () => {
  const { step } = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.step;
    dispatch(setStep(Number(value)));
  };

  return (
    <form onSubmit={handleSubmit} className={css.form} role="search">
      <input
        className={css.input}
        type="number"
        name="step"
        placeholder="step"
        defaultValue={step}
      />
      <button className={css.btn} type="submit">
        Set Step
      </button>
    </form>
  );
};

export default Step;
