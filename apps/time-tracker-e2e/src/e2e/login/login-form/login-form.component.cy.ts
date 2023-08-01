describe('time-tracker', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logincomponent--primary'));
  it('should render the component', () => {
    cy.get('tt-login').should('exist');
  });
});
