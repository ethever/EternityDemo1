import * as React from 'react'
import { Navbar, Button, Link, Text } from '@nextui-org/react'

const collapseItems = ['首页', '特色', '开发路线', '合作伙伴', '社区']

function AppBar() {
  return (
    <Navbar
      css={{
        position: 'fixed',
        top: 0,
        background: 'transparent',
      }}
      containerCss={{
        background: 'transparent',
      }}
      disableShadow
      disableBlur
      shouldHideOnScroll
      isCompact
      isBordered
      variant="static"
    >
      <Navbar.Brand>
        <Navbar.Toggle
          css={{
            marginRight: '10px',
          }}
          showIn="xs"
          aria-label="toggle navigation"
        />
        <img style={{ width: '130px' }} src="/images/logo.png" />
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="default">
        <Navbar.Link href="#">首页</Navbar.Link>
        <Navbar.Link isActive href="#">
          特色
        </Navbar.Link>
        <Navbar.Link href="#">开发路线</Navbar.Link>
        <Navbar.Link href="#">合作伙伴</Navbar.Link>
        <Navbar.Link href="#">社区</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto as={Link} href="#" color="primary">
            Connect Wallet
          </Button>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppBar
