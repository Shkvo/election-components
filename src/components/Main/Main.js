import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import Chart from '../Chart';
import './Main.scss';

const cnMain = cn('Main');

const Main = ({ labels, data }) => {
  return (
    <div className={cnMain()}>
      <Paper className={cnMain('overall')}>
        <Typography variant="subheading">
          Overall votes
        </Typography>
        <Chart
          type="bar"
          data={data}
          labels={labels}
          displayLegend={false}
        />
      </Paper>
      <Paper className={cnMain('regions')}>
        <Typography variant="subheading">
          Votes count by region
        </Typography>
        <Chart
          type="doughnut"
          data={data}
          labels={labels}
          legendPosition="right"
          displayLegend={true}
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
      <Paper className={cnMain('region')}>
        <Typography variant="subheading">
          Votes by region
        </Typography>
        <Chart
          type="line"
          data={data}
          labels={labels}
          displayLegend={false}
        />
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.votes.data,
  labels: state.votes.labels,
  regions: state.regions.list,
});

export default connect(
  mapStateToProps
)(Main);