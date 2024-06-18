import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import styled, { } from "styled-components";

// 스타일 확장(내가 원하는 스타일 지정)
// styled(Button)` 

// `;

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      {/* 헤더 영역: 상단 네비게이션 바*/}
        <header>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#" onClick={() => navigate('/')}>시장</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate('/')}>홈</Nav.Link>
                <Nav.Link onClick={() => navigate('/cart')}>장바구니</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

      {/* 자식 컴포넌트 렌더링 될 위치 */}
      <Outlet />

      <footer>
        <p className="py-5 mb-0 bg-dark text-white">
          &copy; KKH kh Kim. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;