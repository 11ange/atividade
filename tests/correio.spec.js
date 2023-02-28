import { test, expect } from '@playwright/test';
const { Consulta } = require('../models/consulta');

// test.beforeEach(async ({ page }) => {
//     await page.goto('https://www.correios.com.br/');
// });

const cepNOk = '80700000';
const msgCEPNOk = 'Não há dados a serem exibidos';
const cepOk = '01013-001';
const msgCEPOk = 'Rua Quinze de Novembro - lado ímpar';
const codRastreio = 'SS987654321BR';
const msgRastreio = '';


test.describe('Consultas site dos correios', () => {
    test('Consulta CEP inválido', async ({ page }) => {
        const consulta = new Consulta(page);
        await consulta.acessaPagina();
        await consulta.consultaCEP(cepNOk, msgCEPNOk);
    });

    test('Consulta CEP Válido', async ({ page }) => {
        const consulta = new Consulta(page);
        await consulta.acessaPagina();
        await consulta.consultaCEP(cepOk, msgCEPOk);
    });

    test('Consulta Código de Rastreio inválido', async ({ page }) => {
        const consulta = new Consulta(page);
        await consulta.acessaPagina();
        await consulta.consultaRastreio(codRastreio, msgRastreio);
    });
})
