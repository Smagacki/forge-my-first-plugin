import ForgeUI, { render, IssuePanel, Text } from '@forge/ui';

const App = () => {
  return (
    <Text>Cześć! To moja pierwsza działająca aplikacja w Forge!</Text>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
