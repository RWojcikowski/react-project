/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Column.scss';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    name: PropTypes.string,
    cards: PropTypes.array,
  }
  haveCards = this.state.cards.length > 0

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title} <span className={styles.icon}><Icon name={this.props.icon} /></span></h3>
        {this.state.cards.map(({ key, ...cardProps }) => (
          <Card key={key} {...cardProps} />
        ))}

        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} haveCards={this.haveCards} />
      </section>
    );
  }
  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
          },
        ],
      }
    ));
  }
}
export default Column;