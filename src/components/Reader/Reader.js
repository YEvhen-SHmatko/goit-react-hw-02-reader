import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';

export default class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  handleOnPrevClick = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - 1,
    }));
  };

  handleOnNextClick = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const prevBtnDisabled = publicationIndex <= 0;
    const nextBtnDisabled = publicationIndex + 1 === items.length;
    return (
      <>
        <Controls
          onPrevClick={this.handleOnPrevClick}
          onNextClick={this.handleOnNextClick}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
        />
        <Progress
          currentPage={publicationIndex + 1}
          totalPages={items.length}
        />
        <Publication
          currentPage={publicationIndex + 1}
          id={items[publicationIndex].id}
          title={items[publicationIndex].title}
          text={items[publicationIndex].text}
        />
      </>
    );
  }
}
