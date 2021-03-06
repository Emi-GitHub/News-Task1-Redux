import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTopHeadlines } from '../actions';
import SearchBarHome from './SearchBarHome';
import NewsList from './NewsList';
import ButtonBar from './ButtonBar';
import '../styles/Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.fetchTopHeadlines();
  }
  render() {
    return (
      <div className={this.props.loaded}>
        <div className={this.props.loading}>
          <div className={this.props.background}>
            <div className={this.props.forSearch}>
              <SearchBarHome />
            </div>
            <div className={this.props.forHeader}>
              <div className="transparent-div">
                <div className="header-top">Top headlines</div>
                <NewsList />
                <ButtonBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headlines: state.headlines,
  background: state.background,
  loaded: state.loaded,
  loading: state.loading,
  forSearch: state.forSearch,
  forHeader: state.forHeader,
});

Home.propTypes = {
  headlines: PropTypes.array,
  background: PropTypes.string,
  loaded: PropTypes.string,
  loading: PropTypes.string,
  forSearch: PropTypes.string,
  forHeader: PropTypes.string,
};

export default connect(
  mapStateToProps,
  { fetchTopHeadlines }
)(Home);
