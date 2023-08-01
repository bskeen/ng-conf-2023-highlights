describe('shared', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=timercomponent--primary&args=timer;')
  );
  it('should render the component', () => {
    cy.get('time-tracker-timer').should('exist');
  });
});
