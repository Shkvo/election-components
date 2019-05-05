import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import Chart from '../Chart';
import './Main.scss';

const cnMain = cn('Main');

const Main = ({ labels, data, total }) => {
  return (
    <div className={cnMain()}>
      <Paper className={cnMain('overall')}>
        <Typography variant="subheading">
          Current results
        </Typography>
        <Chart
          type="bar"
          data={data}
          labels={labels}
          displayLegend={false}
        />
      </Paper>
      <Paper className={cnMain('vote')}>
        <Typography variant="h5">
          Didn't make a choice yet?
        </Typography>
        <Fab
          size="large"
          color="primary"
          variant="extended"
          className={cnMain('choiceButton')}
        >
          Make a choice
        </Fab>
      </Paper>
      <Paper className={cnMain('votesCount')}>
        <Typography variant="subheading">
          Votes count
        </Typography>
        <Paper className={cnMain('card')}>
          <Typography variant="h1" className={cnMain('metric')}>
            {total}
          </Typography>
        </Paper>
        <br/>
        <Typography variant="subheading">
          Registered users
        </Typography>
        <Paper className={cnMain('card')}>
          <Typography variant="h2" className={cnMain('metric')}>
            10234
          </Typography>
        </Paper>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.votes.data,
  total: state.votes.total,
  labels: state.votes.labels,
  regions: state.regions.list,
});

export default connect(
  mapStateToProps
)(Main);