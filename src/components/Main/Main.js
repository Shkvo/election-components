import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import * as votesActions from '../../redux/actions/votes';
import Chart from '../Chart';
import Select from '../Select';
import './Main.scss';

const cnMain = cn('Main');

class Main extends Component {
  state = {
    filter: 'All'
  };

  handleFilterChange = ({ target }) => {
    const { fetchVotes, fetchVotesByRegion } = this.props;
    const filter = target.value;

    if (filter === 'All') {
      fetchVotes();
    } else {
      fetchVotesByRegion(filter);
    }

    this.setState({ filter });
  };

  render() {
    const { labels, votesData, totalVotes, totalUsers, regions } = this.props;
    const { filter } = this.state;
    const options = [{ id: 'All', caption: 'All' }, ...regions];

    return (
      <div className={cnMain()}>
        <Paper className={cnMain('overall')}>
          <div className={cnMain('selectWrapper')}>
            <Typography variant="h5">
              Current results
            </Typography>
            <Select options={options} value={filter} onChange={this.handleFilterChange} />
          </div>
          <Chart
            type="bar"
            data={votesData}
            labels={labels}
            displayLegend={false}
          />
        </Paper>
        <Paper className={cnMain('vote')}>
          <Typography variant="h2">
            Didn't <br /> make a choice yet?
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
          <Typography variant="h5">
            Votes count
          </Typography>
          <Paper className={cnMain('card')}>
            <Typography variant="h1" className={cnMain('metric')}>
              {totalVotes}
            </Typography>
          </Paper>
          <br />
          <Typography variant="h5">
            Registered users
          </Typography>
          <Paper className={cnMain('card')}>
            {totalUsers && (
              <Typography variant="h2" className={cnMain('metric')}>
                {`${totalUsers}34324`}
              </Typography>
            )}
          </Paper>
        </Paper>
      </div>
        );
      }
    }

const mapStateToProps = state => ({
        votesData: state.votes.data,
        totalUsers: state.users.total,
        totalVotes: state.votes.total,
        labels: state.votes.labels,
        regions: state.regions.list,
      });

const mapDispatchToProps = {
          fetchVotes: votesActions.fetchVotes,
        fetchVotesByRegion: votesActions.fetchVotesByRegion
      };

      export default connect(
        mapStateToProps,
        mapDispatchToProps
)(Main);