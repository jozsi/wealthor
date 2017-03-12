import React, { Component } from 'react';
import { connect } from 'react-redux';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Section from 'grommet/components/Section';
import Title from 'grommet/components/Title';
import Pulse from 'grommet/components/icons/Pulse';
import Logout from 'grommet/components/icons/base/Logout';
import { logout } from '../actions/user';
import { read, create } from '../actions/wallet';
import NoData from '../components/NoData';

class Home extends Component {
  componentDidMount() {
    this.props.readWallet();
  }

  render() {
    const { user, wallet, logoutUser, createWallet } = this.props;

    return (
      <Article>
        <Header fixed>
          <Title>
            {`Hello, ${user.firstName}!`}
          </Title>
          <Box
            flex
            justify="end"
            direction="row"
            responsive={false}
          >
            <Anchor
              onClick={logoutUser}
              icon={<Logout />}
              label="Sign out"
              reverse
              primary
            />
          </Box>
        </Header>
        <Section>
          <Box
            direction="row"
            justify="between"
          >
            <Heading>Wallets</Heading>
            <Anchor
              icon={<Pulse />}
              onClick={() => createWallet({
                name: `Random ${Date.now()}`,
                balance: Math.round(Math.random() * 1000),
              })}
            />
          </Box>
          if (wallet.length === 0) {
            <NoData />
          }
          <List selectable>
            {wallet.map(item => (
              <ListItem justify="between" key={item.id}>
                <span>{item.name}</span>
                <span className="secondary">{item.formattedBalance}</span>
              </ListItem>
            ))}
          </List>
        </Section>
      </Article>
    );
  }
}

Home.propTypes = {
  user: React.PropTypes.shape({
    firstName: React.PropTypes.string,
  }).isRequired,
  wallet: React.PropTypes.arrayOf(React.PropTypes.object),
  logoutUser: React.PropTypes.func.isRequired,
  readWallet: React.PropTypes.func.isRequired,
  createWallet: React.PropTypes.func.isRequired,
};

Home.defaultProps = {
  wallet: [],
};

const mapStateToProps = ({ user, wallet }) => ({
  user,
  wallet,
});

const mapDispatchToProps = {
  logoutUser: logout,
  readWallet: read,
  createWallet: create,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
