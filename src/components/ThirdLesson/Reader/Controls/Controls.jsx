import css from './Controls.module.css';

const Controls = ({ current, total, onChange }) => {
  return (
    <section className={css.section}>
      <button
        type="button"
        // disabled={current === 1}
        className={css.btn}
        onClick={() => onChange(-1)}
      >
        Back
      </button>
      <button
        type="button"
        // disabled={current === total}
        className={css.btn}
        onClick={() => onChange(+1)}
      >
        Next
      </button>
    </section>
  );
};

export default Controls;
