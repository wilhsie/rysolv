import React from 'react';
import T from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import ImportCompanyView from 'components/Companies/Add/ImportCompanyView';

import { incrementStep, inputChange, inputError } from '../actions';
import { validateInputs } from './helpers';
import { makeSelectCompanies } from '../selectors';

// eslint-disable-next-line react/prefer-stateless-function
export class ImportCompany extends React.PureComponent {
  render() {
    const {
      data,
      dispatchInputError,
      handleIncrementStep,
      handleInputChange,
    } = this.props;
    const handleSubmit = () => {
      const validationErrors = validateInputs({ data });
      dispatchInputError({ errors: validationErrors });
      if (Object.keys(validationErrors).every(err => !validationErrors[err])) {
        handleIncrementStep({ step: 3, view: 'addCompany' })
      }
    };
    return (
      <ImportCompanyView
        data={data}
        handleInputChange={handleInputChange}
        handleIncrementStep={handleIncrementStep}
        handleSubmit={handleSubmit}
      />
    );
  }
}

ImportCompany.propTypes = {
  data: T.object,
  dispatchInputError: T.func,
  handleIncrementStep: T.func,
  handleInputChange: T.func,
};

const mapStateToProps = createStructuredSelector({
  /**
   * Reducer : Companies
   */
  data: makeSelectCompanies('data'),
});

function mapDispatchToProps(dispatch) {
  return {
    /**
     * Reducer : Companies
     */
    dispatchInputError: payload => dispatch(inputError(payload)),
    handleIncrementStep: payload => dispatch(incrementStep(payload)),
    handleInputChange: payload => dispatch(inputChange(payload)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImportCompany);
