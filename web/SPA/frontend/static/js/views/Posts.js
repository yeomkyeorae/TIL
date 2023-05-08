import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>게시글</h1>
            <p>
                게시글...
            </p>
        `;
    }
}