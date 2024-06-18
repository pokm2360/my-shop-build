import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  // 초기상태는 객체로 관리하는게 편함
  cartList: [
    {
      id: "1",
      title: "Arcsaber 11 Pro",
      price: 299000,
      count: 2
    },
    {
      id: "3",
      title: "Aerus Z",
      price: 199000,
      count: 1
    }
  ]
};

// 장바구니 정보를 담을 slice 만들기
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 수량을 변경하는 리듀서 만들기
    // quiz: 전달받은 상품의 id값으로 cartList에서 해당 상품을 찾아 수량을 1씩 증가/감소
    // find로 id찾아서 해당 상품의 count 변경
    increaseCount: (state, action) => {
      const targetCart = state.cartList.find((cart) => {
        return cart.id === action.payload;
        });
        targetCart.count += 1;
      },
    decreaseCount: (state, { payload: id }) => {
      const targetCart = state.cartList.find(cart => cart.id === id);
      targetCart.count -= 1;
      console.log(current(targetCart)); // state 복사본은 툴킷에서 Proxy라는 객체에 담김. 어떤 객체인지 확인할 때는 current()라는 메소드 사용
    },
    // 상품 객체로 넘겨주면 cartList에 아이템을 추가하는 리듀서 만들기
    // 이미 들어있는 상품이면 수량만 증가
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart: (state, { payload: product }) => {
      console.log(product);
      const addCart = state.cartList.find(cart => cart.id === product.id);

      if (addCart) {
        addCart.count += product.count;
      } else {
        state.cartList.push(product);
      };
    },
    // Quiz: 장바구니에서 삭제하는 리듀서 만들기
    removeItemFromCart: (state, { payload: id }) => {
      // 방법1
      const filteredItem = state.cartList.filter(cart => cart.id !== id);
      state.cartList = filteredItem;
      // 방법2
      // const targetIndex = state.cartList.findIndex(cartItem => cartItem.id === id);
      // state.cartList.splice(targetIndex, 1);
    },
  }
});

export const {
  increaseCount,
  decreaseCount,
  addItemToCart,
  removeItemFromCart
} = cartSlice.actions;

export const selectCartList = state => state.cart.cartList;
export const selectCartListCount = state => state.cart.cartList.count;


export default cartSlice.reducer;