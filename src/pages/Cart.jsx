import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, removeItemFromCart, selectCartList } from "../features/cart/cartSlice";

function Cart() {
  const cartList = useSelector(selectCartList);
  console.log(cartList);
  const dispatch = useDispatch();

  const formatter = new Intl.NumberFormat('ko-KR');

  return (
    <>
      {/* 표 레이아웃 만들기 */}
      <Table hover>
      <thead>
        <tr>
          <th>No</th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
      {cartList.map((cartListItem, index) => 
        <tr key={cartListItem.id}>
          <td>{index+1}</td>
          <td>{cartListItem.title}</td>
          <td>
            <button onClick={() => dispatch(decreaseCount(cartListItem.id))}>
              -
            </button>
            {cartListItem.count}
            <button onClick={() => dispatch(increaseCount(cartListItem.id))}>
              +
            </button>
          </td>
          <td>{formatter.format(cartListItem.price * cartListItem.count)}원</td>
          <td>
            <button onClick={() => dispatch(removeItemFromCart(cartListItem.id))}>
              🗑
            </button>
          </td>
        </tr>
      )}
        <tr>
          <th>합계</th>
          <td></td>
          <td></td>
          <th>{formatter.format(cartList.reduce((prev, cartListItem) => {
            console.log(prev); // 초기값이 없으면 배열 인덱스 0이 초기값으로 사용됨
            return prev + (cartListItem.price * cartListItem.count);
          }, 0))}원 
          </th>
          <td></td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};

export default Cart;