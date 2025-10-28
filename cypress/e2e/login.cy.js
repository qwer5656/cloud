describe('Login Page E2E Test', () => {

  beforeEach(() => {
    // 訪問 Vite dev server
    cy.visit('http://localhost:4173/')
  })

  it('顯示空欄位驗證訊息', () => {
    cy.get('button').contains('登入').click()
    cy.get('.error').should('contain.text', '請輸入帳號與密碼')
  })

  it('顯示錯誤帳密訊息', () => {
    cy.get('input[placeholder="帳號"]').type('wronguser')
    cy.get('input[placeholder="密碼"]').type('wrongpass')
    cy.get('button').contains('登入').click()
    cy.get('.error').should('contain.text', '帳號或密碼錯誤')
  })

  it('登入成功', () => {
    cy.get('input[placeholder="帳號"]').type('testuser')
    cy.get('input[placeholder="密碼"]').type('123456')
    
    // stub window.alert
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert')
    })

    cy.get('button').contains('登入').click()

    // 驗證 alert 顯示成功訊息
     cy.location('pathname').should('eq', '/dashboard')
  })

})
