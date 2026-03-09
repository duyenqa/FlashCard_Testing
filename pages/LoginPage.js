class LoginPage {
    constructor(page){
        this.page = page;
    }

    async testLogIn(email, password){
        const emailField = await this.page.waitForSelector('//input[@placeholder="your_email@gmail.com"]', { state: 'visible' });
        await emailField.fill(email);
        const passwordField = await this.page.waitForSelector('//input[@type="password"]', { state: 'visible' });
        await passwordField.fill(password);
        const loginButton = await this.page.waitForSelector("//button[text()='Đăng Nhập']", { state: 'visible' });
        await loginButton.click();
        await this.page.waitForTimeout(5000);
    }
}
export default LoginPage;