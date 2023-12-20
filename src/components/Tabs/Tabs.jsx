import React, { PureComponent } from 'react';
import css from './Tabs.module.css';

class Tabs extends PureComponent {
  state = {
    activeTabId: 0,
  };

// // Метод для того щоб не перерендювалось те що вже є зарендереним!!!! PureComponent вже робить це сам!!!!
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextState.activeTabId !== this.state.activeTabId;
//   }

  setActiveTabId = idx => {
    this.setState({ activeTabId: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabId } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabId];

    return (
      <div className={css.container}>
        <div className={css.items}>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabId(idx)}
              className={css.item}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className={css.content}>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </div>
    );
  }
}

export default Tabs;
