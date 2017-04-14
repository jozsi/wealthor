import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import Animate from 'grommet/components/Animate';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';
import Quote from 'grommet/components/Quote';
import TextInput from 'grommet/components/TextInput';
import Table from '../components/Table';
import currencyValue from '../../isomorphic/currencyValue';
import { simulate } from '../actions/simulation';

class Simulation extends Component {
  state = {
    advancedDrawerOpen: false,
  };

  SIMULATION_TABLE = new Map([
    ['Date', row => moment(row.date).format('L')],
    ['Invested', row => currencyValue(row.invested, 'USD')],
    ['Value', row => currencyValue(row.value, 'USD')],
    ['Growth', row => <NumberFormat value={row.growth} displayType={'text'} thousandSeparator suffix={'%'} decimalPrecision />],
  ]);

  toggleAdvanced = () => this.setState({ advancedDrawerOpen: !this.state.advancedDrawerOpen });

  render() {
    const { rows } = this.props;
    const { advancedDrawerOpen } = this.state;

    return (
      <Box>
        <Box
          direction="row"
          justify="between"
          align="center"
        >
          <Heading>Financial Growth Simulation</Heading>
        </Box>
        <Box
          direction="row"
          justify="between"
          align="center"
        >
          <Form>
            <TextInput id="monthly" placeHolder="Monthly Installment" />
            <TextInput id="duration" placeHolder="Duration in years" />
            <TextInput id="interest" placeHolder="Yearly interest" />
            <TextInput id="tax" placeHolder="Bank tax" />
            <Button
              label="Simulate"
              secondary
              onClick={(event) => this.props.simulate({})}
            />
          </Form>
        </Box>
        <Animate
          enter={{ animation: 'slide-down', duration: 300 }}
          visible={advancedDrawerOpen}
        >
          <Quote borderColorIndex="neutral-4" size="full" align="center">
          </Quote>
        </Animate>
        <Table
          rows={rows}
          columns={this.SIMULATION_TABLE}
        />
      </Box>
    );
  }
}

const mapStateToProps = ({ simulation }) => ({
  rows: simulation,
});

const mapDispatchToProps = {
  simulate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Simulation);
