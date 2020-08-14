import React, { useEffect } from 'react';
import T from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { PrimaryAsyncButton } from 'components/base_ui';
import VerifyForm from 'components/Issues/Add/Verify';

import { clearForm, incrementStep, saveInfo, verifyInfo } from '../actions';
import { makeSelectIssues, makeSelectIssuesRequestBody } from '../selectors';
import {
  BackLink,
  ButtonGroup,
  LogoContainer,
  OrganizationNameWrapper,
  SelectedOrganization,
  StyledFocusDiv,
  StyledH3,
  StyledLink,
  VerifyWrapper,
} from './styledComponents';

const VerifyIssue = ({
  activeUser,
  dispatchClearForm,
  dispatchIncrementStep,
  dispatchSaveInfo,
  importSuccess,
  issueData,
  organizationData,
  requestBody,
}) => {
  useEffect(() => document.getElementById('issue-add').focus(), []);

  const handleKeypress = e => {
    if (e.which === 13) {
      handleSaveInfo();
    }
  };
  const handleSaveInfo = () => {
    dispatchSaveInfo({ requestBody, activeUser });
  };
  const cancelImport = () => {
    dispatchClearForm();
    dispatchIncrementStep({ step: 1, view: 'addIssue' });
  };
  return (
    <StyledFocusDiv
      id="issue-add"
      onKeyPress={e => handleKeypress(e)}
      tabIndex="0"
    >
      <StyledH3>Organization</StyledH3>
      <VerifyWrapper>
        <LogoContainer
          alt={organizationData.organizationName.value}
          src={organizationData.organizationLogo.value}
        />
        <OrganizationNameWrapper>
          <SelectedOrganization>
            {organizationData.organizationName.value}
          </SelectedOrganization>
          <StyledLink
            href={organizationData.organizationRepo.value}
            target="_blank"
          >
            {organizationData.organizationRepo.value}
          </StyledLink>
        </OrganizationNameWrapper>
      </VerifyWrapper>
      <StyledH3>Issue</StyledH3>
      <VerifyWrapper>
        <VerifyForm activeUser={activeUser} issueData={issueData} />
      </VerifyWrapper>
      <ButtonGroup>
        {importSuccess ? (
          <BackLink onClick={() => cancelImport()}>Cancel</BackLink>
        ) : (
          <BackLink
            onClick={() => dispatchIncrementStep({ step: 3, view: 'addIssue' })}
          >
            Edit Issue
          </BackLink>
        )}

        <PrimaryAsyncButton
          disabled={false}
          label="Submit"
          onClick={handleSaveInfo}
        />
      </ButtonGroup>
    </StyledFocusDiv>
  );
};

VerifyIssue.propTypes = {
  activeUser: T.object,
  dispatchClearForm: T.func,
  dispatchIncrementStep: T.func,
  dispatchSaveInfo: T.func,
  importSuccess: T.bool,
  issueData: T.object,
  organizationData: T.object,
  requestBody: T.object,
};

const mapStateToProps = createStructuredSelector({
  /**
   * Reducer : Issues
   */
  issueData: makeSelectIssues('issueData'),
  organizationData: makeSelectIssues('organizationData'),
  requestBody: makeSelectIssuesRequestBody(),
});

function mapDispatchToProps(dispatch) {
  return {
    /**
     * Reducer : Issues
     */
    dispatchClearForm: () => dispatch(clearForm()),
    dispatchIncrementStep: payload => dispatch(incrementStep(payload)),
    dispatchSaveInfo: payload => dispatch(saveInfo(payload)),
    dispatchVerifyInfo: () => dispatch(verifyInfo()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerifyIssue);
