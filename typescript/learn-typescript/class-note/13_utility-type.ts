interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
//     // ...
// }

interface ProductDetail {
    id: number;
    name: string;
    price: number;
}

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// shoppingItem은 Product interface를 그대로 이용할 수 없게 된다.
// 위 ProductDetail interface를 새로 만들어야 될 수도.
// 하지만 ProductDetail은 Product와 중복되는 부분이 많다.
// 이 때 Pick을 사용할 수 있다.
type ShoopingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

// 반대로 Omit 타입을 사용해서 지정된 속성을 제거한 타입을 정의할 수 있다.
interface AddressBook {
    name: string;
    phone: number;
    address: string;
    company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
    name: '정필돈',
    phone: 1012345678,
    company: '정승네트워크'
};

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
// 위 UpdateProduct처럼 optional을 사용할 수도 있지만
// Partial을 사용해 간단히 처리할 수 있다.
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: UpdateProduct) {

}