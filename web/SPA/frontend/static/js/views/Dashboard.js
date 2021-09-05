import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>대시보드</h1>
            <p>
                SPA 대시보드에 오신 것을 환영합니다!
            </p>
            <p>
                <a href="/posts" data-link>최근 게시글 보기</a>
            </p>
        `;
    }
}