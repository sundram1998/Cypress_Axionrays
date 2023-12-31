describe("Login and Authentications Flows", function () {
  beforeEach(function () {
    cy.fixture("loginData.json").then((data) => {
      this.data = data;
    });
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });
  it("TestID1_Verify that a user with valid credentials can log in and log out successfully.", function () {
    const jsondata = this.data;
    // To validate the title of the page
    cy.title().should("eq", "Test Login | Practice Test Automation");
    // To Validate the logo of the page
    cy.findByRole("img", { name: "Practice Test Automation" }).should(
      "be.visible"
    );
    // To validate the heading on the page
    cy.findByRole("heading", { name: "Test login" }).should("be.visible");
    // Login
    cy.findByRole("textbox", { name: "Username" }).type(jsondata.userid);
    cy.get("#password").type(jsondata.password);
    cy.findByRole("button", { name: "Submit" }).click();
    // Validating URL
    cy.url().should("include", "logged-in-successfully/");
    cy.contains("Logged In Successfully").should("be.visible");
    cy.contains("Congratulations student. You successfully logged in!").should(
      "be.visible"
    );
    cy.findByRole("link", { name: "Log out" }).click();
  });
  it("TestID2_Verify that incorrect username and password result in login failure.", function () {
    const jsondata = this.data;
    // To validate the title of the page
    cy.title().should("eq", "Test Login | Practice Test Automation");
    // To Validate the logo of the page
    cy.findByRole("img", { name: "Practice Test Automation" }).should(
      "be.visible"
    );
    // To validate the heading on the page
    cy.findByRole("heading", { name: "Test login" }).should("be.visible");
    // Login with wrong username
    cy.findByRole("textbox", { name: "Username" })
      .as("username")
      .type(jsondata.userid1);
    cy.get("#password").type(jsondata.password);
    cy.findByRole("button", { name: "Submit" }).click();
    cy.get("#error").within(() => {
      cy.contains("Your username is invalid!").should("be.visible");
    });
    // Login with wrong password
    cy.get("@username").clear().type(jsondata.userid);
    cy.get("#password").type(jsondata.password1);
    cy.findByRole("button", { name: "Submit" }).click();
    cy.get("#error").within(() => {
      cy.contains("Your password is invalid!").should("be.visible");
    });
  });
  it("TestID3_should lock the account after multiple failed login attempts", () => {
    //Since there is no such practice website I have just written the logic
    for (let i = 0; i < 5; i++) {
      cy.get("[data-testid=username]").type("testuser");
      cy.get("[data-testid=password]").type("wrongpassword");
      cy.get("[data-testid=login-button]").click();
    }
  });
});
