import markup from '_local-storybookcore/markup';

import contributing01 from '_local-docs/contributing/01-high-level-overview.md';
import contributing02 from '_local-docs/contributing/02-quick-start.md';
import contributing03 from '_local-docs/contributing/03-team-organization.md';
import contributing04 from '_local-docs/contributing/04-developing-components.md';
import contributing05 from '_local-docs/contributing/05-storybook.md';
import contributing06 from '_local-docs/contributing/06-issue-tracking.md';
import contributing07 from '_local-docs/contributing/07-commit-message-format.md';
import contributing08 from '_local-docs/contributing/08-merge-requests.md';
import contributing09 from '_local-docs/contributing/09-versioning-and-releasing.md';
import contributing10 from '_local-docs/contributing/10-updating-dependencies.md';

export default {
  title: 'Docs/Contributing',
};

export const ArchitecturalOverview = () => markup(contributing01);
export const QuickStart = () => markup(contributing02);
export const TeamOrganization = () => markup(contributing03);
export const DevelopingComponents = () => markup(contributing04);
export const Storybook = () => markup(contributing05);
export const IssueTracking = () => markup(contributing06);
export const CommitMessageFormat = () => markup(contributing07);
export const MergeRequests = () => markup(contributing08);
export const VersioningAndReleasing = () => markup(contributing09);
export const UpdatingDependencies = () => markup(contributing10);
