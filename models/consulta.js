const { expect } = require('@playwright/test');

exports.Consulta = class Consulta {
    /**
     * @param {import('playwright').Page} page 
     */

    constructor(page) {
        this.page = page;
    }

    async acessaPagina() {
        await this.page.goto('https://www.correios.com.br/');
    }

    async consultaCEP(codigo, mensagem) {
        await this.page.getByPlaceholder('Digite um CEP ou um endereço').fill(codigo);
        await this.page.getByPlaceholder('Digite um CEP ou um endereço').press('Enter');

        const page1Promise = this.page.waitForEvent('popup');
        const page1 = await page1Promise;

        await expect(page1.getByText(mensagem)).toBeVisible();
        await page1.waitForTimeout(2000);

        await page1.close();
    }

    async consultaRastreio(codigo, mensagem) {
        await this.page.getByPlaceholder('AA123456789BR ou 000.111.222-33').fill(codigo);
        await this.page.getByPlaceholder('AA123456789BR ou 000.111.222-33').press('Enter');

        const page1Promise = this.page.waitForEvent('popup');
        const page1 = await page1Promise;

        //await expect(page1.getByText(mensagem)).toBeVisible();
        await page1.waitForTimeout(2000);

        await page1.close();

    }
}