describe('movie-search', () => {
  beforeEach(() => cy.visit('/iframe.html?id=searchcomponent--primary'));
  it('should render the component', () => {
    cy.get('ng-conf-highlights-search').should('exist');
  });
});
