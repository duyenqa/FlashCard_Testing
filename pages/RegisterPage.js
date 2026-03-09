class RegisterPage{
    constructor(page){
        this.page = page;
    }

    async navigateSignUpLink(){
        const signUpLink = await this.page.waitForSelector('//div[@class="link"]//a[1]', { state: 'visible' });
        await signUpLink.click();
    }

    async testSignUp(username, email, password){
        const usernameField = await this.page.waitForSelector('//input[@placeholder="meocon123"]', { state: 'visible' });
        await usernameField.fill(username);
        const emailField = await this.page.waitForSelector('//input[@placeholder="your_email@gmail.com"]', { state: 'visible' });
        await emailField.fill(email);
        const passwordField = await this.page.waitForSelector('//input[@type="password"]', { state: 'visible' });
        await passwordField.fill(password);
        const signUpButton = await this.page.waitForSelector('//button[text()="Đăng Ký"]', { state: 'visible' });
        await signUpButton.click();
        await this.page.waitForTimeout(3000);
    }
}
export default RegisterPage;