const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("menu"));
  }
}

function App() {
  // 상태는 앱에서 변하는 데이터 이다. 예를 들어, 메뉴명
  this.menus = [];
  this.init = () => {
    if (store.getLocalStorage().length > 0) {
      this.menus = store.getLocalStorage();
    }
    render();
  }

  const render = () => {
    const template = this.menus.map((menu, index) => {
      // data-menu-id : data 식별자 속성. dataset 속성으로 접근 가능. ...dataset.menuId
      return (`
        <li data-menu-id="${index}" class="menu-list-item d-flex items-center py-2">
          <span class="w-100 pl-2 menu-name">${menu.name}</span>
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
    $("#espresso-menu-list").innerHTML = template;

    updateMenuCount();
  }

  const updateMenuCount = () => {
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${menuCount}개`;
  }

  const addMenuName = () => {
    const espressoMenuName = $("#espresso-menu-name").value;

    if (espressoMenuName.trim() === "") {
      alert("값을 입력해 주세요!");
      return;
    }

    this.menus.push({ name: espressoMenuName });

    // localStorage store 저장
    store.setLocalStorage(this.menus);

    render();

    $("#espresso-menu-name").value = '';
  }

  const updateMenuName = (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const updatedMenuName = prompt("메뉴 이름을 수정해주세요", $menuName.innerText);

    this.menus[menuId].name = updatedMenuName;

    // store 상태 업데이트
    store.setLocalStorage(this.menus);

    $menuName.innerText = updatedMenuName;
  }

  const removeMenuName = (e) => {
    if (confirm("삭제하시겠습니까?")) {
      const menuId = e.target.closest("li").dataset.menuId;

      // splice: 해당 인덱스 배열 요소 삭제
      this.menus.splice(menuId, 1);
      store.setLocalStorage(this.menus);

      e.target.closest("li").remove();
      updateMenuCount();
    }
  }

  $("#espresso-menu-list").addEventListener("click", (e) => {
    // 수정
    if (e.target.classList.contains("menu-edit-button")) {
      updateMenuName(e);
    }
    // 삭제
    if (e.target.classList.contains("menu-remove-button")) {
      removeMenuName(e);
    }
  });

  // form 태그 자동 전송 방지
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // 메뉴 추가 by click
  $("#espresso-menu-submit-button").addEventListener("click", addMenuName);

  // 메뉴 추가 by enter
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    addMenuName();
  });
}

const app = new App();
app.init();