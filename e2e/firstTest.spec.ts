describe('Login flow test', () => {
    it('should have login screen', async () => {
        // @ts-ignore
        await expect(element(by.id('loginView'))).toBeVisible();
    });

    it('should tap register button', async () => {
        await element(by.id('registerButton1')).tap();
    });

    test('should tap forgot password button', async () => {
        await element(by.id('forgotButton')).tap();
    });

    test('should fill login form', async () => {
        await element(by.id('emailInput')).typeText('dinukad@gmail.com');
        await element(by.id('passwordInput')).typeText('test1245');
        await element(by.id('loginButton1')).tap();
    });
});