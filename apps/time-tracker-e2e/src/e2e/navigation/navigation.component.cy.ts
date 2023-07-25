describe('time-tracker', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navigationcomponent--primary'));
  it('should render the component', () => {
    cy.get('tt-navigation').should('exist');
  });
});
