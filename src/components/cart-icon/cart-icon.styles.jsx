import styled from 'styled-components'

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg'

export const ShoppingIcon = styled(ShoppingSvg)`
	width: 44px;
	height: 44px;
`

export const CartIconContainer = styled.div`
	width: 55px;
	height: 55px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

export const ItemCount = styled.span`
	position: absolute;
	font-size: 16px;
	font-weight: bold;
	bottom: 12px;
`
