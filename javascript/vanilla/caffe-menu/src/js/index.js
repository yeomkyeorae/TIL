import { $ } from './utils/dom.js';
// import { store } from './store/index.js'
import MenuApi from './api/index.js';


function App() {
  // 상태는 앱에서 변하는 데이터 이다. 예를 들어, 메뉴명
  this.menus = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: []
  };
  this.currentCategory = 'espresso';

  this.init = async () => {
    this.menus[this.currentCategory] = await MenuApi.getAllMenuByCategory(this.currentCategory);

    render();
    initEventListeners();
  }

  const render = async () => {
    this.menus[this.currentCategory] = await MenuApi.getAllMenuByCategory(this.currentCategory);

    const template = this.menus[this.currentCategory].map((menu, index) => {
      // data-menu-id : data 식별자 속성. dataset 속성으로 접근 가능. ...dataset.menuId
      return (`
        <li data-menu-id="${menu.id}" class="menu-list-item d-flex items-center py-2">
          <span class="w-100 pl-2 menu-name ${menu.isSoldOut ? "sold-out" : ""}">${menu.name}</span>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
          >
            품절
          </button>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
          >
            수정
          </button>
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
        >
          삭제
        </button>
      </li>`);
    }).join("");

    // insertAdjacentHTML - 선택한 요소의 인접한 부분에 HTML 삽입
    // $("#espresso-menu-list").insertAdjacentHTML("beforeend", menuItemTemplate(espressoMenuName));

    // template 전체를 html 삽입
    $("#menu-list").innerHTML = template;

    updateMenuCount();
  }

  const updateMenuCount = () => {
    const menuCount = this.menus[this.currentCategory].length;
    $(".menu-count").innerText = `총 ${menuCount}개`;
  }

  const addMenuName = async () => {
    const menuName = $("#menu-name").value;

    if (menuName.trim() === "") {
      alert("값을 입력해 주세요!");
      return;
    }

    const duplicatedMenu = this.menus[this.currentCategory].find(menu => menu.name === $("#menu-name").value);
    if (duplicatedMenu) {
      alert("이미 등록된 메뉴가 있습니다.")
      $("#menu-name").value = "";
      return;
    }

    await MenuApi.createMenu(this.currentCategory, menuName);

    render();
    $("#menu-name").value = "";

    // this.menus[this.currentCategory].push({ name: menuName });

    // localStorage store 저장
    // store.setLocalStorage(this.menus);

    // 렌더링
    // render();

    // $("#menu-name").value = '';
  }

  const updateMenuName = async (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const updatedMenuName = prompt("메뉴 이름을 수정해주세요", $menuName.innerText);

    await MenuApi.updateMenu(this.currentCategory, menuId, updatedMenuName);

    // store 상태 업데이트
    // store.setLocalStorage(this.menus);

    render();

    // $menuName.innerText = updatedMenuName;
  }

  const removeMenuName = async (e) => {
    if (confirm("삭제하시겠습니까?")) {
      const menuId = e.target.closest("li").dataset.menuId;

      await MenuApi.deleteMenu(this.currentCategory, menuId);

      // splice: 해당 인덱스 배열 요소 삭제
      // this.menus[this.currentCategory].splice(menuId, 1);
      // store.setLocalStorage(this.menus);

      render();

      // e.target.closest("li").remove();
      // updateMenuCount();
    }
  }

  const soldOutMenu = async (e) => {
    const menuId = e.target.closest("li").dataset.menuId;

    await MenuApi.toggleSoldOutMenu(this.currentCategory, menuId);

    // this.menus[this.currentCategory][menuId].soldOut = !this.menus[this.currentCategory][menuId].soldOut;
    // store.setLocalStorage(this.menus);

    render();
  }

  const changeCategory = (e) => {
    const isCategoryButton = e.target.classList.contains("cafe-category-name");
    if (isCategoryButton) {
      const categoryName = e.target.dataset.categoryName;
      this.currentCategory = categoryName;

      $("#category-title").innerText = `${e.target.innerText} 메뉴 관리`;

      render();
    }
  }

  const initEventListeners = () => {
    $("#menu-list").addEventListener("click", (e) => {
      // 수정
      if (e.target.classList.contains("menu-edit-button")) {
        updateMenuName(e);
        return;
      }
      // 삭제
      if (e.target.classList.contains("menu-remove-button")) {
        removeMenuName(e);
        return;
      }

      if (e.target.classList.contains("menu-sold-out-button")) {
        soldOutMenu(e);
        return;
      }
    });

    // form 태그 자동 전송 방지
    $("#menu-form").addEventListener("submit", (e) => {
      e.preventDefault();
    });

    // 메뉴 추가 by click
    $("#menu-submit-button").addEventListener("click", addMenuName);

    // 메뉴 추가 by enter
    $("#menu-name").addEventListener("keypress", (e) => {
      if (e.key !== 'Enter') {
        return;
      }
      addMenuName();
    });

    $("nav").addEventListener("click", changeCategory);
  }
}

const app = new App();
app.init();