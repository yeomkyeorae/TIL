interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // ...
}

interface ProductDetail {
    id: number;
    name: string;
    price: number;
}

// shoppingItem은 Product interface를 그대로 이용할 수 없게 된다.
// 위 ProductDetail interface를 새로 만들어야 될 수도.
// 하지만 ProductDetail은 Product와 중복되는 부분이 많다.
// 이 때 Pick을 사용할 수 있다.
type ShoopingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}