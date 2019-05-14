import React, { Component } from 'react';
import io from 'socket.io-client';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { cn } from '@bem-react/classname';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import * as votesActions from '../../redux/actions/votes';
import Chart from '../Chart';
import Select from '../Select';
import './Main.scss';

const cnMain = cn('Main');
const socket = io('http://localhost:5000');

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

  componentDidMount() {
    socket.on('overall', data => {
      this.props.updateVotes(data);
    });
  }

  render() {
    const { labels, votesData, totalVotes, totalUsers, regions, user } = this.props;
    const { filter } = this.state;
    const options = [{ id: 'All', caption: 'All' }, ...regions];
    const makeAChoiceLink = user.id !== undefined ? '/votes' : '/login';

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
          <Link to={makeAChoiceLink}>
            <Fab
              size="large"
              color="primary"
              variant="extended"
              className={cnMain('choiceButton')}
            >
              Make a choice
            </Fab>
          </Link>
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
  user: state.user,
  votesData: state.votes.data,
  totalUsers: state.users.total,
  totalVotes: state.votes.total,
  labels: state.votes.labels,
  regions: state.regions.list,
});

const mapDispatchToProps = {
  updateVotes: votesActions.updateVotes,
  fetchVotes: votesActions.fetchVotes,
  fetchVotesByRegion: votesActions.fetchVotesByRegion
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);