import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>설정</h1>
            <p>
                설정 페이지
            </p>
        `;
    }
}