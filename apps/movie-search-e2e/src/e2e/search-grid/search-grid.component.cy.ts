describe('movie-search', () => {
  beforeEach(() => cy.visit('/iframe.html?id=searchgridcomponent--primary'));
  it('should render the component', () => {
    cy.get('ng-conf-highlights-search-grid').should('exist');
  });
});
