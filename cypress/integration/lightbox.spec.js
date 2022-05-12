

describe('le describe truc', () => {
    it('le componenent ouech ', () => {
      cy.visit('../../lightbox.html')

      cy.contains('Display').click()
      cy.get('h2').contains('Lorem Ipsum')
      
    })
  })

  describe('le scroll machin', () => {
    it('bonjour', () => {
      cy.visit('../../scroll.html')
      
      cy.contains('Scroll').click()
      cy.get('#123456').click()
      
    })
  })

  describe('le hover tag', () => {
    it('bonjour', () => {
      cy.visit('../../tag.html')
      
      cy.contains('See more').trigger('mouseover')
      
      
    })
  })
  describe('le todo list', () => {
    it('bonjour', () => {
      cy.visit('../../tdo.html')
      cy.get('input').click()
      cy.get('input').type('tdo 0')
      cy.get('input').type('tdo 1')
      
      
    })
  })
  
  