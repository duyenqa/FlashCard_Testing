import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

test.beforeAll((async () => {
    console.log('Chạy trước tất cả test');
}))

test.beforeEach(async ({ page }) => {
    await page.goto('https://learn-writing-english.vercel.app');
});

test.afterEach((async () => {
    console.log('Done all test case');
}))

test.describe('Group: Smoke', () => {
    test('Test run main feature', async ({ page }) => {
        await test.step('Verify sign up successfully', async () => {
            const register = new RegisterPage(page);
            await register.navigateSignUpLink();
            await register.testSignUp("test app", "kimduyen0205@gmail.com", "12345678");
        })
        await test.step('Verify log in successfully', async () => {
            const login = new LoginPage(page);
            await login.testLogIn("kimduyen0205@gmail.com", "12345678");
        })
    })
})