import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import * as candidatesActions from '../../redux/actions/candidates';

import './Candidates.scss';

const cnCandidates = cn('Header');

const Candidates = (props) => {
  useEffect(() => {
    props.fetchCandidates();
  }, []);

  return (
    <div className={cnCandidates()}>
      Candidates
    </div>
  );
};

const mapStateToProps = state => ({
  candidates: state.candidates.list
});

const mapDispatchToProps = {
  fetchCandidates: candidatesActions.fetchCandidates
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candidates);
