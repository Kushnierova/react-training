import { useState, useEffect } from 'react';
import Controls from './Controls';
import Progress from './Progress';
import Publication from './Publication/Publication';

const LS_KEY = 'reader_item_index';

function Reader({ items }) {
  const [index, setIndex] = useState(0);
  const totalItems = items.length;
  const currentItem = items[index];

  const changeIndex = value => {
    setIndex(index => index + value);
  };

  useEffect(() => {
    const savedState = Number(localStorage.setItem(LS_KEY, index));
    if (savedState) {
      setIndex(savedState);
    }
    console.log(index);
  }, [index, items]);

  return (
    <div>
      <Controls onChange={changeIndex} current={index + 1} total={totalItems} />
      <Progress current={index + 1} total={totalItems} />
      <Publication item={currentItem} />
    </div>
  );
}

// class Reader extends Component {
//   state = {
//     index: 0,
//   };

//   // Тут я придумую як переключати сторынки так щоб пысля 12 йшла 1, а до 1 йшла 12
//   //   checkChangeIndex = value => {
//   //     const index = this.state.index;
//   //     const totalItems = this.props.items.length;
//   //     // console.log(index)
//   //     // console.log(totalItems);
//   //     {
//   //       index > totalItems || index < 0
//   //         ? this.setState({ [index]: totalItems })
//   //         : this.setState(state => ({ index: state.index + value }));
//   //     }
//   //     //     if (index < totalItems || index > 0) {
//   //     //       this.setState(state => ({ index: state.index + value }));
//   //     //     }
//   //     //     // else if (index > totalItems) {
//   //     //     //   this.setState({ index: '0' });
//   //     //     // }
//   //     //     else {
//   //     //       this.setState({ index : totalItems });
//   //     //     }
//   //   };

//   changeIndex = value => {
//     this.setState(state => ({ index: state.index + value }));
//   };

//   //   Якщо людина перший раз заходить на сайт,і в LocalStorage нічого немає(null) тоді впаде сайт,
//   //  щоб цього не сталось ми робимо наступне
//   componentDidMount() {
//     // console.log(localStorage.getItem(LS_KEY));
//     const savedState = localStorage.getItem(LS_KEY);
//     // if(savedState:true) null=false
//     if (savedState) {
//       this.setState({ index: Number(savedState) });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.index !== this.state.index) {
//       localStorage.setItem(LS_KEY, this.state.index);
//     }
//   }

//   render() {
//     // console.log(this.props.items[this.state.index]);
//     const { index } = this.state;
//     const { items } = this.props;
//     const totalItems = items.length;
//     const currentItem = items[index];
//     return (
//       <div>
//         <Controls
//           onChange={this.changeIndex}
//           current={index + 1}
//           total={totalItems}
//         />
//         <Progress current={index + 1} total={totalItems} />
//         <Publication item={currentItem} />
//       </div>
//     );
//   }
// }

export default Reader;
