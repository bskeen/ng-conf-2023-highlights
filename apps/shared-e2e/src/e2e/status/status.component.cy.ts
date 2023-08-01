describe('shared', () => {
  beforeEach(() => cy.visit('/iframe.html?id=statuscomponent--primary'));
  it('should render the component', () => {
    cy.get('time-tracker-status').should('exist');
  });
});
