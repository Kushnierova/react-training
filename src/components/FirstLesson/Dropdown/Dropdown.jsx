import { useState } from 'react';
import css from './Dropdown.module.css';

function Dropdown() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className={css.dropdown}>
      <button type="button" className={css.dropdown__toggle} onClick={toggle}>
        {visible ? 'Hide' : 'Show'}
      </button>

      {visible && <div className={css.dropdown__menu}>Menu</div>}
    </div>
  );
}

// class OldDropdown extends Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState(prevState => ({ visible: !prevState.visible }));
//   };

//   render() {
//     const { visible } = this.state;

//     return (
//       <div className={css.dropdown}>
//         <button
//           type="button"
//           className={css.dropdown__toggle}
//           onClick={this.toggle}
//         >
//           {visible ? 'Hide' : 'Show'}
//         </button>

//         {visible && <div className={css.dropdown__menu}>Menu</div>}
//       </div>
//     );
//   }
// }
export default Dropdown;
