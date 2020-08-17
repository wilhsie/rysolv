const { createActivity, getActivity } = require('./activity');

const {
  checkDuplicateIssue,
  closeIssue,
  createIssue,
  deleteIssue,
  downvoteIssue,
  getIssues,
  getOneIssue,
  searchIssues,
  submitAccountPaymentIssue,
  transformIssue,
  updateIssueArray,
  upvoteIssue,
} = require('./issues');
const {
  checkDuplicateUserEmail,
  checkDuplicateUsername,
  createUser,
  getOneUser,
  getUsers,
  getUserWatchList,
  getWatchList,
  searchUsers,
  submitAccountPaymentUser,
  transformUser,
  updateUserArray,
} = require('./users');
const { createComment, getComments, getIssueComments } = require('./comments');
const {
  checkDuplicatePullRequest,
  createPullRequest,
  deletePullRequest,
  getOnePullRequest,
  getPullRequestList,
  getPullRequests,
  getUserPullRequests,
} = require('./pullRequests');
const {
  checkDuplicateOrganization,
  createOrganization,
  deleteOrganization,
  getOneOrganization,
  getOrganizations,
  submitAccountPaymentOrganization,
  getOrganizationsWhere,
  searchOrganizations,
  transformOrganization,
  updateOrganizationArray,
} = require('./organizations');
const { createTables, dropAllTables, printTables } = require('./tables');
const { toggleWatching } = require('./watching');
const { createWithdrawal, transformUserBalance } = require('./withdrawal');

module.exports = {
  checkDuplicateIssue,
  checkDuplicateOrganization,
  checkDuplicatePullRequest,
  checkDuplicateUserEmail,
  checkDuplicateUsername,
  closeIssue,
  createActivity,
  createComment,
  createIssue,
  createOrganization,
  createPullRequest,
  createTables,
  createUser,
  createWithdrawal,
  deleteIssue,
  deleteOrganization,
  deletePullRequest,
  downvoteIssue,
  dropAllTables,
  getActivity,
  getComments,
  getIssueComments,
  getIssues,
  getOneIssue,
  getOneOrganization,
  getOnePullRequest,
  getOneUser,
  getOrganizations,
  getOrganizationsWhere,
  getPullRequestList,
  getPullRequests,
  getUserPullRequests,
  getUsers,
  getUserWatchList,
  getWatchList,
  printTables,
  searchIssues,
  searchOrganizations,
  searchUsers,
  submitAccountPaymentIssue,
  submitAccountPaymentOrganization,
  submitAccountPaymentUser,
  toggleWatching,
  transformIssue,
  transformOrganization,
  transformUser,
  transformUserBalance,
  updateIssueArray,
  updateOrganizationArray,
  updateUserArray,
  upvoteIssue,
};
