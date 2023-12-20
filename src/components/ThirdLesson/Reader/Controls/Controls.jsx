import css from './Controls.module.css';

const Controls = ({onChange}) => {
  return (
    <section className={css.section}>
      <button type="button" className={css.btn} onClick={() => onChange(-1)}>
        Back
      </button>
      <button type="button" className={css.btn} onClick={() => onChange(+1)}>
        Next
      </button>
    </section>
  );
};

export default Controls;
