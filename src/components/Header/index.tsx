import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const itensFavoritados = useSelector(
    (state: RootReducer) => state.favoritos.itens.length
  )

  const valorTotal = itens.reduce((acc: number, item: { preco: number }) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritados} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
