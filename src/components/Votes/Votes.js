import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as votesActions from '../../redux/actions/votes';
import * as candidatesActions from '../../redux/actions/candidates';
import VoteDialog from '../VoteDialog';

import './Votes.scss';

const cnVotes = cn('Votes');

const Votes = props => {
  const [selectedCandidate, setSelectedCandidate] = useState({});
  const [isVoteDialogOpen, setIsVoteDialogOpen] = useState(false);

  const handleOpenVoteDialog = useCallback(() => setIsVoteDialogOpen(true));

  const handleCloseVoteDialog = useCallback(() => setIsVoteDialogOpen(false));

  const handleSelectCandidate = useCallback(event =>
    setSelectedCandidate(event.target.value)
  );

  const handleConfirmVote = () => {
    const vote = {
      candidateId: selectedCandidate,
      userId: 6,
      regionId: 1
    };
    props.createVote(vote);
    setIsVoteDialogOpen(false);
    setSelectedCandidate({});
  };

  useEffect(() => {
    props.fetchCandidates();
  }, []);

  const candidates = props.candidates.map(candidate => {
    const candidateName = `${candidate.lastName} ${candidate.firstName} ${
      candidate.thirdName
    }`;

    return (
      <Paper key={candidateName} className={cnVotes('candidate')}>
        <FormControlLabel
          value={String(candidate.id)}
          control={
            <Radio
              icon={<Icon fontSize="large">check_box_outline_blank</Icon>}
              color="primary"
              checkedIcon={<Icon fontSize="large">check_box</Icon>}
            />
          }
        />
        <div>
          <Typography className={cnVotes('name')} variant="h6">
            {candidateName}
          </Typography>
          <Typography className={cnVotes('description')} variant="body1">
            {candidate.description}
          </Typography>
        </div>
      </Paper>
    );
  });

  return (
    <Paper className={cnVotes()}>
      <VoteDialog
        open={isVoteDialogOpen}
        candidate={selectedCandidate}
        handleClose={handleCloseVoteDialog}
        handleConfirm={handleConfirmVote}
      />
      <Typography className={cnVotes('header')} variant="h4">
        Select one of the candidates
      </Typography>
      <FormControl className={cnVotes('candidates')}>
        <RadioGroup
          value={String(selectedCandidate)}
          onChange={handleSelectCandidate}
        >
          {candidates}
        </RadioGroup>
      </FormControl>
      <div className={cnVotes('buttons')}>
        <Fab
          size="large"
          color="primary"
          variant="extended"
          onClick={handleOpenVoteDialog}
          className={cnVotes('confirm')}
        >
          <DoneIcon className={cnVotes('done')} />
          Make a choice
        </Fab>
      </div>
    </Paper>
  );
};

const mapStateToProps = state => ({
  candidates: state.candidates.list
});

const mapDispatchToProps = {
  fetchCandidates: candidatesActions.fetchCandidates,
  createVote: votesActions.createVote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Votes);
